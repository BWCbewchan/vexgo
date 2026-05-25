"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_AIVisionUtility_AIVisionSerialVex_ts"],{

/***/ "./src/AIVisionUtility/AIVisionSerialVex.ts":
/*!**************************************************!*\
  !*** ./src/AIVisionUtility/AIVisionSerialVex.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIVisionSerialVex: () => (/* binding */ AIVisionSerialVex)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vexcode_robot_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vexcode/robot-config */ "./node_modules/@vexcode/robot-config/dist/index.js");
/* harmony import */ var _HardwareInterface_DownloadPlatform_VexSerialDevices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HardwareInterface/DownloadPlatform/VexSerialDevices */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/index.ts");
/* harmony import */ var _platformInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../platformInfo */ "./src/platformInfo.ts");
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../i18n/i18n */ "./src/i18n/i18n.ts");
/* harmony import */ var _widget_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widget/Modal */ "./src/widget/Modal.tsx");
/* harmony import */ var async_sema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! async-sema */ "./node_modules/async-sema/lib/index.js");
/* harmony import */ var async_sema__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(async_sema__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("AIVisionSerialVex");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();







var AIVisionSerialVex = /*#__PURE__*/function (_AIVisionSerialInterf) {
  function AIVisionSerialVex() {
    var _this;
    _classCallCheck(this, AIVisionSerialVex);
    _this = _callSuper(this, AIVisionSerialVex);
    _defineProperty(_this, "webSerialPort", new _HardwareInterface_DownloadPlatform_VexSerialDevices__WEBPACK_IMPORTED_MODULE_2__.VexSerialDeviceAIVision());
    _defineProperty(_this, "_lastConnectionState", _vexcode_robot_config__WEBPACK_IMPORTED_MODULE_1__.AIConnectionState.Disconnected);
    _defineProperty(_this, "semaphore", new async_sema__WEBPACK_IMPORTED_MODULE_6__.Sema(1, {
      capacity: 10
    }));
    _this.onWebSerialConnectionChange = _this.onWebSerialConnectionChange.bind(_this);
    _this.webSerialPort.on("connectionStateChange",
    // TODO: should really just pass the function directly?
    function (newState) {
      _this.onWebSerialConnectionChange(newState);
    });
    return _this;
  }

  /**
   * takes connection changes from the webserial interface and maps them to the
   * abstract version that this class exposes to the rest of the code.
   * @param state the new connection state of the webserial interface
   */
  _inherits(AIVisionSerialVex, _AIVisionSerialInterf);
  return _createClass(AIVisionSerialVex, [{
    key: "onWebSerialConnectionChange",
    value: function onWebSerialConnectionChange(serialState) {
      log.info("webSerialState:", _HardwareInterface_DownloadPlatform_VexSerialDevices__WEBPACK_IMPORTED_MODULE_2__.VexSerialDeviceConnectionStates[serialState]);
      var mappedState;
      switch (serialState) {
        case _HardwareInterface_DownloadPlatform_VexSerialDevices__WEBPACK_IMPORTED_MODULE_2__.VexSerialDeviceConnectionStates.Disconnected:
          mappedState = _vexcode_robot_config__WEBPACK_IMPORTED_MODULE_1__.AIConnectionState.Disconnected;
          break;
        case _HardwareInterface_DownloadPlatform_VexSerialDevices__WEBPACK_IMPORTED_MODULE_2__.VexSerialDeviceConnectionStates.Connecting:
          mappedState = _vexcode_robot_config__WEBPACK_IMPORTED_MODULE_1__.AIConnectionState.Connecting;
          break;
        case _HardwareInterface_DownloadPlatform_VexSerialDevices__WEBPACK_IMPORTED_MODULE_2__.VexSerialDeviceConnectionStates.Connected:
          mappedState = _vexcode_robot_config__WEBPACK_IMPORTED_MODULE_1__.AIConnectionState.Connected;
          break;
        default:
          log.warn("Unhandled web serial state:", serialState);
          return;
      }
      if (this._lastConnectionState !== mappedState) {
        this.isUpdatingFirmware = false;
      }
      this._lastConnectionState = mappedState;
      this.fireEvent("connectionStateChange", this._lastConnectionState);
    }
  }, {
    key: "setTagDetection",
    value: function () {
      var _setTagDetection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(enable) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!this.isUpdatingFirmware) {
                _context.next = 3;
                break;
              }
              log.warn("Unable to send messages to sensor while updating firmware");
              return _context.abrupt("return");
            case 3:
              _context.prev = 3;
              log.debug("setTagDetection - acquiring semaphore");
              this.semaphore.acquire();
              log.debug("setTagDetection - acquired semaphore");
              this.webSerialPort.AISetTagDetection(enable);
              _context.next = 13;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);
              throw _context.t0;
            case 13:
              _context.prev = 13;
              log.debug("setTagDetection - releasing semaphore");
              this.semaphore.release();
              return _context.finish(13);
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[3, 10, 13, 17]]);
      }));
      function setTagDetection(_x) {
        return _setTagDetection.apply(this, arguments);
      }
      return setTagDetection;
    }()
  }, {
    key: "setAIObjectDetection",
    value: function () {
      var _setAIObjectDetection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(enable) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!this.isUpdatingFirmware) {
                _context2.next = 3;
                break;
              }
              log.warn("Unable to send messages to sensor while updating firmware");
              return _context2.abrupt("return");
            case 3:
              _context2.prev = 3;
              log.debug("setAIObjectDetection - acquiring semaphore");
              _context2.next = 7;
              return this.semaphore.acquire();
            case 7:
              log.debug("setAIObjectDetection - acquired semaphore");
              this.webSerialPort.AISetObjectDetection(enable);
              _context2.next = 14;
              break;
            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](3);
              throw _context2.t0;
            case 14:
              _context2.prev = 14;
              log.debug("setAIObjectDetection - releasing semaphore");
              this.semaphore.release();
              return _context2.finish(14);
            case 18:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[3, 11, 14, 18]]);
      }));
      function setAIObjectDetection(_x2) {
        return _setAIObjectDetection.apply(this, arguments);
      }
      return setAIObjectDetection;
    }()
  }, {
    key: "requiresManualConnection",
    get: function get() {
      return !_platformInfo__WEBPACK_IMPORTED_MODULE_3__.PlatformIsElectron;
    }
  }, {
    key: "isConnected",
    get: function get() {
      return this.webSerialPort.connectionState === _HardwareInterface_DownloadPlatform_VexSerialDevices__WEBPACK_IMPORTED_MODULE_2__.VexSerialDeviceConnectionStates.Connected;
    }
  }, {
    key: "getModel",
    value: function () {
      var _getModel = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              log.debug("getModel");
              if (this.isConnected) {
                _context3.next = 4;
                break;
              }
              log.info("unable to get model as serial port is not connected");
              return _context3.abrupt("return");
            case 4:
              _context3.prev = 4;
              log.debug("getModel - acquiring semaphore");
              _context3.next = 8;
              return this.semaphore.acquire();
            case 8:
              log.debug("getModel - acquired semaphore");
              return _context3.abrupt("return", this.webSerialPort.AIGetModel());
            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](4);
              throw _context3.t0;
            case 15:
              _context3.prev = 15;
              log.debug("getModel - releasing semaphore");
              this.semaphore.release();
              return _context3.finish(15);
            case 19:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[4, 12, 15, 19]]);
      }));
      function getModel() {
        return _getModel.apply(this, arguments);
      }
      return getModel;
    }()
  }, {
    key: "clearModel",
    value: function () {
      var _clearModel = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              log.debug("Clearing model");
              if (this.isConnected) {
                _context4.next = 4;
                break;
              }
              log.info("unable to clear model as serial port is not connected");
              return _context4.abrupt("return");
            case 4:
              _context4.prev = 4;
              log.debug("clearModel - acquiring semaphore");
              _context4.next = 8;
              return this.semaphore.acquire();
            case 8:
              log.debug("clearModel - acquired semaphore");
              return _context4.abrupt("return", this.webSerialPort.AIClearModel());
            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](4);
              throw _context4.t0;
            case 15:
              _context4.prev = 15;
              log.debug("clearModel - releasing semaphore");
              this.semaphore.release();
              return _context4.finish(15);
            case 19:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[4, 12, 15, 19]]);
      }));
      function clearModel() {
        return _clearModel.apply(this, arguments);
      }
      return clearModel;
    }()
  }, {
    key: "openConnection",
    value: function () {
      var _openConnection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var message;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              log.debug("openConnection");
              if (!this.isConnected) {
                _context5.next = 5;
                break;
              }
              log.debug("Port is connected, closing connection");
              _context5.next = 5;
              return this.closeConnection();
            case 5:
              _context5.prev = 5;
              log.debug("Attempting to open serial port connection for AI Vision");
              _context5.next = 9;
              return this.webSerialPort.openConnection();
            case 9:
              _context5.next = 15;
              break;
            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5["catch"](5);
              log.debug("Error attempting to open serial port connection: ", _context5.t0);
              // Error when a robot opens a port connection to a robot that is already connected through another VEX application
              if (_context5.t0 instanceof Error && _context5.t0.name === "NetworkError" && _context5.t0.message.includes("Failed to open serial port.")) {
                message = _i18n_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.t("Already Connected WebSerial Port", {
                  platform: _i18n_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.t("AI Vision")
                });
                _widget_Modal__WEBPACK_IMPORTED_MODULE_5__.MODALCONTROL.alert(message);
              }
            case 15:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[5, 11]]);
      }));
      function openConnection() {
        return _openConnection.apply(this, arguments);
      }
      return openConnection;
    }()
  }, {
    key: "closeConnection",
    value: function () {
      var _closeConnection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              log.debug("closeConnection");
              if (this.isConnected) {
                _context6.next = 4;
                break;
              }
              log.info("unable to close serial port as it is not currently open");
              return _context6.abrupt("return");
            case 4:
              _context6.next = 6;
              return this.webSerialPort.closeConnection();
            case 6:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function closeConnection() {
        return _closeConnection.apply(this, arguments);
      }
      return closeConnection;
    }()
  }, {
    key: "getSensorFirmwareVersion",
    value: function () {
      var _getSensorFirmwareVersion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", this.webSerialPort.getRobotInfo().brainVersion);
            case 1:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function getSensorFirmwareVersion() {
        return _getSensorFirmwareVersion.apply(this, arguments);
      }
      return getSensorFirmwareVersion;
    }()
  }, {
    key: "_updateFirmware",
    value: function () {
      var _updateFirmware2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(onProgress) {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              log.debug("_updateFirmware - acquiring semaphore");
              _context8.next = 4;
              return this.semaphore.acquire();
            case 4:
              log.debug("_updateFirmware - acquired semaphore");
              _context8.next = 7;
              return this.webSerialPort.updateFirmware(function (state, progress, message) {
                onProgress(progress, message);
              }, null);
            case 7:
              return _context8.abrupt("return", true);
            case 10:
              _context8.prev = 10;
              _context8.t0 = _context8["catch"](0);
              log.debug(_context8.t0);
              return _context8.abrupt("return", false);
            case 14:
              _context8.prev = 14;
              log.debug("_updateFirmware - releasing semaphore");
              this.semaphore.release();
              return _context8.finish(14);
            case 18:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[0, 10, 14, 18]]);
      }));
      function _updateFirmware(_x3) {
        return _updateFirmware2.apply(this, arguments);
      }
      return _updateFirmware;
    }()
  }, {
    key: "_updateAIModel",
    value: function () {
      var _updateAIModel2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(URL, onProgress) {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (this.isConnected) {
                _context9.next = 3;
                break;
              }
              log.info("unable to update sensor as it is currently not connected");
              return _context9.abrupt("return");
            case 3:
              _context9.prev = 3;
              log.debug("_updateAIModel - acquiring semaphore");
              _context9.next = 7;
              return this.semaphore.acquire();
            case 7:
              log.debug("_updateAIModel - acquired semaphore");
              _context9.next = 10;
              return this.webSerialPort.updateAIModel(URL, onProgress);
            case 10:
              return _context9.abrupt("return", true);
            case 13:
              _context9.prev = 13;
              _context9.t0 = _context9["catch"](3);
              log.debug(_context9.t0);
              return _context9.abrupt("return", false);
            case 17:
              _context9.prev = 17;
              log.debug("_updateAIModel - releasing semaphore");
              this.semaphore.release();
              return _context9.finish(17);
            case 21:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[3, 13, 17, 21]]);
      }));
      function _updateAIModel(_x4, _x5) {
        return _updateAIModel2.apply(this, arguments);
      }
      return _updateAIModel;
    }()
  }, {
    key: "_setColor",
    value: function () {
      var _setColor2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(color) {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              log.debug("_setColor - acquiring semaphore");
              _context10.next = 4;
              return this.semaphore.acquire();
            case 4:
              log.debug("_setColor - acquired semaphore");
              return _context10.abrupt("return", this.webSerialPort.AISetColorDescription(color));
            case 8:
              _context10.prev = 8;
              _context10.t0 = _context10["catch"](0);
              throw _context10.t0;
            case 11:
              _context10.prev = 11;
              log.debug("_setColor - releasing semaphore");
              this.semaphore.release();
              return _context10.finish(11);
            case 15:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this, [[0, 8, 11, 15]]);
      }));
      function _setColor(_x6) {
        return _setColor2.apply(this, arguments);
      }
      return _setColor;
    }()
  }, {
    key: "_clearColors",
    value: function () {
      var _clearColors2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.prev = 0;
              log.debug("_clearColors - acquiring semaphore");
              _context11.next = 4;
              return this.semaphore.acquire();
            case 4:
              log.debug("_clearColors - acquired semaphore");
              return _context11.abrupt("return", this.webSerialPort.AIClearAllSetColors());
            case 8:
              _context11.prev = 8;
              _context11.t0 = _context11["catch"](0);
              throw _context11.t0;
            case 11:
              _context11.prev = 11;
              log.debug("_clearColors - releasing semaphore");
              this.semaphore.release();
              return _context11.finish(11);
            case 15:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this, [[0, 8, 11, 15]]);
      }));
      function _clearColors() {
        return _clearColors2.apply(this, arguments);
      }
      return _clearColors;
    }()
  }, {
    key: "_setCode",
    value: function () {
      var _setCode2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(code) {
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.prev = 0;
              log.debug("_setCode - acquiring semaphore");
              _context12.next = 4;
              return this.semaphore.acquire();
            case 4:
              log.debug("_setCode - acquired semaphore");
              return _context12.abrupt("return", this.webSerialPort.AISetCodeDescription(code));
            case 8:
              _context12.prev = 8;
              _context12.t0 = _context12["catch"](0);
              throw _context12.t0;
            case 11:
              _context12.prev = 11;
              log.debug("_setCode - releasing semaphore");
              this.semaphore.release();
              return _context12.finish(11);
            case 15:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this, [[0, 8, 11, 15]]);
      }));
      function _setCode(_x7) {
        return _setCode2.apply(this, arguments);
      }
      return _setCode;
    }()
  }, {
    key: "_clearCodes",
    value: function () {
      var _clearCodes2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _context13.prev = 0;
              log.debug("_clearCodes - acquiring semaphore");
              _context13.next = 4;
              return this.semaphore.acquire();
            case 4:
              log.debug("_clearCodes - acquired semaphore");
              return _context13.abrupt("return", this.webSerialPort.AIClearAllSetCodes());
            case 8:
              _context13.prev = 8;
              _context13.t0 = _context13["catch"](0);
              throw _context13.t0;
            case 11:
              _context13.prev = 11;
              log.debug("_clearCodes - releasing semaphore");
              this.semaphore.release();
              return _context13.finish(11);
            case 15:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this, [[0, 8, 11, 15]]);
      }));
      function _clearCodes() {
        return _clearCodes2.apply(this, arguments);
      }
      return _clearCodes;
    }()
  }, {
    key: "_grabDetectedObjects",
    value: function () {
      var _grabDetectedObjects2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _context14.prev = 0;
              _context14.next = 3;
              return this.semaphore.acquire();
            case 3:
              return _context14.abrupt("return", this.webSerialPort.AIGetDetectedObjects().then(function (objects) {
                if (objects === null) {
                  log.warn("Unable to retrieve objects");
                  return null;
                }
                return objects.map(function (obj) {
                  if (obj.type === _HardwareInterface_DownloadPlatform_VexSerialDevices__WEBPACK_IMPORTED_MODULE_2__.VexAIObjectTypes.AI2CAM_DETECT_TYPE_CODE) {
                    // TODO: remove this when the robot config's AI Vision utility uses the actual angle
                    return _objectSpread(_objectSpread({}, obj), {}, {
                      angle: obj.angle * 100
                    });
                  }
                  return obj;
                });
              }));
            case 6:
              _context14.prev = 6;
              _context14.t0 = _context14["catch"](0);
              throw _context14.t0;
            case 9:
              _context14.prev = 9;
              this.semaphore.release();
              return _context14.finish(9);
            case 12:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this, [[0, 6, 9, 12]]);
      }));
      function _grabDetectedObjects() {
        return _grabDetectedObjects2.apply(this, arguments);
      }
      return _grabDetectedObjects;
    }()
  }, {
    key: "framesProvidedByInterface",
    get: function get() {
      return false;
    }
  }, {
    key: "framesAreRequested",
    get: function get() {
      return false;
    }
  }, {
    key: "requestFrame",
    value: function requestFrame() {
      throw new _vexcode_robot_config__WEBPACK_IMPORTED_MODULE_1__.ErrorAIVisionUnsupportedOperation();
    }
  }]);
}(_vexcode_robot_config__WEBPACK_IMPORTED_MODULE_1__.AIVisionSerialInterface);


/***/ })

}]);
//# sourceMappingURL=679d1da163ca283e175b.src_AIVisionUtility_AIVisionSerialVex_ts.bundle.js.map