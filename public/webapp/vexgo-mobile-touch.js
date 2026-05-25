/**
 * Mobile touch fixes: Brain menu, connect panel, optional install FAB.
 */
(function () {
  'use strict';

  function realDevice() {
    return window.__VEXGO_REAL_DEVICE__ || {};
  }

  function isCoarsePointer() {
    try {
      if (window.matchMedia('(pointer: coarse)').matches) return true;
    } catch (e) {}
    return realDevice().mobile || navigator.maxTouchPoints > 0;
  }

  function findBrainButton() {
    return document.querySelector(
      '.brain_button.toolbar_btn, .toolbar_btn.brain_button, .topmenu .brain_button, [class*="brain_button"].toolbar_btn'
    );
  }

  function findBrainPanel() {
    return (
      document.getElementById('brain_info') ||
      document.querySelector('#brain_info_dropdown #brain_info') ||
      document.querySelector('.dropdownmenu_options.active #brain_info')
    );
  }

  function positionBrainPanel() {
    var panel = findBrainPanel();
    var btn = findBrainButton();
    if (!panel || !btn) return;

    if (!document.documentElement.classList.contains('vexgo-mobile-active')) return;

    var opts = panel.closest('.dropdownmenu_options');
    if (opts && !opts.classList.contains('active')) return;

    var r = btn.getBoundingClientRect();
    var top = Math.round(r.bottom + 4);
    var maxH = Math.max(200, window.innerHeight - top - 12);

    panel.style.setProperty('position', 'fixed', 'important');
    panel.style.setProperty('left', '8px', 'important');
    panel.style.setProperty('right', '8px', 'important');
    panel.style.setProperty('top', top + 'px', 'important');
    panel.style.setProperty('width', 'auto', 'important');
    panel.style.setProperty('max-width', 'none', 'important');
    panel.style.setProperty('max-height', maxH + 'px', 'important');
    panel.style.setProperty('overflow-y', 'auto', 'important');
    panel.style.setProperty('z-index', '2147483000', 'important');
    panel.style.setProperty('-webkit-overflow-scrolling', 'touch');
  }

  var brainTapLock = 0;

  function tapBrainButton(e) {
    var btn = findBrainButton();
    if (!btn) return;
    var now = Date.now();
    if (now - brainTapLock < 450) return;
    brainTapLock = now;
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    btn.click();
    setTimeout(positionBrainPanel, 80);
    setTimeout(positionBrainPanel, 350);
  }

  function syncDropdownPortal() {
    document.querySelectorAll('.dropdownmenu_options').forEach(function (opts) {
      var portal = opts.closest('.dropdownmenu_portal');
      if (!portal) return;
      if (opts.classList.contains('active')) {
        portal.style.pointerEvents = 'auto';
        portal.style.zIndex = '2147482500';
      } else {
        portal.style.pointerEvents = '';
        portal.style.zIndex = '';
      }
    });
  }

  function patchBrainButton() {
    var btn = findBrainButton();
    if (!btn || btn.dataset.vexgoTouch === '1') return;
    btn.dataset.vexgoTouch = '1';
    btn.style.touchAction = 'manipulation';
    btn.style.cursor = 'pointer';

    btn.addEventListener(
      'touchend',
      function (e) {
        tapBrainButton(e);
      },
      { passive: false }
    );
  }

  function patchConnectButtons() {
    document
      .querySelectorAll(
        '#brain_info .action_btn, #brain_info button.vcj, .connect_btn_brain_info .action_btn'
      )
      .forEach(function (btn) {
        if (btn.dataset.vexgoTouch === '1') return;
        btn.dataset.vexgoTouch = '1';
        btn.style.touchAction = 'manipulation';
        btn.style.minHeight = '44px';
      });
  }

  function showBleHintIfNeeded() {
    var d = realDevice();
    if (!d.ios) return;
    if (navigator.bluetooth) return;

    document.addEventListener(
      'click',
      function (e) {
        var t = e.target;
        if (!t || !t.closest) return;
        var hit = t.closest(
          '#brain_info .action_btn, .connect_btn_brain_info .action_btn, .brain_connection_control button'
        );
        if (!hit) return;
        var label = (hit.textContent || '').toLowerCase();
        if (label.indexOf('connect') === -1 && label.indexOf('pair') === -1) return;

        if (document.getElementById('vexgo-ble-hint')) return;

        var hint = document.createElement('div');
        hint.id = 'vexgo-ble-hint';
        hint.setAttribute('role', 'alert');
        hint.innerHTML =
          '<strong>Kết nối Brain trên iPhone/iPad</strong>' +
          '<p>Safari <em>không</em> hỗ trợ Bluetooth cho VEX GO web. Dùng một trong các cách sau:</p>' +
          '<ul>' +
          '<li><strong>Android + Chrome</strong> — bấm Connect Brain bình thường.</li>' +
          '<li><strong>iOS:</strong> cài app trình duyệt <strong>Bluefy</strong> (hỗ trợ Web Bluetooth), mở lại trang này trong Bluefy.</li>' +
          '<li>Hoặc dùng app <strong>VEXcode GO</strong> chính thức từ App Store để kết nối robot.</li>' +
          '</ul>' +
          '<button type="button" id="vexgo-ble-hint-close">Đóng</button>';
        document.body.appendChild(hint);
        document.getElementById('vexgo-ble-hint-close').addEventListener('click', function () {
          hint.remove();
        });
      },
      true
    );
  }

  function ensureMobileInstallFab() {
    if (!isCoarsePointer()) return;
    if (window.VEXGOInstall && window.VEXGOInstall.isInstalled && window.VEXGOInstall.isInstalled()) {
      return;
    }
    if (document.getElementById('vexgo-install-fab')) return;

    var fab = document.createElement('button');
    fab.id = 'vexgo-install-fab';
    fab.type = 'button';
    fab.title = 'Cài VEXcode GO';
    fab.textContent = 'Cài app';
    fab.addEventListener('click', function (e) {
      e.preventDefault();
      if (window.VEXGOInstall && window.VEXGOInstall.prompt) window.VEXGOInstall.prompt();
    });
    document.body.appendChild(fab);
  }

  function watchDropdownOpen() {
    if (typeof MutationObserver === 'undefined') return;
    var obs = new MutationObserver(function () {
      syncDropdownPortal();
      positionBrainPanel();
      patchConnectButtons();
    });
    obs.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'style'],
    });
  }

  function init() {
    if (!isCoarsePointer()) return;
    patchBrainButton();
    patchConnectButtons();
    showBleHintIfNeeded();
    ensureMobileInstallFab();
    watchDropdownOpen();

    var tries = 0;
    var timer = setInterval(function () {
      tries += 1;
      patchBrainButton();
      patchConnectButtons();
      syncDropdownPortal();
      ensureMobileInstallFab();
      positionBrainPanel();
      if (tries >= 50) clearInterval(timer);
    }, 500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.VEXGOMobileTouch = { openBrain: tapBrainButton, repositionBrain: positionBrainPanel };
})();
