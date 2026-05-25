/**
 * VEX Class — embedded in #brain_info (brain + device check). Manual refresh only.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'vexgo_classroom_brain_v1';
  var CLASS_ICON = 'classroom/icon.png';
  var embedMounted = false;
  var uiBound = false;
  var mountDone = false;

  function loadPrefs() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch (e) {
      return {};
    }
  }

  function savePrefs(prefs) {
    try {
      var cur = loadPrefs();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Object.assign(cur, prefs)));
    } catch (e) {}
  }

  function isEmbedBodyVisible() {
    var body = document.getElementById('vexgo-classroom-body');
    return body && !body.classList.contains('is-collapsed');
  }

  function setEmbedBodyVisible(show) {
    var body = document.getElementById('vexgo-classroom-body');
    var embed = document.getElementById('vexgo-classroom-embed');
    var btn = document.getElementById('vexgo-classroom-show-btn');
    var brain = getBrainRoot();
    if (!body || !embed) return;

    if (show) {
      body.classList.remove('is-collapsed');
      embed.classList.add('is-expanded');
      if (brain) brain.classList.add('vexgo-classroom-expanded');
    } else {
      body.classList.add('is-collapsed');
      embed.classList.remove('is-expanded');
      if (brain) brain.classList.remove('vexgo-classroom-expanded');
    }

    if (btn) {
      btn.textContent = show ? 'Hide' : 'Show';
      btn.setAttribute('aria-expanded', show ? 'true' : 'false');
    }
    savePrefs({ embedOpen: !!show });
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function setStatus(msg, ok) {
    var el = document.getElementById('vexgo-classroom-status');
    if (!el) return;
    el.textContent = msg;
    el.className = 'vc-status' + (ok ? ' ok' : '');
  }

  function getBrainRoot() {
    return document.getElementById('brain_info');
  }

  function readBrainPanelInfo() {
    var root = getBrainRoot();
    if (!root) {
      return { connected: false, rows: [], brainName: '' };
    }

    var rows = [];
    root.querySelectorAll('.info_group .info, .info_group .info.flex_row').forEach(function (row) {
      var label = row.querySelector('.label');
      var value = row.querySelector('.value');
      if (!value) return;
      rows.push({
        label: label ? (label.textContent || '').trim() : '',
        value: (value.textContent || '').trim(),
      });
    });

    var brainName = '';
    rows.forEach(function (r) {
      var l = r.label.toLowerCase();
      if (l.indexOf('name') !== -1 || l.indexOf('robot') !== -1 || l.indexOf('brain') !== -1) {
        if (
          r.value &&
          r.value.indexOf('No Brain') === -1 &&
          r.value.indexOf('No Robot') === -1 &&
          r.value.indexOf('???') === -1
        ) {
          brainName = r.value;
        }
      }
    });

    return {
      connected: root.classList.contains('active'),
      rows: rows,
      brainName: brainName,
    };
  }

  function scanDevicePorts() {
    var items = [];
    var root = document.getElementById('rc_wizard_wrapper');
    if (!root) return items;

    var cards = root.getElementsByClassName('rc_card');
    var max = cards.length < 12 ? cards.length : 12;

    for (var i = 0; i < max; i++) {
      var card = cards[i];
      var labelEl =
        card.querySelector('#static_label') ||
        card.querySelector('.device_label') ||
        card.querySelector('.label') ||
        card.querySelector('h4');
      var name = labelEl ? (labelEl.textContent || '').trim() : '';
      if (!name) name = 'Device ' + (i + 1);

      var ports = [];
      card.querySelectorAll('.port_tab, .port_tab .label').forEach(function (pt) {
        var t = (pt.textContent || '').trim();
        if (t && ports.indexOf(t) === -1) ports.push(t);
      });

      var status = card.classList.contains('collapsed') ? 'Collapsed' : 'Configuring';
      items.push({ name: name, ports: ports.join(', ') || '—', status: status });
    }
    return items;
  }

  function syncBrainBadge() {
    var badge = document.getElementById('vexgo-brain-connected-badge');
    if (!badge) return;
    var info = readBrainPanelInfo();
    badge.textContent = info.connected ? 'Connected' : 'Not connected';
    badge.className = 'vc-badge ' + (info.connected ? 'is-on' : 'is-off');

    var nameIn = document.getElementById('vexgo-brain-name-input');
    if (nameIn && !nameIn.dataset.userEdited && info.brainName) {
      nameIn.value = info.brainName;
    }
  }

  function renderDeviceList() {
    var list = document.getElementById('vexgo-device-list');
    if (!list) return;

    var devices = scanDevicePorts();
    if (!devices.length) {
      list.innerHTML =
        '<li class="vc-device-empty">No ports yet. Tap <strong>Ports</strong> on the right panel, then <strong>Refresh</strong>.</li>';
      return;
    }

    list.innerHTML = devices
      .map(function (d) {
        return (
          '<li class="vc-device-item">' +
          '<div class="vc-device-name">' +
          escapeHtml(d.name) +
          '</div>' +
          '<div class="vc-device-meta">Ports: ' +
          escapeHtml(d.ports) +
          ' · ' +
          escapeHtml(d.status) +
          '</div></li>'
        );
      })
      .join('');
  }

  function refreshAll() {
    syncBrainBadge();
    renderDeviceList();
  }

  function clickBrainToolbar() {
    var btn = document.querySelector(
      '.brain_button, .toolbar_btn.brain_button, .topmenu .brain_button, [class*="brain_button"]'
    );
    if (!btn) return false;
    btn.click();
    return true;
  }

  function clickMenuByText(patterns) {
    var clicked = false;
    var portal = document.querySelector('.dropdownmenu_portal, .dropdownmenu_options');
    var scope = portal || document;
    scope
      .querySelectorAll('.option, .option .label, .action-item')
      .forEach(function (el) {
        if (clicked) return;
        var t = (el.textContent || '').trim();
        for (var i = 0; i < patterns.length; i++) {
          if (patterns[i].test(t)) {
            var target = el.closest('.option') || el.closest('.action-item') || el;
            target.click();
            clicked = true;
            break;
          }
        }
      });
    return clicked;
  }

  function openSetBrainNameMenu() {
    if (!clickBrainToolbar()) {
      setStatus('Brain button not found on the top bar.', false);
      return;
    }
    window.setTimeout(function () {
      var ok = clickMenuByText([
        /set\s+robot\s+name/i,
        /set\s+brain\s+name/i,
        /robot\s+name/i,
        /brain\s+name/i,
      ]);
      if (ok) setStatus('VEXcode rename dialog opened.', true);
      else setStatus('Brain menu → choose "Set Robot Name".', false);
    }, 350);
  }

  function openDeviceConfigTab() {
    var side =
      document.getElementById('side_panel') ||
      document.querySelector('.tabbed_container[data-style="side_panel"]');
    if (!side) {
      setStatus('Right panel not found.', false);
      return;
    }

    var tabs = side.querySelectorAll('.tab_btn');
    var opened = false;

    tabs.forEach(function (tab) {
      if (opened) return;
      var label = (tab.textContent || '').toLowerCase();
      if (
        label.indexOf('device') !== -1 ||
        label.indexOf('config') !== -1 ||
        label.indexOf('robot') !== -1 ||
        label.indexOf('port') !== -1
      ) {
        tab.click();
        opened = true;
      }
    });

    if (!opened && tabs.length >= 2) {
      tabs[1].click();
      opened = true;
    }

    if (opened) {
      setStatus('Device config (Ports) opened. Tap Refresh when done.', true);
    } else {
      setStatus('Devices tab not found — try the second tab on the right.', false);
    }
  }

  function saveBrainNameViaMenu() {
    var input = document.getElementById('vexgo-brain-name-input');
    var name = input ? input.value.trim() : '';
    if (!name) {
      setStatus('Enter a brain name first.', false);
      return;
    }
    savePrefs({ lastBrainName: name });
    openSetBrainNameMenu();
    setStatus('When the VEXcode dialog opens, paste: ' + name, true);
  }

  function bindEmbedUi() {
    if (uiBound) return;
    uiBound = true;

    var nameIn = document.getElementById('vexgo-brain-name-input');
    if (nameIn) {
      nameIn.addEventListener('input', function () {
        nameIn.dataset.userEdited = '1';
      });
    }

    var saveBtn = document.getElementById('vexgo-save-brain-name');
    if (saveBtn) saveBtn.addEventListener('click', saveBrainNameViaMenu);

    var refreshBtn = document.getElementById('vexgo-cc-refresh');
    if (refreshBtn) {
      refreshBtn.addEventListener('click', function () {
        refreshAll();
        setStatus('Brain and ports refreshed.', true);
      });
    }

    var connectBtn = document.getElementById('vexgo-cc-connect');
    if (connectBtn) {
      connectBtn.addEventListener('click', function () {
        var brain = getBrainRoot();
        var nativeConnect =
          (brain && brain.querySelector('.brain_connection_control button')) ||
          document.querySelector('#brain_info .brain_connection_control button');
        if (nativeConnect) {
          nativeConnect.click();
          setStatus('Pick a Brain from Bluetooth (Connect button above).', true);
        } else if (clickBrainToolbar()) {
          setStatus('Select a Brain from the list.', true);
        } else {
          setStatus('Use Connect above or the Brain menu button.', false);
        }
      });
    }

    var portsBtn = document.getElementById('vexgo-cc-devices');
    if (portsBtn) portsBtn.addEventListener('click', openDeviceConfigTab);

    var renameBtn = document.getElementById('vexgo-cc-rename');
    if (renameBtn) renameBtn.addEventListener('click', openSetBrainNameMenu);

    var showBtn = document.getElementById('vexgo-classroom-show-btn');
    if (showBtn) {
      showBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        setEmbedBodyVisible(!isEmbedBodyVisible());
        if (isEmbedBodyVisible()) refreshAll();
      });
    }
  }

  function mountEmbedInBrainInfo() {
    if (embedMounted) return true;
    var brain = getBrainRoot();
    if (!brain) return false;

    var embed = document.createElement('div');
    embed.id = 'vexgo-classroom-embed';
    embed.className = 'vexgo-classroom-embed';
    embed.innerHTML =
      '<div class="vc-embed-head">' +
      '<img src="' +
      CLASS_ICON +
      '" width="32" height="32" alt="" />' +
      '<div><strong>VEX Class</strong><span class="vc-embed-sub">Brain &amp; device check</span></div>' +
      '<span id="vexgo-brain-connected-badge" class="vc-badge is-off">Not connected</span>' +
      '<button type="button" id="vexgo-classroom-show-btn" class="vc-show-btn" aria-expanded="false">Show</button></div>' +
      '<div id="vexgo-classroom-body" class="vexgo-classroom-body is-collapsed">' +
      '<div id="vexgo-classroom-status" class="vc-status">Tap Show to view ports and rename.</div>' +
      '<section class="vc-section">' +
      '<h4>Devices &amp; ports</h4>' +
      '<ul id="vexgo-device-list" class="vc-device-list">' +
      '<li class="vc-device-empty">Tap Refresh after opening Ports.</li></ul>' +
      '</section>' +
      '<section class="vc-section">' +
      '<h4>Brain name (robot)</h4>' +
      '<div class="vc-row-inline">' +
      '<input id="vexgo-brain-name-input" type="text" maxlength="32" placeholder="e.g. GO-Team-5A" />' +
      '<button type="button" id="vexgo-save-brain-name" class="vc-primary">Save name</button>' +
      '</div>' +
      '<p class="vc-muted">Save name opens the official VEXcode dialog (same as VEX Class app).</p>' +
      '</section>' +
      '<div class="vc-actions vc-actions-4">' +
      '<button type="button" id="vexgo-cc-connect">Connect</button>' +
      '<button type="button" id="vexgo-cc-devices">Ports</button>' +
      '<button type="button" id="vexgo-cc-rename">Rename</button>' +
      '<button type="button" id="vexgo-cc-refresh">Refresh</button>' +
      '</div></div>';

    var tips = brain.querySelector('.connection_tips');
    if (tips) brain.insertBefore(embed, tips.nextSibling);
    else brain.appendChild(embed);

    var prefs = loadPrefs();
    var nameIn = document.getElementById('vexgo-brain-name-input');
    if (nameIn && prefs.lastBrainName) nameIn.value = prefs.lastBrainName;

    bindEmbedUi();
    setEmbedBodyVisible(!!loadPrefs().embedOpen);
    if (!isEmbedBodyVisible()) syncBrainBadge();
    embedMounted = true;
    return true;
  }

  function openPanel() {
    clickBrainToolbar();
    window.setTimeout(function () {
      mountEmbedInBrainInfo();
      var embed = document.getElementById('vexgo-classroom-embed');
      if (embed && embed.scrollIntoView) {
        try {
          embed.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        } catch (e) {
          embed.scrollIntoView(false);
        }
      }
      if (isEmbedBodyVisible()) {
        refreshAll();
        setStatus('Check brain info above and devices below.', true);
      } else {
        syncBrainBadge();
      }
    }, 120);
  }

  function closePanel() {
    setEmbedBodyVisible(false);
    var nameIn = document.getElementById('vexgo-brain-name-input');
    if (nameIn && nameIn.value.trim()) {
      savePrefs({ lastBrainName: nameIn.value.trim() });
    }
  }

  function onClassButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();
    openPanel();
  }

  function bindClassButtons() {
    document.querySelectorAll('#vexgo-classroom-tab').forEach(function (btn) {
      if (btn.dataset.vexgoClassBound === '1') return;
      btn.dataset.vexgoClassBound = '1';
      btn.addEventListener('click', onClassButtonClick, true);
    });
  }

  function removeClassSideButton() {
    var old = document.getElementById('vexgo-classroom-toggle');
    if (old && old.parentElement) old.parentElement.removeChild(old);
  }

  function mountClassTab() {
    var sidePanel =
      document.getElementById('side_panel') ||
      document.querySelector('.tabbed_container[data-style="side_panel"]');
    if (!sidePanel || document.getElementById('vexgo-classroom-tab')) return;

    var header = sidePanel.querySelector('.tabbed_header');
    if (!header) return;

    var tabBtn = document.createElement('div');
    tabBtn.id = 'vexgo-classroom-tab';
    tabBtn.className = 'tab_btn';
    tabBtn.title = 'VEX Class — brain & devices';
    tabBtn.innerHTML =
      '<img src="' + CLASS_ICON + '" alt="Class" draggable="false" />' +
      '<span class="label">Class</span>';
    header.appendChild(tabBtn);
    bindClassButtons();
  }

  function ensureMountOnce() {
    removeClassSideButton();
    mountClassTab();
    mountEmbedInBrainInfo();
    bindClassButtons();
    mountDone = true;
  }

  var tries = 0;
  var timer = setInterval(function () {
    tries += 1;
    ensureMountOnce();
    if (tries >= 30) clearInterval(timer);
  }, 500);

  window.VEXGOClassroom = {
    open: openPanel,
    close: closePanel,
    refresh: refreshAll,
    mount: mountEmbedInBrainInfo,
    show: function () {
      mountEmbedInBrainInfo();
      setEmbedBodyVisible(true);
      refreshAll();
    },
    hide: function () {
      setEmbedBodyVisible(false);
    },
  };
})();
