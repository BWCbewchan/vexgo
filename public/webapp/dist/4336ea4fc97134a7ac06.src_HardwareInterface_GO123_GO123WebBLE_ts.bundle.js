"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_HardwareInterface_GO123_GO123WebBLE_ts"],{

/***/ "./src/HardwareInterface/GO123/GO123WebBLE.ts":
/*!****************************************************!*\
  !*** ./src/HardwareInterface/GO123/GO123WebBLE.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GO123WebBLE: () => (/* binding */ GO123WebBLE)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/HWEnums */ "./src/HardwareInterface/types/HWEnums.ts");
/* harmony import */ var _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/HWErrors */ "./src/HardwareInterface/types/HWErrors.ts");
/* harmony import */ var _VexVersion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VexVersion */ "./src/HardwareInterface/VexVersion.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./src/HardwareInterface/helpers.ts");
/* harmony import */ var _GO123Interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GO123Interface */ "./src/HardwareInterface/GO123/GO123Interface.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.ts");
/* harmony import */ var _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../GlobalEventSystem */ "./src/GlobalEventSystem.ts");
/* harmony import */ var _platformInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../platformInfo */ "./src/platformInfo.ts");
/* harmony import */ var _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vexcode/vex-ble-device-manager */ "./node_modules/@vexcode/vex-ble-device-manager/dist_lib/src/index.js");
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("GO123WebBLE");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();
log.setHistoryLogger("HWInterface");

// tslint:disable: member-ordering

// interface types/enums



// interface types/enums/classes



// parent classes/types



// external imports




// low-level interface

var GO123WebBLE = /*#__PURE__*/function (_GO123Interface) {
  function GO123WebBLE() {
    var _this;
    _classCallCheck(this, GO123WebBLE);
    _this = _callSuper(this, GO123WebBLE);
    _defineProperty(_this, "updatingFWnotBL", false);
    _defineProperty(_this, "runningLowLevelUpdate", false);
    _defineProperty(_this, "expectDisconnect", false);
    _defineProperty(_this, "_electronBluetoothProxy", undefined);
    //#endregion brain info
    //#region program control
    //#endregion program control
    //#region project downloads
    //#endregion project downloads
    //#region compilers
    //#endregion compilers
    //#region script commands
    _defineProperty(_this, "ackHandler", null);
    //#region status events
    //#endregion status events
    //#endregion native -> webapp events
    //#region webBLE event wrappers
    _defineProperty(_this, "firstUpdateAfterConnect", false);
    _defineProperty(_this, "alreadyConnected", false);
    _defineProperty(_this, "firstUpdateAfterBLUpdate", false);
    log.debug("construct GO123WebBLE");
    _this.initWebBLE();
    _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.setFirmwareToBeta(_helpers__WEBPACK_IMPORTED_MODULE_4__.firmwareChannel);
    _this.onWebBLEPortUpdate = _this.onWebBLEPortUpdate.bind(_this);
    _this.onWebBLEConnectionStateChange = _this.onWebBLEConnectionStateChange.bind(_this);
    _this.onWebBLEFWUpdateProgress = _this.onWebBLEFWUpdateProgress.bind(_this);
    _this.onWebBLEFWUpdateComplete = _this.onWebBLEFWUpdateComplete.bind(_this);
    _this.onWebBLESensorUpdate = _this.onWebBLESensorUpdate.bind(_this);
    _this.onWebBLEDeviceInfo = _this.onWebBLEDeviceInfo.bind(_this);
    _this.onackReceived = _this.onackReceived.bind(_this);
    var events = _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.VEXBLEChromeEvents;
    events.on("VEXBLEBrowser.PortCommandStatus", _this.onWebBLEPortUpdate);
    events.on("VEXBLEBrowser.ConnectionState", _this.onWebBLEConnectionStateChange);
    events.on("VEXBLEBrowser.FWUpdateProgress", _this.onWebBLEFWUpdateProgress);
    events.on("VEXBLEBrowser.FWUpdateComplete", _this.onWebBLEFWUpdateComplete);
    events.on("VEXBLEBrowser.SensorStatus", _this.onWebBLESensorUpdate);
    events.on("VEXBLEBrowser.DeviceInfo", _this.onWebBLEDeviceInfo);
    events.on("VEXBLEBrowser.AckReceived", _this.onackReceived);
    if (_platformInfo__WEBPACK_IMPORTED_MODULE_8__.PlatformIsElectron) {
      // we only want to create the electron proxy when running in electron, so
      // we have this code to only import and create the proxy when in electron.
      log.info("loading electron bluetooth proxy");
      __webpack_require__.e(/*! import() */ "src_HardwareInterface_GO123_VexBluetoothElectronProxy_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./VexBluetoothElectronProxy */ "./src/HardwareInterface/GO123/VexBluetoothElectronProxy.ts")).then(function (importResult) {
        log.info("creating electron bluetooth proxy");
        _this._electronBluetoothProxy = new importResult.VexBluetoothElectron();
        log.info("created electron bluetooth proxy");
      });
    }
    return _this;
  }
  _inherits(GO123WebBLE, _GO123Interface);
  return _createClass(GO123WebBLE, [{
    key: "webble",
    get: function get() {
      return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__;
    }
  }, {
    key: "electronBluetoothProxy",
    get: function get() {
      return this._electronBluetoothProxy;
    }
  }, {
    key: "openConnectionToRobot",
    value: //#endregion interface information
    //#region connection control
    function () {
      var _openConnectionToRobot = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(id) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              log.warn("openConnectionToRobot should never be called for webble...");
              return _context.abrupt("return", true);
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function openConnectionToRobot(_x) {
        return _openConnectionToRobot.apply(this, arguments);
      }
      return openConnectionToRobot;
    }() //#region internal calls for connection control
  }, {
    key: "_openConnection",
    value: function _openConnection() {
      return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.scanAndConnect().then(function () {
        return;
      })["catch"](function (err) {
        log.error(err);
        throw new Error("error starting scan");
      });
    }
  }, {
    key: "_closeConnection",
    value: function _closeConnection() {
      return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.disconnect().then(function () {
        return true;
      })["catch"](function () {
        throw new Error("error stopping scan");
      });
    }
    //#endregion internal calls for connection control
    //#endregion connection control

    //#region connection status
  }, {
    key: "connectionStateBLE",
    get: function get() {
      if (this.updatingDevice) {
        return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.UpdatingFirmware;
      } else if (this.checkingDeviceFirmware) {
        return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.CheckingFirmware;
      }
      var currConnectionState = _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.getConnectionState();
      log.debug("connection state from manager:", _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.BrainConnectionState[currConnectionState]);
      return currConnectionState;
    }
    //#endregion connection status

    //#region brain info
    /**
     * sets the name of the currently connected brain
     * @param name the name to set the brain to
     * @throws OperationNotSupportedError
     * @throws NoBrainConnectedError
     */
  }, {
    key: "setBrainName",
    value: function setBrainName(name) {
      if (!this.connected) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
      }
      return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.setRobotName(name);
    }
  }, {
    key: "executeScriptCommand",
    value: function executeScriptCommand(command) {
      var _this2 = this;
      if (!this.connected) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
      }
      log.debug("executeScriptCommand -", command);
      return new Promise(function (resolve, reject) {
        _this2.ackHandler = function (ackSuccess, commandID) {
          resolve(ackSuccess && commandID === 0x20);
          _this2.ackHandler = null;
        };
        log.debug("executeScriptCommand - sending command");
        _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.sendCommand(command)["catch"](function () {
          _this2.ackHandler = null;
          reject(new Error("error sending command to device"));
        });
        log.debug("executeScriptCommand - command sent, waiting for ack");
      });
    }
  }, {
    key: "executeScriptCommands",
    value: function executeScriptCommands(commands) {
      if (!this.connected) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
      }
      log.debug("executeScriptCommands -", commands);
      return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.sendCommandMultiple(commands).then(function () {
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
      if (!this.connected) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
      }
      log.debug("stopScriptEngine");
      return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.stopProgram();
    }
  }, {
    key: "setConfigPreset",
    value: function setConfigPreset(preset) {
      var _this3 = this;
      if (!this.connected) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
      }
      log.debug("setConfigPreset -", preset);
      return new Promise(function (resolve, reject) {
        _this3.ackHandler = function (ackSuccess, commandID) {
          resolve(ackSuccess && commandID === 0x50);
          _this3.ackHandler = null;
        };
        _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.sendRobotConfigPreset(preset)["catch"](function () {
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
      if (!this.connected) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
      }
      log.debug("setConfigForPort -", port, deviceType, flags, limitPct, limitMax);
      return new Promise(function (resolve, reject) {
        _this4.ackHandler = function (ackSuccess, commandID) {
          resolve(ackSuccess && commandID === 0x51);
          _this4.ackHandler = null;
        };
        _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.setPortConfig(port, deviceType, flags, limitPct, limitMax)["catch"](function () {
          _this4.ackHandler = null;
          reject(new Error("error sending config to device"));
        });
      });
    }
  }, {
    key: "setEyeSensorMode",
    value: function setEyeSensorMode(mode) {
      if (!this.connected) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
      }
      log.debug("setEyeSensorMode -", mode);
      return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.SetSensorMode(mode).then(function () {
        return true;
      })["catch"](function () {
        throw new Error("error sending sensor mode to device");
      });
    }
  }, {
    key: "clearPortEvents",
    value: function clearPortEvents(port) {
      var _this5 = this;
      if (!this.connected) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
      }
      log.debug("clearPortEvents -", port);
      return new Promise(function (resolve, reject) {
        _this5.ackHandler = function (ackSuccess, commandID) {
          resolve(ackSuccess && commandID === 0x21);
          _this5.ackHandler = null;
        };
        _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.clearPortEvents(port)["catch"](function (err) {
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
      var _sendControllerButton = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(command, buttonID) {
        var _this6 = this;
        var whenPressed,
          prom,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              whenPressed = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : true;
              log.debug("sendControllerButton - command", command, "buttonID", buttonID, "whenPressed", whenPressed);
              _context2.next = 4;
              return new Promise(function (resolve, reject) {
                _this6.ackHandler = function (ackSuccess, commandID) {
                  resolve(ackSuccess && commandID === 0xA0);
                  _this6.ackHandler = null;
                };
                _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.controllerAddButtonCommand(command, buttonID.valueOf(), whenPressed)["catch"](function () {
                  _this6.ackHandler = null;
                  reject("error sending config to device");
                });
              })["catch"](function (err) {
                throw new Error(err);
              });
            case 4:
              prom = _context2.sent;
              return _context2.abrupt("return", prom);
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function sendControllerButton(_x2, _x3) {
        return _sendControllerButton.apply(this, arguments);
      }
      return sendControllerButton;
    }()
  }, {
    key: "sendControllerJoystickPreset",
    value: function () {
      var _sendControllerJoystickPreset = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(newType) {
        var _this7 = this;
        var driveSensi,
          turnSensi,
          prom,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              driveSensi = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 50;
              turnSensi = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : 50;
              log.debug("sendControllerJoystickPreset - newType", newType, "driveSensi", driveSensi, "turnSensi", turnSensi);
              _context3.next = 5;
              return new Promise(function (resolve, reject) {
                _this7.ackHandler = function (ackSuccess, commandID) {
                  resolve(ackSuccess && commandID === 0xA3);
                  _this7.ackHandler = null;
                };
                _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.setControlDriveStickType(newType.valueOf(), driveSensi, turnSensi)["catch"](function () {
                  _this7.ackHandler = null;
                  reject("error sending config to device");
                });
              })["catch"](function (err) {
                throw new Error(err);
              });
            case 5:
              prom = _context3.sent;
              return _context3.abrupt("return", prom);
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function sendControllerJoystickPreset(_x4) {
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
      var _sendControllerValues = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(leftX, leftY, rightX, rightY, buttons) {
        var _this8 = this;
        var prom;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return new Promise(function (resolve, reject) {
                var bitMap = _this8.getButtonBitMap(buttons);
                _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.setControlControlValues(leftX, leftY, rightX, rightY, bitMap).then(function () {
                  resolve(true);
                })["catch"](function (error) {
                  log.error(error);
                  reject("error sending command to device");
                });
              })["catch"](function (err) {
                throw new Error(err);
              });
            case 2:
              prom = _context4.sent;
              return _context4.abrupt("return", prom);
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function sendControllerValues(_x5, _x6, _x7, _x8, _x9) {
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
    key: "setFirmwareChannel",
    value: function setFirmwareChannel(channel) {
      if (channel === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VEXosFirmwareChannelType.PUBLIC) {
        return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.setFirmwareToBeta(_vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.VEXFirmwareType.Release);
      } else if (channel === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VEXosFirmwareChannelType.BETA) {
        return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.setFirmwareToBeta(_vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.VEXFirmwareType.Beta);
      } else if (channel === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VEXosFirmwareChannelType.PRIVATE) {
        return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.setFirmwareToBeta(_vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.VEXFirmwareType.Development);
      } else {
        log.warn("unsupported firmware channel type", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VEXosFirmwareChannelType[channel]);
      }
    }
  }, {
    key: "getCurrentFirmware",
    value: function () {
      var _getCurrentFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.getRobotInfo();
            case 2:
              return _context5.abrupt("return", _context5.sent.robotFirmwareVersion);
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function getCurrentFirmware() {
        return _getCurrentFirmware.apply(this, arguments);
      }
      return getCurrentFirmware;
    }()
  }, {
    key: "_getConnectedBrainBootloader",
    value: //#endregion firmware
    //#region internal firmware
    //#endregion internal firmware
    //#region internal firmware low level
    function () {
      var _getConnectedBrainBootloader2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.getDeviceBootloaderVersion();
            case 2:
              return _context6.abrupt("return", _context6.sent.getString());
            case 3:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function _getConnectedBrainBootloader() {
        return _getConnectedBrainBootloader2.apply(this, arguments);
      }
      return _getConnectedBrainBootloader;
    }()
  }, {
    key: "getOnlineFWVersion",
    value: function () {
      var _getOnlineFWVersion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(deviceType) {
        var versionStr, _versionStr;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.getLatestFirmwareVersion(_helpers__WEBPACK_IMPORTED_MODULE_4__.firmwareChannel);
            case 3:
              versionStr = _context7.sent.getString().replace("b", ".");
              return _context7.abrupt("return", _VexVersion__WEBPACK_IMPORTED_MODULE_3__.VexVersion.fromString(versionStr));
            case 7:
              _context7.prev = 7;
              _context7.t0 = _context7["catch"](0);
              log.warn("error getting online firmware version", _context7.t0);
              _context7.prev = 10;
              _context7.next = 13;
              return this.getFirmwareFileNameFromLocal(deviceType, _helpers__WEBPACK_IMPORTED_MODULE_4__.firmwareChannel);
            case 13:
              _versionStr = _context7.sent.replace("b", ".");
              return _context7.abrupt("return", _VexVersion__WEBPACK_IMPORTED_MODULE_3__.VexVersion.fromString(_versionStr));
            case 17:
              _context7.prev = 17;
              _context7.t1 = _context7["catch"](10);
              log.warn("error getting local firmware version", _context7.t0);
              return _context7.abrupt("return", _VexVersion__WEBPACK_IMPORTED_MODULE_3__.VexVersion.fromString("0.0.0.0"));
            case 21:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[0, 7], [10, 17]]);
      }));
      function getOnlineFWVersion(_x10) {
        return _getOnlineFWVersion.apply(this, arguments);
      }
      return getOnlineFWVersion;
    }() // This was pulled with minor changes from the webble package
  }, {
    key: "getProductName",
    value: function getProductName(deviceType) {
      switch (deviceType) {
        case _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceType.VEX123:
          return "123";
        case _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceType.VEXGO:
          return "Go";
        case _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceType.VEXAIM:
          return "AIM";
        default:
          return "";
      }
    }

    /**
     * Grab the local firmware information bundled with the build.
     * 
     * This was pulled from the webble package
     * @param deviceType the product type
     * @param firmwareType the channel for the firmware
     * @returns 
     */
  }, {
    key: "getFirmwareFileNameFromLocal",
    value: (function () {
      var _getFirmwareFileNameFromLocal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(deviceType) {
        var firmwareType,
          resourcePath,
          productName,
          localVEXOSCatalogURL,
          localImageName,
          _args8 = arguments;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              firmwareType = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : _helpers__WEBPACK_IMPORTED_MODULE_4__.vexFirmwareChannels.Release;
              _context8.prev = 1;
              resourcePath = "resources";
              productName = this.getProductName(deviceType);
              if (productName) {
                _context8.next = 6;
                break;
              }
              return _context8.abrupt("return", undefined);
            case 6:
              // get the image name from local catalog
              localVEXOSCatalogURL = "".concat(resourcePath, "/vexos/public").concat(firmwareType !== _helpers__WEBPACK_IMPORTED_MODULE_4__.vexFirmwareChannels.Release ? "_beta" : "", "/").concat(productName, "/catalog").concat(firmwareType === _helpers__WEBPACK_IMPORTED_MODULE_4__.vexFirmwareChannels.Developer ? "_dev" : "", ".txt");
              if (firmwareType === _helpers__WEBPACK_IMPORTED_MODULE_4__.vexFirmwareChannels.Bootloader && deviceType == _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceType.VEXGO) {
                localVEXOSCatalogURL = "".concat(resourcePath, "/vexos/public_beta/Go/Bootloader/catalog.txt");
              }
              _context8.next = 10;
              return this.getLocalFile(localVEXOSCatalogURL, "text")["catch"](function (reason) {
                throw reason;
              });
            case 10:
              localImageName = _context8.sent;
              return _context8.abrupt("return", localImageName ? localImageName : "");
            case 14:
              _context8.prev = 14;
              _context8.t0 = _context8["catch"](1);
              log.warn("Error when fetching firmware catalog contents: ", _context8.t0);
              return _context8.abrupt("return", "");
            case 18:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[1, 14]]);
      }));
      function getFirmwareFileNameFromLocal(_x11) {
        return _getFirmwareFileNameFromLocal.apply(this, arguments);
      }
      return getFirmwareFileNameFromLocal;
    }() // This was pulled with minor changes to remove unused code from the webble package
    )
  }, {
    key: "getLocalFile",
    value: function () {
      var _getLocalFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(url, responseType) {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt("return", new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, true);
                xhr.responseType = responseType;
                xhr.onload = function () {
                  if (xhr.status === 200) {
                    resolve(xhr.response);
                  }
                  if (xhr.status === 401) {
                    // auth error
                    resolve(undefined);
                  } else {
                    reject(Error("failed to get file from url: ".concat(url, "; error code: ") + xhr.statusText));
                  }
                };
                xhr.onerror = function () {
                  reject(Error("There was a network error."));
                };
                xhr.send();
              }));
            case 1:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
      function getLocalFile(_x12, _x13) {
        return _getLocalFile.apply(this, arguments);
      }
      return getLocalFile;
    }()
  }, {
    key: "getOnlineBLVersion",
    value: function () {
      var _getOnlineBLVersion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(deviceType) {
        var product, versionStr;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              product = this._deviceTypeToProductType(deviceType);
              _context10.next = 3;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.getLatestBootloaderVersion();
            case 3:
              versionStr = _context10.sent.getString().replace("b", ".");
              return _context10.abrupt("return", _VexVersion__WEBPACK_IMPORTED_MODULE_3__.VexVersion.fromString(versionStr));
            case 5:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function getOnlineBLVersion(_x14) {
        return _getOnlineBLVersion.apply(this, arguments);
      }
      return getOnlineBLVersion;
    }()
  }, {
    key: "lowLevelUpdateFW",
    value: function () {
      var _lowLevelUpdateFW = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(progressCallback) {
        var _this9 = this;
        var forceUpdate,
          isFWSupported,
          needsFW,
          res,
          resError,
          _args12 = arguments;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              forceUpdate = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : false;
              this.updatingFWnotBL = true;
              log.debug("lowLevelUpdateFW");
              log.debug("checking that we are actually connected again");
              if (!(!this.targetDevice || _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.getConnectionState() !== _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.BrainConnectionState.Connected)) {
                _context12.next = 7;
                break;
              }
              log.warn("error starting firmware update process. error code:", 10);
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorStartingFWUpdate();
            case 7:
              log.debug("checking if FW update is supported");
              _context12.next = 10;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.IsFWUpdateSupported();
            case 10:
              isFWSupported = _context12.sent;
              if (isFWSupported) {
                _context12.next = 14;
                break;
              }
              log.debug("FW update is not supported?");
              return _context12.abrupt("return", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.UNSUPPORTED);
            case 14:
              log.debug("checking if we actually need to update the FW");
              needsFW = forceUpdate || this.targetDevice.robotNeedsFirmwareUpdate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.NeedsUpdate;
              if (needsFW) {
                _context12.next = 19;
                break;
              }
              log.debug("skipping Firmware update as it is already up to date");
              return _context12.abrupt("return", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.SUCCESS);
            case 19:
              this.FWUpdateProgressCB = progressCallback;
              res = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.FAILURE;
              resError = null;
              _context12.prev = 22;
              _context12.next = 25;
              return new Promise(/*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
                  var retryCount, inCorrectMode;
                  return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                      case 0:
                        log.info("starting firmware update process");
                        log.debug("checking that we are actually connected");
                        if (!(!_this9.targetDevice || _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.getConnectionState() !== _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.BrainConnectionState.Connected)) {
                          _context11.next = 6;
                          break;
                        }
                        log.warn("error starting firmware update process. error code:", 10);
                        reject(new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorStartingFWUpdate());
                        return _context11.abrupt("return");
                      case 6:
                        retryCount = 0;
                        inCorrectMode = _this9.targetDevice.mode === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode.UPDATE;
                        _context11.prev = 8;
                      case 9:
                        if (!(!inCorrectMode && retryCount < 2)) {
                          _context11.next = 17;
                          break;
                        }
                        log.debug("try to enter bootload mode");
                        _context11.next = 13;
                        return _this9.changeModeAndWait(_types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode.UPDATE);
                      case 13:
                        inCorrectMode = _this9.targetDevice.mode === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode.UPDATE;
                        if (!inCorrectMode) {
                          retryCount++;
                          log.warn("mode change fail", retryCount);
                        }
                        _context11.next = 9;
                        break;
                      case 17:
                        _context11.next = 23;
                        break;
                      case 19:
                        _context11.prev = 19;
                        _context11.t0 = _context11["catch"](8);
                        log.warn("error while changing mode");
                        inCorrectMode = false;
                      case 23:
                        if (inCorrectMode) {
                          _context11.next = 27;
                          break;
                        }
                        log.warn("error starting firmware update process. error code:", 21);
                        reject(new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorStartingFWUpdate());
                        return _context11.abrupt("return");
                      case 27:
                        _this9.resolveFWUpdatePromise = resolve;
                        log.debug("actually starting the FW update");
                        _context11.next = 31;
                        return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.updateFirmware(_helpers__WEBPACK_IMPORTED_MODULE_4__.firmwareChannel);
                      case 31:
                        _this9.setUpdateTimeoutTimerCallback(function () {
                          log.warn("Firmware update failed due to progress timeout");
                          reject(new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorUpdatingFW());
                        });
                        _this9.startUpdateTimeoutTimer(20000);
                        _this9.runningLowLevelUpdate = true;
                        log.debug("waiting for FW update to complete");
                      case 35:
                      case "end":
                        return _context11.stop();
                    }
                  }, _callee11, null, [[8, 19]]);
                }));
                return function (_x16, _x17) {
                  return _ref.apply(this, arguments);
                };
              }());
            case 25:
              res = _context12.sent;
              _context12.next = 33;
              break;
            case 28:
              _context12.prev = 28;
              _context12.t0 = _context12["catch"](22);
              log.warn(_context12.t0);
              resError = _context12.t0;
              throw _context12.t0;
            case 33:
              _context12.prev = 33;
              this.stopUpdateTimeoutTimer();
              this.clearUpdateTimeoutTimerCallback();
              return _context12.finish(33);
            case 37:
              this.resolveFWUpdatePromise = null;
              this.FWUpdateProgressCB = null;
              log.debug("update complete with code", res);
              if (!(res === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.SUCCESS)) {
                _context12.next = 57;
                break;
              }
              _context12.prev = 41;
              log.debug("waiting for reconnect");
              _context12.next = 45;
              return this.waitForReconnect(25000);
            case 45:
              this.expectDisconnect = false;
              _context12.next = 48;
              return (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.waitms)(1000);
            case 48:
              _context12.next = 55;
              break;
            case 50:
              _context12.prev = 50;
              _context12.t1 = _context12["catch"](41);
              log.warn("failed to reconnect to updated device");
              this.connected = false;
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorUpdatingFW();
            case 55:
              _context12.next = 63;
              break;
            case 57:
              if (!(res === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.FAILURE)) {
                _context12.next = 61;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorUpdatingFW();
            case 61:
              if (!(res === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.DISCONNECT)) {
                _context12.next = 63;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorConnectionDuringFW();
            case 63:
              if (!resError) {
                _context12.next = 65;
                break;
              }
              throw resError;
            case 65:
              return _context12.abrupt("return", res);
            case 66:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this, [[22, 28, 33, 37], [41, 50]]);
      }));
      function lowLevelUpdateFW(_x15) {
        return _lowLevelUpdateFW.apply(this, arguments);
      }
      return lowLevelUpdateFW;
    }()
  }, {
    key: "lowLevelUpdateBL",
    value: function () {
      var _lowLevelUpdateBL = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(progressCallback) {
        var _this10 = this;
        var forceUpdate,
          isBLSupported,
          needsBL,
          res,
          resError,
          _args14 = arguments;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              forceUpdate = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : false;
              log.debug("lowLevelUpdateBL", this.targetDevice);
              this.updatingFWnotBL = false;
              log.debug("checking that we are actually connected");
              if (!(!this.targetDevice || _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.getConnectionState() !== _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.BrainConnectionState.Connected)) {
                _context14.next = 7;
                break;
              }
              log.warn("error starting bootloader update process. error code:", 10);
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorStartingBLUpdate();
            case 7:
              log.debug("checking if BL update is supported");
              _context14.next = 10;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.CanUpdateBootloader();
            case 10:
              isBLSupported = _context14.sent;
              if (isBLSupported) {
                _context14.next = 13;
                break;
              }
              return _context14.abrupt("return", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.UNSUPPORTED);
            case 13:
              log.debug("checking if we actually need to update the BL");
              needsBL = forceUpdate || this.targetDevice.robotNeedsBootloaderUpdate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.NeedsUpdate;
              if (needsBL) {
                _context14.next = 18;
                break;
              }
              log.debug("skipping Bootloader update as it is already up to date");
              return _context14.abrupt("return", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.SUCCESS);
            case 18:
              this.BLUpdateProgressCB = progressCallback;
              res = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.FAILURE;
              resError = null;
              _context14.prev = 21;
              _context14.next = 24;
              return new Promise(/*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(resolve, reject) {
                  var retryCount, inCorrectMode;
                  return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                      case 0:
                        log.info("starting bootloader update process");
                        log.debug("checking that we are actually connected again");
                        if (!(!_this10.targetDevice || _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.getConnectionState() !== _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.BrainConnectionState.Connected)) {
                          _context13.next = 6;
                          break;
                        }
                        log.warn("error starting bootloader update process. error code:", 10);
                        reject(new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorStartingBLUpdate());
                        return _context13.abrupt("return");
                      case 6:
                        retryCount = 0;
                        inCorrectMode = _this10.targetDevice.mode === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode.CONNECT;
                        _context13.prev = 8;
                      case 9:
                        if (!(!inCorrectMode && retryCount < 2)) {
                          _context13.next = 17;
                          break;
                        }
                        log.debug("try to enter normal mode");
                        _context13.next = 13;
                        return _this10.changeModeAndWait(_types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode.CONNECT);
                      case 13:
                        inCorrectMode = _this10.targetDevice.mode === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode.CONNECT;
                        if (!inCorrectMode) {
                          retryCount++;
                          log.info("mode change fail", retryCount);
                        }
                        _context13.next = 9;
                        break;
                      case 17:
                        _context13.next = 23;
                        break;
                      case 19:
                        _context13.prev = 19;
                        _context13.t0 = _context13["catch"](8);
                        log.warn("error while changing mode");
                        inCorrectMode = false;
                      case 23:
                        if (inCorrectMode) {
                          _context13.next = 27;
                          break;
                        }
                        log.warn("error starting bootloader update process. error code:", 22);
                        reject(new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorStartingBLUpdate());
                        return _context13.abrupt("return");
                      case 27:
                        _this10.resolveBLUpdatePromise = resolve;
                        log.debug("actually starting the BL udpate");
                        _context13.next = 31;
                        return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.updateFirmware(_vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.VEXFirmwareType.Bootloader);
                      case 31:
                        _this10.setUpdateTimeoutTimerCallback(function () {
                          log.warn("Bootloader update failed due to progress timeout");
                          reject(new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorUpdatingBL());
                        });
                        _this10.startUpdateTimeoutTimer(20000);
                        _this10.runningLowLevelUpdate = true;
                        log.debug("waiting for BL update to complete");
                      case 35:
                      case "end":
                        return _context13.stop();
                    }
                  }, _callee13, null, [[8, 19]]);
                }));
                return function (_x19, _x20) {
                  return _ref2.apply(this, arguments);
                };
              }());
            case 24:
              res = _context14.sent;
              _context14.next = 31;
              break;
            case 27:
              _context14.prev = 27;
              _context14.t0 = _context14["catch"](21);
              resError = _context14.t0;
              throw _context14.t0;
            case 31:
              _context14.prev = 31;
              this.stopUpdateTimeoutTimer();
              this.clearUpdateTimeoutTimerCallback();
              return _context14.finish(31);
            case 35:
              this.resolveBLUpdatePromise = null;
              this.BLUpdateProgressCB = null;
              if (!(res === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.FAILURE)) {
                _context14.next = 41;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorUpdatingBL();
            case 41:
              if (!(res === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.DISCONNECT)) {
                _context14.next = 43;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorConnectionDuringBL();
            case 43:
              if (!resError) {
                _context14.next = 45;
                break;
              }
              throw resError;
            case 45:
              return _context14.abrupt("return", res);
            case 46:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this, [[21, 27, 31, 35]]);
      }));
      function lowLevelUpdateBL(_x18) {
        return _lowLevelUpdateBL.apply(this, arguments);
      }
      return lowLevelUpdateBL;
    }()
  }, {
    key: "changeModeAndWait",
    value: function () {
      var _changeModeAndWait = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(mode) {
        var timeoutms,
          _args15 = arguments;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              timeoutms = _args15.length > 1 && _args15[1] !== undefined ? _args15[1] : 15000;
              log.debug("trying to change to mode", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode[mode]);
              if (mode === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode.CONNECT || mode === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode.UPDATE) {
                _context15.next = 4;
                break;
              }
              throw new Error("unsupported mode");
            case 4:
              this.expectDisconnect = true;
              if (!(mode === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode.CONNECT)) {
                _context15.next = 10;
                break;
              }
              _context15.next = 8;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.reboot();
            case 8:
              _context15.next = 12;
              break;
            case 10:
              _context15.next = 12;
              return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.bootload();
            case 12:
              _context15.prev = 12;
              _context15.next = 15;
              return this.waitForReconnect(timeoutms);
            case 15:
              _context15.next = 20;
              break;
            case 17:
              _context15.prev = 17;
              _context15.t0 = _context15["catch"](12);
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorModeChangeConnectionLost();
            case 20:
              this.expectDisconnect = false;
              _context15.next = 23;
              return (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.waitms)(500);
            case 23:
              // just to be safe
              log.debug("done with mode change?");
            case 24:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this, [[12, 17]]);
      }));
      function changeModeAndWait(_x21) {
        return _changeModeAndWait.apply(this, arguments);
      }
      return changeModeAndWait;
    }()
  }, {
    key: "enableSleep",
    value: function () {
      var _enableSleep = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
            case "end":
              return _context16.stop();
          }
        }, _callee16);
      }));
      function enableSleep() {
        return _enableSleep.apply(this, arguments);
      }
      return enableSleep;
    }()
  }, {
    key: "disableSleep",
    value: function () {
      var _disableSleep = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
            case "end":
              return _context17.stop();
          }
        }, _callee17);
      }));
      function disableSleep() {
        return _disableSleep.apply(this, arguments);
      }
      return disableSleep;
    }() //#endregion internal firmware low level
    //#region events
  }, {
    key: "registerSuspendCallback",
    value: function registerSuspendCallback(callback) {
      // this should not do anything for webBLE
    }
  }, {
    key: "unregisterSuspendCallback",
    value: function unregisterSuspendCallback(callback) {
      // this should not do anything for webBLE
    }
    //#endregion

    //#region native -> webapp events
  }, {
    key: "onGO123BLEDeviceDiscovered",
    value: function onGO123BLEDeviceDiscovered(name, serial, product, mode, version, rssi, battery) {
      var _this11 = this;
      var canUpdate = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;
      log.debug("onGO123BLEDeviceDiscovered", name, serial, product, mode, version, rssi, battery);
      var versionObject = _VexVersion__WEBPACK_IMPORTED_MODULE_3__.VexVersion.fromString(version);
      var isBootloadMode = mode === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode.DFU;
      var robotFirmware = isBootloadMode ? undefined : versionObject;
      var robotBootloader = isBootloadMode ? versionObject : undefined;
      if (this.connectionTargetDevice && this.connectionTargetDevice.serial === serial) {
        var _this$connectionTarge, _this$connectionTarge2;
        if (this.connectionTargetDevice.mode !== mode || robotFirmware && ((_this$connectionTarge = this.connectionTargetDevice.robotFirmwareVersion) === null || _this$connectionTarge === void 0 ? void 0 : _this$connectionTarge.compare(robotFirmware)) !== 0 || robotBootloader && ((_this$connectionTarge2 = this.connectionTargetDevice.robotBootloaderVersion) === null || _this$connectionTarge2 === void 0 ? void 0 : _this$connectionTarge2.compare(robotBootloader)) !== 0) {
          log.debug("updating connection target");
          this.connectionTargetDevice.mode = mode;
          this.connectionTargetDevice.robotFirmwareVersion = robotFirmware;
          this.connectionTargetDevice.robotBootloaderVersion = robotBootloader;
          log.debug("setup for FW/BL recheck");
          this.connectionTargetDevice.robotNeedsFirmwareUpdate = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure;
          this.connectionTargetDevice.robotNeedsBootloaderUpdate = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure;
          this.checkDeviceFirmware(this.connectionTargetDevice).then(function () {
            _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.DeviceListUpdate", _this11.discoveredDevices);
          });
        }
        return;
      }
      log.debug("initial targetDevice:", this.targetDevice);
      if (this.targetDevice && this.targetDevice.serial === serial) {
        this.targetDevice.name = name;
        this.targetDevice.canUpdate = canUpdate;
        log.debug("updated connected device to", this.targetDevice);
        this.triggerRobotInfoUpdate();
        return;
      }
      this.processDiscoveredDevice(name, serial, product, mode, versionObject, rssi, battery, canUpdate);
    }
  }, {
    key: "onGO123BLEDeviceConnected",
    value: function () {
      var _onGO123BLEDeviceConnected = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(name, serial, version, mode, canUpdate) {
        var i;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              log.info("onGO123BLEDeviceConnected");
              if (this.connectionResolver) {
                this.connected = true;
                this.resetStatusValues();
                this.connectionResolver.resolve(true);
              }
              this.connectionResolver = null;
              this.connected = true;
              this.resetStatusValues();
              if (!(!this.connectionTargetDevice || this.connectionTargetDevice.serial !== serial)) {
                _context18.next = 14;
                break;
              }
              i = 0;
            case 7:
              if (!(i < this.discoveredDevices.length)) {
                _context18.next = 14;
                break;
              }
              if (!(this.discoveredDevices[i].serial === serial)) {
                _context18.next = 11;
                break;
              }
              this.connectionTargetDevice = this.discoveredDevices[i];
              return _context18.abrupt("break", 14);
            case 11:
              i++;
              _context18.next = 7;
              break;
            case 14:
              log.debug("old targetDevice", this.targetDevice);
              log.debug("connectionTargetDevice", this.connectionTargetDevice);
              this.targetDevice = Object.assign({}, this.connectionTargetDevice);
              this.targetDevice.canUpdate = canUpdate;
              this.targetDevice.mode = mode;
              log.debug("connectedDevice:", this.targetDevice);
              _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.enablePortCmdStatus(true);
              _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.enableSensorStatus(true);
              _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.enableProgramCommandStatus(true); // ack status

              this.triggerBLEConnectionStateChange();
              log.info("connected device mode:", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode[mode]);
              this.triggerRobotInfoUpdate();
              this.checkAndUpdateDevice();
            case 27:
            case "end":
              return _context18.stop();
          }
        }, _callee18, this);
      }));
      function onGO123BLEDeviceConnected(_x22, _x23, _x24, _x25, _x26) {
        return _onGO123BLEDeviceConnected.apply(this, arguments);
      }
      return onGO123BLEDeviceConnected;
    }()
  }, {
    key: "onGO123BLEDeviceBLUpdated",
    value: function () {
      var _onGO123BLEDeviceBLUpdated = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(name, serial, version, mode, canUpdate) {
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              this.resetStatusValues();
              this.targetDevice.name = name;
              this.targetDevice.robotBootloaderVersion = _VexVersion__WEBPACK_IMPORTED_MODULE_3__.VexVersion.fromString(version);
              this.targetDevice.mode = mode;
              log.debug("targetDevice:", this.targetDevice);
              this.triggerBLEConnectionStateChange();
              log.info("onGOBLEDeviceConnected", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode[mode]);
              this.triggerRobotInfoUpdate();
            case 8:
            case "end":
              return _context19.stop();
          }
        }, _callee19, this);
      }));
      function onGO123BLEDeviceBLUpdated(_x27, _x28, _x29, _x30, _x31) {
        return _onGO123BLEDeviceBLUpdated.apply(this, arguments);
      }
      return onGO123BLEDeviceBLUpdated;
    }()
  }, {
    key: "onGO123BLEDeviceDisconnected",
    value: function onGO123BLEDeviceDisconnected() {
      if (this.disconnectionResolver) {
        this.connected = false;
        this.disconnectionResolver.resolve(true);
      }
      this.disconnectionResolver = null;
      if (this.connected && !this.expectDisconnect) {
        log.info("device disconnected");
        this.connected = false;
        this.checkingDeviceFirmware = false;
        this.updatingDevice = false;
        if (this.runningLowLevelUpdate) {
          if (this.updatingFWnotBL) {
            this.onGO123BLEDeviceFWUpdateComplete(2);
          } else {
            this.onGO123BLEDeviceBLUpdateComplete(2);
          }
        }
        this.runningLowLevelUpdate = false;
        this.triggerBLEConnectionStateChange();
        log.info("onGOBLEDeviceDisconnected");
      }
    }
  }, {
    key: "onWebBLEConnectionStateChange",
    value: function onWebBLEConnectionStateChange(state) {
      log.debug("onWebBLEConnectionStateChange", this.firstUpdateAfterConnect);
      if (state === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.BrainConnectionState.Connected) {
        if (!this.alreadyConnected) {
          this.alreadyConnected = true;
          this.firstUpdateAfterConnect = true;
        }
      } else if (state === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.BrainConnectionState.Connecting || state === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.BrainConnectionState.Scanning) {
        this.alreadyConnected = false;
        this.firstUpdateAfterConnect = false;
        if (!this.updatingDevice) {
          this.onGO123BLEDeviceDisconnected();
        } else if (this.runningLowLevelUpdate) {
          var resultCode = 2; // 2 indicates disconnect
          if (this.updatingFWnotBL) {
            this.onGO123BLEDeviceFWUpdateComplete(resultCode);
          } else {
            this.onGO123BLEDeviceBLUpdateComplete(resultCode);
          }
        }
      }
      this.triggerBLEConnectionStateChange();
    }
  }, {
    key: "onWebBLEFWUpdateProgress",
    value: function onWebBLEFWUpdateProgress(progress) {
      log.debug("onWebBLEFWUpdateProgress");
      if (this.updatingFWnotBL) {
        this.onGO123BLEDeviceFWUpdateProgress(progress);
      } else {
        this.onGO123BLEDeviceBLUpdateProgress(progress);
      }
    }
  }, {
    key: "onWebBLEFWUpdateComplete",
    value: function onWebBLEFWUpdateComplete(status) {
      log.debug("onWebBLEFWUpdateComplete");
      var success = status === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.VEXFWUpdateStatus.Success;
      var connectionLost = status === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.VEXFWUpdateStatus.ConnectionLost || status === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.VEXFWUpdateStatus.CommunicationFailure;
      var resultCode = success ? 0 : connectionLost ? 2 : 1;
      if (this.updatingFWnotBL) {
        this.onGO123BLEDeviceFWUpdateComplete(resultCode);
      } else {
        this.onGO123BLEDeviceBLUpdateComplete(resultCode);
      }
    }
  }, {
    key: "onWebBLESensorUpdate",
    value: function onWebBLESensorUpdate(data) {
      // log.debug("onWebBLESensorUpdate");
      this.onGO123BLESensorUpdate({
        brightness: data.Brightness,
        hue: data.Hue,
        proximity: data.Proximity,
        accX: data.AccX,
        accY: data.AccY,
        accZ: data.AccZ,
        gyroX: data.GyroX,
        gyroY: data.GyroY,
        gyroZ: data.GyroZ,
        pitch: data.Pitch,
        roll: data.Roll,
        yaw: data.Yaw,
        floor: data.Floor
      });
    }
  }, {
    key: "onWebBLEDeviceInfo",
    value: function onWebBLEDeviceInfo(device) {
      log.debug("onWebBLEDeviceInfo");
      if (device.name === undefined) {
        return;
      }
      var appVersion = device.appVersion.getString();
      this.onGO123BLEDeviceDiscovered(device.name, device.deviceIDValue, device.productType, device.deviceMode, appVersion, -200, -1, device.supportFWUpdate);
      if (_vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.getConnectionState() === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.BrainConnectionState.Connected && this.firstUpdateAfterConnect) {
        this.firstUpdateAfterConnect = false;
        this.onGO123BLEDeviceConnected(device.name, device.deviceIDValue, appVersion, device.deviceMode, device.supportFWUpdate);
      }
      if (_vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.getConnectionState() === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.BrainConnectionState.Connected && this.firstUpdateAfterBLUpdate) {
        log.debug("setting device info after bl update:", device.supportFWUpdate);
        this.firstUpdateAfterBLUpdate = false;
        this.onGO123BLEDeviceBLUpdated(device.name, device.deviceIDValue, appVersion, device.deviceMode, device.supportFWUpdate);
      }
    }
  }, {
    key: "onackReceived",
    value: function onackReceived(command, ackStatus, data) {
      log.debug("onackReceived");
      log.debug("ack received for", command.toString(16), "with data", data.toString(16));
      if (this.ackHandler) {
        this.ackHandler(ackStatus === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.VEXAckValue.success, command);
      }
    }
    //#endregion webBLE event wrappers

    //#region low-level logger
  }, {
    key: "getLowLevelLogger",
    value: function getLowLevelLogger() {
      return null;
      // // TODO: the device manager still uses the old version of the logger...
      // return webble.Logger as any as typeof logger;
    }
    //#endregion low-level logger
  }, {
    key: "getHardwareInfo",
    value: function getHardwareInfo() {
      return _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_9__.getMachineBleHardwareInfo("ChromeApp");
    }
  }]);
}(_GO123Interface__WEBPACK_IMPORTED_MODULE_5__.GO123Interface);


/***/ })

}]);
//# sourceMappingURL=4336ea4fc97134a7ac06.src_HardwareInterface_GO123_GO123WebBLE_ts.bundle.js.map