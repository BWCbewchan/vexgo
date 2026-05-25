"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_HardwareInterface_VEXSerial_index_ts"],{

/***/ "./src/HardwareInterface/VEXSerial/index.ts":
/*!**************************************************!*\
  !*** ./src/HardwareInterface/VEXSerial/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createVexSerialPortInstance: () => (/* binding */ createVexSerialPortInstance),
/* harmony export */   createVexSerialPortInstanceNoWait: () => (/* binding */ createVexSerialPortInstanceNoWait),
/* harmony export */   getVexSerialPortClass: () => (/* binding */ getVexSerialPortClass)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _targetPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../targetPlatform */ "./src/targetPlatform.ts");
/* harmony import */ var _platformInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../platformInfo */ "./src/platformInfo.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("VexSerial");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

log.setHistoryLogger("VexSerial");

//#region runtime constants


var isBrowser = _platformInfo__WEBPACK_IMPORTED_MODULE_2__.currentPlatform === _platformInfo__WEBPACK_IMPORTED_MODULE_2__.Platform.Unknown && _platformInfo__WEBPACK_IMPORTED_MODULE_2__.currentBrowser !== _platformInfo__WEBPACK_IMPORTED_MODULE_2__.WebBrosers.None;
var isChromeBrowser = isBrowser && _platformInfo__WEBPACK_IMPORTED_MODULE_2__.currentBrowser === _platformInfo__WEBPACK_IMPORTED_MODULE_2__.WebBrosers.Chrome;
var isChromeEdgeBrowser = isBrowser && _platformInfo__WEBPACK_IMPORTED_MODULE_2__.currentBrowser === _platformInfo__WEBPACK_IMPORTED_MODULE_2__.WebBrosers.ChromiumEdge;
var isFirefoxBrowser = isBrowser && _platformInfo__WEBPACK_IMPORTED_MODULE_2__.currentBrowser === _platformInfo__WEBPACK_IMPORTED_MODULE_2__.WebBrosers.Firefox;
var isSupportedBrowser = isChromeBrowser || isChromeEdgeBrowser || isFirefoxBrowser;
var isWebSerialSystem = (_targetPlatform__WEBPACK_IMPORTED_MODULE_1__.targetIsIqOrV5OrEXP || _targetPlatform__WEBPACK_IMPORTED_MODULE_1__.targetIsAIM || _targetPlatform__WEBPACK_IMPORTED_MODULE_1__.targetIsAIR) && isSupportedBrowser;
//#endregion runtime constants

//#region class importer and storage

// a helper type to make it easier to have a constructable version of the
// abstract VexSerialPort

/** stores the reference to the system implementation of VexSerialPort */
var SerialClass = null;
var loadingClass = false;
var classIsLoaded = false;

/**
 * Processes the async import so that we cna use the result laster for creating
 * serial port instances with the correct class definitions
 * @param importResult the resulting import
 * @returns 
 */
function processClassImport(_x) {
  return _processClassImport.apply(this, arguments);
}
/**
 * loads the class definition for the current system
 */
function _processClassImport() {
  _processClassImport = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(importedClass) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          log.debug("importedClass:", importedClass);
          if (importedClass) {
            SerialClass = importedClass;
          } else {
            log.warn("provided importedClass is not truthy", importedClass);
          }
          classIsLoaded = true;
          loadingClass = false;
          fireEvent("classLoaded");
          return _context.abrupt("return", SerialClass);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _processClassImport.apply(this, arguments);
}
function loadClass() {
  return _loadClass.apply(this, arguments);
} //#endregion class importer and storage
//#region event system
function _loadClass() {
  _loadClass = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          loadingClass = true;
          if (!_platformInfo__WEBPACK_IMPORTED_MODULE_2__.PlatformIsElectron) {
            _context2.next = 10;
            break;
          }
          log.info("loading VexSerialElectron");
          _context2.t0 = processClassImport;
          _context2.next = 6;
          return __webpack_require__.e(/*! import() */ "src_HardwareInterface_VEXSerial_VexSerialElectron_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./VexSerialElectron */ "./src/HardwareInterface/VEXSerial/VexSerialElectron.ts"));
        case 6:
          _context2.t1 = _context2.sent.VexSerialElectron;
          return _context2.abrupt("return", (0, _context2.t0)(_context2.t1));
        case 10:
          if (!isWebSerialSystem) {
            _context2.next = 19;
            break;
          }
          log.info("loading VexWebSerial");
          _context2.t2 = processClassImport;
          _context2.next = 15;
          return __webpack_require__.e(/*! import() */ "src_HardwareInterface_VEXSerial_VEXWebSerial_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./VEXWebSerial */ "./src/HardwareInterface/VEXSerial/VEXWebSerial.ts"));
        case 15:
          _context2.t3 = _context2.sent.VexWebSerial;
          return _context2.abrupt("return", (0, _context2.t2)(_context2.t3));
        case 19:
          log.warn("no serial port to import...");
          return _context2.abrupt("return", processClassImport(undefined));
        case 21:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _loadClass.apply(this, arguments);
}
var eventCallbacks = {
  classLoaded: []
};
function on(eventName, callback) {
  if (eventCallbacks[eventName].indexOf(callback) >= 0) {
    return;
  }
  eventCallbacks[eventName].push(callback);
}
function off(eventName, callback) {
  var i = eventCallbacks[eventName].indexOf(callback);
  if (i < 0) {
    log.warn("Unknown callback.");
  }
  eventCallbacks[eventName].splice(i, 1);
}
function fireEvent(eventName) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  log.debug("fire event", eventName);
  if (eventCallbacks[eventName]) {
    eventCallbacks[eventName].slice(0).forEach(function (callback) {
      try {
        callback.apply(void 0, args);
      } catch (err) {
        log.error(err);
      }
    });
  }
}
//#endregion event system

/**
 * grabs the class for the system's implementation of VexSerialPort
 * @returns 
 */
function getVexSerialPortClass() {
  return _getVexSerialPortClass.apply(this, arguments);
}
/**
 * Creates a new instance of the VexSerialPort based on the platform specific
 * implementation class. If there is no implementation for the current system,
 * this will throw an error
 * 
 * @returns instance of VexSerialPort for the current system
 * @throws Error if there is no implementation for the current system
 */
function _getVexSerialPortClass() {
  _getVexSerialPortClass = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (!classIsLoaded) {
            _context3.next = 4;
            break;
          }
          return _context3.abrupt("return", SerialClass);
        case 4:
          if (!loadingClass) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", new Promise(function (resolve, reject) {
            var _waiter = function waiter() {
              off("classLoaded", _waiter);
              resolve(SerialClass);
            };
            on("classLoaded", _waiter);
          }));
        case 8:
          return _context3.abrupt("return", loadClass());
        case 9:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _getVexSerialPortClass.apply(this, arguments);
}
function createVexSerialPortInstance() {
  return _createVexSerialPortInstance.apply(this, arguments);
}
/**
 * Creates a new instance of the VexSerialPort based on the platform specific
 * implementation class. If there is no implementation for the current system,
 * this will return undefined
 * 
 * @returns instance of VexSerialPort for the current system
 */
function _createVexSerialPortInstance() {
  _createVexSerialPortInstance = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return getVexSerialPortClass();
        case 2:
          _context4.t0 = _context4.sent;
          return _context4.abrupt("return", new _context4.t0());
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _createVexSerialPortInstance.apply(this, arguments);
}
function createVexSerialPortInstanceNoWait(portFilters) {
  if (classIsLoaded) {
    return new SerialClass(portFilters);
  } else {
    log.warn("class is not loaded yet");
    return undefined;
  }
}

// imports of types of system specific implementations

// exporting the type again to allow for a single import in other files



/***/ })

}]);
//# sourceMappingURL=fc4a300d16c750f55366.src_HardwareInterface_VEXSerial_index_ts.bundle.js.map