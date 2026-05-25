"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_HardwareInterface_DownloadPlatform_AIM_AIMVexSerial_ts"],{

/***/ "./src/HardwareInterface/DownloadPlatform/AIM/AIMVexSerial.ts":
/*!********************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/AIM/AIMVexSerial.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIMVexSerial: () => (/* binding */ AIMVexSerial)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/HWEnums */ "./src/HardwareInterface/types/HWEnums.ts");
/* harmony import */ var _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types/HWErrors */ "./src/HardwareInterface/types/HWErrors.ts");
/* harmony import */ var _AIMInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AIMInterface */ "./src/HardwareInterface/DownloadPlatform/AIM/AIMInterface.ts");
/* harmony import */ var _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../VexSerialDevices */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/index.ts");
/* harmony import */ var _VexVersion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../VexVersion */ "./src/HardwareInterface/VexVersion.ts");
/* harmony import */ var _widget_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../widget/Modal */ "./src/widget/Modal.tsx");
/* harmony import */ var _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../GlobalEventSystem */ "./src/GlobalEventSystem.ts");
/* harmony import */ var _AppInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../AppInfo */ "./src/AppInfo.ts");
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../i18n/i18n */ "./src/i18n/i18n.ts");
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../dispatcher */ "./src/dispatcher.ts");
/* harmony import */ var _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../VexSerialDevices/errors */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/errors.ts");
/* harmony import */ var _targetPlatform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../targetPlatform */ "./src/targetPlatform.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../helpers */ "./src/helpers.ts");
/* harmony import */ var _VexSerialDevices_VexSerialDevice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../VexSerialDevices/VexSerialDevice */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDevice.ts");
/* harmony import */ var _vexcode_robot_config_dist_AIVisionUtility_AIVisionSerialInterface__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @vexcode/robot-config/dist/AIVisionUtility/AIVisionSerialInterface */ "./node_modules/@vexcode/robot-config/dist/AIVisionUtility/AIVisionSerialInterface.js");
/* harmony import */ var _imageConverters__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../imageConverters */ "./src/HardwareInterface/imageConverters.ts");
/* harmony import */ var _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @vexcode/vex-ble-device-manager */ "./node_modules/@vexcode/vex-ble-device-manager/dist_lib/src/index.js");
/* harmony import */ var _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../StorageInterface/VEXcodeLocalStorage */ "./src/StorageInterface/VEXcodeLocalStorage.ts");
/* harmony import */ var _brainInfoStore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../brainInfoStore */ "./src/brainInfoStore.ts");
/* harmony import */ var _platformInfo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../platformInfo */ "./src/platformInfo.ts");
/* harmony import */ var _VexIntegratedVisionSerial__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../VexIntegratedVisionSerial */ "./src/HardwareInterface/DownloadPlatform/VexIntegratedVisionSerial.ts");
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("AIMVexSerial");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();
log.setHistoryLogger("HWInterface");

// tslint:disable: member-ordering

// interface types/enums



// TODO: cleanup imports















// BLE imports





var BRAIN_LOCK_KEY = "BLE_LOCK_KEY";
var AIMVexSerial = /*#__PURE__*/function (_AIMInterface) {
  function AIMVexSerial() {
    var _this;
    _classCallCheck(this, AIMVexSerial);
    _this = _callSuper(this, AIMVexSerial);
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
    // TODO: make this work for electron?
    _defineProperty(_this, "_electronBluetoothProxy", undefined);
    //#endregion BLE connection properties
    // tslint:disable-next-line: variable-name
    _defineProperty(_this, "_serial", new _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VexSerialDeviceAIM());
    _defineProperty(_this, "_dummyVisionInterface", new _VexIntegratedVisionSerial__WEBPACK_IMPORTED_MODULE_21__.VexIntegratedVisionSerial(_this._serial, _this.adminSemaphore));
    _defineProperty(_this, "lastSerialState", _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VexSerialDeviceConnectionStates.Disconnected);
    _defineProperty(_this, "onConnectedToInvalidPort", function () {
      var message = _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t("Incorrect WebSerial Port", {
        platform: _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t("AIM")
      });
      _widget_Modal__WEBPACK_IMPORTED_MODULE_6__.MODALCONTROL.showWebSerialPrompt(message, null, _this.onControlButtonClick);
    });
    //#endregion file operations
    //#region compilers
    //#endregion compilers
    //#region script commands
    // TODO: all of the script commands will need work for USB support
    _defineProperty(_this, "ackHandler", null);
    _defineProperty(_this, "lastUserPortState", _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VexSerialDeviceConnectionStates.Disconnected);
    //#endregion status events
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
      _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.TerminalDataUpdate", data);
    });
    _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.init("AIM");
    log.debug("webble initialized");
    log.debug("setting up event listeners");
    _this.onWebBLEDeviceInfo = _this.onWebBLEDeviceInfo.bind(_this);
    _this.onackReceived = _this.onackReceived.bind(_this);
    _this.onWebBLEConnectionStateChange = _this.onWebBLEConnectionStateChange.bind(_this);
    _this.onRequestLockCode = _this.onRequestLockCode.bind(_this);
    _this.onAIMStatusUpdate = _this.onAIMStatusUpdate.bind(_this);
    _this.onAIMCommandStatus = _this.onAIMCommandStatus.bind(_this);
    _this.onAIMAIVisionStatus = _this.onAIMAIVisionStatus.bind(_this);
    var events = _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.VEXBLEChromeEvents;
    events.on("VEXBLEBrowser.ConnectionState", _this.onWebBLEConnectionStateChange);
    events.on("VEXBLEBrowser.DeviceInfo", _this.onWebBLEDeviceInfo);
    events.on("VEXBLEBrowser.EnterLockCode", _this.onRequestLockCode);
    events.on("VEXBLEBrowser.AIMRemoteControlBotStatus", _this.onAIMStatusUpdate);
    events.on("VEXBLEBrowser.AIMRemoteControlCommandStatus", _this.onAIMCommandStatus);
    events.on("VEXBLEBrowser.RXDataUser", function (data) {
      if (_this.connectionStateUserPortUSB !== _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected) {
        log.debug("print to terminal USB:", data);
        _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.TerminalDataUpdate", data);
      } else {
        log.debug("using USB RX");
      }
    });
    events.on("VEXBLEBrowser.AIMRemoteControlAIVisionStatus", _this.onAIMAIVisionStatus);
    if (_platformInfo__WEBPACK_IMPORTED_MODULE_20__.PlatformIsElectron) {
      // we only want to create the electron proxy when running in electron, so
      // we have this code to only import and create the proxy when in electron.
      log.info("loading electron bluetooth proxy");
      __webpack_require__.e(/*! import() */ "src_HardwareInterface_GO123_VexBluetoothElectronProxy_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../GO123/VexBluetoothElectronProxy */ "./src/HardwareInterface/GO123/VexBluetoothElectronProxy.ts")).then(function (importResult) {
        log.info("creating electron bluetooth proxy");
        _this._electronBluetoothProxy = new importResult.VexBluetoothElectron();
        log.info("created electron bluetooth proxy");
      });
    }
    _this._serial.getCurrentFirmwareVersion().then(function (version) {
      _this.currentFirmwareVersion = version;
      _this.triggerRobotInfoUpdate();
    });
    return _this;
  }
  _inherits(AIMVexSerial, _AIMInterface);
  return _createClass(AIMVexSerial, [{
    key: "electronBluetoothProxy",
    get: function get() {
      return this._electronBluetoothProxy;
    }
  }, {
    key: "webble",
    get: function get() {
      return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__;
    }
  }, {
    key: "AIVisionPort",
    get:
    /**
     * Dummy class for the AI Vision sensor, AIM AI Vision does not use all commands (ex: firmware updating)
     * expected in AIVisionSerialInterface, dummy class implemented to fix type issues in robot config and address all expected functions
     */
    function get() {
      return this._dummyVisionInterface;
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

      // figure out the connection state for the AIVisionPort for the config utility.
      // We only do this for the USB connection since the utility that uses the
      // AIVisionPort only works with USB connections.
      var aiNewState = this.mapToAIConnectionState(newState); // Map to AIConnectionState
      log.debug("aiNewState:", newState);
      // Directly calling fireEvent on AIVisionPort to pass the connection state
      this.AIVisionPort.fireEvent("connectionStateChange", aiNewState);

      // AIM should always have object detection on...
      if (newState === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected) {
        this._serial._FlagObjectDetectionEnabled = true;
      }
      this.triggerUSBConnectionStateChange();
    }
  }, {
    key: "mapToAIConnectionState",
    value: function mapToAIConnectionState(state) {
      // TODO: figure this out????
      switch (state) {
        case _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected:
          return _vexcode_robot_config_dist_AIVisionUtility_AIVisionSerialInterface__WEBPACK_IMPORTED_MODULE_15__.AIConnectionState.Connected;
        case _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected:
        default:
          return _vexcode_robot_config_dist_AIVisionUtility_AIVisionSerialInterface__WEBPACK_IMPORTED_MODULE_15__.AIConnectionState.Disconnected;
      }
    }
  }, {
    key: "onInterfaceDeviceInfoUpdated",
    value: function onInterfaceDeviceInfoUpdated(data) {
      log.debug("onInterfaceDeviceInfoUpdated");
      this.triggerRobotInfoUpdate();
    }
  }, {
    key: "onControlButtonClick",
    value: function () {
      var _onControlButtonClick = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.openConnection(_types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.USB);
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
    }() //#region interface information
    // These are all properties that are used by the UI to know what is supported
  }, {
    key: "supportsUSBConnection",
    get: function get() {
      return true;
    }
  }, {
    key: "supportsParallelConnections",
    get: function get() {
      return true;
    }
  }, {
    key: "supportsAutomaticUSBConnection",
    get: function get() {
      return _platformInfo__WEBPACK_IMPORTED_MODULE_20__.PlatformIsElectron;
    }
  }, {
    key: "supportsAutomaticUSBConnectionUserPort",
    get: function get() {
      return _platformInfo__WEBPACK_IMPORTED_MODULE_20__.PlatformIsElectron;
    }
  }, {
    key: "supportsScreenCapture",
    get: function get() {
      return this.isUSBConnected && !this.isBootloadMode;
    }
  }, {
    key: "supportsFirmwareUpdateRobot",
    get: function get() {
      return this.isUSBConnected;
    }
  }, {
    key: "supportsFirmwareUpdateController",
    get: function get() {
      return false;
    }

    //#endregion interface information

    //#region connection control
  }, {
    key: "openConnection",
    value: function () {
      var _openConnection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(connectionType) {
        var message;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(connectionType === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE)) {
                _context2.next = 4;
                break;
              }
              return _context2.abrupt("return", _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.scanAndConnect().then(function () {
                return;
              })["catch"](function (err) {
                log.error(err);
                throw new Error("error starting scan");
              }));
            case 4:
              if (!(connectionType === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.USB || connectionType === undefined)) {
                _context2.next = 20;
                break;
              }
              if (this._serial.isSupported) {
                _context2.next = 8;
                break;
              }
              log.error("WebSerial is not supported on this system");
              return _context2.abrupt("return");
            case 8:
              _context2.prev = 8;
              log.debug("Attempting to open serial port connection");
              _context2.next = 12;
              return this._serial.openConnection();
            case 12:
              _context2.next = 18;
              break;
            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](8);
              log.debug("Error attempting to open serial port connection: ", _context2.t0);
              // Error when a robot opens a port connection to a robot that is already connected through another VEX application
              if (_context2.t0 instanceof Error && _context2.t0.name === "NetworkError" && _context2.t0.message.includes("Failed to open serial port.")) {
                message = _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t("Already Connected WebSerial Port", {
                  platform: _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t("AIM")
                });
                _widget_Modal__WEBPACK_IMPORTED_MODULE_6__.MODALCONTROL.alert(message);
              }
            case 18:
              _context2.next = 21;
              break;
            case 20:
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("Connection type not supported");
            case 21:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[8, 14]]);
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
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("openEstablishedConnection");
            case 4:
              if (!(connectionType === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.USB || connectionType === undefined)) {
                _context3.next = 11;
                break;
              }
              if (this._serial.isSupported) {
                _context3.next = 8;
                break;
              }
              log.error("WebSerial is not supported on this system");
              return _context3.abrupt("return");
            case 8:
              return _context3.abrupt("return", this._serial.openEstablishedConnection());
            case 11:
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("Connection type not supported");
            case 12:
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
              return _context4.abrupt("return", _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.disconnect().then(function () {
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
      log.debug("unlockBrain - unlockCode:", unlockCode);
      return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.SendLockCode(parseInt(unlockCode));
    }
    //#endregion connection control

    //#region connection status
    /**
     * This is the connection state of the USB serial connection for the Admin port
     */
  }, {
    key: "connectionStateUSB",
    get: function get() {
      var state = this._serial.connectionState;
      var isConnected = state === _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VexSerialDeviceConnectionStates.Connected;
      return isConnected ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected;
    }

    /**
     * This is the connection state of the BLE connection. Unlike the USB connection,
     * if this is connected, everything is accessible.
     */
  }, {
    key: "connectionStateBLE",
    get: function get() {
      // casting to any to avoid warning about type not overlapping when it
      // actually does... not ideal, but there is no reason to manually convert
      // it just to avoid a incorrect warning.
      return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.getConnectionState();
    }
  }, {
    key: "getRobotScanList",
    value: function getRobotScanList() {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "getTargetRobotInfo",
    value: function getTargetRobotInfo() {
      throw new Error("Method not implemented.");
    }
    //#endregion connection status

    //#region brain info
    /**
     * grabs the brain info from the USB connection. This will also return information even if not connected.
     * @returns the brain information for the USB connection
     */
  }, {
    key: "getRobotInfoUSB",
    value: function getRobotInfoUSB() {
      var tmpInfo = this._serial.getRobotInfo();
      var version = tmpInfo.brainVersion ? _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString(tmpInfo.brainVersion.toInternalString()) : _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString("0.0.0");
      var hasBrainVersion = version && version.toInternalString() !== "0.0.0.b0";
      var deviceType = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceType.VEXAIM;
      var info = {
        serial: tmpInfo.serial,
        robotFirmwareVersion: version,
        name: tmpInfo.name,
        team: tmpInfo.team,
        deviceType: deviceType,
        connectionMethod: tmpInfo.connectionType,
        brainConnected: tmpInfo.isBrainConnected,
        robotNeedsFirmwareUpdate: hasBrainVersion ? tmpInfo.updateNeededBrain ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.NeedsUpdate : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.UpToDate : tmpInfo.isDFUMode ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.NeedsUpdate : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure,
        robotNeedsBootloaderUpdate: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure,
        canUpdate: this.canUpdateFirmware(),
        battery: tmpInfo.battery,
        batteryLow: false
      };
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
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.setRobotName(name);
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
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("setTeamNumber");
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function setTeamNumber(_x5) {
        return _setTeamNumber.apply(this, arguments);
      }
      return setTeamNumber;
    }()
  }, {
    key: "captureRobotScreen",
    value: function () {
      var _captureRobotScreen = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(progressCallback) {
        var options, width, height, bytesPerPixel, screenData;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (!(this.isUSBConnected && (this._serial.romBootloaderActive || this._serial.ramBootloaderActive))) {
                _context7.next = 3;
                break;
              }
              log.warn("captureBrainScreen not supported when in bootloader mode");
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("captureBrainScreen");
            case 3:
              // all the captures will use this same option structure, so adding it here
              // as a starting point. will need to figure out the exact method of passing
              // the data when the other platforms are added. Maybe it is provided in a
              // getter that can be defined at a higher level for each platform type? that
              // would allow for a more common method for the image capture instead of
              // having it at the lowest level like this one is.
              options = {
                width: 240,
                height: 240,
                bytesPerPixel: 2,
                littleEndian: true,
                // not really sure about the layer. could be -2 or 2
                layer: -2,
                isYUV: false
              };
              width = options.width;
              height = options.height;
              bytesPerPixel = options.bytesPerPixel; // we want to make it clear that the screenshot process has started even
              // though the lock has yet to be acquired. This is because the semaphore
              // queue is FIFO, so if we want to avoid starting something during the
              // screen capture, it will start before the next commands are sent if we
              // don't set the flag here.
              this.screenCaptureInProgress = true;
              _context7.prev = 8;
              log.debug("captureBrainScreen - acquiring semaphore");
              _context7.next = 12;
              return this.adminSemaphore.acquire();
            case 12:
              log.debug("captureBrainScreen - acquired semaphore");
              screenData = undefined;
              if (!this.isUSBConnected) {
                _context7.next = 21;
                break;
              }
              _context7.next = 17;
              return this._serial.captureScreenData(width * height * bytesPerPixel, progressCallback);
            case 17:
              screenData = _context7.sent;
              return _context7.abrupt("return", (0,_imageConverters__WEBPACK_IMPORTED_MODULE_16__.convertImageDataRGB565)(screenData, width, height, options.littleEndian));
            case 21:
              _context7.next = 23;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.captureBrainScreenAIM(progressCallback);
            case 23:
              return _context7.abrupt("return", _context7.sent);
            case 24:
              _context7.next = 29;
              break;
            case 26:
              _context7.prev = 26;
              _context7.t0 = _context7["catch"](8);
              throw _context7.t0;
            case 29:
              _context7.prev = 29;
              log.debug("captureBrainScreen - release semaphore");
              this.adminSemaphore.release();
              this.screenCaptureInProgress = false;
              return _context7.finish(29);
            case 34:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[8, 26, 29, 34]]);
      }));
      function captureRobotScreen(_x6) {
        return _captureRobotScreen.apply(this, arguments);
      }
      return captureRobotScreen;
    }()
  }, {
    key: "playSoundFile",
    value: function () {
      var _playSoundFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(name) {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              log.debug("playSoundFile - acquiring semaphore");
              _context8.next = 4;
              return this.adminSemaphore.acquire();
            case 4:
              log.debug("playSoundFile - acquired semaphore");
              if (!this.isUSBConnected) {
                _context8.next = 10;
                break;
              }
              _context8.next = 8;
              return this._serial.playSound(name);
            case 8:
              _context8.next = 12;
              break;
            case 10:
              _context8.next = 12;
              return this._serial.playSoundCustomSender(_vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.WriteDataAsync, name);
            case 12:
              _context8.next = 17;
              break;
            case 14:
              _context8.prev = 14;
              _context8.t0 = _context8["catch"](0);
              throw _context8.t0;
            case 17:
              _context8.prev = 17;
              log.debug("playSoundFile - release semaphore");
              this.adminSemaphore.release();
              return _context8.finish(17);
            case 21:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[0, 14, 17, 21]]);
      }));
      function playSoundFile(_x7) {
        return _playSoundFile.apply(this, arguments);
      }
      return playSoundFile;
    }()
  }, {
    key: "sendRemoteTouch",
    value: function () {
      var _sendRemoteTouch = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(xPosition, yPosition) {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              log.debug("sendRemoteTouch - acquiring semaphore");
              _context9.next = 4;
              return this.adminSemaphore.acquire();
            case 4:
              log.debug("sendRemoteTouch - acquired semaphore");
              if (!this.isUSBConnected) {
                _context9.next = 10;
                break;
              }
              _context9.next = 8;
              return this._serial.sendRemoteTouch(xPosition, yPosition);
            case 8:
              _context9.next = 12;
              break;
            case 10:
              _context9.next = 12;
              return this._serial.sendRemoteTouchCustom(_vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.WriteDataAsync, xPosition, yPosition);
            case 12:
              _context9.next = 17;
              break;
            case 14:
              _context9.prev = 14;
              _context9.t0 = _context9["catch"](0);
              throw _context9.t0;
            case 17:
              _context9.prev = 17;
              log.debug("sendRemoteTouch - release semaphore");
              this.adminSemaphore.release();
              return _context9.finish(17);
            case 21:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[0, 14, 17, 21]]);
      }));
      function sendRemoteTouch(_x8, _x9) {
        return _sendRemoteTouch.apply(this, arguments);
      }
      return sendRemoteTouch;
    }()
  }, {
    key: "onRequestLockCode",
    value: function () {
      var _onRequestLockCode = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(webble_gatt_uuid, deviceID) {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              this.displayLockCodePrompt(deviceID);
            case 1:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function onRequestLockCode(_x10, _x11) {
        return _onRequestLockCode.apply(this, arguments);
      }
      return onRequestLockCode;
    }()
  }, {
    key: "isBootloadMode",
    get: function get() {
      return this._serial.romBootloaderActive || this._serial.ramBootloaderActive;
    }
    //#endregion brain info

    //#region AI Vision
  }, {
    key: "AIVisionSensorPort",
    get: function get() {
      return this._dummyVisionInterface;
    }
  }, {
    key: "setTagDetection",
    value: function () {
      var _setTagDetection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(enabled) {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              log.debug("setTagDetection - enabled:", enabled);
              _context11.prev = 1;
              _context11.next = 4;
              return this.adminSemaphore.acquire();
            case 4:
              if (!this.isUSBConnected) {
                _context11.next = 20;
                break;
              }
              log.debug("setTagDetection - acquired semaphore - USB connected");
              if (!(enabled === true)) {
                _context11.next = 15;
                break;
              }
              // must disable then re-enable to ensure tags are turned back on
              this._serial.AISetTagDetection(false);
              _context11.next = 10;
              return (0,_helpers__WEBPACK_IMPORTED_MODULE_13__.waitms)(100);
            case 10:
              this._serial.AISetTagDetection(true);
              _context11.next = 13;
              return (0,_helpers__WEBPACK_IMPORTED_MODULE_13__.waitms)(100);
            case 13:
              _context11.next = 18;
              break;
            case 15:
              _context11.next = 17;
              return this._serial.AISetTagDetection(enabled);
            case 17:
              return _context11.abrupt("return", _context11.sent);
            case 18:
              _context11.next = 34;
              break;
            case 20:
              if (!(enabled === true)) {
                _context11.next = 31;
                break;
              }
              _context11.next = 23;
              return this._serial.AISendFlagsCustom(_vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.WriteDataAsync, false, true, false);
            case 23:
              _context11.next = 25;
              return (0,_helpers__WEBPACK_IMPORTED_MODULE_13__.waitms)(100);
            case 25:
              _context11.next = 27;
              return this._serial.AISendFlagsCustom(_vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.WriteDataAsync, true, true, false);
            case 27:
              _context11.next = 29;
              return (0,_helpers__WEBPACK_IMPORTED_MODULE_13__.waitms)(100);
            case 29:
              _context11.next = 34;
              break;
            case 31:
              _context11.next = 33;
              return this._serial.AISendFlagsCustom(_vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.WriteDataAsync, enabled, true, false);
            case 33:
              return _context11.abrupt("return", _context11.sent);
            case 34:
              _context11.next = 39;
              break;
            case 36:
              _context11.prev = 36;
              _context11.t0 = _context11["catch"](1);
              throw _context11.t0;
            case 39:
              _context11.prev = 39;
              this.adminSemaphore.release();
              return _context11.finish(39);
            case 42:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this, [[1, 36, 39, 42]]);
      }));
      function setTagDetection(_x12) {
        return _setTagDetection.apply(this, arguments);
      }
      return setTagDetection;
    }()
  }, {
    key: "grabDetectedObjects",
    value: function () {
      var _grabDetectedObjects = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              log.debug("grabDetectedObjects called");
              if (!this.isUSBConnected) {
                _context12.next = 24;
                break;
              }
              if (!(this._serial.romBootloaderActive || this._serial.ramBootloaderActive)) {
                _context12.next = 5;
                break;
              }
              log.warn("grabDetectedObjects not supported when in bootloader mode");
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("grabDetectedObjects with robot in bootloader mode");
            case 5:
              _context12.prev = 5;
              log.debug("grabDetectedObjects - acquiring semaphore");
              _context12.next = 9;
              return this.adminSemaphore.acquire();
            case 9:
              log.debug("grabDetectedObjects - acquired semaphore");
              _context12.next = 12;
              return this._serial.AIGetDetectedObjects();
            case 12:
              return _context12.abrupt("return", _context12.sent);
            case 15:
              _context12.prev = 15;
              _context12.t0 = _context12["catch"](5);
              throw _context12.t0;
            case 18:
              _context12.prev = 18;
              log.debug("grabDetectedObjects - release semaphore");
              this.adminSemaphore.release();
              return _context12.finish(18);
            case 22:
              _context12.next = 26;
              break;
            case 24:
              log.info("grabDetectedObjects not supported when not connected via USB");
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("grabDetectedObjects");
            case 26:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this, [[5, 15, 18, 22]]);
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
      var _play = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(slot) {
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _context13.prev = 0;
              log.debug("play - acquiring semaphore");
              _context13.next = 4;
              return this.adminSemaphore.acquire();
            case 4:
              log.debug("play - acquired semaphore");
              if (!this.isUSBConnected) {
                _context13.next = 11;
                break;
              }
              _context13.next = 8;
              return this._serial.play(slot);
            case 8:
              return _context13.abrupt("return", _context13.sent);
            case 11:
              _context13.next = 13;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.Play(slot);
            case 13:
              return _context13.abrupt("return", _context13.sent);
            case 14:
              _context13.next = 19;
              break;
            case 16:
              _context13.prev = 16;
              _context13.t0 = _context13["catch"](0);
              throw _context13.t0;
            case 19:
              _context13.prev = 19;
              log.debug("play - release semaphore");
              this.adminSemaphore.release();
              return _context13.finish(19);
            case 23:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this, [[0, 16, 19, 23]]);
      }));
      function play(_x13) {
        return _play.apply(this, arguments);
      }
      return play;
    }()
  }, {
    key: "stop",
    value: function () {
      var _stop = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _context14.prev = 0;
              log.debug("stop - acquiring semaphore");
              _context14.next = 4;
              return this.adminSemaphore.acquire();
            case 4:
              log.debug("stop - acquired semaphore");
              if (!this.isUSBConnected) {
                _context14.next = 10;
                break;
              }
              _context14.next = 8;
              return this._serial.stop();
            case 8:
              _context14.next = 12;
              break;
            case 10:
              _context14.next = 12;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.Stop();
            case 12:
              return _context14.abrupt("return", true);
            case 15:
              _context14.prev = 15;
              _context14.t0 = _context14["catch"](0);
              throw _context14.t0;
            case 18:
              _context14.prev = 18;
              log.debug("stop - release semaphore");
              this.adminSemaphore.release();
              this.setTagDetection(true); // turn AprilTag detection back on
              return _context14.finish(18);
            case 23:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this, [[0, 15, 18, 23]]);
      }));
      function stop() {
        return _stop.apply(this, arguments);
      }
      return stop;
    }()
  }, {
    key: "runSystemProgram",
    value: function runSystemProgram(slot) {
      if (this.isUSBConnectedUserPort) {
        return this._serial.runSystemProgram(slot);
      } else {
        return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.runSystemProgram(slot);
      }
    }
  }, {
    key: "isProjectRunning",
    value: function isProjectRunning() {
      if (this.isUSBConnectedUserPort) {
        return this._serial.isProjectRunning();
      } else {
        return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.isProjectRunning();
      }
    }
    //#endregion program control

    //#region project downloads
  }, {
    key: "downloadProgram",
    value: function () {
      var _downloadProgram = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(slot, projectName, language, data, progressCallback) {
        var isBlocks, icon, ide, programInfo, DOWNLOAD_TIMEOUT, timeoutId, timeoutPromise, result;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              log.info("downloadProgram", slot, projectName, language);
              isBlocks = _AppInfo__WEBPACK_IMPORTED_MODULE_8__.appState.getAppState().mode === "Blocks";
              icon = isBlocks ? _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VEXcodeIcons.VEXcodeBlocks : _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VEXcodeIcons.VEXcodePython;
              ide = isBlocks ? "Blocks" : "Python";
              programInfo = {
                slot: slot,
                name: projectName,
                description: "",
                icon: icon,
                ide: ide,
                ports: [],
                triports: [],
                controller1: null,
                language: language
              };
              _context15.prev = 5;
              log.debug("downloadProgram - acquiring semaphore");
              _context15.next = 9;
              return this.adminSemaphore.acquire();
            case 9:
              log.debug("downloadProgram - acquired semaphore");
              if (!this.isUSBConnected) {
                _context15.next = 16;
                break;
              }
              _context15.next = 13;
              return this._serial.downloadProgram(data, programInfo, function (downloadData) {
                var progress = downloadData.progress,
                  state = downloadData.state;
                progressCallback({
                  progress: progress,
                  step: state
                });
              });
            case 13:
              return _context15.abrupt("return", _context15.sent);
            case 16:
              // Create a timeout promise to catch hanging downloads
              // this was done to prevent the app from hanging when the download hangs
              // If the download hangs for 10 seconds without progress, consider it failed
              DOWNLOAD_TIMEOUT = 10000; // 10 seconds
              timeoutPromise = new Promise(function (_, reject) {
                timeoutId = setTimeout(function () {
                  log.error("Download timeout - webble.downloadProgram did not complete within", DOWNLOAD_TIMEOUT, "ms");
                  reject(new Error("Download timeout - webble.downloadProgram did not complete"));
                }, DOWNLOAD_TIMEOUT);
              });
              _context15.prev = 18;
              _context15.next = 21;
              return Promise.race([_vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.downloadProgram(slot, projectName, language, data, progressCallback, ide), timeoutPromise]);
            case 21:
              result = _context15.sent;
              // If we get here, download completed successfully
              // Clear the timeout to prevent it from firing
              clearTimeout(timeoutId);

              // Check if result failed
              if (!(result === false)) {
                _context15.next = 26;
                break;
              }
              log.error("Download failed - webble.downloadProgram returned false");
              throw new Error("Download failed - webble.downloadProgram returned false");
            case 26:
              log.debug("Download completed successfully via BLE");
              return _context15.abrupt("return", result);
            case 30:
              _context15.prev = 30;
              _context15.t0 = _context15["catch"](18);
              // Clear timeout on error as well to prevent the app from hanging
              clearTimeout(timeoutId);
              throw _context15.t0;
            case 34:
              _context15.next = 40;
              break;
            case 36:
              _context15.prev = 36;
              _context15.t1 = _context15["catch"](5);
              log.error("Download error in AIMVexSerial:", _context15.t1, "Connection:", this.isUSBConnected ? "USB" : "BLE");
              throw _context15.t1;
            case 40:
              _context15.prev = 40;
              log.debug("downloadProgram - release semaphore");
              this.adminSemaphore.release();
              this.setTagDetection(true);
              return _context15.finish(40);
            case 45:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this, [[5, 36, 40, 45], [18, 30]]);
      }));
      function downloadProgram(_x14, _x15, _x16, _x17, _x18) {
        return _downloadProgram.apply(this, arguments);
      }
      return downloadProgram;
    }()
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
      function forcePythonVMDownload(_x19) {
        return _forcePythonVMDownload.apply(this, arguments);
      }
      return forcePythonVMDownload;
    }() //#endregion project downloads
    //#region file operations
  }, {
    key: "writeSoundFile",
    value: function () {
      var _writeSoundFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(filename, data, progressCallback) {
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              if (this.isConnected) {
                _context17.next = 2;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
            case 2:
              _context17.prev = 2;
              log.debug("saveSoundFile - acquiring semaphore");
              _context17.next = 6;
              return this.adminSemaphore.acquire();
            case 6:
              log.debug("saveSoundFile - acquired semaphore");
              if (!this.isUSBConnected) {
                _context17.next = 13;
                break;
              }
              _context17.next = 10;
              return this._serial.downloadSoundFile(filename, data, progressCallback);
            case 10:
              return _context17.abrupt("return", _context17.sent);
            case 13:
              _context17.next = 15;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.downloadSoundFileAIM(filename, data, progressCallback);
            case 15:
              return _context17.abrupt("return", _context17.sent);
            case 16:
              _context17.next = 21;
              break;
            case 18:
              _context17.prev = 18;
              _context17.t0 = _context17["catch"](2);
              throw _context17.t0;
            case 21:
              _context17.prev = 21;
              log.debug("saveSoundFile - release semaphore");
              this.adminSemaphore.release();
              return _context17.finish(21);
            case 25:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this, [[2, 18, 21, 25]]);
      }));
      function writeSoundFile(_x20, _x21, _x22) {
        return _writeSoundFile.apply(this, arguments);
      }
      return writeSoundFile;
    }()
  }, {
    key: "readSoundFile",
    value: function () {
      var _readSoundFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(filename, progressCallback) {
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              if (this.isConnected) {
                _context18.next = 2;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
            case 2:
              _context18.prev = 2;
              log.debug("readSoundFile - acquiring semaphore");
              _context18.next = 6;
              return this.adminSemaphore.acquire();
            case 6:
              log.debug("readSoundFile - acquired semaphore");
              if (!this.isUSBConnected) {
                _context18.next = 13;
                break;
              }
              _context18.next = 10;
              return this._serial.readFileFromRobot(filename, progressCallback, _VexSerialDevices_VexSerialDevice__WEBPACK_IMPORTED_MODULE_14__.VexSerialDevice.VID.AIM_SOUND);
            case 10:
              return _context18.abrupt("return", _context18.sent);
            case 13:
              _context18.next = 15;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.readSoundFileAIM(filename, progressCallback);
            case 15:
              return _context18.abrupt("return", _context18.sent);
            case 16:
              _context18.next = 21;
              break;
            case 18:
              _context18.prev = 18;
              _context18.t0 = _context18["catch"](2);
              throw _context18.t0;
            case 21:
              _context18.prev = 21;
              log.debug("readSoundFile - release semaphore");
              this.adminSemaphore.release();
              return _context18.finish(21);
            case 25:
            case "end":
              return _context18.stop();
          }
        }, _callee18, this, [[2, 18, 21, 25]]);
      }));
      function readSoundFile(_x23, _x24) {
        return _readSoundFile.apply(this, arguments);
      }
      return readSoundFile;
    }()
  }, {
    key: "deleteSoundFile",
    value: function () {
      var _deleteSoundFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(filename) {
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              if (this.isConnected) {
                _context19.next = 2;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
            case 2:
              _context19.prev = 2;
              log.debug("deleteSoundFile - acquiring semaphore");
              _context19.next = 6;
              return this.adminSemaphore.acquire();
            case 6:
              log.debug("deleteSoundFile - acquired semaphore");
              if (!this.isUSBConnected) {
                _context19.next = 13;
                break;
              }
              _context19.next = 10;
              return this._serial.deleteFile(filename, _VexSerialDevices_VexSerialDevice__WEBPACK_IMPORTED_MODULE_14__.VexSerialDevice.VID.AIM_SOUND);
            case 10:
              return _context19.abrupt("return", _context19.sent);
            case 13:
              _context19.next = 15;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.deleteSoundFileAIM(filename);
            case 15:
              return _context19.abrupt("return", _context19.sent);
            case 16:
              _context19.next = 21;
              break;
            case 18:
              _context19.prev = 18;
              _context19.t0 = _context19["catch"](2);
              throw _context19.t0;
            case 21:
              _context19.prev = 21;
              log.debug("deleteSoundFile - release semaphore");
              this.adminSemaphore.release();
              return _context19.finish(21);
            case 25:
            case "end":
              return _context19.stop();
          }
        }, _callee19, this, [[2, 18, 21, 25]]);
      }));
      function deleteSoundFile(_x25) {
        return _deleteSoundFile.apply(this, arguments);
      }
      return deleteSoundFile;
    }()
  }, {
    key: "listSoundFiles",
    value: function () {
      var _listSoundFiles = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
        var files;
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              if (this.isConnected) {
                _context20.next = 2;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
            case 2:
              _context20.prev = 2;
              log.debug("listSoundFiles - acquiring semaphore");
              _context20.next = 6;
              return this.adminSemaphore.acquire();
            case 6:
              log.debug("listSoundFiles - acquired semaphore");
              if (!this.isUSBConnected) {
                _context20.next = 14;
                break;
              }
              _context20.next = 10;
              return this._serial.getDirectory(_VexSerialDevices_VexSerialDevice__WEBPACK_IMPORTED_MODULE_14__.VexSerialDevice.VID.AIM_SOUND);
            case 10:
              files = _context20.sent;
              return _context20.abrupt("return", files.map(function (file) {
                return {
                  name: file.name,
                  size: file.size
                };
              }));
            case 14:
              _context20.next = 16;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.listSoundFiles();
            case 16:
              return _context20.abrupt("return", _context20.sent);
            case 17:
              _context20.next = 22;
              break;
            case 19:
              _context20.prev = 19;
              _context20.t0 = _context20["catch"](2);
              throw _context20.t0;
            case 22:
              _context20.prev = 22;
              log.debug("listSoundFiles - release semaphore");
              this.adminSemaphore.release();
              return _context20.finish(22);
            case 26:
            case "end":
              return _context20.stop();
          }
        }, _callee20, this, [[2, 19, 22, 26]]);
      }));
      function listSoundFiles() {
        return _listSoundFiles.apply(this, arguments);
      }
      return listSoundFiles;
    }()
  }, {
    key: "writeImageFile",
    value: function () {
      var _writeImageFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(filename, data, progressCallback) {
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              if (this.isConnected) {
                _context21.next = 2;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
            case 2:
              _context21.prev = 2;
              log.debug("saveImageFile - acquiring semaphore");
              _context21.next = 6;
              return this.adminSemaphore.acquire();
            case 6:
              log.debug("saveImageFile - acquired semaphore");
              if (!this.isUSBConnected) {
                _context21.next = 13;
                break;
              }
              _context21.next = 10;
              return this._serial.downloadImageFile(filename, data, progressCallback);
            case 10:
              return _context21.abrupt("return", _context21.sent);
            case 13:
              _context21.next = 15;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.downloadImageFileAIM(filename, data, progressCallback);
            case 15:
              return _context21.abrupt("return", _context21.sent);
            case 16:
              _context21.next = 21;
              break;
            case 18:
              _context21.prev = 18;
              _context21.t0 = _context21["catch"](2);
              throw _context21.t0;
            case 21:
              _context21.prev = 21;
              log.debug("saveImageFile - release semaphore");
              this.adminSemaphore.release();
              return _context21.finish(21);
            case 25:
            case "end":
              return _context21.stop();
          }
        }, _callee21, this, [[2, 18, 21, 25]]);
      }));
      function writeImageFile(_x26, _x27, _x28) {
        return _writeImageFile.apply(this, arguments);
      }
      return writeImageFile;
    }()
  }, {
    key: "readImageFile",
    value: function () {
      var _readImageFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(filename, progressCallback) {
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              if (this.isConnected) {
                _context22.next = 2;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
            case 2:
              _context22.prev = 2;
              log.debug("readImageFile - acquiring semaphore");
              _context22.next = 6;
              return this.adminSemaphore.acquire();
            case 6:
              log.debug("readImageFile - acquired semaphore");
              if (!this.isUSBConnected) {
                _context22.next = 13;
                break;
              }
              _context22.next = 10;
              return this._serial.readFileFromRobot(filename, progressCallback, _VexSerialDevices_VexSerialDevice__WEBPACK_IMPORTED_MODULE_14__.VexSerialDevice.VID.AIM_IMAGE);
            case 10:
              return _context22.abrupt("return", _context22.sent);
            case 13:
              _context22.next = 15;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.readImageFileAIM(filename, progressCallback);
            case 15:
              return _context22.abrupt("return", _context22.sent);
            case 16:
              _context22.next = 21;
              break;
            case 18:
              _context22.prev = 18;
              _context22.t0 = _context22["catch"](2);
              throw _context22.t0;
            case 21:
              _context22.prev = 21;
              log.debug("readImageFile - release semaphore");
              this.adminSemaphore.release();
              return _context22.finish(21);
            case 25:
            case "end":
              return _context22.stop();
          }
        }, _callee22, this, [[2, 18, 21, 25]]);
      }));
      function readImageFile(_x29, _x30) {
        return _readImageFile.apply(this, arguments);
      }
      return readImageFile;
    }()
  }, {
    key: "deleteImageFile",
    value: function () {
      var _deleteImageFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(filename) {
        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) switch (_context23.prev = _context23.next) {
            case 0:
              if (this.isConnected) {
                _context23.next = 2;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
            case 2:
              _context23.prev = 2;
              log.debug("deleteImageFile - acquiring semaphore");
              _context23.next = 6;
              return this.adminSemaphore.acquire();
            case 6:
              log.debug("deleteImageFile - acquired semaphore");
              if (!this.isUSBConnected) {
                _context23.next = 13;
                break;
              }
              _context23.next = 10;
              return this._serial.deleteFile(filename, _VexSerialDevices_VexSerialDevice__WEBPACK_IMPORTED_MODULE_14__.VexSerialDevice.VID.AIM_IMAGE);
            case 10:
              return _context23.abrupt("return", _context23.sent);
            case 13:
              _context23.next = 15;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.deleteImageFileAIM(filename);
            case 15:
              return _context23.abrupt("return", _context23.sent);
            case 16:
              _context23.next = 21;
              break;
            case 18:
              _context23.prev = 18;
              _context23.t0 = _context23["catch"](2);
              throw _context23.t0;
            case 21:
              _context23.prev = 21;
              log.debug("deleteImageFile - release semaphore");
              this.adminSemaphore.release();
              return _context23.finish(21);
            case 25:
            case "end":
              return _context23.stop();
          }
        }, _callee23, this, [[2, 18, 21, 25]]);
      }));
      function deleteImageFile(_x31) {
        return _deleteImageFile.apply(this, arguments);
      }
      return deleteImageFile;
    }()
  }, {
    key: "listImageFiles",
    value: function () {
      var _listImageFiles = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
        var files;
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              if (this.isConnected) {
                _context24.next = 2;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
            case 2:
              _context24.prev = 2;
              log.debug("listImageFiles - acquiring semaphore");
              _context24.next = 6;
              return this.adminSemaphore.acquire();
            case 6:
              log.debug("listImageFiles - acquired semaphore");
              if (!this.isUSBConnected) {
                _context24.next = 14;
                break;
              }
              _context24.next = 10;
              return this._serial.getDirectory(_VexSerialDevices_VexSerialDevice__WEBPACK_IMPORTED_MODULE_14__.VexSerialDevice.VID.AIM_IMAGE);
            case 10:
              files = _context24.sent;
              return _context24.abrupt("return", files.map(function (file) {
                return {
                  name: file.name,
                  size: file.size
                };
              }));
            case 14:
              _context24.next = 16;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.listImageFiles();
            case 16:
              return _context24.abrupt("return", _context24.sent);
            case 17:
              _context24.next = 22;
              break;
            case 19:
              _context24.prev = 19;
              _context24.t0 = _context24["catch"](2);
              throw _context24.t0;
            case 22:
              _context24.prev = 22;
              log.debug("listImageFiles - release semaphore");
              this.adminSemaphore.release();
              return _context24.finish(22);
            case 26:
            case "end":
              return _context24.stop();
          }
        }, _callee24, this, [[2, 19, 22, 26]]);
      }));
      function listImageFiles() {
        return _listImageFiles.apply(this, arguments);
      }
      return listImageFiles;
    }()
  }, {
    key: "executeScriptCommand",
    value: function executeScriptCommand(command, uuid) {
      var _this2 = this;
      if (!this.BLEConnected) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
      }
      log.debug("executeScriptCommand -", command, " - uuid:", uuid);
      return new Promise(function (resolve, reject) {
        _this2.ackHandler = function (ackSuccess, commandID) {
          resolve(ackSuccess && commandID === 0x20);
          _this2.ackHandler = null;
        };
        _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.sendCommand(command, uuid)["catch"](function () {
          _this2.ackHandler = null;
          reject(new Error("error sending command to device"));
        });
      });
    }
  }, {
    key: "executeScriptCommands",
    value: function executeScriptCommands(commands) {
      if (!this.BLEConnected) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
      }
      log.debug("executeScriptCommands -", commands);
      return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.sendCommandMultiple(commands).then(function () {
        log.debug("commands sent");
        return true;
      })["catch"](function (error) {
        log.error(error);
        throw new Error("error sending commands to device");
      });
    }
  }, {
    key: "stopScriptEngine",
    value: function stopScriptEngine() {
      if (!this.BLEConnected) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
      }
      log.debug("stopScriptEngine");
      return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.stopProgram();
    }
  }, {
    key: "setConfigPreset",
    value: function setConfigPreset(preset) {
      var _this3 = this;
      if (!this.BLEConnected) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
      }
      log.debug("setConfigPreset -", preset);
      return new Promise(function (resolve, reject) {
        _this3.ackHandler = function (ackSuccess, commandID) {
          resolve(ackSuccess && commandID === 0x50);
          _this3.ackHandler = null;
        };
        _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.sendRobotConfigPreset(preset)["catch"](function () {
          _this3.ackHandler = null;
          reject(new Error("error sending config to device"));
        });
      });
    }
  }, {
    key: "setConfigForPort",
    value: function setConfigForPort(port, deviceType, flags) {
      var _this4 = this;
      var limitPct = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 66;
      var limitMax = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 750;
      if (!this.BLEConnected) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
      }
      log.debug("setConfigForPort -", port, deviceType, flags, limitPct, limitMax);
      return new Promise(function (resolve, reject) {
        _this4.ackHandler = function (ackSuccess, commandID) {
          resolve(ackSuccess && commandID === 0x51);
          _this4.ackHandler = null;
        };
        _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.setPortConfig(port, deviceType, flags, limitPct, limitMax)["catch"](function () {
          _this4.ackHandler = null;
          reject(new Error("error sending config to device"));
        });
      });
    }
  }, {
    key: "setEyeSensorMode",
    value: function setEyeSensorMode(mode) {
      if (!this.BLEConnected) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
      }
      log.debug("setEyeSensorMode -", mode);
      return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.SetSensorMode(mode).then(function () {
        return true;
      })["catch"](function () {
        throw new Error("error sending sensor mode to device");
      });
    }
  }, {
    key: "clearPortEvents",
    value: function clearPortEvents(port) {
      var _this5 = this;
      if (!this.BLEConnected) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
      }
      log.debug("clearPortEvents -", port);
      return new Promise(function (resolve, reject) {
        _this5.ackHandler = function (ackSuccess, commandID) {
          resolve(ackSuccess && commandID === 0x21);
          _this5.ackHandler = null;
        };
        _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.clearPortEvents(port)["catch"](function (err) {
          _this5.ackHandler = null;
          log.error("error clearing port event");
          log.error(err);
          reject(new Error("error clearing port event"));
        });
      });
    }
    //#endregion script commands

    //#region remote control
  }, {
    key: "sendControllerButton",
    value: function () {
      var _sendControllerButton = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25(command, buttonID) {
        var whenPressed,
          _args25 = arguments;
        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
          while (1) switch (_context25.prev = _context25.next) {
            case 0:
              whenPressed = _args25.length > 2 && _args25[2] !== undefined ? _args25[2] : true;
              log.debug("sendControllerButton - command", command, "buttonID", buttonID, "whenPressed", whenPressed);
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 3:
            case "end":
              return _context25.stop();
          }
        }, _callee25);
      }));
      function sendControllerButton(_x32, _x33) {
        return _sendControllerButton.apply(this, arguments);
      }
      return sendControllerButton;
    }()
  }, {
    key: "sendControllerJoystickPreset",
    value: function () {
      var _sendControllerJoystickPreset = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(newType) {
        var driveSensi,
          turnSensi,
          _args26 = arguments;
        return _regeneratorRuntime().wrap(function _callee26$(_context26) {
          while (1) switch (_context26.prev = _context26.next) {
            case 0:
              driveSensi = _args26.length > 1 && _args26[1] !== undefined ? _args26[1] : 50;
              turnSensi = _args26.length > 2 && _args26[2] !== undefined ? _args26[2] : 50;
              log.debug("sendControllerJoystickPreset - newType", newType, "driveSensi", driveSensi, "turnSensi", turnSensi);
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 4:
            case "end":
              return _context26.stop();
          }
        }, _callee26);
      }));
      function sendControllerJoystickPreset(_x34) {
        return _sendControllerJoystickPreset.apply(this, arguments);
      }
      return sendControllerJoystickPreset;
    }()
  }, {
    key: "saveControllerConfig",
    value: function saveControllerConfig() {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "sendControllerValues",
    value: function () {
      var _sendControllerValues = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27(leftX, leftY, rightX, rightY, buttons) {
        var _this6 = this;
        var prom;
        return _regeneratorRuntime().wrap(function _callee27$(_context27) {
          while (1) switch (_context27.prev = _context27.next) {
            case 0:
              _context27.next = 2;
              return new Promise(function (resolve, reject) {
                var bitMap = _this6.getButtonBitMap(buttons);
                _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.setControlControlValues(leftX, leftY, rightX, rightY, bitMap).then(function () {
                  resolve(true);
                })["catch"](function (error) {
                  log.error(error);
                  reject("error sending command to device");
                });
              })["catch"](function (err) {
                throw new Error(err);
              });
            case 2:
              prom = _context27.sent;
              return _context27.abrupt("return", prom);
            case 4:
            case "end":
              return _context27.stop();
          }
        }, _callee27);
      }));
      function sendControllerValues(_x35, _x36, _x37, _x38, _x39) {
        return _sendControllerValues.apply(this, arguments);
      }
      return sendControllerValues;
    }()
  }, {
    key: "getButtonBitMap",
    value: function getButtonBitMap(buttons) {
      var bitMap = 0;
      for (var i = 0; i < buttons.length; i++) {
        var bit = buttons[i];
        var newBit = (bit ? 1 : 0) << i;
        bitMap = bitMap | newBit;
      }
      return bitMap;
    }
    //#endregion remote control

    //#region firmware
  }, {
    key: "updateFirmware",
    value: function () {
      var _updateFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28(progress) {
        var updateProgressEvent, requestConnectEvent, continueReconnectResolver, reconnectCallback, progressHandler, reconnectHandler, msg1Key, msg2Key, platform;
        return _regeneratorRuntime().wrap(function _callee28$(_context28) {
          while (1) switch (_context28.prev = _context28.next) {
            case 0:
              if (this.isUSBConnected) {
                _context28.next = 3;
                break;
              }
              log.warn("updateFirmware - aborting, not connected via USB");
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("updateFirmware");
            case 3:
              if (!this.isBLEConnected) {
                _context28.next = 8;
                break;
              }
              log.info("updateFirmware - disconnecting from BLE before the update");
              _context28.next = 7;
              return this.closeConnection(_types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE);
            case 7:
              log.info("updateFirmware - BLE connection closed");
            case 8:
              _context28.prev = 8;
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
              _widget_Modal__WEBPACK_IMPORTED_MODULE_6__.MODALCONTROL.showWebBrainUpdateProgress(updateProgressEvent, requestConnectEvent, reconnectCallback);
              progressHandler = function progressHandler(state, percent, msg) {
                log.debug("progressHandler:", percent, _VexSerialDevices_VexSerialDevice__WEBPACK_IMPORTED_MODULE_14__.VEXAIMUpdateStates[state], msg);
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
              _context28.next = 19;
              return (0,_helpers__WEBPACK_IMPORTED_MODULE_13__.waitms)(5);
            case 19:
              _context28.prev = 19;
              log.debug("updateFirmware - acquiring semaphore");
              _context28.next = 23;
              return this.adminSemaphore.acquire();
            case 23:
              log.debug("updateFirmware - acquired semaphore");
              _context28.next = 26;
              return this._serial.updateFirmware(progressHandler, reconnectHandler);
            case 26:
              // Rebooted the robot after firmware update completes using serial. We need to clean up BLE connection flags too now.
              this.onGO123BLEDeviceDisconnected();
              if (_platformInfo__WEBPACK_IMPORTED_MODULE_20__.PlatformIsElectron) {
                setTimeout(function () {
                  _widget_Modal__WEBPACK_IMPORTED_MODULE_6__.MODALCONTROL.close();
                }, 10000);
              }
              return _context28.abrupt("return", true);
            case 31:
              _context28.prev = 31;
              _context28.t0 = _context28["catch"](19);
              throw _context28.t0;
            case 34:
              _context28.prev = 34;
              log.debug("updateFirmware - release semaphore");
              this.adminSemaphore.release();
              return _context28.finish(34);
            case 38:
              _context28.next = 50;
              break;
            case 40:
              _context28.prev = 40;
              _context28.t1 = _context28["catch"](8);
              log.error(_context28.t1);
              _widget_Modal__WEBPACK_IMPORTED_MODULE_6__.MODALCONTROL.close();
              msg1Key = "WebSerial Update Failed - unknown error";
              msg2Key = "WebSerial Update Failed - retry message";
              if (_context28.t1 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.WebSerialUnsupportedError) {
                msg1Key = "WebSerial Update Failed - webserial not supported";
              } else if (_context28.t1 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.NoBrainConnectedError) {
                msg1Key = "WebSerial Update Failed - no device";
              } else if (_context28.t1 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.OperationNotSupportedError) {
                msg1Key = "WebSerial Update Failed - not supported";
              } else if (_context28.t1 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.ErrorUpdatingBrainGolden) {
                msg1Key = "WebSerial Update Failed - recovery update failed";
              } else if (_context28.t1 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.ErrorUpdatingBrainBoot) {
                msg1Key = "WebSerial Update Failed - main update failed";
              } else if (_context28.t1 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.ErrorUpdatingAIMRadioApplication) {
                msg1Key = "WebSerial Update Failed - AIM radio update failed";
              } else if (_context28.t1 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.ErrorUpdatingAIMRadioBootloader) {
                msg1Key = "WebSerial Update Failed - AIM radio update failed";
              } else if (_context28.t1 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.ErrorUpdatingAIMRadioPartitionTable) {
                msg1Key = "WebSerial Update Failed - AIM radio update failed";
              }
              platform = _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t(_targetPlatform__WEBPACK_IMPORTED_MODULE_12__.currentTargetName);
              _widget_Modal__WEBPACK_IMPORTED_MODULE_6__.MODALCONTROL.showWebSerialUpdateError(_i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t(msg1Key, {
                platform: platform,
                device: platform === "AIM" ? _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t("Robot") : _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t("Brain")
              }), msg2Key ? _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t(msg2Key, {
                platform: platform
              }) : null, "https://kb.vex.com/hc/en-us/articles/40948725854612-Troubleshooting-Connecting-to-Web-based-VEXcode-AIM");
              return _context28.abrupt("return", false);
            case 50:
            case "end":
              return _context28.stop();
          }
        }, _callee28, this, [[8, 40], [19, 31, 34, 38]]);
      }));
      function updateFirmware(_x40) {
        return _updateFirmware.apply(this, arguments);
      }
      return updateFirmware;
    }()
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
              this.triggerBLEConnectionStateChange();
            case 13:
            case "end":
              return _context29.stop();
          }
        }, _callee29, this);
      }));
      function checkDeviceFirmware(_x41) {
        return _checkDeviceFirmware.apply(this, arguments);
      }
      return checkDeviceFirmware;
    }()
  }, {
    key: "setFirmwareChannel",
    value: function () {
      var _setFirmwareChannel = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee30(channel) {
        return _regeneratorRuntime().wrap(function _callee30$(_context30) {
          while (1) switch (_context30.prev = _context30.next) {
            case 0:
              _context30.next = 2;
              return this._serial.setFirmwareChannel(channel);
            case 2:
              this.triggerRobotInfoUpdate();
            case 3:
            case "end":
              return _context30.stop();
          }
        }, _callee30, this);
      }));
      function setFirmwareChannel(_x42) {
        return _setFirmwareChannel.apply(this, arguments);
      }
      return setFirmwareChannel;
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
      var _openConnectionUserPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee31(connectionType) {
        return _regeneratorRuntime().wrap(function _callee31$(_context31) {
          while (1) switch (_context31.prev = _context31.next) {
            case 0:
              return _context31.abrupt("return", this._serial.openConnectionUserPort());
            case 1:
            case "end":
              return _context31.stop();
          }
        }, _callee31, this);
      }));
      function openConnectionUserPort(_x43) {
        return _openConnectionUserPort.apply(this, arguments);
      }
      return openConnectionUserPort;
    }()
  }, {
    key: "closeConnectionUserPort",
    value: function () {
      var _closeConnectionUserPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee32(connectionType) {
        return _regeneratorRuntime().wrap(function _callee32$(_context32) {
          while (1) switch (_context32.prev = _context32.next) {
            case 0:
              _context32.next = 2;
              return this._serial.closeConnectionUserPort();
            case 2:
              return _context32.abrupt("return", true);
            case 3:
            case "end":
              return _context32.stop();
          }
        }, _callee32, this);
      }));
      function closeConnectionUserPort(_x44) {
        return _closeConnectionUserPort.apply(this, arguments);
      }
      return closeConnectionUserPort;
    }()
    /**
     * This is the connection state of the USB serial connection for the Admin port
     */
  }, {
    key: "connectionStateUserPortUSB",
    get: function get() {
      var state = this._serial.connectionStateUserPort;
      var isConnected = this.isBrainConnected() && state === _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VexSerialDeviceConnectionStates.Connected;
      return isConnected ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected;
    }

    /**
     * This is the connection state of the BLE connection. Unlike the USB connection,
     * if this is connected, everything is accessible.
     */
  }, {
    key: "connectionStateUserPortBLE",
    get: function get() {
      // casting to any to avoid warning about type not overlapping when it
      // actually does... not ideal, but there is no reason to manually convert
      // it just to avoid a incorrect warning.
      return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.getConnectionState();
    }
  }, {
    key: "sendDataUserPort",
    value: function () {
      var _sendDataUserPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee33(data) {
        var isConnected;
        return _regeneratorRuntime().wrap(function _callee33$(_context33) {
          while (1) switch (_context33.prev = _context33.next) {
            case 0:
              isConnected = this.isUSBConnectedUserPort || this.isBLEConnectedUserPort;
              if (isConnected) {
                _context33.next = 3;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError("sendDataUserPort requires connection to the user port");
            case 3:
              _context33.prev = 3;
              log.debug("sendDataUserPort - acquiring semaphore");
              _context33.next = 7;
              return this.adminSemaphore.acquire();
            case 7:
              log.debug("sendDataUserPort - acquired semaphore");

              // make sure we have a program running before sending data
              _context33.next = 10;
              return this.isProjectRunning();
            case 10:
              if (_context33.sent) {
                _context33.next = 16;
                break;
              }
              // start the REPL program if no program is running
              log.debug("sendDataUserPort - starting REPL program");
              _context33.next = 14;
              return this.runSystemProgram(2);
            case 14:
              _context33.next = 16;
              return (0,_helpers__WEBPACK_IMPORTED_MODULE_13__.waitms)(100);
            case 16:
              if (this.isUSBConnectedUserPort) {
                this._serial.sendDataUserPort(data);
              } else {
                _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.sendDataUserPort(data);
              }
              _context33.next = 22;
              break;
            case 19:
              _context33.prev = 19;
              _context33.t0 = _context33["catch"](3);
              throw _context33.t0;
            case 22:
              _context33.prev = 22;
              log.debug("sendDataUserPort - release semaphore");
              this.adminSemaphore.release();
              return _context33.finish(22);
            case 26:
            case "end":
              return _context33.stop();
          }
        }, _callee33, this, [[3, 19, 22, 26]]);
      }));
      function sendDataUserPort(_x45) {
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

    /**
     * This should only ever be called from the USB or BLE connection update
     * trigger methods. This actually sends out the combined status change event.
     * Note that while this will get sent out if either connection status actually
     * changes, the event might get called with the same "new" status. This can
     * happen when a parallel connection is being made. for example, if the USB
     * connection state is "connected", but the BLE state change to scanning,
     * we are still connected to the robot so the overall state is still connected.
     */
  }, {
    key: "triggerConnectionUpdateUserPort",
    value: function triggerConnectionUpdateUserPort() {
      var newState = this.getConnectionStateUserPort();
      log.debug("new overall connection state:", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState[newState]);
      this.fireEvent("connectionStateChangeUserPort", newState);
      _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.ConnectionStateChangeUserPort", newState);
    }

    //#endregion User Port comms

    //#region events
  }, {
    key: "onHardwareTargetChange",
    value: function onHardwareTargetChange(newTarget) {
      // this does not do anything for AIM....
    }

    /**
     * this should get called any time the cached sensor values need to be reset.
     *
     * for example:
     * * when connecting to a brain
     * * when a connection is lost
     */
  }, {
    key: "resetStatusValues",
    value: function resetStatusValues() {
      // TODO: implement this when we have sensor values
      // SensorHelpers.resetStatusValues();
    }
    //#endregion

    //#region native -> webapp events
  }, {
    key: "onBLEDeviceDiscovered",
    value: function onBLEDeviceDiscovered(name, serial, product, mode, version, rssi, battery) {
      var _this7 = this;
      var canUpdate = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;
      var cpu0 = arguments.length > 8 ? arguments[8] : undefined;
      var cpu1 = arguments.length > 9 ? arguments[9] : undefined;
      log.debug("onBLEDeviceDiscovered", name, serial, product, mode, version, rssi, battery);
      var versionObject = _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString(version);
      var isBootloadMode = mode === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode.DFU;
      var robotFirmware = isBootloadMode ? undefined : versionObject;
      var robotBootloader = isBootloadMode ? versionObject : undefined;
      this.processDiscoveredDevice(name, serial, product, mode, versionObject, rssi, battery, canUpdate, cpu0, cpu1);
      if (this.BLEConnectionTargetDevice && this.BLEConnectionTargetDevice.serial === serial) {
        var _this$BLEConnectionTa, _this$BLEConnectionTa2;
        if (this.BLEConnectionTargetDevice.mode !== mode || robotFirmware && ((_this$BLEConnectionTa = this.BLEConnectionTargetDevice.robotFirmwareVersion) === null || _this$BLEConnectionTa === void 0 ? void 0 : _this$BLEConnectionTa.compare(robotFirmware)) !== 0 || robotBootloader && ((_this$BLEConnectionTa2 = this.BLEConnectionTargetDevice.robotBootloaderVersion) === null || _this$BLEConnectionTa2 === void 0 ? void 0 : _this$BLEConnectionTa2.compare(robotBootloader)) !== 0) {
          log.debug("updating connection target");
          this.BLEConnectionTargetDevice.mode = mode;
          this.BLEConnectionTargetDevice.robotFirmwareVersion = robotFirmware;
          this.BLEConnectionTargetDevice.robotBootloaderVersion = robotBootloader;
          if (cpu0) {
            this.BLEConnectionTargetDevice.robotFirmwareVersionCPU0 = _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString(cpu0);
          }
          if (cpu1) {
            this.BLEConnectionTargetDevice.robotFirmwareVersionCPU1 = _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString(cpu1);
          }
          log.debug("setup for FW/BL recheck after info update");
          this.BLEConnectionTargetDevice.robotNeedsFirmwareUpdate = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure;
          this.BLEConnectionTargetDevice.robotNeedsBootloaderUpdate = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure;
          this.checkDeviceFirmware(this.BLEConnectionTargetDevice).then(function () {
            _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.DeviceListUpdate", _this7.BLEDiscoveredDevices);
          });
        }
        return;
      }
      log.debug("initial targetDevice:", this.BLETargetDevice);
      if (this.BLETargetDevice && this.BLETargetDevice.serial === serial) {
        this.BLETargetDevice.name = name;
        this.BLETargetDevice.canUpdate = canUpdate;
        log.debug("updated connected device to", this.BLETargetDevice);
        this.triggerRobotInfoUpdate();
        return;
      }
    }
  }, {
    key: "processDiscoveredDevice",
    value: function processDiscoveredDevice(name, serial, product, mode, version, rssi, battery, canUpdate, cpu0, cpu1) {
      var _this8 = this;
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
          if (cpu0) {
            recheckVersions = true;
            this.BLEDiscoveredDevices[i].robotFirmwareVersionCPU0 = _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString(cpu0);
          }
          if (cpu1) {
            recheckVersions = true;
            this.BLEDiscoveredDevices[i].robotFirmwareVersionCPU1 = _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString(cpu1);
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
              _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.DeviceListUpdate", _this8.BLEDiscoveredDevices);
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
        if (cpu0) {
          tmpDev.robotFirmwareVersionCPU0 = _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString(cpu0);
        }
        if (cpu1) {
          tmpDev.robotFirmwareVersionCPU1 = _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString(cpu1);
        }
        log.debug("adding new device", tmpDev);
        this.checkDeviceFirmware(tmpDev).then(function () {
          _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.DeviceListUpdate", _this8.BLEDiscoveredDevices);
        });
        this.BLEDiscoveredDevices.push(tmpDev);
      }
      _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.DeviceListUpdate", this.BLEDiscoveredDevices);
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
      _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.DeviceListUpdate", this.BLEDiscoveredDevices);
    }
  }, {
    key: "onBLEDeviceConnected",
    value: function () {
      var _onBLEDeviceConnected = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee34(name, serial, version, mode, canUpdate, cpu0, cpu1) {
        var i, recheckVersions, cpu0Version, cpu1Version;
        return _regeneratorRuntime().wrap(function _callee34$(_context34) {
          while (1) switch (_context34.prev = _context34.next) {
            case 0:
              log.info("onBLEDeviceConnected");
              if (this.BLEConnectionResolver) {
                this.BLEConnected = true;
                this.resetStatusValues();
                this.BLEConnectionResolver.resolve(true);
              }
              this.BLEConnectionResolver = null;
              this.BLEConnected = true;
              this.resetStatusValues();
              if (!(!this.BLEConnectionTargetDevice || this.BLEConnectionTargetDevice.serial !== serial)) {
                _context34.next = 14;
                break;
              }
              i = 0;
            case 7:
              if (!(i < this.BLEDiscoveredDevices.length)) {
                _context34.next = 14;
                break;
              }
              if (!(this.BLEDiscoveredDevices[i].serial === serial)) {
                _context34.next = 11;
                break;
              }
              this.BLEConnectionTargetDevice = this.BLEDiscoveredDevices[i];
              return _context34.abrupt("break", 14);
            case 11:
              i++;
              _context34.next = 7;
              break;
            case 14:
              log.debug("old targetDevice", this.BLETargetDevice);
              log.debug("connectionTargetDevice", this.BLEConnectionTargetDevice);
              this.BLETargetDevice = Object.assign({}, this.BLEConnectionTargetDevice);
              this.BLETargetDevice.canUpdate = canUpdate;
              this.BLETargetDevice.mode = mode;
              recheckVersions = false;
              if (cpu0) {
                cpu0Version = _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString(cpu0);
                if (!this.BLETargetDevice.robotFirmwareVersionCPU0 || this.BLETargetDevice.robotFirmwareVersionCPU0.compare(cpu0Version) !== 0) {
                  recheckVersions = true;
                }
                this.BLETargetDevice.robotFirmwareVersionCPU0 = cpu0Version;
              }
              if (cpu1) {
                cpu1Version = _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString(cpu1);
                if (!this.BLETargetDevice.robotFirmwareVersionCPU1 || this.BLETargetDevice.robotFirmwareVersionCPU1.compare(cpu1Version) !== 0) {
                  recheckVersions = true;
                }
                this.BLETargetDevice.robotFirmwareVersionCPU1 = cpu1Version;
              }
              log.debug("connectedDevice:", this.BLETargetDevice);
              this.triggerBLEConnectionStateChange();
              log.info("onGOBLEDeviceConnected", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode[mode]);
              this.triggerRobotInfoUpdate();

              // this.checkAndUpdateDevice();
              if (recheckVersions) {
                log.debug("setup for FW/BL recheck after connection");
                this.BLETargetDevice.robotNeedsFirmwareUpdate = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure;
                this.BLETargetDevice.robotNeedsBootloaderUpdate = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure;
                this.checkDeviceFirmware(this.BLETargetDevice);
              }
            case 27:
            case "end":
              return _context34.stop();
          }
        }, _callee34, this);
      }));
      function onBLEDeviceConnected(_x46, _x47, _x48, _x49, _x50, _x51, _x52) {
        return _onBLEDeviceConnected.apply(this, arguments);
      }
      return onBLEDeviceConnected;
    }()
  }, {
    key: "onBLEDeviceBLUpdated",
    value: function () {
      var _onBLEDeviceBLUpdated = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee35(name, serial, version, mode, canUpdate, cpu0, cpu1) {
        return _regeneratorRuntime().wrap(function _callee35$(_context35) {
          while (1) switch (_context35.prev = _context35.next) {
            case 0:
              this.resetStatusValues();
              this.BLETargetDevice.name = name;
              this.BLETargetDevice.robotFirmwareVersion = _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString(version);
              this.BLETargetDevice.mode = mode;
              if (cpu0) {
                this.BLETargetDevice.robotFirmwareVersionCPU0 = _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString(cpu0);
              }
              if (cpu1) {
                this.BLETargetDevice.robotFirmwareVersionCPU1 = _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString(cpu1);
              }
              log.debug("targetDevice:", this.BLETargetDevice);
              this.triggerBLEConnectionStateChange();
              log.info("onGOBLEDeviceConnected", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode[mode]);
              this.triggerRobotInfoUpdate();
            case 10:
            case "end":
              return _context35.stop();
          }
        }, _callee35, this);
      }));
      function onBLEDeviceBLUpdated(_x53, _x54, _x55, _x56, _x57, _x58, _x59) {
        return _onBLEDeviceBLUpdated.apply(this, arguments);
      }
      return onBLEDeviceBLUpdated;
    }()
  }, {
    key: "onGO123BLEDeviceDisconnected",
    value: function onGO123BLEDeviceDisconnected() {
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
        log.info("onGOBLEDeviceDisconnected");
      }
    }

    //#region status events
  }, {
    key: "onAIMStatusUpdate",
    value: function onAIMStatusUpdate(status) {
      // log.debug("onAIMStatusUpdate", JSON.stringify(status));
      _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.AIMStatusUpdate", status);
    }
  }, {
    key: "onWebBLEConnectionStateChange",
    value: function onWebBLEConnectionStateChange(state) {
      log.debug("onWebBLEConnectionStateChange", this.firstUpdateAfterConnect);
      if (state === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.BrainConnectionState.Connected) {
        if (!this.alreadyConnected) {
          this.alreadyConnected = true;
          this.firstUpdateAfterConnect = true;
        }
      } else if (state === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.BrainConnectionState.Connecting || state === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.BrainConnectionState.Scanning) {
        this.alreadyConnected = false;
        this.firstUpdateAfterConnect = false;
        this.onGO123BLEDeviceDisconnected();
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
      if (_vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.getConnectionState() === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.BrainConnectionState.Connected && this.firstUpdateAfterConnect) {
        this.firstUpdateAfterConnect = false;
        this.onBLEDeviceConnected(device.name, device.deviceIDValue, appVersion, device.deviceMode, device.supportFWUpdate, device.appVersion.getString(), device.appVersion2.getString());
      }
      if (_vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.getConnectionState() === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.BrainConnectionState.Connected) {
        this.onBLEDeviceBLUpdated(device.name, device.deviceIDValue, appVersion, device.deviceMode, device.supportFWUpdate, device.appVersion.getString(), device.appVersion2.getString());
      }
    }
  }, {
    key: "onackReceived",
    value: function onackReceived(command, ackStatus, data) {
      log.warn("onackReceived?");
    }
  }, {
    key: "onAIMCommandStatus",
    value: function onAIMCommandStatus(status) {
      log.debug("onAIMCommandStatus", JSON.stringify(status));
      var ackStatus = status.ackByte;
      log.debug("command status received for", status.cmdId.toString(16), "with status", _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.VEXAckValue[ackStatus]);
      if (this.ackHandler) {
        this.ackHandler(ackStatus === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.VEXAckValue.success, status.cmdType);
      }
    }
  }, {
    key: "onAIMAIVisionStatus",
    value: function onAIMAIVisionStatus(status) {
      var detectedObjects = status.ObjectsDetected;
      var objects = [];
      for (var i = 0; i < detectedObjects.length; i++) {
        var obj = detectedObjects[i];
        if (obj.type === _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VexAIObjectTypes.AI2CAM_DETECT_TYPE_COLOR || obj.type === _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VexAIObjectTypes.AI2CAM_DETECT_TYPE_CODE) {
          // process colors/codes
          var objectDetails = obj.object;
          objects.push({
            id: obj.id,
            type: obj.type,
            location: {
              xPos: objectDetails.xoffset,
              yPos: objectDetails.yoffset,
              width: objectDetails.width,
              height: objectDetails.height
            },
            angle: objectDetails.angle
          });
        } else if (obj.type === _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VexAIObjectTypes.AI2CAM_DETECT_TYPE_TAG) {
          // process april tags
          var _objectDetails = obj.object;
          objects.push({
            id: obj.id,
            type: obj.type,
            location: {
              x0: _objectDetails.x0,
              y0: _objectDetails.y0,
              x1: _objectDetails.x1,
              y1: _objectDetails.y1,
              x2: _objectDetails.x2,
              y2: _objectDetails.y2,
              x3: _objectDetails.x3,
              y3: _objectDetails.y3
            }
          });
        } else if (obj.type === _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VexAIObjectTypes.AI2CAM_DETECT_TYPE_OBJECT) {
          // process AI objects
          var _objectDetails2 = obj.object;
          objects.push({
            id: obj.id,
            type: obj.type,
            location: {
              xPos: _objectDetails2.xoffset,
              yPos: _objectDetails2.yoffset,
              width: _objectDetails2.width,
              height: _objectDetails2.height
            },
            score: _objectDetails2.score
          });
        } else {
          log.warn("onAIMAIVisionStatus: unknown object type", obj);
        }
      }

      // log.warn("sending AIMVisionObjectsUpdate event", objects);

      _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.AIMVisionObjectsUpdate", objects);
    }
    //#endregion webBLE event wrappers

    //#region low-level logger
  }, {
    key: "getLowLevelLogger",
    value: function getLowLevelLogger() {
      // TODO: actually get this part working
      // return this._serial.logger;
      // return webble.Logger as any as typeof logger;
      return null;
    }
    //#endregion low-level logger

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
      var _displayLockCodePrompt = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee37(deviceID) {
        var _this9 = this;
        var recentBrain, brainKey, currKey;
        return _regeneratorRuntime().wrap(function _callee37$(_context37) {
          while (1) switch (_context37.prev = _context37.next) {
            case 0:
              log.debug("displayLockCodePrompt");
              recentBrain = _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_18__.storageInterface.readKey(_brainInfoStore__WEBPACK_IMPORTED_MODULE_19__.brainRecentKey);
              if (recentBrain && recentBrain !== deviceID.toString()) {
                log.debug("displayLockCodePrompt - clearing key for previous robot as it does not match the connection target");
                _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_18__.storageInterface.clearKey(BRAIN_LOCK_KEY + recentBrain);
              }

              // get the previous lock code if it exists so that we can try to skip the prompt
              brainKey = BRAIN_LOCK_KEY + deviceID;
              currKey = _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_18__.storageInterface.readKey(brainKey);
              log.debug("displayLockCodePrompt - target:", this.BLETargetDevice);
              log.debug("displayLockCodePrompt - brain key: ", brainKey);
              log.debug("displayLockCodePrompt - current key: " + currKey);
              if (currKey) {
                _context37.next = 13;
                break;
              }
              // we don't have a previous code for the target, so we need to prompt the user
              _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.ShowLockCodeOnBrain(true);
              _widget_Modal__WEBPACK_IMPORTED_MODULE_6__.MODALCONTROL.showBrainLockCodePrompt(this.lockCodeValidator, /*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee36(result) {
                  return _regeneratorRuntime().wrap(function _callee36$(_context36) {
                    while (1) switch (_context36.prev = _context36.next) {
                      case 0:
                        if (!result) {
                          _context36.next = 12;
                          break;
                        }
                        _context36.next = 3;
                        return _this9.unlockBrain(result);
                      case 3:
                        if (!_context36.sent) {
                          _context36.next = 9;
                          break;
                        }
                        _context36.next = 6;
                        return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.ShowLockCodeOnBrain(false);
                      case 6:
                        _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_18__.storageInterface.writeKey(brainKey, result);
                        _context36.next = 10;
                        break;
                      case 9:
                        _this9.displayLockCodePrompt(deviceID);
                      case 10:
                        _context36.next = 15;
                        break;
                      case 12:
                        _context36.next = 14;
                        return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_17__.ShowLockCodeOnBrain(false);
                      case 14:
                        _this9.closeConnection(_types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE);
                      case 15:
                      case "end":
                        return _context36.stop();
                    }
                  }, _callee36);
                }));
                return function (_x61) {
                  return _ref.apply(this, arguments);
                };
              }());
              _context37.next = 23;
              break;
            case 13:
              log.debug("displayLockCodePrompt - key found and sending that automatically");
              _context37.next = 16;
              return this.unlockBrain(currKey);
            case 16:
              if (!_context37.sent) {
                _context37.next = 20;
                break;
              }
              log.debug("displayLockCodePrompt - robot unlocked with saved code");
              _context37.next = 23;
              break;
            case 20:
              log.warn("displayLockCodePrompt - saved key did not unlock robot");
              _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_18__.storageInterface.clearKey(brainKey);
              this.displayLockCodePrompt(deviceID);
            case 23:
            case "end":
              return _context37.stop();
          }
        }, _callee37, this);
      }));
      function displayLockCodePrompt(_x60) {
        return _displayLockCodePrompt.apply(this, arguments);
      }
      return displayLockCodePrompt;
    }() //#endregion misc
    )
  }]);
}(_AIMInterface__WEBPACK_IMPORTED_MODULE_3__.AIMInterface);


/***/ }),

/***/ "./src/HardwareInterface/DownloadPlatform/VexIntegratedVisionSerial.ts":
/*!*****************************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/VexIntegratedVisionSerial.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexIntegratedVisionSerial: () => (/* binding */ VexIntegratedVisionSerial)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VexSerialDevices_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VexSerialDevices/enums */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/enums.ts");
/* harmony import */ var _vexcode_robot_config_dist_AIVisionUtility_AIVisionSerialInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vexcode/robot-config/dist/AIVisionUtility/AIVisionSerialInterface */ "./node_modules/@vexcode/robot-config/dist/AIVisionUtility/AIVisionSerialInterface.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("VexIntegratedVisionSerial");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();
log.setHistoryLogger("HWInterface");

// tslint:disable: member-ordering

// interface types/enums

// hardware interface imports


// global imports

// package imports


// AIM AI Vision Dummy Class
var VexIntegratedVisionSerial = /*#__PURE__*/function (_AIVisionSerialInterf) {
  // TODO: change this to work over BLE as well?
  function VexIntegratedVisionSerial(serial, semaphore) {
    var _this;
    _classCallCheck(this, VexIntegratedVisionSerial);
    _this = _callSuper(this, VexIntegratedVisionSerial);
    _this.serial = serial;
    _this.semaphore = semaphore;
    return _this;
  }
  _inherits(VexIntegratedVisionSerial, _AIVisionSerialInterf);
  return _createClass(VexIntegratedVisionSerial, [{
    key: "requiresManualConnection",
    get: function get() {
      return false;
    }
  }, {
    key: "isConnected",
    get: function get() {
      log.debug("isConnected");
      if (this.serial.connectionState === _VexSerialDevices_enums__WEBPACK_IMPORTED_MODULE_1__.VexSerialDeviceConnectionStates.Connected) {
        log.debug("isConnected true");
        return true;
      } else {
        log.debug("isConnected false");
        return false;
      }
    }
  }, {
    key: "openConnection",
    value: function openConnection() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "closeConnection",
    value: function closeConnection() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "getSensorFirmwareVersion",
    value: function getSensorFirmwareVersion() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "_updateFirmware",
    value: function _updateFirmware(onProgress) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "_updateAIModel",
    value: function _updateAIModel(URL, onProgress) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "_setColor",
    value: function () {
      var _setColor2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(color) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return this.semaphore.acquire();
            case 3:
              _context.next = 5;
              return this.serial.AISetColorDescription(color);
            case 5:
              return _context.abrupt("return", _context.sent);
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              throw _context.t0;
            case 11:
              _context.prev = 11;
              this.semaphore.release();
              return _context.finish(11);
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 8, 11, 14]]);
      }));
      function _setColor(_x) {
        return _setColor2.apply(this, arguments);
      }
      return _setColor;
    }()
  }, {
    key: "_clearColors",
    value: function () {
      var _clearColors2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return this.semaphore.acquire();
            case 3:
              _context2.next = 5;
              return this.serial.AIClearAllSetColors();
            case 5:
              return _context2.abrupt("return", _context2.sent);
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              throw _context2.t0;
            case 11:
              _context2.prev = 11;
              this.semaphore.release();
              return _context2.finish(11);
            case 14:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 8, 11, 14]]);
      }));
      function _clearColors() {
        return _clearColors2.apply(this, arguments);
      }
      return _clearColors;
    }()
  }, {
    key: "_setCode",
    value: function () {
      var _setCode2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(code) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return this.semaphore.acquire();
            case 3:
              _context3.next = 5;
              return this.serial.AISetCodeDescription(code);
            case 5:
              return _context3.abrupt("return", _context3.sent);
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              throw _context3.t0;
            case 11:
              _context3.prev = 11;
              this.semaphore.release();
              return _context3.finish(11);
            case 14:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[0, 8, 11, 14]]);
      }));
      function _setCode(_x2) {
        return _setCode2.apply(this, arguments);
      }
      return _setCode;
    }()
  }, {
    key: "_clearCodes",
    value: function () {
      var _clearCodes2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return this.semaphore.acquire();
            case 3:
              _context4.next = 5;
              return this.serial.AIClearAllSetCodes();
            case 5:
              return _context4.abrupt("return", _context4.sent);
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              throw _context4.t0;
            case 11:
              _context4.prev = 11;
              this.semaphore.release();
              return _context4.finish(11);
            case 14:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[0, 8, 11, 14]]);
      }));
      function _clearCodes() {
        return _clearCodes2.apply(this, arguments);
      }
      return _clearCodes;
    }()
  }, {
    key: "setTagDetection",
    value: function () {
      var _setTagDetection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(enable) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return this.semaphore.acquire();
            case 3:
              _context5.next = 5;
              return this.serial.AISetTagDetection(enable);
            case 5:
              return _context5.abrupt("return", _context5.sent);
            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](0);
              throw _context5.t0;
            case 11:
              _context5.prev = 11;
              this.semaphore.release();
              return _context5.finish(11);
            case 14:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[0, 8, 11, 14]]);
      }));
      function setTagDetection(_x3) {
        return _setTagDetection.apply(this, arguments);
      }
      return setTagDetection;
    }()
  }, {
    key: "setAIObjectDetection",
    value: function () {
      var _setAIObjectDetection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(enable) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return this.semaphore.acquire();
            case 3:
              _context6.next = 5;
              return this.serial.AISetObjectDetection(enable);
            case 5:
              return _context6.abrupt("return", _context6.sent);
            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6["catch"](0);
              throw _context6.t0;
            case 11:
              _context6.prev = 11;
              this.semaphore.release();
              return _context6.finish(11);
            case 14:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[0, 8, 11, 14]]);
      }));
      function setAIObjectDetection(_x4) {
        return _setAIObjectDetection.apply(this, arguments);
      }
      return setAIObjectDetection;
    }()
  }, {
    key: "getModel",
    value: function () {
      var _getModel = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return this.semaphore.acquire();
            case 3:
              _context7.next = 5;
              return this.serial.AIGetModel();
            case 5:
              return _context7.abrupt("return", _context7.sent);
            case 8:
              _context7.prev = 8;
              _context7.t0 = _context7["catch"](0);
              throw _context7.t0;
            case 11:
              _context7.prev = 11;
              this.semaphore.release();
              return _context7.finish(11);
            case 14:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[0, 8, 11, 14]]);
      }));
      function getModel() {
        return _getModel.apply(this, arguments);
      }
      return getModel;
    }()
  }, {
    key: "clearModel",
    value: function () {
      var _clearModel = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return this.semaphore.acquire();
            case 3:
              _context8.next = 5;
              return this.serial.AIClearModel();
            case 5:
              return _context8.abrupt("return", _context8.sent);
            case 8:
              _context8.prev = 8;
              _context8.t0 = _context8["catch"](0);
              throw _context8.t0;
            case 11:
              _context8.prev = 11;
              this.semaphore.release();
              return _context8.finish(11);
            case 14:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[0, 8, 11, 14]]);
      }));
      function clearModel() {
        return _clearModel.apply(this, arguments);
      }
      return clearModel;
    }()
  }, {
    key: "_grabDetectedObjects",
    value: function () {
      var _grabDetectedObjects2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return this.semaphore.acquire();
            case 3:
              return _context9.abrupt("return", this.serial.AIGetDetectedObjects().then(function (objects) {
                if (objects === null) {
                  log.warn("No objects detected or unable to retrieve objects");
                  return null;
                }
                return objects.map(function (obj) {
                  if (obj.type === _VexSerialDevices_enums__WEBPACK_IMPORTED_MODULE_1__.VexAIObjectTypes.AI2CAM_DETECT_TYPE_CODE) {
                    // TODO: remove this when the robot config's AI Vision utility uses the actual angle
                    return _objectSpread(_objectSpread({}, obj), {}, {
                      angle: obj.angle * 100
                    });
                  }
                  return obj;
                });
              }));
            case 6:
              _context9.prev = 6;
              _context9.t0 = _context9["catch"](0);
              throw _context9.t0;
            case 9:
              _context9.prev = 9;
              this.semaphore.release();
              return _context9.finish(9);
            case 12:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[0, 6, 9, 12]]);
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
      throw new Error("Method not implemented.");
    }
  }]);
}(_vexcode_robot_config_dist_AIVisionUtility_AIVisionSerialInterface__WEBPACK_IMPORTED_MODULE_2__.AIVisionSerialInterface);


/***/ }),

/***/ "./src/HardwareInterface/imageConverters.ts":
/*!**************************************************!*\
  !*** ./src/HardwareInterface/imageConverters.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertImageDataJPEG: () => (/* binding */ convertImageDataJPEG),
/* harmony export */   convertImageDataMono: () => (/* binding */ convertImageDataMono),
/* harmony export */   convertImageDataRGB565: () => (/* binding */ convertImageDataRGB565),
/* harmony export */   convertImageDataRGB888: () => (/* binding */ convertImageDataRGB888),
/* harmony export */   convertImageDataYUV: () => (/* binding */ convertImageDataYUV)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// this is a cleaned up version of the converters from the code James provided.
// different platforms have different image data, so we have several converter
// functions. right now for AIM, only the RGB565 converter is used, but the
// others should work, but need to be tested...

// sample of the screen image options from the test site
// width="0" height="0" bpp="0" layer="8" le="true" - JPEG 640x480
// width="0" height="0" bpp="0" layer="9" le="true" - JPEG 1280x960
// width="240" height="240" bpp="2" le="true" - 240x240 (Hydra)
// width="320" height="240" bpp="2" le="true" - 320x240
// width="640" height="480" bpp="2" le="true" - 640x480 (RGB)
// width="640" height="480" bpp="2" layer="2" le="true" yuv="true" - 640x480 (YUV)
// width="640" height="480" bpp="2" layer="2" le="true" raw="true" - 640x480 (RAW)
// width="320" height="240" bpp="4" layer="1" le="true" - 320x240 (RGB888)
// width="320" height="240" bpp="1" layer="3" - 320x240 (Mono)
// width="640" height="480" bpp="1" layer="3" - 640x480 (Mono)
// width="480" height="272" stride="512" bpp="4" layer="-1" le="false" - V5
// width="160" height="128" bpp="2" layer="-1" le="false" - IQ2/EXP

//#region internal helpers
/**
 * A helper for all of the converters as they all draw and convert the canvas to a data url the same way
 * @param image the image object to draw and convert to a data url
 * @returns a data url string of the image
 */
function drawAndConvertImage(image) {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  // set the canvas size to the image size
  canvas.width = image.width;
  canvas.height = image.height;
  // draw the image data to the canvas
  ctx.putImageData(image, 0, 0);
  return canvas.toDataURL("image/png");
}
//#endregion internal helpers

/**
 * converts a JPEG image data buffer to a base 64 encoded string in PNG format
 * @param data the raw image data
 * @returns A promise that resolves to a base64-encoded PNG data URL of the converted image.
 */
function convertImageDataJPEG(data) {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  var blob = new Blob([data.buffer], {
    type: "image/jpeg"
  });
  var urlCreator = window.URL;
  var imageUrl = urlCreator.createObjectURL(blob);
  var img = new Image();
  return new Promise(function (resolve, reject) {
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
    };
    img.src = imageUrl;
    resolve(canvas.toDataURL("image/png"));
  });
}

/**
 * converts the raw image data to a base 64 encoded string in PNG format. This is for image data that has 2 bytes per pixel
 * @param data the raw image data
 * @param width The width of the image.
 * @param height The height of the image.
 * @param littleEndian Indicates if the data is in little-endian format.
 * @returns A promise that resolves to a base64-encoded PNG data URL of the converted image.
 */
function convertImageDataRGB565(_x, _x2, _x3, _x4) {
  return _convertImageDataRGB.apply(this, arguments);
}
/**
 * Converts image data from RGB888 format to a base64-encoded PNG data URL.
 *
 * @param data The input image data in RGB888 format as a Uint8Array.
 * @param width The width of the image.
 * @param height The height of the image.
 * @param stride The number of bytes per row of the image. If not provided, defaults to the width.
 * @param littleEndian Indicates if the data is in little-endian format.
 * @returns A promise that resolves to a base64-encoded PNG data URL of the converted image.
 */
function _convertImageDataRGB() {
  _convertImageDataRGB = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(data, width, height, littleEndian) {
    var dataView, pixel0, pixel1, isEmojiLayer, imageRGBData, image, sourceYPos, sourceYPixelOffset, destinationYPos, destinationYPixelOffset, sourceXPos, destinationXPos, sourcePixel, destinationPixel, imageDataOffset, pixel, r, g, b;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          dataView = new DataView(data.buffer);
          pixel0 = dataView.getInt16(0, littleEndian);
          pixel1 = dataView.getInt16(2, littleEndian);
          isEmojiLayer = !(pixel0 & 0x0001) && pixel1 & 0x0001;
          imageRGBData = new Uint8ClampedArray(4 * width * height);
          image = new ImageData(imageRGBData, width, height);
          for (sourceYPos = 0; sourceYPos < height; sourceYPos++) {
            sourceYPixelOffset = sourceYPos * width;
            destinationYPos = isEmojiLayer ? height - sourceYPos - 1 : sourceYPos;
            destinationYPixelOffset = destinationYPos * width;
            for (sourceXPos = 0; sourceXPos < width; sourceXPos++) {
              destinationXPos = isEmojiLayer ? width - sourceXPos - 1 : sourceXPos;
              sourcePixel = sourceYPixelOffset + sourceXPos;
              destinationPixel = destinationYPixelOffset + destinationXPos;
              imageDataOffset = destinationPixel * 4;
              pixel = dataView.getUint16(sourcePixel * 2, littleEndian);
              r = (pixel & 0xF800) >> 8;
              g = (pixel & 0x07E0) >> 3;
              b = (pixel & 0x001F) << 3; // extend the lsb for 5 or 6 bit data into lower bits of 8 bit data
              if (r & 0x08) {
                r |= 0x07;
              }
              ;
              if (g & 0x04) {
                g |= 0x03;
              }
              ;
              if (b & 0x08) {
                b |= 0x07;
              }
              ;
              image.data[imageDataOffset + 0] = r;
              image.data[imageDataOffset + 1] = g;
              image.data[imageDataOffset + 2] = b;
              image.data[imageDataOffset + 3] = 0xFF;
            }
          }
          return _context.abrupt("return", drawAndConvertImage(image));
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _convertImageDataRGB.apply(this, arguments);
}
function convertImageDataRGB888(_x5, _x6, _x7, _x8, _x9) {
  return _convertImageDataRGB2.apply(this, arguments);
}
/**
 * Converts YUV image data to an RGB image and returns it as a base64 encoded string.
 *
 * @param data The YUV image data.
 * @param width The width of the image.
 * @param height The height of the image.
 * @param littleEndian Indicates if the data is in little-endian format.
 * @returns A promise that resolves to a base64-encoded PNG data URL of the converted image.
 */
function _convertImageDataRGB2() {
  _convertImageDataRGB2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data, width, height, stride, littleEndian) {
    var offset, imageRGBData, image, h, w, b, g, r, canvas, ctx, _osb;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          offset = 0;
          stride = stride !== undefined ? stride : width;
          imageRGBData = new Uint8ClampedArray(4 * stride * height);
          image = new ImageData(imageRGBData, stride, height); // copy and reorder layer 1
          for (h = 0; h < height; h++) {
            for (w = 0; w < stride; w++) {
              b = data[offset + 0];
              g = data[offset + 1];
              r = data[offset + 2];
              imageRGBData[offset + 0] = r;
              imageRGBData[offset + 1] = g;
              imageRGBData[offset + 2] = b;
              imageRGBData[offset + 3] = 255;
              offset += 4;
            }
          }
          canvas = document.createElement("canvas");
          ctx = canvas.getContext("2d"); // set the canvas size to the image size
          canvas.width = image.width;
          canvas.height = image.height;

          // TODO: review this.
          // it looks like there is almost no difference between the two branches. but it also seems
          // like something is missing regarding the width vs stride
          if (stride === width) {
            _osb = document.createElement("canvas");
            _osb.width = image.width;
            _osb.height = image.height;

            // render our ImageData on this canvas
            _osb.getContext('2d').putImageData(image, 0, 0);

            // Now we can scale our image, by drawing our second canvas
            ctx.drawImage(_osb, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
          } else {
            _osb = document.createElement("canvas");
            _osb.width = image.width;
            _osb.height = image.height;

            // render our ImageData on this canvas
            _osb.getContext('2d').putImageData(image, 0, 0);

            // Now we can scale our image, by drawing our second canvas
            ctx.drawImage(_osb, 0, 0, width, image.height, 0, 0, canvas.width, canvas.height);
          }

          // create a data url of the image
          return _context2.abrupt("return", canvas.toDataURL("image/png"));
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _convertImageDataRGB2.apply(this, arguments);
}
function convertImageDataYUV(_x10, _x11, _x12, _x13) {
  return _convertImageDataYUV.apply(this, arguments);
}
/**
 * Converts monochrome image data to an RGBA image and returns it as a base64 string.
 *
 * @param data The monochrome image data as a Uint8Array.
 * @param width The width of the image.
 * @param height The height of the image.
 * @returns A promise that resolves to a base64-encoded PNG data URL of the converted image.
 */
function _convertImageDataYUV() {
  _convertImageDataYUV = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data, width, height, littleEndian) {
    var dataView, imageRGBData, image, offsetImage, offsetSource, h, w, pixel1, pixel2, y1, y2, cr, cb, g1, b1, r1, g2, b2, r2;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          dataView = new DataView(data.buffer);
          imageRGBData = new Uint8ClampedArray(4 * width * height);
          image = new ImageData(imageRGBData, width, height);
          offsetImage = 0;
          offsetSource = 0;
          for (h = 0; h < image.height; h++) {
            for (w = 0; w < image.width; w += 2) {
              pixel1 = dataView.getUint16(offsetSource, littleEndian);
              offsetSource += 2;
              pixel2 = dataView.getUint16(offsetSource, littleEndian);
              y1 = (pixel1 & 0xFF00) >> 8;
              y2 = (pixel2 & 0xFF00) >> 8;
              cr = (pixel1 & 0x00FF) - 128;
              cb = (pixel2 & 0x00FF) - 128; // ITU-R BT601 matrix
              g1 = y1 * 1.000 + cb * -0.3437 + cr * -0.7142;
              b1 = y1 * 1.000 + cb * 1.7722 + cr * 0.0000;
              r1 = y1 * 1.000 + cb * 0.0000 + cr * 1.4017;
              g2 = y2 * 1.000 + cb * -0.3437 + cr * -0.7142;
              b2 = y2 * 1.000 + cb * 1.7722 + cr * 0.0000;
              r2 = y2 * 1.000 + cb * 0.0000 + cr * 1.4017;
              image.data[offsetImage + 0] = r1;
              image.data[offsetImage + 1] = g1;
              image.data[offsetImage + 2] = b1;
              image.data[offsetImage + 3] = 0xFF;
              image.data[offsetImage + 4] = r2;
              image.data[offsetImage + 5] = g2;
              image.data[offsetImage + 6] = b2;
              image.data[offsetImage + 7] = 0xFF;
              offsetImage += 8;
              offsetSource += 2;
            }
          }
          return _context3.abrupt("return", drawAndConvertImage(image));
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _convertImageDataYUV.apply(this, arguments);
}
function convertImageDataMono(_x14, _x15, _x16) {
  return _convertImageDataMono.apply(this, arguments);
}
function _convertImageDataMono() {
  _convertImageDataMono = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(data, width, height) {
    var dataView, imageRGBData, image, offsetImage, offsetSource, h, w, pixel, r, g, b;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          dataView = new DataView(data.buffer);
          imageRGBData = new Uint8ClampedArray(4 * width * height);
          image = new ImageData(imageRGBData, width, height);
          offsetImage = 0;
          offsetSource = 0;
          for (h = 0; h < image.height; h++) {
            for (w = 0; w < image.width; w++) {
              pixel = dataView.getUint8(offsetSource);
              r = pixel;
              g = pixel;
              b = pixel;
              image.data[offsetImage + 0] = r;
              image.data[offsetImage + 1] = g;
              image.data[offsetImage + 2] = b;
              image.data[offsetImage + 3] = 0xFF;
              offsetImage += 4;
              offsetSource += 1;
            }
          }
          return _context4.abrupt("return", drawAndConvertImage(image));
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _convertImageDataMono.apply(this, arguments);
}


/***/ })

}]);
//# sourceMappingURL=60a6d24e0b188c43527f.src_HardwareInterface_DownloadPlatform_AIM_AIMVexSerial_ts.bundle.js.map