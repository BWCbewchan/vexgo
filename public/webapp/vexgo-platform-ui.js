/**
 * Platform tips: PWA install, BLE paths, Mac Safari → Chrome.
 */
(function () {
  'use strict';

  var DISMISS_KEY = 'vexgo_platform_banner_v1';

  function plat() {
    return window.VEXGOPlatform || null;
  }

  function dismissed(kind) {
    try {
      var raw = localStorage.getItem(DISMISS_KEY);
      if (!raw) return false;
      var o = JSON.parse(raw);
      return !!o[kind];
    } catch (e) {
      return false;
    }
  }

  function setDismissed(kind) {
    try {
      var o = {};
      try {
        o = JSON.parse(localStorage.getItem(DISMISS_KEY) || '{}');
      } catch (e2) {}
      o[kind] = Date.now();
      localStorage.setItem(DISMISS_KEY, JSON.stringify(o));
    } catch (e) {}
  }

  function bannerKind() {
    var p = plat();
    if (!p) return null;
    var s = p.get();
    var c = p.caps();
    if (s.ios && !c.webBle) return 'ios';
    if (s.mac && s.safari && !c.webBle) return 'mac-safari';
    if (s.android && c.webBle && !s.standalone) return 'android-install';
    return null;
  }

  function bodyHtml(kind) {
    if (kind === 'ios') {
      return (
        '<strong>iPhone / iPad</strong>' +
        '<p>Lập trình & Drive hoạt động trên web. <em>Kết nối Brain qua Bluetooth</em> cần một trong các cách sau:</p>' +
        '<ul>' +
        '<li><b>Android + Chrome</b> — Connect Brain trực tiếp</li>' +
        '<li><b>Mac / PC + Chrome hoặc Edge</b></li>' +
        '<li>App <b>VEXcode GO</b> (App Store)</li>' +
        '</ul>' +
        '<p class="vexgo-platform-banner-sub">Cài shortcut: Safari → Chia sẻ → <b>Thêm vào Màn hình chính</b>.</p>'
      );
    }
    if (kind === 'mac-safari') {
      return (
        '<strong>Mac — Safari</strong>' +
        '<p>Safari không hỗ trợ Bluetooth cho VEX GO web. Để <b>Connect Brain</b>, mở trang này bằng <b>Google Chrome</b> hoặc <b>Microsoft Edge</b> (cùng URL).</p>' +
        '<p class="vexgo-platform-banner-sub">Lập trình trên Safari vẫn dùng được; chỉ kết nối robot cần Chrome/Edge.</p>'
      );
    }
    if (kind === 'android-install') {
      return (
        '<strong>Android</strong>' +
        '<p>Bluetooth sẵn sàng. Bấm <b>Cài app</b> (góc màn hình) hoặc menu Chrome → <b>Cài ứng dụng</b> để mở nhanh như app.</p>'
      );
    }
    return '';
  }

  function actionsHtml(kind) {
    var html = '';
    if (kind === 'ios' || kind === 'android-install') {
      html +=
        '<button type="button" class="vexgo-platform-btn vexgo-platform-btn-primary" data-action="install">Cài app</button>';
    }
    if (kind === 'mac-safari') {
      html +=
        '<button type="button" class="vexgo-platform-btn vexgo-platform-btn-primary" data-action="copy-url">Copy link Chrome</button>';
    }
    html +=
      '<button type="button" class="vexgo-platform-btn" data-action="dismiss">Đóng</button>';
    return html;
  }

  function mountBanner() {
    var kind = bannerKind();
    if (!kind || dismissed(kind)) {
      var old = document.getElementById('vexgo-platform-banner');
      if (old) old.remove();
      return;
    }

    var el = document.getElementById('vexgo-platform-banner');
    if (!el) {
      el = document.createElement('div');
      el.id = 'vexgo-platform-banner';
      el.setAttribute('role', 'region');
      el.setAttribute('aria-label', 'Platform tips');
      document.body.appendChild(el);
    }

    el.className = 'vexgo-platform-banner vexgo-platform-banner--' + kind;
    el.innerHTML =
      '<div class="vexgo-platform-banner-inner">' +
      '<button type="button" class="vexgo-platform-banner-close" aria-label="Close">×</button>' +
      '<div class="vexgo-platform-banner-content">' +
      bodyHtml(kind) +
      '</div>' +
      '<div class="vexgo-platform-banner-actions">' +
      actionsHtml(kind) +
      '</div></div>';

    el.querySelector('.vexgo-platform-banner-close').onclick = function () {
      setDismissed(kind);
      el.remove();
    };

    el.querySelectorAll('[data-action]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var action = btn.getAttribute('data-action');
        if (action === 'dismiss') {
          setDismissed(kind);
          el.remove();
          return;
        }
        if (action === 'install' && window.VEXGOInstall && window.VEXGOInstall.prompt) {
          window.VEXGOInstall.prompt();
          return;
        }
        if (action === 'copy-url') {
          var url = location.href.split('#')[0];
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(url).catch(function () {});
          }
        }
      });
    });
  }

  function waitAndMount() {
    var tries = 0;
    var timer = setInterval(function () {
      tries += 1;
      if (document.getElementById('master_wrapper') || tries > 120) {
        clearInterval(timer);
        mountBanner();
      }
    }, 300);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitAndMount);
  } else {
    waitAndMount();
  }

  window.addEventListener('orientationchange', function () {
    setTimeout(mountBanner, 200);
  });

  window.addEventListener('resize', function () {
    setTimeout(mountBanner, 150);
  });

  window.VEXGOPlatformUI = { refresh: mountBanner };
})();
