"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_HardwareInterface_GO123_GO123BLE_ts"],{

/***/ "./src/HardwareInterface/GO123/GO123BLE.ts":
/*!*************************************************!*\
  !*** ./src/HardwareInterface/GO123/GO123BLE.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GO123BLE: () => (/* binding */ GO123BLE)
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
/* harmony import */ var _nativeInterface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../nativeInterface */ "./src/nativeInterface.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("GO123BLE");
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

var GO123BLE = /*#__PURE__*/function (_GO123Interface) {
  function GO123BLE() {
    var _this;
    _classCallCheck(this, GO123BLE);
    _this = _callSuper(this, GO123BLE);
    log.debug("construct GO123BLE");
    _this.appSuspendFunc = _this.appSuspendFunc.bind(_this);
    _this.displaySuspendedDuringUpdate = _this.displaySuspendedDuringUpdate.bind(_this);
    _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.GO123BLESetFirmwareChannel(_helpers__WEBPACK_IMPORTED_MODULE_4__.firmwareChannel);
    _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.onAppSuspendedEvent.registerCallback(_this.appSuspendFunc);
    return _this;
  }
  _inherits(GO123BLE, _GO123Interface);
  return _createClass(GO123BLE, [{
    key: "appSuspendFunc",
    value: function appSuspendFunc() {
      // The time it takes the errors to propegate before suspension is too long for
      // the event to be registered before the app is suspended. So catching the
      // suspend error will not work 100% of the time. The event for the
      // suspension popup needs to be registered as soon after the suspend is triggered
      if (this.updatingDevice) {
        this.suspendDeviceName = this.targetDevice.name;
        _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.onAppBecomeActiveEvent.registerCallback(this.displaySuspendedDuringUpdate);
      }
      this.closeConnection();
    }
  }, {
    key: "displaySuspendedDuringUpdate",
    value: function () {
      var _displaySuspendedDuringUpdate = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.onAppBecomeActiveEvent.unregisterCallback(this.displaySuspendedDuringUpdate);
              return _context.abrupt("return", new Promise(function (resolve, reject) {
                setTimeout(function () {
                  // MODALCONTROL.suspendedDuringUpdate(suspendDeviceName, async () => {
                  //   updatingDevice = false;
                  //   NI.onAppBecomeActiveEvent.unregisterCallback(displaySuspendedDuringUpdate);
                  //   resolve();
                  // });
                }, 500);
              }));
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function displaySuspendedDuringUpdate() {
        return _displaySuspendedDuringUpdate.apply(this, arguments);
      }
      return displaySuspendedDuringUpdate;
    }() //#region interface information
    // These are all properties that are used by the UI to know what is supported
  }, {
    key: "supportsEditableBrainName",
    get: function get() {
      return false;
    }
  }, {
    key: "openConnectionToRobot",
    value:
    //#endregion interface information

    //#region connection control
    function openConnectionToRobot(id) {
      log.debug("openConnectionToRobot - id:", id);
      this.connecting = true;
      this.triggerConnectionStateChange();
      this.connectionTargetDevice = null;
      // tslint:disable-next-line: prefer-for-of
      for (var i = 0; i < this.discoveredDevices.length; i++) {
        if (this.discoveredDevices[i].serial === id) {
          this.connectionTargetDevice = this.discoveredDevices[i];
          break;
        }
      }
      return _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.GO123BLEConnectToDevice(id).then(function () {
        return true;
      })["catch"](function () {
        throw new Error("error connecting to device");
      });
    }

    //#region internal calls for connection control
  }, {
    key: "_openConnection",
    value: function _openConnection() {
      return _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.GO123BLEStartScanning().then(function () {
        return;
      })["catch"](function () {
        throw new Error("error starting scan");
      });
    }
  }, {
    key: "_closeConnection",
    value: function _closeConnection() {
      return _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.GO123BLEStopScanning().then(function () {
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
      if (this.connected) {
        if (this.updatingDevice) {
          return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.UpdatingFirmware;
        } else if (this.checkingDeviceFirmware) {
          return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.CheckingFirmware;
        } else {
          return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected;
        }
      } else if (this.connecting) {
        return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connecting;
      } else if (this.scanning) {
        return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Scanning;
      } else {
        return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected;
      }
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

      // TODO: finish this
      throw new Error("Not yet implemented");
    }
    //#endregion brain info

    //#region program control
    //#endregion program control

    //#region project downloads
    //#endregion project downloads

    //#region compilers
    //#endregion compilers

    //#region script commands
  }, {
    key: "executeScriptCommand",
    value: function executeScriptCommand(command) {
      if (!this.connected) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
      }
      log.debug("executeScriptCommand -", command);
      return _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.GO123BLESendAndExecute123Command(command).then(function () {
        log.debug("executeScriptCommand -", command, "resolved");
        return true;
      })["catch"](function () {
        log.debug("executeScriptCommand -", command, "rejected");
        throw new Error("error sending command to device");
      });
    }
  }, {
    key: "executeScriptCommands",
    value: function executeScriptCommands(commands) {
      if (!this.connected) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
      }
      log.debug("executeScriptCommands -", commands);
      return _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.GO123BLESendAndExecuteMultipleCommands(commands).then(function () {
        log.debug("executeScriptCommands -", commands, "resolved");
        return true;
      })["catch"](function () {
        log.debug("executeScriptCommands -", commands, "rejected");
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
      return _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.GO123BLEStopScriptEngine().then(function () {
        return;
      });
    }
  }, {
    key: "setConfigPreset",
    value: function setConfigPreset(preset) {
      if (!this.connected) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
      }
      log.debug("setConfigPreset -", preset);
      return _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.GO123BLESendPresetConfigCommand(preset).then(function () {
        return true;
      })["catch"](function () {
        throw new Error("error sending config to device");
      });
    }
  }, {
    key: "setConfigForPort",
    value: function setConfigForPort(port, deviceType, flags) {
      var limitPct = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 66;
      var limitMax = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 750;
      if (!this.connected) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
      }
      log.debug("setConfigForPort -", port, deviceType, flags, limitPct, limitMax);
      return _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.GO123BLESendConfigCommand(port, deviceType, flags, limitPct, limitMax).then(function () {
        return true;
      })["catch"](function () {
        throw new Error("error sending config to device");
      });
    }
  }, {
    key: "setEyeSensorMode",
    value: function setEyeSensorMode(mode) {
      if (!this.connected) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
      }
      log.debug("setEyeSensorMode -", mode);
      return _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.GO123BLESendSensorMode(mode).then(function () {
        return true;
      })["catch"](function () {
        throw new Error("error sending sensor mode to device");
      });
    }
  }, {
    key: "clearPortEvents",
    value: function clearPortEvents(port) {
      if (!this.connected) {
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.NoBrainConnectedError();
      }
      log.debug("clearPortEvents -", port);
      return _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.GO123BLEClearPortEvents(port).then(function () {
        return true;
      })["catch"](function () {
        throw new Error("error clearing port events");
      });
    }
    //#endregion script commands

    //#region remote control
  }, {
    key: "sendControllerButton",
    value: function () {
      var _sendControllerButton = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(command, buttonID) {
        var whenPressed,
          prom,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              whenPressed = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : true;
              _context2.next = 3;
              return new Promise(function (resolve, reject) {
                _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.GO123BLESendGOControllerButton(command, buttonID, whenPressed).then(function () {
                  resolve(true);
                })["catch"](function () {
                  reject("error sending controller buttons");
                });
              })["catch"](function (err) {
                throw new Error(err);
              });
            case 3:
              prom = _context2.sent;
              return _context2.abrupt("return", prom);
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function sendControllerButton(_x, _x2) {
        return _sendControllerButton.apply(this, arguments);
      }
      return sendControllerButton;
    }()
  }, {
    key: "sendControllerJoystickPreset",
    value: function () {
      var _sendControllerJoystickPreset = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(newType) {
        var driveSensi,
          turnSensi,
          prom,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              driveSensi = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 50;
              turnSensi = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : 50;
              _context3.next = 4;
              return new Promise(function (resolve, reject) {
                _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.GO123BLESendGOControllerJoysticPreset(newType, driveSensi, turnSensi).then(function () {
                  resolve(true);
                })["catch"](function () {
                  reject("error sending joystic preset");
                });
              })["catch"](function (err) {
                throw new Error(err);
              });
            case 4:
              prom = _context3.sent;
              return _context3.abrupt("return", prom);
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function sendControllerJoystickPreset(_x3) {
        return _sendControllerJoystickPreset.apply(this, arguments);
      }
      return sendControllerJoystickPreset;
    }()
  }, {
    key: "saveControllerConfig",
    value: function () {
      var _saveControllerConfig = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var prom;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return new Promise(function (resolve, reject) {
                _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.GO123BLESaveGOControllerConfig().then(function () {
                  resolve(true);
                })["catch"](function () {
                  reject("error clearing port events");
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
      function saveControllerConfig() {
        return _saveControllerConfig.apply(this, arguments);
      }
      return saveControllerConfig;
    }()
  }, {
    key: "sendControllerValues",
    value: function () {
      var _sendControllerValues = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(leftX, leftY, rightX, rightY, buttons) {
        var prom;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return new Promise(function (resolve, reject) {
                _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.GO123BLESendGOControllerValues(leftX, leftY, rightX, rightY, buttons).then(function () {
                  resolve(true);
                })["catch"](function () {
                  reject("error clearing port events");
                });
              })["catch"](function (err) {
                throw new Error(err);
              });
            case 2:
              prom = _context5.sent;
              return _context5.abrupt("return", prom);
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function sendControllerValues(_x4, _x5, _x6, _x7, _x8) {
        return _sendControllerValues.apply(this, arguments);
      }
      return sendControllerValues;
    }() //#endregion remote control
    //#region firmware
  }, {
    key: "setFirmwareChannel",
    value: function () {
      var _setFirmwareChannel = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(channel) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.GO123BLESetFirmwareChannel(channel);
            case 2:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function setFirmwareChannel(_x9) {
        return _setFirmwareChannel.apply(this, arguments);
      }
      return setFirmwareChannel;
    }()
  }, {
    key: "getCurrentFirmware",
    value: function () {
      var _getCurrentFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.getRobotInfo();
            case 2:
              return _context7.abrupt("return", _context7.sent.robotFirmwareVersion);
            case 3:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function getCurrentFirmware() {
        return _getCurrentFirmware.apply(this, arguments);
      }
      return getCurrentFirmware;
    }()
  }, {
    key: "_getConnectedBrainBootloader",
    value:
    //#endregion firmware

    //#region internal firmware
    //#endregion internal firmware

    //#region internal firmware low level
    function _getConnectedBrainBootloader() {
      return _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.GO123BLEGetBrainBootloader();
    }
  }, {
    key: "getOnlineFWVersion",
    value: function () {
      var _getOnlineFWVersion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(deviceType) {
        var product, versionStr;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              product = this._deviceTypeToProductType(deviceType);
              _context8.next = 3;
              return _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.GO123BLEGetCurrentFirmwareFor(product);
            case 3:
              versionStr = _context8.sent.replace("b", ".");
              return _context8.abrupt("return", _VexVersion__WEBPACK_IMPORTED_MODULE_3__.VexVersion.fromString(versionStr));
            case 5:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function getOnlineFWVersion(_x10) {
        return _getOnlineFWVersion.apply(this, arguments);
      }
      return getOnlineFWVersion;
    }()
  }, {
    key: "getOnlineBLVersion",
    value: function () {
      var _getOnlineBLVersion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(deviceType) {
        var product, versionStr;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              product = this._deviceTypeToProductType(deviceType);
              _context9.next = 3;
              return _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.GO123BLEGetCurrentBootloaderFor(product);
            case 3:
              versionStr = _context9.sent.replace("b", ".");
              return _context9.abrupt("return", _VexVersion__WEBPACK_IMPORTED_MODULE_3__.VexVersion.fromString(versionStr));
            case 5:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function getOnlineBLVersion(_x11) {
        return _getOnlineBLVersion.apply(this, arguments);
      }
      return getOnlineBLVersion;
    }()
  }, {
    key: "lowLevelUpdateFW",
    value: function () {
      var _lowLevelUpdateFW = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(progressCallback) {
        var _this2 = this;
        var forceUpdate,
          needsFW,
          res,
          resError,
          _args11 = arguments;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              forceUpdate = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : false;
              log.debug("lowLevelUpdateFW");
              log.debug("checking if we actually need to update the FW");
              needsFW = forceUpdate || this.targetDevice.robotNeedsFirmwareUpdate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.NeedsUpdate;
              if (needsFW) {
                _context11.next = 7;
                break;
              }
              log.debug("skipping Firmware update as it is already up to date");
              return _context11.abrupt("return", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.SUCCESS);
            case 7:
              this.FWUpdateProgressCB = progressCallback;
              res = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.FAILURE;
              resError = null;
              _context11.prev = 10;
              _context11.next = 13;
              return new Promise(/*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
                  var updateStartResult;
                  return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                      case 0:
                        log.info("starting firmware update process");
                        _context10.next = 3;
                        return _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.GO123BLEStartFirmwareUpdate();
                      case 3:
                        updateStartResult = _context10.sent;
                        if (updateStartResult !== 0) {
                          log.warn("error starting firmware update process. error code:", updateStartResult);
                          reject(new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorStartingFWUpdate());
                        }
                        _this2.resolveFWUpdatePromise = resolve;
                        _this2.setUpdateTimeoutTimerCallback(function () {
                          log.warn("Firmware update failed due to progress timeout");
                          reject(new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorUpdatingFW());
                        });
                        _this2.startUpdateTimeoutTimer(20000);
                        log.debug("waiting for FW update to complete");
                      case 9:
                      case "end":
                        return _context10.stop();
                    }
                  }, _callee10);
                }));
                return function (_x13, _x14) {
                  return _ref.apply(this, arguments);
                };
              }());
            case 13:
              res = _context11.sent;
              _context11.next = 21;
              break;
            case 16:
              _context11.prev = 16;
              _context11.t0 = _context11["catch"](10);
              log.warn(_context11.t0);
              resError = _context11.t0;
              throw _context11.t0;
            case 21:
              _context11.prev = 21;
              this.stopUpdateTimeoutTimer();
              this.clearUpdateTimeoutTimerCallback();
              return _context11.finish(21);
            case 25:
              this.resolveFWUpdatePromise = null;
              this.FWUpdateProgressCB = null;
              log.debug("update complete with code", res);
              if (!(res === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.SUCCESS)) {
                _context11.next = 44;
                break;
              }
              _context11.prev = 29;
              log.debug("waiting for reconnect");
              _context11.next = 33;
              return this.waitForReconnect(25000);
            case 33:
              _context11.next = 35;
              return (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.waitms)(1000);
            case 35:
              _context11.next = 42;
              break;
            case 37:
              _context11.prev = 37;
              _context11.t1 = _context11["catch"](29);
              log.warn("failed to reconnect to updated device");
              this.connected = false;
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorUpdatingFW();
            case 42:
              _context11.next = 50;
              break;
            case 44:
              if (!(res === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.FAILURE)) {
                _context11.next = 48;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorUpdatingFW();
            case 48:
              if (!(res === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.DISCONNECT)) {
                _context11.next = 50;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorConnectionDuringFW();
            case 50:
              if (!resError) {
                _context11.next = 52;
                break;
              }
              throw resError;
            case 52:
              return _context11.abrupt("return", res);
            case 53:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this, [[10, 16, 21, 25], [29, 37]]);
      }));
      function lowLevelUpdateFW(_x12) {
        return _lowLevelUpdateFW.apply(this, arguments);
      }
      return lowLevelUpdateFW;
    }()
  }, {
    key: "lowLevelUpdateBL",
    value: function () {
      var _lowLevelUpdateBL = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(progressCallback) {
        var _this3 = this;
        var forceUpdate,
          needsBL,
          res,
          resError,
          _args13 = arguments;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              forceUpdate = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : false;
              log.debug("lowLevelUpdateBL", this.targetDevice);
              log.debug("checking if we actually need to update the BL");
              needsBL = forceUpdate || this.targetDevice.robotNeedsBootloaderUpdate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.NeedsUpdate;
              if (needsBL) {
                _context13.next = 7;
                break;
              }
              log.debug("skipping Bootloader update as it is already up to date");
              return _context13.abrupt("return", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.SUCCESS);
            case 7:
              this.BLUpdateProgressCB = progressCallback;
              res = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.FAILURE;
              resError = null;
              _context13.prev = 10;
              _context13.next = 13;
              return new Promise(/*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(resolve, reject) {
                  var updateStartResult;
                  return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                      case 0:
                        log.info("starting bootloader update process");
                        _context12.next = 3;
                        return _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.GO123BLEStartBootloaderUpdate();
                      case 3:
                        updateStartResult = _context12.sent;
                        if (updateStartResult !== 0) {
                          log.warn("error starting bootloader update process. error code:", updateStartResult);
                          reject(new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorStartingBLUpdate());
                        }
                        _this3.resolveBLUpdatePromise = resolve;
                        _this3.setUpdateTimeoutTimerCallback(function () {
                          log.warn("Bootloader update failed due to progress timeout");
                          reject(new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorUpdatingBL());
                        });
                        _this3.startUpdateTimeoutTimer(20000);
                        log.debug("waiting for BL update to complete");
                      case 9:
                      case "end":
                        return _context12.stop();
                    }
                  }, _callee12);
                }));
                return function (_x16, _x17) {
                  return _ref2.apply(this, arguments);
                };
              }());
            case 13:
              res = _context13.sent;
              _context13.next = 20;
              break;
            case 16:
              _context13.prev = 16;
              _context13.t0 = _context13["catch"](10);
              resError = _context13.t0;
              throw _context13.t0;
            case 20:
              _context13.prev = 20;
              this.stopUpdateTimeoutTimer();
              this.clearUpdateTimeoutTimerCallback();
              return _context13.finish(20);
            case 24:
              this.resolveBLUpdatePromise = null;
              this.BLUpdateProgressCB = null;
              if (!(res === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.FAILURE)) {
                _context13.next = 30;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorUpdatingBL();
            case 30:
              if (!(res === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.DISCONNECT)) {
                _context13.next = 32;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorConnectionDuringBL();
            case 32:
              if (!resError) {
                _context13.next = 34;
                break;
              }
              throw resError;
            case 34:
              return _context13.abrupt("return", res);
            case 35:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this, [[10, 16, 20, 24]]);
      }));
      function lowLevelUpdateBL(_x15) {
        return _lowLevelUpdateBL.apply(this, arguments);
      }
      return lowLevelUpdateBL;
    }()
  }, {
    key: "enableSleep",
    value: function enableSleep() {
      return _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.EnableSleep();
    }
  }, {
    key: "disableSleep",
    value: function disableSleep() {
      return _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.DisableSleep();
    }
    //#endregion firmware

    //#region events
  }, {
    key: "registerSuspendCallback",
    value: function registerSuspendCallback(callback) {
      _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.onAppSuspendedEvent.registerCallback(callback);
    }
  }, {
    key: "unregisterSuspendCallback",
    value: function unregisterSuspendCallback(callback) {
      _nativeInterface__WEBPACK_IMPORTED_MODULE_8__.onAppSuspendedEvent.unregisterCallback(callback);
    }
    //#endregion

    //#region native -> webapp events
  }, {
    key: "onGO123BLEDeviceDiscovered",
    value: function onGO123BLEDeviceDiscovered(name, serial, product, mode, version, rssi, battery) {
      var _this4 = this;
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
            _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.DeviceListUpdate", _this4.discoveredDevices);
          });
        }
        return;
      }
      if (this.targetDevice && this.targetDevice.serial === serial) {
        return;
      }
      this.processDiscoveredDevice(name, serial, product, mode, versionObject, rssi, battery, true);
    }
  }, {
    key: "onGO123BLEDeviceConnected",
    value: function () {
      var _onGO123BLEDeviceConnected = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(name, serial, version, mode) {
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
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
              log.debug("old targetDevice", this.targetDevice);
              log.debug("connectionTargetDevice", this.connectionTargetDevice);
              this.targetDevice = Object.assign({}, this.connectionTargetDevice);
              this.targetDevice.canUpdate = true;
              log.debug("connectedDevice:", this.targetDevice);
              this.triggerBLEConnectionStateChange();
              log.info("onGOBLEDeviceConnected", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode[mode]);
              _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.BrainInfoUpdated", this.targetDevice);
              this.checkAndUpdateDevice();
            case 14:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function onGO123BLEDeviceConnected(_x18, _x19, _x20, _x21) {
        return _onGO123BLEDeviceConnected.apply(this, arguments);
      }
      return onGO123BLEDeviceConnected;
    }()
  }, {
    key: "onGO123BLEDeviceDisconnected",
    value: function onGO123BLEDeviceDisconnected() {
      if (this.disconnectionResolver) {
        this.connected = false;
        this.disconnectionResolver.resolve(true);
      }
      this.disconnectionResolver = null;
      if (this.connected && !this.updatingDevice) {
        log.warn("device disconnected, restarting scanning");
        this.connected = false;
        this.checkingDeviceFirmware = false;
        this.updatingDevice = false;
        this.triggerBLEConnectionStateChange();
        log.info("onGOBLEDeviceDisconnected");
      }
    }

    //#region status events
    //#endregion status events
    //#endregion native -> webapp events

    //#region low-level logger
  }, {
    key: "getLowLevelLogger",
    value: function getLowLevelLogger() {
      return null;
    }
    //#endregion low-level logger
  }]);
}(_GO123Interface__WEBPACK_IMPORTED_MODULE_5__.GO123Interface);


/***/ })

}]);
//# sourceMappingURL=9466a51e0e8016b8d029.src_HardwareInterface_GO123_GO123BLE_ts.bundle.js.map