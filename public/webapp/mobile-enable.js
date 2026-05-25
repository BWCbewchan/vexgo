/**
 * Unblock VEXcode GO web on tablets / phones.
 * Android: keep real UA so Web Bluetooth + install work.
 * iOS/iPad: light spoof (Chrome desktop UA) to bypass unsupported modal; keep real touch points.
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

  var REAL_UA = navigator.userAgent || '';
  var REAL_PLATFORM = navigator.platform || '';
  var REAL_MAX_TOUCH = navigator.maxTouchPoints || 0;

  function isRealIOS() {
    return (
      /iPad|iPhone|iPod/i.test(REAL_UA) ||
      /iPad|iPhone|iPod/i.test(REAL_PLATFORM) ||
      (REAL_UA.indexOf('Mac') !== -1 && REAL_MAX_TOUCH > 1)
    );
  }

  function isRealAndroid() {
    return /Android/i.test(REAL_UA);
  }

  window.__VEXGO_REAL_DEVICE__ = {
    userAgent: REAL_UA,
    platform: REAL_PLATFORM,
    maxTouchPoints: REAL_MAX_TOUCH,
    ios: isRealIOS(),
    android: isRealAndroid(),
    mobile: isRealIOS() || isRealAndroid() || REAL_MAX_TOUCH > 0,
  };

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

  /** Only spoof on iOS/iPad/Safari — not Android (needs real UA for BLE + PWA). */
  function shouldSpoofNavigator() {
    if (isRealAndroid()) return false;

    var ua = REAL_UA.toLowerCase();
    var isIOS = isRealIOS();
    var isSafari = ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1;
    var isFirefox = ua.indexOf('firefox') !== -1;
    var hasRealDesktopChrome =
      ua.indexOf('chrome') !== -1 &&
      !!window.chrome &&
      !!window.chrome.runtime &&
      !isIOS &&
      !isRealAndroid();

    return isIOS || isSafari || isFirefox || (!hasRealDesktopChrome && REAL_MAX_TOUCH > 0);
  }

  ensureChromeObject();

  if (shouldSpoofNavigator()) {
    defineNavProp('userAgent', DESKTOP_CHROME_UA);
    defineNavProp('appVersion', '5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36');
    defineNavProp('platform', 'MacIntel');
    if (REAL_MAX_TOUCH > 0) {
      defineNavProp('maxTouchPoints', REAL_MAX_TOUCH);
    } else {
      defineNavProp('maxTouchPoints', 0);
    }
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
