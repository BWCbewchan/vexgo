/**
 * Loads VEXcode GO only in full browsers (Chrome, Edge, Firefox, Safari).
 * Cursor / VS Code embedded preview cannot finish executing main.bundle.js (~51MB).
 */
(function () {
  var ua = navigator.userAgent || '';
  var isCursor = /Cursor\//i.test(ua);
  var isVsCodeWebview =
    typeof acquireVsCodeApi === 'function' || location.protocol === 'vscode-webview:';

  function showEmbeddedWarning() {
    var app = document.getElementById('app');
    if (!app) return;

    var url = location.href.split('#')[0];
    app.innerHTML =
      '<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;box-sizing:border-box;font-family:system-ui,-apple-system,Segoe UI,sans-serif;background:#212121;color:#e5e5e5">' +
      '<div style="max-width:520px;text-align:center">' +
      '<p style="margin:0 0 8px;font-size:13px;color:#f97316;font-weight:600;letter-spacing:.04em">CURSOR BROWSER PREVIEW</p>' +
      '<h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#fff">VEXcode GO không chạy được trong cửa sổ xem trước của Cursor</h1>' +
      '<p style="margin:0 0 20px;font-size:15px;line-height:1.55;color:#a3a3a3">Ứng dụng cần tải bundle JavaScript rất lớn (~51MB). Trình duyệt nhúng trong Cursor (Electron) thường không hoàn tất quá trình này — màn hình chỉ còn nền xám đen.</p>' +
      '<p style="margin:0 0 24px;font-size:14px;color:#737373">Mở link sau bằng <strong style="color:#e5e5e5">Chrome</strong> hoặc <strong style="color:#e5e5e5">Microsoft Edge</strong> (chuột phải → Open in Browser, hoặc copy URL).</p>' +
      '<a href="' +
      url +
      '" target="_blank" rel="noopener" style="display:inline-block;margin-bottom:12px;padding:14px 28px;border-radius:12px;background:linear-gradient(135deg,#ea580c,#f97316);color:#000;font-weight:700;font-size:16px;text-decoration:none">Mở trong trình duyệt hệ thống</a>' +
      '<p style="margin:12px 0 0;font-size:12px;color:#525252;word-break:break-all">' +
      url +
      '</p>' +
      '<p style="margin:20px 0 0;font-size:13px;color:#525252">Chạy server: <code style="color:#a3a3a3">npm run dev</code> rồi mở URL trên.</p>' +
      '</div></div>';
    document.title = 'VEXcode GO — mở Chrome/Edge';
  }

  function loadScript(src, onload, onerror) {
    var s = document.createElement('script');
    s.src = src;
    s.async = false;
    s.onload = function () {
      if (onload) onload();
    };
    s.onerror = function () {
      if (onerror) onerror(new Error('Failed to load ' + src));
    };
    document.body.appendChild(s);
  }

  function loadSequential(list, done) {
    var i = 0;
    function next(err) {
      if (err) return done(err);
      if (i >= list.length) return done();
      loadScript(
        list[i],
        function () {
          i += 1;
          next();
        },
        next
      );
    }
    next();
  }

  if (isCursor || isVsCodeWebview) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', showEmbeddedWarning);
    } else {
      showEmbeddedWarning();
    }
    return;
  }

  var scripts = [
    'mobile-enable.js',
    'lib/@vexcode/blockly/blockly_compressed.js',
    'lib/@vexcode/blockly/blocks_compressed.js',
    'lib/@vexcode/blockly/cpp_compressed.js',
    'lib/@vexcode/blockly/javascript_compressed.js',
    'lib/@vexcode/blockly/python_compressed.js',
    'lib/@vexcode/blockly/msg/js/en.js',
    'lib/react/umd/react.production.min.js',
    'lib/react-dom/umd/react-dom.production.min.js',
    'lib/require.js',
    'dist/main.bundle.js',
  ];

  function start() {
    loadSequential(scripts, function (err) {
      if (err) {
        var app = document.getElementById('app');
        if (app) {
          app.innerHTML =
            '<p style="padding:16px;color:#f97316;font-family:system-ui,sans-serif">Load error: ' +
            String(err.message || err) +
            '</p>';
        }
        return;
      }
      if (typeof React === 'undefined' || typeof ReactDOM === 'undefined') {
        var app = document.getElementById('app');
        if (app) {
          app.innerHTML =
            '<p style="padding:16px;color:#f97316;font-family:system-ui,sans-serif">React did not load. Expected order: React → ReactDOM → require.js → main.bundle.js</p>';
        }
      }
      var patch = document.createElement('script');
      patch.src = 'vexgo-patch.js';
      patch.defer = true;
      document.body.appendChild(patch);

      var classroom = document.createElement('script');
      classroom.src = 'classroom-panel.js';
      classroom.defer = true;
      document.body.appendChild(classroom);

      var eyePanel = document.createElement('script');
      eyePanel.src = 'eye-sensor-panel.js';
      eyePanel.defer = true;
      document.body.appendChild(eyePanel);

      var mobileTouch = document.createElement('script');
      mobileTouch.src = 'vexgo-mobile-touch.js';
      mobileTouch.defer = true;
      document.body.appendChild(mobileTouch);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
