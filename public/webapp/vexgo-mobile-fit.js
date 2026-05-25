/**
 * Scale UI to viewport — phones, iPad, narrow Mac windows.
 */
(function () {
  'use strict';

  var MIN_SCALE_PHONE = 0.5;
  var MIN_SCALE_TABLET = 0.62;
  var MAX_SCALE = 1;
  var DESIGN_WIDTH = 1180;

  function shouldFit() {
    if (window.VEXGOPlatform && typeof window.VEXGOPlatform.shouldUiFit === 'function') {
      return window.VEXGOPlatform.shouldUiFit();
    }
    return window.innerWidth <= 768 || (window.innerHeight <= 520 && window.innerWidth <= 980);
  }

  function minScale() {
    var p = window.VEXGOPlatform && window.VEXGOPlatform.get();
    var w = window.innerWidth;
    if (p && p.android && w >= 900) return 0.72;
    if (p && p.tablet && w > 700) return MIN_SCALE_TABLET;
    if (p && p.android && w >= 600) return MIN_SCALE_TABLET;
    return MIN_SCALE_PHONE;
  }

  function clearFit() {
    document.documentElement.classList.remove('vexgo-mobile-active');
    document.documentElement.style.removeProperty('--vexgo-ui-scale');
    var w = document.getElementById('master_wrapper');
    if (w) {
      w.style.removeProperty('transform');
      w.style.removeProperty('width');
      w.style.removeProperty('height');
    }
  }

  function measureOverflowWidth(root) {
    var maxW = root.scrollWidth || 0;
    root.querySelectorAll('.topmenu, .tabbed_header, .body_wrapper').forEach(function (el) {
      var r = el.scrollWidth || 0;
      if (r > maxW) maxW = r;
    });
    return maxW;
  }

  function applyFit() {
    if (!shouldFit()) {
      clearFit();
      if (window.VEXGOPlatform) window.VEXGOPlatform.refresh();
      return;
    }

    var root = document.getElementById('master_wrapper');
    if (!root) return;

    document.documentElement.classList.add('vexgo-mobile-active');
    if (window.VEXGOPlatform) window.VEXGOPlatform.refresh();

    root.style.transform = 'none';
    root.style.width = '';

    var naturalW = Math.max(measureOverflowWidth(root), DESIGN_WIDTH);
    var vw = window.innerWidth;
    var scale = Math.min(MAX_SCALE, vw / naturalW);
    var floor = minScale();
    if (scale < floor) scale = floor;

    document.documentElement.style.setProperty('--vexgo-ui-scale', String(scale));
    root.style.width = (100 / scale).toFixed(4) + '%';
    root.style.height = (100 / scale).toFixed(4) + '%';
    root.style.transform = 'scale(' + scale + ')';
    root.style.transformOrigin = 'top left';
  }

  var debounceTimer;
  function scheduleFit() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      window.requestAnimationFrame(applyFit);
    }, 80);
  }

  function waitForApp() {
    var tries = 0;
    var timer = setInterval(function () {
      tries += 1;
      if (document.getElementById('master_wrapper')) {
        clearInterval(timer);
        scheduleFit();
        if (typeof MutationObserver !== 'undefined') {
          var obs = new MutationObserver(scheduleFit);
          obs.observe(document.getElementById('master_wrapper'), {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class'],
          });
          setTimeout(function () {
            obs.disconnect();
          }, 60000);
        }
      } else if (tries > 160) {
        clearInterval(timer);
      }
    }, 300);
  }

  window.addEventListener('resize', scheduleFit);
  window.addEventListener('orientationchange', function () {
    setTimeout(scheduleFit, 220);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForApp);
  } else {
    waitForApp();
  }

  window.VEXGOMobileFit = { refresh: scheduleFit, isActive: shouldFit };
})();
