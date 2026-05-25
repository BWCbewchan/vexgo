/**
 * VEX GO — platform detection & capabilities (real device, before/after UA spoof).
 */
(function () {
  'use strict';

  var UA = navigator.userAgent || '';
  var PLATFORM = navigator.platform || '';
  var MAX_TOUCH = navigator.maxTouchPoints || 0;

  function detect() {
    var ios =
      /iPad|iPhone|iPod/i.test(UA) ||
      /iPad|iPhone|iPod/i.test(PLATFORM) ||
      (UA.indexOf('Mac') !== -1 && MAX_TOUCH > 1);
    var android = /Android/i.test(UA);
    var mac =
      !ios &&
      !android &&
      (UA.indexOf('Mac') !== -1 || PLATFORM.indexOf('Mac') !== -1);
    var win = !ios && !android && /Win/i.test(PLATFORM);
    var coarse = false;
    try {
      coarse = window.matchMedia('(pointer: coarse)').matches;
    } catch (e) {}
    var narrow = window.innerWidth <= 1024;
    var phone =
      ios || android || (coarse && narrow) || window.innerWidth <= 640;
    var tablet = ios && window.innerWidth > 640;
    var standalone = false;
    try {
      standalone =
        !!navigator.standalone ||
        window.matchMedia('(display-mode: standalone)').matches ||
        window.matchMedia('(display-mode: fullscreen)').matches;
    } catch (e2) {}
    var safari =
      /Safari/i.test(UA) && !/Chrome|CriOS|EdgiOS|FxiOS/i.test(UA);
    var chrome = /Chrome/i.test(UA) && !/Edg/i.test(UA);
    return {
      ua: UA,
      platform: PLATFORM,
      maxTouchPoints: MAX_TOUCH,
      ios: ios,
      android: android,
      mac: mac,
      windows: win,
      mobile: phone || (tablet && narrow),
      tablet: tablet,
      coarse: coarse,
      standalone: standalone,
      safari: safari,
      chrome: chrome,
    };
  }

  var state = detect();

  window.__VEXGO_REAL_DEVICE__ = {
    userAgent: state.ua,
    platform: state.platform,
    maxTouchPoints: state.maxTouchPoints,
    ios: state.ios,
    android: state.android,
    mac: state.mac,
    mobile: state.mobile,
    tablet: state.tablet,
  };

  function hasWebBle() {
    try {
      return !!(navigator.bluetooth && typeof navigator.bluetooth.requestDevice === 'function');
    } catch (e) {
      return false;
    }
  }

  function capabilities() {
    var ble = hasWebBle();
    return {
      webBle: ble,
      pwaInstall: state.ios || state.android || (state.mac && ble),
      brainConnectWeb: ble,
      brainConnectHint: !ble,
      preferChromeOnMac: state.mac && state.safari && !ble,
      codeAndBlocks: true,
      driveTab: true,
    };
  }

  function applyDocumentClasses() {
    var html = document.documentElement;
    var caps = capabilities();
    var list = [
      'vexgo-platform-ios',
      'vexgo-platform-android',
      'vexgo-platform-mac',
      'vexgo-platform-mobile',
      'vexgo-platform-tablet',
      'vexgo-platform-standalone',
      'vexgo-platform-safari',
      'vexgo-ble-available',
      'vexgo-ble-unavailable',
    ];
    list.forEach(function (c) {
      html.classList.remove(c);
    });
    if (state.ios) html.classList.add('vexgo-platform-ios');
    if (state.android) html.classList.add('vexgo-platform-android');
    if (state.mac) html.classList.add('vexgo-platform-mac');
    if (state.mobile) html.classList.add('vexgo-platform-mobile');
    if (state.tablet) html.classList.add('vexgo-platform-tablet');
    if (state.standalone) html.classList.add('vexgo-platform-standalone');
    if (state.safari) html.classList.add('vexgo-platform-safari');
    if (caps.webBle) html.classList.add('vexgo-ble-available');
    else html.classList.add('vexgo-ble-unavailable');
  }

  function refresh() {
    state = detect();
    window.__VEXGO_REAL_DEVICE__ = {
      userAgent: state.ua,
      platform: state.platform,
      maxTouchPoints: state.maxTouchPoints,
      ios: state.ios,
      android: state.android,
      mac: state.mac,
      mobile: state.mobile,
      tablet: state.tablet,
    };
    applyDocumentClasses();
    return state;
  }

  applyDocumentClasses();

  window.addEventListener('resize', function () {
    refresh();
  });
  window.addEventListener('orientationchange', function () {
    setTimeout(refresh, 120);
  });

  window.VEXGOPlatform = {
    get: function () {
      return state;
    },
    caps: capabilities,
    hasWebBle: hasWebBle,
    refresh: refresh,
    isMobileLayout: function () {
      return state.mobile || state.tablet || window.innerWidth <= 900;
    },
    shouldUiFit: function () {
      return (
        state.mobile ||
        (state.tablet && window.innerWidth <= 1100) ||
        window.innerWidth <= 768 ||
        (window.innerHeight <= 520 && window.innerWidth <= 980)
      );
    },
  };
})();
