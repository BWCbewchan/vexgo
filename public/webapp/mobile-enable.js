/**
 * Allow VEXcode GO web on phones/tablets (official bundle blocks iOS/Android web).
 * Must run before dist/main.bundle.js so platformInfo sees a desktop Chrome profile.
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

  var ua = navigator.userAgent || '';
  var isIOS =
    /iPad|iPhone|iPod/i.test(navigator.platform || '') ||
    (ua.indexOf('Mac') !== -1 && navigator.maxTouchPoints > 1);
  var isAndroid = /Android/i.test(ua);
  if (!isIOS && !isAndroid) {
    return;
  }

  var desktopChromeUA =
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

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

  defineNavProp('userAgent', desktopChromeUA);
  defineNavProp('appVersion', '5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36');
  defineNavProp('platform', 'MacIntel');
  defineNavProp('maxTouchPoints', 0);

  window.__VEXGO_MOBILE_WEB_ENABLED__ = true;
})();
