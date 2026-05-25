/**
 * AI Assistant — Gemini + live workspace context (Ask / Edit / Agent).
 */
(function () {
  'use strict';

  var AI_ICON_SVG =
    '<svg draggable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">' +
    '<path fill="#fff" d="M12 2 9.2 8.6 2 10l7.2 1.4L12 18l2.8-6.6L22 10l-7.2-1.4L12 2zm0 8.2-1.2 2.8-2.8 1.2 2.8 1.2L12 18.2l1.2-2.8 2.8-1.2-2.8-1.2L12 10.2z"/></svg>';

  var CLOSE_SVG =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.19 16.19" aria-hidden="true">' +
    '<polygon fill="currentColor" points="15.18 0 16.19 1.01 9.11 8.09 16.19 15.18 15.18 16.19 8.09 9.11 1.01 16.19 0 15.18 7.08 8.09 0 1.01 1.01 0 8.09 7.08 15.18 0"></polygon></svg>';

  var SETTINGS_SVG =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">' +
    '<path fill="currentColor" d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm9.4 4c0-.3 0-.7-.1-1l2-1.5-2-3.5-2.3 1a8 8 0 0 0-1.7-1l-.3-2.5h-4l-.3 2.5a8 8 0 0 0-1.7 1l-2.3-1-2 3.5 2 1.5c0 .3-.1.7-.1 1s0 .7.1 1l-2 1.5 2 3.5 2.3-1c.5.4 1.1.7 1.7 1l.3 2.5h4l.3-2.5c.6-.3 1.2-.6 1.7-1l2.3 1 2-3.5-2-1.5c.1-.3.1-.7.1-1z"/></svg>';

  var state = {
    mode: 'ask',
    open: false,
    settingsOpen: false,
    agentRunning: false,
    busy: false,
    settingsDismissed: false,
    ignoreOutsideClick: false,
    lastActivateMs: 0,
    hiddenFeedbackRoots: [],
  };

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function hasGeminiKey() {
    return window.VEXGOGemini && window.VEXGOGemini.hasApiKey();
  }

  function findFeedbackBtn() {
    return (
      document.getElementById('feedbackIcon') ||
      document.querySelector('.tool_feedback.toolbar_btn') ||
      document.querySelector('button.tool_feedback')
    );
  }

  function restoreNativeFeedbackHides() {
    state.hiddenFeedbackRoots.forEach(function (root) {
      if (!root || !root.style) return;
      root.style.removeProperty('display');
      root.style.removeProperty('visibility');
      root.style.removeProperty('pointer-events');
      delete root.dataset.vexgoFeedbackHidden;
    });
    state.hiddenFeedbackRoots = [];
    document.querySelectorAll('[data-vexgo-feedback-hidden]').forEach(function (el) {
      el.style.removeProperty('display');
      el.style.removeProperty('visibility');
      el.style.removeProperty('pointer-events');
      delete el.dataset.vexgoFeedbackHidden;
    });
  }

  /** CSS-only — never set display:none on shared toolbar parents */
  function hideNativeFeedback() {}

  function ensureToolbarButtonVisible() {
    var btn = findFeedbackBtn();
    if (!btn) return;

    var node = btn.parentElement;
    while (node && node !== document.body) {
      node.style.removeProperty('display');
      node.style.removeProperty('visibility');
      node.style.removeProperty('pointer-events');
      node.style.removeProperty('opacity');
      node = node.parentElement;
    }

    btn.style.setProperty('display', 'inline-flex', 'important');
    btn.style.setProperty('visibility', 'visible', 'important');
    btn.style.setProperty('pointer-events', 'auto', 'important');
    btn.style.setProperty('opacity', '1', 'important');
  }

  function positionPanel() {
    var panel = document.getElementById('vexgo-ai-panel');
    if (!panel) return;

    panel.style.position = 'fixed';
    panel.style.zIndex = '2147483647';

    var btn = findFeedbackBtn();
    var shell = panel.querySelector('.vexgo-ai-shell');
    var pw = shell && shell.offsetWidth ? shell.offsetWidth : 380;
    var ph = shell && shell.offsetHeight ? shell.offsetHeight : 420;

    if (!btn) {
      panel.style.top = '50%';
      panel.style.left = '50%';
      panel.style.transform = 'translate(-50%, -50%)';
      return;
    }

    panel.style.transform = 'none';
    var r = btn.getBoundingClientRect();
    var top = Math.round(r.bottom + 6);
    var left = Math.round(r.right - pw);
    if (left < 8) left = 8;
    if (left + pw > window.innerWidth - 8) left = Math.max(8, window.innerWidth - pw - 8);
    if (top + ph > window.innerHeight - 8) top = Math.max(8, Math.round(r.top - ph - 6));

    panel.style.top = top + 'px';
    panel.style.left = left + 'px';
    panel.style.right = 'auto';
    panel.style.bottom = 'auto';
  }

  function setMode(mode) {
    state.mode = mode;
    var panel = document.getElementById('vexgo-ai-panel');
    if (!panel) return;

    panel.querySelectorAll('.vexgo-ai-tab').forEach(function (tab) {
      var on = tab.getAttribute('data-mode') === mode;
      tab.classList.toggle('is-active', on);
      tab.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    panel.querySelectorAll('.vexgo-ai-pane').forEach(function (pane) {
      pane.classList.toggle('is-active', pane.getAttribute('data-pane') === mode);
    });
    refreshContextPreview(mode);
  }

  function formatBotHtml(text) {
    var parts = String(text).split('```');
    var out = '';
    for (var i = 0; i < parts.length; i++) {
      if (i % 2 === 1) {
        out +=
          '<pre class="vexgo-ai-code">' +
          escapeHtml(parts[i].replace(/^\n?/, '').replace(/\n?$/, '')) +
          '</pre>';
      } else {
        var seg = escapeHtml(parts[i]);
        seg = seg.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        seg = seg.replace(/\n/g, '<br>');
        out += seg;
      }
    }
    return out;
  }

  function appendMessage(container, role, text, extraClass) {
    if (!container) return null;
    var div = document.createElement('div');
    div.className = 'vexgo-ai-msg vexgo-ai-msg-' + role + (extraClass ? ' ' + extraClass : '');
    var label = role === 'user' ? 'You' : 'AI';
    if (role === 'bot') {
      div.innerHTML = '<strong>' + label + '</strong>' + formatBotHtml(text);
    } else {
      div.innerHTML = '<strong>' + label + '</strong>' + escapeHtml(text);
    }
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    return div;
  }

  function getProjectContext() {
    if (window.VEXGOProjectContext && typeof window.VEXGOProjectContext.snapshot === 'function') {
      return window.VEXGOProjectContext.snapshot();
    }
    return { projectName: 'VEXcode', blockCount: 0, blockLines: [], python: '', isEmpty: true, readIssues: [] };
  }

  function refreshContextPreview(mode) {
    var ctx = getProjectContext();
    var pane = mode || state.mode || 'ask';
    var meta = document.getElementById('vexgo-ai-context-meta-' + pane);
    var pre = document.getElementById('vexgo-ai-context-preview-' + pane);
    var summary =
      ctx.projectName +
      ' · ' +
      ctx.editorMode +
      ' · ' +
      ctx.blockCount +
      ' blocks' +
      (ctx.blockTypes && ctx.blockTypes.length ? ' · ' + ctx.blockTypes.slice(0, 4).join(', ') : '') +
      ' · Brain: ' +
      ctx.brain.label;

    if (ctx.devices && ctx.devices.length) summary += ' · ' + ctx.devices.join(', ');
    if (ctx.python && ctx.python.length) summary += ' · code ' + ctx.python.length + ' chars';

    if (meta) meta.textContent = summary;
    if (pre && window.VEXGOProjectContext) {
      pre.textContent = window.VEXGOProjectContext.formatContextForPrompt(ctx);
    }
    return ctx;
  }

  function applyCheckboxHtml() {
    return (
      '<div class="vexgo-ai-apply-group">' +
      '<label class="vexgo-ai-apply-label">' +
      '<input type="checkbox" class="vexgo-ai-apply-blocks" checked /> ' +
      'Ghi lên Blocks (Scratch)</label>' +
      '<label class="vexgo-ai-apply-label">' +
      '<input type="checkbox" class="vexgo-ai-apply-editor" checked /> ' +
      'Ghi lên Text (Python)</label></div>'
    );
  }

  function getApplyPane(mode) {
    return document.querySelector('.vexgo-ai-pane[data-pane="' + mode + '"]');
  }

  function shouldApplyToBlocks(mode) {
    if (mode !== 'edit' && mode !== 'agent') return false;
    var pane = getApplyPane(mode);
    var cb = pane && pane.querySelector('.vexgo-ai-apply-blocks');
    return cb ? cb.checked : true;
  }

  function shouldApplyToEditor(mode) {
    if (mode !== 'edit' && mode !== 'agent') return false;
    var pane = getApplyPane(mode);
    var cb = pane && pane.querySelector('.vexgo-ai-apply-editor');
    return cb ? cb.checked : true;
  }

  function applyReplyToEditor(reply, mode) {
    if (!window.VEXGOCodeEditor || typeof window.VEXGOCodeEditor.applyCode !== 'function') {
      return Promise.resolve({ ok: false, error: 'Module editor chưa tải — tải lại trang (Ctrl+F5).' });
    }
    var merge = mode === 'edit';
    var replaceAll = mode === 'agent';
    return window.VEXGOCodeEditor.applyCode(reply, { merge: merge, replaceAll: replaceAll });
  }

  function logApply(mode, line, messageContainer) {
    if (mode === 'agent') {
      agentLog(line);
      return;
    }
    if (messageContainer) {
      appendMessage(messageContainer, 'bot', line, line.indexOf('Không') === 0 ? 'vexgo-ai-msg-apply-err' : 'vexgo-ai-msg-apply');
    }
  }

  function applyProjectChanges(mode, reply, userMessage, messageContainer) {
    var applyBlocks = shouldApplyToBlocks(mode);
    var applyEditor = shouldApplyToEditor(mode);
    if (!applyBlocks && !applyEditor) return;

    var task = userMessage || '';

    if (applyBlocks && window.VEXGOBlocklyEditor) {
      if (typeof window.VEXGOBlocklyEditor.prepareWorkspace === 'function') {
        window.VEXGOBlocklyEditor.prepareWorkspace(function () {});
      }
      window.VEXGOBlocklyEditor.applyFromReply(
        reply,
        task,
        { replaceAll: false },
        function (blockResult) {
          if (blockResult.ok) {
            logApply(
              mode,
              'Đã ghi **Blocks (Scratch)** (' +
                (blockResult.blocks || 1) +
                ' khối) — app đã chuyển sang **Blocks** nếu bạn đang ở Text.',
              messageContainer
            );
          } else if (blockResult.error && blockResult.error !== 'no_xml') {
            logApply(mode, 'Blocks: ' + blockResult.error, messageContainer);
          }
        }
      );
    }

    if (!applyEditor) return;

    var code =
      window.VEXGOCodeEditor && window.VEXGOCodeEditor.extractCodeFromText
        ? window.VEXGOCodeEditor.extractCodeFromText(reply)
        : '';
    if (!code && window.VEXGOBlocklyEditor && window.VEXGOBlocklyEditor.inferPythonFromText) {
      code = window.VEXGOBlocklyEditor.inferPythonFromText(task, reply);
    }
    if (!code && reply.indexOf('def when_started') === -1 && reply.indexOf('drivetrain') === -1) {
      return;
    }

    var payload = code || reply;
    applyReplyToEditor(payload, mode).then(function (result) {
      if (result.ok) {
        logApply(mode, 'Đã ghi **Python** lên tab Text (' + (result.lines || '?') + ' dòng).', messageContainer);
      } else if (result.error) {
        logApply(mode, 'Text: ' + result.error, messageContainer);
      }
    });
  }

  function maybeApplyReply(mode, reply, messageContainer, userMessage) {
    applyProjectChanges(mode, reply, userMessage, messageContainer);
  }

  function populateModelSelect() {
    var sel = document.getElementById('vexgo-ai-model-select');
    if (!sel || !window.VEXGOGemini || !window.VEXGOGemini.MODEL_OPTIONS) return;
    if (sel.options.length > 0) {
      sel.value = window.VEXGOGemini.getPreferredModel();
      return;
    }
    window.VEXGOGemini.MODEL_OPTIONS.forEach(function (opt) {
      var o = document.createElement('option');
      o.value = opt.id;
      o.textContent = opt.label;
      sel.appendChild(o);
    });
    sel.value = window.VEXGOGemini.getPreferredModel();
  }

  function updateKeyBadge() {
    var badge = document.getElementById('vexgo-ai-key-badge');
    if (!badge) return;
    if (hasGeminiKey() && window.VEXGOGemini) {
      var model = window.VEXGOGemini.getPreferredModel();
      badge.textContent =
        'Gemini ' +
        window.VEXGOGemini.maskKey(window.VEXGOGemini.getApiKey()) +
        ' · ' +
        model;
      badge.classList.add('is-set');
    } else {
      badge.textContent = 'Chưa có API key';
      badge.classList.remove('is-set');
    }
  }

  function openSettings() {
    state.settingsOpen = true;
    var overlay = document.getElementById('vexgo-ai-settings');
    if (overlay) overlay.classList.add('is-open');
    var input = document.getElementById('vexgo-ai-apikey-input');
    var status = document.getElementById('vexgo-ai-settings-status');
    populateModelSelect();
    if (input) input.value = '';
    if (status) {
      if (hasGeminiKey() && window.VEXGOGemini) {
        status.textContent =
          'Key: ' +
          window.VEXGOGemini.maskKey(window.VEXGOGemini.getApiKey()) +
          ' · Model: ' +
          window.VEXGOGemini.getPreferredModel();
      } else {
        status.textContent =
          'Nhập API key (AIza… từ Google AI Studio). API trả phí: chọn gemini-2.5-flash.';
      }
    }
    updateKeyBadge();
  }

  function saveModelSelection() {
    var sel = document.getElementById('vexgo-ai-model-select');
    if (!sel || !window.VEXGOGemini) return;
    window.VEXGOGemini.setPreferredModel(sel.value);
    updateKeyBadge();
    var status = document.getElementById('vexgo-ai-settings-status');
    if (status) status.textContent = 'Đã lưu model: ' + sel.value;
  }

  function testGeminiConnection() {
    var status = document.getElementById('vexgo-ai-settings-status');
    var sel = document.getElementById('vexgo-ai-model-select');
    if (!hasGeminiKey()) {
      if (status) status.textContent = 'Nhập API key trước.';
      return;
    }
    if (sel && window.VEXGOGemini) {
      window.VEXGOGemini.setPreferredModel(sel.value);
    }
    if (status) status.textContent = 'Đang test…';
    var testModel = sel && sel.value !== 'auto' ? sel.value : 'gemini-2.5-flash';
    window.VEXGOGemini.testConnection(testModel)
      .then(function (r) {
        if (status) {
          status.textContent = 'OK — model `' + r.model + '` phản hồi: ' + (r.reply || '').slice(0, 40);
        }
        updateKeyBadge();
      })
      .catch(function (err) {
        if (status) {
          status.textContent =
            'Test thất bại (`' +
            testModel +
            '`): ' +
            (err.message || err).slice(0, 120) +
            ' — thử model khác (2.5-pro, 1.5-pro).';
        }
      });
  }

  function closeSettings() {
    state.settingsOpen = false;
    state.settingsDismissed = true;
    var overlay = document.getElementById('vexgo-ai-settings');
    if (overlay) overlay.classList.remove('is-open');
  }

  function saveApiKey() {
    var input = document.getElementById('vexgo-ai-apikey-input');
    var status = document.getElementById('vexgo-ai-settings-status');
    if (!input || !window.VEXGOGemini) return;
    try {
      window.VEXGOGemini.setApiKey(input.value);
      input.value = '';
      saveModelSelection();
      if (status) status.textContent = 'Đã lưu API key. Bấm Test kết nối để kiểm tra model.';
      updateKeyBadge();
    } catch (e) {
      if (status) status.textContent = e.message || 'Lỗi lưu key';
    }
  }

  function removeApiKey() {
    if (window.VEXGOGemini) window.VEXGOGemini.clearApiKey();
    var status = document.getElementById('vexgo-ai-settings-status');
    if (status) status.textContent = 'Đã xóa API key khỏi trình duyệt.';
    updateKeyBadge();
  }

  function requireApiKey() {
    if (hasGeminiKey()) return true;
    openSettings();
    return false;
  }

  function callGemini(mode, userMessage, ctx) {
    if (!window.VEXGOGemini || !window.VEXGOProjectContext) {
      return Promise.reject(new Error('AI modules not loaded'));
    }
    var systemInstruction = window.VEXGOProjectContext.getSystemPrompt(mode);
    var userText = window.VEXGOProjectContext.buildGeminiUserPrompt(mode, userMessage, ctx);
    return window.VEXGOGemini.generate({
      systemInstruction: systemInstruction,
      userText: userText,
      temperature: mode === 'agent' ? 0.25 : 0.4,
    });
  }

  function fallbackReply(mode, userMessage, ctx) {
    if (window.VEXGOProjectContext && typeof window.VEXGOProjectContext.localAssist === 'function') {
      var local = window.VEXGOProjectContext.localAssist(userMessage, ctx, mode);
      if (mode === 'edit' && ctx && !ctx.isEmpty && local.indexOf('```') === -1) {
        local +=
          '\n\n**Project:** ' +
          ctx.blockCount +
          ' blocks · ' +
          ctx.editorMode +
          '\n```\n' +
          (ctx.python || '') +
          '\n```';
      }
      return local;
    }
    return 'Không đọc được workspace.';
  }

  function formatAiError(err) {
    if (window.VEXGOGemini && typeof window.VEXGOGemini.formatErrorForUser === 'function') {
      return window.VEXGOGemini.formatErrorForUser(err);
    }
    return (err && err.message) || String(err);
  }

  function runAi(mode, userMessage, messageContainer, onDone) {
    if (state.busy) return;
    if (!requireApiKey()) {
      appendMessage(messageContainer, 'bot', 'Mở **Cài đặt** (⚙) để nhập Gemini API key trước.');
      return;
    }

    state.busy = true;
    var ctx = refreshContextPreview(mode);

    if (
      (mode === 'edit' || mode === 'agent') &&
      shouldApplyToBlocks(mode) &&
      window.VEXGOBlocklyEditor &&
      window.VEXGOBlocklyEditor.prepareWorkspace
    ) {
      window.VEXGOBlocklyEditor.prepareWorkspace(function () {});
    }

    var modelHint =
      window.VEXGOGemini && window.VEXGOGemini.getPreferredModel
        ? window.VEXGOGemini.getPreferredModel()
        : 'auto';
    var thinking = appendMessage(
      messageContainer,
      'bot',
      'Đang gọi Gemini (`' + modelHint + '`)…',
      'vexgo-ai-msg-loading'
    );

    callGemini(mode, userMessage, ctx)
      .then(function (reply) {
        if (thinking && thinking.parentNode) thinking.parentNode.removeChild(thinking);
        appendMessage(messageContainer, 'bot', reply);
        maybeApplyReply(mode, reply, messageContainer, userMessage);
      })
      .catch(function (err) {
        if (thinking && thinking.parentNode) thinking.parentNode.removeChild(thinking);
        var msg = err && err.message ? err.message : String(err);
        if (msg === 'NO_API_KEY') {
          openSettings();
          appendMessage(messageContainer, 'bot', 'Chưa có API key — nhập trong Cài đặt.');
        } else {
          var local = fallbackReply(mode, userMessage, ctx);
          appendMessage(messageContainer, 'bot', formatAiError(err) + '\n\n--- Gợi ý offline ---\n\n' + local);
          maybeApplyReply(mode, local, messageContainer, userMessage);
        }
      })
      .finally(function () {
        state.busy = false;
        if (onDone) onDone();
      });
  }

  function handleAskSend() {
    var input = document.getElementById('vexgo-ai-ask-input');
    var box = document.getElementById('vexgo-ai-ask-messages');
    if (!input || !box) return;
    var text = (input.value || '').trim();
    if (!text) return;
    appendMessage(box, 'user', text);
    input.value = '';
    runAi('ask', text, box);
  }

  function handleEditSend() {
    var input = document.getElementById('vexgo-ai-edit-input');
    var box = document.getElementById('vexgo-ai-edit-messages');
    if (!input || !box) return;
    var text = (input.value || '').trim();
    if (!text) return;
    appendMessage(box, 'user', text);
    input.value = '';
    runAi('edit', text, box);
  }

  function agentLog(line) {
    var log = document.getElementById('vexgo-ai-agent-log');
    if (!log) return;
    var p = document.createElement('p');
    p.className = 'log-line';
    p.textContent = line;
    log.appendChild(p);
    log.scrollTop = log.scrollHeight;
  }

  function handleAgentRun() {
    if (state.agentRunning || state.busy) return;
    var input = document.getElementById('vexgo-ai-agent-input');
    var task = input ? (input.value || '').trim() : '';
    if (!task) return;
    if (!requireApiKey()) return;

    state.agentRunning = true;
    state.busy = true;
    var runBtn = document.getElementById('vexgo-ai-agent-run');
    var status = document.getElementById('vexgo-ai-agent-status');
    if (runBtn) runBtn.disabled = true;
    if (status) status.textContent = 'Agent running…';

    var log = document.getElementById('vexgo-ai-agent-log');
    if (log) log.innerHTML = '';

    var ctx = refreshContextPreview('agent');
    agentLog('[read] ' + ctx.projectName + ' · ' + ctx.editorMode + ' · ' + ctx.blockCount + ' blocks');
    if (ctx.blockLines.length) {
      ctx.blockLines.forEach(function (line) {
        agentLog('[blocks] ' + line);
      });
    }
    if (ctx.python) {
      agentLog('[code] ' + ctx.python.length + ' chars · mode ' + ctx.editorMode);
      ctx.python.split('\n').slice(0, 6).forEach(function (line) {
        agentLog('  ' + line.slice(0, 110));
      });
    } else {
      agentLog('[code] (empty — thêm block hoặc mở tab Text)');
    }
    if (ctx.devices.length) agentLog('[devices] ' + ctx.devices.join(', '));
    else agentLog('[devices] (chưa thấy — mở tab Devices)');

    if (shouldApplyToBlocks('agent') && window.VEXGOBlocklyEditor && window.VEXGOBlocklyEditor.prepareWorkspace) {
      agentLog('[blocks] Đang mở tab Blocks…');
      window.VEXGOBlocklyEditor.prepareWorkspace(function (ws) {
        agentLog(ws ? '[blocks] Workspace sẵn sàng' : '[blocks] Chờ tab Blocks…');
      });
    }

    agentLog('[gemini] Planning…');

    callGemini('agent', task, ctx)
      .then(function (reply) {
        agentLog('[apply] Ghi Scratch + Python lên màn hình…');
        applyProjectChanges('agent', reply, task, null);
        reply.split('\n').forEach(function (line) {
          if (line.trim()) agentLog(line.trim());
        });
        if (status) status.textContent = 'Done';
      })
      .catch(function (err) {
        agentLog('[error] ' + (err.message || err));
        var local = fallbackReply('agent', task, ctx);
        agentLog('[offline] ' + local.split('\n')[0].slice(0, 200));
        applyProjectChanges('agent', local, task, null);
        if (status) status.textContent = 'Error';
      })
      .finally(function () {
        state.agentRunning = false;
        state.busy = false;
        if (runBtn) runBtn.disabled = false;
      });
  }

  function contextBlockHtml(paneId, openByDefault) {
    return (
      '<details class="vexgo-ai-context-block"' +
      (openByDefault ? ' open' : '') +
      '>' +
      '<summary>Code đọc từ workspace</summary>' +
      '<div class="vexgo-ai-context-body">' +
      '<div id="vexgo-ai-context-meta-' +
      paneId +
      '" class="vexgo-ai-context-meta">Đang đọc…</div>' +
      '<pre id="vexgo-ai-context-preview-' +
      paneId +
      '" class="vexgo-ai-context-preview"></pre></div></details>'
    );
  }

  function paneLayout(scrollHtml, footerHtml) {
    return (
      '<div class="vexgo-ai-pane-scroll">' +
      scrollHtml +
      '</div><div class="vexgo-ai-pane-footer">' +
      footerHtml +
      '</div>'
    );
  }

  function mountPanel() {
    if (document.getElementById('vexgo-ai-panel')) return;

    var panel = document.createElement('div');
    panel.id = 'vexgo-ai-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'AI Assistant');
    panel.innerHTML =
      '<div class="vexgo-ai-shell">' +
      '<div class="vexgo-ai-head">' +
      '<div class="vexgo-ai-head-title"><span>AI Assistant</span><span class="vexgo-ai-head-badge">GEMINI</span></div>' +
      '<div class="vexgo-ai-head-actions">' +
      '<button type="button" class="vexgo-ai-settings-btn" id="vexgo-ai-settings-open" aria-label="Settings">' +
      SETTINGS_SVG +
      '</button>' +
      '<button type="button" class="vexgo-ai-close" aria-label="Close">' +
      CLOSE_SVG +
      '</button></div></div>' +
      '<div id="vexgo-ai-key-badge" class="vexgo-ai-key-badge">Chưa có API key</div>' +
      '<div class="vexgo-ai-tabs" role="tablist">' +
      '<button type="button" class="vexgo-ai-tab is-active" role="tab" data-mode="ask">Ask</button>' +
      '<button type="button" class="vexgo-ai-tab" role="tab" data-mode="edit">Edit</button>' +
      '<button type="button" class="vexgo-ai-tab" role="tab" data-mode="agent">Agent</button>' +
      '</div>' +
      '<div class="vexgo-ai-body">' +
      '<div class="vexgo-ai-pane is-active" data-pane="ask">' +
      paneLayout(
        '<p class="vexgo-ai-pane-desc">Hỏi về project — Gemini nhận blocks, code, devices từ màn hình.</p>' +
          contextBlockHtml('ask', false) +
          '<div id="vexgo-ai-ask-messages" class="vexgo-ai-messages">' +
          '<div class="vexgo-ai-msg vexgo-ai-msg-bot"><strong>AI</strong>Nhập Gemini API key (⚙ Cài đặt), rồi hỏi về code/block của bạn.</div></div>',
        '<textarea id="vexgo-ai-ask-input" class="vexgo-ai-textarea" placeholder="Câu hỏi…" rows="2"></textarea>' +
          '<div class="vexgo-ai-actions"><button type="button" class="vexgo-ai-btn vexgo-ai-btn-primary" id="vexgo-ai-ask-send">Send</button></div>'
      ) +
      '</div>' +
      '<div class="vexgo-ai-pane" data-pane="edit">' +
      paneLayout(
        '<p class="vexgo-ai-pane-desc">Mô tả thay đổi — AI đọc thiết bị + blocks + code; có thể ghi lên **Blocks (Scratch)** và/hoặc **Text (Python)**.</p>' +
          contextBlockHtml('edit', false) +
          '<div id="vexgo-ai-edit-messages" class="vexgo-ai-messages"></div>',
        applyCheckboxHtml() +
          '<textarea id="vexgo-ai-edit-input" class="vexgo-ai-textarea" placeholder="VD: Thêm Eye detect red vào code…" rows="2"></textarea>' +
          '<div class="vexgo-ai-actions"><button type="button" class="vexgo-ai-btn vexgo-ai-btn-primary" id="vexgo-ai-edit-send">Suggest edits</button></div>'
      ) +
      '</div>' +
      '<div class="vexgo-ai-pane" data-pane="agent">' +
      paneLayout(
        '<p class="vexgo-ai-pane-desc">Agent đọc thiết bị + blocks + code; có thể ghi Scratch blocks và Python lên màn hình.</p>' +
          contextBlockHtml('agent', false) +
          '<div id="vexgo-ai-agent-status" class="vexgo-ai-agent-status">Idle</div>' +
          '<div id="vexgo-ai-agent-log" class="vexgo-ai-agent-log"></div>',
        applyCheckboxHtml() +
          '<textarea id="vexgo-ai-agent-input" class="vexgo-ai-textarea" placeholder="Nhiệm vụ cho agent…" rows="2"></textarea>' +
          '<div class="vexgo-ai-actions">' +
          '<button type="button" class="vexgo-ai-btn vexgo-ai-btn-primary" id="vexgo-ai-agent-run">Run agent</button>' +
          '<button type="button" class="vexgo-ai-btn vexgo-ai-btn-secondary" id="vexgo-ai-agent-clear">Clear</button></div>'
      ) +
      '</div></div></div>' +
      '<div id="vexgo-ai-settings" class="vexgo-ai-settings" aria-hidden="true">' +
      '<div class="vexgo-ai-settings-card">' +
      '<h3>Gemini API key</h3>' +
      '<p class="vexgo-ai-settings-note">Key lưu local trên trình duyệt. API trả phí: chọn <strong>gemini-2.5-flash</strong> (tránh 2.0-flash free tier limit 0).</p>' +
      '<label class="vexgo-ai-settings-label" for="vexgo-ai-model-select">Model Gemini</label>' +
      '<select id="vexgo-ai-model-select" class="vexgo-ai-select"></select>' +
      '<p id="vexgo-ai-settings-status" class="vexgo-ai-settings-status"></p>' +
      '<input type="password" id="vexgo-ai-apikey-input" class="vexgo-ai-input" placeholder="AIza… (Google AI Studio)" autocomplete="off" />' +
      '<div class="vexgo-ai-settings-actions">' +
      '<button type="button" class="vexgo-ai-btn vexgo-ai-btn-primary" id="vexgo-ai-save-key">Lưu key</button>' +
      '<button type="button" class="vexgo-ai-btn vexgo-ai-btn-primary" id="vexgo-ai-test-api">Test kết nối</button>' +
      '<button type="button" class="vexgo-ai-btn vexgo-ai-btn-secondary" id="vexgo-ai-save-model">Lưu model</button>' +
      '<button type="button" class="vexgo-ai-btn vexgo-ai-btn-secondary" id="vexgo-ai-remove-key">Xóa key</button>' +
      '<button type="button" class="vexgo-ai-btn vexgo-ai-btn-secondary" id="vexgo-ai-settings-close">Đóng</button>' +
      '</div></div></div>';

    document.body.appendChild(panel);

    panel.querySelector('.vexgo-ai-close').addEventListener('click', closePanel);
    document.getElementById('vexgo-ai-settings-open').addEventListener('click', openSettings);
    document.getElementById('vexgo-ai-settings-close').addEventListener('click', closeSettings);
    document.getElementById('vexgo-ai-save-key').addEventListener('click', saveApiKey);
    document.getElementById('vexgo-ai-save-model').addEventListener('click', saveModelSelection);
    document.getElementById('vexgo-ai-test-api').addEventListener('click', testGeminiConnection);
    document.getElementById('vexgo-ai-remove-key').addEventListener('click', removeApiKey);
    populateModelSelect();

    panel.querySelectorAll('.vexgo-ai-tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        setMode(tab.getAttribute('data-mode'));
      });
    });

    document.getElementById('vexgo-ai-ask-send').addEventListener('click', handleAskSend);
    document.getElementById('vexgo-ai-edit-send').addEventListener('click', handleEditSend);
    document.getElementById('vexgo-ai-agent-run').addEventListener('click', handleAgentRun);
    document.getElementById('vexgo-ai-agent-clear').addEventListener('click', function () {
      var log = document.getElementById('vexgo-ai-agent-log');
      if (log) log.innerHTML = '';
    });

    document.getElementById('vexgo-ai-ask-input').addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleAskSend();
      }
    });

    document.getElementById('vexgo-ai-edit-input').addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleEditSend();
      }
    });

    window.addEventListener('resize', function () {
      if (state.open) positionPanel();
    });

    updateKeyBadge();
  }

  function setToolbarActive(on) {
    var btn = findFeedbackBtn();
    if (!btn) return;
    btn.classList.toggle('active', !!on);
    btn.setAttribute('aria-expanded', on ? 'true' : 'false');
  }

  function openPanel() {
    mountPanel();
    hideNativeFeedback();
    var panel = document.getElementById('vexgo-ai-panel');
    if (!panel) return;

    state.open = true;
    state.ignoreOutsideClick = true;
    panel.classList.add('is-open');
    panel.style.display = 'block';
    panel.style.visibility = 'visible';
    panel.style.pointerEvents = 'auto';
    document.body.classList.add('vexgo-ai-open');
    ensureToolbarButtonVisible();
    setToolbarActive(true);
    setMode(state.mode);
    updateKeyBadge();

    if (!hasGeminiKey() && !state.settingsDismissed) openSettings();

    window.requestAnimationFrame(function () {
      positionPanel();
      hideNativeFeedback();
      ['ask', 'edit', 'agent'].forEach(function (m) {
        refreshContextPreview(m);
      });
      setTimeout(function () {
        state.ignoreOutsideClick = false;
      }, 0);
    });

    setTimeout(function () {
      ['ask', 'edit', 'agent'].forEach(function (m) {
        refreshContextPreview(m);
      });
    }, 600);
    setTimeout(function () {
      ['ask', 'edit', 'agent'].forEach(function (m) {
        refreshContextPreview(m);
      });
    }, 2000);
  }

  function isPanelOpen() {
    var panel = document.getElementById('vexgo-ai-panel');
    return !!(panel && panel.classList.contains('is-open'));
  }

  function syncOpenState() {
    state.open = isPanelOpen();
  }

  function togglePanel() {
    if (isPanelOpen()) {
      closePanel();
      return;
    }
    hideNativeFeedback();
    openPanel();
  }

  function closePanel() {
    closeSettings();
    restoreNativeFeedbackHides();
    var panel = document.getElementById('vexgo-ai-panel');
    if (panel) {
      panel.classList.remove('is-open');
      panel.style.display = 'none';
      panel.style.pointerEvents = 'none';
      panel.style.visibility = 'hidden';
    }
    state.open = false;
    document.body.classList.remove('vexgo-ai-open');
    setToolbarActive(false);
    ensureToolbarButtonVisible();
    window.requestAnimationFrame(ensureToolbarButtonVisible);
    setTimeout(ensureToolbarButtonVisible, 50);
    setTimeout(ensureToolbarButtonVisible, 200);
  }

  function isFeedbackClickTarget(target) {
    if (!target || !target.closest) return false;
    return !!target.closest(
      '#feedbackIcon, button.tool_feedback, .tool_feedback.toolbar_btn, .vexgo-ai-toolbar-btn'
    );
  }

  function stopFeedbackEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
  }

  function onFeedbackButtonClick(e) {
    stopFeedbackEvent(e);
    var now = Date.now();
    if (now - state.lastActivateMs < 400) return;
    state.lastActivateMs = now;
    togglePanel();
  }

  function bindFeedbackToggle(btn) {
    if (!btn) return;
    if (btn._vexgoToggleHandler) {
      btn.removeEventListener('click', btn._vexgoToggleHandler, true);
    }
    btn._vexgoToggleHandler = onFeedbackButtonClick;
    btn.setAttribute('type', 'button');
    btn.setAttribute('aria-haspopup', 'dialog');
    btn.addEventListener('click', btn._vexgoToggleHandler, true);
  }

  function patchFeedbackButton() {
    var btn = findFeedbackBtn();
    if (!btn) return;

    btn.dataset.vexgoAi = '1';
    btn.classList.add('vexgo-ai-toolbar-btn');
    btn.title = 'AI — bấm để mở/đóng (Ask, Edit, Agent)';
    btn.setAttribute('aria-expanded', isPanelOpen() ? 'true' : 'false');

    var icon = btn.querySelector('.icon');
    if (icon) {
      icon.style.height = '1.3em';
      icon.style.pointerEvents = 'none';
      if (!icon.querySelector('svg[viewBox="0 0 24 24"]')) icon.innerHTML = AI_ICON_SVG;
    }
    var cap = btn.querySelector('.icon_caption');
    if (cap) {
      cap.style.pointerEvents = 'none';
      if (cap.textContent !== 'AI') cap.textContent = 'AI';
    }
    var aligner = btn.querySelector('.icon_aligner, .icon_wrapper');
    if (aligner) aligner.style.pointerEvents = 'none';

    bindFeedbackToggle(btn);
    ensureToolbarButtonVisible();
  }

  function watchToolbarButton() {
    if (typeof MutationObserver === 'undefined') return;
    var topmenu = document.querySelector('.topmenu');
    if (!topmenu) return;
    var obs = new MutationObserver(function () {
      patchFeedbackButton();
      if (!state.open) ensureToolbarButtonVisible();
    });
    obs.observe(topmenu, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class'] });
  }

  function init() {
    mountPanel();
    patchFeedbackButton();
    watchToolbarButton();

    document.addEventListener(
      'click',
      function (e) {
        if (!state.open || state.ignoreOutsideClick) return;
        var panel = document.getElementById('vexgo-ai-panel');
        if (!panel) return;
        if (isFeedbackClickTarget(e.target)) return;
        if (panel.contains(e.target)) return;
        closePanel();
      },
      false
    );

    var tries = 0;
    var timer = setInterval(function () {
      tries += 1;
      patchFeedbackButton();
      if (!state.open) ensureToolbarButtonVisible();
      if (state.open) refreshContextPreview(state.mode);
      if (tries >= 120) clearInterval(timer);
    }, 400);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.VEXGOAI = {
    open: openPanel,
    close: closePanel,
    setMode: setMode,
    toggle: togglePanel,
    isOpen: isPanelOpen,
    refreshContext: function () {
      return refreshContextPreview(state.mode);
    },
    getContext: getProjectContext,
    openSettings: openSettings,
  };
})();
