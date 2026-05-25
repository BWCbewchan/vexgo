/**
 * Unblock VEXcode GO web on tablets, Safari, Bluefy, Firefox, etc.
 * Must run before dist/main.bundle.js (platformInfo is evaluated at load time).
 */
(function () {
  'use strict';

  var params;
  try {
    params = new URLSearchParams(location.search);
  } catch (e) {
    params = null;
  }
  if (params && params.get('vexgo-mobile') === '0') {
    return;
  }

  var DESKTOP_CHROME_UA =
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

  var BLOCKED_TEXT = [
    'web-based vexcode',
    'not supported on this browser',
    'please use google chrome',
    'unsupported vexcode',
    'unsupported web browser',
    'ipad os',
    'ipados',
    'app store',
    'google play',
    'fire os',
    'fireos',
    'mobile devices',
    'not support text project on tablets',
    'laptop or desktop',
  ];

  function defineNavProp(name, value) {
    try {
      Object.defineProperty(navigator, name, {
        get: function () {
          return value;
        },
        configurable: true,
      });
    } catch (e) {}
  }

  function ensureChromeObject() {
    if (!window.chrome) {
      window.chrome = { runtime: {}, app: {}, csi: function () {}, loadTimes: function () {} };
    } else {
      window.chrome.runtime = window.chrome.runtime || {};
      window.chrome.app = window.chrome.app || {};
    }
  }

  function shouldSpoofNavigator() {
    var ua = (navigator.userAgent || '').toLowerCase();
    var isIOS =
      /ipad|iphone|ipod/i.test(navigator.platform || '') ||
      (ua.indexOf('mac') !== -1 && navigator.maxTouchPoints > 1);
    var isAndroid = ua.indexOf('android') !== -1;
    var isTouch = navigator.maxTouchPoints > 0;
    var isSafari = ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1;
    var isFirefox = ua.indexOf('firefox') !== -1;
    var hasRealDesktopChrome =
      ua.indexOf('chrome') !== -1 &&
      !!window.chrome &&
      !!window.chrome.runtime &&
      !isIOS &&
      !isAndroid &&
      !isTouch;

    return !hasRealDesktopChrome || isIOS || isAndroid || isTouch || isSafari || isFirefox;
  }

  ensureChromeObject();

  if (shouldSpoofNavigator()) {
    defineNavProp('userAgent', DESKTOP_CHROME_UA);
    defineNavProp('appVersion', '5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36');
    defineNavProp('platform', 'MacIntel');
    defineNavProp('maxTouchPoints', 0);
    defineNavProp('vendor', 'Google Inc.');
  }

  function textBlocked(text) {
    var t = (text || '').toLowerCase();
    if (!t) return false;
    for (var i = 0; i < BLOCKED_TEXT.length; i++) {
      if (t.indexOf(BLOCKED_TEXT[i]) !== -1) return true;
    }
    return false;
  }

  function removeBlockingUi() {
    var selectors =
      '.alert_window_2, .alert_window, .window.alert_window_2, ' +
      '.black_vca_lightbox, [class*="lightbox"], [class*="Lightbox"], ' +
      '.ReactModal__Overlay';

    document.querySelectorAll(selectors).forEach(function (node) {
      if (!textBlocked(node.innerText)) return;
      var root =
        node.closest('.ReactModal__Overlay') ||
        node.closest('[class*="lightbox"]') ||
        node.closest('[class*="Lightbox"]') ||
        node;
      if (root && root.parentElement) {
        root.parentElement.removeChild(root);
      } else {
        node.style.setProperty('display', 'none', 'important');
      }
      var btn = node.querySelector('button');
      if (btn) {
        try {
          btn.click();
        } catch (e) {}
      }
    });

    document.querySelectorAll('body *').forEach(function (el) {
      if (el.children.length > 8) return;
      if (!textBlocked(el.innerText)) return;
      if (!el.className || String(el.className).indexOf('alert') === -1) {
        if (!el.closest || !el.closest('.alert_window_2, [class*="lightbox"]')) return;
      }
      el.style.setProperty('display', 'none', 'important');
    });
  }

  function patchModalControl() {
    var ctrl = window.MODALCONTROL;
    if (!ctrl || ctrl.__vexgoPatched) return false;

    function wrap(name) {
      if (typeof ctrl[name] !== 'function') return;
      var orig = ctrl[name];
      ctrl[name] = function (message) {
        var msg = typeof message === 'string' ? message : '';
        if (textBlocked(msg)) return;
        return orig.apply(this, arguments);
      };
    }

    wrap('showUnsupportedBrowser');
    wrap('alert');
    wrap('showBlocklyAlert');
    ctrl.__vexgoPatched = true;
    return true;
  }

  function watchBlocks() {
    removeBlockingUi();
    patchModalControl();
  }

  watchBlocks();
  var ticks = 0;
  var poll = setInterval(function () {
    ticks += 1;
    watchBlocks();
    if (ticks >= 24) clearInterval(poll);
  }, 2000);

  window.__VEXGO_MOBILE_WEB_ENABLED__ = true;
})();
