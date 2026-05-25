/**
 * Lightweight post-load patches for offline VEX GO.
 * Loaded with defer so main.bundle.js can mount React first.
 */
(function () {
  'use strict';

  var THEME_STANDARD = 'VEXCode';
  var THEME_CLASSIC = 'OLD_THEME';
  var STORAGE_KEY = 'selectedTheme';

  var BLOCKLY_MEDIA = 'lib/@vexcode/blockly/media/';
  var LEGACY_BLOCKLY_MEDIA = 'node_modules/@vexcode/blockly/media/';

  /** Fix zoom/toolbox SVG and audio paths after deploy (bundle uses node_modules/). */
  function patchBlocklyMediaPaths() {
    function rewriteMediaUrl(url) {
      if (!url || url.indexOf(LEGACY_BLOCKLY_MEDIA) === -1) return url;
      return url.split(LEGACY_BLOCKLY_MEDIA).join(BLOCKLY_MEDIA);
    }

    function fixSvgImages(root) {
      if (!root || !root.querySelectorAll) return;
      root.querySelectorAll('image').forEach(function (img) {
        ['href', 'xlink:href'].forEach(function (attr) {
          var val = img.getAttribute(attr);
          if (!val) return;
          var next = rewriteMediaUrl(val);
          if (next !== val) img.setAttribute(attr, next);
        });
      });
    }

    function applyWorkspaceMediaPath() {
      try {
        var Blockly = window.Blockly;
        if (!Blockly || typeof Blockly.getMainWorkspace !== 'function') return;
        var ws = Blockly.getMainWorkspace();
        if (ws && ws.options && ws.options.pathToMedia !== BLOCKLY_MEDIA) {
          ws.options.pathToMedia = BLOCKLY_MEDIA;
        }
      } catch (e) {}
    }

    fixSvgImages(document);
    applyWorkspaceMediaPath();

    if (typeof MutationObserver !== 'undefined') {
      var observer = new MutationObserver(function () {
        fixSvgImages(document);
        applyWorkspaceMediaPath();
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });
    }

    var ticks = 0;
    var timer = setInterval(function () {
      ticks += 1;
      fixSvgImages(document);
      applyWorkspaceMediaPath();
      if (ticks >= 80) clearInterval(timer);
    }, 200);
  }

  var BLOCKED_MODAL_PHRASES = [
    'web-based vexcode',
    'not supported on this browser',
    'please use google chrome',
    'unsupported vexcode',
    'ipad os',
    'ipados',
    'unsupported web browser',
    'not support text project on tablets',
    'not support vr text project on tablets',
    'mobile devices',
    'visit the app store',
    'google play store',
    'google play',
    'laptop or desktop',
    'fire os',
    'fireos',
    'android browser',
  ];

  function dismissUnsupportedModals() {
    function shouldDismiss(text) {
      var t = (text || '').toLowerCase();
      if (!t) return false;
      for (var i = 0; i < BLOCKED_MODAL_PHRASES.length; i++) {
        if (t.indexOf(BLOCKED_MODAL_PHRASES[i]) !== -1) return true;
      }
      return false;
    }

    function removeNode(node) {
      if (!node) return;
      var layer =
        node.closest('.ReactModal__Overlay') ||
        node.closest('[class*="lightbox"]') ||
        node.closest('[class*="Lightbox"]') ||
        node.parentElement;
      if (layer && layer.parentElement) {
        layer.parentElement.removeChild(layer);
      } else {
        node.style.setProperty('display', 'none', 'important');
      }
    }

    var selectors =
      '.alert_window_2, .alert_window, .window.alert_window_2, ' +
      '.black_vca_lightbox, [class*="lightbox"], [class*="Lightbox"], ' +
      '.ReactModal__Overlay';

    document.querySelectorAll(selectors).forEach(function (win) {
      if (!shouldDismiss(win.innerText)) return;
      removeNode(win);
      var closeBtn = win.querySelector('button');
      if (closeBtn) {
        try {
          closeBtn.click();
        } catch (e) {}
      }
    });
  }

  function patchModalControl() {
    var ctrl = window.MODALCONTROL;
    if (!ctrl || ctrl.__vexgoPatchModal) return false;

    function wrap(name) {
      if (typeof ctrl[name] !== 'function') return;
      var orig = ctrl[name];
      ctrl[name] = function (message) {
        var msg = typeof message === 'string' ? message : '';
        if (msg && BLOCKED_MODAL_PHRASES.some(function (p) {
          return msg.toLowerCase().indexOf(p) !== -1;
        })) {
          return;
        }
        return orig.apply(this, arguments);
      };
    }

    wrap('showUnsupportedBrowser');
    wrap('alert');
    wrap('showBlocklyAlert');
    ctrl.__vexgoPatchModal = true;
    return true;
  }

  function watchUnsupportedModals() {
    dismissUnsupportedModals();
    patchModalControl();
    var ticks = 0;
    var timer = setInterval(function () {
      ticks += 1;
      dismissUnsupportedModals();
      patchModalControl();
      if (ticks >= 120) clearInterval(timer);
    }, 400);

    if (typeof MutationObserver !== 'undefined') {
      var observer = new MutationObserver(function () {
        dismissUnsupportedModals();
        patchModalControl();
      });
      var target = document.body || document.documentElement;
      if (target) observer.observe(target, { childList: true, subtree: true });
      setTimeout(function () {
        observer.disconnect();
      }, 120000);
    }
  }

  function setEnglishPrefs() {
    try {
      localStorage.setItem('selectedLanguage', 'en');
      localStorage.setItem('SelectedLanguage', 'en');
      localStorage.setItem('language', 'en');
      localStorage.setItem('i18nextLng', 'en');
      localStorage.setItem('lng', 'en');
      localStorage.setItem('locale', 'en');
    } catch (e) {}
  }

  function patchFetch() {
    var OFFLINE_MOCKS = {
      'content.vexrobotics.com': function (url) {
        if (url.indexOf('whatsnew') !== -1) return { whatsnew: [] };
        return {};
      },
    };

    var originalFetch = window.fetch;
    window.fetch = function () {
      var urlArg =
        typeof arguments[0] === 'string'
          ? arguments[0]
          : (arguments[0] && arguments[0].url) || '';

      for (var domain in OFFLINE_MOCKS) {
        if (urlArg.indexOf(domain) !== -1) {
          var mockBody = JSON.stringify(OFFLINE_MOCKS[domain](urlArg));
          return Promise.resolve(
            new Response(mockBody, {
              status: 200,
              headers: { 'Content-Type': 'application/json' },
            })
          );
        }
      }

      return originalFetch.apply(this, arguments);
    };
  }

  function lockLanguageOnce() {
    var select = Array.from(document.querySelectorAll('select')).find(function (s) {
      return s.querySelector('option[value="ar"]');
    });
    if (!select) return false;

    if (select.value !== 'en') select.value = 'en';
    select.style.setProperty('display', 'none', 'important');

    var parent = select.parentElement;
    if (parent) parent.style.setProperty('display', 'none', 'important');
    return true;
  }

  function isLogicCategoryLabel(text) {
    var t = (text || '').trim().toLowerCase();
    return (
      t.indexOf('logic categor') !== -1 ||
      t === 'expand logic categories' ||
      t === 'collapse logic categories'
    );
  }

  function hideRow(el) {
    if (!el) return;
    var row =
      el.closest('.action-item') ||
      el.closest('.dropdownmenu_options .option') ||
      el.closest('.option') ||
      el.closest('[class*="action"]');
    if (row) row.style.setProperty('display', 'none', 'important');
  }

  function hideToolsButton() {
    var tools = document.getElementById('dropdown_menu_settings_menu');
    if (tools) {
      tools.style.setProperty('display', 'none', 'important');
      var prev = tools.previousElementSibling;
      if (prev && prev.classList && prev.classList.contains('bar_divider')) {
        prev.style.setProperty('display', 'none', 'important');
      }
    }

    document.querySelectorAll('.topmenu .toolbar_btn span').forEach(function (span) {
      if ((span.textContent || '').trim() !== 'Tools') return;
      var container = span.closest('.input_container') || span.closest('.dropdownmenu');
      if (container) container.style.setProperty('display', 'none', 'important');
    });
  }

  function hideSettingsMenuItems() {
    hideToolsButton();

    var selectors =
      '.action-item .label, .action-item .action-label, ' +
      '.dropdownmenu_options .option, .dropdownmenu_options .option .label, ' +
      '.dropdownmenu_options .option p, .dropdownmenu_portal .option';

    document.querySelectorAll(selectors).forEach(function (el) {
      var text = (el.textContent || '').trim();
      if (text === 'Theme' || isLogicCategoryLabel(text)) {
        hideRow(el);
      }
    });
  }

  function forceExpandLogicCategories() {
    try {
      localStorage.setItem('expandLogicCategory', 'enabled');
    } catch (e) {}
  }

  function watchSettingsMenuItems() {
    hideSettingsMenuItems();
    var timer = setInterval(hideSettingsMenuItems, 400);
    setTimeout(function () {
      clearInterval(timer);
    }, 120000);

    if (typeof MutationObserver === 'undefined') return;

    var observer = new MutationObserver(hideSettingsMenuItems);
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function waitForAppReady(cb) {
    var tries = 0;
    var timer = setInterval(function () {
      tries += 1;
      if (document.getElementById('master_wrapper') || tries > 120) {
        clearInterval(timer);
        cb(!!document.getElementById('master_wrapper'));
      }
    }, 250);
  }

  function readStoredTheme() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === THEME_CLASSIC) return THEME_CLASSIC;
    } catch (e) {}
    return THEME_STANDARD;
  }

  function writeStoredTheme(themeKey) {
    try {
      localStorage.setItem(STORAGE_KEY, themeKey);
    } catch (e) {}
  }

  function getBlocklyWorkspace() {
    var Blockly = window.Blockly;
    if (!Blockly || typeof Blockly.getMainWorkspace !== 'function') return null;
    return Blockly.getMainWorkspace();
  }

  function rebuildWorkspaceBlocks(workspace) {
    var Blockly = window.Blockly;
    if (!Blockly || !workspace || !Blockly.Xml) return;
    try {
      var xml = Blockly.Xml.workspaceToDom(workspace);
      Blockly.Events.disable();
      workspace.clear();
      Blockly.Xml.domToWorkspace(xml, workspace);
      Blockly.Events.enable();
    } catch (err) {
      try {
        Blockly.Events.enable();
      } catch (e2) {}
    }
  }

  function applyBlocklyTheme(themeKey) {
    var Blockly = window.Blockly;
    if (!Blockly || !Blockly.Themes || !Blockly.Themes[themeKey]) {
      return false;
    }

    writeStoredTheme(themeKey);

    var workspace = getBlocklyWorkspace();
    if (!workspace || typeof workspace.setTheme !== 'function') {
      return false;
    }

    workspace.setTheme(Blockly.Themes[themeKey]);
    if (typeof workspace.refreshTheme === 'function') {
      workspace.refreshTheme();
    }
    if (workspace.toolbox_ && typeof workspace.toolbox_.refreshTheme === 'function') {
      workspace.toolbox_.refreshTheme();
    }

    rebuildWorkspaceBlocks(workspace);
    return true;
  }

  function updateToggleUi(root, themeKey) {
    var isClassic = themeKey === THEME_CLASSIC;
    root.classList.toggle('is-classic', isClassic);
    root.setAttribute('aria-label', isClassic ? 'Block theme: Classic' : 'Block theme: Standard');

    var track = root.querySelector('.vexgo-theme-track');
    if (track) {
      track.setAttribute('aria-checked', isClassic ? 'true' : 'false');
    }

    root.querySelectorAll('.vexgo-theme-option').forEach(function (btn) {
      var active = btn.getAttribute('data-theme') === themeKey;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function setThemeFromToggle(themeKey, root) {
    if (themeKey !== THEME_STANDARD && themeKey !== THEME_CLASSIC) return;
    updateToggleUi(root, themeKey);

    var tries = 0;
    var timer = setInterval(function () {
      tries += 1;
      if (applyBlocklyTheme(themeKey) || tries > 40) {
        clearInterval(timer);
      }
    }, 150);
  }

  function findTopmenuThemeAnchor() {
    return (
      document.querySelector('.topmenu #dropdown_menu_file_menu') ||
      document.querySelector('#dropdown_menu_file_menu')
    );
  }

  function placeThemeToggleInTopmenu(root) {
    if (root.parentElement && root.parentElement.closest('.topmenu')) {
      return true;
    }

    var anchor = findTopmenuThemeAnchor();
    if (!anchor || !anchor.parentElement) {
      return false;
    }

    var divider = document.getElementById('vexgo-theme-divider');
    if (!divider) {
      divider = document.createElement('span');
      divider.id = 'vexgo-theme-divider';
      divider.className = 'bar_divider';
    }

    anchor.insertAdjacentElement('afterend', divider);
    divider.insertAdjacentElement('afterend', root);
    return true;
  }

  function wireThemeToggle(root) {
    if (root.dataset.wired === '1') return;
    root.dataset.wired = '1';

    var current = readStoredTheme();
    updateToggleUi(root, current);

    root.querySelector('.vexgo-theme-track').addEventListener('click', function () {
      var next = readStoredTheme() === THEME_CLASSIC ? THEME_STANDARD : THEME_CLASSIC;
      setThemeFromToggle(next, root);
    });

    root.querySelectorAll('.vexgo-theme-option').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setThemeFromToggle(btn.getAttribute('data-theme'), root);
      });
    });
  }

  function mountThemeToggle() {
    var root = document.getElementById('vexgo-theme-toggle');
    if (!root) {
      root = document.createElement('div');
      root.id = 'vexgo-theme-toggle';
      root.innerHTML =
        '<span class="vexgo-theme-caption">Theme</span>' +
        '<button type="button" class="vexgo-theme-option" data-theme="' +
        THEME_STANDARD +
        '">Standard</button>' +
        '<button type="button" class="vexgo-theme-track" aria-checked="false" aria-label="Toggle Standard and Classic block theme">' +
        '<span class="vexgo-theme-knob"></span>' +
        '</button>' +
        '<button type="button" class="vexgo-theme-option" data-theme="' +
        THEME_CLASSIC +
        '">Classic</button>';
      wireThemeToggle(root);
    }

    var placed = placeThemeToggleInTopmenu(root);
    if (!placed) {
      return;
    }

    var syncTimer = setInterval(function () {
      var Blockly = window.Blockly;
      if (Blockly && Blockly.Themes && Blockly.Themes[THEME_STANDARD]) {
        clearInterval(syncTimer);
        root.classList.add('is-visible');
        applyBlocklyTheme(readStoredTheme());
        updateToggleUi(root, readStoredTheme());
      }
    }, 200);
  }

  function watchTopmenuForThemeToggle() {
    var tries = 0;
    var timer = setInterval(function () {
      tries += 1;
      mountThemeToggle();
      if (document.getElementById('vexgo-theme-toggle')?.closest('.topmenu') || tries > 80) {
        clearInterval(timer);
      }
    }, 250);

    var topmenu = document.querySelector('.topmenu');
    if (topmenu && typeof MutationObserver !== 'undefined') {
      var observer = new MutationObserver(function () {
        var toggle = document.getElementById('vexgo-theme-toggle');
        if (!toggle || !toggle.closest('.topmenu')) {
          mountThemeToggle();
        }
      });
      observer.observe(topmenu, { childList: true, subtree: true });
    }
  }

  setEnglishPrefs();
  patchBlocklyMediaPaths();
  patchFetch();
  forceExpandLogicCategories();
  watchSettingsMenuItems();
  watchUnsupportedModals();

  waitForAppReady(function (ready) {
    if (!ready) return;
    lockLanguageOnce();
    hideSettingsMenuItems();
    watchTopmenuForThemeToggle();
    dismissUnsupportedModals();
  });
})();
