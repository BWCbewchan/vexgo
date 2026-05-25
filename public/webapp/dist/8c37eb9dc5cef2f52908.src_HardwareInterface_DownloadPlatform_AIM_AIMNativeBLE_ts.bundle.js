"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_HardwareInterface_DownloadPlatform_AIM_AIMNativeBLE_ts"],{

/***/ "./src/HardwareInterface/DownloadPlatform/AIM/AIMNativeBLE.ts":
/*!********************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/AIM/AIMNativeBLE.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIMNativeBLE: () => (/* binding */ AIMNativeBLE)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/HWEnums */ "./src/HardwareInterface/types/HWEnums.ts");
/* harmony import */ var _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types/HWErrors */ "./src/HardwareInterface/types/HWErrors.ts");
/* harmony import */ var _AIMInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AIMInterface */ "./src/HardwareInterface/DownloadPlatform/AIM/AIMInterface.ts");
/* harmony import */ var _vexcode_vexcode_webserial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vexcode/vexcode-webserial */ "./node_modules/@vexcode/vexcode-webserial/dist/index.js");
/* harmony import */ var _VexVersion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../VexVersion */ "./src/HardwareInterface/VexVersion.ts");
/* harmony import */ var _platformInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../platformInfo */ "./src/platformInfo.ts");
/* harmony import */ var _nativeInterface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../nativeInterface */ "./src/nativeInterface.ts");
/* harmony import */ var _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../GlobalEventSystem */ "./src/GlobalEventSystem.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers */ "./src/HardwareInterface/helpers.ts");
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../dispatcher */ "./src/dispatcher.ts");
/* harmony import */ var _widget_Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../widget/Modal */ "./src/widget/Modal.tsx");
/* harmony import */ var _brainInfoStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../brainInfoStore */ "./src/brainInfoStore.ts");
/* harmony import */ var _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../types/HWTabletEnums */ "./src/HardwareInterface/types/HWTabletEnums.ts");
/* harmony import */ var _vexcode_vexcode_webserial_dist_VexDeviceWebSerial__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @vexcode/vexcode-webserial/dist/VexDeviceWebSerial */ "./node_modules/@vexcode/vexcode-webserial/dist/VexDeviceWebSerial.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../helpers */ "./src/helpers.ts");
/* harmony import */ var _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../StorageInterface/VEXcodeLocalStorage */ "./src/StorageInterface/VEXcodeLocalStorage.ts");
/* harmony import */ var _VexSerialDevices_VexSerialDevice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../VexSerialDevices/VexSerialDevice */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDevice.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("AIMNativeBLE");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();
log.setHistoryLogger("HWInterface");

// tslint:disable: member-ordering

// interface types/enums



// TODO: cleanup imports



// imports external to hardware interface












var isTablet = _platformInfo__WEBPACK_IMPORTED_MODULE_6__.PlatformIsAndroid || _platformInfo__WEBPACK_IMPORTED_MODULE_6__.PlatformIsIOS;
var BRAIN_LOCK_KEY = "BLE_LOCK_KEY";
var AIMNativeBLE = /*#__PURE__*/function (_AIMInterface) {
  function AIMNativeBLE() {
    var _this;
    _classCallCheck(this, AIMNativeBLE);
    _this = _callSuper(this, AIMNativeBLE);
    _defineProperty(_this, "discoveredDevices", []);
    _defineProperty(_this, "connectedDevice", null);
    _defineProperty(_this, "targetBrain", null);
    _defineProperty(_this, "BLEIsConnecting", false);
    _defineProperty(_this, "BLEIsScanning", false);
    _defineProperty(_this, "BLEisConnected", false);
    _defineProperty(_this, "lastBrainKey", "");
    _defineProperty(_this, "lastLockCode", "");
    //#endregion program control
    //#region project downloads
    _defineProperty(_this, "onV5BLEDownloadProgressEvent", new _dispatcher__WEBPACK_IMPORTED_MODULE_10__.DispatcherEvent());
    _this.onV5BLEDownloadProgressEvent.registerCallback(function (prog) {
      log.info("download progress: ", prog.progress, "(", prog.retry, "/", prog.limit, ") quality:", prog.quality);
    });
    return _this;
  }

  //#region interface information
  // These are all properties that are used by the UI to know what is supported
  _inherits(AIMNativeBLE, _AIMInterface);
  return _createClass(AIMNativeBLE, [{
    key: "supportsUSBConnection",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsAutomaticUSBConnection",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsAutomaticUSBConnectionUserPort",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsScreenCapture",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsFirmwareUpdateRobot",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsFirmwareUpdateController",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsEditableBrainName",
    get: function get() {
      return false;
    }
    //#endregion interface information

    //#region connection control
  }, {
    key: "openConnection",
    value: function () {
      var _openConnection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(connectionType) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (isTablet) {
                _context.next = 2;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 2:
              if (!(connectionType && connectionType !== _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE)) {
                _context.next = 4;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 4:
              this.discoveredDevices = [];
              this.BLEIsScanning = true;
              this.triggerBLEConnectionStateChange();
              return _context.abrupt("return", new Promise(function (resolve, reject) {
                _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEStartScanning().then(function () {
                  resolve();
                })["catch"](function (err) {
                  log.warn("Error starting scan");
                  log.warn(err);

                  // TODO: create actual error for this.
                  reject(new Error("error starting scan"));
                });
              }));
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function openConnection(_x) {
        return _openConnection.apply(this, arguments);
      }
      return openConnection;
    }()
  }, {
    key: "openConnectionToRobot",
    value: function () {
      var _openConnectionToRobot = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id) {
        var _this2 = this;
        var i;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              log.debug("openConnectionToRobot:", id);
              if (isTablet) {
                _context2.next = 3;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 3:
              this.BLEIsConnecting = true;
              this.triggerBLEConnectionStateChange();
              this.targetBrain = null;
              // tslint:disable-next-line: prefer-for-of
              i = 0;
            case 7:
              if (!(i < this.discoveredDevices.length)) {
                _context2.next = 14;
                break;
              }
              if (!(this.discoveredDevices[i].serial === id)) {
                _context2.next = 11;
                break;
              }
              this.targetBrain = this.discoveredDevices[i];
              return _context2.abrupt("break", 14);
            case 11:
              i++;
              _context2.next = 7;
              break;
            case 14:
              _context2.next = 16;
              return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEConnectToBrain(id).then(function (v) {
                _this2.BLEIsConnecting = v;
                _this2.triggerBLEConnectionStateChange();
                return v;
              })["catch"](function (err) {
                log.warn("Error connecting to brain", id);
                log.warn(err);
                _this2.BLEIsConnecting = false;
                _this2.triggerBLEConnectionStateChange();
                // TODO: create actual error for this
                throw new Error("error connecting to target brain id");
              });
            case 16:
              return _context2.abrupt("return", true);
            case 17:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function openConnectionToRobot(_x2) {
        return _openConnectionToRobot.apply(this, arguments);
      }
      return openConnectionToRobot;
    }()
  }, {
    key: "closeConnection",
    value: function () {
      var _closeConnection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(connectionType) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (isTablet) {
                _context3.next = 2;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 2:
              if (!(connectionType && connectionType !== _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE)) {
                _context3.next = 4;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 4:
              this.discoveredDevices = [];
              this.BLEisConnected = false;
              this.BLEIsConnecting = false;
              this.BLEIsScanning = false;
              this.connectedDevice = null;
              this.targetBrain = null;
              localStorage.removeItem(this.lastBrainKey);
              log.debug("removed key:", localStorage.getItem(this.lastBrainKey));
              this.triggerBLEConnectionStateChange();
              return _context3.abrupt("return", new Promise(function (resolve, reject) {
                _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEStopScanning().then(function () {
                  resolve(true);
                })["catch"](function (err) {
                  log.warn("Error stopping scan");
                  log.warn(err);

                  // TODO: create actual error for this.
                  reject(new Error("error stopping scan"));
                });
              }));
            case 14:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function closeConnection(_x3) {
        return _closeConnection.apply(this, arguments);
      }
      return closeConnection;
    }()
  }, {
    key: "unlockBrain",
    value: function () {
      var _unlockBrain = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(unlockCode) {
        var _this3 = this;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (isTablet) {
                _context4.next = 2;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 2:
              return _context4.abrupt("return", _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLESendLockCode(unlockCode).then(function (res) {
                log.debug("unlock result:", res);
                return res;
              })["catch"](function (err) {
                log.error("Error unlocking brain with ", unlockCode);
                log.warn(err);
                localStorage.removeItem(_this3.lastBrainKey);
                return false;
              }));
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function unlockBrain(_x4) {
        return _unlockBrain.apply(this, arguments);
      }
      return unlockBrain;
    }() //#endregion connection control
    //#region connection status
  }, {
    key: "connectionStateUSB",
    get: function get() {
      return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected;
    }
  }, {
    key: "connectionStateBLE",
    get: function get() {
      if (this.BLEisConnected) {
        return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected;
      } else if (this.BLEIsConnecting) {
        return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connecting;
      } else if (this.BLEIsScanning) {
        return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Scanning;
      } else {
        return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected;
      }
    }
  }, {
    key: "getRobotScanList",
    value: function getRobotScanList() {
      return this.discoveredDevices;
    }
  }, {
    key: "getTargetRobotInfo",
    value: function getTargetRobotInfo() {
      // TODO: should this be a copy?
      return this.targetBrain;
    }
    //#endregion connection status

    //#region brain info
  }, {
    key: "getRobotInfo",
    value: function getRobotInfo() {
      // TODO: fix this as we should still be able to get connection state and default values when not connected.
      if (!this.BLEisConnected) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError("cannot get brain info without connected brain");
      }
      return _objectSpread({}, this.connectedDevice);
    }
  }, {
    key: "setBrainName",
    value: function () {
      var _setBrainName = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(name) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              log.warn("setBrainName not yet implemented");
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 2:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function setBrainName(_x5) {
        return _setBrainName.apply(this, arguments);
      }
      return setBrainName;
    }()
  }, {
    key: "setTeamNumber",
    value: function () {
      var _setTeamNumber = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(team) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              log.warn("setTeamNumber not yet implemented");
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 2:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function setTeamNumber(_x6) {
        return _setTeamNumber.apply(this, arguments);
      }
      return setTeamNumber;
    }()
  }, {
    key: "captureRobotScreen",
    value: function captureRobotScreen(progressCallback) {
      log.warn("captureRobotScreen not yet implemented");
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "isBootloadMode",
    get: function get() {
      // we can assume that if connected over BLE, we are not in bootload mode
      return false;
    }
  }, {
    key: "playSoundFile",
    value: function playSoundFile(fileName) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "sendRemoteTouch",
    value: function sendRemoteTouch(xPosition, yPosition) {
      throw new Error("Method not implemented.");
    }
    //#endregion brain info

    //#region AI Vision
  }, {
    key: "AIVisionSensorPort",
    get: function get() {
      return undefined;
    }
  }, {
    key: "setTagDetection",
    value: function () {
      var _setTagDetection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(enabled) {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              log.debug("setTagDetection - enabled:", enabled);
              _context7.prev = 1;
              log.debug("setTagDetection - acquiring semaphore");
              _context7.next = 5;
              return this.adminSemaphore.acquire();
            case 5:
              log.debug("setTagDetection - acquired semaphore");
              if (!this.BLEisConnected) {
                _context7.next = 9;
                break;
              }
              _context7.next = 9;
              return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEEnableAprilTagDetection();
            case 9:
              _context7.next = 14;
              break;
            case 11:
              _context7.prev = 11;
              _context7.t0 = _context7["catch"](1);
              throw _context7.t0;
            case 14:
              _context7.prev = 14;
              log.debug("setTagDetection - release semaphore");
              this.adminSemaphore.release();
              return _context7.finish(14);
            case 18:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[1, 11, 14, 18]]);
      }));
      function setTagDetection(_x7) {
        return _setTagDetection.apply(this, arguments);
      }
      return setTagDetection;
    }()
  }, {
    key: "grabDetectedObjects",
    value: function () {
      var _grabDetectedObjects = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              log.debug("grabDetectedObjects called");
              throw new Error("Method not implemented.");
            case 2:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));
      function grabDetectedObjects() {
        return _grabDetectedObjects.apply(this, arguments);
      }
      return grabDetectedObjects;
    }() //#endregion AI Vision
    //#region program control
  }, {
    key: "play",
    value: function () {
      var _play = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(slot) {
        var result;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              log.debug("play on slot:", slot);
              if (isTablet) {
                _context9.next = 3;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 3:
              if (this.BLEisConnected) {
                _context9.next = 5;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
            case 5:
              if (!(slot < 0 || slot > 7)) {
                _context9.next = 7;
                break;
              }
              throw new RangeError("slot must be between 0 and 7 inclusive");
            case 7:
              _context9.prev = 7;
              log.debug("play - acquiring semaphore");
              _context9.next = 11;
              return this.adminSemaphore.acquire();
            case 11:
              log.debug("play - acquired semaphore");
              _context9.next = 14;
              return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLERunProgram(slot);
            case 14:
              result = _context9.sent;
              log.debug("run slot", slot, "result:", result);
              return _context9.abrupt("return", result);
            case 19:
              _context9.prev = 19;
              _context9.t0 = _context9["catch"](7);
              log.error("Error running program in slot", slot, _context9.t0);
              return _context9.abrupt("return", false);
            case 23:
              _context9.prev = 23;
              log.debug("play - release semaphore");
              this.adminSemaphore.release();
              return _context9.finish(23);
            case 27:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[7, 19, 23, 27]]);
      }));
      function play(_x8) {
        return _play.apply(this, arguments);
      }
      return play;
    }()
  }, {
    key: "stop",
    value: function () {
      var _stop = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var result;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              if (isTablet) {
                _context10.next = 2;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 2:
              if (this.BLEisConnected) {
                _context10.next = 4;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
            case 4:
              _context10.prev = 4;
              log.debug("stop - acquiring semaphore");
              _context10.next = 8;
              return this.adminSemaphore.acquire();
            case 8:
              log.debug("stop - acquired semaphore");
              _context10.next = 11;
              return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEStopProgram();
            case 11:
              result = _context10.sent;
              log.debug("program stopped. res:", result);
              return _context10.abrupt("return", true);
            case 16:
              _context10.prev = 16;
              _context10.t0 = _context10["catch"](4);
              log.error("Error stopping program", _context10.t0);
              log.warn(_context10.t0);
              return _context10.abrupt("return", false);
            case 21:
              _context10.prev = 21;
              log.debug("stop - release semaphore");
              this.adminSemaphore.release();
              this.setTagDetection(true); // turn AprilTag detection back on
              return _context10.finish(21);
            case 26:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this, [[4, 16, 21, 26]]);
      }));
      function stop() {
        return _stop.apply(this, arguments);
      }
      return stop;
    }()
  }, {
    key: "runSystemProgram",
    value: function runSystemProgram(slot) {
      return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLERunSystemProgram(slot);
    }
  }, {
    key: "isProjectRunning",
    value: function isProjectRunning() {
      return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEIsProgramRunning();
    }
  }, {
    key: "downloadProgram",
    value: function () {
      var _downloadProgram = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(slot, projectName, language, data, progressCallback) {
        var _this4 = this;
        var ini, iniContent, fileName, iniAB, binAB, progressEventWrapper;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              log.info("downloadProgram", slot, projectName, language);
              ini = new _vexcode_vexcode_webserial__WEBPACK_IMPORTED_MODULE_4__.VexINI();
              ini.programSlotSet(slot);
              ini.programNameSet(projectName);
              ini.programDescriptionSet("");
              ini.programIconSet(_vexcode_vexcode_webserial__WEBPACK_IMPORTED_MODULE_4__.VEXcodeIcons.VEXcodeBlocks); // TODO: make this change based on the project
              ini.projectIdeSet("Blocks"); // TODO: this should change based on the project
              iniContent = ini.createIni();
              fileName = "slot_".concat(slot + 1);
              iniAB = (0,_helpers__WEBPACK_IMPORTED_MODULE_9__.stringToArrayBuffer)(iniContent);
              binAB = data;
              progressEventWrapper = function progressEventWrapper(percent) {
                progressCallback({
                  progress: percent,
                  step: _vexcode_vexcode_webserial_dist_VexDeviceWebSerial__WEBPACK_IMPORTED_MODULE_14__.DownloadState.DownloadingProgram
                });
              };
              return _context12.abrupt("return", new Promise(/*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
                  var disconnectHandler, isPython, extType, loadAddress, linkFileVID, linkFileName, downloadTarget, result;
                  return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                      case 0:
                        log.info("starting program download");
                        disconnectHandler = function disconnectHandler() {
                          log.warn("device disconnected during download");
                          resolve(false);
                        };
                        _this4.on("deviceDisconnected", disconnectHandler);
                        log.debug("stopping current project on the brain");
                        _context11.next = 6;
                        return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEStopProgram();
                      case 6:
                        isPython = language === "python"; // TODO: this needs to change base on the VEX platform...
                        extType = isPython ? _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_13__.VEXosExtType.VEXVM : _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_13__.VEXosExtType.General;
                        loadAddress = isPython ? 0x07000000 : 0x03800000;
                        linkFileVID = isPython ? _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_13__.VEXosVID.VEXVM : _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_13__.VEXosVID.NONE;
                        linkFileName = isPython ? "python_vm.bin" : null;
                        downloadTarget = _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_13__.VEXosDownloadTarget.FILE_TARGET_QSPI;
                        _context11.prev = 12;
                        log.debug("downloadProgram - acquiring semaphore");
                        _context11.next = 16;
                        return _this4.adminSemaphore.acquire();
                      case 16:
                        log.debug("downloadProgram - acquired semaphore");
                        _context11.next = 19;
                        return _this4.DownloadProjectFiles(fileName, binAB, iniAB, undefined, extType, loadAddress, linkFileVID, linkFileName, downloadTarget, _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_13__.VEXosVID.USER, progressEventWrapper);
                      case 19:
                        result = _context11.sent;
                        _this4.off("deviceDisconnected", disconnectHandler);
                        if (result) {
                          log.debug("program download success");
                        } else {
                          log.debug("program download failed");
                        }
                        resolve(result);
                        _context11.next = 28;
                        break;
                      case 25:
                        _context11.prev = 25;
                        _context11.t0 = _context11["catch"](12);
                        reject(_context11.t0);
                      case 28:
                        _context11.prev = 28;
                        log.debug("downloadProgram - release semaphore");
                        _this4.adminSemaphore.release();
                        _this4.setTagDetection(true); // turn AprilTag detection back on
                        return _context11.finish(28);
                      case 33:
                      case "end":
                        return _context11.stop();
                    }
                  }, _callee11, null, [[12, 25, 28, 33]]);
                }));
                return function (_x14, _x15) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 13:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      }));
      function downloadProgram(_x9, _x10, _x11, _x12, _x13) {
        return _downloadProgram.apply(this, arguments);
      }
      return downloadProgram;
    }()
    /**
     * helper to handle downloading the files required for a project
     * @param basename the name of the project file on the brain. ex slot_1
     * @param binData the binary file data
     * @param iniData the ini file data
     * @param prjData optional source file data
     * @param extType the extType for the bin file
     * @param loadAddress the load address for the bin file
     * @param linkFileVID the vid for the linker file (VM file)
     * @param linkFileName the name for the linker file (VM file)
     * @param downloadTarget where the bin file should be downloaded to
     * @param fileVID the VID for the bin file - could probably be removed as a param
     * @param progressCallback callback fro progress updates
     * @returns 
     */
  }, {
    key: "DownloadProjectFiles",
    value: (function () {
      var _DownloadProjectFiles = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(basename, binData, iniData, prjData, extType, loadAddress, linkFileVID, linkFileName, downloadTarget, fileVID, progressCallback) {
        var re, name, binFilename, iniFilename, prjFilename, binLength, iniLength, prjLength, totalBytes, totalDone;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              if (binData) {
                _context13.next = 3;
                break;
              }
              log.warn("binData is mandatory for project download...");
              return _context13.abrupt("return", false);
            case 3:
              // Create file names.
              // Find basename of file
              re = /(.+?)(\.[^.]*$|$)/;
              name = re.exec(basename)[1]; // create names for the program files, all have same basename
              binFilename = name + '.bin';
              iniFilename = name + '.ini';
              prjFilename = name + '.prj'; // get total download size
              binLength = binData.byteLength;
              iniLength = iniData !== undefined ? iniData.byteLength : 0;
              prjLength = prjData !== undefined ? prjData.byteLength : 0;
              totalBytes = binLength;
              totalBytes += iniLength;
              totalBytes += prjLength;
              totalDone = 0;
              log.info("download ini file", iniFilename);
              _context13.next = 18;
              return this.DownloadFile(iniData, name, "ini", function (iniPercent) {
                log.debug("ini download is ".concat(iniPercent, "% done"));
                var percent = (iniPercent * iniLength + totalDone) / totalBytes;
                log.debug("total download is ".concat(percent, "% done"));
                progressCallback(percent);
              });
            case 18:
              if (_context13.sent) {
                _context13.next = 21;
                break;
              }
              log.warn("failed to download project's ini file");
              return _context13.abrupt("return", false);
            case 21:
              totalDone += iniLength;
              if (!prjData) {
                _context13.next = 30;
                break;
              }
              log.info("download prj file", prjFilename);
              _context13.next = 26;
              return this.DownloadFile(prjData, name, "prj", function (prjPercent) {
                log.debug("prj download is ".concat(prjPercent, "% done"));
                var percent = (prjPercent * prjLength + totalDone) / totalBytes;
                log.debug("total download is ".concat(percent, "% done"));
                progressCallback(percent);
              });
            case 26:
              if (_context13.sent) {
                _context13.next = 29;
                break;
              }
              log.warn("failed to download project's src file");
              return _context13.abrupt("return", false);
            case 29:
              totalDone += prjLength;
            case 30:
              log.info("download bin file", binFilename);
              _context13.next = 33;
              return this.DownloadFileRaw(binData, name, "bin", extType, loadAddress, linkFileVID, linkFileName, downloadTarget, fileVID, 1, function (binPercent) {
                log.debug("bin download is ".concat(binPercent, "% done"));
                var percent = (binPercent * binLength + totalDone) / totalBytes;
                log.debug("total download is ".concat(percent, "% done"));
                progressCallback(percent);
              });
            case 33:
              if (_context13.sent) {
                _context13.next = 36;
                break;
              }
              log.warn("failed to download project's bin file");
              return _context13.abrupt("return", false);
            case 36:
              return _context13.abrupt("return", true);
            case 37:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function DownloadProjectFiles(_x16, _x17, _x18, _x19, _x20, _x21, _x22, _x23, _x24, _x25, _x26) {
        return _DownloadProjectFiles.apply(this, arguments);
      }
      return DownloadProjectFiles;
    }())
  }, {
    key: "DownloadFile",
    value: function () {
      var _DownloadFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(binData, name, ext, progressUpdate) {
        var _this5 = this;
        var callbackWrapper, prom;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              callbackWrapper = function callbackWrapper(prog) {
                progressUpdate(prog.progress);
              };
              _context14.next = 3;
              return new Promise(function (resolve, reject) {
                _this5.onV5BLEDownloadProgressEvent.registerCallback(callbackWrapper);

                // native interface takes base 64 encoded string...
                var encoded = btoa((0,_helpers__WEBPACK_IMPORTED_MODULE_9__.arrayBufferToString)(binData));
                _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEDownloadFile(encoded, name, ext).then(function (v) {
                  resolve(v);
                  _this5.onV5BLEDownloadProgressEvent.unregisterCallback(callbackWrapper);
                })["catch"](function () {
                  reject("error downloading file");
                  _this5.onV5BLEDownloadProgressEvent.unregisterCallback(callbackWrapper);
                });
              })["catch"](function (err) {
                throw new Error(err);
              });
            case 3:
              prom = _context14.sent;
              return _context14.abrupt("return", prom);
            case 5:
            case "end":
              return _context14.stop();
          }
        }, _callee14);
      }));
      function DownloadFile(_x27, _x28, _x29, _x30) {
        return _DownloadFile.apply(this, arguments);
      }
      return DownloadFile;
    }()
    /**
     * This is a low level version of DownloadFile that lets us have more control
     * of the metadata for file download.
     * 
     * @param binData the python project data
     * @param name the name of the project file
     * @param ext the file extension
     * @param progressUpdate 
     * @returns 
     */
  }, {
    key: "DownloadFileRaw",
    value: (function () {
      var _DownloadFileRaw = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(binData, name, ext, extType, loadAddress, linkFileVID, linkFileName, downloadTarget, fileVID, version, progressUpdate) {
        var _this6 = this;
        var callbackWrapper, promise;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              callbackWrapper = function callbackWrapper(prog) {
                progressUpdate(prog.progress);
              };
              _context15.next = 3;
              return new Promise(function (resolve, reject) {
                _this6.onV5BLEDownloadProgressEvent.registerCallback(callbackWrapper);

                // native interface takes base 64 encoded string...
                var encoded = btoa((0,_helpers__WEBPACK_IMPORTED_MODULE_9__.arrayBufferToString)(binData));
                _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEDownloadFileRaw(encoded, name, ext, extType, loadAddress, linkFileVID, linkFileName, downloadTarget, fileVID, version).then(function (v) {
                  resolve(v);
                  _this6.onV5BLEDownloadProgressEvent.unregisterCallback(callbackWrapper);
                })["catch"](function () {
                  reject("error downloading file");
                  _this6.onV5BLEDownloadProgressEvent.unregisterCallback(callbackWrapper);
                });
              })["catch"](function (err) {
                throw new Error(err);
              });
            case 3:
              promise = _context15.sent;
              return _context15.abrupt("return", promise);
            case 5:
            case "end":
              return _context15.stop();
          }
        }, _callee15);
      }));
      function DownloadFileRaw(_x31, _x32, _x33, _x34, _x35, _x36, _x37, _x38, _x39, _x40, _x41) {
        return _DownloadFileRaw.apply(this, arguments);
      }
      return DownloadFileRaw;
    }())
  }, {
    key: "forcePythonVMDownload",
    value: function () {
      var _forcePythonVMDownload = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(progressCallback) {
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("forcePythonVMDownload");
            case 1:
            case "end":
              return _context16.stop();
          }
        }, _callee16);
      }));
      function forcePythonVMDownload(_x42) {
        return _forcePythonVMDownload.apply(this, arguments);
      }
      return forcePythonVMDownload;
    }() //#endregion project downloads
    //#region file operations
    /**
     * Internal helper function to download asset files (images, sounds, etc.) to the brain.
     * Handles common logic like connection checks, data encoding, progress reporting,
     * and calling the native download function.
     * @param filename The full filename (including extension).
     * @param data The file data as an ArrayBuffer.
     * @param fileVID The VEXos VID specific to the asset type.
     * @param extType The VEXos extension type (usually 0x00 for assets).
     * @param progressCallback Callback for progress updates (0-100).
     * @returns Promise resolving to true on success, false otherwise.
     */
  }, {
    key: "_downloadAssetFile",
    value: function () {
      var _downloadAssetFile2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(filename, data, fileVID, extType, progressCallback) {
        var _this7 = this;
        var progressWrapper;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              log.info("AIMNativeBLE: _downloadAssetFile - file: ".concat(filename, ", VID: ").concat(fileVID.toString(16), ", extType: ").concat(extType));
              if (isTablet) {
                _context18.next = 4;
                break;
              }
              log.error("_downloadAssetFile called on non-native platform");
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("_downloadAssetFile only supported on native platforms");
            case 4:
              if (this.BLEisConnected) {
                _context18.next = 7;
                break;
              }
              log.error("_downloadAssetFile called while not connected");
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError("_downloadAssetFile requires a connection");
            case 7:
              progressWrapper = function progressWrapper(progData) {
                progressCallback(progData.progress);
              };
              return _context18.abrupt("return", new Promise(/*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(resolve, reject) {
                  var encodedData, nameParts, ext, name, loadAddress, linkFileVID, linkFileName, downloadTarget, version, result;
                  return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                    while (1) switch (_context17.prev = _context17.next) {
                      case 0:
                        _this7.onV5BLEDownloadProgressEvent.registerCallback(progressWrapper);
                        log.debug("Registered progress wrapper for _downloadAssetFile");
                        _context17.prev = 2;
                        // native interface takes base 64 encoded string...
                        encodedData = btoa((0,_helpers__WEBPACK_IMPORTED_MODULE_9__.arrayBufferToString)(data)); // Extract name and extension for the payload
                        nameParts = filename.split('.');
                        ext = nameParts.pop() || '';
                        name = nameParts.join('.'); // Common parameters for asset downloads
                        loadAddress = 0; // Not applicable for assets
                        linkFileVID = _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_13__.VEXosVID.NONE;
                        linkFileName = "";
                        downloadTarget = _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_13__.VEXosDownloadTarget.FILE_TARGET_QSPI;
                        version = 0; // Versioning not typically used for user assets
                        log.debug("Calling NI.vexBLEDownloadFileRaw with name: ".concat(name, ", ext: ").concat(ext, ", fileVID: ").concat(fileVID.toString(16), ", extType: ").concat(extType));
                        _context17.next = 15;
                        return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEDownloadFileRaw(encodedData, name, ext, extType, loadAddress, linkFileVID, linkFileName, downloadTarget, fileVID, version);
                      case 15:
                        result = _context17.sent;
                        log.debug("NI.vexBLEDownloadFileRaw completed with result: ".concat(result));
                        resolve(result);
                        _context17.next = 24;
                        break;
                      case 20:
                        _context17.prev = 20;
                        _context17.t0 = _context17["catch"](2);
                        log.error("Error during NI.vexBLEDownloadFileRaw call:", _context17.t0);
                        reject(_context17.t0); // Propagate the error
                      case 24:
                        _context17.prev = 24;
                        _this7.onV5BLEDownloadProgressEvent.unregisterCallback(progressWrapper);
                        log.debug("Unregistered progress wrapper for _downloadAssetFile");
                        return _context17.finish(24);
                      case 28:
                      case "end":
                        return _context17.stop();
                    }
                  }, _callee17, null, [[2, 20, 24, 28]]);
                }));
                return function (_x48, _x49) {
                  return _ref2.apply(this, arguments);
                };
              }()));
            case 9:
            case "end":
              return _context18.stop();
          }
        }, _callee18, this);
      }));
      function _downloadAssetFile(_x43, _x44, _x45, _x46, _x47) {
        return _downloadAssetFile2.apply(this, arguments);
      }
      return _downloadAssetFile;
    }()
  }, {
    key: "writeSoundFile",
    value: function () {
      var _writeSoundFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(filename, data, progressCallback) {
        var imageFileVID, imageExtType;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              log.info("writeSoundFile - file: ".concat(filename));
              // Specific parameters for AIM Images
              imageFileVID = _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_13__.VEXosVID.AIM_IMAGE; // Use enum value for AIM Images
              imageExtType = 0x00; // Assuming 0 for PNG/general asset
              _context19.prev = 3;
              log.debug("writeSoundFile - acquiring semaphore");
              _context19.next = 7;
              return this.adminSemaphore.acquire();
            case 7:
              log.debug("writeSoundFile - acquired semaphore");
              return _context19.abrupt("return", this._downloadAssetFile(filename, data, imageFileVID, imageExtType, progressCallback));
            case 11:
              _context19.prev = 11;
              _context19.t0 = _context19["catch"](3);
              log.error("Error saving image file", _context19.t0);
              throw _context19.t0;
            case 15:
              _context19.prev = 15;
              log.debug("writeSoundFile - release semaphore");
              this.adminSemaphore.release();
              return _context19.finish(15);
            case 19:
            case "end":
              return _context19.stop();
          }
        }, _callee19, this, [[3, 11, 15, 19]]);
      }));
      function writeSoundFile(_x50, _x51, _x52) {
        return _writeSoundFile.apply(this, arguments);
      }
      return writeSoundFile;
    }()
  }, {
    key: "readSoundFile",
    value: function () {
      var _readSoundFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(filename, progressCallback) {
        var _this8 = this;
        var progressWrapper;
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              log.info("AIMNativeBLE: readSoundFile - file: ".concat(filename));
              if (isTablet) {
                _context21.next = 4;
                break;
              }
              log.error("readSoundFile called on non-native platform");
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("readSoundFile only supported on native platforms");
            case 4:
              if (this.BLEisConnected) {
                _context21.next = 7;
                break;
              }
              log.error("readSoundFile called while not connected");
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError("readSoundFile requires a connection");
            case 7:
              progressWrapper = function progressWrapper(progData) {
                progressCallback(progData.progress);
              };
              return _context21.abrupt("return", new Promise(/*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(resolve, reject) {
                  var base64Data, binaryString, len, bytes, i;
                  return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                    while (1) switch (_context20.prev = _context20.next) {
                      case 0:
                        _this8.onV5BLEDownloadProgressEvent.registerCallback(progressWrapper);
                        log.debug("Registered progress wrapper for readSoundFile");
                        _context20.prev = 2;
                        log.debug("readSoundFile - acquiring semaphore");
                        _context20.next = 6;
                        return _this8.adminSemaphore.acquire();
                      case 6:
                        log.debug("readSoundFile - acquired semaphore");
                        _context20.next = 9;
                        return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.ReadSoundFromRobot(filename);
                      case 9:
                        base64Data = _context20.sent;
                        log.debug("Native ReadSoundFromRobot returned data for:", filename);
                        binaryString = atob(base64Data);
                        len = binaryString.length;
                        bytes = new Uint8Array(len);
                        for (i = 0; i < len; i++) {
                          bytes[i] = binaryString.charCodeAt(i);
                        }
                        resolve(bytes);
                        _context20.next = 22;
                        break;
                      case 18:
                        _context20.prev = 18;
                        _context20.t0 = _context20["catch"](2);
                        log.error("Error reading sound file ".concat(filename), _context20.t0);
                        reject(_context20.t0); // Re-throw the error after logging
                      case 22:
                        _context20.prev = 22;
                        _this8.onV5BLEDownloadProgressEvent.unregisterCallback(progressWrapper);
                        log.debug("Unregistered progress wrapper for readSoundFile");
                        log.debug("readSoundFile - release semaphore");
                        _this8.adminSemaphore.release();
                        return _context20.finish(22);
                      case 28:
                      case "end":
                        return _context20.stop();
                    }
                  }, _callee20, null, [[2, 18, 22, 28]]);
                }));
                return function (_x55, _x56) {
                  return _ref3.apply(this, arguments);
                };
              }()));
            case 9:
            case "end":
              return _context21.stop();
          }
        }, _callee21, this);
      }));
      function readSoundFile(_x53, _x54) {
        return _readSoundFile.apply(this, arguments);
      }
      return readSoundFile;
    }()
  }, {
    key: "deleteSoundFile",
    value: function () {
      var _deleteSoundFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(filename) {
        var result;
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              _context22.prev = 0;
              log.debug("deleteSoundFile - acquiring semaphore");
              _context22.next = 4;
              return this.adminSemaphore.acquire();
            case 4:
              log.debug("deleteSoundFile - acquired semaphore");
              _context22.next = 7;
              return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEEraseFile(filename, _VexSerialDevices_VexSerialDevice__WEBPACK_IMPORTED_MODULE_17__.VexSerialDevice.VID.AIM_SOUND);
            case 7:
              result = _context22.sent;
              log.debug("Native erase sound file result:", result);
              return _context22.abrupt("return", result);
            case 12:
              _context22.prev = 12;
              _context22.t0 = _context22["catch"](0);
              log.debug("Native erase sounds file error:", _context22.t0);
              throw _context22.t0;
            case 16:
              _context22.prev = 16;
              log.debug("deleteSoundFile - release semaphore");
              this.adminSemaphore.release();
              return _context22.finish(16);
            case 20:
            case "end":
              return _context22.stop();
          }
        }, _callee22, this, [[0, 12, 16, 20]]);
      }));
      function deleteSoundFile(_x57) {
        return _deleteSoundFile.apply(this, arguments);
      }
      return deleteSoundFile;
    }()
  }, {
    key: "listSoundFiles",
    value: function () {
      var _listSoundFiles = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
        var result;
        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) switch (_context23.prev = _context23.next) {
            case 0:
              _context23.prev = 0;
              log.debug("listSoundFiles - acquiring semaphore");
              _context23.next = 4;
              return this.adminSemaphore.acquire();
            case 4:
              log.debug("listSoundFiles - acquired semaphore");
              _context23.next = 7;
              return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEGetFileList(_VexSerialDevices_VexSerialDevice__WEBPACK_IMPORTED_MODULE_17__.VexSerialDevice.VID.AIM_SOUND);
            case 7:
              result = _context23.sent;
              log.debug("Native listSoundFiles result:", result);
              return _context23.abrupt("return", result);
            case 12:
              _context23.prev = 12;
              _context23.t0 = _context23["catch"](0);
              log.debug("Native listSoundFiles error:", _context23.t0);
              throw _context23.t0;
            case 16:
              _context23.prev = 16;
              log.debug("listSoundFiles - release semaphore");
              this.adminSemaphore.release();
              return _context23.finish(16);
            case 20:
            case "end":
              return _context23.stop();
          }
        }, _callee23, this, [[0, 12, 16, 20]]);
      }));
      function listSoundFiles() {
        return _listSoundFiles.apply(this, arguments);
      }
      return listSoundFiles;
    }()
  }, {
    key: "writeImageFile",
    value: function () {
      var _writeImageFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24(filename, data, progressCallback) {
        var soundFileVID, soundExtType;
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              log.info("writeImageFile - file: ".concat(filename));
              // Specific parameters for AIM Sounds
              soundFileVID = _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_13__.VEXosVID.AIM_SOUND; // Use enum value for AIM Sounds
              soundExtType = 0x00; // Assuming 0 for MP3/general asset
              _context24.prev = 3;
              log.debug("writeImageFile - acquiring semaphore");
              _context24.next = 7;
              return this.adminSemaphore.acquire();
            case 7:
              log.debug("writeImageFile - acquired semaphore");
              return _context24.abrupt("return", this._downloadAssetFile(filename, data, soundFileVID, soundExtType, progressCallback));
            case 11:
              _context24.prev = 11;
              _context24.t0 = _context24["catch"](3);
              log.error("Error saving sound file", _context24.t0);
              throw _context24.t0;
            case 15:
              _context24.prev = 15;
              log.debug("writeImageFile - release semaphore");
              this.adminSemaphore.release();
              return _context24.finish(15);
            case 19:
            case "end":
              return _context24.stop();
          }
        }, _callee24, this, [[3, 11, 15, 19]]);
      }));
      function writeImageFile(_x58, _x59, _x60) {
        return _writeImageFile.apply(this, arguments);
      }
      return writeImageFile;
    }()
  }, {
    key: "readImageFile",
    value: function () {
      var _readImageFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(filename, progressCallback) {
        var _this9 = this;
        var progressWrapper;
        return _regeneratorRuntime().wrap(function _callee26$(_context26) {
          while (1) switch (_context26.prev = _context26.next) {
            case 0:
              log.info("readImageFile - file: ".concat(filename));
              if (isTablet) {
                _context26.next = 4;
                break;
              }
              log.error("readImageFile called on non-native platform");
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("readImageFile only supported on native platforms");
            case 4:
              if (this.BLEisConnected) {
                _context26.next = 7;
                break;
              }
              log.error("readImageFile called while not connected");
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError("readImageFile requires a connection");
            case 7:
              progressWrapper = function progressWrapper(progData) {
                console.log("progressWrapper", progData);
                progressCallback(progData.progress);
              };
              return _context26.abrupt("return", new Promise(/*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25(resolve, reject) {
                  var base64Data, binaryString, len, bytes, i;
                  return _regeneratorRuntime().wrap(function _callee25$(_context25) {
                    while (1) switch (_context25.prev = _context25.next) {
                      case 0:
                        log.debug("Registered progress wrapper for readImageFile");
                        _context25.prev = 1;
                        _this9.onV5BLEDownloadProgressEvent.registerCallback(progressWrapper);
                        _context25.next = 5;
                        return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.ReadImageFromRobot(filename);
                      case 5:
                        base64Data = _context25.sent;
                        log.debug("Native ReadImageFromRobot returned data for:", filename);
                        binaryString = atob(base64Data);
                        len = binaryString.length;
                        bytes = new Uint8Array(len);
                        for (i = 0; i < len; i++) {
                          bytes[i] = binaryString.charCodeAt(i);
                        }
                        resolve(bytes);
                        _context25.next = 18;
                        break;
                      case 14:
                        _context25.prev = 14;
                        _context25.t0 = _context25["catch"](1);
                        log.error("Error reading image file ".concat(filename), _context25.t0);
                        reject(_context25.t0); // Re-throw the error after logging
                      case 18:
                        _context25.prev = 18;
                        _this9.onV5BLEDownloadProgressEvent.unregisterCallback(progressWrapper);
                        log.debug("Unregistered progress wrapper for readImageFile");
                        return _context25.finish(18);
                      case 22:
                      case "end":
                        return _context25.stop();
                    }
                  }, _callee25, null, [[1, 14, 18, 22]]);
                }));
                return function (_x63, _x64) {
                  return _ref4.apply(this, arguments);
                };
              }()));
            case 9:
            case "end":
              return _context26.stop();
          }
        }, _callee26, this);
      }));
      function readImageFile(_x61, _x62) {
        return _readImageFile.apply(this, arguments);
      }
      return readImageFile;
    }()
  }, {
    key: "deleteImageFile",
    value: function () {
      var _deleteImageFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27(filename) {
        var result;
        return _regeneratorRuntime().wrap(function _callee27$(_context27) {
          while (1) switch (_context27.prev = _context27.next) {
            case 0:
              _context27.prev = 0;
              log.debug("deleteImageFile - acquiring semaphore");
              _context27.next = 4;
              return this.adminSemaphore.acquire();
            case 4:
              log.debug("deleteImageFile - acquired semaphore");
              _context27.next = 7;
              return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEEraseFile(filename, _VexSerialDevices_VexSerialDevice__WEBPACK_IMPORTED_MODULE_17__.VexSerialDevice.VID.AIM_IMAGE);
            case 7:
              result = _context27.sent;
              log.debug("Native erase image file result:", result);
              return _context27.abrupt("return", result);
            case 12:
              _context27.prev = 12;
              _context27.t0 = _context27["catch"](0);
              log.debug("Native erase image file error:", _context27.t0);
              throw _context27.t0;
            case 16:
              _context27.prev = 16;
              log.debug("deleteImageFile - release semaphore");
              this.adminSemaphore.release();
              return _context27.finish(16);
            case 20:
            case "end":
              return _context27.stop();
          }
        }, _callee27, this, [[0, 12, 16, 20]]);
      }));
      function deleteImageFile(_x65) {
        return _deleteImageFile.apply(this, arguments);
      }
      return deleteImageFile;
    }()
  }, {
    key: "listImageFiles",
    value: function () {
      var _listImageFiles = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
        var result;
        return _regeneratorRuntime().wrap(function _callee28$(_context28) {
          while (1) switch (_context28.prev = _context28.next) {
            case 0:
              _context28.prev = 0;
              log.debug("listImageFiles - acquiring semaphore");
              _context28.next = 4;
              return this.adminSemaphore.acquire();
            case 4:
              log.debug("listImageFiles - acquired semaphore");
              _context28.next = 7;
              return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEGetFileList(_VexSerialDevices_VexSerialDevice__WEBPACK_IMPORTED_MODULE_17__.VexSerialDevice.VID.AIM_IMAGE);
            case 7:
              result = _context28.sent;
              log.debug("Native listImageFiles result:", result);
              return _context28.abrupt("return", result);
            case 12:
              _context28.prev = 12;
              _context28.t0 = _context28["catch"](0);
              log.debug("Native listImageFiles error:", _context28.t0);
              throw _context28.t0;
            case 16:
              _context28.prev = 16;
              log.debug("listImageFiles - release semaphore");
              this.adminSemaphore.release();
              return _context28.finish(16);
            case 20:
            case "end":
              return _context28.stop();
          }
        }, _callee28, this, [[0, 12, 16, 20]]);
      }));
      function listImageFiles() {
        return _listImageFiles.apply(this, arguments);
      }
      return listImageFiles;
    }() //#endregion file operations
    //#region compilers
    //#endregion compilers
    //#region script commands
  }, {
    key: "executeScriptCommand",
    value: function executeScriptCommand(command, uuid) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "executeScriptCommands",
    value: function executeScriptCommands(commands) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "stopScriptEngine",
    value: function stopScriptEngine() {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "setConfigPreset",
    value: function setConfigPreset(preset) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "setConfigForPort",
    value: function setConfigForPort(port, deviceType, flags, limitPct, limitMax) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "setEyeSensorMode",
    value: function setEyeSensorMode(mode) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "clearPortEvents",
    value: function clearPortEvents(port) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
    //#endregion script commands

    //#region remote control
  }, {
    key: "sendControllerButton",
    value: function sendControllerButton(command, buttonID, whenPressed) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "sendControllerJoystickPreset",
    value: function sendControllerJoystickPreset(newType, driveSensitivity, turnSensitivity) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "saveControllerConfig",
    value: function saveControllerConfig() {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "sendControllerValues",
    value: function sendControllerValues(leftX, leftY, rightX, rightY, buttons) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
    //#endregion remote control

    //#region firmware
  }, {
    key: "canUpdateFirmware",
    value: function canUpdateFirmware() {
      return false;
    }
  }, {
    key: "updateFirmware",
    value: function updateFirmware(progress) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "checkDeviceFirmware",
    value: function () {
      var _checkDeviceFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee29(device) {
        var currentVersion, robotVersion, updateNeeded, versionMismatch;
        return _regeneratorRuntime().wrap(function _callee29$(_context29) {
          while (1) switch (_context29.prev = _context29.next) {
            case 0:
              log.info("checkDeviceFirmware");
              if (!(device.robotNeedsFirmwareUpdate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure)) {
                _context29.next = 12;
                break;
              }
              // we only need to check the versions if it has not been checked before
              log.debug("checking the version of the robot");
              // check the version on the server against the version on the brain
              _context29.next = 5;
              return this.getCurrentFirmware();
            case 5:
              currentVersion = _context29.sent;
              robotVersion = device.robotFirmwareVersion || _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString("0.0.0");
              updateNeeded = robotVersion.compare(currentVersion) < 0;
              versionMismatch = device.robotFirmwareVersionCPU0 ? device.robotFirmwareVersionCPU0.compare(device.robotFirmwareVersionCPU1) !== 0 : false;
              log.debug("checkDeviceFirmware - updateNeeded:", updateNeeded, "versionMismatch:", versionMismatch);

              // set the flag to indicate if the robot needs an update
              device.robotNeedsFirmwareUpdate = updateNeeded || versionMismatch ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.NeedsUpdate : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.UpToDate;
              if (this.isConnected) {
                this.triggerRobotInfoUpdate();
              }
            case 12:
              // not exactly sure why this is needed. it is part of AIM, so there should be a reason...
              this.triggerBLEConnectionStateChange();
            case 13:
            case "end":
              return _context29.stop();
          }
        }, _callee29, this);
      }));
      function checkDeviceFirmware(_x66) {
        return _checkDeviceFirmware.apply(this, arguments);
      }
      return checkDeviceFirmware;
    }() //#endregion firmware
    //#region User Port comms
  }, {
    key: "supportsUserPort",
    get: function get() {
      return false;
    }
  }, {
    key: "requiresUserPortConnectionProcess",
    get: function get() {
      return false;
    }
  }, {
    key: "openConnectionUserPort",
    value: function () {
      var _openConnectionUserPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee30(connectionType) {
        return _regeneratorRuntime().wrap(function _callee30$(_context30) {
          while (1) switch (_context30.prev = _context30.next) {
            case 0:
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 1:
            case "end":
              return _context30.stop();
          }
        }, _callee30);
      }));
      function openConnectionUserPort(_x67) {
        return _openConnectionUserPort.apply(this, arguments);
      }
      return openConnectionUserPort;
    }()
  }, {
    key: "closeConnectionUserPort",
    value: function () {
      var _closeConnectionUserPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee31(connectionType) {
        return _regeneratorRuntime().wrap(function _callee31$(_context31) {
          while (1) switch (_context31.prev = _context31.next) {
            case 0:
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 1:
            case "end":
              return _context31.stop();
          }
        }, _callee31);
      }));
      function closeConnectionUserPort(_x68) {
        return _closeConnectionUserPort.apply(this, arguments);
      }
      return closeConnectionUserPort;
    }()
  }, {
    key: "connectionStateUserPortUSB",
    get: function get() {
      return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected;
    }
  }, {
    key: "connectionStateUserPortBLE",
    get: function get() {
      return this.connectionStateBLE;
    }
  }, {
    key: "sendDataUserPort",
    value: function () {
      var _sendDataUserPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee32(data) {
        var result;
        return _regeneratorRuntime().wrap(function _callee32$(_context32) {
          while (1) switch (_context32.prev = _context32.next) {
            case 0:
              log.debug("sendDataUserPort:", data);
              if (isTablet) {
                _context32.next = 3;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 3:
              if (this.BLEisConnected) {
                _context32.next = 5;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
            case 5:
              _context32.prev = 5;
              log.debug("sendDataUserPort - acquiring semaphore");
              _context32.next = 9;
              return this.adminSemaphore.acquire();
            case 9:
              log.debug("sendDataUserPort - acquired semaphore");

              // make sure we have a program running before sending data
              _context32.next = 12;
              return this.isProjectRunning();
            case 12:
              if (_context32.sent) {
                _context32.next = 18;
                break;
              }
              // start the REPL program if no program is running
              log.debug("sendDataUserPort - starting REPL program");
              _context32.next = 16;
              return this.runSystemProgram(2);
            case 16:
              _context32.next = 18;
              return (0,_helpers__WEBPACK_IMPORTED_MODULE_15__.waitms)(100);
            case 18:
              _context32.next = 20;
              return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLESendUserMessage(data);
            case 20:
              result = _context32.sent;
              if (result) {
                log.debug("sendDataUserPort result:", result);
              } else {
                log.warn("sendDataUserPort failed");
              }
              _context32.next = 27;
              break;
            case 24:
              _context32.prev = 24;
              _context32.t0 = _context32["catch"](5);
              throw _context32.t0;
            case 27:
              _context32.prev = 27;
              log.debug("sendDataUserPort - release semaphore");
              this.adminSemaphore.release();
              return _context32.finish(27);
            case 31:
            case "end":
              return _context32.stop();
          }
        }, _callee32, this, [[5, 24, 27, 31]]);
      }));
      function sendDataUserPort(_x69) {
        return _sendDataUserPort.apply(this, arguments);
      }
      return sendDataUserPort;
    }() //#endregion User Port comms
    //#region events
  }, {
    key: "onVEXBLEDeviceDiscovered",
    value: function () {
      var _onVEXBLEDeviceDiscovered = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee33(name, vexos, serial, product, rssi) {
        var tmpVersion, tmpDev, alreadyFound, i;
        return _regeneratorRuntime().wrap(function _callee33$(_context33) {
          while (1) switch (_context33.prev = _context33.next) {
            case 0:
              log.info("onVEXBLEDeviceDiscovered", name, vexos, serial, product, rssi);
              if (!(this.targetBrain && this.targetBrain.serial === serial)) {
                _context33.next = 3;
                break;
              }
              return _context33.abrupt("return");
            case 3:
              if (!(this.connectedDevice && this.connectedDevice.serial === serial)) {
                _context33.next = 5;
                break;
              }
              return _context33.abrupt("return");
            case 5:
              tmpVersion = _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString(vexos);
              tmpDev = {
                serial: serial,
                robotFirmwareVersion: tmpVersion,
                robotBootloaderVersion: undefined,
                name: name,
                deviceType: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceType.VEXV5,
                connectionMethod: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE,
                brainConnected: false,
                robotNeedsFirmwareUpdate: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure,
                robotNeedsBootloaderUpdate: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure,
                canUpdate: false,
                battery: -1,
                rssi: rssi,
                isLocked: true
              };
              alreadyFound = false; // tslint:disable-next-line: prefer-for-of
              i = 0;
            case 9:
              if (!(i < this.discoveredDevices.length)) {
                _context33.next = 17;
                break;
              }
              if (!(this.discoveredDevices[i].serial === serial)) {
                _context33.next = 14;
                break;
              }
              alreadyFound = true;
              this.discoveredDevices[i] = tmpDev;
              return _context33.abrupt("break", 17);
            case 14:
              i++;
              _context33.next = 9;
              break;
            case 17:
              if (!alreadyFound) {
                this.discoveredDevices.push(tmpDev);
              }
              _context33.next = 20;
              return this.checkDeviceFirmware(tmpDev);
            case 20:
              log.debug("current device list:", this.discoveredDevices);
              _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_8__.fireEvent("HWInterface.DeviceListUpdate", this.discoveredDevices);
            case 22:
            case "end":
              return _context33.stop();
          }
        }, _callee33, this);
      }));
      function onVEXBLEDeviceDiscovered(_x70, _x71, _x72, _x73, _x74) {
        return _onVEXBLEDeviceDiscovered.apply(this, arguments);
      }
      return onVEXBLEDeviceDiscovered;
    }()
  }, {
    key: "onVEXBLEDeviceLost",
    value: function onVEXBLEDeviceLost(serial) {
      log.debug("onVEXBLEDeviceLost", serial);
      // tslint:disable-next-line: prefer-for-of
      for (var i = 0; i < this.discoveredDevices.length; i++) {
        if (this.discoveredDevices[i].serial === serial) {
          this.discoveredDevices.splice(i, 1);
          break;
        }
      }
      _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_8__.fireEvent("HWInterface.DeviceListUpdate", this.discoveredDevices);
    }
  }, {
    key: "onVEXBLEDeviceConnect",
    value: function () {
      var _onVEXBLEDeviceConnect = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee34(name, serial, vexos, locked, mode, cpu0Version, cpu1Version) {
        var versionObject, cpu0VersionObject, cpu1VersionObject, isBootloadMode, robotFirmware, robotBootloader;
        return _regeneratorRuntime().wrap(function _callee34$(_context34) {
          while (1) switch (_context34.prev = _context34.next) {
            case 0:
              log.info("onVEXBLEDeviceConnect - name:", name, "serial:", serial, "vexos:", vexos, "locked:", locked, "mode:", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode[mode], "cpu0Version:", cpu0Version, "cpu1Version:", cpu1Version);
              // figure out the version number based on the string and the mode
              versionObject = _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString(vexos);
              cpu0VersionObject = cpu0Version ? _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString(cpu0Version) : undefined;
              cpu1VersionObject = cpu1Version ? _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString(cpu1Version) : undefined;
              isBootloadMode = mode === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode.DFU;
              robotFirmware = isBootloadMode ? undefined : versionObject;
              robotBootloader = isBootloadMode ? versionObject : undefined;
              log.warn("onVEXBLEDeviceConnect - versionObject:", versionObject.toInternalString(), "version string:", vexos);
              log.warn("onVEXBLEDeviceConnect - robotFirmware:", robotFirmware === null || robotFirmware === void 0 ? void 0 : robotFirmware.toInternalString());
              this.connectedDevice = {
                serial: serial,
                robotFirmwareVersion: robotFirmware,
                robotBootloaderVersion: robotBootloader,
                robotFirmwareVersionCPU0: cpu0VersionObject,
                robotFirmwareVersionCPU1: cpu1VersionObject,
                name: name,
                deviceType: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceType.VEXV5,
                connectionMethod: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE,
                brainConnected: true,
                robotNeedsFirmwareUpdate: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure,
                robotNeedsBootloaderUpdate: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure,
                canUpdate: false,
                battery: -1,
                isLocked: locked
              };
              if (!locked) {
                _context34.next = 14;
                break;
              }
              log.debug("brain is locked. need to implement a unlock code dialog...");
              _context34.next = 24;
              break;
            case 14:
              if (!(serial === 0)) {
                _context34.next = 18;
                break;
              }
              log.info("we are connected, but don't have the information yet... wait to tell the app we are fully connected.");
              _context34.next = 24;
              break;
            case 18:
              this.BLEisConnected = true;
              _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_8__.fireEvent("HWInterface.BrainInfoUpdated", this.connectedDevice);
              _context34.next = 22;
              return this.checkDeviceFirmware(this.connectedDevice);
            case 22:
              this.triggerBLEConnectionStateChange();
              // add another for the lock state change...
              _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_8__.fireEvent("HWInterface.ConnectionStateChange", this.connectionState);
            case 24:
            case "end":
              return _context34.stop();
          }
        }, _callee34, this);
      }));
      function onVEXBLEDeviceConnect(_x75, _x76, _x77, _x78, _x79, _x80, _x81) {
        return _onVEXBLEDeviceConnect.apply(this, arguments);
      }
      return onVEXBLEDeviceConnect;
    }()
  }, {
    key: "onVEXBLEDeviceDisconnect",
    value: function onVEXBLEDeviceDisconnect() {
      log.warn("onVEXBLEDeviceDisconnect");
      this.BLEisConnected = false;
      this.BLEIsConnecting = false;
      this.BLEIsScanning = false;
      // When we disconnect from the app, we clear the target to prevent
      // reconnection. if we lost connection, we still have a target. In that
      // case, we should say that we are trying to connect again, as that is
      // what is happening in the background.
      if (this.targetBrain || this.connectedDevice) {
        this.BLEIsConnecting = true;
      }
      this.triggerBLEConnectionStateChange();
    }
  }, {
    key: "onVEXBLELockCodeDisplayed",
    value: function onVEXBLELockCodeDisplayed() {
      // this.displayLockCodePrompt(this.targetBrain.serial);
    }
  }, {
    key: "onVEXBLERequestLockCode",
    value: function onVEXBLERequestLockCode(serial) {
      log.warn("onVEXBLERequestLockCode - serial:", serial);
      this.displayLockCodePrompt(serial);
    }
  }, {
    key: "onVEXBLEDeviceUnlocked",
    value: function onVEXBLEDeviceUnlocked() {
      log.info("brain is unlocked.");
      // most device interface consider us fully connected here. That is fine in
      // most cases, but we have a lot that happens for AIM right after the
      // connection state changes, so we actually want to wait until we are
      // fully connected and have all the information before we tell the rest of
      // the app that we are connected.
      log.info("connected device after unlock:", this.connectedDevice);
      this.connectedDevice.isLocked = false;
    }
  }, {
    key: "onVEXBLEDownloadProgressUpdate",
    value: function onVEXBLEDownloadProgressUpdate(progress, retry, limit, quality) {
      this.onV5BLEDownloadProgressEvent.fire({
        progress: progress,
        retry: retry,
        limit: limit,
        quality: quality
      });
    }
  }, {
    key: "onVEXBLEReceivedUserData",
    value: function onVEXBLEReceivedUserData(messageBase64) {
      var message = atob(messageBase64);
      log.debug("received user data:", message);
      _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_8__.fireEvent("HWInterface.TerminalDataUpdate", message);
    }
  }, {
    key: "onVEXBLEDeviceUpdateAIVisionData",
    value: function onVEXBLEDeviceUpdateAIVisionData(raw) {
      var parsed = [];

      // 1) Parse all AiVisionObject objects
      var modelRe = /VEXAimBleAiVisionObject\s*\(\s*id:\s*(\d+),\s*type:\s*4,\s*object:\s*AiVisionObject\s*\(\s*xoffset:\s*(\d+),\s*yoffset:\s*(\d+),\s*width:\s*(\d+),\s*height:\s*(\d+),\s*score:\s*(\d+)\)\s*\)/g;
      var m;
      while (m = modelRe.exec(raw)) {
        var _m = m,
          _m2 = _slicedToArray(_m, 7),
          idStr = _m2[1],
          xStr = _m2[2],
          yStr = _m2[3],
          wStr = _m2[4],
          hStr = _m2[5],
          scoreStr = _m2[6];
        parsed.push({
          id: +idStr,
          type: 4,
          location: {
            xPos: +xStr,
            yPos: +yStr,
            width: +wStr,
            height: +hStr
          },
          score: +scoreStr
        });
      }

      // 2) Parse all AiVisionTag objects
      var tagRe = /VEXAimBleAiVisionObject\s*\(\s*id:\s*(\d+),\s*type:\s*(\d+),\s*object:\s*AiVisionTag\s*\(\s*x0:\s*(-?\d+),\s*y0:\s*(-?\d+),\s*x1:\s*(-?\d+),\s*y1:\s*(-?\d+),\s*x2:\s*(-?\d+),\s*y2:\s*(-?\d+),\s*x3:\s*(-?\d+),\s*y3:\s*(-?\d+)\)\s*\)/g;
      while (m = tagRe.exec(raw)) {
        var _m3 = m,
          _m4 = _slicedToArray(_m3, 11),
          _idStr = _m4[1],
          typeStr = _m4[2],
          x0s = _m4[3],
          y0s = _m4[4],
          x1s = _m4[5],
          y1s = _m4[6],
          x2s = _m4[7],
          y2s = _m4[8],
          x3s = _m4[9],
          y3s = _m4[10];
        parsed.push({
          id: +_idStr,
          type: +typeStr,
          location: {
            x0: +x0s,
            y0: +y0s,
            x1: +x1s,
            y1: +y1s,
            x2: +x2s,
            y2: +y2s,
            x3: +x3s,
            y3: +y3s
          }
        });
      }

      // 2) Parse all AiVisionCode objects ( codes )
      var codeRe = /VEXAimBleAiVisionObject\s*\(\s*id:\s*(\d+),\s*type:\s*2,\s*object:\s*AiVisionCode\s*\(\s*xoffset:\s*(\d+),\s*yoffset:\s*(\d+),\s*width:\s*(\d+),\s*height:\s*(\d+),\s*angle:\s*(\d+(?:\.\d+)?)\)\s*\)/g;
      while (m = codeRe.exec(raw)) {
        var _m5 = m,
          _m6 = _slicedToArray(_m5, 7),
          _idStr2 = _m6[1],
          _xStr = _m6[2],
          _yStr = _m6[3],
          _wStr = _m6[4],
          _hStr = _m6[5],
          angleStr = _m6[6];
        parsed.push({
          id: +_idStr2,
          type: 2,
          location: {
            xPos: +_xStr,
            yPos: +_yStr,
            width: +_wStr,
            height: +_hStr
          },
          angle: +angleStr
        });
      }

      // 3) Parse all AiVisionColor objects ( colors )
      var colorRe = /VEXAimBleAiVisionObject\s*\(\s*id:\s*(\d+),\s*type:\s*1,\s*object:\s*AiVisionColor\s*\(\s*xoffset:\s*(\d+),\s*yoffset:\s*(\d+),\s*width:\s*(\d+),\s*height:\s*(\d+),\s*angle:\s*(\d+(?:\.\d+)?)\)\s*\)/g;
      while (m = colorRe.exec(raw)) {
        var _m7 = m,
          _m8 = _slicedToArray(_m7, 7),
          _idStr3 = _m8[1],
          _xStr2 = _m8[2],
          _yStr2 = _m8[3],
          _wStr2 = _m8[4],
          _hStr2 = _m8[5],
          _angleStr = _m8[6];
        parsed.push({
          id: +_idStr3,
          type: 1,
          location: {
            xPos: +_xStr2,
            yPos: +_yStr2,
            width: +_wStr2,
            height: +_hStr2
          },
          angle: +_angleStr
        });
      }
      _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_8__.fireEvent("HWInterface.AIMVisionObjectsUpdate", parsed);
    }
    //#endregion events

    //#region misc
  }, {
    key: "lockCodeValidator",
    value: function lockCodeValidator(value) {
      if (value.length < 4) {
        return "id is too short. id must be 4 characters.";
      } else if (value.length > 4) {
        return "id is too long. id must be 4 characters.";
      } else if (value.match(/[^\d]/)) {
        return "contains invalid characters. id must be 4 decimal characters.";
      } else {
        return null;
      }
    }

    /**
     * This prompts the user for the lock code to unlock the robot. This is
     * used so that you know that you are connected to the correct robot.
     * 
     * While this will display the lock code, it will also check to see if the 
     * 
     * @param deviceID 
     */
  }, {
    key: "displayLockCodePrompt",
    value: (function () {
      var _displayLockCodePrompt = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee36(deviceID) {
        var _this10 = this;
        var recentBrain, brainKey, currKey;
        return _regeneratorRuntime().wrap(function _callee36$(_context36) {
          while (1) switch (_context36.prev = _context36.next) {
            case 0:
              log.debug("displayLockCodePrompt");
              recentBrain = _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_16__.storageInterface.readKey(_brainInfoStore__WEBPACK_IMPORTED_MODULE_12__.brainRecentKey);
              if (recentBrain && recentBrain !== deviceID.toString()) {
                log.debug("displayLockCodePrompt - clearing key for previous robot as it does not match the connection target");
                _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_16__.storageInterface.clearKey(BRAIN_LOCK_KEY + recentBrain);
              }

              // get the previous lock code if it exists so that we can try to skip the prompt
              brainKey = BRAIN_LOCK_KEY + deviceID;
              currKey = _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_16__.storageInterface.readKey(brainKey);
              log.debug("displayLockCodePrompt - target:", this.targetBrain);
              log.debug("displayLockCodePrompt - brain key: ", brainKey);
              log.debug("displayLockCodePrompt - current key: " + currKey);
              if (currKey) {
                _context36.next = 14;
                break;
              }
              _context36.next = 11;
              return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEShowLockCode(true);
            case 11:
              _widget_Modal__WEBPACK_IMPORTED_MODULE_11__.MODALCONTROL.showBrainLockCodePrompt(this.lockCodeValidator, /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee35(result) {
                  return _regeneratorRuntime().wrap(function _callee35$(_context35) {
                    while (1) switch (_context35.prev = _context35.next) {
                      case 0:
                        log.info("displayLockCodePrompt - result:", result);
                        if (!result) {
                          _context35.next = 13;
                          break;
                        }
                        _context35.next = 4;
                        return _this10.unlockBrain(result);
                      case 4:
                        if (!_context35.sent) {
                          _context35.next = 9;
                          break;
                        }
                        log.info("displayLockCodePrompt - robot unlocked with user input code");
                        _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_16__.storageInterface.writeKey(brainKey, result);
                        _context35.next = 11;
                        break;
                      case 9:
                        log.info("displayLockCodePrompt - robot not unlocked with user input code. asking again");
                        _this10.displayLockCodePrompt(deviceID);
                      case 11:
                        _context35.next = 16;
                        break;
                      case 13:
                        _context35.next = 15;
                        return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEShowLockCode(false);
                      case 15:
                        _this10.closeConnection(_types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE);
                      case 16:
                      case "end":
                        return _context35.stop();
                    }
                  }, _callee35);
                }));
                return function (_x83) {
                  return _ref5.apply(this, arguments);
                };
              }());
              _context36.next = 26;
              break;
            case 14:
              log.debug("displayLockCodePrompt - key found and sending that automatically");
              _context36.next = 17;
              return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEShowLockCode(true);
            case 17:
              _context36.next = 19;
              return this.unlockBrain(currKey);
            case 19:
              if (!_context36.sent) {
                _context36.next = 23;
                break;
              }
              log.debug("displayLockCodePrompt - robot unlocked with saved code");
              _context36.next = 26;
              break;
            case 23:
              log.warn("displayLockCodePrompt - saved key did not unlock robot");
              _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_16__.storageInterface.clearKey(brainKey);
              this.displayLockCodePrompt(deviceID);
            case 26:
            case "end":
              return _context36.stop();
          }
        }, _callee36, this);
      }));
      function displayLockCodePrompt(_x82) {
        return _displayLockCodePrompt.apply(this, arguments);
      }
      return displayLockCodePrompt;
    }() //#endregion misc
    //#region low-level logger
    )
  }, {
    key: "getLowLevelLogger",
    value: function getLowLevelLogger() {
      return null;
    }
    //#endregion low-level logger
  }]);
}(_AIMInterface__WEBPACK_IMPORTED_MODULE_3__.AIMInterface);


/***/ }),

/***/ "./src/HardwareInterface/types/HWTabletEnums.ts":
/*!******************************************************!*\
  !*** ./src/HardwareInterface/types/HWTabletEnums.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VEXosDownloadTarget: () => (/* binding */ VEXosDownloadTarget),
/* harmony export */   VEXosExtType: () => (/* binding */ VEXosExtType),
/* harmony export */   VEXosVID: () => (/* binding */ VEXosVID)
/* harmony export */ });
// TODO: this file should all be part of the web serial code....

var VEXosVID = /*#__PURE__*/function (VEXosVID) {
  VEXosVID[VEXosVID["NONE"] = 0] = "NONE";
  VEXosVID[VEXosVID["USER"] = 1] = "USER";
  // caseSYS   = 0x0f,
  // DEV1      = 0x10,
  // DEV2      = 0x18,
  // DEV3      = 0x20,
  // DEV4      = 0x28,
  // DEV5      = 0x30,
  // DEV6      = 0x38,
  VEXosVID[VEXosVID["VEXVM"] = 64] = "VEXVM";
  VEXosVID[VEXosVID["AIM_IMAGE"] = 128] = "AIM_IMAGE";
  // Added previously for AIM Images
  VEXosVID[VEXosVID["AIM_SOUND"] = 136] = "AIM_SOUND";
  // New VID for AIM Sounds
  VEXosVID[VEXosVID["VEX"] = 240] = "VEX";
  VEXosVID[VEXosVID["UNDEFINED"] = 241] = "UNDEFINED";
  VEXosVID[VEXosVID["FF"] = 255] = "FF";
  return VEXosVID;
}({});
var VEXosDownloadTarget = /*#__PURE__*/function (VEXosDownloadTarget) {
  VEXosDownloadTarget[VEXosDownloadTarget["NONE"] = 0] = "NONE";
  VEXosDownloadTarget[VEXosDownloadTarget["FILE_TARGET_DDR"] = 0] = "FILE_TARGET_DDR";
  VEXosDownloadTarget[VEXosDownloadTarget["FILE_TARGET_QSPI"] = 1] = "FILE_TARGET_QSPI";
  VEXosDownloadTarget[VEXosDownloadTarget["FILE_TARGET_DDRC"] = 4] = "FILE_TARGET_DDRC";
  VEXosDownloadTarget[VEXosDownloadTarget["FILE_TARGET_DDRE"] = 5] = "FILE_TARGET_DDRE";
  VEXosDownloadTarget[VEXosDownloadTarget["FILE_TARGET_FLASH"] = 6] = "FILE_TARGET_FLASH";
  // for IQ2
  VEXosDownloadTarget[VEXosDownloadTarget["FILE_TARGET_RADIO"] = 7] = "FILE_TARGET_RADIO";
  // for IQ2
  VEXosDownloadTarget[VEXosDownloadTarget["FILE_TARGET_A1"] = 13] = "FILE_TARGET_A1";
  VEXosDownloadTarget[VEXosDownloadTarget["FILE_TARGET_B1"] = 14] = "FILE_TARGET_B1";
  VEXosDownloadTarget[VEXosDownloadTarget["FILE_TARGET_B2"] = 15] = "FILE_TARGET_B2";
  return VEXosDownloadTarget;
}(VEXosDownloadTarget || {});
var VEXosExtType = /*#__PURE__*/function (VEXosExtType) {
  VEXosExtType[VEXosExtType["General"] = 0] = "General";
  VEXosExtType[VEXosExtType["VEXVM"] = 97] = "VEXVM";
  return VEXosExtType;
}(VEXosExtType || {});


/***/ })

}]);
//# sourceMappingURL=8c37eb9dc5cef2f52908.src_HardwareInterface_DownloadPlatform_AIM_AIMNativeBLE_ts.bundle.js.map