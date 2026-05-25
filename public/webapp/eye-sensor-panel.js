/**
 * Side toolbar: Eye Sensor popup + LED Bumper status dot (no extra Class button).
 */
(function () {
  'use strict';

  var EYE_ICON = 'static/img/icons/go_python_category_icons/eye.svg';
  var BUMPER_SVG =
    '<svg class="vexgo-bumper-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 48" aria-hidden="true">' +
    '<path d="M50.04326,28.55314c.00214-.05847.00634-.1164.00732-.17516H50.043c-.00642-4.5074-.00642-7.768-.00642-7.768a31.2198,31.2198,0,0,0-.47221-3.77791l-1.889-10.11946A7.96866,7.96866,0,0,0,39.81591,0H20.11672a7.88749,7.88749,0,0,0-7.85946,6.67886l-1.889,10.15323A34.03174,34.03174,0,0,0,9.92973,20.61V39.60088A8.42164,8.42164,0,0,0,18.32885,48h23.3423a8.42164,8.42164,0,0,0,8.39912-8.39912C50.05618,35.78492,50.048,31.848,50.04326,28.55314ZM12.0242,17.18065l.00412-.01948.00362-.01956,1.889-10.15323.00445-.02384.00379-.024a6.20929,6.20929,0,0,1,6.18754-5.24832H39.81591a6.27505,6.27505,0,0,1,6.18985,5.29621l.00289.01737.00321.0173,1.889,10.11946.00354.01906.004.019a30.76732,30.76732,0,0,1,.4359,3.42935c0,.05679.00016,3.35825.00658,7.87256a7.31832,7.31832,0,0,1-7.30276,7.057h-22.116a7.32113,7.32113,0,0,1-7.3101-7.16161H11.622V20.61A33.467,33.467,0,0,1,12.0242,17.18065ZM41.67115,46.30774H18.32885A6.71442,6.71442,0,0,1,11.622,39.60088V33.46752a9.00051,9.00051,0,0,0,7.31018,3.76433h5.07389v1.49132a2.173,2.173,0,0,0,2.16661,2.16661h7.65474A2.173,2.173,0,0,0,35.994,38.72317V37.23185h5.05413a9.00055,9.00055,0,0,0,7.312-3.76672c.00453,2.006.01037,4.0916.01787,6.13575A6.71442,6.71442,0,0,1,41.67115,46.30774Z"></path>' +
    '<path d="M18.76384,22.5914h22.405a3.15422,3.15422,0,0,0,2.87039-3.38863V8.11986A3.15419,3.15419,0,0,0,41.1688,4.73123h-22.405a3.15413,3.15413,0,0,0-2.87031,3.38863V19.20277A3.15416,3.15416,0,0,0,18.76384,22.5914Z"></path>' +
    '</svg>';
  var panelOpen = false;

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function isPanelOpen() {
    var panel = document.getElementById('vexgo-eye-panel');
    return panel && panel.classList.contains('is-open');
  }

  function getGoEyeSensor() {
    try {
      if (typeof webapp !== 'undefined' && webapp.goController && webapp.goController.sensorValues) {
        return webapp.goController.sensorValues.eye;
      }
    } catch (e) {}
    return null;
  }

  function boolDisplay(v) {
    return v ? 'TRUE' : 'FALSE';
  }

  function readEyeSensorRows() {
    var eye = getGoEyeSensor();
    if (eye) {
      return [
        { label: 'Found Object?', value: boolDisplay(eye.foundObject) },
        { label: 'Detect Red?', value: boolDisplay(eye.detectsRed) },
        { label: 'Detect Blue?', value: boolDisplay(eye.detectsBlue) },
        { label: 'Detect Green?', value: boolDisplay(eye.detectsGreen) },
        { label: 'Brightness', value: String(eye.brightness != null ? eye.brightness : 0) + ' %' },
        { label: 'Hue', value: String(eye.hue != null ? eye.hue : 0) + ' degrees' },
      ];
    }
    return readEyeSensorRowsFromDom();
  }

  function readEyeSensorRowsFromDom() {
    var cols = document.querySelectorAll('.sensor_table_container .table_column');
    for (var i = 0; i < cols.length; i++) {
      var title = cols[i].querySelector('.table_title');
      if (!title || (title.textContent || '').indexOf('Eye Sensor') === -1) continue;
      var rows = [];
      cols[i].querySelectorAll('.sensor_row').forEach(function (row) {
        var label = row.querySelector('.sensor_row_label');
        var value = row.querySelector('.sensor_row_value');
        if (label && value) {
          rows.push({
            label: (label.textContent || '').trim(),
            value: (value.textContent || '').trim(),
          });
        }
      });
      return rows.length ? rows : null;
    }
    return null;
  }

  function renderEyeSensorTable() {
    var host = document.getElementById('vexgo-eye-sensor-rows');
    if (!host) return;

    var rows = readEyeSensorRows();
    if (!rows || !rows.length) {
      host.innerHTML =
        '<div class="vc-eye-empty">Connect a Brain to see live Eye Sensor values.</div>';
      return;
    }

    host.innerHTML = rows
      .map(function (r) {
        return (
          '<div class="sensor_row">' +
          '<div class="remote_flex_row">' +
          '<div class="sensor_row_label no_right_border label_width">' +
          escapeHtml(r.label) +
          '</div>' +
          '<div class="sensor_row_value value_width value_font">' +
          escapeHtml(r.value) +
          '</div></div></div>'
        );
      })
      .join('');
  }

  function isMobileLayout() {
    return window.innerWidth <= 768 || window.innerHeight <= 520;
  }

  function positionEyePanel() {
    var panel = document.getElementById('vexgo-eye-panel');
    var anchor =
      document.getElementById('vexgo-eye-toggle') ||
      document.getElementById('side_panel_controls');
    if (!panel || !anchor) return;

    if (isMobileLayout()) {
      panel.classList.add('vexgo-eye-panel--sheet');
      panel.style.top = 'auto';
      panel.style.bottom = '';
      panel.style.left = '';
      panel.style.right = '';
      return;
    }

    panel.classList.remove('vexgo-eye-panel--sheet');
    var r = anchor.getBoundingClientRect();
    panel.style.bottom = 'auto';
    panel.style.left = 'auto';
    panel.style.top = Math.round(r.bottom + 6) + 'px';
    panel.style.right = Math.max(8, Math.round(window.innerWidth - r.right)) + 'px';
  }

  function setToggleActive(on) {
    var btn = document.getElementById('vexgo-eye-toggle');
    if (!btn) return;
    if (on) btn.classList.add('active');
    else btn.classList.remove('active');
  }

  function openEyePanel() {
    mountEyePanelOnce();
    var panel = document.getElementById('vexgo-eye-panel');
    if (!panel) return;

    panel.classList.add('is-open');
    panelOpen = true;
    setToggleActive(true);
    positionEyePanel();
    renderEyeSensorTable();
  }

  function closeEyePanel() {
    var panel = document.getElementById('vexgo-eye-panel');
    if (panel) panel.classList.remove('is-open');
    panelOpen = false;
    setToggleActive(false);
  }

  function toggleEyePanel() {
    if (isPanelOpen()) closeEyePanel();
    else openEyePanel();
  }

  function mountEyePanelOnce() {
    if (document.getElementById('vexgo-eye-panel')) return;

    var panel = document.createElement('div');
    panel.id = 'vexgo-eye-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Eye Sensor');
    panel.innerHTML =
      '<div class="vexgo-eye-panel-head">' +
      '<img src="' +
      EYE_ICON +
      '" width="22" height="22" alt="" />' +
      '<strong>Eye Sensor</strong>' +
      '<button type="button" id="vexgo-eye-close" aria-label="Close">×</button></div>' +
      '<div class="vc-eye-sensor-wrap table_data sensor_table flex_column">' +
      '<div id="vexgo-eye-sensor-rows" class="stretch_table"></div></div>';

    document.body.appendChild(panel);
    document.getElementById('vexgo-eye-close').addEventListener('click', closeEyePanel);

    window.addEventListener('resize', function () {
      if (isPanelOpen()) positionEyePanel();
    });
    window.addEventListener('orientationchange', function () {
      setTimeout(function () {
        if (isPanelOpen()) positionEyePanel();
      }, 120);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isPanelOpen()) closeEyePanel();
    });
  }

  function getLedBumperPressed() {
    try {
      if (typeof webapp !== 'undefined' && webapp.goController && webapp.goController.sensorValues) {
        var sv = webapp.goController.sensorValues;
        if (sv.getPort) {
          var port = sv.getPort(1);
          if (port && port.bumperCurrentlyPressed) return true;
          if (port && port.bumperPressed) return true;
        }
      }
    } catch (e) {}
    return readBumperPressedFromDom();
  }

  function readBumperPressedFromDom() {
    var cols = document.querySelectorAll('.sensor_table_container .table_column');
    for (var i = 0; i < cols.length; i++) {
      var title = cols[i].querySelector('.table_title');
      if (!title || (title.textContent || '').indexOf('LED Bumper') === -1) continue;
      var value = cols[i].querySelector('.sensor_row_value');
      if (!value) return false;
      var t = (value.textContent || '').toUpperCase();
      return t.indexOf('TRUE') !== -1;
    }
    return false;
  }

  function updateBumperDot() {
    var wrap = document.getElementById('vexgo-bumper-dot');
    if (!wrap) return;
    var pressed = getLedBumperPressed();
    wrap.classList.toggle('is-pressed', pressed);
    wrap.classList.toggle('is-released', !pressed);
    wrap.title = 'LED Bumper — Pressed: ' + (pressed ? 'TRUE' : 'FALSE');
  }

  function mountBumperDot() {
    var controls = document.getElementById('side_panel_controls');
    if (!controls) return;

    var wrap = document.getElementById('vexgo-bumper-dot');
    if (wrap) {
      if (!wrap.querySelector('.vexgo-bumper-icon') || !wrap.querySelector('.vexgo-bumper-label')) {
        wrap.innerHTML =
          '<div class="vexgo-bumper-icon">' +
          BUMPER_SVG +
          '</div><span class="vexgo-bumper-label">LED Bumper</span>';
      }
      updateBumperDot();
      return;
    }

    wrap = document.createElement('div');
    wrap.id = 'vexgo-bumper-dot';
    wrap.className = 'side_panel_btn vexgo-bumper-dot is-released';
    wrap.setAttribute('aria-label', 'LED Bumper status');
    wrap.innerHTML =
      '<div class="vexgo-bumper-icon">' +
      BUMPER_SVG +
      '</div><span class="vexgo-bumper-label">LED Bumper</span>';

    var eyeBtn = document.getElementById('vexgo-eye-toggle');
    if (eyeBtn) controls.insertBefore(wrap, eyeBtn);
    else controls.appendChild(wrap);

    updateBumperDot();
  }

  function mountEyeSideButton() {
    if (document.getElementById('vexgo-eye-toggle')) return;
    var controls = document.getElementById('side_panel_controls');
    if (!controls) return;

    var btn = document.createElement('div');
    btn.id = 'vexgo-eye-toggle';
    btn.className = 'side_panel_btn';
    btn.title = 'Eye Sensor';
    btn.innerHTML = '<img src="' + EYE_ICON + '" alt="Eye" draggable="false" />';
    controls.appendChild(btn);

    btn.addEventListener(
      'click',
      function (e) {
        e.preventDefault();
        e.stopPropagation();
        toggleEyePanel();
      },
      true
    );
  }

  function removeClassSideButton() {
    var old = document.getElementById('vexgo-classroom-toggle');
    if (old && old.parentElement) old.parentElement.removeChild(old);
  }

  function tryMount() {
    removeClassSideButton();
    mountEyeSideButton();
    mountBumperDot();
    mountEyePanelOnce();
  }

  tryMount();
  var tries = 0;
  var timer = setInterval(function () {
    tries += 1;
    tryMount();
    if (tries >= 30) clearInterval(timer);
  }, 500);

  document.addEventListener('vexgo-go-status', function () {
    updateBumperDot();
    if (isPanelOpen()) renderEyeSensorTable();
  });

  document.addEventListener('click', function (e) {
    if (!isPanelOpen()) return;
    var panel = document.getElementById('vexgo-eye-panel');
    var btn = document.getElementById('vexgo-eye-toggle');
    if (!panel || !btn) return;
    if (panel.contains(e.target) || btn.contains(e.target)) return;
    closeEyePanel();
  });

  window.VEXGOEyeSensor = {
    open: openEyePanel,
    close: closeEyePanel,
    toggle: toggleEyePanel,
    refresh: renderEyeSensorTable,
    updateBumper: updateBumperDot,
  };
})();
