/**
 * Read live VEXcode GO project from Blockly workspace / Monaco editor.
 */
(function () {
  'use strict';

  var MAX_XML_CHARS = 16000;
  var MAX_CODE_CHARS = 16000;

  function getBlockly() {
    return window.Blockly || null;
  }

  function resolveWorkspace() {
    var Blockly = getBlockly();
    if (!Blockly) return null;
    try {
      if (typeof Blockly.getMainWorkspace === 'function') {
        var ws = Blockly.getMainWorkspace();
        if (ws && !ws.isDisposed()) return ws;
      }
      if (Blockly.mainWorkspace && !Blockly.mainWorkspace.isDisposed()) {
        return Blockly.mainWorkspace;
      }
    } catch (e) {}
    return null;
  }

  function detectEditorMode(ws) {
    if (document.querySelector('.tab_content.active.is_blockly')) return 'blocks';
    if (document.querySelector('.tab_content.active.is_text, .tab_content.active[data-mode="Text"]')) {
      return 'text';
    }
    var monacoText = getMonacoText();
    if (monacoText.trim()) return 'text';
    if (ws && ws.getAllBlocks(false).length > 0) return 'blocks';
    return 'unknown';
  }

  function summarizeBlock(block) {
    if (!block) return '';
    try {
      if (block.isDisposed && block.isDisposed()) return '';
    } catch (e) {}
    var parts = [block.type];
    try {
      block.inputList.forEach(function (input) {
        input.fieldRow.forEach(function (field) {
          if (!field.name || typeof field.getValue !== 'function') return;
          var val = field.getValue();
          if (val !== null && val !== undefined && val !== '') {
            parts.push(field.name + '=' + String(val));
          }
        });
        if (input.connection && input.connection.targetBlock) {
          var child = input.connection.targetBlock();
          if (child && child.type) parts.push('[' + input.name + '→' + child.type + ']');
        }
      });
    } catch (e) {}
    return parts.join(' ');
  }

  function getBlockStacks(ws) {
    var stacks = [];
    if (!ws || typeof ws.getTopBlocks !== 'function') return stacks;

    var tops = ws.getTopBlocks(true);
    if (!tops.length) tops = ws.getTopBlocks(false);

    tops.forEach(function (top, idx) {
      var lines = [];
      var block = top;
      var guard = 0;
      while (block && guard < 100) {
        var line = summarizeBlock(block);
        if (line) lines.push(line);
        block = block.getNextBlock && block.getNextBlock();
        guard += 1;
      }
      if (lines.length) stacks.push({ index: idx + 1, blocks: lines });
    });
    return stacks;
  }

  function getAllBlockTypes(ws) {
    if (!ws || !ws.getAllBlocks) return [];
    var types = {};
    ws.getAllBlocks(false).forEach(function (b) {
      if (!b || (b.isDisposed && b.isDisposed())) return;
      types[b.type] = (types[b.type] || 0) + 1;
    });
    return Object.keys(types).map(function (t) {
      return t + '×' + types[t];
    });
  }

  function getWorkspaceXml(ws) {
    var Blockly = getBlockly();
    if (!ws || !Blockly || !Blockly.Xml) return '';
    try {
      var dom = Blockly.Xml.workspaceToDom(ws);
      var text = Blockly.Xml.domToText ? Blockly.Xml.domToText(dom) : '';
      if (!text && dom && dom.outerHTML) text = dom.outerHTML;
      return text;
    } catch (e) {
      return '';
    }
  }

  function getGeneratedPython(ws) {
    var Blockly = getBlockly();
    if (!ws || !Blockly || !Blockly.Python) return '';
    try {
      if (typeof Blockly.Python.init === 'function') Blockly.Python.init(ws);
      if (typeof Blockly.Python.workspaceToCode === 'function') {
        return Blockly.Python.workspaceToCode(ws) || '';
      }
    } catch (e) {
      return '';
    }
    return '';
  }

  function getMonacoTextFromApi() {
    if (typeof window.monaco === 'undefined' || !window.monaco.editor) return '';
    try {
      var models = window.monaco.editor.getModels();
      if (!models || !models.length) return '';
      var best = '';
      models.forEach(function (m) {
        var v = m.getValue() || '';
        if (v.length > best.length) best = v;
      });
      return best;
    } catch (e) {
      return '';
    }
  }

  function getMonacoTextFromDom() {
    var editor = document.querySelector('.monaco-editor');
    if (!editor) return '';
    var lines = editor.querySelectorAll('.view-line');
    if (!lines.length) return '';
    var out = [];
    lines.forEach(function (line) {
      out.push(line.textContent || '');
    });
    return out.join('\n');
  }

  function getMonacoText() {
    var api = getMonacoTextFromApi();
    if (api.trim()) return api;
    return getMonacoTextFromDom();
  }

  function truncate(text, max) {
    if (!text) return '';
    if (text.length <= max) return text;
    return text.slice(0, max) + '\n… [truncated]';
  }

  function getProjectName() {
    var el = document.querySelector('.project_name_ticker');
    return el ? (el.textContent || '').trim() || 'VEXcode Project' : 'VEXcode Project';
  }

  function scanDeviceConfig(ws) {
    var devices = [];
    var seen = {};

    function add(label) {
      var t = (label || '').trim();
      if (!t || seen[t]) return;
      seen[t] = true;
      devices.push(t);
    }

    document.querySelectorAll('#robot_config_cards .rc_card, .robot_config_cards .rc_card').forEach(
      function (card) {
        var nameEl = card.querySelector('.device_name, .card_title, [class*="device_name"]');
        var portEl = card.querySelector('.port_tab.curr .num, .device_portnum');
        var name = nameEl ? (nameEl.textContent || '').trim() : '';
        var port = portEl ? (portEl.textContent || '').trim() : '';
        if (name) add(port ? name + ' (port ' + port + ')' : name);
      }
    );

    document.querySelectorAll(
      '.sensor_table_container .device_label, .device_label, [class*="device_name"], [data-device-name]'
    ).forEach(function (el) {
      add(el.textContent || el.getAttribute('data-device-name'));
    });

    document.querySelectorAll('.vexgo-classroom-body tr, #brain_info tr, .device_row').forEach(
      function (row) {
        var cells = row.querySelectorAll('td, th, span');
        if (cells.length >= 2) {
          add((cells[0].textContent || '') + ' · ' + (cells[1].textContent || ''));
        }
      }
    );

    try {
      if (window.appState && window.appState.robotConfig && window.appState.robotConfig.devices) {
        var list = window.appState.robotConfig.devices;
        if (Array.isArray(list)) {
          list.forEach(function (d) {
            if (!d) return;
            var name = d.deviceType || d.type || d.name || '';
            var port = d.port !== undefined ? d.port : d.portIndex;
            if (name) add(port !== undefined ? name + ' (port ' + port + ')' : name);
          });
        }
      }
    } catch (e) {}

    if (ws && ws.getAllBlocks) {
      ws.getAllBlocks(false).forEach(function (b) {
        if (!b || !b.type) return;
        var t = b.type;
        if (t.indexOf('eye') !== -1) add('Eye Sensor (blocks)');
        if (t.indexOf('bumper') !== -1) add('LED Bumper (blocks)');
        if (t.indexOf('motor') !== -1) add('Motor (blocks)');
        if (t.indexOf('magnet') !== -1) add('Magnet (blocks)');
      });
    }

    return devices;
  }

  function getBrainStatus() {
    var info = document.getElementById('brain_info');
    if (!info) return { connected: false, label: 'Unknown' };
    return {
      connected: info.classList.contains('active'),
      label: info.classList.contains('active') ? 'Connected' : 'Not connected',
    };
  }

  function snapshot() {
    var ws = resolveWorkspace();
    var mode = detectEditorMode(ws);
    var stacks = ws ? getBlockStacks(ws) : [];
    var allBlocks = ws && ws.getAllBlocks ? ws.getAllBlocks(false) : [];
    var blockCount = allBlocks.length;
    var blockTypes = ws ? getAllBlockTypes(ws) : [];
    var xml = ws ? getWorkspaceXml(ws) : '';
    var blockPython = ws ? getGeneratedPython(ws) : '';
    var textCode =
      window.VEXGOCodeEditor && typeof window.VEXGOCodeEditor.getEditorCode === 'function'
        ? window.VEXGOCodeEditor.getEditorCode()
        : getMonacoText();
    if (!textCode.trim()) textCode = getMonacoText();

    var code = '';
    if (mode === 'text' && textCode.trim()) code = textCode;
    else if (mode === 'blocks' && blockPython.trim()) code = blockPython;
    else code = textCode.trim() || blockPython || '';

    var python = code;
    var isEmpty = blockCount === 0 && !code.trim() && !xml.trim();

    return {
      capturedAt: Date.now(),
      projectName: getProjectName(),
      editorMode: mode,
      blockCount: blockCount,
      blockTypes: blockTypes,
      stacks: stacks,
      blockLines: stacks.map(function (s) {
        return 'Stack ' + s.index + ': ' + s.blocks.join(' → ');
      }),
      xml: truncate(xml, MAX_XML_CHARS),
      python: truncate(code, MAX_CODE_CHARS),
      textCode: truncate(textCode, MAX_CODE_CHARS),
      blockPython: truncate(blockPython, MAX_CODE_CHARS),
      devices: scanDeviceConfig(ws),
      brain: getBrainStatus(),
      hasWorkspace: !!ws,
      isEmpty: isEmpty,
      readIssues: isEmpty
        ? ['Workspace has no blocks or code yet']
        : !ws && mode === 'blocks'
          ? ['Blockly chưa sẵn sàng — mở tab Blocks và đợi project load']
          : [],
    };
  }

  function formatContextForPrompt(ctx) {
    if (!ctx) ctx = snapshot();
    var parts = [];
    parts.push('=== VEXcode GO project snapshot ===');
    parts.push('Project: ' + ctx.projectName);
    parts.push('Editor mode: ' + ctx.editorMode);
    parts.push('Brain: ' + ctx.brain.label);
    if (ctx.devices.length) {
      parts.push('Devices / ports (' + ctx.devices.length + '): ' + ctx.devices.join(', '));
    } else {
      parts.push('Devices: (none detected in UI — user may need Devices tab)');
    }
    if (ctx.textCode && ctx.textCode.trim() && ctx.textCode !== ctx.python) {
      parts.push('--- Text editor (Monaco) ---');
      parts.push(ctx.textCode);
    }
    if (ctx.blockPython && ctx.blockPython.trim() && ctx.blockPython !== ctx.python) {
      parts.push('--- Blockly-generated Python ---');
      parts.push(ctx.blockPython);
    }
    if (ctx.blockTypes.length) parts.push('Block types: ' + ctx.blockTypes.join(', '));
    if (ctx.blockLines.length) {
      parts.push('Block stacks (' + ctx.blockCount + ' blocks total):');
      ctx.blockLines.forEach(function (line) {
        parts.push('  ' + line);
      });
    }
    if (ctx.python) {
      parts.push('--- Generated / editor code ---');
      parts.push(ctx.python);
    }
    if (ctx.xml && ctx.editorMode === 'blocks') {
      parts.push('--- Blockly XML (partial) ---');
      parts.push(ctx.xml);
    }
    if (ctx.readIssues && ctx.readIssues.length) {
      parts.push('Read issues: ' + ctx.readIssues.join('; '));
    }
    return parts.join('\n');
  }

  function buildGeminiUserPrompt(mode, userMessage, ctx) {
    if (!ctx) ctx = snapshot();
    var header =
      mode === 'edit'
        ? 'User wants to EDIT their VEX GO program. Use the snapshot below — quote real block types and code.'
        : mode === 'agent'
          ? 'User wants an AGENT plan for their VEX GO project. Use the snapshot — list concrete steps referencing their blocks/code/devices.'
          : 'User question about their VEX GO project. Answer using ONLY the snapshot (their real program).';

    return header + '\n\n' + formatContextForPrompt(ctx) + '\n\n--- User message ---\n' + userMessage;
  }

  function getSystemPrompt(mode) {
    if (mode === 'edit') {
      return (
        'You are a VEXcode GO programming mentor. The user message includes a FULL project snapshot (block stacks, Python, XML, devices, brain). ' +
        'You MUST reference their actual blocks, devices, and code. ' +
        'When the user wants code changes: (1) include ONE ```python block for Text mode; (2) when they mention blocks/Scratch or editorMode is blocks, also include ONE ```xml block with VEX GO block types (go_events_when_started, go_control_forever, go_control_if_then, go_sensing_eye_*, go_operator_and_or, field COLORS=red, statement SUBSTACK). ' +
        'If workspace is empty, say so. Reply in Vietnamese if the user writes in Vietnamese, otherwise English. ' +
        'Use markdown: **bold**, bullet lists, and ```python fences for runnable code.'
      );
    }
    if (mode === 'agent') {
      return (
        'You are a VEX GO agent planner. The user message includes a FULL project snapshot (devices, blocks, code). ' +
        'Output a numbered plan (5–10 steps) referencing their real stacks, devices, ports, and brain status. ' +
        'If the task needs code, end with ```python and, for Scratch users, a ```xml Blockly snippet (go_* block types). ' +
        'Prefix each step with [step N]. End with [done]. Vietnamese if user uses Vietnamese.'
      );
    }
    return (
      'You are a VEXcode GO assistant. The user message includes their LIVE project snapshot — treat it as ground truth. ' +
      'Answer questions about their blocks, code, devices, and brain using that data. Never invent blocks they do not have. ' +
      'Vietnamese if user uses Vietnamese. Use **bold** and ``` code blocks when showing code.'
    );
  }

  function wantsEyeRed(q) {
    var s = (q || '').toLowerCase();
    var hasEye = s.indexOf('mắt') !== -1 || s.indexOf('eye') !== -1;
    var hasRed = s.indexOf('đỏ') !== -1 || s.indexOf('red') !== -1 || s.indexOf('mau do') !== -1;
    var wantsCode =
      s.indexOf('code') !== -1 ||
      s.indexOf('viết') !== -1 ||
      s.indexOf('viet') !== -1 ||
      s.indexOf('block') !== -1 ||
      s.indexOf('lập trình') !== -1;
    return hasEye && hasRed && (wantsCode || s.indexOf('thấy') !== -1 || s.indexOf('detect') !== -1);
  }

  function assistDriveUntilRedStop(ctx) {
    var py =
      window.VEXGOBlocklyEditor && window.VEXGOBlocklyEditor.pythonDriveUntilRedStop
        ? window.VEXGOBlocklyEditor.pythonDriveUntilRedStop()
        : '';
    var lines = [];
    lines.push('**Di chuyển tới khi Eye thấy đỏ → dừng xe → LED Bumper đỏ**\n');
    lines.push('**Blocks (Scratch):** when started → repeat until (Eye thấy vật **and** màu đỏ) → drive forward → stop → set bumper red.\n');
    if (py) {
      lines.push('**Text (Python):**\n```python\n' + py + '```');
    }
    lines.push('\nBật checkbox **Ghi lên Blocks** và **Ghi lên Text** trong Edit/Agent, rồi gửi lại nếu chưa thấy khối trên màn hình.');
    return lines.join('\n');
  }

  function assistEyeDetectRed(ctx) {
    var mode = ctx && ctx.editorMode ? ctx.editorMode : 'blocks';
    var lines = [];
    lines.push('**Mắt (Eye Sensor) phát hiện màu đỏ — VEX GO**\n');
    lines.push('Cấu hình: tab **Devices** → gắn **Eye Sensor** vào port (thường port 1–4).\n');

    if (mode === 'text') {
      lines.push('**Text (Python)** — thêm vào `when_started` của bạn:\n');
      lines.push(
        '```python\n' +
          'def when_started1():\n' +
          '    global myVariable\n' +
          '    eye.set_range(FAR)\n' +
          '    eye.set_light(ON)\n' +
          '    while True:\n' +
          '        if eye.is_object_detected() and eye.is_color_detected(RED):\n' +
          '            print("Eye thấy vật màu đỏ!")\n' +
          '            # Ví dụ: đổi LED bumper hoặc chạy robot\n' +
          '            # bumper.set_color(RED)\n' +
          '        wait(50, MSEC)\n' +
          '```'
      );
    } else {
      lines.push('**Blocks:**\n');
      lines.push('1. **when started**');
      lines.push('2. **forever**');
      lines.push('3. **if** + **and**:');
      lines.push('   • **Eye found object?** = true');
      lines.push('   • **Eye detects color** → chọn **red**');
      lines.push('4. Trong nhánh **if**: hành động (drive, print, LED Bumper…)');
      lines.push('5. Trong **else**: **wait** 50 ms\n');
      lines.push('Block types: `go_sensing_eye_found_object`, `go_sensing_eye_detect` (COLORS=red)');
    }

    if (ctx && ctx.python && ctx.python.trim()) {
      lines.push('\n**Code hiện tại trên màn hình:**\n```\n' + ctx.python.slice(0, 2500) + '\n```');
    }
    lines.push(
      '\n**Chạy thử:** đặt vật đỏ trước Eye (ánh sáng đủ), **Connect Brain**, bấm **Run**. Mở icon **Eye** trên toolbar để xem **Detect Red?**.'
    );
    return lines.join('\n');
  }

  function localAssist(question, ctx, mode) {
    if (!ctx) ctx = snapshot();
    var q = question || '';
    var ql = q.toLowerCase();

    if (ql.indexOf('test') !== -1 || ql.indexOf('phản hồi') !== -1 || ql === 'ping' || ql === 'ok') {
      var model =
        window.VEXGOGemini && window.VEXGOGemini.getPreferredModel
          ? window.VEXGOGemini.getPreferredModel()
          : 'auto';
      return (
        '**Offline OK** — app đọc được project.\n\n' +
        '• Project: **' +
        ctx.projectName +
        '** · mode **' +
        ctx.editorMode +
        '** · ' +
        ctx.blockCount +
        ' blocks\n' +
        (ctx.python ? '• Có code trên màn hình (' + ctx.python.length + ' ký tự)\n' : '') +
        '• Model đang chọn: **' +
        model +
        '**\n\n' +
        'Nếu Gemini báo quota: ⚙ Cài đặt → chọn **gemini-2.5-flash** (API paid) → **Test kết nối**.'
      );
    }

    if (wantsEyeRed(q)) return assistEyeDetectRed(ctx);

    if (
      window.VEXGOBlocklyEditor &&
      typeof window.VEXGOBlocklyEditor.wantsDriveUntilRedStop === 'function' &&
      window.VEXGOBlocklyEditor.wantsDriveUntilRedStop(q)
    ) {
      return assistDriveUntilRedStop(ctx);
    }

    if (ql.indexOf('bumper') !== -1 || ql.indexOf('led') !== -1) {
      return (
        '**LED Bumper:** toolbar icon LED Bumper hoặc blocks Drive. Xanh = nhấn, đỏ = nhả.\n' +
        (ctx.devices.length ? 'Devices: ' + ctx.devices.join(', ') : 'Kiểm tra tab Devices.')
      );
    }

    return answerFromContext(question, ctx);
  }

  function answerFromContext(question, ctx) {
    if (!ctx) ctx = snapshot();
    var q = (question || '').toLowerCase();

    if (ctx.isEmpty) {
      return (
        'Workspace trống — chưa có block hoặc code. Thêm hat block "when started" hoặc chuyển sang Text mode, rồi hỏi lại.'
      );
    }

    if (q.indexOf('how many') !== -1 && q.indexOf('block') !== -1) {
      return 'Dự án có **' + ctx.blockCount + '** block, chế độ **' + ctx.editorMode + '**.';
    }

    if (q.indexOf('device') !== -1 || q.indexOf('port') !== -1) {
      if (ctx.devices.length) return 'Thiết bị: **' + ctx.devices.join('**, **') + '**.';
      return 'Chưa thấy thiết bị trong config — mở tab Devices.';
    }

    if (q.indexOf('brain') !== -1 || q.indexOf('connect') !== -1) {
      return 'Brain: **' + ctx.brain.label + '**.';
    }

    if (q.indexOf('code') !== -1 || q.indexOf('python') !== -1 || q.indexOf('show') !== -1) {
      if (ctx.python) {
        return (
          'Code trên màn hình:\n\n```\n' +
          ctx.python.slice(0, 4000) +
          (ctx.python.length > 4000 ? '\n…' : '') +
          '\n```'
        );
      }
    }

    if (ctx.blockLines.length && (q.indexOf('block') !== -1 || q.indexOf('stack') !== -1)) {
      return ctx.blockLines.map(function (l) {
        return '• ' + l;
      }).join('\n');
    }

    if (ctx.python && ctx.python.trim()) {
      return (
        'Đã đọc **' +
        ctx.projectName +
        '** (Text, ' +
        ctx.python.length +
        ' ký tự code).\n\n```\n' +
        ctx.python.slice(0, 2000) +
        '\n```\n\nGemini lỗi? ⚙ chọn model **gemini-2.5-flash** nếu API trả phí.'
      );
    }

    return (
      'Đã đọc **' +
      ctx.projectName +
      '** (' +
      ctx.blockCount +
      ' blocks, ' +
      ctx.editorMode +
      ').\n\n' +
      (ctx.blockLines.slice(0, 6).map(function (l) {
        return '• ' + l;
      }).join('\n') || '(chưa có stack)') +
      '\n\n⚙ Cài đặt: chọn **gemini-2.5-flash** + Test kết nối (API paid).'
    );
  }

  window.VEXGOProjectContext = {
    snapshot: snapshot,
    formatContextForPrompt: formatContextForPrompt,
    buildGeminiUserPrompt: buildGeminiUserPrompt,
    getSystemPrompt: getSystemPrompt,
    answerFromContext: answerFromContext,
    localAssist: localAssist,
    refresh: snapshot,
  };
})();
