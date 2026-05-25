/**
 * VEX GO web on Android tablets/phones (Chrome).
 *
 * Root cause of black screen: AppBody renders an empty body_wrapper when
 * targetIsGO && OSisAndroid (see main.bundle MainPanel), even on Chrome.
 *
 * Fix: before main.bundle loads, spoof desktop Chrome UA (like iOS path) while
 * keeping real maxTouchPoints + chrome object so Web Bluetooth still works.
 */
(function () {
  'use strict';

  var params;
  try {
    params = new URLSearchParams(location.search);
  } catch (e) {
    params = null;
  }
  if (params && params.get('vexgo-android') === '0') {
    return;
  }

  function isAndroid() {
    var d = window.__VEXGO_REAL_DEVICE__;
    if (d && d.android !== undefined) return d.android;
    return /Android/i.test(navigator.userAgent || '');
  }

  function isAndroidChrome() {
    var ua = (navigator.userAgent || '').toLowerCase();
    return (
      isAndroid() &&
      ua.indexOf('chrome') !== -1 &&
      ua.indexOf('edg') === -1 &&
      ua.indexOf('opr') === -1
    );
  }

  if (!isAndroidChrome()) {
    return;
  }

  var DESKTOP_CHROME_UA =
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

  var realTouch =
    (window.__VEXGO_REAL_DEVICE__ && window.__VEXGO_REAL_DEVICE__.maxTouchPoints) ||
    navigator.maxTouchPoints ||
    5;

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

  if (!window.chrome) {
    window.chrome = { runtime: {}, app: {}, csi: function () {}, loadTimes: function () {} };
  } else {
    window.chrome.runtime = window.chrome.runtime || {};
    window.chrome.app = window.chrome.app || {};
  }

  defineNavProp('userAgent', DESKTOP_CHROME_UA);
  defineNavProp('appVersion', '5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36');
  defineNavProp('platform', 'MacIntel');
  defineNavProp('maxTouchPoints', realTouch > 0 ? realTouch : 5);
  defineNavProp('vendor', 'Google Inc.');

  document.documentElement.classList.add('vexgo-android-chrome-unlocked');

  window.__VEXGO_ANDROID_UI_UNLOCKED__ = true;
})();
