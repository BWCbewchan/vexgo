"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_HardwareInterface_VEXSerial_VEXWebSerial_ts"],{

/***/ "./src/HardwareInterface/VEXSerial/VEXWebSerial.ts":
/*!*********************************************************!*\
  !*** ./src/HardwareInterface/VEXSerial/VEXWebSerial.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexWebSerial: () => (/* binding */ VexWebSerial)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/HardwareInterface/VEXSerial/helpers.ts");
/* harmony import */ var _VexSerialPort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VexSerialPort */ "./src/HardwareInterface/VEXSerial/VexSerialPort.ts");
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("VexWebSerial");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

log.setHistoryLogger("VexSerial");


var VexWebSerial = /*#__PURE__*/function (_VexSerialPort) {
  function VexWebSerial(portFilters) {
    var _this;
    _classCallCheck(this, VexWebSerial);
    _this = _callSuper(this, VexWebSerial, [portFilters]);
    _defineProperty(_this, "isSupported", navigator && navigator.serial ? true : false);
    _defineProperty(_this, "serialPort", null);
    _defineProperty(_this, "serialReader", null);
    _defineProperty(_this, "serialWriter", null);
    if (!_this.isSupported) {
      log.error("Web Serial is not supported!");
    } else {
      log.info("Web serial is supported");
    }

    // this.onConnect = this.onConnect.bind(this);
    _this.onDisconnect = _this.onDisconnect.bind(_this);
    if (_this.isSupported) {
      // navigator.serial.addEventListener("connect", this.onConnect);
      navigator.serial.addEventListener("disconnect", _this.onDisconnect);
    }
    return _this;
  }

  //#region connection controls
  _inherits(VexWebSerial, _VexSerialPort);
  return _createClass(VexWebSerial, [{
    key: "setPortFilters",
    value: function setPortFilters(filters) {
      log.debug("setPortFilters:", filters, this.uuid);
      this._portFilters = filters;
    }
  }, {
    key: "openPort",
    value: function () {
      var _openPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(skipChecks) {
        var requestOptions, port;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              log.info("openPort", skipChecks, this.uuid);
              if (!(!skipChecks && !this.isSupported)) {
                _context.next = 4;
                break;
              }
              log.error("Web Serial is not supported!");
              return _context.abrupt("return");
            case 4:
              if (!(!skipChecks && this.serialPort)) {
                _context.next = 7;
                break;
              }
              log.warn("already connected to a serial port");
              return _context.abrupt("return");
            case 7:
              _context.prev = 7;
              requestOptions = {
                filters: this._portFilters
              };
              _context.next = 11;
              return navigator.serial.requestPort(requestOptions);
            case 11:
              port = _context.sent;
              _context.next = 14;
              return this.openSerialPort(port);
            case 14:
              _context.next = 22;
              break;
            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](7);
              log.error(_context.t0);
              this.serialPort = null;
              this.fireEvent("disconnected");
              throw _context.t0;
            case 22:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[7, 16]]);
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
        var _this2 = this;
        var establishedPorts, filteredPorts;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              log.debug("openEstablishedPort");
              // get a list of the ports that we can already connect to
              _context2.next = 3;
              return navigator.serial.getPorts();
            case 3:
              establishedPorts = _context2.sent;
              log.debug("establishedPorts:", establishedPorts);
              // filter the ports based on the port filters
              filteredPorts = establishedPorts.filter(function (port) {
                // get the port info here so that we don't call it multiple times
                var portInfo = port.getInfo();
                for (var filterIndex = 0; filterIndex < _this2._portFilters.length; filterIndex++) {
                  var filterItem = _this2._portFilters[filterIndex];
                  var pidMatch = !filterItem.usbProductId || filterItem.usbProductId === portInfo.usbProductId;
                  var vidMatch = !filterItem.usbVendorId || filterItem.usbVendorId === portInfo.usbVendorId;
                  if (pidMatch && vidMatch) {
                    return true;
                  }
                }
              });
              log.debug("filteredPorts:", this.uuid, filteredPorts);
              if (!(filteredPorts.length >= 1)) {
                _context2.next = 10;
                break;
              }
              _context2.next = 10;
              return this.openSerialPort(filteredPorts[0]);
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
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
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!this.serialPort) {
                _context3.next = 19;
                break;
              }
              log.debug("need to close port");
              if (!this.serialReader) {
                _context3.next = 7;
                break;
              }
              log.debug("cancel reader");
              _context3.next = 6;
              return this.serialReader.cancel();
            case 6:
              log.debug("reader canceled");
            case 7:
              if (!this.serialWriter) {
                _context3.next = 12;
                break;
              }
              log.debug("release writer");
              _context3.next = 11;
              return this.serialWriter.releaseLock();
            case 11:
              log.debug("writer released");
            case 12:
              if (!this.serialPort) {
                _context3.next = 19;
                break;
              }
              log.debug("closing port");
              _context3.next = 16;
              return this.serialPort.close();
            case 16:
              this.serialPort = null;
              log.debug("port closed");
              this.fireEvent("disconnected");
            case 19:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function closePort() {
        return _closePort.apply(this, arguments);
      }
      return closePort;
    }()
    /**
     * This actually connects to the provided serial port object. This is used for
     * new connections and connecting to established ports. This way we have the
     * logic for the actual connection in a single place.
     * 
     * The logic for getting the port object is in openConnection and 
     * openEstablishedConnection.
     * 
     * @see openPort
     * @see openEstablishedPort
     * 
     * @param port the serial port object we want to connect to.
     */
  }, {
    key: "openSerialPort",
    value: (function () {
      var _openSerialPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(port) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!port) {
                _context4.next = 14;
                break;
              }
              log.debug("user selected a serial port");
              this.serialPort = port;

              // - Wait for the port to open.
              log.debug("attempting to open connection to the selected serial port");
              _context4.next = 6;
              return port.open({
                baudRate: 115200
              });
            case 6:
              // chrome 87 changed API
              log.debug("opened connection to the selected serial port");
              this.serialReader = port.readable.getReader();
              this.serialWriter = port.writable.getWriter();
              this.fireEvent("connected");
              log.debug("starting read loop");
              this.serialReadLoop(this.serialReader).then(function () {
                log.debug("read loop ended");
              });
              _context4.next = 16;
              break;
            case 14:
              log.debug("user did not select a serial port");
              this.fireEvent("disconnected");
            case 16:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function openSerialPort(_x2) {
        return _openSerialPort.apply(this, arguments);
      }
      return openSerialPort;
    }() //#endregion connection controls
    )
  }, {
    key: "writeData",
    value: function () {
      var _writeData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(data) {
        var _convertUint8ArrayToH, _convertUint8ArrayToH2;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (this.isSupported) {
                _context5.next = 3;
                break;
              }
              log.error("Web Serial is not supported!");
              return _context5.abrupt("return");
            case 3:
              if (this.serialPort) {
                _context5.next = 6;
                break;
              }
              log.warn("not connected to a serial port");
              return _context5.abrupt("return");
            case 6:
              log.debug("writing:", (_convertUint8ArrayToH = (_convertUint8ArrayToH2 = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.convertUint8ArrayToHexString)(data)) === null || _convertUint8ArrayToH2 === void 0 ? void 0 : _convertUint8ArrayToH2.substring(0, 140)) !== null && _convertUint8ArrayToH !== void 0 ? _convertUint8ArrayToH : "no data");
              _context5.next = 9;
              return this.serialWriter.write(data);
            case 9:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function writeData(_x3) {
        return _writeData.apply(this, arguments);
      }
      return writeData;
    }()
  }, {
    key: "serialReadLoop",
    value: function () {
      var _serialReadLoop = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(reader) {
        var _yield$reader$read, value, done;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (false) {}
              _context6.prev = 1;
              _context6.next = 4;
              return reader.read();
            case 4:
              _yield$reader$read = _context6.sent;
              value = _yield$reader$read.value;
              done = _yield$reader$read.done;
              log.debug("read loop done:", done, "value:", (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.convertUint8ArrayToHexString)(value));
              this.fireEvent("dataReceived", value);
              if (!done) {
                _context6.next = 12;
                break;
              }
              reader.releaseLock();
              return _context6.abrupt("return");
            case 12:
              _context6.next = 19;
              break;
            case 14:
              _context6.prev = 14;
              _context6.t0 = _context6["catch"](1);
              console.log(_context6.t0);
              reader.releaseLock();
              return _context6.abrupt("return");
            case 19:
              _context6.next = 0;
              break;
            case 21:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[1, 14]]);
      }));
      function serialReadLoop(_x4) {
        return _serialReadLoop.apply(this, arguments);
      }
      return serialReadLoop;
    }()
  }, {
    key: "getOpenPortInformation",
    value: function () {
      var _getOpenPortInformation = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _this$serialPort;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", (_this$serialPort = this.serialPort) === null || _this$serialPort === void 0 ? void 0 : _this$serialPort.getInfo());
            case 1:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function getOpenPortInformation() {
        return _getOpenPortInformation.apply(this, arguments);
      }
      return getOpenPortInformation;
    }() //#region event handlers
  }, {
    key: "listEventListeners",
    value: function listEventListeners(eventName) {
      log.debug(this.eventCallbacks[eventName]);
    }

    // private onConnect(event: Event) {
    //   log.debug("serial port connected", this);
    //   this.fireEvent("connected");
    // }
  }, {
    key: "onDisconnect",
    value: function onDisconnect(event) {
      log.debug("serial port disconnected");
      this.serialPort = null;
      this.fireEvent("disconnected");
    }
    //#endregion event handlers
  }]);
}(_VexSerialPort__WEBPACK_IMPORTED_MODULE_2__.VexSerialPort);


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
//# sourceMappingURL=30bb7af6fc0ccdaaaa4b.src_HardwareInterface_VEXSerial_VEXWebSerial_ts.bundle.js.map