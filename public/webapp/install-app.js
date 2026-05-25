/**
 * PWA install — replaces toolbar Share with "Cài app" (no App Store / Play Store).
 */
(function () {
  'use strict';

  var deferredPrompt = null;
  var overlay = null;

  var INSTALL_ICON_HTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    '<path fill="currentColor" d="M17 1.01 7 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM12 17l-4-4 1.41-1.41L11 13.17V7h2v6.17l1.59-1.58L16 13l-4 4z"/></svg>';

  function uaInfo() {
    var real = window.__VEXGO_REAL_DEVICE__;
    if (real && (real.ios || real.android)) {
      return {
        ios: !!real.ios,
        android: !!real.android,
        desktop: !real.ios && !real.android,
      };
    }
    var ua = navigator.userAgent || '';
    var ios =
      /iPad|iPhone|iPod/i.test(ua) ||
      (ua.indexOf('Mac') !== -1 && navigator.maxTouchPoints > 1);
    var android = /Android/i.test(ua);
    return { ios: ios, android: android, desktop: !ios && !android };
  }

  function isInstalledPwa() {
    if (window.navigator.standalone) return true;
    try {
      if (window.matchMedia('(display-mode: standalone)').matches) return true;
      if (window.matchMedia('(display-mode: fullscreen)').matches && uaInfo().ios) return true;
    } catch (e) {}
    return false;
  }

  function hideInstallUi() {
    document
      .querySelectorAll('.tool_install_app, button.tool_share.toolbar_btn')
      .forEach(function (btn) {
        btn.classList.add('vexgo-install-hidden');
        btn.setAttribute('aria-hidden', 'true');
        btn.tabIndex = -1;
      });
    var fab = document.getElementById('vexgo-install-fab');
    if (fab) fab.style.display = 'none';
  }

  function applyToolbarInstallVisibility() {
    if (isInstalledPwa()) {
      hideInstallUi();
      return false;
    }
    document.querySelectorAll('.tool_install_app').forEach(function (btn) {
      btn.classList.remove('vexgo-install-hidden');
      btn.removeAttribute('aria-hidden');
      btn.tabIndex = 0;
    });
    return true;
  }

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    window.addEventListener('load', function () {
      navigator.serviceWorker
        .register('./sw.js', { scope: './' })
        .catch(function () {});
    });
  }

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredPrompt = e;
  });

  window.addEventListener('appinstalled', function () {
    deferredPrompt = null;
    closeOverlay();
    hideInstallUi();
  });

  try {
    var dm = window.matchMedia('(display-mode: standalone)');
    if (dm && dm.addEventListener) {
      dm.addEventListener('change', applyToolbarInstallVisibility);
    } else if (dm && dm.addListener) {
      dm.addListener(applyToolbarInstallVisibility);
    }
  } catch (e) {}

  function ensureOverlay() {
    if (overlay) return overlay;
    overlay = document.createElement('div');
    overlay.id = 'vexgo-install-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML =
      '<div id="vexgo-install-dialog">' +
      '<h3 id="vexgo-install-title">Cài VEXcode GO</h3>' +
      '<div id="vexgo-install-body"></div>' +
      '<div id="vexgo-install-actions">' +
      '<button type="button" id="vexgo-install-primary">Cài ngay</button>' +
      '<button type="button" id="vexgo-install-close">Đóng</button>' +
      '</div></div>';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeOverlay();
    });
    document.getElementById('vexgo-install-close').addEventListener('click', closeOverlay);
    return overlay;
  }

  function openOverlay(html, primaryLabel, onPrimary) {
    var o = ensureOverlay();
    document.getElementById('vexgo-install-body').innerHTML = html;
    var primary = document.getElementById('vexgo-install-primary');
    primary.textContent = primaryLabel || 'Cài ngay';
    primary.onclick = onPrimary || closeOverlay;
    primary.style.display = onPrimary ? '' : 'none';
    o.classList.add('is-open');
  }

  function closeOverlay() {
    if (overlay) overlay.classList.remove('is-open');
  }

  function promptNativeInstall() {
    if (!deferredPrompt) return Promise.resolve(false);
    deferredPrompt.prompt();
    return deferredPrompt.userChoice.then(function (choice) {
      deferredPrompt = null;
      return choice.outcome === 'accepted';
    });
  }

  function showInstallGuide() {
    if (isInstalledPwa()) return;

    var info = uaInfo();

    if (info.desktop && deferredPrompt) {
      openOverlay(
        '<p>Trên <strong>laptop / PC</strong> (Chrome hoặc Edge): cài VEXcode GO như một ứng dụng riêng trên máy — mở cửa sổ độc lập, không cần App Store.</p>',
        'Cài trên máy',
        function () {
          promptNativeInstall().then(function (ok) {
            if (!ok) closeOverlay();
          });
        }
      );
      return;
    }

    if (info.desktop) {
      openOverlay(
        '<p>Dùng <strong>Google Chrome</strong> hoặc <strong>Microsoft Edge</strong>.</p>' +
          '<ol><li>Mở menu <strong>⋮</strong> (góc phải).</li>' +
          '<li>Chọn <strong>Cài VEXcode GO…</strong> hoặc <strong>Install app</strong>.</li></ol>' +
          '<p>Hoặc biểu tượng <strong>⊕ Cài</strong> trên thanh địa chỉ.</p>',
        'Đóng',
        closeOverlay
      );
      return;
    }

    if (info.ios) {
      openOverlay(
        '<p>Trên <strong>iPad / iPhone</strong>: cài Web App từ <strong>Safari</strong> (không qua App Store).</p>' +
          '<ol>' +
          '<li>Mở đúng địa chỉ trang trong <strong>Safari</strong> (không dùng cửa sổ nhúng trong app khác).</li>' +
          '<li>Bấm nút <strong>Chia sẻ</strong> <span aria-hidden="true">⬆️</span> (dưới hoặc trên thanh Safari).</li>' +
          '<li>Vuốt xuống → <strong>Thêm vào Màn hình chính</strong> / <strong>Add to Home Screen</strong>.</li>' +
          '<li>Bấm <strong>Thêm</strong>, rồi mở <strong>VEX GO</strong> từ icon trên màn hình chính.</li>' +
          '</ol>' +
          '<p><strong>Lưu ý:</strong> Kết nối Brain qua Bluetooth trên iPhone cần trình duyệt <strong>Bluefy</strong> hoặc app VEXcode GO chính thức — Safari thường không kết nối được robot.</p>',
        'Đóng',
        closeOverlay
      );
      return;
    }

    if (info.android) {
      if (deferredPrompt) {
        openOverlay(
          '<p>Trên <strong>Android</strong> (Chrome): cài Web App trực tiếp — <strong>không</strong> qua CH Play.</p>',
          'Cài app',
          function () {
            promptNativeInstall().then(function (ok) {
              if (!ok) closeOverlay();
            });
          }
        );
        return;
      }
      openOverlay(
        '<p>Trên <strong>Android</strong> dùng <strong>Chrome</strong>:</p>' +
          '<ol><li>Menu <strong>⋮</strong> góc phải.</li>' +
          '<li><strong>Cài ứng dụng</strong> / <strong>Add to Home screen</strong> / <strong>Install app</strong>.</li></ol>' +
          '<p>Hoặc thông báo “Thêm vào màn hình chính” của Chrome.</p>',
        'Đóng',
        closeOverlay
      );
      return;
    }

    openOverlay('<p>Trình duyệt không hỗ trợ cài tự động. Dùng Chrome hoặc Edge.</p>', 'Đóng', closeOverlay);
  }

  function setInstallIcon(btn) {
    var iconBox = btn.querySelector('.icon');
    if (iconBox) {
      iconBox.style.height = '1.5em';
      iconBox.innerHTML = INSTALL_ICON_HTML;
    }
  }

  function patchShareButton(btn) {
    if (!btn || btn.dataset.vexgoInstall === '1') return;
    if (isInstalledPwa()) {
      hideInstallUi();
      return;
    }

    btn.dataset.vexgoInstall = '1';
    btn.classList.remove('tool_share', 'blue');
    btn.classList.add('tool_install_app', 'vexgo-install-btn');
    btn.title = 'Cài VEXcode GO (chỉ khi dùng trên web)';

    var cap = btn.querySelector('.icon_caption');
    if (cap) cap.textContent = 'Cài app';

    setInstallIcon(btn);
    btn.classList.remove('vexgo-install-hidden');

    btn.addEventListener(
      'click',
      function (e) {
        if (isInstalledPwa()) return;
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
        showInstallGuide();
      },
      true
    );
  }

  function scanShareButtons() {
    if (!applyToolbarInstallVisibility()) return;
    document.querySelectorAll('button.tool_share, .toolbar_btn.tool_share').forEach(patchShareButton);
  }

  function watchShareButtons() {
    if (isInstalledPwa()) hideInstallUi();
    else scanShareButtons();

    var tries = 0;
    var timer = setInterval(function () {
      tries += 1;
      if (isInstalledPwa()) hideInstallUi();
      else scanShareButtons();
      if (tries >= 40) clearInterval(timer);
    }, 500);

    var topmenu = document.querySelector('.topmenu');
    if (topmenu && typeof MutationObserver !== 'undefined') {
      var obs = new MutationObserver(function () {
        if (isInstalledPwa()) hideInstallUi();
        else scanShareButtons();
      });
      obs.observe(topmenu, { childList: true, subtree: true });
    }
  }

  registerServiceWorker();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', watchShareButtons);
  } else {
    watchShareButtons();
  }

  window.VEXGOInstall = {
    prompt: showInstallGuide,
    isInstalled: isInstalledPwa,
    canPrompt: function () {
      return !!deferredPrompt;
    },
  };
})();
