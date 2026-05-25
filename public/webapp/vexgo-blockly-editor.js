/**
 * Apply Blockly (Scratch-style) stacks to VEXcode GO workspace.
 * Uses window.webapp (main.bundle exports) when available.
 */
(function () {
  'use strict';

  var MAX_WAIT_MS = 20000;
  var RETRY_INTERVAL_MS = 200;

  function getWebapp() {
    return typeof window.webapp !== 'undefined' ? window.webapp : null;
  }

  function getBlockly() {
    var w = getWebapp();
    if (w && w.BlocklyAccess && w.BlocklyAccess.Blockly) {
      return w.BlocklyAccess.Blockly;
    }
    return window.Blockly || null;
  }

  function workspaceAlive(ws) {
    return ws && typeof ws.isDisposed === 'function' && !ws.isDisposed();
  }

  function getControllerWorkspace() {
    var w = getWebapp();
    if (!w || !w.BlocklyController || typeof w.BlocklyController.getCurrentMainController !== 'function') {
      return null;
    }
    try {
      var ctrl = w.BlocklyController.getCurrentMainController();
      if (ctrl && workspaceAlive(ctrl.blocklyWorkspace)) {
        return ctrl.blocklyWorkspace;
      }
    } catch (e) {}
    return null;
  }

  function getAppMode() {
    var w = getWebapp();
    if (!w || !w.appState || typeof w.appState.getAppState !== 'function') return null;
    try {
      return w.appState.getAppState().mode;
    } catch (e) {
      return null;
    }
  }

  function isProjectTextMode() {
    var w = getWebapp();
    if (!w || !w.projectManager || !w.projectManager.currentProject) return false;
    try {
      return w.projectManager.currentProject.mode === 'Text';
    } catch (e) {
      return false;
    }
  }

  function getWorkspace() {
    var ws = getControllerWorkspace();
    if (ws) return ws;

    var Blockly = getBlockly();
    if (!Blockly) return null;

    try {
      if (typeof Blockly.getMainWorkspace === 'function') {
        var main = Blockly.getMainWorkspace();
        if (workspaceAlive(main)) return main;
      }
      if (workspaceAlive(Blockly.mainWorkspace)) return Blockly.mainWorkspace;
      if (typeof Blockly.Workspace !== 'undefined' && typeof Blockly.Workspace.getAll === 'function') {
        var all = Blockly.Workspace.getAll();
        for (var i = all.length - 1; i >= 0; i--) {
          if (workspaceAlive(all[i]) && all[i].rendered) return all[i];
        }
        for (var j = all.length - 1; j >= 0; j--) {
          if (workspaceAlive(all[j])) return all[j];
        }
      }
    } catch (e2) {}
    return null;
  }

  function clickCodeTabBlocksToggle() {
    var imgs = document.querySelectorAll(
      '.tabbed_header img[src*="tabright_text"], .tabbed_header img[src*="tabright_block"]'
    );
    for (var i = 0; i < imgs.length; i++) {
      var src = imgs[i].getAttribute('src') || '';
      if (src.indexOf('tabright_text') !== -1) {
        var tabBtn = imgs[i].closest('.tab_btn');
        if (tabBtn) {
          tabBtn.click();
          return true;
        }
      }
    }

    var codeTabs = document.querySelectorAll('.tabbed_header .tab_btn');
    for (var t = 0; t < codeTabs.length; t++) {
      var nameEl = codeTabs[t].querySelector('.name');
      var label = (nameEl && nameEl.textContent) || codeTabs[t].textContent || '';
      if (/code/i.test(label)) {
        codeTabs[t].click();
        return true;
      }
    }
    return false;
  }

  function switchToBlocksMode() {
    if (getAppMode() === 'Blocks' && (getWorkspace() || document.querySelector('.blocklySvg'))) {
      return Promise.resolve(true);
    }

    var w = getWebapp();
    var switched = false;

    if (w && w.appState && typeof w.appState.setAppState === 'function') {
      try {
        var p = w.appState.setAppState({ mode: 'Blocks' });
        if (p && typeof p.then === 'function') {
          return p
            .then(function () {
              clickCodeTabBlocksToggle();
              return true;
            })
            .catch(function () {
              clickCodeTabBlocksToggle();
              return false;
            });
        }
        switched = true;
      } catch (e) {}
    }

    if (!switched) {
      clickCodeTabBlocksToggle();
    }

    return Promise.resolve(switched || clickCodeTabBlocksToggle());
  }

  function waitForWorkspace(maxMs, cb) {
    var start = Date.now();

    function poll() {
      var ws = getWorkspace();
      var hasSvg = !!document.querySelector('.blocklySvg');
      var ready = ws && (hasSvg || ws.rendered);
      if (ready || Date.now() - start > maxMs) {
        cb(ws);
        return;
      }
      setTimeout(poll, RETRY_INTERVAL_MS);
    }

    poll();
  }

  function prepareWorkspace(cb) {
    var ws = getWorkspace();
    if (ws && document.querySelector('.blocklySvg')) {
      cb(ws);
      return;
    }

    switchToBlocksMode().then(function () {
      waitForWorkspace(MAX_WAIT_MS, cb);
    });
  }

  function stripOuterXml(xmlString) {
    var s = (xmlString || '').trim();
    if (!s) return s;
    var m = s.match(/^<xml[^>]*>([\s\S]*)<\/xml>\s*$/i);
    if (m) return m[1].trim();
    return s;
  }

  function rebuildAfterApply() {
    var w = getWebapp();
    if (!w || !w.BlocklyController) return;
    try {
      var ctrl = w.BlocklyController.getCurrentMainController();
      if (ctrl && typeof ctrl.rebuildWorkspaceBlocks === 'function') {
        ctrl.rebuildWorkspaceBlocks();
      }
    } catch (e) {}
  }

  function extractXmlFromText(text) {
    if (!text) return '';
    var m = text.match(/```(?:xml|blockly|blocks)?\s*([\s\S]*?)```/i);
    if (m && m[1] && m[1].indexOf('<block') !== -1) return m[1].trim();
    if (text.indexOf('<block') !== -1 && text.indexOf('type=') !== -1) {
      var start = text.indexOf('<block');
      var end = text.lastIndexOf('</block>');
      if (end > start) return text.slice(start, end + 8);
    }
    return '';
  }

  function templateEyeRedForever() {
    var ids = {
      hat: uid(),
      forever: uid(),
      ifb: uid(),
      and: uid(),
      found: uid(),
      detect: uid(),
      wait: uid(),
    };
    return (
      '<xml>' +
      '<block type="go_events_when_started" id="' +
      ids.hat +
      '" x="48" y="48">' +
      '<next><block type="go_control_forever" id="' +
      ids.forever +
      '">' +
      '<statement name="SUBSTACK"><block type="go_control_if_then" id="' +
      ids.ifb +
      '">' +
      '<value name="CONDITION"><block type="go_operator_and_or" id="' +
      ids.and +
      '">' +
      '<field name="CHECK">and</field>' +
      '<value name="OPERAND1"><block type="go_sensing_eye_found_object" id="' +
      ids.found +
      '"></block></value>' +
      '<value name="OPERAND2"><block type="go_sensing_eye_detect" id="' +
      ids.detect +
      '"><field name="COLORS">red</field></block></value>' +
      '</block></value>' +
      '<statement name="SUBSTACK"><block type="go_control_wait" id="' +
      ids.wait +
      '">' +
      '<value name="DURATION"><shadow type="math_positive_number"><field name="NUM">0.05</field></shadow></value>' +
      '</block></statement></block></statement></block></next></block>' +
      '</xml>'
    );
  }

  function templateDriveUntilRedStop() {
    var ids = {
      hat: uid(),
      repeat: uid(),
      and: uid(),
      found: uid(),
      detect: uid(),
      drive: uid(),
      wait: uid(),
      stop: uid(),
      led: uid(),
    };
    return (
      '<xml>' +
      '<block type="go_events_when_started" id="' +
      ids.hat +
      '" x="40" y="40">' +
      '<next><block type="go_control_repeat_until" id="' +
      ids.repeat +
      '">' +
      '<value name="CONDITION"><block type="go_operator_and_or" id="' +
      ids.and +
      '">' +
      '<field name="CHECK">and</field>' +
      '<value name="OPERAND1"><block type="go_sensing_eye_found_object" id="' +
      ids.found +
      '"></block></value>' +
      '<value name="OPERAND2"><block type="go_sensing_eye_detect" id="' +
      ids.detect +
      '"><field name="COLORS">red</field></block></value>' +
      '</block></value>' +
      '<statement name="SUBSTACK"><block type="go_drivetrain_drive" id="' +
      ids.drive +
      '"><field name="DIRECTION">fwd</field>' +
      '<next><block type="go_control_wait" id="' +
      ids.wait +
      '">' +
      '<value name="DURATION"><shadow type="math_positive_number"><field name="NUM">0.05</field></shadow></value>' +
      '</block></next></block></statement>' +
      '<next><block type="go_drivetrain_stop_driving" id="' +
      ids.stop +
      '">' +
      '<next><block type="go_looks_set_bumper_color" id="' +
      ids.led +
      '"><field name="COLORS">red</field></block></next></block></next></block></next></block>' +
      '</xml>'
    );
  }

  function pythonDriveUntilRedStop() {
    return (
      'def when_started1():\n' +
      '    drivetrain.drive(FORWARD)\n' +
      '    while True:\n' +
      '        if eye.is_object_detected() and eye.is_color_detected(RED):\n' +
      '            drivetrain.stop()\n' +
      '            bumper.set_color(RED)\n' +
      '            break\n' +
      '        wait(50, MSEC)\n'
    );
  }

  function wantsDriveUntilRedStop(text) {
    var s = (text || '').toLowerCase();
    var hasMove =
      s.indexOf('drive') !== -1 ||
      s.indexOf('forward') !== -1 ||
      s.indexOf('tiến') !== -1 ||
      s.indexOf('tien') !== -1 ||
      s.indexOf('di chuyển') !== -1 ||
      s.indexOf('di chuyen') !== -1 ||
      s.indexOf('phía trước') !== -1 ||
      s.indexOf('phia truoc') !== -1;
    var hasEye = s.indexOf('eye') !== -1 || s.indexOf('mắt') !== -1 || s.indexOf('mat') !== -1;
    var hasRed = s.indexOf('red') !== -1 || s.indexOf('đỏ') !== -1 || s.indexOf('do') !== -1;
    var hasStop =
      s.indexOf('stop') !== -1 ||
      s.indexOf('dừng') !== -1 ||
      s.indexOf('dung') !== -1 ||
      s.indexOf('dừng lại') !== -1;
    return hasMove && hasEye && hasRed && (hasStop || s.indexOf('bumper') !== -1 || s.indexOf('led') !== -1);
  }

  function inferTemplateFromText(userMessage, reply) {
    var s = (userMessage || '') + ' ' + (reply || '');
    if (wantsDriveUntilRedStop(s)) return templateDriveUntilRedStop();
    var sl = s.toLowerCase();
    var hasEye = sl.indexOf('eye') !== -1 || sl.indexOf('mắt') !== -1;
    var hasRed = sl.indexOf('red') !== -1 || sl.indexOf('đỏ') !== -1;
    if (hasEye && hasRed) return templateEyeRedForever();
    return '';
  }

  function inferPythonFromText(userMessage, reply) {
    if (wantsDriveUntilRedStop((userMessage || '') + ' ' + (reply || ''))) {
      return pythonDriveUntilRedStop();
    }
    return '';
  }

  function applyBlocksXml(xmlString, options, cb) {
    options = options || {};
    if (!xmlString || !xmlString.trim()) {
      if (cb) cb({ ok: false, error: 'Không có Blockly XML để ghi.' });
      return;
    }

    prepareWorkspace(function (ws) {
      var Blockly = getBlockly();
      var w = getWebapp();

      if (!ws || !Blockly || !Blockly.Xml) {
        var hint =
          'Blockly chưa sẵn sàng. Đợi VEXcode tải xong (~30s), rồi thử lại. ';
        if (isProjectTextMode() && getAppMode() === 'Text') {
          hint +=
            'Dự án đang ở chế độ **Text/Python** — AI vẫn ghi Python; để dùng Scratch hãy **File → New project → Blocks** hoặc mở project Blocks (.go blocks).';
        } else {
          hint += 'Nếu đang ở tab Text, bật checkbox **Ghi lên Blocks** — AI sẽ tự chuyển sang Blocks.';
        }
        if (cb) cb({ ok: false, error: hint });
        return;
      }

      try {
        var wrap = xmlString.trim();
        if (wrap.indexOf('<xml') === -1) wrap = '<xml>' + wrap + '</xml>';

        Blockly.Events.setGroup(true);
        var count = 0;

        if (
          options.replaceAll &&
          typeof Blockly.Xml.clearWorkspaceAndLoadFromXml === 'function'
        ) {
          var domAll = Blockly.Xml.textToDom(wrap);
          var idsAll = Blockly.Xml.clearWorkspaceAndLoadFromXml(domAll, ws);
          count = idsAll ? idsAll.length : 0;
        } else if (
          w &&
          w.BlocklyController &&
          typeof w.BlocklyController.appendBlockFromXML === 'function'
        ) {
          var inner = stripOuterXml(wrap);
          var blockId = w.BlocklyController.appendBlockFromXML(inner, ws);
          count = blockId ? 1 : 0;
        } else {
          var dom = Blockly.Xml.textToDom(wrap);
          var ids = Blockly.Xml.appendDomToWorkspace(dom, ws);
          count = ids ? ids.length : 0;
        }

        rebuildAfterApply();

        try {
          if (ws.scrollCenter) ws.scrollCenter();
        } catch (e2) {}

        Blockly.Events.setGroup(false);
        if (cb) cb({ ok: true, blocks: count });
      } catch (e) {
        try {
          Blockly.Events.setGroup(false);
        } catch (e3) {}
        if (cb) cb({ ok: false, error: e.message || String(e) });
      }
    });
  }

  function applyFromReply(reply, userMessage, options, cb) {
    var xml = extractXmlFromText(reply);
    if (!xml) xml = inferTemplateFromText(userMessage, reply);
    if (!xml) {
      if (cb) cb({ ok: false, error: 'no_xml' });
      return;
    }
    applyBlocksXml(xml, options, cb);
  }

  function uid() {
    return 'vexgo_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 8);
  }

  window.VEXGOBlocklyEditor = {
    getWebapp: getWebapp,
    getWorkspace: getWorkspace,
    getControllerWorkspace: getControllerWorkspace,
    switchToBlocksMode: switchToBlocksMode,
    prepareWorkspace: prepareWorkspace,
    extractXmlFromText: extractXmlFromText,
    templateEyeRedForever: templateEyeRedForever,
    templateDriveUntilRedStop: templateDriveUntilRedStop,
    pythonDriveUntilRedStop: pythonDriveUntilRedStop,
    inferTemplateFromText: inferTemplateFromText,
    inferPythonFromText: inferPythonFromText,
    wantsDriveUntilRedStop: wantsDriveUntilRedStop,
    applyBlocksXml: applyBlocksXml,
    applyFromReply: applyFromReply,
  };
})();
