"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_HardwareInterface_DownloadPlatform_VexSerialDevices_VexFW_ts"],{

/***/ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexFW.ts":
/*!**************************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexFW.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VEXosFirmwareChannelType: () => (/* reexport safe */ _types_HWEnums__WEBPACK_IMPORTED_MODULE_3__.VEXosFirmwareChannelType),
/* harmony export */   VexFW: () => (/* binding */ VexFW),
/* harmony export */   VexFWAIM: () => (/* binding */ VexFWAIM),
/* harmony export */   VexFWAIR: () => (/* binding */ VexFWAIR),
/* harmony export */   VexFWAIVision: () => (/* binding */ VexFWAIVision),
/* harmony export */   VexFWCTE: () => (/* binding */ VexFWCTE),
/* harmony export */   VexFWEXP: () => (/* binding */ VexFWEXP),
/* harmony export */   VexFWIQ: () => (/* binding */ VexFWIQ),
/* harmony export */   VexFWIQ2: () => (/* binding */ VexFWIQ2),
/* harmony export */   VexFWV5: () => (/* binding */ VexFWV5)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _targetPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../targetPlatform */ "./src/targetPlatform.ts");
/* harmony import */ var _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zip.js/zip.js */ "./node_modules/@zip.js/zip.js/index.js");
/* harmony import */ var _types_HWEnums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types/HWEnums */ "./src/HardwareInterface/types/HWEnums.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("VexFW");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

log.setHistoryLogger("VEXSerial");



var VexFW = /*#__PURE__*/function () {
  function VexFW() {
    _classCallCheck(this, VexFW);
    _defineProperty(this, "_urlLocal", 'resources/vexos/');
    _defineProperty(this, "_catalog", 'catalog.txt');
    _defineProperty(this, "_versions", []);
    _defineProperty(this, "_vexos", []);
    _defineProperty(this, "_os_version", null);
    _defineProperty(this, "_os_loaded", false);
    _defineProperty(this, "_url_custom", undefined);
    this._os_loaded = false;
  }
  return _createClass(VexFW, [{
    key: "catalog",
    get: function get() {
      return this._catalog;
    },
    set: function set(value) {
      this._catalog = value;
    }
  }, {
    key: "setPath",
    value: function setPath(data) {
      if (data !== null && data !== void 0 && data["public"]) {
        this._urlPublic = data["public"];
      }
      if (data !== null && data !== void 0 && data.beta) {
        this._urlBeta = data.beta;
      }
      if (data !== null && data !== void 0 && data["private"]) {
        this._urlPrivate = data["private"];
      }
      if (data !== null && data !== void 0 && data.local) {
        this._urlLocal = data.local;
      }
    }
  }, {
    key: "setDongle",
    value: function setDongle(value) {
      VexFW.DONGLE = value;
    }
  }, {
    key: "isLoaded",
    value: function isLoaded() {
      return this._os_loaded;
    }
  }, {
    key: "initVersions",
    value: function initVersions() {
      this._os_loaded = false;
      this._versions = [];
    }
  }, {
    key: "setCustomUrl",
    value: function setCustomUrl(url) {
      this._url_custom = url;
    }

    // manually add a version, perhaps from external cache
  }, {
    key: "addVersion",
    value: function addVersion(v) {
      if (v !== undefined) this._versions.push(v);
    }
  }, {
    key: "checkVersion",
    value: function checkVersion(version, type) {
      // version is of the form [maj, min. bld, beta ];

      type = type === undefined ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_3__.VEXosFirmwareChannelType.PUBLIC : type;

      // return match if we don't have any info
      if (version === undefined || version.length !== 4) {
        return true;
      }
      var os_version = undefined;

      // pick last version of indicated type
      for (var i = 0; i < this._versions.length; i++) {
        if (this._versions[i].type === type) {
          os_version = this._versions[i];
        }
      }
      if (os_version !== undefined) {
        // see if versions match
        if (os_version.major > version[0]) return false;
        if (os_version.major < version[0]) return true;

        // major must match
        if (os_version.minor > version[1]) return false;
        if (os_version.minor < version[1]) return true;

        // minor must match
        if (os_version.build > version[2]) return false;
        if (os_version.build < version[2]) return true;

        // so major, minor and build all match
        // now deal with beta

        // beta 0 is a release version
        // we ignore upgrade from beta 0 to say beta 1
        if (os_version.beta > version[3] && version[3] != 0)
          // ignore beta if currently 0
          return false;
        // this upgraded from say beta 22 to beta 0
        if (os_version.beta != version[3] && os_version.beta === 0)
          // always use if beta is set to 0
          return false;
      }

      // they either match or we don't have anything to compare
      return true;
    }
  }, {
    key: "getLatest",
    value: function getLatest(type) {
      type = type === undefined ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_3__.VEXosFirmwareChannelType.PUBLIC : type;
      log.debug("getLatest channel", _types_HWEnums__WEBPACK_IMPORTED_MODULE_3__.VEXosFirmwareChannelType[type]);
      var os_version = undefined;

      // pick last version of indicated type
      for (var i = 0; i < this._versions.length; i++) {
        if (this._versions[i].type === type) {
          os_version = this._versions[i];
        }
      }
      return os_version;
    }

    /**
     * Look for file with given name in the unzipped file object
     * @param name 
     */
  }, {
    key: "getFile",
    value: function getFile(name) {
      for (var i = 0; i < this._vexos.length; i++) {
        if (this._vexos[i].name.toLowerCase() === name.toLowerCase()) {
          return this._vexos[i];
        }
      }
      return undefined;
    }
  }, {
    key: "getBlob",
    value: function getBlob() {
      return this._vexosblob;
    }

    /**
     * Get a text file from the VEX server (tends to be catalog files)
     */
  }, {
    key: "getTextFileFromServer",
    value: function getTextFileFromServer(url, user, pass, progress) {
      return this.getFileFromServer(url, "text", user, pass, progress);
    }

    /**
     * Get a Blob file from the VEX server (tends to be vexos files)
     */
  }, {
    key: "getBlobFileFromServer",
    value: function getBlobFileFromServer(url, user, pass, progress) {
      return this.getFileFromServer(url, "blob", user, pass, progress);
    }

    /**
     * Get a file from the VEX server
     * type should be 'text' for catalog files and 'blob' for vexos files
     */
  }, {
    key: "getFileFromServer",
    value: (function () {
      var _getFileFromServer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, responseType, user, pass, progress) {
        var headers, credentials, res, totalHeader, total, reader, chunks, loaded, _yield$reader$read, done, value, decoder, text, _iterator, _step, chunk;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              headers = new Headers();
              credentials = "same-origin"; // Auth header (note: this will cause a CORS preflight like XHR did)
              if (user !== undefined && pass !== undefined) {
                headers.set("Authorization", "Basic " + btoa(user + ":" + pass));
                credentials = "include";
              } else if (user !== undefined) {
                headers.set("Authorization", "Basic " + user);
                credentials = "include";
              }
              _context.next = 5;
              return fetch(url, {
                cache: "no-cache",
                headers: headers,
                credentials: credentials
              });
            case 5:
              res = _context.sent;
              if (!(res.status === 401)) {
                _context.next = 8;
                break;
              }
              return _context.abrupt("return", undefined);
            case 8:
              if (!(!res.ok || !res.body)) {
                _context.next = 10;
                break;
              }
              throw new Error("failed to get file from server; " + res.status + " " + res.statusText);
            case 10:
              // Stream + progress (like xhr.onprogress when length is known)
              totalHeader = res.headers.get("content-length");
              total = totalHeader ? parseInt(totalHeader, 10) : null;
              reader = res.body.getReader();
              chunks = [];
              loaded = 0; // Read the data and provide progress updates
            case 15:
              if (false) {}
              _context.next = 18;
              return reader.read();
            case 18:
              _yield$reader$read = _context.sent;
              done = _yield$reader$read.done;
              value = _yield$reader$read.value;
              if (!done) {
                _context.next = 23;
                break;
              }
              return _context.abrupt("break", 26);
            case 23:
              if (value) {
                chunks.push(value);
                loaded += value.length;
                if (progress && total) {
                  // only report % when total size is known (mirrors lengthComputable)
                  progress(loaded / total);
                }
              }
              _context.next = 15;
              break;
            case 26:
              if (!(responseType === "blob")) {
                _context.next = 30;
                break;
              }
              return _context.abrupt("return", new Blob(chunks));
            case 30:
              // decode UTF-8 text efficiently without extra copies
              decoder = new TextDecoder();
              text = "";
              _iterator = _createForOfIteratorHelper(chunks);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  chunk = _step.value;
                  text += decoder.decode(chunk, {
                    stream: true
                  });
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              text += decoder.decode();
              return _context.abrupt("return", text);
            case 36:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function getFileFromServer(_x, _x2, _x3, _x4, _x5) {
        return _getFileFromServer.apply(this, arguments);
      }
      return getFileFromServer;
    }())
  }, {
    key: "blobToArrayBuffer",
    value: function blobToArrayBuffer(b) {
      return new Promise(function (resolve, reject) {
        var r = new FileReader();
        r.readAsArrayBuffer(b);
        // Load the file data
        r.onload = function (event) {
          // check file read succesful
          if (r.readyState === r.DONE) {
            resolve(r.result);
          } else reject(undefined);
        };
        r.onerror = function (err) {
          reject(undefined);
        };
      });
    }
  }, {
    key: "downloadFirmware",
    value: function downloadFirmware(name, fwChannel, progressCallback) {
      var _this = this;
      var fwType = fwChannel === undefined ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_3__.VEXosFirmwareChannelType.PUBLIC : fwChannel;
      return new Promise(function (resolve, reject) {
        // Process vexos file
        var processVexosFile = function processVexosFile(blob) {
          return new Promise(function (resolve, reject) {
            if (blob !== undefined) {
              log.info('vexos: process file ' + _this._os_version.name);
              _this.openVexosFile(blob).then(function (num) {
                log.info('vexos: found ' + num + ' files');
                resolve(num);
              })["catch"](function (num) {
                log.error('vexos: read error');
                reject(0);
              });
            }
          });
        };
        for (var i = 0; i < _this._versions.length; i++) {
          if (name !== undefined) {
            if (_this._versions[i].name === name && fwType === _this._versions[i].type) {
              _this._os_version = _this._versions[i];
              break;
            }
          }
        }
        var remote_file;
        var pass = undefined;
        // strip any existing extension
        var basename = _this._os_version.name.replace('.vexos', '');
        if (fwType == _types_HWEnums__WEBPACK_IMPORTED_MODULE_3__.VEXosFirmwareChannelType.PUBLIC) remote_file = _this._urlPublic + basename + '.vexos';
        if (fwType == _types_HWEnums__WEBPACK_IMPORTED_MODULE_3__.VEXosFirmwareChannelType.BETA) remote_file = _this._urlBeta + basename + '.vexos';
        if (fwType == _types_HWEnums__WEBPACK_IMPORTED_MODULE_3__.VEXosFirmwareChannelType.PRIVATE) {
          remote_file = _this._urlPrivate + basename + '.vexos';
          pass = VexFW.DONGLE;
        }
        if (fwType == _types_HWEnums__WEBPACK_IMPORTED_MODULE_3__.VEXosFirmwareChannelType.LOCAL) remote_file = _this._urlLocal + basename + '.vexos';
        if (fwType == _types_HWEnums__WEBPACK_IMPORTED_MODULE_3__.VEXosFirmwareChannelType.CUSTOM) remote_file = _this._url_custom + basename;
        _this._vexosblob = undefined;

        // TODO: add caching?
        _this.getBlobFileFromServer(remote_file, pass, undefined, progressCallback).then(function (blob) {
          _this._vexosblob = blob;
          return processVexosFile(blob);
        }).then(function (num) {
          if (num == 0) _this._vexosblob = undefined;
          resolve(num);
        })["catch"](function (reason) {
          reject(0);
        });
      });
    }
  }, {
    key: "downgradeArmFirmware",
    value: function downgradeArmFirmware(progressCallback) {
      var _this2 = this;
      return new Promise(function (resolve, reject) {
        // Process vexos file
        var processVexosFile = function processVexosFile(blob) {
          return new Promise(function (resolve, reject) {
            if (blob !== undefined) {
              log.info('vexos: process file ' + _this2._os_version.name);
              _this2.openVexosFile(blob).then(function (num) {
                log.info('vexos: found ' + num + ' files');
                resolve(num);
              })["catch"](function (num) {
                log.error('vexos: read error');
                reject(0);
              });
            }
          });
        };
        var outDated = {
          beta: 32,
          build: 0,
          major: 1,
          minor: 0,
          name: "VEXOS_CTE_1_0_0_32",
          type: 0
        };
        _this2._os_version = outDated;
        _this2._versions = [outDated];
        _this2._vexos = [];
        _this2._vexosblob = undefined;
        _this2.getBlobFileFromServer("https://content.vexrobotics.com/vexos/public/CTE/VEXOS_CTE_1_0_0_32.vexos", undefined, undefined, progressCallback).then(function (blob) {
          _this2._vexosblob = blob;
          return processVexosFile(blob);
        }).then(function (num) {
          if (num == 0) _this2._vexosblob = undefined;
          resolve(num);
        })["catch"](function (reason) {
          reject(0);
        });
      });
    }

    // TODO: may need to add this back to get caching working
    // openLocalFile(file) {
    //   return new Promise((resolve, reject) => {
    //     if (file !== undefined) {
    //       log.info('vexos: process file ' + file.name);
    //       this.openVexosFile(file)
    //         .then((num) => {
    //           log.info('vexos: found ' + num + ' files');
    //           resolve(num);
    //         })
    //         .catch((num) => {
    //           log.error('vexos: read error');
    //           reject(0);
    //         })
    //     }
    //   });
    // }
  }, {
    key: "checkAndUpdateFirmware",
    value: function checkAndUpdateFirmware(name, type) {
      var _this3 = this;
      type = type === undefined ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_3__.VEXosFirmwareChannelType.PUBLIC : type;
      return new Promise(function (resolve, reject) {
        // Process vexos file
        var processVexosFile = function processVexosFile(blob) {
          return new Promise(function (resolve, reject) {
            if (blob !== undefined) {
              log.info('vexos: process file ' + _this3._os_version.name);
              _this3.openVexosFile(blob).then(function (num) {
                log.info('vexos: found ' + num + ' files');
                resolve(num);
              })["catch"](function (num) {
                log.error('vexos: read error');
                reject(0);
              });
            }
          });
        };

        // Get catalog from serrver and load latest Public vexos
        _this3.getVexosVersions().then(function (status) {
          if (status === null || status === undefined) {
            throw 0;
          }
          // status should only be true
          for (var i = 0; i < _this3._versions.length; i++) {
            if (name !== undefined) {
              if (_this3._versions[i].name === name) {
                _this3._os_version = _this3._versions[i];
                break;
              }
            } else
              // Just pick First public (should be only) version
              if (_this3._versions[i].type === _types_HWEnums__WEBPACK_IMPORTED_MODULE_3__.VEXosFirmwareChannelType.PUBLIC) {
                _this3._os_version = _this3._versions[i];
                break;
              }
          }
          var remote_file;
          var pass = undefined;
          if (type == _types_HWEnums__WEBPACK_IMPORTED_MODULE_3__.VEXosFirmwareChannelType.PUBLIC) remote_file = _this3._urlPublic + _this3._os_version.name + '.vexos';
          if (type == _types_HWEnums__WEBPACK_IMPORTED_MODULE_3__.VEXosFirmwareChannelType.BETA) remote_file = _this3._urlBeta + _this3._os_version.name + '.vexos';
          if (type == _types_HWEnums__WEBPACK_IMPORTED_MODULE_3__.VEXosFirmwareChannelType.PRIVATE) {
            remote_file = _this3._urlPrivate + _this3._os_version.name + '.vexos';
            pass = VexFW.DONGLE;
          }
          if (type == _types_HWEnums__WEBPACK_IMPORTED_MODULE_3__.VEXosFirmwareChannelType.LOCAL) remote_file = _this3._urlLocal + _this3._os_version.name + '.vexos';
          if (type == _types_HWEnums__WEBPACK_IMPORTED_MODULE_3__.VEXosFirmwareChannelType.CUSTOM) remote_file = _this3._url_custom + _this3._os_version.name + '.zip';
          return _this3.getBlobFileFromServer(remote_file, pass);
        }).then(function (blob) {
          return processVexosFile(blob);
        }).then(function (num) {
          resolve(0);
        })["catch"](function (reason) {
          reject(0);
        });
      });
    }

    /**
     * Get all known versions from the server
     * Public and beta
     */
  }, {
    key: "getVexosVersions",
    value: function getVexosVersions(bLocalCatalog, bPrivateCatalog) {
      var _this4 = this;
      return new Promise(function (resolve, reject) {
        //var version = null;
        _this4.initVersions();
        var addVersions = function addVersions(retval, type) {
          if (retval == null || retval == undefined || retval.length === undefined || retval.length === 0) {
            return;
          }
          var str = retval.split('\n');
          var addedCount = 0;
          for (var i = 0; i < str.length; i++) {
            var parts = str[i].split('_');
            var len = parts.length;
            if (len > 1) {
              var v = {
                type: type,
                name: str[i].replace(/[\n\r]/g, ''),
                major: len > 4 && parts[len - 4] !== undefined ? parseInt(parts[len - 4]) : 0,
                minor: len > 4 && parts[len - 3] !== undefined ? parseInt(parts[len - 3]) : 0,
                build: len > 4 && parts[len - 2] !== undefined ? parseInt(parts[len - 2]) : 0,
                beta: len > 4 && parts[len - 1] !== undefined ? parseInt(parts[len - 1]) : 0
              };
              _this4._versions.push(v);
              addedCount++;
            }
          }
        };

        // In this initial version we are going to just pick everything
        // for simplicity.  Later we need to add some authentication dialogs.
        //
        log.debug('vexos: get public version');
        _this4.getTextFileFromServer(_this4._urlPublic + _this4._catalog).then(function (retval) {
          addVersions(retval, _types_HWEnums__WEBPACK_IMPORTED_MODULE_3__.VEXosFirmwareChannelType.PUBLIC);
        })["catch"](function () {
          log.error('vexos: error(1) - Failed to get public version');
        }).then(function () {
          log.debug('vexos: get beta version');
          return _this4.getTextFileFromServer(_this4._urlBeta + _this4._catalog);
        }).then(function (retval) {
          addVersions(retval, _types_HWEnums__WEBPACK_IMPORTED_MODULE_3__.VEXosFirmwareChannelType.BETA);
        })["catch"](function () {
          log.error('vexos: error(2) - Failed to get beta version');
        }).then(function () {
          if (bPrivateCatalog !== undefined && bPrivateCatalog === true) {
            log.debug('vexos: get private beta version');
            return _this4.getTextFileFromServer(_this4._urlPrivate + _this4._catalog, VexFW.DONGLE);
          }
        }).then(function (retval) {
          if (bPrivateCatalog !== undefined && bPrivateCatalog === true) {
            addVersions(retval, _types_HWEnums__WEBPACK_IMPORTED_MODULE_3__.VEXosFirmwareChannelType.PRIVATE);
          }
        })["catch"](function () {
          log.error('vexos: error(3) - Failed to get private version');
        }).then(function () {
          if (_this4._url_custom !== undefined) {
            log.debug('vexos: get custom version');
            return _this4.getTextFileFromServer(_this4._url_custom + _this4._catalog);
          }
        }).then(function (retval) {
          if (_this4._url_custom !== undefined) {
            addVersions(retval, _types_HWEnums__WEBPACK_IMPORTED_MODULE_3__.VEXosFirmwareChannelType.CUSTOM);
          }
        })["catch"](function () {
          log.error('vexos: error(4) - Failed to get custom version');
        }).then(function () {
          if (bLocalCatalog !== undefined && bLocalCatalog === true) {
            log.debug('vexos: get local version');
            return _this4.getTextFileFromServer(_this4._urlLocal + _this4._catalog);
          }
        }).then(function (retval) {
          if (bLocalCatalog !== undefined && bLocalCatalog === true) {
            addVersions(retval, _types_HWEnums__WEBPACK_IMPORTED_MODULE_3__.VEXosFirmwareChannelType.LOCAL);
          }
        })["catch"](function () {
          log.error('vexos: error(5) - Failed to get local version');
        }).then(function () {
          if (_this4._versions === undefined || _this4._versions.length === 0) {
            reject(0);
          } else {
            _this4._os_loaded = true;
            resolve(true);
          }
        })["catch"](function (reason) {
          log.error('vexos: error(99) - Unexpected error');
          log.error('vexos: ' + reason);
          reject(reason);
        });
      });
    }

    /**
     * parse out the contents of a vexos zip file so that we can acces the bin files inside
     * @param file the blob of the vexos zip file to process
     * @returns the number of FW files found in the vexos file
     */
  }, {
    key: "openVexosFile",
    value: (function () {
      var _openVexosFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(file) {
        var zipReader, entries, _iterator2, _step2, entry, nameParts, name, data, osf;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              zipReader = new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_2__.ZipReader(new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_2__.BlobReader(file));
              log.debug("reading zip");
              _context2.next = 5;
              return zipReader.getEntries();
            case 5:
              entries = _context2.sent;
              log.debug("done reading zip");
              if (!entries.length) {
                _context2.next = 30;
                break;
              }
              log.debug("found", entries.length, "entries in the zip file");
              _iterator2 = _createForOfIteratorHelper(entries);
              _context2.prev = 10;
              _iterator2.s();
            case 12:
              if ((_step2 = _iterator2.n()).done) {
                _context2.next = 22;
                break;
              }
              entry = _step2.value;
              nameParts = entry.filename.split('/');
              name = nameParts[nameParts.length - 1];
              _context2.next = 18;
              return entry.getData(new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_2__.Uint8ArrayWriter());
            case 18:
              data = _context2.sent;
              if (data.length > 0) {
                log.debug("processing content of", name);
                osf = {
                  name: name,
                  data: data
                };
                this._vexos.push(osf);
              }
            case 20:
              _context2.next = 12;
              break;
            case 22:
              _context2.next = 27;
              break;
            case 24:
              _context2.prev = 24;
              _context2.t0 = _context2["catch"](10);
              _iterator2.e(_context2.t0);
            case 27:
              _context2.prev = 27;
              _iterator2.f();
              return _context2.finish(27);
            case 30:
              zipReader.close();
              return _context2.abrupt("return", this._vexos.length);
            case 34:
              _context2.prev = 34;
              _context2.t1 = _context2["catch"](0);
              log.error('vexos: unzip error');
              log.error(_context2.t1);
              throw 0;
            case 39:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 34], [10, 24, 27, 30]]);
      }));
      function openVexosFile(_x6) {
        return _openVexosFile.apply(this, arguments);
      }
      return openVexosFile;
    }())
  }]);
}();
_defineProperty(VexFW, "DONGLE", undefined);
var VexFWIQ = /*#__PURE__*/function (_VexFW2) {
  function VexFWIQ() {
    var _this5;
    _classCallCheck(this, VexFWIQ);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this5 = _callSuper(this, VexFWIQ, [].concat(args));
    _defineProperty(_this5, "_urlPublic", 'https://content.vexrobotics.com/vexos/public/IQ/');
    _defineProperty(_this5, "_urlBeta", 'https://content.vexrobotics.com/vexos/public_beta/IQ/');
    _defineProperty(_this5, "_urlPrivate", 'https://content.vexrobotics.com/vexos/private/IQ/');
    _defineProperty(_this5, "_catalog", "catalog4.txt");
    return _this5;
  }
  _inherits(VexFWIQ, _VexFW2);
  return _createClass(VexFWIQ);
}(VexFW);
var VexFWIQ2 = /*#__PURE__*/function (_VexFW3) {
  function VexFWIQ2() {
    var _this6;
    _classCallCheck(this, VexFWIQ2);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this6 = _callSuper(this, VexFWIQ2, [].concat(args));
    _defineProperty(_this6, "_urlPublic", 'https://content.vexrobotics.com/vexos/public/IQ2/');
    _defineProperty(_this6, "_urlBeta", 'https://content.vexrobotics.com/vexos/public_beta/IQ2/');
    _defineProperty(_this6, "_urlPrivate", 'https://content.vexrobotics.com/vexos/private/IQ2/');
    return _this6;
  }
  _inherits(VexFWIQ2, _VexFW3);
  return _createClass(VexFWIQ2);
}(VexFW);
var VexFWEXP = /*#__PURE__*/function (_VexFW4) {
  function VexFWEXP() {
    var _this7;
    _classCallCheck(this, VexFWEXP);
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    _this7 = _callSuper(this, VexFWEXP, [].concat(args));
    _defineProperty(_this7, "_urlPublic", 'https://content.vexrobotics.com/vexos/public/EXP/');
    _defineProperty(_this7, "_urlBeta", 'https://content.vexrobotics.com/vexos/public_beta/EXP/');
    _defineProperty(_this7, "_urlPrivate", 'https://content.vexrobotics.com/vexos/private/EXP/');
    return _this7;
  }
  _inherits(VexFWEXP, _VexFW4);
  return _createClass(VexFWEXP);
}(VexFW);
var VexFWV5 = /*#__PURE__*/function (_VexFW5) {
  function VexFWV5() {
    var _this8;
    _classCallCheck(this, VexFWV5);
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    _this8 = _callSuper(this, VexFWV5, [].concat(args));
    _defineProperty(_this8, "_urlPublic", 'https://content.vexrobotics.com/vexos/public/V5/');
    _defineProperty(_this8, "_urlBeta", 'https://content.vexrobotics.com/vexos/public_beta/V5/');
    _defineProperty(_this8, "_urlPrivate", 'https://content.vexrobotics.com/vexos/private/V5/');
    return _this8;
  }
  _inherits(VexFWV5, _VexFW5);
  return _createClass(VexFWV5);
}(VexFW);
var VexFWAIM = /*#__PURE__*/function (_VexFW6) {
  function VexFWAIM() {
    var _this9;
    _classCallCheck(this, VexFWAIM);
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }
    _this9 = _callSuper(this, VexFWAIM, [].concat(args));
    _defineProperty(_this9, "_urlPublic", 'https://content.vexrobotics.com/vexos/public/AIM/');
    _defineProperty(_this9, "_urlBeta", 'https://content.vexrobotics.com/vexos/public/AIM/beta/');
    _defineProperty(_this9, "_urlPrivate", 'https://content.vexrobotics.com/vexos/private/AIM/');
    return _this9;
  }
  _inherits(VexFWAIM, _VexFW6);
  return _createClass(VexFWAIM);
}(VexFW);
var VexFWAIVision = /*#__PURE__*/function (_VexFW7) {
  function VexFWAIVision() {
    var _this10;
    _classCallCheck(this, VexFWAIVision);
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }
    _this10 = _callSuper(this, VexFWAIVision, [].concat(args));
    _defineProperty(_this10, "_urlPublic", "https://content.vexrobotics.com/vexos/public/" + (_targetPlatform__WEBPACK_IMPORTED_MODULE_1__.targetIsIQ ? "IQAIVision/" : "AIVision/"));
    _defineProperty(_this10, "_urlBeta", "https://content.vexrobotics.com/vexos/public_beta/" + (_targetPlatform__WEBPACK_IMPORTED_MODULE_1__.targetIsIQ ? "IQAIVision/" : "AIVision/"));
    _defineProperty(_this10, "_urlPrivate", "https://content.vexrobotics.com/vexos/private/" + (_targetPlatform__WEBPACK_IMPORTED_MODULE_1__.targetIsIQ ? "IQAIVision/" : "AIVision/"));
    return _this10;
  }
  _inherits(VexFWAIVision, _VexFW7);
  return _createClass(VexFWAIVision);
}(VexFW);
var VexFWAIR = /*#__PURE__*/function (_VexFW8) {
  function VexFWAIR() {
    var _this11;
    _classCallCheck(this, VexFWAIR);
    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }
    _this11 = _callSuper(this, VexFWAIR, [].concat(args));
    _defineProperty(_this11, "_urlPublic", 'https://content.vexrobotics.com/vexos/public/AIR/');
    _defineProperty(_this11, "_urlBeta", 'https://content.vexrobotics.com/vexos/public/AIR/beta/');
    _defineProperty(_this11, "_urlPrivate", 'https://content.vexrobotics.com/vexos/private/AIR/');
    return _this11;
  }
  _inherits(VexFWAIR, _VexFW8);
  return _createClass(VexFWAIR);
}(VexFW);
var VexFWCTE = /*#__PURE__*/function (_VexFW9) {
  function VexFWCTE() {
    var _this12;
    _classCallCheck(this, VexFWCTE);
    for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }
    _this12 = _callSuper(this, VexFWCTE, [].concat(args));
    // TODO: update these URLs with the actual ones
    _defineProperty(_this12, "_urlPublic", 'https://content.vexrobotics.com/vexos/public/CTE/');
    _defineProperty(_this12, "_urlBeta", 'https://content.vexrobotics.com/vexos/public/CTE/beta/');
    _defineProperty(_this12, "_urlPrivate", 'https://content.vexrobotics.com/vexos/private/CTE/');
    return _this12;
  }
  _inherits(VexFWCTE, _VexFW9);
  return _createClass(VexFWCTE);
}(VexFW);


/***/ })

}]);
//# sourceMappingURL=74cbe7662387bec0186b.src_HardwareInterface_DownloadPlatform_VexSerialDevices_VexFW_ts.bundle.js.map