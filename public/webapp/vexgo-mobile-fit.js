/**
 * Scale the VEXcode UI to fit phone width — less horizontal scrolling.
 */
(function () {
  'use strict';

  var MIN_SCALE = 0.52;
  var MAX_SCALE = 1;
  var DESIGN_WIDTH = 1180;

  function realDevice() {
    return window.__VEXGO_REAL_DEVICE__ || {};
  }

  function isPhoneLike() {
    var d = realDevice();
    if (d.mobile && window.innerWidth <= 1024) return true;
    return window.innerWidth <= 768 || (window.innerHeight <= 520 && window.innerWidth <= 980);
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
    var nodes = root.querySelectorAll('.topmenu, .tabbed_header, .body_wrapper');
    nodes.forEach(function (el) {
      var r = el.scrollWidth || 0;
      if (r > maxW) maxW = r;
    });
    return maxW;
  }

  function applyFit() {
    if (!isPhoneLike()) {
      clearFit();
      return;
    }

    var root = document.getElementById('master_wrapper');
    if (!root) return;

    document.documentElement.classList.add('vexgo-mobile-active');

    root.style.transform = 'none';
    root.style.width = '';

    var naturalW = Math.max(measureOverflowWidth(root), DESIGN_WIDTH);
    var vw = window.innerWidth;
    var scale = Math.min(MAX_SCALE, vw / naturalW);
    if (scale < MIN_SCALE) scale = MIN_SCALE;

    document.documentElement.style.setProperty('--vexgo-ui-scale', String(scale));
    root.style.width = (100 / scale).toFixed(4) + '%';
    root.style.height = (100 / scale).toFixed(4) + '%';
    root.style.transform = 'scale(' + scale + ')';
    root.style.transformOrigin = 'top left';
  }

  function scheduleFit() {
    window.requestAnimationFrame(function () {
      applyFit();
    });
  }

  function waitForApp() {
    var tries = 0;
    var timer = setInterval(function () {
      tries += 1;
      if (document.getElementById('master_wrapper')) {
        clearInterval(timer);
        scheduleFit();
        if (typeof MutationObserver !== 'undefined') {
          var obs = new MutationObserver(function () {
            scheduleFit();
          });
          obs.observe(document.getElementById('master_wrapper'), {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class', 'style'],
          });
          setTimeout(function () {
            obs.disconnect();
          }, 90000);
        }
      } else if (tries > 160) {
        clearInterval(timer);
      }
    }, 300);
  }

  window.addEventListener('resize', scheduleFit);
  window.addEventListener('orientationchange', function () {
    setTimeout(scheduleFit, 200);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForApp);
  } else {
    waitForApp();
  }

  window.VEXGOMobileFit = { refresh: scheduleFit, isActive: isPhoneLike };
})();
