"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_HardwareInterface_VEXSerial_VexSerialElectron_ts"],{

/***/ "./src/HardwareInterface/VEXSerial/VexSerialElectron.ts":
/*!**************************************************************!*\
  !*** ./src/HardwareInterface/VEXSerial/VexSerialElectron.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexSerialElectron: () => (/* binding */ VexSerialElectron)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VexSerialPort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VexSerialPort */ "./src/HardwareInterface/VEXSerial/VexSerialPort.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/HardwareInterface/VEXSerial/helpers.ts");
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("VexSerialElectron");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

log.setHistoryLogger("VexSerial");



/**
 * Proxy for two-way communication with Serial Bridge on the main process
 * This specific to Electron and Proxy should be built as part of renderer process code(web app)
 * In order to avoid making node build of VEXcode app, VEXcode Electron isolates main and renderer context
 * and communicate between Web app & Node using IPC 
 */
var VexSerialElectron = /*#__PURE__*/function (_VexSerialPort) {
  function VexSerialElectron(portFilters) {
    var _this;
    _classCallCheck(this, VexSerialElectron);
    _this = _callSuper(this, VexSerialElectron, [portFilters]);
    _defineProperty(_this, "isSupported", true);
    _defineProperty(_this, "connectedFilter", null);
    /**
     * to make sure there are no issues with bindings of callbacks, we have this
     * flag to make sure we don't register the callbacks until they have been
     * bound to this correctly. If false, they have not been bound yet
     */
    _defineProperty(_this, "_callbacksBound", false);
    _this.onReceiveData = _this.onReceiveData.bind(_this);
    _this.onConnect = _this.onConnect.bind(_this);
    _this.onDisconnect = _this.onDisconnect.bind(_this);
    _this._callbacksBound = true;

    // now that the callbacks have been bound, attach handlers for the messages
    // coming from Main process.
    _this.InitializeRxHandlers();
    return _this;
  }

  //#region connection controls
  _inherits(VexSerialElectron, _VexSerialPort);
  return _createClass(VexSerialElectron, [{
    key: "setPortFilters",
    value: function setPortFilters(filters) {
      // log.info("setPortFilters", filters, this.uuid);
      this._portFilters = filters;
      window.electronAPI.serial.setPortFilters(filters);
    }
  }, {
    key: "openPort",
    value: function () {
      var _openPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(skipChecks) {
        var remainingRetires;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!skipChecks) {
                _context.next = 14;
                break;
              }
              if (!this.connectedFilter) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", window.electronAPI.serial.reconnect(this.connectedFilter));
            case 5:
              log.info("no filter to reconnect to...");
              remainingRetires = 4;
            case 7:
              if (!(remainingRetires > 0 && !this.connectedFilter)) {
                _context.next = 14;
                break;
              }
              log.info("delaying for reconnect");
              _context.next = 11;
              return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.waitms)(1000);
            case 11:
              remainingRetires--;
              _context.next = 7;
              break;
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function openPort(_x) {
        return _openPort.apply(this, arguments);
      }
      return openPort;
    }()
  }, {
    key: "openEstablishedPort",
    value: function () {
      var _openEstablishedPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function openEstablishedPort() {
        return _openEstablishedPort.apply(this, arguments);
      }
      return openEstablishedPort;
    }()
  }, {
    key: "closePort",
    value: function () {
      var _closePort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return window.electronAPI.serial.closeConnection(this.connectedFilter);
            case 3:
              result = _context3.sent;
              return _context3.abrupt("return", result);
            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              log.debug("error closing connections :", _context3.t0);
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[0, 7]]);
      }));
      function closePort() {
        return _closePort.apply(this, arguments);
      }
      return closePort;
    }() //#endregion connection controls
  }, {
    key: "writeData",
    value: function () {
      var _writeData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(data) {
        var _convertBufferToHexSt, _convertBufferToHexSt2;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!this.connectedFilter) {
                _context4.next = 7;
                break;
              }
              log.debug("writeData:", (_convertBufferToHexSt = (_convertBufferToHexSt2 = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.convertBufferToHexString)(data)) === null || _convertBufferToHexSt2 === void 0 ? void 0 : _convertBufferToHexSt2.substring(0, 140)) !== null && _convertBufferToHexSt !== void 0 ? _convertBufferToHexSt : "no data");
              _context4.next = 4;
              return window.electronAPI.serial.writeToSerial(this.connectedFilter, data);
            case 4:
              return _context4.abrupt("return");
            case 7:
              log.warn("unable to write to serial. no connected port");
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function writeData(_x2) {
        return _writeData.apply(this, arguments);
      }
      return writeData;
    }()
  }, {
    key: "getOpenPortInformation",
    value: function () {
      var _getOpenPortInformation = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!this.connectedFilter) {
                _context5.next = 4;
                break;
              }
              return _context5.abrupt("return", window.electronAPI.serial.getPortInfo(this.connectedFilter));
            case 4:
              log.warn("not connected. unable to get port information");
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function getOpenPortInformation() {
        return _getOpenPortInformation.apply(this, arguments);
      }
      return getOpenPortInformation;
    }() //#region in-coming events from Main process
    /**
     * callback to receive data from the connected device
     * @param port 
     * @param data data received from the device
     */
  }, {
    key: "onReceiveData",
    value: function onReceiveData(port, data) {
      if (this.connectedFilter && this.isPortEqual(port, this.connectedFilter)) {
        log.debug("onReceiveData", this.uuid, (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.convertBufferToHexString)(data));
        this.fireEvent("dataReceived", data);
      }
    }
    /**
     * callback from low level serial when a device is connected
     * @param port connected device/portinfo
     */
  }, {
    key: "onConnect",
    value: function onConnect(port) {
      var _this2 = this;
      if (this.matchesPortFilters(port)) {
        log.info("new connection. saving information", port, this.uuid);
        this.connectedFilter = port;
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.waitms)(100).then(function () {
          _this2.fireEvent("connected");
        });
        // } else if (this.connectedFilter && this.isPortEqual(port, this.connectedFilter)) {
        //   log.debug("why is there a connection event when already connected?", this.uuid);
      } else {
        log.debug("got another connection event for a different port", port, this.uuid);
      }
    }
    /**
     * callback from low level serial when a device is disconnected
     * @param port connected device/portinfo
     */
  }, {
    key: "onDisconnect",
    value: function onDisconnect(port) {
      if (this.connectedFilter && this.isPortEqual(port, this.connectedFilter)) {
        log.info("disconnect event for connected port", port, this.uuid);
        this.connectedFilter = null;
        this.fireEvent("disconnected");
      } else if (!this.connectedFilter && this.matchesPortFilters(port)) {
        log.debug("how do we get a disconnect event when we are not connected to a port?", port, this.uuid);
      } else {
        log.debug("disconnect event for a different port", port, this.uuid);
      }
    }

    /**
     * attaches handlers for the incoming messages from Serial Bridge
     */
  }, {
    key: "InitializeRxHandlers",
    value: function InitializeRxHandlers() {
      // //handler to test/debug context bridge communication works between main & renderer processes
      // window.electronAPI.test.onTestBridgeMainToRenderer((data) => {
      //   log.debug("Data received from Main: ", data);
      // })
      //handlers for messages received from serial bridge 
      var portFilter = this._portFilters[0] || undefined;
      window.electronAPI.serial.onReceiveData(portFilter, this.onReceiveData);
      window.electronAPI.serial.onConnect(portFilter, this.onConnect);
      window.electronAPI.serial.onDisconnect(portFilter, this.onDisconnect);
    }

    //#endregion in-coming events from Main process

    //#region helpers
  }, {
    key: "isPortEqual",
    value: function isPortEqual(value1, value2) {
      return value1.usbVendorId == value2.usbVendorId && value1.usbProductId == value2.usbProductId && value1.portType == value2.portType;
    }

    /**
     * checks to see if the provided port information matches any of the port filters
     * @param port the port information to check
     * @returns true if the port matches any of the set filters
     */
  }, {
    key: "matchesPortFilters",
    value: function matchesPortFilters(port) {
      for (var index = 0; index < this._portFilters.length; index++) {
        var portFilter = this._portFilters[index];
        if (this.isPortEqual(port, portFilter)) {
          return true;
        }
      }
      return false;
    }
    //#endregion helpers
  }]);
}(_VexSerialPort__WEBPACK_IMPORTED_MODULE_1__.VexSerialPort);

/***/ }),

/***/ "./src/HardwareInterface/VEXSerial/VexSerialPort.ts":
/*!**********************************************************!*\
  !*** ./src/HardwareInterface/VEXSerial/VexSerialPort.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexSerialPort: () => (/* binding */ VexSerialPort)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/uuid */ "./src/utils/uuid.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("VexSerialPort");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

log.setHistoryLogger("VexSerial");


/**
 * a generic serial class that is used by the rest of the VexSerial code to
 * send/receive data from the serial port. This is the common interface that
 * all supported serial ports must use to work.
 */
var VexSerialPort = /*#__PURE__*/function () {
  function VexSerialPort() {
    var portFilters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{
      usbVendorId: 0x2888
    }];
    _classCallCheck(this, VexSerialPort);
    _defineProperty(this, "uuid", (0,_utils_uuid__WEBPACK_IMPORTED_MODULE_1__.generateShortUUID)());
    //#region event handlers
    _defineProperty(this, "eventCallbacks", {
      "connected": [],
      "disconnected": [],
      "dataReceived": []
    });
    this.setPortFilters(portFilters);
    log.debug("new proxy", this.uuid, portFilters);
  }

  //#region connection controls
  /**
   * Tells the serial port interface what USB serial ports to look for. This
   * lets us only see the serial ports for the desired hardware devices
   * @param portFilters the ports that we want to look for
   */
  return _createClass(VexSerialPort, [{
    key: "on",
    value: function on(eventName, callback) {
      if (this.eventCallbacks[eventName].indexOf(callback) >= 0) {
        return;
      }
      this.eventCallbacks[eventName].push(callback);
    }
  }, {
    key: "off",
    value: function off(eventName, callback) {
      var i = this.eventCallbacks[eventName].indexOf(callback);
      if (i < 0) {
        log.warn("Unknown callback.");
        return;
      }
      this.eventCallbacks[eventName].splice(i, 1);
    }
  }, {
    key: "fireEvent",
    value: function fireEvent(eventName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      if (this.eventCallbacks[eventName]) {
        this.eventCallbacks[eventName].forEach(function (callback) {
          callback.apply(void 0, args);
        });
      }
    }
    //#endregion event handlers
  }]);
}();


/***/ })

}]);
//# sourceMappingURL=2cb0cce164d45b9569d0.src_HardwareInterface_VEXSerial_VexSerialElectron_ts.bundle.js.map