"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_HardwareInterface_DownloadPlatform_IQ_IQNativeBLE_ts"],{

/***/ "./src/HardwareInterface/DownloadPlatform/IQ/IQNativeBLE.ts":
/*!******************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/IQ/IQNativeBLE.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IQNativeBLE: () => (/* binding */ IQNativeBLE)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/HWEnums */ "./src/HardwareInterface/types/HWEnums.ts");
/* harmony import */ var _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types/HWErrors */ "./src/HardwareInterface/types/HWErrors.ts");
/* harmony import */ var _IQInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IQInterface */ "./src/HardwareInterface/DownloadPlatform/IQ/IQInterface.ts");
/* harmony import */ var _VexVersion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../VexVersion */ "./src/HardwareInterface/VexVersion.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers */ "./src/HardwareInterface/helpers.ts");
/* harmony import */ var _platformInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../platformInfo */ "./src/platformInfo.ts");
/* harmony import */ var _nativeInterface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../nativeInterface */ "./src/nativeInterface.ts");
/* harmony import */ var _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../GlobalEventSystem */ "./src/GlobalEventSystem.ts");
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../dispatcher */ "./src/dispatcher.ts");
/* harmony import */ var _widget_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../widget/Modal */ "./src/widget/Modal.tsx");
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../i18n/i18n */ "./src/i18n/i18n.ts");
/* harmony import */ var _vexcode_vexcode_webserial__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @vexcode/vexcode-webserial */ "./node_modules/@vexcode/vexcode-webserial/dist/index.js");
/* harmony import */ var _brainInfoStore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../brainInfoStore */ "./src/brainInfoStore.ts");
/* harmony import */ var _AppInfo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../AppInfo */ "./src/AppInfo.ts");
/* harmony import */ var _vexcode_python_vm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @vexcode/python-vm */ "./node_modules/@vexcode/python-vm/dist/index.js");
/* harmony import */ var _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../types/HWTabletEnums */ "./src/HardwareInterface/types/HWTabletEnums.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../helpers */ "./src/helpers.ts");
/* harmony import */ var _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../StorageInterface/VEXcodeLocalStorage */ "./src/StorageInterface/VEXcodeLocalStorage.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("IQBLE");
log.setLevel(log.levels.INFO);
// for dev only
// log.enableAll();
log.setHistoryLogger("HWInterface");

// tslint:disable: member-ordering interface-name

// interface types/enums



// Local Dependencies




// imports external to hardware interface














var isTablet = _platformInfo__WEBPACK_IMPORTED_MODULE_6__.PlatformIsAndroid || _platformInfo__WEBPACK_IMPORTED_MODULE_6__.PlatformIsIOS;
var BRAIN_LOCK_KEY = "BLE_LOCK_KEY";
var IQNativeBLE = /*#__PURE__*/function (_IQInterface) {
  function IQNativeBLE() {
    var _this;
    _classCallCheck(this, IQNativeBLE);
    _this = _callSuper(this, IQNativeBLE);
    _defineProperty(_this, "discoveredDevices", []);
    _defineProperty(_this, "connectedDevice", null);
    _defineProperty(_this, "targetBrain", null);
    _defineProperty(_this, "BLEIsConnecting", false);
    _defineProperty(_this, "BLEIsScanning", false);
    _defineProperty(_this, "BLEIsConnected", false);
    _defineProperty(_this, "lastTargetIsGen2", _AppInfo__WEBPACK_IMPORTED_MODULE_14__.appState.getAppState().targetGen === "Second");
    _defineProperty(_this, "onBLEDownloadProgressEvent", new _dispatcher__WEBPACK_IMPORTED_MODULE_9__.DispatcherEvent());
    _defineProperty(_this, "onBLEAdvertisingErrorEvent", new _dispatcher__WEBPACK_IMPORTED_MODULE_9__.DispatcherEvent());
    _this.onBLEDownloadProgressEvent.registerCallback(function (prog) {
      log.info("download progress: ", prog.progress, "(", prog.retry, "/", prog.limit, ") quality:", prog.quality);
    });
    _this.onBLEAdvertisingErrorEvent.registerCallback(function (err) {
      log.warn("Advertising error:", err);
      var sma = err.supportsMultipleAdvertising;
      var msg = sma ? _i18n_i18n__WEBPACK_IMPORTED_MODULE_11__.i18n.t("error advertising to IQ") : _i18n_i18n__WEBPACK_IMPORTED_MODULE_11__.i18n.t("error advertising to IQ single advert");
      var errcode = (sma ? "BLEM" : "BLES") + err.errorCode;
      _widget_Modal__WEBPACK_IMPORTED_MODULE_10__.MODALCONTROL.showAdvertisingError(msg, errcode);
    });
    _this.onAppStateChange = _this.onAppStateChange.bind(_this);
    _AppInfo__WEBPACK_IMPORTED_MODULE_14__.appState.registerEventListener(_this.onAppStateChange);
    _this.lastTargetIsGen2 = _AppInfo__WEBPACK_IMPORTED_MODULE_14__.appState.getAppState().targetGen === "Second";
    _this.setNativeTarget(_this.lastTargetIsGen2);
    return _this;
  }
  _inherits(IQNativeBLE, _IQInterface);
  return _createClass(IQNativeBLE, [{
    key: "onAppStateChange",
    value: function onAppStateChange(newState) {
      var newTargetIsGen2 = newState.targetGen === "Second";
      if (newTargetIsGen2 !== this.lastTargetIsGen2) {
        this.lastTargetIsGen2 = newTargetIsGen2;
        this.setNativeTarget(newTargetIsGen2);
      }
    }
  }, {
    key: "setNativeTarget",
    value: function () {
      var _setNativeTarget = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(isGen2) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              log.debug("changing target generation -", isGen2);
              if (!(this.BLEIsConnecting || this.BLEIsConnected)) {
                _context.next = 9;
                break;
              }
              if (!isGen2) {
                _context.next = 7;
                break;
              }
              _context.next = 5;
              return this.closeConnectionIQ1();
            case 5:
              _context.next = 9;
              break;
            case 7:
              _context.next = 9;
              return this.closeConnectionIQ2();
            case 9:
              _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLESetTargetProduct(isGen2 ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceType.VEXIQ2 : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceType.VEXIQ)["catch"](function (err) {
                log.warn("Error changing target generation");
                log.warn(err);
              });
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function setNativeTarget(_x) {
        return _setNativeTarget.apply(this, arguments);
      }
      return setNativeTarget;
    }() //#region interface information
    // These are all properties that are used by the UI to know what is supported
  }, {
    key: "supportsUSBConnection",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsBLEConnection",
    get: function get() {
      return true;
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
    key: "supportsTeamNumber",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsEditableBrainName",
    get: function get() {
      return true;
    }
    //#endregion interface information

    //#region connection control
  }, {
    key: "openConnection",
    value: function openConnection(connectionType) {
      if (!isTablet || !this.appTargetIsIQ2) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
      }
      log.debug("openConnection - type:", connectionType ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod[connectionType] : "default");
      if (connectionType && connectionType !== _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
      }
      this.discoveredDevices = [];
      this.BLEIsScanning = true;
      this.triggerBLEConnectionStateChange();
      return new Promise(function (resolve, reject) {
        _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEStartScanning().then(function () {
          resolve();
        })["catch"](function (err) {
          log.warn("Error starting scan");
          log.warn(err);

          // TODO: create actual error for this.
          reject(new Error("error starting scan"));
        });
      });
    }
  }, {
    key: "openConnectionToRobot",
    value: function () {
      var _openConnectionToRobot = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              log.debug("openConnectionToRobot", id);
              if (!this.appTargetIsIQ2) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return", this.openConnectionToRobotIQ2(id));
            case 3:
              return _context2.abrupt("return", this.openConnectionToRobotIQ1(id));
            case 4:
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
    key: "openConnectionToRobotIQ1",
    value: function () {
      var _openConnectionToRobotIQ = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id) {
        var _this2 = this;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              log.debug("openConnectionToRobotIQ1:", id);
              if (isTablet) {
                _context3.next = 3;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 3:
              this.BLEIsConnecting = id !== 0;
              this.triggerBLEConnectionStateChange();
              _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEConnectToBrain(id).then(function (v) {
                log.debug("after vexBLEConnectToBrain", v);
                _this2.BLEIsConnected = false;
                _this2.BLEIsConnecting = id !== 0;
                _this2.triggerBLEConnectionStateChange();
                return v;
              })["catch"](function (err) {
                log.error("error connecting to brain:", id);
                log.error(err);
                _this2.BLEIsConnecting = false;
                _this2.triggerBLEConnectionStateChange();
                throw new Error("error connecting to target brain");
              });
              return _context3.abrupt("return", false);
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function openConnectionToRobotIQ1(_x3) {
        return _openConnectionToRobotIQ.apply(this, arguments);
      }
      return openConnectionToRobotIQ1;
    }()
  }, {
    key: "openConnectionToRobotIQ2",
    value: function () {
      var _openConnectionToRobotIQ2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id) {
        var _this3 = this;
        var i;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              log.debug("openConnectionToRobotIQ2:", id);
              if (isTablet) {
                _context4.next = 3;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 3:
              if (!(id === 0)) {
                _context4.next = 5;
                break;
              }
              return _context4.abrupt("return", this.closeConnectionIQ1());
            case 5:
              this.BLEIsConnecting = true;
              this.triggerBLEConnectionStateChange();
              this.targetBrain = null;
              // tslint:disable-next-line: prefer-for-of
              i = 0;
            case 9:
              if (!(i < this.discoveredDevices.length)) {
                _context4.next = 16;
                break;
              }
              if (!(this.discoveredDevices[i].serial === id)) {
                _context4.next = 13;
                break;
              }
              this.targetBrain = this.discoveredDevices[i];
              return _context4.abrupt("break", 16);
            case 13:
              i++;
              _context4.next = 9;
              break;
            case 16:
              _context4.next = 18;
              return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEConnectToBrain(id).then(function (v) {
                _this3.BLEIsConnecting = v;
                _this3.triggerBLEConnectionStateChange();
                return v;
              })["catch"](function (err) {
                log.warn("Error connecting to brain", id);
                log.warn(err);
                _this3.BLEIsConnecting = false;
                _this3.triggerBLEConnectionStateChange();
                // TODO: create actual error for this
                throw new Error("error connecting to target brain id");
              });
            case 18:
              return _context4.abrupt("return", true);
            case 19:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function openConnectionToRobotIQ2(_x4) {
        return _openConnectionToRobotIQ2.apply(this, arguments);
      }
      return openConnectionToRobotIQ2;
    }()
  }, {
    key: "closeConnection",
    value: function closeConnection(connectionType) {
      if (!isTablet) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
      }
      log.debug("closeConnection - type:", connectionType ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod[connectionType] : "default");
      if (connectionType && connectionType !== _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
      }
      if (this.appTargetIsIQ2) {
        return this.closeConnectionIQ2();
      }
      return this.closeConnectionIQ1();
    }
  }, {
    key: "closeConnectionIQ1",
    value: function () {
      var _closeConnectionIQ = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (isTablet) {
                _context5.next = 2;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 2:
              log.debug("closeConnectionIQ1");
              this.BLEIsConnected = false;
              this.BLEIsConnecting = false;
              this.triggerBLEConnectionStateChange();
              _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEDisconnectFromBrain();
              return _context5.abrupt("return", false);
            case 8:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function closeConnectionIQ1() {
        return _closeConnectionIQ.apply(this, arguments);
      }
      return closeConnectionIQ1;
    }()
  }, {
    key: "closeConnectionIQ2",
    value: function closeConnectionIQ2() {
      if (!isTablet) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
      }
      log.debug("closeConnectionIQ2");
      this.discoveredDevices = [];
      this.BLEIsConnected = false;
      this.BLEIsConnecting = false;
      this.BLEIsScanning = false;
      this.connectedDevice = null;
      this.targetBrain = null;
      this.triggerBLEConnectionStateChange();
      return new Promise(function (resolve, reject) {
        _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEStopScanning().then(function () {
          resolve(true);
        })["catch"](function (err) {
          log.warn("Error stopping scan");
          log.warn(err);

          // TODO: create actual error for this.
          reject(new Error("error stopping scan"));
        });
      });
    }
  }, {
    key: "unlockBrain",
    value: function () {
      var _unlockBrain = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(unlockCode) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!(!isTablet || !this.appTargetIsIQ2)) {
                _context6.next = 2;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 2:
              return _context6.abrupt("return", _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLESendLockCode(unlockCode).then(function (res) {
                log.info("unlock result:", res);
                return res;
              })["catch"](function (err) {
                log.error("Error unlocking brain with ", unlockCode);
                log.warn(err);
                return false;
              }));
            case 3:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function unlockBrain(_x5) {
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
      log.debug("getConnectionState:", this.BLEIsConnecting, this.BLEIsConnected, this.BLEIsScanning);
      if (this.appTargetIsIQ2) {
        if (this.BLEIsConnected) {
          return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected;
        } else if (this.BLEIsConnecting) {
          return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connecting;
        } else if (this.BLEIsScanning) {
          return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Scanning;
        } else {
          return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected;
        }
      } else {
        if (this.BLEIsConnected) {
          var hasSerial = this.connectedDevice && this.connectedDevice.serial !== 0;
          var hasName = this.connectedDevice && this.connectedDevice.name;
          var hasVersion = this.connectedDevice && this.connectedDevice.robotFirmwareVersion.toUserString() !== "0.0.0";
          if (hasSerial || hasName || hasVersion) {
            return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected;
          } else {
            return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connecting;
          }
        } else if (this.BLEIsConnecting) {
          return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connecting;
        } else {
          return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected;
        }
      }
    }
    //#endregion connection status

    //#region brain info
  }, {
    key: "getRobotScanList",
    value: function getRobotScanList() {
      return this.discoveredDevices;
    }
  }, {
    key: "getRobotInfo",
    value: function getRobotInfo() {
      // TODO: fix this as we should still be able to get connection state and default values when not connected.
      if (!this.BLEIsConnected) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError("cannot get brain info without connected brain");
      }
      return _objectSpread({}, this.connectedDevice);
    }
  }, {
    key: "getTargetRobotInfo",
    value: function getTargetRobotInfo() {
      return this.targetBrain;
    }
  }, {
    key: "setBrainName",
    value: function () {
      var _setBrainName = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(name) {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              log.warn("setBrainName not yet implemented");
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 2:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      function setBrainName(_x6) {
        return _setBrainName.apply(this, arguments);
      }
      return setBrainName;
    }()
  }, {
    key: "isBrainConnected",
    value: function isBrainConnected() {
      return this.BLEIsConnected;
    }
  }, {
    key: "targetIsIQ2",
    get: function get() {
      return this.appTargetIsIQ2;
    }
    //#endregion brain info

    //#region program control
  }, {
    key: "play",
    value: function () {
      var _play = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(slot) {
        var slotLimit;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              log.debug("play on slot:", slot);
              if (isTablet) {
                _context8.next = 3;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 3:
              if (this.BLEIsConnected) {
                _context8.next = 5;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
            case 5:
              slotLimit = this.appTargetIsIQ2 ? 7 : 3;
              if (!(slot < 0 || slot > slotLimit)) {
                _context8.next = 8;
                break;
              }
              throw new RangeError("slot must be between 0 and ".concat(slotLimit, " inclusive"));
            case 8:
              return _context8.abrupt("return", _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLERunProgram(slot).then(function (res) {
                log.debug("run slot", slot, "result:", res);
                return true;
              })["catch"](function (err) {
                log.error("Error running program in slot", slot, err);
                return false;
              }));
            case 9:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function play(_x7) {
        return _play.apply(this, arguments);
      }
      return play;
    }()
  }, {
    key: "stop",
    value: function () {
      var _stop = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (isTablet) {
                _context9.next = 2;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 2:
              if (this.BLEIsConnected) {
                _context9.next = 4;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
            case 4:
              return _context9.abrupt("return", _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEStopProgram().then(function (res) {
                log.debug("program stopped. res:", res);
                return true;
              })["catch"](function (err) {
                log.error("Error stopping program", err);
                log.warn(err);
                return false;
              }));
            case 5:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function stop() {
        return _stop.apply(this, arguments);
      }
      return stop;
    }() //#endregion program control
    //#region project downloads
  }, {
    key: "supportsPythonVM",
    get: function get() {
      return this.appTargetIsIQ2;
    }
  }, {
    key: "downloadProgram",
    value: function () {
      var _downloadProgram = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(slot, projectName, language, data, progressCallback) {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              log.info("downloadProgram:", slot, projectName, language);
              if (!this.appTargetIsIQ2) {
                _context10.next = 3;
                break;
              }
              return _context10.abrupt("return", this.downloadProgramIQ2(slot, projectName, language, data, progressCallback));
            case 3:
              return _context10.abrupt("return", this.downloadProgramIQ1(slot, projectName, language, data, progressCallback));
            case 4:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function downloadProgram(_x8, _x9, _x10, _x11, _x12) {
        return _downloadProgram.apply(this, arguments);
      }
      return downloadProgram;
    }()
  }, {
    key: "downloadProgramIQ1",
    value: function () {
      var _downloadProgramIQ = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(slot, projectName, language, data, progressCallback) {
        var _this4 = this;
        var encodedData, callbackWrapper;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              log.info("downloadProgramIQ1:", slot, projectName, language);

              // tslint:disable: trailing-comma
              // const programInfo: ProgramInfo = {
              //   slot,
              //   name: projectName,
              //   desc: "",
              //   icon: "USER001x.bmp",
              //   ports: [ , , , , , , , , , , , , , , , , , , , , , , , ],
              //   triport_22: [ , , , , , , , , ],
              //   controller_1: [],
              //   controller_2: [],
              //   progress: null,
              //   autorun: false,
              //   language,
              // };
              encodedData = btoa((0,_helpers__WEBPACK_IMPORTED_MODULE_5__.arrayBufferToString)(data));
              callbackWrapper = function callbackWrapper(prog) {
                progressCallback(prog);
              };
              return _context12.abrupt("return", new Promise(/*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
                  var _onDownloadDisconnect;
                  return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                      case 0:
                        log.debug("starting program download");
                        _onDownloadDisconnect = function onDownloadDisconnect() {
                          log.warn("device disconnected during download");
                          _this4.off("deviceDisconnected", _onDownloadDisconnect);
                          resolve(false);
                        };
                        _this4.on("deviceDisconnected", _onDownloadDisconnect);
                        _this4.onBLEDownloadProgressEvent.registerCallback(callbackWrapper);
                        _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEDownloadFile(encodedData, "" + slot, "bin").then(function (result) {
                          _this4.onBLEDownloadProgressEvent.unregisterCallback(callbackWrapper);
                          _this4.off("deviceDisconnected", _onDownloadDisconnect);
                          if (result) {
                            log.debug("program download success:", result);
                            resolve(true);
                          } else {
                            log.debug("program download failed:", result);
                            resolve(false);
                          }
                        })["catch"](function (err) {
                          log.debug("program download failed");
                          _this4.onBLEDownloadProgressEvent.unregisterCallback(callbackWrapper);
                          throw new Error(err);
                        });
                      case 5:
                      case "end":
                        return _context11.stop();
                    }
                  }, _callee11);
                }));
                return function (_x18, _x19) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 4:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      }));
      function downloadProgramIQ1(_x13, _x14, _x15, _x16, _x17) {
        return _downloadProgramIQ.apply(this, arguments);
      }
      return downloadProgramIQ1;
    }()
  }, {
    key: "downloadProgramIQ2",
    value: function () {
      var _downloadProgramIQ2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(slot, projectName, language, data, progressCallback) {
        var _this5 = this;
        var ini, iniContent, fileName, iniAB, binAB, progressEventWrapper;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              log.info("downloadProgramIQ2:", slot, projectName, language);
              ini = new _vexcode_vexcode_webserial__WEBPACK_IMPORTED_MODULE_12__.VexINI();
              ini.programSlotSet(slot);
              ini.programNameSet(projectName);
              ini.programDescriptionSet("");
              ini.programIconSet(_vexcode_vexcode_webserial__WEBPACK_IMPORTED_MODULE_12__.VEXcodeIcons.VEXcodeBlocks); // TODO: make this change based on the project
              ini.projectIdeSet("VEXcode"); // TODO: this should change based on the project
              iniContent = ini.createIni();
              fileName = "slot_".concat(slot + 1);
              iniAB = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.stringToArrayBuffer)(iniContent);
              binAB = data;
              progressEventWrapper = function progressEventWrapper(percent) {
                progressCallback({
                  progress: percent,
                  step: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DownloadState.DownloadingProgram
                });
              };
              return _context14.abrupt("return", new Promise(/*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(resolve, reject) {
                  var disconnectHandler, firstVMCheck, needsVM, vmDataString, vmArrayBuffer, VMresult, isPython, extType, loadAddress, linkFileVID, linkFileName, downloadTarget, result;
                  return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                      case 0:
                        log.info("starting program download");
                        disconnectHandler = function disconnectHandler() {
                          log.warn("device disconnected during download");
                          resolve(false);
                        };
                        _this5.on("deviceDisconnected", disconnectHandler);
                        if (!(language === "python")) {
                          _context13.next = 26;
                          break;
                        }
                        _context13.next = 6;
                        return _this5.checkPythonVm(_vexcode_python_vm__WEBPACK_IMPORTED_MODULE_15__.metaIQ2.crc, _vexcode_python_vm__WEBPACK_IMPORTED_MODULE_15__.metaIQ2.version);
                      case 6:
                        firstVMCheck = _context13.sent;
                        log.debug("firstVMCheck:", firstVMCheck);
                        needsVM = !firstVMCheck.exists || !firstVMCheck.valid;
                        if (!needsVM) {
                          _context13.next = 26;
                          break;
                        }
                        // update the progress no since it can take a second or 2 to actually start downloading and
                        // it helps to see what is happening sooner
                        progressCallback({
                          progress: 0,
                          step: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DownloadState.DownloadingVM
                        });

                        // short delay after checking VM since failed metadata reads seem to cause issues
                        _context13.next = 13;
                        return (0,_helpers__WEBPACK_IMPORTED_MODULE_17__.waitms)(1000);
                      case 13:
                        _context13.t0 = atob;
                        _context13.next = 16;
                        return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEReadVMFile("iq2");
                      case 16:
                        _context13.t1 = _context13.sent;
                        vmDataString = (0, _context13.t0)(_context13.t1);
                        vmArrayBuffer = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.stringToArrayBuffer)(vmDataString);
                        _context13.next = 21;
                        return _this5.DownloadFileRaw(vmArrayBuffer, "python_vm", "bin", _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_16__.VEXosExtType.VEXVM, 0x10300000, _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_16__.VEXosVID.NONE, undefined, _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_16__.VEXosDownloadTarget.FILE_TARGET_FLASH, _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_16__.VEXosVID.FF, 1, function (percent) {
                          progressCallback({
                            progress: percent,
                            step: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DownloadState.DownloadingVM
                          });
                        });
                      case 21:
                        VMresult = _context13.sent;
                        if (!VMresult) {
                          log.warn("failed to download the Python VM");
                          _this5.off("deviceDisconnected", disconnectHandler);
                          resolve(false);
                        }

                        // make the progress bar reset to 0 for the actual download and update the text
                        progressEventWrapper(0);
                        _context13.next = 26;
                        return (0,_helpers__WEBPACK_IMPORTED_MODULE_17__.waitms)(1000);
                      case 26:
                        isPython = language === "python"; // TODO: this needs to change base on the VEX platform...
                        extType = isPython ? _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_16__.VEXosExtType.VEXVM : _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_16__.VEXosExtType.General;
                        loadAddress = isPython ? 0x07000000 : 0x03800000;
                        linkFileVID = isPython ? _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_16__.VEXosVID.VEXVM : _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_16__.VEXosVID.NONE;
                        linkFileName = isPython ? "python_vm.bin" : null;
                        downloadTarget = _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_16__.VEXosDownloadTarget.FILE_TARGET_QSPI;
                        _context13.next = 34;
                        return _this5.DownloadProjectFiles(fileName, binAB, iniAB, undefined, extType, loadAddress, linkFileVID, linkFileName, downloadTarget, _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_16__.VEXosVID.USER, progressEventWrapper);
                      case 34:
                        result = _context13.sent;
                        _this5.off("deviceDisconnected", disconnectHandler);
                        if (result) {
                          log.debug("program download success");
                        } else {
                          log.debug("program download failed");
                        }
                        resolve(result);
                      case 38:
                      case "end":
                        return _context13.stop();
                    }
                  }, _callee13);
                }));
                return function (_x25, _x26) {
                  return _ref2.apply(this, arguments);
                };
              }()));
            case 13:
            case "end":
              return _context14.stop();
          }
        }, _callee14);
      }));
      function downloadProgramIQ2(_x20, _x21, _x22, _x23, _x24) {
        return _downloadProgramIQ2.apply(this, arguments);
      }
      return downloadProgramIQ2;
    }()
    /**
     * checks to see if the VM on the brain matches the current app version
     * @param crc the crc of the bundled VM file
     * @param version the version of the bundled VM file
     * @returns data structure to indicate if the VM already exists and if it is the same as the bundled version.
     */
  }, {
    key: "checkPythonVm",
    value: (function () {
      var _checkPythonVm = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(crc, version) {
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              return _context16.abrupt("return", new Promise(/*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(resolve, reject) {
                  var metadata;
                  return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                    while (1) switch (_context15.prev = _context15.next) {
                      case 0:
                        _context15.prev = 0;
                        _context15.next = 3;
                        return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEGetFileMetadata("python_vm.bin", 0x40);
                      case 3:
                        metadata = _context15.sent;
                        log.debug("metadata:", metadata);
                        if (metadata === undefined) {
                          // no VM
                          log.debug("found no VM");
                          resolve({
                            exists: false,
                            valid: false
                          });
                        } else {
                          log.debug("Python VM metadata: ", JSON.stringify(metadata, null, 2));
                          if (metadata.fileCRC === crc && metadata.version === version) {
                            // Valid VM
                            log.debug("found valid VM");
                            resolve({
                              exists: true,
                              valid: true
                            });
                          } else {
                            // invalid VM
                            log.debug("found invalid VM");
                            resolve({
                              exists: true,
                              valid: false
                            });
                          }
                        }
                        _context15.next = 12;
                        break;
                      case 8:
                        _context15.prev = 8;
                        _context15.t0 = _context15["catch"](0);
                        log.warn("error on checking VM or the file does not exist", _context15.t0);
                        resolve({
                          exists: false,
                          valid: false
                        });
                      case 12:
                      case "end":
                        return _context15.stop();
                    }
                  }, _callee15, null, [[0, 8]]);
                }));
                return function (_x29, _x30) {
                  return _ref3.apply(this, arguments);
                };
              }()));
            case 1:
            case "end":
              return _context16.stop();
          }
        }, _callee16);
      }));
      function checkPythonVm(_x27, _x28) {
        return _checkPythonVm.apply(this, arguments);
      }
      return checkPythonVm;
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
    )
  }, {
    key: "DownloadProjectFiles",
    value: (function () {
      var _DownloadProjectFiles = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(basename, binData, iniData, prjData, extType, loadAddress, linkFileVID, linkFileName, downloadTarget, fileVID, progressCallback) {
        var re, name, binFilename, iniFilename, prjFilename, binLength, iniLength, prjLength, totalBytes, totalDone;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              if (binData) {
                _context17.next = 3;
                break;
              }
              log.warn("binData is mandatory for project download...");
              return _context17.abrupt("return", false);
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
              _context17.next = 18;
              return this.DownloadFile(iniData, name, "ini", function (iniPercent) {
                log.debug("ini download is ".concat(iniPercent, "% done"));
                var percent = (iniPercent * iniLength + totalDone) / totalBytes;
                log.debug("total download is ".concat(percent, "% done"));
                progressCallback(percent);
              });
            case 18:
              if (_context17.sent) {
                _context17.next = 21;
                break;
              }
              log.warn("failed to download project's ini file");
              return _context17.abrupt("return", false);
            case 21:
              totalDone += iniLength;
              if (!prjData) {
                _context17.next = 30;
                break;
              }
              log.info("download prj file", prjFilename);
              _context17.next = 26;
              return this.DownloadFile(prjData, name, "prj", function (prjPercent) {
                log.debug("prj download is ".concat(prjPercent, "% done"));
                var percent = (prjPercent * prjLength + totalDone) / totalBytes;
                log.debug("total download is ".concat(percent, "% done"));
                progressCallback(percent);
              });
            case 26:
              if (_context17.sent) {
                _context17.next = 29;
                break;
              }
              log.warn("failed to download project's src file");
              return _context17.abrupt("return", false);
            case 29:
              totalDone += prjLength;
            case 30:
              log.info("download bin file", binFilename);
              _context17.next = 33;
              return this.DownloadFileRaw(binData, name, "bin", extType, loadAddress, linkFileVID, linkFileName, downloadTarget, fileVID, 1, function (binPercent) {
                log.debug("bin download is ".concat(binPercent, "% done"));
                var percent = (binPercent * binLength + totalDone) / totalBytes;
                log.debug("total download is ".concat(percent, "% done"));
                progressCallback(percent);
              });
            case 33:
              if (_context17.sent) {
                _context17.next = 36;
                break;
              }
              log.warn("failed to download project's bin file");
              return _context17.abrupt("return", false);
            case 36:
              return _context17.abrupt("return", true);
            case 37:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this);
      }));
      function DownloadProjectFiles(_x31, _x32, _x33, _x34, _x35, _x36, _x37, _x38, _x39, _x40, _x41) {
        return _DownloadProjectFiles.apply(this, arguments);
      }
      return DownloadProjectFiles;
    }())
  }, {
    key: "DownloadFile",
    value: function () {
      var _DownloadFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(binData, name, ext, progressUpdate) {
        var _this6 = this;
        var callbackWrapper, prom;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              callbackWrapper = function callbackWrapper(prog) {
                progressUpdate(prog.progress);
              };
              _context18.next = 3;
              return new Promise(function (resolve, reject) {
                _this6.onBLEDownloadProgressEvent.registerCallback(callbackWrapper);

                // native interface takes base 64 encoded string...
                var encoded = btoa((0,_helpers__WEBPACK_IMPORTED_MODULE_5__.arrayBufferToString)(binData));
                _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEDownloadFile(encoded, name, ext).then(function (v) {
                  resolve(v);
                  _this6.onBLEDownloadProgressEvent.unregisterCallback(callbackWrapper);
                })["catch"](function () {
                  reject("error downloading file");
                  _this6.onBLEDownloadProgressEvent.unregisterCallback(callbackWrapper);
                });
              })["catch"](function (err) {
                throw new Error(err);
              });
            case 3:
              prom = _context18.sent;
              return _context18.abrupt("return", prom);
            case 5:
            case "end":
              return _context18.stop();
          }
        }, _callee18);
      }));
      function DownloadFile(_x42, _x43, _x44, _x45) {
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
      var _DownloadFileRaw = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(binData, name, ext, extType, loadAddress, linkFileVID, linkFileName, downloadTarget, fileVID, version, progressUpdate) {
        var _this7 = this;
        var callbackWrapper, promise;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              callbackWrapper = function callbackWrapper(prog) {
                progressUpdate(prog.progress);
              };
              _context19.next = 3;
              return new Promise(function (resolve, reject) {
                _this7.onBLEDownloadProgressEvent.registerCallback(callbackWrapper);

                // native interface takes base 64 encoded string...
                var encoded = btoa((0,_helpers__WEBPACK_IMPORTED_MODULE_5__.arrayBufferToString)(binData));
                _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEDownloadFileRaw(encoded, name, ext, extType, loadAddress, linkFileVID, linkFileName, downloadTarget, fileVID, version).then(function (v) {
                  resolve(v);
                  _this7.onBLEDownloadProgressEvent.unregisterCallback(callbackWrapper);
                })["catch"](function () {
                  reject("error downloading file");
                  _this7.onBLEDownloadProgressEvent.unregisterCallback(callbackWrapper);
                });
              })["catch"](function (err) {
                throw new Error(err);
              });
            case 3:
              promise = _context19.sent;
              return _context19.abrupt("return", promise);
            case 5:
            case "end":
              return _context19.stop();
          }
        }, _callee19);
      }));
      function DownloadFileRaw(_x46, _x47, _x48, _x49, _x50, _x51, _x52, _x53, _x54, _x55, _x56) {
        return _DownloadFileRaw.apply(this, arguments);
      }
      return DownloadFileRaw;
    }())
  }, {
    key: "forcePythonVMDownload",
    value: function () {
      var _forcePythonVMDownload = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(progressCallback) {
        var vmDataString, vmArrayBuffer, VMresult;
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              log.debug("forcePythonVMDownload");
              if (this.appTargetIsIQ2) {
                _context20.next = 4;
                break;
              }
              log.warn("trying to download Python VM to IQ 1st Gen Brain");
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 4:
              _context20.t0 = atob;
              _context20.next = 7;
              return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEReadVMFile("iq2");
            case 7:
              _context20.t1 = _context20.sent;
              vmDataString = (0, _context20.t0)(_context20.t1);
              vmArrayBuffer = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.stringToArrayBuffer)(vmDataString);
              _context20.next = 12;
              return this.DownloadFileRaw(vmArrayBuffer, "python_vm", "bin", _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_16__.VEXosExtType.VEXVM, 0x10300000, _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_16__.VEXosVID.NONE, undefined, _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_16__.VEXosDownloadTarget.FILE_TARGET_FLASH, _types_HWTabletEnums__WEBPACK_IMPORTED_MODULE_16__.VEXosVID.FF, 1, function (percent) {
                progressCallback({
                  progress: percent,
                  step: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DownloadState.DownloadingVM
                });
              });
            case 12:
              VMresult = _context20.sent;
              if (!VMresult) {
                log.warn("failed to download the Python VM");
              }
              return _context20.abrupt("return", VMresult);
            case 15:
            case "end":
              return _context20.stop();
          }
        }, _callee20, this);
      }));
      function forcePythonVMDownload(_x57) {
        return _forcePythonVMDownload.apply(this, arguments);
      }
      return forcePythonVMDownload;
    }() //#endregion project downloads
    //#region compilers
    //#endregion compilers
    //#region firmware
  }, {
    key: "checkDeviceFirmware",
    value: function () {
      var _checkDeviceFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(device) {
        var currentVersion, robotVersion, updateNeeded;
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              log.info("checkDeviceFirmware");
              if (!(device.robotNeedsFirmwareUpdate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure)) {
                _context21.next = 9;
                break;
              }
              // we only need to check the versions if it has not been checked before
              log.debug("checking the version of the robot");
              // check the version on the server against the version on the brain
              _context21.next = 5;
              return this.getCurrentFirmware();
            case 5:
              currentVersion = _context21.sent;
              robotVersion = device.robotFirmwareVersion || _VexVersion__WEBPACK_IMPORTED_MODULE_4__.VexVersion.fromString("0.0.0");
              updateNeeded = robotVersion.compare(currentVersion) < 0; // set the flag to indicate if the robot needs an update
              device.robotNeedsFirmwareUpdate = updateNeeded ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.NeedsUpdate : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.UpToDate;
            case 9:
              // not exactly sure why this is needed. it is part of AIM, so there should be a reason...
              this.triggerBLEConnectionStateChange();
            case 10:
            case "end":
              return _context21.stop();
          }
        }, _callee21, this);
      }));
      function checkDeviceFirmware(_x58) {
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
      var _openConnectionUserPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(connectionType) {
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 1:
            case "end":
              return _context22.stop();
          }
        }, _callee22);
      }));
      function openConnectionUserPort(_x59) {
        return _openConnectionUserPort.apply(this, arguments);
      }
      return openConnectionUserPort;
    }()
  }, {
    key: "closeConnectionUserPort",
    value: function () {
      var _closeConnectionUserPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(connectionType) {
        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) switch (_context23.prev = _context23.next) {
            case 0:
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 1:
            case "end":
              return _context23.stop();
          }
        }, _callee23);
      }));
      function closeConnectionUserPort(_x60) {
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
      var _sendDataUserPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24(data) {
        var result;
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              log.warn("sendDataUserPort:", data);
              if (isTablet) {
                _context24.next = 3;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 3:
              if (this.BLEIsConnected) {
                _context24.next = 5;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
            case 5:
              _context24.next = 7;
              return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLESendUserMessage(data);
            case 7:
              result = _context24.sent;
              if (result) {
                log.debug("sendDataUserPort result:", result);
              } else {
                log.warn("sendDataUserPort failed");
              }
            case 9:
            case "end":
              return _context24.stop();
          }
        }, _callee24, this);
      }));
      function sendDataUserPort(_x61) {
        return _sendDataUserPort.apply(this, arguments);
      }
      return sendDataUserPort;
    }() //#endregion User Port comms
    //#region events
  }, {
    key: "triggerBLEConnectionStateChange",
    value: function triggerBLEConnectionStateChange() {
      var newState = this.connectionState;
      var didChangeState = this.lastBLEConnectionState !== newState;
      _superPropGet(IQNativeBLE, "triggerBLEConnectionStateChange", this, 3)([]);
      if (didChangeState) {
        this.triggerConnectionUpdateUserPort();
        if (newState === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected) {
          this.triggerRobotInfoUpdate();
        } else if (newState === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connecting) {
          // What do we need to do here?
          log.debug("new state is connecting");
        } else {
          this.triggerRobotInfoUpdate();
        }
      }
    }

    /**
     * Displays a modal that two connections were detected on an IQ brain
     * Only currently used by iOS
     */
  }, {
    key: "onIQBLEUSBConnectedError",
    value: function onIQBLEUSBConnectedError() {
      log.error("Dual BLE + USB connection detected");
      _widget_Modal__WEBPACK_IMPORTED_MODULE_10__.MODALCONTROL.alert(_i18n_i18n__WEBPACK_IMPORTED_MODULE_11__.i18n.t("Dual Connection Error"));
    }

    /**
     * Called by the native Swift/Java code when an IQ brain connects
     * @param name name of the connected brain
     * @param serial serial number of the connected brain
     * @param vexos vexos version of the connected brain
     */
  }, {
    key: "onBLEDeviceConnect",
    value: (function () {
      var _onBLEDeviceConnect = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25(name, serial, vexos) {
        var versionArray, version;
        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
          while (1) switch (_context25.prev = _context25.next) {
            case 0:
              log.info("onBLEDeviceConnected - name:", name, "serial:", serial);
              vexos = vexos.replace("B", "");
              versionArray = vexos.split(".").map(function (v) {
                return parseInt(v, 10);
              });
              version = _construct(_VexVersion__WEBPACK_IMPORTED_MODULE_4__.VexVersion, _toConsumableArray(versionArray));
              this.BLEIsConnected = true;
              this.connectedDevice = {
                serial: serial,
                robotFirmwareVersion: version,
                robotBootloaderVersion: undefined,
                name: name,
                deviceType: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceType.VEXIQ,
                connectionMethod: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE,
                brainConnected: true,
                robotNeedsFirmwareUpdate: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure,
                robotNeedsBootloaderUpdate: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure,
                canUpdate: false
              };

              // Checks the firmware version of the connected device against the actual latest
              // and then updates the 'needsFWUpdate' entry
              _context25.next = 8;
              return this.checkDeviceFirmware(this.connectedDevice);
            case 8:
              this.triggerBLEConnectionStateChange();
            case 9:
            case "end":
              return _context25.stop();
          }
        }, _callee25, this);
      }));
      function onBLEDeviceConnect(_x62, _x63, _x64) {
        return _onBLEDeviceConnect.apply(this, arguments);
      }
      return onBLEDeviceConnect;
    }()
    /**
     * Called by the native Swift/Java code when an IQ brain disconnects
     */
    )
  }, {
    key: "onBLEDeviceDisconnect",
    value: function onBLEDeviceDisconnect() {
      log.info("onBLEDeviceDisconnect");
      this.BLEIsConnected = false;
      this.connectedDevice = null;
      this.triggerBLEConnectionStateChange();
    }
  }, {
    key: "onBLEAdvertisingError",
    value:
    /**
     * Triggers a modal to display advertising errors on an IQ brain
     * Only currently used by Android
     * @param errorCode the error code detected
     * @param supportsMultipleAdvertising whether multiple advertisements are supported
     */
    function onBLEAdvertisingError(errorCode, supportsMultipleAdvertising) {
      this.onBLEAdvertisingErrorEvent.fire({
        errorCode: errorCode,
        supportsMultipleAdvertising: supportsMultipleAdvertising
      });
    }
  }, {
    key: "onBLEDownloadProgressUpdate",
    value: function onBLEDownloadProgressUpdate(progress, retry, limit, quality) {
      this.onBLEDownloadProgressEvent.fire({
        progress: progress,
        retry: retry,
        limit: limit,
        quality: quality
      });
    }
  }, {
    key: "onVEXBLEDeviceDiscovered",
    value: function () {
      var _onVEXBLEDeviceDiscovered = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(name, vexos, serial, product, rssi) {
        var tmpVersion, tmpDev, alreadyFound, i;
        return _regeneratorRuntime().wrap(function _callee26$(_context26) {
          while (1) switch (_context26.prev = _context26.next) {
            case 0:
              log.info("onVEXBLEDeviceDiscovered", name, vexos, serial, product, rssi);
              if (!(this.targetBrain && this.targetBrain.serial === serial)) {
                _context26.next = 3;
                break;
              }
              return _context26.abrupt("return");
            case 3:
              if (!(this.connectedDevice && this.connectedDevice.serial === serial)) {
                _context26.next = 5;
                break;
              }
              return _context26.abrupt("return");
            case 5:
              tmpVersion = _VexVersion__WEBPACK_IMPORTED_MODULE_4__.VexVersion.fromString(vexos);
              tmpDev = {
                serial: serial,
                robotFirmwareVersion: tmpVersion,
                robotBootloaderVersion: undefined,
                name: name,
                deviceType: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceType.VEXIQ2,
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
                _context26.next = 17;
                break;
              }
              if (!(this.discoveredDevices[i].serial === serial)) {
                _context26.next = 14;
                break;
              }
              alreadyFound = true;
              this.discoveredDevices[i] = tmpDev;
              return _context26.abrupt("break", 17);
            case 14:
              i++;
              _context26.next = 9;
              break;
            case 17:
              if (!alreadyFound) {
                this.discoveredDevices.push(tmpDev);
              }
              _context26.next = 20;
              return this.checkDeviceFirmware(tmpDev);
            case 20:
              log.debug("current device list:", this.discoveredDevices);
              _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_8__.fireEvent("HWInterface.DeviceListUpdate", this.discoveredDevices);
            case 22:
            case "end":
              return _context26.stop();
          }
        }, _callee26, this);
      }));
      function onVEXBLEDeviceDiscovered(_x65, _x66, _x67, _x68, _x69) {
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
      var _onVEXBLEDeviceConnect = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27(name, serial, vexos, locked, mode, cpu0Version, cpu1Version) {
        var versionObject, isBootloadMode, robotFirmware, robotBootloader;
        return _regeneratorRuntime().wrap(function _callee27$(_context27) {
          while (1) switch (_context27.prev = _context27.next) {
            case 0:
              log.info("onVEXBLEDeviceConnect - name:", name, "serial:", serial, "vexos:", vexos, "locked:", locked, "mode:", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode[mode], "cpu0Version:", cpu0Version, "cpu1Version:", cpu1Version);
              // figure out the version number based on the string and the mode
              versionObject = _VexVersion__WEBPACK_IMPORTED_MODULE_4__.VexVersion.fromString(vexos);
              isBootloadMode = mode === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode.DFU;
              robotFirmware = isBootloadMode ? undefined : versionObject;
              robotBootloader = isBootloadMode ? versionObject : undefined;
              this.connectedDevice = {
                serial: serial,
                robotFirmwareVersion: robotFirmware,
                robotBootloaderVersion: robotBootloader,
                name: name,
                deviceType: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceType.VEXIQ2,
                connectionMethod: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE,
                brainConnected: true,
                robotNeedsFirmwareUpdate: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure,
                robotNeedsBootloaderUpdate: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure,
                canUpdate: false,
                battery: -1,
                isLocked: locked
              };
              if (!locked) {
                _context27.next = 10;
                break;
              }
              log.debug("brain is locked. need to implement a unlock code dialog...");
              _context27.next = 16;
              break;
            case 10:
              this.BLEIsConnected = true;
              _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_8__.fireEvent("HWInterface.BrainInfoUpdated", this.connectedDevice);
              _context27.next = 14;
              return this.checkDeviceFirmware(this.connectedDevice);
            case 14:
              this.triggerBLEConnectionStateChange();
              // add another for the lock state change...
              _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_8__.fireEvent("HWInterface.ConnectionStateChange", this.connectionState);
            case 16:
            case "end":
              return _context27.stop();
          }
        }, _callee27, this);
      }));
      function onVEXBLEDeviceConnect(_x70, _x71, _x72, _x73, _x74, _x75, _x76) {
        return _onVEXBLEDeviceConnect.apply(this, arguments);
      }
      return onVEXBLEDeviceConnect;
    }()
  }, {
    key: "onVEXBLEDeviceDisconnect",
    value: function onVEXBLEDeviceDisconnect() {
      log.debug("onVEXBLEDeviceDisconnected");
      this.BLEIsConnected = false;
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
      this.BLEIsConnected = true;
      this.BLEIsConnecting = false;
      log.info("connected device null???", this.connectedDevice);
      this.connectedDevice.isLocked = false;
      this.triggerRobotInfoUpdate();
      this.triggerConnectionStateChange();
    }
  }, {
    key: "onVEXBLEDownloadProgressUpdate",
    value: function onVEXBLEDownloadProgressUpdate(progress, retry, limit, quality) {
      this.onBLEDownloadProgressEvent.fire({
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
    //#endregion events

    //#region webble lock code
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
      var _displayLockCodePrompt = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee29(deviceID) {
        var _this8 = this;
        var recentBrain, brainKey, currKey;
        return _regeneratorRuntime().wrap(function _callee29$(_context29) {
          while (1) switch (_context29.prev = _context29.next) {
            case 0:
              log.info("displaying prompt for brain lock code");
              recentBrain = _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_18__.storageInterface.readKey(_brainInfoStore__WEBPACK_IMPORTED_MODULE_13__.brainRecentKey);
              if (recentBrain && recentBrain !== deviceID.toString()) {
                log.info("displayLockCodePrompt - clearing key for previous robot as it does not match the connection target");
                _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_18__.storageInterface.clearKey(BRAIN_LOCK_KEY + recentBrain);
              }

              // get the previous lock code if it exists so that we can try to skip the prompt
              brainKey = BRAIN_LOCK_KEY + deviceID;
              currKey = _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_18__.storageInterface.readKey(brainKey);
              log.info("displayLockCodePrompt - target:", this.getTargetRobotInfo());
              log.info("displayLockCodePrompt - brain key: ", brainKey);
              log.info("displayLockCodePrompt - current key: " + currKey);
              if (currKey) {
                _context29.next = 14;
                break;
              }
              _context29.next = 11;
              return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEShowLockCode(true);
            case 11:
              _widget_Modal__WEBPACK_IMPORTED_MODULE_10__.MODALCONTROL.showBrainLockCodePrompt(this.lockCodeValidator, /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28(result) {
                  return _regeneratorRuntime().wrap(function _callee28$(_context28) {
                    while (1) switch (_context28.prev = _context28.next) {
                      case 0:
                        log.info("displayLockCodePrompt - result:", result);
                        if (!result) {
                          _context28.next = 13;
                          break;
                        }
                        _context28.next = 4;
                        return _this8.unlockBrain(result);
                      case 4:
                        if (!_context28.sent) {
                          _context28.next = 9;
                          break;
                        }
                        log.info("displayLockCodePrompt - robot unlocked with user input code");
                        // await NI.vexBLEShowLockCode(false);
                        _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_18__.storageInterface.writeKey(brainKey, result);
                        _context28.next = 11;
                        break;
                      case 9:
                        log.info("displayLockCodePrompt - robot not unlocked with user input code. asking again");
                        _this8.displayLockCodePrompt(deviceID);
                      case 11:
                        _context28.next = 16;
                        break;
                      case 13:
                        _context28.next = 15;
                        return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEShowLockCode(false);
                      case 15:
                        _this8.closeConnection(_types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE);
                      case 16:
                      case "end":
                        return _context28.stop();
                    }
                  }, _callee28);
                }));
                return function (_x78) {
                  return _ref4.apply(this, arguments);
                };
              }());
              _context29.next = 26;
              break;
            case 14:
              log.info("displayLockCodePrompt - key found and sending that automatically");
              // IQ needs to have the code displayed before it can accept the actual code?
              _context29.next = 17;
              return _nativeInterface__WEBPACK_IMPORTED_MODULE_7__.vexBLEShowLockCode(true);
            case 17:
              _context29.next = 19;
              return this.unlockBrain(currKey);
            case 19:
              if (!_context29.sent) {
                _context29.next = 23;
                break;
              }
              log.info("displayLockCodePrompt - robot unlocked with saved code");
              _context29.next = 26;
              break;
            case 23:
              log.info("displayLockCodePrompt - saved key did not unlock robot");
              _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_18__.storageInterface.clearKey(brainKey);
              this.displayLockCodePrompt(deviceID);
            case 26:
            case "end":
              return _context29.stop();
          }
        }, _callee29, this);
      }));
      function displayLockCodePrompt(_x77) {
        return _displayLockCodePrompt.apply(this, arguments);
      }
      return displayLockCodePrompt;
    }() //#endregion webble lock code
    //#region low-level logger
    )
  }, {
    key: "getLowLevelLogger",
    value: function getLowLevelLogger() {
      return null;
    }
    //#endregion low-level logger
  }]);
}(_IQInterface__WEBPACK_IMPORTED_MODULE_3__.IQInterface);


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
//# sourceMappingURL=ab97a4b7dd982c56241e.src_HardwareInterface_DownloadPlatform_IQ_IQNativeBLE_ts.bundle.js.map