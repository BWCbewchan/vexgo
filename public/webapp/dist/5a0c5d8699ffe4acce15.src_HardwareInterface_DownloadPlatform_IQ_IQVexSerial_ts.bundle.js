"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_HardwareInterface_DownloadPlatform_IQ_IQVexSerial_ts"],{

/***/ "./src/HardwareInterface/DownloadPlatform/IQ/IQVexSerial.ts":
/*!******************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/IQ/IQVexSerial.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IQVexSerial: () => (/* binding */ IQVexSerial)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/HWEnums */ "./src/HardwareInterface/types/HWEnums.ts");
/* harmony import */ var _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types/HWErrors */ "./src/HardwareInterface/types/HWErrors.ts");
/* harmony import */ var _IQInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IQInterface */ "./src/HardwareInterface/DownloadPlatform/IQ/IQInterface.ts");
/* harmony import */ var _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../VexSerialDevices */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/index.ts");
/* harmony import */ var _VexVersion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../VexVersion */ "./src/HardwareInterface/VexVersion.ts");
/* harmony import */ var _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../GlobalEventSystem */ "./src/GlobalEventSystem.ts");
/* harmony import */ var _widget_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../widget/Modal */ "./src/widget/Modal.tsx");
/* harmony import */ var _AppInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../AppInfo */ "./src/AppInfo.ts");
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../i18n/i18n */ "./src/i18n/i18n.ts");
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../dispatcher */ "./src/dispatcher.ts");
/* harmony import */ var _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../VexSerialDevices/errors */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/errors.ts");
/* harmony import */ var _targetPlatform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../targetPlatform */ "./src/targetPlatform.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../helpers */ "./src/helpers.ts");
/* harmony import */ var _platformInfo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../platformInfo */ "./src/platformInfo.ts");
/* harmony import */ var _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @vexcode/vex-ble-device-manager */ "./node_modules/@vexcode/vex-ble-device-manager/dist_lib/src/index.js");
/* harmony import */ var _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../StorageInterface/VEXcodeLocalStorage */ "./src/StorageInterface/VEXcodeLocalStorage.ts");
/* harmony import */ var _brainInfoStore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../brainInfoStore */ "./src/brainInfoStore.ts");
/* harmony import */ var _vexcode_python_vm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @vexcode/python-vm */ "./node_modules/@vexcode/python-vm/dist/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("IQVexSerial");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();
log.setHistoryLogger("HWInterface");

// tslint:disable: member-ordering

// interface types/enums



// TODO: cleanup imports














// BLE imports





var BRAIN_LOCK_KEY = "BLE_LOCK_KEY";
var IQVexSerial = /*#__PURE__*/function (_IQInterface) {
  //#endregion BLE connection properties

  function IQVexSerial() {
    var _this;
    _classCallCheck(this, IQVexSerial);
    _this = _callSuper(this, IQVexSerial);
    // tslint:disable-next-line: variable-name
    _defineProperty(_this, "_serial", new _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VexSerialDeviceIQ());
    //#region BLE connection properties
    //#region "state flags"
    _defineProperty(_this, "BLEConnected", false);
    _defineProperty(_this, "BLEConnecting", false);
    _defineProperty(_this, "BLEScanning", false);
    _defineProperty(_this, "BLECheckingDeviceFirmware", false);
    _defineProperty(_this, "BLEGettingBootloader", false);
    _defineProperty(_this, "BLELocatingDevice", false);
    //#endregion
    //#region "internal event callbacks"
    _defineProperty(_this, "FWUpdateProgressCB", null);
    _defineProperty(_this, "resolveFWUpdatePromise", null);
    _defineProperty(_this, "BLUpdateProgressCB", null);
    _defineProperty(_this, "resolveBLUpdatePromise", null);
    _defineProperty(_this, "BLEConnectionResolver", null);
    _defineProperty(_this, "BLEDisconnectionResolver", null);
    //#endregion
    _defineProperty(_this, "BLEDiscoveredDevices", []);
    _defineProperty(_this, "BLEConnectionTargetDevice", null);
    _defineProperty(_this, "BLETargetDevice", null);
    _defineProperty(_this, "BLEExpectDisconnect", false);
    _defineProperty(_this, "_electronBluetoothProxy", undefined);
    //#endregion interface information
    _defineProperty(_this, "lastSerialState", _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VexSerialDeviceConnectionStates.Disconnected);
    _defineProperty(_this, "onConnectedToInvalidPort", function () {
      var message = _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t("Incorrect WebSerial Port", {
        platform: _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t("IQ")
      });
      _widget_Modal__WEBPACK_IMPORTED_MODULE_7__.MODALCONTROL.showWebSerialPrompt(message, null, _this.onControlButtonClick);
    });
    _defineProperty(_this, "lastUserPortState", _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VexSerialDeviceConnectionStates.Disconnected);
    //#endregion native -> webapp events
    //#region webBLE event wrappers
    _defineProperty(_this, "firstUpdateAfterConnect", false);
    _defineProperty(_this, "alreadyConnected", false);
    _this.onSerialStateChange = _this.onSerialStateChange.bind(_this);
    _this._serial.on("connectionStateChange", _this.onSerialStateChange);
    _this.onSerialStateChangeUserPort = _this.onSerialStateChangeUserPort.bind(_this);
    _this._serial.on("connectionStateChangeUserPort", _this.onSerialStateChangeUserPort);
    _this.onConnectedToInvalidPort = _this.onConnectedToInvalidPort.bind(_this);
    _this._serial.on("connectedToInvalidPort", _this.onConnectedToInvalidPort);
    _this.onControlButtonClick = _this.onControlButtonClick.bind(_this);
    _this.onInterfaceDeviceInfoUpdated = _this.onInterfaceDeviceInfoUpdated.bind(_this);
    _this._serial.on("deviceInfoUpdated", _this.onInterfaceDeviceInfoUpdated);
    _this._serial.on("receivedUserData", function (data) {
      log.debug("print to terminal:", data);
      _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_6__.fireEvent("HWInterface.TerminalDataUpdate", data);
    });
    _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.init("IQ2");
    log.debug("webble initialized");
    log.debug("setting up event listeners");
    _this.onWebBLEDeviceInfo = _this.onWebBLEDeviceInfo.bind(_this);
    _this.onWebBLEConnectionStateChange = _this.onWebBLEConnectionStateChange.bind(_this);
    _this.onRequestLockCode = _this.onRequestLockCode.bind(_this);
    var events = _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.VEXBLEChromeEvents;
    events.on("VEXBLEBrowser.ConnectionState", _this.onWebBLEConnectionStateChange);
    events.on("VEXBLEBrowser.DeviceInfo", _this.onWebBLEDeviceInfo);
    events.on("VEXBLEBrowser.EnterLockCode", _this.onRequestLockCode);
    events.on("VEXBLEBrowser.RXDataUser", function (data) {
      if (_this.connectionStateUserPortUSB !== _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected) {
        log.debug("print to terminal USB:", data);
        _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_6__.fireEvent("HWInterface.TerminalDataUpdate", data);
      } else {
        log.debug("using USB RX");
      }
    });
    if (_platformInfo__WEBPACK_IMPORTED_MODULE_14__.PlatformIsElectron) {
      // we only want to create the electron proxy when running in electron, so
      // we have this code to only import and create the proxy when in electron.
      log.info("loading electron bluetooth proxy");
      __webpack_require__.e(/*! import() */ "src_HardwareInterface_GO123_VexBluetoothElectronProxy_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../GO123/VexBluetoothElectronProxy */ "./src/HardwareInterface/GO123/VexBluetoothElectronProxy.ts")).then(function (importResult) {
        log.info("creating electron bluetooth proxy");
        _this._electronBluetoothProxy = new importResult.VexBluetoothElectron();
        log.info("created electron bluetooth proxy");
      });
    }
    return _this;
  }
  _inherits(IQVexSerial, _IQInterface);
  return _createClass(IQVexSerial, [{
    key: "electronBluetoothProxy",
    get: function get() {
      return this._electronBluetoothProxy;
    }
  }, {
    key: "webble",
    get: function get() {
      return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__;
    }
  }, {
    key: "handleGATTError",
    value: function handleGATTError() {
      log.info("handling GATT error");
      this.closeConnection(_types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE);
      // TODO: display message to the user
      _widget_Modal__WEBPACK_IMPORTED_MODULE_7__.MODALCONTROL.alert(_i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t("GATT Error - connection closed", {
        platform: _targetPlatform__WEBPACK_IMPORTED_MODULE_12__.currentTargetName
      }));
    }

    //#region interface information
    // These are all properties that are used by the UI to know what is supported
  }, {
    key: "supportsUSBConnection",
    get: function get() {
      return true;
    }
  }, {
    key: "supportsBLEConnection",
    get: function get() {
      return true;
    }
  }, {
    key: "supportsAutomaticUSBConnection",
    get: function get() {
      return !!_platformInfo__WEBPACK_IMPORTED_MODULE_14__.PlatformIsElectron;
    }
  }, {
    key: "supportsAutomaticUSBConnectionUserPort",
    get: function get() {
      return !!_platformInfo__WEBPACK_IMPORTED_MODULE_14__.PlatformIsElectron;
    }
  }, {
    key: "supportsScreenCapture",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsControllerConnections",
    get: function get() {
      return this.targetIsIQ2;
    }
  }, {
    key: "supportsFirmwareUpdateRobot",
    get: function get() {
      return this.targetIsIQ2 && this.isUSBConnected;
    }
  }, {
    key: "supportsFirmwareUpdateController",
    get: function get() {
      return true;
    }
  }, {
    key: "supportsEditableBrainName",
    get: function get() {
      return this.targetIsIQ2;
    }
  }, {
    key: "onSerialStateChange",
    value: function onSerialStateChange(state) {
      log.debug("onSerialStateChange - new state:", _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VexSerialDeviceConnectionStates[state]);
      if (this.lastSerialState === state) {
        log.debug("last serial state matches state, exit");
        return;
      }
      this.lastSerialState = state;
      log.debug("setting lastSerialState to", state);
      var newState = this.connectionStateUSB;
      log.debug("new USB connection state:", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState[newState]);
      if (newState === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected && this.isBLEConnected) {
        log.info("USB connected. closing existing BLE connection");
        this.closeConnection(_types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE);
      }
      this.triggerUSBConnectionStateChange();
    }
  }, {
    key: "onInterfaceDeviceInfoUpdated",
    value: function onInterfaceDeviceInfoUpdated(data) {
      log.debug("onInterfaceDeviceInfoUpdated");
      var newBrainInfo = this.getRobotInfo();
      _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_6__.fireEvent("HWInterface.BrainInfoUpdated", newBrainInfo);
    }
  }, {
    key: "onControlButtonClick",
    value: function () {
      var _onControlButtonClick = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.openConnection();
            case 2:
              return _context.abrupt("return", _context.sent);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function onControlButtonClick() {
        return _onControlButtonClick.apply(this, arguments);
      }
      return onControlButtonClick;
    }() //#region connection control
  }, {
    key: "openConnection",
    value: function () {
      var _openConnection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(connectionType) {
        var message;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              log.debug("openConnection called with connectionType:", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod[connectionType]);
              if (!(connectionType === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE)) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return", _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.scanAndConnect().then(function () {
                return;
              })["catch"](function (err) {
                log.error(err);
                throw new Error("error starting scan");
              }));
            case 5:
              if (!(connectionType === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.USB || connectionType === undefined)) {
                _context2.next = 19;
                break;
              }
              if (this._serial.isSupported) {
                _context2.next = 9;
                break;
              }
              log.error("WebSerial is not supported on this system");
              return _context2.abrupt("return");
            case 9:
              _context2.prev = 9;
              log.debug("Attempting to open serial port connection");
              _context2.next = 13;
              return this._serial.openConnection();
            case 13:
              _context2.next = 19;
              break;
            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](9);
              log.debug("Error attempting to open serial port connection: ", _context2.t0);
              // Error when a robot opens a port connection to a robot that is already connected through another VEX application
              if (_context2.t0 instanceof Error && _context2.t0.name === "NetworkError" && _context2.t0.message.includes("Failed to open serial port.")) {
                message = _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t("Already Connected WebSerial Port", {
                  platform: _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t("IQ")
                });
                _widget_Modal__WEBPACK_IMPORTED_MODULE_7__.MODALCONTROL.alert(message);
              }
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[9, 15]]);
      }));
      function openConnection(_x) {
        return _openConnection.apply(this, arguments);
      }
      return openConnection;
    }()
  }, {
    key: "openEstablishedConnection",
    value: function () {
      var _openEstablishedConnection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(connectionType) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(connectionType === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE)) {
                _context3.next = 4;
                break;
              }
              return _context3.abrupt("return", _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.disconnect().then(function () {
                return true;
              })["catch"](function () {
                throw new Error("error stopping scan");
              }));
            case 4:
              if (!(connectionType === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.USB || connectionType === undefined)) {
                _context3.next = 13;
                break;
              }
              if (this._serial.isSupported) {
                _context3.next = 8;
                break;
              }
              log.error("WebSerial is not supported on this system");
              return _context3.abrupt("return");
            case 8:
              _context3.next = 10;
              return this._serial.closeConnection();
            case 10:
              return _context3.abrupt("return", true);
            case 13:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function openEstablishedConnection(_x2) {
        return _openEstablishedConnection.apply(this, arguments);
      }
      return openEstablishedConnection;
    }()
  }, {
    key: "openConnectionToRobot",
    value: function openConnectionToRobot(id) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "closeConnection",
    value: function () {
      var _closeConnection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(connectionType) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(connectionType === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE)) {
                _context4.next = 4;
                break;
              }
              return _context4.abrupt("return", _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.disconnect().then(function () {
                return true;
              })["catch"](function () {
                throw new Error("error stopping scan");
              }));
            case 4:
              if (!(connectionType === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.USB || connectionType === undefined)) {
                _context4.next = 13;
                break;
              }
              if (this._serial.isSupported) {
                _context4.next = 8;
                break;
              }
              log.error("WebSerial is not supported on this system");
              return _context4.abrupt("return");
            case 8:
              _context4.next = 10;
              return this._serial.closeConnection();
            case 10:
              return _context4.abrupt("return", true);
            case 13:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function closeConnection(_x3) {
        return _closeConnection.apply(this, arguments);
      }
      return closeConnection;
    }()
  }, {
    key: "unlockBrain",
    value: function unlockBrain(unlockCode) {
      var _this2 = this;
      log.debug("unlockBrain - unlockCode:", unlockCode);
      return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.SendLockCode(parseInt(unlockCode))["catch"](function (err) {
        if (err instanceof _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.ErrorGATT) {
          log.error("GATT error occurred while unlocking brain:", err);
          _this2.handleGATTError();
          return false;
        } else {
          throw err;
        }
      });
    }
    //#endregion connection control

    //#region connection status
  }, {
    key: "connectionStateUSB",
    get: function get() {
      var state = this._serial.connectionState;
      var isConnected = state === _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VexSerialDeviceConnectionStates.Connected;
      return isConnected ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected;
    }
  }, {
    key: "connectionStateBLE",
    get: function get() {
      // casting to any to avoid warning about type not overlapping when it
      // actually does... not ideal, but there is no reason to manually convert
      // it just to avoid a incorrect warning.
      return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.getConnectionState();
    }
  }, {
    key: "getRobotScanList",
    value: function getRobotScanList() {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "getTargetRobotInfo",
    value: function getTargetRobotInfo() {
      return this.BLETargetDevice;
    }
    //#endregion connection status

    //#region brain info
  }, {
    key: "getRobotInfoUSB",
    value: function getRobotInfoUSB() {
      var tmpInfo = this._serial.getRobotInfo();
      var version = tmpInfo.brainVersion ? _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString(tmpInfo.brainVersion.toInternalString()) : _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString("0.0.0");
      var isIQ1 = tmpInfo.deviceType === "IQ";
      var hasBrainVersion = version && version.toInternalString() !== "0.0.0.b0";
      var IQ1FWVersion = this.getCachedIQ1ServerFirmwareVersion();
      var needsFWUpdateIQ1 = this.getUpdatedNeededFromServer(IQ1FWVersion, version);
      var isIQ2 = tmpInfo.deviceType === "IQ2" || tmpInfo.deviceType === "IQ2Controller";
      var isController = tmpInfo.deviceType === "IQ2Controller";
      var deviceType = isIQ2 ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceType.VEXIQ2 : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceType.VEXIQ;
      var info = {
        serial: tmpInfo.serial,
        robotFirmwareVersion: version,
        name: tmpInfo.name,
        team: tmpInfo.team,
        deviceType: deviceType,
        connectionMethod: tmpInfo.connectionType,
        brainConnected: tmpInfo.isBrainConnected,
        robotNeedsFirmwareUpdate: hasBrainVersion ? isIQ1 ? needsFWUpdateIQ1 : tmpInfo.updateNeededBrain ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.NeedsUpdate : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.UpToDate : tmpInfo.isDFUMode ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.NeedsUpdate : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure,
        robotNeedsBootloaderUpdate: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure,
        canUpdate: isIQ2 ? true : false,
        battery: 0,
        batteryLow: false
      };
      if (isController) {
        info.controllerFirmwareVersion = {
          atmel: tmpInfo.atmelVersion,
          radio: tmpInfo.radioVersion
        };
        info.controllerNeedsFirmwareUpdate = tmpInfo.updateNeededController ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.NeedsUpdate : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.UpToDate;
      }
      return info;
    }

    /**
     * grabs the brain info from the USB connection. This will return empty information if not connected.
     * @returns the brain information for the BLE connection
     */
  }, {
    key: "getRobotInfoBLE",
    value: function getRobotInfoBLE() {
      if (this.BLETargetDevice) {
        var newBrainInfo = Object.assign({}, this.BLETargetDevice);

        // override the canUpdate value based on if we can actually update the firmware
        newBrainInfo.canUpdate = this.canUpdateFirmware();

        // if (this.currentFirmwareVersion) {
        //   const newFirmwareAvailable = this.currentFirmwareVersion.compare(newBrainInfo.version) > 0;
        //   newBrainInfo.needsFWUpdate = newFirmwareAvailable ? UpdateNeededOptions.NeedsUpdate : UpdateNeededOptions.UpToDate;
        // } else {
        //   newBrainInfo.needsFWUpdate = UpdateNeededOptions.Unsure;
        // }
        return newBrainInfo;
      }
    }
  }, {
    key: "getRobotInfo",
    value: function getRobotInfo() {
      var BLEBrainInfo = this.getRobotInfoBLE();
      if (this.isBLEConnected && BLEBrainInfo) {
        return BLEBrainInfo;
      } else {
        // the web serial still returns data if not connected that is valid, so just use this if not connected to BLE
        return this.getRobotInfoUSB();
      }
    }
  }, {
    key: "setBrainName",
    value: function () {
      var _setBrainName = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(name) {
        var _this3 = this;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              log.debug("setBrainName - acquiring semaphore");
              _context5.next = 4;
              return this.adminSemaphore.acquire();
            case 4:
              log.debug("setBrainName - acquired semaphore");

              // Update the name of the device through both USB and BLE to avoid issues with name caching. 
              if (!this.isUSBConnected) {
                _context5.next = 8;
                break;
              }
              _context5.next = 8;
              return this._serial.setBrainName(name);
            case 8:
              if (!this.isBLEConnected) {
                _context5.next = 11;
                break;
              }
              _context5.next = 11;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.setRobotName(name)["catch"](function (err) {
                if (err instanceof _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.ErrorGATT) {
                  log.error("GATT error occurred while setting brain name:", err);
                  _this3.handleGATTError();
                } else {
                  throw err;
                }
              });
            case 11:
              _context5.next = 16;
              break;
            case 13:
              _context5.prev = 13;
              _context5.t0 = _context5["catch"](0);
              throw _context5.t0;
            case 16:
              _context5.prev = 16;
              log.debug("setBrainName - release semaphore");
              this.adminSemaphore.release();
              return _context5.finish(16);
            case 20:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[0, 13, 16, 20]]);
      }));
      function setBrainName(_x4) {
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
              _context6.prev = 0;
              log.debug("setTeamNumber - acquiring semaphore");
              _context6.next = 4;
              return this.adminSemaphore.acquire();
            case 4:
              log.debug("setTeamNumber - acquired semaphore");
              if (!this.isUSBConnected) {
                _context6.next = 10;
                break;
              }
              _context6.next = 8;
              return this._serial.setBrainTeamNumber(team);
            case 8:
              _context6.next = 11;
              break;
            case 10:
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("setTeamNumber");
            case 11:
              _context6.next = 16;
              break;
            case 13:
              _context6.prev = 13;
              _context6.t0 = _context6["catch"](0);
              throw _context6.t0;
            case 16:
              _context6.prev = 16;
              log.debug("setTeamNumber - release semaphore");
              this.adminSemaphore.release();
              return _context6.finish(16);
            case 20:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[0, 13, 16, 20]]);
      }));
      function setTeamNumber(_x5) {
        return _setTeamNumber.apply(this, arguments);
      }
      return setTeamNumber;
    }()
  }, {
    key: "onRequestLockCode",
    value: function () {
      var _onRequestLockCode = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(webble_gatt_uuid, deviceID) {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              this.displayLockCodePrompt(deviceID);
            case 1:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function onRequestLockCode(_x6, _x7) {
        return _onRequestLockCode.apply(this, arguments);
      }
      return onRequestLockCode;
    }() //#endregion brain info
    //#region program control
  }, {
    key: "play",
    value: function () {
      var _play = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(slot) {
        var _this4 = this;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              log.debug("play - acquiring semaphore");
              _context8.next = 4;
              return this.adminSemaphore.acquire();
            case 4:
              log.debug("play - acquired semaphore");
              if (!this.isUSBConnected) {
                _context8.next = 11;
                break;
              }
              _context8.next = 8;
              return this._serial.play(slot);
            case 8:
              return _context8.abrupt("return", _context8.sent);
            case 11:
              return _context8.abrupt("return", _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.Play(slot)["catch"](function (err) {
                if (err instanceof _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.ErrorGATT) {
                  log.error("GATT error occurred while playing slot:", err);
                  _this4.handleGATTError();
                  return false;
                } else {
                  throw err;
                }
              }));
            case 12:
              _context8.next = 17;
              break;
            case 14:
              _context8.prev = 14;
              _context8.t0 = _context8["catch"](0);
              throw _context8.t0;
            case 17:
              _context8.prev = 17;
              log.debug("play - release semaphore");
              this.adminSemaphore.release();
              return _context8.finish(17);
            case 21:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[0, 14, 17, 21]]);
      }));
      function play(_x8) {
        return _play.apply(this, arguments);
      }
      return play;
    }()
  }, {
    key: "stop",
    value: function () {
      var _stop = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var _this5 = this;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              log.debug("stop - acquiring semaphore");
              _context9.next = 4;
              return this.adminSemaphore.acquire();
            case 4:
              log.debug("stop - acquired semaphore");
              if (!this.isUSBConnected) {
                _context9.next = 10;
                break;
              }
              _context9.next = 8;
              return this._serial.stop();
            case 8:
              _context9.next = 12;
              break;
            case 10:
              _context9.next = 12;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.Stop()["catch"](function (err) {
                if (err instanceof _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.ErrorGATT) {
                  log.error("GATT error occurred while stopping project:", err);
                  _this5.handleGATTError();
                  return false;
                } else {
                  throw err;
                }
              });
            case 12:
              return _context9.abrupt("return", true);
            case 15:
              _context9.prev = 15;
              _context9.t0 = _context9["catch"](0);
              throw _context9.t0;
            case 18:
              _context9.prev = 18;
              log.debug("stop - release semaphore");
              this.adminSemaphore.release();
              return _context9.finish(18);
            case 22:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[0, 15, 18, 22]]);
      }));
      function stop() {
        return _stop.apply(this, arguments);
      }
      return stop;
    }() //#endregion program control
    //#region project downloads
  }, {
    key: "downloadProgram",
    value: function () {
      var _downloadProgram = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(slot, projectName, language, data, progressCallback) {
        var isBlocks, isCPP, icon, ide, programInfo, firstVMCheck;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              log.info("downloadProgram", slot, projectName, language);
              isBlocks = _AppInfo__WEBPACK_IMPORTED_MODULE_8__.appState.getAppState().mode === "Blocks";
              isCPP = language === "cpp";
              icon = isBlocks ? _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VEXcodeIcons.VEXcodeBlocks : isCPP ? _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VEXcodeIcons.VEXcodeCPP : _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VEXcodeIcons.VEXcodePython;
              ide = isBlocks ? "Blocks" : isCPP ? "C++" : "Python";
              programInfo = {
                slot: slot,
                name: projectName,
                description: "",
                icon: icon,
                ide: ide,
                controller1: null,
                ports: [],
                triports: [],
                language: language
              };
              _context10.prev = 6;
              log.debug("downloadProgram - acquiring semaphore");
              _context10.next = 10;
              return this.adminSemaphore.acquire();
            case 10:
              log.debug("downloadProgram - acquired semaphore");
              if (!this.isUSBConnected) {
                _context10.next = 17;
                break;
              }
              _context10.next = 14;
              return this._serial.downloadProgram(data, programInfo, function (downloadData) {
                var progress = downloadData.progress,
                  state = downloadData.state;
                progressCallback({
                  progress: progress,
                  step: state
                });
              });
            case 14:
              return _context10.abrupt("return", _context10.sent);
            case 17:
              if (!(language === "python")) {
                _context10.next = 26;
                break;
              }
              _context10.next = 20;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.checkAndInstallPythonVm(_vexcode_python_vm__WEBPACK_IMPORTED_MODULE_18__.metaIQ2.crc, _vexcode_python_vm__WEBPACK_IMPORTED_MODULE_18__.metaIQ2.version, function (progress) {
                log.debug("downloadProgram - progressCallback for Python VM:", progress);
                progressCallback({
                  progress: progress.progress,
                  step: progress.state
                });
              });
            case 20:
              firstVMCheck = _context10.sent;
              log.debug("firstVMCheck:", firstVMCheck);
              if (!(firstVMCheck.err !== 0)) {
                _context10.next = 26;
                break;
              }
              log.warn("failed to download the Python VM");
              log.warn("firstVMCheck:", firstVMCheck.msg);
              return _context10.abrupt("return", false);
            case 26:
              _context10.next = 28;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.downloadProgram(slot, projectName, language, data, progressCallback, ide);
            case 28:
              return _context10.abrupt("return", _context10.sent);
            case 29:
              _context10.next = 40;
              break;
            case 31:
              _context10.prev = 31;
              _context10.t0 = _context10["catch"](6);
              if (!(_context10.t0 instanceof _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.ErrorGATT)) {
                _context10.next = 38;
                break;
              }
              log.error("GATT error occurred while downloading a program:", _context10.t0);
              this.handleGATTError();
              _context10.next = 39;
              break;
            case 38:
              throw _context10.t0;
            case 39:
              throw _context10.t0;
            case 40:
              _context10.prev = 40;
              log.debug("downloadProgram - release semaphore");
              this.adminSemaphore.release();
              return _context10.finish(40);
            case 44:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this, [[6, 31, 40, 44]]);
      }));
      function downloadProgram(_x9, _x10, _x11, _x12, _x13) {
        return _downloadProgram.apply(this, arguments);
      }
      return downloadProgram;
    }() // TODO: this is was used by NWJS interfaces. it should be removed with the rest of the NWJS code so we don't need to override it...
    // Override the parent method since all the logic for these initial checks is done in the VEXdevices now
  }, {
    key: "runInitialCheck",
    value: function () {
      var _runInitialCheck = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(language) {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              return _context11.abrupt("return", null);
            case 1:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }));
      function runInitialCheck(_x14) {
        return _runInitialCheck.apply(this, arguments);
      }
      return runInitialCheck;
    }()
  }, {
    key: "forcePythonVMDownload",
    value: function () {
      var _forcePythonVMDownload = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(progressCallback) {
        var callbackWrapper, result, _result;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              callbackWrapper = function _callbackWrapper(progress) {
                log.debug("forcePythonVMDownload - progressCallback:", progress);
                if (progressCallback) {
                  progressCallback({
                    "progress": progress.progress,
                    "step": _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DownloadState.DownloadingVM
                  });
                }
              };
              log.debug("forcePythonVMDownload");
              if (!this.isUSBConnected) {
                _context12.next = 9;
                break;
              }
              _context12.next = 5;
              return this._serial.checkAndInstallPythonVm(0, 0, callbackWrapper, true);
            case 5:
              result = _context12.sent;
              return _context12.abrupt("return", (result === null || result === void 0 ? void 0 : result.err) === 0);
            case 9:
              _context12.prev = 9;
              _context12.next = 12;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.checkAndInstallPythonVm(_vexcode_python_vm__WEBPACK_IMPORTED_MODULE_18__.metaIQ2.crc, _vexcode_python_vm__WEBPACK_IMPORTED_MODULE_18__.metaIQ2.version, progressCallback, true);
            case 12:
              _result = _context12.sent;
              return _context12.abrupt("return", (_result === null || _result === void 0 ? void 0 : _result.err) === 0);
            case 16:
              _context12.prev = 16;
              _context12.t0 = _context12["catch"](9);
              if (!(_context12.t0 instanceof _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.ErrorGATT)) {
                _context12.next = 24;
                break;
              }
              log.error("GATT error occurred while downloading Python VM:", _context12.t0);
              this.handleGATTError();
              return _context12.abrupt("return", false);
            case 24:
              throw _context12.t0;
            case 25:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this, [[9, 16]]);
      }));
      function forcePythonVMDownload(_x15) {
        return _forcePythonVMDownload.apply(this, arguments);
      }
      return forcePythonVMDownload;
    }() //#endregion project downloads
    //#region compilers
    //#endregion compilers
    //#region firmware
  }, {
    key: "canUpdateFirmware",
    value: function canUpdateFirmware() {
      return this.supportsFirmwareUpdateRobot;
    }
  }, {
    key: "updateFirmware",
    value: function () {
      var _updateFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(progress) {
        var updateProgressEvent, requestConnectEvent, continueReconnectResolver, reconnectCallback, progressHandler, reconnectHandler, msg1Key, msg2Key, platform;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              if (this.targetIsIQ2) {
                _context13.next = 2;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 2:
              if (!this.isBLEConnected) {
                _context13.next = 7;
                break;
              }
              log.info("updateFirmware - disconnecting from BLE before the update");
              _context13.next = 6;
              return this.closeConnection(_types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE);
            case 6:
              log.info("updateFirmware - BLE connection closed");
            case 7:
              if (this.isUSBConnected) {
                _context13.next = 10;
                break;
              }
              log.warn("updateFirmware - aborting, not connected via USB");
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("updateFirmware");
            case 10:
              _context13.prev = 10;
              log.debug("starting brain firmware update...");
              updateProgressEvent = new _dispatcher__WEBPACK_IMPORTED_MODULE_10__.DispatcherEvent();
              requestConnectEvent = new _dispatcher__WEBPACK_IMPORTED_MODULE_10__.DispatcherEvent();
              continueReconnectResolver = null;
              reconnectCallback = function reconnectCallback(continueUpdate) {
                if (continueReconnectResolver) {
                  continueReconnectResolver(continueUpdate);
                  continueReconnectResolver = null;
                } else {
                  log.warn("should not be here if the resolver was not set");
                  requestConnectEvent.fire({
                    isFirstConnect: false,
                    isDfu: false
                  });
                }
              };
              _widget_Modal__WEBPACK_IMPORTED_MODULE_7__.MODALCONTROL.showWebBrainUpdateProgress(updateProgressEvent, requestConnectEvent, reconnectCallback);
              progressHandler = function progressHandler(state, percent, msg) {
                log.debug("progressHandler:", percent, _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VEXBrainUpdateStates[state], msg);
                updateProgressEvent.fire({
                  state: state,
                  percent: percent,
                  msg: msg
                });
              };
              reconnectHandler = function reconnectHandler(isFirstConnect, isDfu) {
                return new Promise(function (resolve, reject) {
                  continueReconnectResolver = resolve;
                  requestConnectEvent.fire({
                    isFirstConnect: isFirstConnect,
                    isDfu: isDfu
                  });
                });
              };
              log.debug("calling brain firmware update...");
              _context13.next = 22;
              return (0,_helpers__WEBPACK_IMPORTED_MODULE_13__.waitms)(5);
            case 22:
              _context13.next = 24;
              return this._serial.updateFirmware(progressHandler, reconnectHandler);
            case 24:
              // MODALCONTROL.close();

              log.debug("brain firmware update done");
              return _context13.abrupt("return", true);
            case 28:
              _context13.prev = 28;
              _context13.t0 = _context13["catch"](10);
              log.error(_context13.t0);
              _widget_Modal__WEBPACK_IMPORTED_MODULE_7__.MODALCONTROL.close();
              msg1Key = "WebSerial Update Failed - unknown error";
              msg2Key = "WebSerial Update Failed - retry message";
              if (_context13.t0 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.WebSerialUnsupportedError) {
                msg1Key = "WebSerial Update Failed - webserial not supported";
              } else if (_context13.t0 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.NoBrainConnectedError) {
                msg1Key = "WebSerial Update Failed - no device";
              } else if (_context13.t0 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.OperationNotSupportedError) {
                msg1Key = "WebSerial Update Failed - not supported";
              } else if (_context13.t0 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.ErrorUpdatingBrainGolden) {
                msg1Key = "WebSerial Update Failed - recovery update failed";
              } else if (_context13.t0 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.ErrorUpdatingBrainBoot) {
                msg1Key = "WebSerial Update Failed - main update failed";
              } else if (_context13.t0 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.ErrorUpdatingBrainAssets) {
                msg1Key = "WebSerial Update Failed - asset update failed";
              }
              platform = _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t(_targetPlatform__WEBPACK_IMPORTED_MODULE_12__.currentTargetName);
              _widget_Modal__WEBPACK_IMPORTED_MODULE_7__.MODALCONTROL.showWebSerialUpdateError(_i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t(msg1Key, {
                platform: platform,
                device: _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t("Brain")
              }), msg2Key ? _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t(msg2Key, {
                platform: platform
              }) : null, "https://kb.vex.com/hc/en-us/articles/5161655264020-Troubleshooting-Connecting-to-Web-based-VEXcode-IQ");
              return _context13.abrupt("return", false);
            case 38:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this, [[10, 28]]);
      }));
      function updateFirmware(_x16) {
        return _updateFirmware.apply(this, arguments);
      }
      return updateFirmware;
    }()
  }, {
    key: "updateControllerFirmware",
    value: function () {
      var _updateControllerFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(progress) {
        var isDFU,
          force,
          updateState,
          _updateProgressEvent,
          _requestConnectEvent,
          _continueReconnectResolver,
          reconnectCallback,
          progressHandler,
          reconnectHandler,
          msg1Key,
          msg2Key,
          platform,
          _args14 = arguments;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              isDFU = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : false;
              force = _args14.length > 2 && _args14[2] !== undefined ? _args14[2] : false;
              log.info("updateControllerFirmware");
              // const brainInfo = this._serial.getRobotInfo();
              // if (brainInfo.deviceType !== "IQ2Controller") {
              //   throw new OperationNotSupportedError();
              // }
              updateState = null;
              _context14.prev = 4;
              log.debug("starting controller firmware update...");
              _updateProgressEvent = new _dispatcher__WEBPACK_IMPORTED_MODULE_10__.DispatcherEvent();
              _requestConnectEvent = new _dispatcher__WEBPACK_IMPORTED_MODULE_10__.DispatcherEvent();
              _continueReconnectResolver = null;
              reconnectCallback = function reconnectCallback(continueUpdate) {
                if (_continueReconnectResolver) {
                  _continueReconnectResolver(continueUpdate);
                  _continueReconnectResolver = null;
                } else {
                  log.warn("should not be here if the resolver was not set");
                  _requestConnectEvent.fire({
                    isFirstConnect: false,
                    isDfu: false
                  });
                }
              };
              _widget_Modal__WEBPACK_IMPORTED_MODULE_7__.MODALCONTROL.showWebControllerUpdateProgress(_updateProgressEvent, _requestConnectEvent, reconnectCallback);
              progressHandler = function progressHandler(state, percent, msg) {
                log.debug("progressHandler:", percent, _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VEXControllerUpdateStates[state], msg);
                _updateProgressEvent.fire({
                  state: state,
                  percent: percent,
                  msg: msg
                });
                updateState = state;
              };
              reconnectHandler = function reconnectHandler(isFirstConnect, isDfu) {
                return new Promise(function (resolve, reject) {
                  _continueReconnectResolver = resolve;
                  _requestConnectEvent.fire({
                    isFirstConnect: isFirstConnect,
                    isDfu: isDfu
                  });
                });
              }; // TODO: figure out if we need to force the update each time
              _context14.next = 15;
              return this._serial.controllerUpdate(progressHandler, reconnectHandler, isDFU, force);
            case 15:
              return _context14.abrupt("return", true);
            case 18:
              _context14.prev = 18;
              _context14.t0 = _context14["catch"](4);
              log.error(_context14.t0);
              _widget_Modal__WEBPACK_IMPORTED_MODULE_7__.MODALCONTROL.close();
              msg1Key = "WebSerial Update Failed - unknown error";
              msg2Key = "WebSerial Update Failed - retry message";
              if (_context14.t0 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.WebSerialUnsupportedError) {
                msg1Key = "WebSerial Update Failed - webserial not supported";
              } else if (_context14.t0 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.NoControllerConnectedError) {
                msg1Key = "WebSerial Update Failed - no device";
              } else if (_context14.t0 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.OperationNotSupportedError) {
                msg1Key = "WebSerial Update Failed - not supported";
              } else if (_context14.t0 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.UpdateCanceled) {
                msg1Key = "WebSerial Update Failed - user canceled reconnect";
              } else {
                if (updateState === _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VEXControllerUpdateStates.UpdatingRadio) {
                  msg1Key = "WebSerial Update Failed - radio update failed";
                } else if (updateState === _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VEXControllerUpdateStates.UpdatingAtmel) {
                  msg1Key = "WebSerial Update Failed - atmel update failed";
                }
              }
              platform = _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t(_targetPlatform__WEBPACK_IMPORTED_MODULE_12__.currentTargetName);
              _widget_Modal__WEBPACK_IMPORTED_MODULE_7__.MODALCONTROL.showWebSerialUpdateError(_i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t(msg1Key, {
                platform: platform
              }), msg2Key ? _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t(msg2Key, {
                platform: platform
              }) : null, "https://kb.vex.com/hc/en-us/articles/5161655264020-Troubleshooting-Connecting-to-Web-based-VEXcode-IQ");
              return _context14.abrupt("return", false);
            case 28:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this, [[4, 18]]);
      }));
      function updateControllerFirmware(_x17) {
        return _updateControllerFirmware.apply(this, arguments);
      }
      return updateControllerFirmware;
    }()
  }, {
    key: "checkDeviceFirmware",
    value: function () {
      var _checkDeviceFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(device) {
        var currentVersion, robotVersion, updateNeeded;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              log.info("checkDeviceFirmware");
              if (!(device.robotNeedsFirmwareUpdate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure)) {
                _context15.next = 9;
                break;
              }
              // we only need to check the versions if it has not been checked before
              log.debug("checking the version of the robot");
              // check the version on the server against the version on the brain
              _context15.next = 5;
              return this.getCurrentFirmware();
            case 5:
              currentVersion = _context15.sent;
              robotVersion = device.robotFirmwareVersion || _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString("0.0.0");
              updateNeeded = robotVersion.compare(currentVersion) < 0; // set the flag to indicate if the robot needs an update
              device.robotNeedsFirmwareUpdate = updateNeeded ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.NeedsUpdate : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.UpToDate;
            case 9:
              // not exactly sure why this is needed. it is part of AIM, so there should be a reason...
              this.triggerBLEConnectionStateChange();
            case 10:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this);
      }));
      function checkDeviceFirmware(_x18) {
        return _checkDeviceFirmware.apply(this, arguments);
      }
      return checkDeviceFirmware;
    }() //#endregion firmware
    //#region User Port comms
  }, {
    key: "supportsUserPort",
    get: function get() {
      return true;
    }
  }, {
    key: "requiresUserPortConnectionProcess",
    get: function get() {
      return true;
    }
  }, {
    key: "openConnectionUserPort",
    value: function () {
      var _openConnectionUserPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(connectionType) {
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              return _context16.abrupt("return", this._serial.openConnectionUserPort());
            case 1:
            case "end":
              return _context16.stop();
          }
        }, _callee16, this);
      }));
      function openConnectionUserPort(_x19) {
        return _openConnectionUserPort.apply(this, arguments);
      }
      return openConnectionUserPort;
    }()
  }, {
    key: "closeConnectionUserPort",
    value: function () {
      var _closeConnectionUserPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(connectionType) {
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              _context17.next = 2;
              return this._serial.closeConnectionUserPort();
            case 2:
              return _context17.abrupt("return", true);
            case 3:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this);
      }));
      function closeConnectionUserPort(_x20) {
        return _closeConnectionUserPort.apply(this, arguments);
      }
      return closeConnectionUserPort;
    }()
  }, {
    key: "connectionStateUserPortUSB",
    get: function get() {
      var state = this._serial.connectionStateUserPort;
      var isConnected = this.isBrainConnected() && state === _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VexSerialDeviceConnectionStates.Connected;
      return isConnected ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected;
    }
  }, {
    key: "connectionStateUserPortBLE",
    get: function get() {
      return this.connectionStateBLE;
    }
  }, {
    key: "sendDataUserPort",
    value: function () {
      var _sendDataUserPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(data) {
        var isConnected;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              isConnected = this.isConnected;
              if (isConnected) {
                _context18.next = 3;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("sendDataUserPort requires connection to the user port");
            case 3:
              _context18.prev = 3;
              log.debug("sendDataUserPort - acquiring semaphore");
              _context18.next = 7;
              return this.adminSemaphore.acquire();
            case 7:
              log.debug("sendDataUserPort - acquired semaphore");
              if (this.isUSBConnectedUserPort) {
                // if (!(await this._serial.isProjectRunning())) {
                //   // start the REPL program if no program is running
                //   log.debug("sendDataUserPort - starting REPL program");
                //   await this._serial.runSystemProgram(2);
                //   await waitms(100);
                // }
                this._serial.sendDataUserPort(data);
              } else {
                // if (!(await webble.isProjectRunning())) {
                //   // start the REPL program if no program is running
                //   log.debug("sendDataUserPort - starting REPL program");
                //   await webble.runSystemProgram(2);
                //   await waitms(100);
                // }
                _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.sendDataUserPort(data);
              }
              _context18.next = 19;
              break;
            case 11:
              _context18.prev = 11;
              _context18.t0 = _context18["catch"](3);
              if (!(_context18.t0 instanceof _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.ErrorGATT)) {
                _context18.next = 18;
                break;
              }
              log.error("GATT error occurred while playing slot:", _context18.t0);
              this.handleGATTError();
              _context18.next = 19;
              break;
            case 18:
              throw _context18.t0;
            case 19:
              _context18.prev = 19;
              log.debug("sendDataUserPort - release semaphore");
              this.adminSemaphore.release();
              return _context18.finish(19);
            case 23:
            case "end":
              return _context18.stop();
          }
        }, _callee18, this, [[3, 11, 19, 23]]);
      }));
      function sendDataUserPort(_x21) {
        return _sendDataUserPort.apply(this, arguments);
      }
      return sendDataUserPort;
    }()
  }, {
    key: "onSerialStateChangeUserPort",
    value: function onSerialStateChangeUserPort(state) {
      log.debug("onSerialStateChange - new state:", _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VexSerialDeviceConnectionStates[state]);
      if (this.lastUserPortState === state) {
        return;
      }
      this.lastUserPortState = state;
      this.triggerConnectionUpdateUserPort();
    }
    //#endregion User Port comms

    //#region events
    //#endregion

    //#region native -> webapp events
  }, {
    key: "onBLEDeviceDiscovered",
    value: function onBLEDeviceDiscovered(name, serial, product, mode, version, rssi, battery) {
      var _this6 = this;
      var canUpdate = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;
      log.debug("onBLEDeviceDiscovered", name, serial, product, mode, version, rssi, battery);
      var isValidSerial = serial && serial > 0;
      var cleanSerial = isValidSerial ? serial : 0;
      log.debug("cleanSerial:", cleanSerial);
      var versionObject = _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString(version);
      var isBootloadMode = mode === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode.DFU;
      var robotFirmware = isBootloadMode ? undefined : versionObject;
      var robotBootloader = isBootloadMode ? versionObject : undefined;
      this.processDiscoveredDevice(name, cleanSerial, product, mode, versionObject, rssi, battery, canUpdate);
      if (this.BLEConnectionTargetDevice && this.BLEConnectionTargetDevice.serial === cleanSerial) {
        var _this$BLEConnectionTa, _this$BLEConnectionTa2;
        if (this.BLEConnectionTargetDevice.mode !== mode || robotFirmware && ((_this$BLEConnectionTa = this.BLEConnectionTargetDevice.robotFirmwareVersion) === null || _this$BLEConnectionTa === void 0 ? void 0 : _this$BLEConnectionTa.compare(robotFirmware)) !== 0 || robotBootloader && ((_this$BLEConnectionTa2 = this.BLEConnectionTargetDevice.robotBootloaderVersion) === null || _this$BLEConnectionTa2 === void 0 ? void 0 : _this$BLEConnectionTa2.compare(robotBootloader)) !== 0) {
          log.debug("updating connection target");
          this.BLEConnectionTargetDevice.mode = mode;
          this.BLEConnectionTargetDevice.robotFirmwareVersion = robotFirmware;
          this.BLEConnectionTargetDevice.robotBootloaderVersion = robotBootloader;
          log.debug("setup for FW/BL recheck");
          this.BLEConnectionTargetDevice.robotNeedsFirmwareUpdate = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure;
          this.BLEConnectionTargetDevice.robotNeedsBootloaderUpdate = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure;
          this.checkDeviceFirmware(this.BLEConnectionTargetDevice).then(function () {
            _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_6__.fireEvent("HWInterface.DeviceListUpdate", _this6.BLEDiscoveredDevices);
          });
        }
        return;
      }
      log.debug("initial targetDevice:", this.BLETargetDevice);
      if (this.BLETargetDevice && this.BLETargetDevice.serial === cleanSerial) {
        this.BLETargetDevice.name = name;
        this.BLETargetDevice.canUpdate = canUpdate;
        log.debug("updated connected device to", this.BLETargetDevice);
        this.triggerRobotInfoUpdate();
        return;
      }
    }
  }, {
    key: "processDiscoveredDevice",
    value: function processDiscoveredDevice(name, serial, product, mode, version, rssi, battery, canUpdate) {
      var _this7 = this;
      var isBootloadMode = mode === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode.DFU;
      var robotFirmware = isBootloadMode ? undefined : version;
      var robotBootloader = isBootloadMode ? version : undefined;
      var alreadyFound = false;
      // tslint:disable-next-line: prefer-for-of
      for (var i = 0; i < this.BLEDiscoveredDevices.length; i++) {
        if (this.BLEDiscoveredDevices[i].serial === serial) {
          alreadyFound = true;
          this.BLEDiscoveredDevices[i].name = name;
          this.BLEDiscoveredDevices[i].rssi = rssi;
          this.BLEDiscoveredDevices[i].battery = battery;
          this.BLEDiscoveredDevices[i].deviceType = product;
          var recheckVersions = false;
          if (robotFirmware && this.BLEDiscoveredDevices[i].robotFirmwareVersion.compare(robotFirmware) !== 0 || !!this.BLEDiscoveredDevices[i].robotFirmwareVersion && !robotFirmware || !this.BLEDiscoveredDevices[i].robotFirmwareVersion && !!robotFirmware) {
            this.BLEDiscoveredDevices[i].robotFirmwareVersion = robotFirmware;
            recheckVersions = true;
          }
          if (robotBootloader && this.BLEDiscoveredDevices[i].robotBootloaderVersion.compare(robotBootloader) !== 0 || !!this.BLEDiscoveredDevices[i].robotBootloaderVersion && !robotBootloader || !this.BLEDiscoveredDevices[i].robotBootloaderVersion && !!robotBootloader) {
            this.BLEDiscoveredDevices[i].robotBootloaderVersion = robotBootloader;
            recheckVersions = true;
          }
          if (this.BLEDiscoveredDevices[i].mode !== mode) {
            this.BLEDiscoveredDevices[i].mode = mode;
            recheckVersions = true;
          }
          log.debug("updated device", this.BLEDiscoveredDevices[i]);
          if (this.BLETargetDevice && this.BLETargetDevice.serial === serial) {
            log.debug("skip recheck");
            break;
          }
          if (recheckVersions) {
            log.debug("setup for FW/BL recheck");
            this.BLEDiscoveredDevices[i].robotNeedsFirmwareUpdate = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure;
            this.BLEDiscoveredDevices[i].robotNeedsBootloaderUpdate = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure;
            this.checkDeviceFirmware(this.BLEDiscoveredDevices[i]).then(function () {
              _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_6__.fireEvent("HWInterface.DeviceListUpdate", _this7.BLEDiscoveredDevices);
            });
          }
          break;
        }
      }
      if (!alreadyFound) {
        // create new device object with discovered device info
        var tmpDev = {
          serial: serial,
          robotFirmwareVersion: version,
          robotBootloaderVersion: null,
          name: name,
          deviceType: product,
          mode: mode,
          connectionMethod: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE,
          brainConnected: true,
          canUpdate: true,
          robotNeedsFirmwareUpdate: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure,
          robotNeedsBootloaderUpdate: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure,
          battery: battery,
          rssi: rssi
        };
        log.debug("adding new device", tmpDev);
        this.checkDeviceFirmware(tmpDev).then(function () {
          _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_6__.fireEvent("HWInterface.DeviceListUpdate", _this7.BLEDiscoveredDevices);
        });
        this.BLEDiscoveredDevices.push(tmpDev);
      }
      _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_6__.fireEvent("HWInterface.DeviceListUpdate", this.BLEDiscoveredDevices);
    }
  }, {
    key: "onBLEDeviceLost",
    value: function onBLEDeviceLost(serial) {
      log.info("onBLEDeviceLost", serial);
      // tslint:disable-next-line: prefer-for-of
      for (var i = 0; i < this.BLEDiscoveredDevices.length; i++) {
        if (this.BLEDiscoveredDevices[i].serial === serial) {
          this.BLEDiscoveredDevices.splice(i, 1);
          break;
        }
      }
      _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_6__.fireEvent("HWInterface.DeviceListUpdate", this.BLEDiscoveredDevices);
    }
  }, {
    key: "onBLEDeviceConnected",
    value: function () {
      var _onBLEDeviceConnected = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(name, serial, version, mode, canUpdate) {
        var i;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              log.info("onBLEDeviceConnected - name:", name, "serial:", serial);
              if (this.BLEConnectionResolver) {
                this.BLEConnected = true;
                this.BLEConnectionResolver.resolve(true);
              }
              this.BLEConnectionResolver = null;
              this.BLEConnected = true;
              if (!(!this.BLEConnectionTargetDevice || this.BLEConnectionTargetDevice.serial !== serial)) {
                _context19.next = 13;
                break;
              }
              i = 0;
            case 6:
              if (!(i < this.BLEDiscoveredDevices.length)) {
                _context19.next = 13;
                break;
              }
              if (!(this.BLEDiscoveredDevices[i].serial === serial)) {
                _context19.next = 10;
                break;
              }
              this.BLEConnectionTargetDevice = this.BLEDiscoveredDevices[i];
              return _context19.abrupt("break", 13);
            case 10:
              i++;
              _context19.next = 6;
              break;
            case 13:
              // This is a hack for now
              // TODO: remove this when we actually get a serial number
              if (!this.BLEConnectionTargetDevice) {
                log.warn("no connection target device found, using first discovered device...");
                this.BLEConnectionTargetDevice = this.BLEDiscoveredDevices[0];
              }
              log.debug("old targetDevice", this.BLETargetDevice);
              log.debug("connectionTargetDevice", this.BLEConnectionTargetDevice);
              log.debug("all discovered devices:", this.BLEDiscoveredDevices);
              this.BLETargetDevice = Object.assign({}, this.BLEConnectionTargetDevice);
              this.BLETargetDevice.canUpdate = canUpdate;
              this.BLETargetDevice.mode = mode;
              log.debug("connectedDevice:", this.BLETargetDevice);
              _context19.next = 23;
              return this.checkDeviceFirmware(this.BLETargetDevice);
            case 23:
              this.triggerBLEConnectionStateChange();
              log.info("connected device mode:", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode[mode]);
              this.triggerRobotInfoUpdate();

              // this.checkAndUpdateDevice();
            case 26:
            case "end":
              return _context19.stop();
          }
        }, _callee19, this);
      }));
      function onBLEDeviceConnected(_x22, _x23, _x24, _x25, _x26) {
        return _onBLEDeviceConnected.apply(this, arguments);
      }
      return onBLEDeviceConnected;
    }()
  }, {
    key: "onBLEDeviceBLUpdated",
    value: function () {
      var _onBLEDeviceBLUpdated = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(name, serial, version, mode, canUpdate) {
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              this.BLETargetDevice.name = name;
              this.BLETargetDevice.robotFirmwareVersion = _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString(version);
              this.BLETargetDevice.mode = mode;
              log.debug("targetDevice:", this.BLETargetDevice);
              this.triggerBLEConnectionStateChange();
              log.info("onBLEDeviceConnected", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode[mode]);
              this.triggerRobotInfoUpdate();
            case 7:
            case "end":
              return _context20.stop();
          }
        }, _callee20, this);
      }));
      function onBLEDeviceBLUpdated(_x27, _x28, _x29, _x30, _x31) {
        return _onBLEDeviceBLUpdated.apply(this, arguments);
      }
      return onBLEDeviceBLUpdated;
    }()
  }, {
    key: "onBLEDeviceDisconnected",
    value: function onBLEDeviceDisconnected() {
      if (this.BLEDisconnectionResolver) {
        this.BLEConnected = false;
        this.BLEDisconnectionResolver.resolve(true);
      }
      this.BLEDisconnectionResolver = null;
      if (this.BLEConnected && !this.BLEExpectDisconnect) {
        log.info("device disconnected");
        this.BLEConnected = false;
        this.BLETargetDevice = null;
        this.BLECheckingDeviceFirmware = false;
        this.triggerBLEConnectionStateChange();
        log.info("onBLEDeviceDisconnected");
      }
    }
  }, {
    key: "onWebBLEConnectionStateChange",
    value: function onWebBLEConnectionStateChange(state) {
      log.debug("onWebBLEConnectionStateChange", this.firstUpdateAfterConnect);
      if (state === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.BrainConnectionState.Connected) {
        if (!this.alreadyConnected) {
          this.alreadyConnected = true;
          this.firstUpdateAfterConnect = true;
        }
      } else if (state === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.BrainConnectionState.Connecting || state === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.BrainConnectionState.Scanning) {
        this.alreadyConnected = false;
        this.firstUpdateAfterConnect = false;
        this.onBLEDeviceDisconnected();
      }
      this.triggerBLEConnectionStateChange();
    }
    // abstract onWebBLEPortUpdate(data: webble.VEXBotCommandStatus): void;
  }, {
    key: "onWebBLEDeviceInfo",
    value: function onWebBLEDeviceInfo(device) {
      log.debug("onWebBLEDeviceInfo", device);
      if (device.name === undefined) {
        return;
      }
      var appVersion = device.appVersion.getString();
      this.onBLEDeviceDiscovered(device.name, device.deviceIDValue, device.productType, device.deviceMode, appVersion, -200, -1, device.supportFWUpdate);
      if (_vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.getConnectionState() === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.BrainConnectionState.Connected && this.firstUpdateAfterConnect) {
        this.firstUpdateAfterConnect = false;
        this.onBLEDeviceConnected(device.name, device.deviceIDValue, appVersion, device.deviceMode, device.supportFWUpdate);
      }
      if (_vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.getConnectionState() === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.BrainConnectionState.Connected) {
        this.onBLEDeviceBLUpdated(device.name, device.deviceIDValue, appVersion, device.deviceMode, device.supportFWUpdate);
      }
    }

    //#endregion webBLE event wrappers

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
      var _displayLockCodePrompt = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(deviceID) {
        var _this8 = this;
        var recentBrain, brainKey, currKey;
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              log.info("displaying prompt for brain lock code");
              recentBrain = _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_16__.storageInterface.readKey(_brainInfoStore__WEBPACK_IMPORTED_MODULE_17__.brainRecentKey);
              if (recentBrain && recentBrain !== deviceID.toString()) {
                log.debug("displayLockCodePrompt - clearing key for previous robot as it does not match the connection target");
                _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_16__.storageInterface.clearKey(BRAIN_LOCK_KEY + recentBrain);
              }

              // get the previous lock code if it exists so that we can try to skip the prompt
              brainKey = BRAIN_LOCK_KEY + deviceID;
              currKey = _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_16__.storageInterface.readKey(brainKey);
              log.info("displayLockCodePrompt - target:", this.getTargetRobotInfo());
              log.info("displayLockCodePrompt - brain key: ", brainKey);
              log.info("displayLockCodePrompt - current key: " + currKey);
              _context22.prev = 8;
              if (currKey) {
                _context22.next = 17;
                break;
              }
              _context22.next = 12;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.ShowLockCodeOnBrain(true);
            case 12:
              _context22.next = 14;
              return (0,_helpers__WEBPACK_IMPORTED_MODULE_13__.waitms)(100);
            case 14:
              _widget_Modal__WEBPACK_IMPORTED_MODULE_7__.MODALCONTROL.showBrainLockCodePrompt(this.lockCodeValidator, /*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(result) {
                  return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                    while (1) switch (_context21.prev = _context21.next) {
                      case 0:
                        log.info("displayLockCodePrompt - result:", result);
                        if (!result) {
                          _context21.next = 13;
                          break;
                        }
                        _context21.next = 4;
                        return _this8.unlockBrain(result);
                      case 4:
                        if (!_context21.sent) {
                          _context21.next = 9;
                          break;
                        }
                        log.info("displayLockCodePrompt - robot unlocked with user input code");
                        // await webble.ShowLockCodeOnBrain(false);
                        _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_16__.storageInterface.writeKey(brainKey, result);
                        _context21.next = 11;
                        break;
                      case 9:
                        log.info("displayLockCodePrompt - robot not unlocked with user input code. asking again");
                        _this8.displayLockCodePrompt(deviceID);
                      case 11:
                        _context21.next = 16;
                        break;
                      case 13:
                        _context21.next = 15;
                        return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.ShowLockCodeOnBrain(false);
                      case 15:
                        _this8.closeConnection(_types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE);
                      case 16:
                      case "end":
                        return _context21.stop();
                    }
                  }, _callee21);
                }));
                return function (_x33) {
                  return _ref.apply(this, arguments);
                };
              }());
              _context22.next = 29;
              break;
            case 17:
              log.info("displayLockCodePrompt - key found and sending that automatically");
              _context22.next = 20;
              return this.unlockBrain(currKey);
            case 20:
              if (!_context22.sent) {
                _context22.next = 24;
                break;
              }
              log.info("displayLockCodePrompt - robot unlocked with saved code");
              _context22.next = 29;
              break;
            case 24:
              log.info("displayLockCodePrompt - saved key did not unlock robot");
              _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_16__.storageInterface.clearKey(brainKey);
              _context22.next = 28;
              return (0,_helpers__WEBPACK_IMPORTED_MODULE_13__.waitms)(100);
            case 28:
              this.displayLockCodePrompt(deviceID);
            case 29:
              _context22.next = 39;
              break;
            case 31:
              _context22.prev = 31;
              _context22.t0 = _context22["catch"](8);
              if (!(_context22.t0 instanceof _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_15__.ErrorGATT)) {
                _context22.next = 38;
                break;
              }
              log.error("GATT error occurred while displaying lock code prompt:", _context22.t0);
              this.handleGATTError();
              _context22.next = 39;
              break;
            case 38:
              throw _context22.t0;
            case 39:
            case "end":
              return _context22.stop();
          }
        }, _callee22, this, [[8, 31]]);
      }));
      function displayLockCodePrompt(_x32) {
        return _displayLockCodePrompt.apply(this, arguments);
      }
      return displayLockCodePrompt;
    }() //#endregion webble lock code
    //#region low-level logger
    )
  }, {
    key: "getLowLevelLogger",
    value: function getLowLevelLogger() {
      // TODO: actually get this part working
      // return this._serial.logger;
      return null;
    }
    //#endregion low-level logger
  }]);
}(_IQInterface__WEBPACK_IMPORTED_MODULE_3__.IQInterface);


/***/ })

}]);
//# sourceMappingURL=5a0c5d8699ffe4acce15.src_HardwareInterface_DownloadPlatform_IQ_IQVexSerial_ts.bundle.js.map