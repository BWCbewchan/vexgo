/**
 * Gemini API — key + model in localStorage (this device only).
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'vexgo_gemini_api_key';
  var MODEL_STORAGE_KEY = 'vexgo_gemini_model';
  var AUTO_MODEL = 'auto';

  /** Paid / billing-friendly first — avoid gemini-2.0-flash (free_tier limit 0 on many keys) */
  var AUTO_CHAIN = [
    'gemini-2.5-flash',
    'gemini-2.5-pro',
    'gemini-1.5-pro',
    'gemini-1.5-flash',
    'gemini-2.0-flash-lite',
  ];

  var MODEL_OPTIONS = [
    { id: AUTO_MODEL, label: 'Tự động (2.5-flash → 1.5-pro → …)' },
    { id: 'gemini-2.5-flash', label: 'gemini-2.5-flash (khuyên — API trả phí)' },
    { id: 'gemini-2.5-pro', label: 'gemini-2.5-pro' },
    { id: 'gemini-1.5-pro', label: 'gemini-1.5-pro' },
    { id: 'gemini-1.5-flash', label: 'gemini-1.5-flash' },
    { id: 'gemini-2.0-flash-lite', label: 'gemini-2.0-flash-lite (free)' },
  ];

  function getApiKey() {
    try {
      return (localStorage.getItem(STORAGE_KEY) || '').trim();
    } catch (e) {
      return '';
    }
  }

  function getPreferredModel() {
    try {
      var m = (localStorage.getItem(MODEL_STORAGE_KEY) || '').trim();
      return m || AUTO_MODEL;
    } catch (e) {
      return AUTO_MODEL;
    }
  }

  function setPreferredModel(model) {
    try {
      var m = (model || AUTO_MODEL).trim();
      localStorage.setItem(MODEL_STORAGE_KEY, m);
    } catch (e) {}
  }

  function setApiKey(key) {
    var k = (key || '').trim();
    if (!k) throw new Error('API key is empty');
    try {
      localStorage.setItem(STORAGE_KEY, k);
    } catch (e) {
      throw new Error('Could not save API key (storage blocked)');
    }
    return true;
  }

  function clearApiKey() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  }

  function hasApiKey() {
    return getApiKey().length > 8;
  }

  function maskKey(key) {
    if (!key) return '';
    if (key.length <= 8) return '••••••••';
    return key.slice(0, 4) + '…' + key.slice(-4);
  }

  function getModelLabel(modelId) {
    for (var i = 0; i < MODEL_OPTIONS.length; i++) {
      if (MODEL_OPTIONS[i].id === modelId) return MODEL_OPTIONS[i].label;
    }
    return modelId;
  }

  function extractText(data) {
    if (!data || !data.candidates || !data.candidates.length) return '';
    var parts = data.candidates[0].content && data.candidates[0].content.parts;
    if (!parts) return '';
    return parts
      .map(function (p) {
        return p.text || '';
      })
      .join('')
      .trim();
  }

  function parseApiError(status, bodyText) {
    try {
      var j = JSON.parse(bodyText);
      if (j.error && j.error.message) return j.error.message;
    } catch (e) {}
    return bodyText || 'HTTP ' + status;
  }

  function isQuotaError(err) {
    if (!err) return false;
    if (err.status === 429) return true;
    var m = (err.message || '').toLowerCase();
    return (
      m.indexOf('quota') !== -1 ||
      m.indexOf('rate limit') !== -1 ||
      m.indexOf('limit: 0') !== -1 ||
      m.indexOf('free_tier') !== -1
    );
  }

  function isRetryableError(err) {
    if (!err) return false;
    if (err.status === 404 || err.status === 503) return true;
    if (isQuotaError(err)) return true;
    var m = (err.message || '').toLowerCase();
    return m.indexOf('not found') !== -1 || m.indexOf('unavailable') !== -1;
  }

  function formatErrorForUser(err) {
    if (!err) return 'Lỗi không xác định';
    var model = err.model || err.lastModel || getPreferredModel();
    if (isQuotaError(err)) {
      return (
        '**Quota / model không khớp** (model: `' +
        model +
        '`).\n\n' +
        'API key có billing nhưng app có thể đang gọi **free tier** (gemini-2.0-flash).\n\n' +
        '**Cách sửa:** ⚙ Cài đặt → chọn **gemini-2.5-flash** hoặc **gemini-2.5-pro** → **Test kết nối** → Lưu.\n\n' +
        'Key phải từ [Google AI Studio](https://aistudio.google.com/apikey) (AIza…), project đã bật billing.\n\n' +
        'Bên dưới: **gợi ý offline** (không cần Gemini).'
      );
    }
    var msg = err.message || String(err);
    if (msg.length > 200) msg = msg.slice(0, 200) + '…';
    return 'Gemini (`' + model + '`): ' + msg;
  }

  function requestModel(model, apiKey, systemInstruction, userText, temperature) {
    var url =
      'https://generativelanguage.googleapis.com/v1beta/models/' +
      encodeURIComponent(model) +
      ':generateContent?key=' +
      encodeURIComponent(apiKey);

    var body = {
      systemInstruction: { parts: [{ text: systemInstruction }] },
      contents: [{ role: 'user', parts: [{ text: userText }] }],
      generationConfig: {
        temperature: typeof temperature === 'number' ? temperature : 0.35,
        maxOutputTokens: 2048,
      },
    };

    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }).then(function (res) {
      return res.text().then(function (text) {
        if (!res.ok) {
          var err = new Error(parseApiError(res.status, text));
          err.status = res.status;
          err.model = model;
          throw err;
        }
        var data = JSON.parse(text);
        var out = extractText(data);
        if (!out) throw new Error('Gemini returned an empty response');
        return { text: out, model: model };
      });
    });
  }

  function getModelChain() {
    var preferred = getPreferredModel();
    if (preferred && preferred !== AUTO_MODEL) {
      return [preferred];
    }
    return AUTO_CHAIN.slice();
  }

  function generate(opts) {
    var apiKey = getApiKey();
    if (!apiKey) {
      return Promise.reject(new Error('NO_API_KEY'));
    }
    var systemInstruction = opts.systemInstruction || 'You are a helpful assistant.';
    var userText = opts.userText || '';
    var temperature = opts.temperature;
    var chain = getModelChain();
    var lastErr = null;

    function tryAt(index) {
      if (index >= chain.length) {
        var e = lastErr || new Error('All Gemini models failed');
        e.quotaExceeded = lastErr && isQuotaError(lastErr);
        e.lastModel = lastErr && lastErr.model;
        return Promise.reject(e);
      }
      var model = chain[index];
      return requestModel(model, apiKey, systemInstruction, userText, temperature)
        .then(function (result) {
          return result.text;
        })
        .catch(function (err) {
          lastErr = err;
          var onlyOne = chain.length === 1;
          if (!onlyOne && isRetryableError(err) && index + 1 < chain.length) {
            return tryAt(index + 1);
          }
          err.quotaExceeded = isQuotaError(err);
          throw err;
        });
    }

    return tryAt(0);
  }

  function testConnection(modelOverride) {
    var apiKey = getApiKey();
    if (!apiKey) return Promise.reject(new Error('NO_API_KEY'));
    var model =
      modelOverride ||
      (getPreferredModel() !== AUTO_MODEL ? getPreferredModel() : 'gemini-2.5-flash');
    return requestModel(
      model,
      apiKey,
      'Reply with exactly: OK',
      'Say OK',
      0
    ).then(function (result) {
      return { ok: true, model: result.model, reply: result.text };
    });
  }

  window.VEXGOGemini = {
    STORAGE_KEY: STORAGE_KEY,
    MODEL_STORAGE_KEY: MODEL_STORAGE_KEY,
    AUTO_MODEL: AUTO_MODEL,
    AUTO_CHAIN: AUTO_CHAIN,
    MODEL_OPTIONS: MODEL_OPTIONS,
    getApiKey: getApiKey,
    setApiKey: setApiKey,
    clearApiKey: clearApiKey,
    hasApiKey: hasApiKey,
    maskKey: maskKey,
    getPreferredModel: getPreferredModel,
    setPreferredModel: setPreferredModel,
    getModelLabel: getModelLabel,
    getModelChain: getModelChain,
    generate: generate,
    testConnection: testConnection,
    formatErrorForUser: formatErrorForUser,
    isQuotaError: isQuotaError,
  };
})();
