/**
 * Apply Python to VEXcode GO on-screen text editor (Monaco).
 */
(function () {
  'use strict';

  function getMonacoApi() {
    return typeof window.monaco !== 'undefined' ? window.monaco : null;
  }

  function getPrimaryModel() {
    var monaco = getMonacoApi();
    if (!monaco || !monaco.editor) return null;

    try {
      var editors = monaco.editor.getEditors();
      if (editors && editors.length) {
        var best = editors[0].getModel();
        var bestLen = best ? best.getValue().length : 0;
        for (var i = 1; i < editors.length; i++) {
          var m = editors[i].getModel();
          if (m && m.getValue().length > bestLen) {
            best = m;
            bestLen = m.getValue().length;
          }
        }
        if (best) return best;
      }

      var models = monaco.editor.getModels();
      if (!models || !models.length) return null;
      var pick = models[0];
      var maxLen = 0;
      models.forEach(function (m) {
        var len = (m.getValue() || '').length;
        if (len >= maxLen) {
          maxLen = len;
          pick = m;
        }
      });
      return pick;
    } catch (e) {
      return null;
    }
  }

  function readCodeFromDom() {
    var editor = document.querySelector('.editorContainer .monaco-editor, .editorPanel .monaco-editor');
    if (!editor) return '';
    var lines = editor.querySelectorAll('.view-line');
    if (!lines.length) return '';
    var out = [];
    lines.forEach(function (line) {
      out.push(line.textContent || '');
    });
    return out.join('\n');
  }

  function getEditorCode() {
    var model = getPrimaryModel();
    if (model) return model.getValue() || '';
    return readCodeFromDom();
  }

  function switchToTextMode() {
    if (document.querySelector('.editorContainer, .editorPanel')) {
      var visible = document.querySelector('.monaco-editor');
      if (visible) return true;
    }

    var selectors = [
      '.topmenu .toolbar_btn',
      '.topmenu button',
      '[class*="switch"] button',
      '[class*="mode"] button',
    ];
    for (var s = 0; s < selectors.length; s++) {
      var nodes = document.querySelectorAll(selectors[s]);
      for (var i = 0; i < nodes.length; i++) {
        var el = nodes[i];
        var label = ((el.textContent || '') + ' ' + (el.title || '') + ' ' + (el.getAttribute('aria-label') || '')).toLowerCase();
        if (
          label.indexOf('text') !== -1 ||
          label.indexOf('python') !== -1 ||
          label.indexOf('code') !== -1
        ) {
          el.click();
          return true;
        }
      }
    }

    var imgs = document.querySelectorAll('.topmenu img[src*="text"], .topmenu img[src*="TEXT"]');
    if (imgs.length) {
      var btn = imgs[0].closest('button') || imgs[0].closest('.toolbar_btn');
      if (btn) {
        btn.click();
        return true;
      }
    }
    return false;
  }

  function waitForMonaco(ms, cb) {
    var start = Date.now();
    var timer = setInterval(function () {
      if (getPrimaryModel() || Date.now() - start > ms) {
        clearInterval(timer);
        cb(!!getPrimaryModel());
      }
    }, 120);
  }

  function setEditorCode(code, cb) {
    switchToTextMode();

    waitForMonaco(2500, function (ready) {
      var model = getPrimaryModel();
      if (!model) {
        if (cb) cb({ ok: false, error: 'Không tìm thấy editor code — chuyển sang tab Text/Python trước.' });
        return;
      }

      try {
        var monaco = getMonacoApi();
        model.setValue(code);
        if (monaco && monaco.editor) {
          var editors = monaco.editor.getEditors();
          if (editors && editors[0]) {
            editors[0].focus();
            var lineCount = model.getLineCount();
            editors[0].setPosition({ lineNumber: lineCount, column: 1 });
          }
        }
        if (cb) cb({ ok: true, lines: model.getLineCount() });
      } catch (e) {
        if (cb) cb({ ok: false, error: e.message || String(e) });
      }
    });
  }

  function extractCodeFromText(text) {
    if (!text) return '';
    var m = text.match(/```(?:python|py)?\s*([\s\S]*?)```/i);
    if (m && m[1]) return m[1].trim();
    if (text.indexOf('def when_started') !== -1 || text.indexOf('from go import') !== -1) {
      return text.trim();
    }
    return '';
  }

  function mergeIntoWhenStarted(existing, patch) {
    if (!patch || !patch.trim()) return existing;
    if (!existing || !existing.trim()) return patch;

    var fnMatch = existing.match(/def\s+(when_started\w*)\s*\([^)]*\)\s*:/);
    if (!fnMatch) return patch;

    var fnName = fnMatch[1];
    var startIdx = existing.indexOf(fnMatch[0]);
    var afterDef = existing.slice(startIdx + fnMatch[0].length);
    var nextDef = afterDef.search(/\ndef\s+/);
    var body = nextDef === -1 ? afterDef : afterDef.slice(0, nextDef);

    var insert = patch.trim();
    if (insert.indexOf('def when_started') !== -1) {
      return patch;
    }

    var mergedBody = body.trimEnd() + '\n    ' + insert.replace(/\n/g, '\n    ') + '\n';
    return existing.slice(0, startIdx) + fnMatch[0] + mergedBody + (nextDef === -1 ? '' : afterDef.slice(nextDef));
  }

  function applyCode(code, options) {
    options = options || {};
    var raw = (code || '').trim();
    if (!raw) return Promise.resolve({ ok: false, error: 'Không có code để ghi.' });

    var extracted = extractCodeFromText(raw) || raw;
    var finalCode = extracted;

    if (options.merge && !options.replaceAll) {
      var current = getEditorCode();
      if (current.trim()) finalCode = mergeIntoWhenStarted(current, extracted);
    }

    return new Promise(function (resolve) {
      setEditorCode(finalCode, function (result) {
        resolve(result);
      });
    });
  }

  window.VEXGOCodeEditor = {
    getEditorCode: getEditorCode,
    switchToTextMode: switchToTextMode,
    setEditorCode: setEditorCode,
    applyCode: applyCode,
    extractCodeFromText: extractCodeFromText,
    mergeIntoWhenStarted: mergeIntoWhenStarted,
  };
})();
