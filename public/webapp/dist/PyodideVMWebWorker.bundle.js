var webapp;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@rm-vca/logger/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@rm-vca/logger/dist/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const logger_1 = __webpack_require__(/*! ./logger */ "./node_modules/@rm-vca/logger/dist/logger.js");
const logger = new logger_1.Logger();
module.exports = logger;


/***/ }),

/***/ "./node_modules/@rm-vca/logger/dist/logger.js":
/*!****************************************************!*\
  !*** ./node_modules/@rm-vca/logger/dist/logger.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// based on loglevel - https://github.com/pimterry/loglevel

Object.defineProperty(exports, "__esModule", ({ value: true }));
// Slightly dubious tricks to cut down minimized file size
// tslint:disable:no-empty
function noop() { }
// tslint:enable:no-empty
const undefinedType = "undefined";
const logMethods = [
    "trace",
    "debug",
    "info",
    "warn",
    "error",
];
const types_1 = __webpack_require__(/*! ./types */ "./node_modules/@rm-vca/logger/dist/types.js");
//#region helpers
// Cross-browser bind equivalent that works at least back to IE6
function bindMethod(obj, methodName) {
    const method = obj[methodName];
    if (typeof method.bind === "function") {
        return method.bind(obj);
    }
    else {
        return Function.prototype.bind.call(method, obj);
    }
}
// Build the best logging method possible for this env
// Wherever possible we want to bind, not wrap, to preserve stack traces
function realMethod(methodName) {
    if (methodName === "debug") {
        methodName = "log";
    }
    if (typeof console === undefinedType) {
        return false; // No method possible, for now - fixed later by enableLoggingWhenConsoleArrives
    }
    else if (console[methodName] !== undefined) {
        return bindMethod(console, methodName);
    }
    else if (console.log !== undefined) {
        return bindMethod(console, "log");
    }
    else {
        return noop;
    }
}
//#endregion helpers
//#region prefix
function levelFormatter(level) {
    return (level.toUpperCase() + "     ").slice(0, 5);
}
function nameFormatter(name) {
    return name || "root";
}
function timestampFormater(date) {
    return date.toISOString();
}
function prefixFormatter(template, level, name, timestamp) {
    template = template.replace(/%t/, timestampFormater(timestamp));
    template = template.replace(/%l/, levelFormatter(level));
    template = template.replace(/%n/, nameFormatter(name));
    return template;
}
//#endregion prefix
//#region history
const historyLoggersByName = {};
class HistoryLogger {
    constructor(name, defaultLevel) {
        this.name = name;
        this.defaultLevel = defaultLevel;
        this.levels = types_1.LoggerLevels;
        this.lines = [];
        this.loggerList = new Set();
        // Initialize with the right level
        const initialLevel = this.defaultLevel == null ? "INFO" : this.defaultLevel;
        this.setLevel(initialLevel);
        this.maxLines = 1000;
    }
    getName() {
        return this.name;
    }
    getLevel() {
        return this.currentLevel;
    }
    setLevel(level) {
        if (typeof level === "string" && this.levels[level.toUpperCase()] !== undefined) {
            level = this.levels[level.toUpperCase()];
        }
        if (typeof level === "number" && level >= 0 && level <= this.levels.SILENT) {
            this.currentLevel = level;
            // we need to rebuild any loggers that use this as the level change may
            // require updating the internal functions.
            const loggers = this.getLoggers();
            for (let logger of loggers) {
                logger.rebuildLogger();
            }
        }
        else {
            throw new RangeError("setLevel() called with invalid level: " + level);
        }
    }
    enableAll() {
        this.setLevel(this.levels.TRACE);
    }
    disableAll() {
        this.setLevel(this.levels.SILENT);
    }
    getMaxLines() {
        return this.maxLines;
    }
    setMaxLines(maxLines) {
        if (maxLines > 0) {
            this.maxLines = maxLines;
            while (this.lines.length >= this.maxLines) {
                this.lines.shift();
            }
        }
    }
    addToLogHistory(logEntry) {
        if (!logEntry) {
            return;
        }
        try {
            // compose the log output from args
            const output = logEntry.map((x) => {
                if (x === undefined) {
                    return "undefined";
                }
                else if (x === null) {
                    return "null";
                }
                else if (x instanceof Error) {
                    // Errors are also objects, so we need to handle them before the
                    // next check so that we actually get the error in the log...
                    return x.toString();
                }
                else if (typeof x === "object") {
                    return JSON.stringify(x);
                }
                return x.toString();
            }).join(" ");
            // add to log
            if (this.lines.length === this.maxLines) {
                this.lines.shift();
            }
            this.lines.push(output);
        }
        catch (ex) {
            // log.error("error collecting logs", ex);
        }
    }
    getLogHistory() {
        return this.lines;
    }
    getLogHistoryAsString() {
        return this.getLogHistory().join("\n");
    }
    clearLogHistory() {
        this.lines = [];
    }
    addLogger(name) {
        this.loggerList.add(name);
    }
    removeLogger(name) {
        this.loggerList.delete(name);
    }
    getLoggers() {
        const out = [];
        for (let name of this.loggerList) {
            const logger = loggersByName[name];
            if (logger) {
                out.push(logger);
            }
        }
        return out;
    }
}
//#endregion history
// where all the loggers are stored
const loggersByName = {};
class Logger {
    constructor(name, defaultLevel) {
        this.name = name;
        this.defaultLevel = defaultLevel;
        this.levels = types_1.LoggerLevels;
        // Initialize with the right level
        let initialLevel = this.defaultLevel == null ? "WARN" : this.defaultLevel;
        this.setLevel(initialLevel);
    }
    /**
     * create a function to log the data
     * @param methodName the name of the "level". this is also used for what the level is in the prefix
     * @param level the limit for the nor
     * @param loggerName the name of the logger. this is used with the prefix logic
     * @returns
     */
    methodFactory(methodName, level, loggerName) {
        const originalMethod = realMethod(methodName);
        const levelNum = types_1.LoggerLevels[methodName.toUpperCase()];
        const scope = this;
        return function (...args) {
            const prefix = prefixFormatter('[%t] %l (%n):', methodName.toUpperCase(), loggerName, new Date());
            if (args.length && typeof args[0] === 'string') {
                // concat prefix with first argument to support string substitutions
                args[0] = prefix + ' ' + args[0];
            }
            else {
                args.unshift(prefix);
            }
            if (levelNum >= scope.currentLevel) {
                originalMethod.apply(undefined, args);
            }
            if (scope.historyLogger && levelNum >= scope.historyLogger.getLevel()) {
                scope.historyLogger.addToLogHistory(args);
            }
        };
    }
    getName() {
        return this.name;
    }
    getLevel() {
        return this.currentLevel;
    }
    setLevel(level) {
        if (typeof level === "string" && this.levels[level.toUpperCase()] !== undefined) {
            level = this.levels[level.toUpperCase()];
        }
        if (typeof level === "number" && level >= 0 && level <= this.levels.SILENT) {
            this.currentLevel = level;
            this.replaceLoggingMethods(level, this.name);
            if (typeof console === undefinedType && level < this.levels.SILENT) {
                return "No console available for logging";
            }
        }
        else {
            throw new RangeError("log.setLevel() called with invalid level: " + level);
        }
    }
    enableAll() {
        this.setLevel(this.levels.TRACE);
    }
    disableAll() {
        this.setLevel(this.levels.SILENT);
    }
    getLogger(name) {
        if (typeof name !== "string" || name === "") {
            throw new TypeError("You must supply a name when creating a logger.");
        }
        let namedlogger = loggersByName[name];
        if (!namedlogger) {
            namedlogger = loggersByName[name] = new Logger(name, this.getLevel());
        }
        return namedlogger;
    }
    getLoggers() {
        return loggersByName;
    }
    /**
     * call this to set the fuinctions that are called by the logger. this lets us not do anything if
     * the function would be below the desired log level.
     * @param level the target log level
     * @param loggerName the name of the logger the functions are for
     */
    replaceLoggingMethods(level, loggerName) {
        const historyLevel = this.historyLogger ? this.historyLogger.getLevel() : this.levels.SILENT;
        const minLevel = Math.min(historyLevel, level);
        for (let i = 0; i < logMethods.length; i++) {
            const methodName = logMethods[i];
            const levelname = types_1.LoggerLevels[level];
            this[methodName] = (i < minLevel) ?
                noop :
                this.methodFactory(methodName, levelname, loggerName);
        }
        // Define log.log as an alias for log.debug
        this.log = this.debug;
    }
    /**
     * this is for internal use but needs to be public so the HistoryLogger
     * class can access it.
     */
    rebuildLogger() {
        this.replaceLoggingMethods(this.currentLevel, this.name);
    }
    /**
     * will tell this logger to log to a history logger
     * @param name the name of the history logger to use for this logger
     * @returns
     */
    setHistoryLogger(name) {
        if (typeof name !== "string" || name === "") {
            throw new TypeError("You must supply a name when creating a HistoryLogger.");
        }
        if (this.historyLogger) {
            this.historyLogger.removeLogger(this.name);
        }
        this.historyLogger = historyLoggersByName[name];
        if (!this.historyLogger) {
            this.historyLogger = historyLoggersByName[name] = new HistoryLogger(name, this.getLevel());
        }
        this.historyLogger.addLogger(this.name);
        this.rebuildLogger();
        return this.historyLogger;
    }
    /**
     * Will return the current HistoryLogger object for this logger
     * @returns HistoryLogger for the logger
     */
    getHistoryLogger() {
        return this.historyLogger;
    }
    /**
     * tells the logger to stop logging to the configured history logger.
     */
    removehistoryLogger() {
        if (this.historyLogger) {
            this.historyLogger.removeLogger(this.name);
            this.historyLogger = undefined;
            this.rebuildLogger();
        }
    }
    /**
     * gets all the current history logger objects
     * @returns
     */
    getHistoryLoggers() {
        return historyLoggersByName;
    }
    /**
     * will find and return the hitoriy logger with the specified name,
     * or undefined if it does not exist
     */
    getHistoryLoggerByName(name) {
        return historyLoggersByName[name];
    }
}
exports.Logger = Logger;


/***/ }),

/***/ "./node_modules/@rm-vca/logger/dist/types.js":
/*!***************************************************!*\
  !*** ./node_modules/@rm-vca/logger/dist/types.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var LoggerLevels;
(function (LoggerLevels) {
    LoggerLevels[LoggerLevels["TRACE"] = 0] = "TRACE";
    LoggerLevels[LoggerLevels["DEBUG"] = 1] = "DEBUG";
    LoggerLevels[LoggerLevels["INFO"] = 2] = "INFO";
    LoggerLevels[LoggerLevels["WARN"] = 3] = "WARN";
    LoggerLevels[LoggerLevels["ERROR"] = 4] = "ERROR";
    LoggerLevels[LoggerLevels["SILENT"] = 5] = "SILENT";
})(LoggerLevels || (LoggerLevels = {}));
exports.LoggerLevels = LoggerLevels;


/***/ }),

/***/ "./src/Blockly/Extensions/utils/helpers.ts":
/*!*************************************************!*\
  !*** ./src/Blockly/Extensions/utils/helpers.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drivetrainTimeoutWrapper: () => (/* binding */ drivetrainTimeoutWrapper),
/* harmony export */   drivetrainTimeoutWrapperSendCallback: () => (/* binding */ drivetrainTimeoutWrapperSendCallback),
/* harmony export */   mapRange: () => (/* binding */ mapRange),
/* harmony export */   motorTimeoutWrapper: () => (/* binding */ motorTimeoutWrapper),
/* harmony export */   setWrapper: () => (/* binding */ setWrapper),
/* harmony export */   waitms: () => (/* binding */ waitms)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SimWindow_SimUnity_SimMessageHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../SimWindow/SimUnity/SimMessageHelper */ "./src/SimWindow/SimUnity/SimMessageHelper.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("Extension Helpers");
log.setLevel(log.levels.WARN);

var PromiseTimeoutError = /*#__PURE__*/function (_Error) {
  function PromiseTimeoutError() {
    var _this;
    _classCallCheck(this, PromiseTimeoutError);
    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }
    _this = _callSuper(this, PromiseTimeoutError, [].concat(params));
    _this.name = "Promise Timeout Error";
    return _this;
  }
  _inherits(PromiseTimeoutError, _Error);
  return _createClass(PromiseTimeoutError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
function timeoutWrapper(_x, _x2) {
  return _timeoutWrapper.apply(this, arguments);
}
function _timeoutWrapper() {
  _timeoutWrapper = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(prom, timeoutms) {
    var timeoutPromise;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(timeoutms <= 0)) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return", prom);
        case 2:
          timeoutPromise = new Promise(function (resolve, reject) {
            setTimeout(function () {
              reject(new PromiseTimeoutError());
            }, timeoutms);
          });
          return _context.abrupt("return", Promise.race([prom, timeoutPromise]));
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _timeoutWrapper.apply(this, arguments);
}
function drivetrainTimeoutWrapper(_x3, _x4, _x5, _x6) {
  return _drivetrainTimeoutWrapper.apply(this, arguments);
}
function _drivetrainTimeoutWrapper() {
  _drivetrainTimeoutWrapper = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(msg, wait, timeoutms, msgSender) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!wait) {
            _context2.next = 17;
            break;
          }
          _context2.prev = 1;
          _context2.next = 4;
          return timeoutWrapper(msgSender(msg), timeoutms);
        case 4:
          _context2.next = 15;
          break;
        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](1);
          if (!(_context2.t0 instanceof PromiseTimeoutError)) {
            _context2.next = 14;
            break;
          }
          log.debug("drivetrain timeout");
          _context2.next = 12;
          return msgSender(_SimWindow_SimUnity_SimMessageHelper__WEBPACK_IMPORTED_MODULE_1__.Drivetrain.stop());
        case 12:
          _context2.next = 15;
          break;
        case 14:
          log.debug("drievtrain command rejected A", _context2.t0);
        case 15:
          _context2.next = 19;
          break;
        case 17:
          _context2.next = 19;
          return msgSender(msg);
        case 19:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 6]]);
  }));
  return _drivetrainTimeoutWrapper.apply(this, arguments);
}
function drivetrainTimeoutWrapperSendCallback(_x7, _x8, _x9, _x10, _x11) {
  return _drivetrainTimeoutWrapperSendCallback.apply(this, arguments);
}
function _drivetrainTimeoutWrapperSendCallback() {
  _drivetrainTimeoutWrapperSendCallback = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(msg, wait, timeoutms, msgSender, sendCallback) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (!wait) {
            _context3.next = 18;
            break;
          }
          _context3.prev = 1;
          _context3.next = 4;
          return timeoutWrapper(msgSender(msg, sendCallback), timeoutms);
        case 4:
          _context3.next = 16;
          break;
        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3["catch"](1);
          if (!(_context3.t0 instanceof PromiseTimeoutError)) {
            _context3.next = 14;
            break;
          }
          log.debug("drivetrain timeout");
          _context3.next = 12;
          return msgSender(_SimWindow_SimUnity_SimMessageHelper__WEBPACK_IMPORTED_MODULE_1__.Drivetrain.stop());
        case 12:
          _context3.next = 16;
          break;
        case 14:
          log.debug("drievtrain command rejected B", _context3.t0);
          throw _context3.t0;
        case 16:
          _context3.next = 20;
          break;
        case 18:
          _context3.next = 20;
          return msgSender(msg, sendCallback);
        case 20:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 6]]);
  }));
  return _drivetrainTimeoutWrapperSendCallback.apply(this, arguments);
}
function motorTimeoutWrapper(_x12, _x13, _x14, _x15, _x16) {
  return _motorTimeoutWrapper.apply(this, arguments);
}
function _motorTimeoutWrapper() {
  _motorTimeoutWrapper = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(port, msg, wait, timeoutms, msgSender) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (!wait) {
            _context4.next = 16;
            break;
          }
          _context4.prev = 1;
          _context4.next = 4;
          return timeoutWrapper(msgSender(msg), timeoutms);
        case 4:
          _context4.next = 14;
          break;
        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](1);
          if (!(_context4.t0 instanceof PromiseTimeoutError)) {
            _context4.next = 13;
            break;
          }
          _context4.next = 11;
          return msgSender(_SimWindow_SimUnity_SimMessageHelper__WEBPACK_IMPORTED_MODULE_1__.Motor.stop(port));
        case 11:
          _context4.next = 14;
          break;
        case 13:
          log.warn(_context4.t0);
        case 14:
          _context4.next = 18;
          break;
        case 16:
          _context4.next = 18;
          return msgSender(msg);
        case 18:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 6]]);
  }));
  return _motorTimeoutWrapper.apply(this, arguments);
}
function waitms(_x17) {
  return _waitms.apply(this, arguments);
}
function _waitms() {
  _waitms = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(ms) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", new Promise(function (resolve, reject) {
            setTimeout(resolve, ms);
          }));
        case 1:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _waitms.apply(this, arguments);
}
function setWrapper(_x18, _x19) {
  return _setWrapper.apply(this, arguments);
}
function _setWrapper() {
  _setWrapper = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(msg, msgSender) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          return _context7.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return msgSender(msg);
                  case 2:
                    _context6.next = 4;
                    return waitms(40);
                  case 4:
                    resolve();
                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6);
            }));
            return function (_x20, _x21) {
              return _ref.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _setWrapper.apply(this, arguments);
}
function mapRange(value, x1, y1, x2, y2) {
  return (value - x1) * (y2 - x2) / (y1 - x1) + x2;
}


/***/ }),

/***/ "./src/PyodideVM/PyodideArmInterface.ts":
/*!**********************************************!*\
  !*** ./src/PyodideVM/PyodideArmInterface.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PyodideArmInterface: () => (/* binding */ PyodideArmInterface)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dispatcher */ "./src/dispatcher.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("PyodideArmInterface");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

// import { armInterface } from "../../HardwareInterface/CTE/armInterface";



//#region type definitions

//#endregion type definitions

function generateUUID() {
  var d = new Date().getTime();
  var randDigit = function randDigit(c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : r & 0x3 | 0x8).toString(16);
  };
  return "xxxxxxxx-xxxx-8xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, randDigit);
}

/**
 * A simple interface used by pyodide module to map python arm commands to messages
 * to send to VEXcode. This also processes return messages so that pyodide knows what
 * the arm status is and when events are triggered.
 */
var PyodideArmInterface = /*#__PURE__*/function () {
  /**
   * A simple interface used by pyodide module to map python arm commands to messages
   * to send to VEXcode. This also processes return messages so that pyodide knows what
   * the arm status is and when events are triggered.
   * 
   * @param pyodide the pyodide instance. this is used to send events back to pyodide
   * @param isRunning a function to check to see if the VM is actually running. This
   * is so that we don't send events if the VM is not actually running
   * @param messageSender function for sending messages back to the VEXcode context
   */
  function PyodideArmInterface(pyodide, isRunning, messageSender) {
    _classCallCheck(this, PyodideArmInterface);
    /** stores all the command resolvers */
    _defineProperty(this, "_commandResolvers", {});
    _defineProperty(this, "_commandResolversWithValue", {});
    _defineProperty(this, "isInitializingArm", false);
    _defineProperty(this, "initDoneEvent", new _dispatcher__WEBPACK_IMPORTED_MODULE_1__.DispatcherEvent());
    _defineProperty(this, "_currentStatus", {
      positions: [0, 0, 0, 0, 0],
      velocities: [0, 0, 0, 0, 0],
      currents: [0, 0, 0, 0, 0],
      volts: [0, 0, 0, 0, 0],
      j6Position: 0,
      x: 0,
      y: 0,
      z: 0,
      pitch: 0,
      roll: 0,
      yaw: 0,
      position_error: 0,
      is_connected: false,
      is_done: false,
      is_control_stop_enabled: false,
      is_zero_needed: false,
      signal_tower: {
        pressing: false,
        is_enabled: false,
        is_connected: false
      }
    });
    this.pyodide = pyodide;
    this.isRunning = isRunning;
    this.messageSender = messageSender;
    // make sure that anything that is called from outside this class is bound to this instance...
    this.onMessage = this.onMessage.bind(this);
    this.get_status = this.get_status.bind(this);
    this.initialize_arm = this.initialize_arm.bind(this);
    this.move_to = this.move_to.bind(this);
    this.move_inc = this.move_inc.bind(this);
    this.move_to_safe_position = this.move_to_safe_position.bind(this);
    this.set_end_effector_type = this.set_end_effector_type.bind(this);
    this.set_end_effector_magnet = this.set_end_effector_magnet.bind(this);
    this.enable_manual_movement = this.enable_manual_movement.bind(this);
    this.can_end_effector_reach_to = this.can_end_effector_reach_to.bind(this);
    this.can_end_effector_reach_inc = this.can_end_effector_reach_inc.bind(this);
    this.can_arm_reach_to = this.can_arm_reach_to.bind(this);
    this.can_arm_reach_inc = this.can_arm_reach_inc.bind(this);
    this.set_control_stop = this.set_control_stop.bind(this);
    this.set_speed = this.set_speed.bind(this);
    this.set_signal_tower_color = this.set_signal_tower_color.bind(this);
    this.set_signal_tower_colors = this.set_signal_tower_colors.bind(this);
    this.set_pen_offset = this.set_pen_offset.bind(this);
  }

  //#region message handlers
  /**
   * function used to process messages for pyodide
   * @param message the message to process
   * @returns true if the message was handled
   */
  return _createClass(PyodideArmInterface, [{
    key: "onMessage",
    value: function onMessage(message) {
      var data = message.data;
      // log.debug("Python received message:", data);
      var command = data.command;
      if (command) {
        if (command === "CommandResult") {
          log.debug("IPyodideArmMessage");
          this.handleCommandResult(data);
          return true;
        } else if (command === "CommandResultWithValue") {
          log.debug("StatusUpdate");
          this.handleCommandResultWithCustomValue(data);
          return true;
        } else if (command === "StatusUpdate") {
          log.debug("StatusUpdate");
          this.handleStatusUpdate(data);
          return true;
        } else if (command === "CommandCompleted") {
          log.debug("CommandCompleted");
          this.handleCommandCompleted();
          return true;
        } else if (command === "ArmCrashed") {
          log.debug("ArmCrashed");
          this.handleArmCrashed();
          return true;
        } else if (command === "SignalTowerPressed") {
          log.debug("SignalTowerPressed");
          this.handleSignalTowerButtonPressed();
          return true;
        } else if (command === "SignalTowerReleased") {
          log.debug("SignalTowerReleased");
          this.handleSignalTowerButtonReleased();
          return true;
        }
      }
      return false;
    }
  }, {
    key: "handleCommandResult",
    value: function handleCommandResult(data) {
      var uuid = data.uuid;
      if (this._commandResolvers[uuid]) {
        // build the result data. make sure that the code defaults to 0
        var _result = {
          completed: data.completed,
          error_name: data.error_name || ""
        };
        // resolve the command with the result data
        this._commandResolvers[uuid](_result);
        // remove the resolver from storage as it is no longer needed
        delete this._commandResolvers[uuid];
      } else {
        log.warn("no resolver found for", uuid);
      }
    }
  }, {
    key: "handleCommandResultWithCustomValue",
    value: function handleCommandResultWithCustomValue(data) {
      var uuid = data.uuid;
      if (this._commandResolversWithValue[uuid]) {
        // build the result data. make sure that the code defaults to 0
        var _result2 = {
          completed: data.completed,
          error_name: data.error_name || "",
          value: data.value
        };
        // resolve the command with the result data
        this._commandResolversWithValue[uuid](_result2);
        // remove the resolver from storage as it is no longer needed
        delete this._commandResolversWithValue[uuid];
      } else {
        log.warn("no resolver found for", uuid);
      }
    }
  }, {
    key: "handleStatusUpdate",
    value: function handleStatusUpdate(data) {
      this._currentStatus = data.status;
    }
  }, {
    key: "handleCommandCompleted",
    value: function handleCommandCompleted() {
      if (this.isRunning()) {
        this.pyodide.globals.get("arm")._on_command_completed();
      }
    }
  }, {
    key: "handleArmCrashed",
    value: function handleArmCrashed() {
      if (this.isRunning()) {
        this.pyodide.globals.get("arm")._on_arm_crashed();
      }
    }
  }, {
    key: "handleSignalTowerButtonPressed",
    value: function handleSignalTowerButtonPressed() {
      if (this.isRunning()) {
        this.pyodide.globals.get("signal_tower")._on_button_pressed();
      }
    }
  }, {
    key: "handleSignalTowerButtonReleased",
    value: function handleSignalTowerButtonReleased() {
      if (this.isRunning()) {
        this.pyodide.globals.get("signal_tower")._on_button_released();
      }
    }
    //#endregion message handlers

    //#region message senders
    /** 
     * helper to send a message that needs to wait for a result
     * @param message the message to send
     */
  }, {
    key: "sendResultMessage",
    value: function sendResultMessage(message) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        var uuid = message.uuid;
        _this.messageSender(message);
        _this._commandResolvers[uuid] = resolve;
      });
    }

    /** 
    * helper to send a message that needs to wait for a result
    * @param message the message to send
    */
  }, {
    key: "sendResultMessageWithValue",
    value: function sendResultMessageWithValue(message) {
      var _this2 = this;
      return new Promise(function (resolve, reject) {
        var uuid = message.uuid;
        _this2.messageSender(message);
        _this2._commandResolversWithValue[uuid] = resolve;
      });
    }

    /**
     * helper to send messages from pyodide
     * @param message the message to send
     */
  }, {
    key: "sendMessage",
    value: function sendMessage(message) {
      this.messageSender(message);
    }
    //#endregion message senders

    //#region pyodide interface
  }, {
    key: "get_status",
    value: function get_status() {
      return this._currentStatus;
    }
  }, {
    key: "initialize_arm",
    value: function () {
      var _initialize_arm = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this3 = this;
        var uuid, message, _result3;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!this.isInitializingArm) {
                _context.next = 5;
                break;
              }
              log.debug("already initializing. waiting for that to complete");
              return _context.abrupt("return", new Promise(function (resolve, reject) {
                _this3.initDoneEvent.registerCallback(function () {
                  resolve({
                    completed: true,
                    error_name: ""
                  });
                });
              }));
            case 5:
              this.isInitializingArm = true;
              uuid = generateUUID();
              message = {
                command: "InitializeArm",
                uuid: uuid,
                wait: true
              };
              _context.next = 10;
              return this.sendResultMessage(message);
            case 10:
              _result3 = _context.sent;
              this.isInitializingArm = false;
              this.initDoneEvent.fire();
              this.initDoneEvent.clearCallbacks();
              return _context.abrupt("return", _result3);
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function initialize_arm() {
        return _initialize_arm.apply(this, arguments);
      }
      return initialize_arm;
    }()
  }, {
    key: "move_to",
    value: function move_to(x, y, z, wait) {
      var uuid = generateUUID();
      var message = {
        command: "MoveArmTo",
        uuid: uuid,
        x: x,
        y: y,
        z: z,
        wait: wait
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "move_inc",
    value: function move_inc(x, y, z, wait) {
      var uuid = generateUUID();
      var message = {
        command: "MoveArmInc",
        uuid: uuid,
        x: x,
        y: y,
        z: z,
        wait: wait
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "move_end_effector_to",
    value: function move_end_effector_to(yaw, roll, pitch, wait) {
      var uuid = generateUUID();
      var message = {
        command: "MoveEndEffectorTo",
        uuid: uuid,
        yaw: yaw,
        roll: roll,
        pitch: pitch,
        wait: wait
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "move_end_effector_inc",
    value: function move_end_effector_inc(yaw, roll, pitch, wait) {
      var uuid = generateUUID();
      var message = {
        command: "MoveEndEffectorInc",
        uuid: uuid,
        yaw: yaw,
        roll: roll,
        pitch: pitch,
        wait: wait
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "can_end_effector_reach_to",
    value: function can_end_effector_reach_to(yaw, roll, pitch, wait) {
      var uuid = generateUUID();
      var message = {
        command: "CanEndEffectorMoveTo",
        uuid: uuid,
        yaw: yaw,
        roll: roll,
        pitch: pitch,
        wait: false
      };
      return this.sendResultMessageWithValue(message);
    }
  }, {
    key: "can_end_effector_reach_inc",
    value: function can_end_effector_reach_inc(yaw, roll, pitch) {
      var uuid = generateUUID();
      var message = {
        command: "CanEndEffectorMoveInc",
        uuid: uuid,
        yaw: yaw,
        roll: roll,
        pitch: pitch,
        wait: false
      };
      return this.sendResultMessageWithValue(message);
    }
  }, {
    key: "can_arm_reach_to",
    value: function can_arm_reach_to(x, y, z) {
      var uuid = generateUUID();
      var message = {
        command: "CanMoveTo",
        uuid: uuid,
        x: x,
        y: y,
        z: z,
        wait: false
      };
      return this.sendResultMessageWithValue(message);
    }
  }, {
    key: "can_arm_reach_inc",
    value: function can_arm_reach_inc(x, y, z) {
      var uuid = generateUUID();
      var message = {
        command: "CanMoveInc",
        uuid: uuid,
        x: x,
        y: y,
        z: z,
        wait: false
      };
      return this.sendResultMessageWithValue(message);
    }
  }, {
    key: "move_to_safe_position",
    value: function move_to_safe_position(wait) {
      var uuid = generateUUID();
      var message = {
        command: "MoveArmToSafePosition",
        uuid: uuid,
        wait: wait
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "set_end_effector_type",
    value: function set_end_effector_type(endEffectorType) {
      var uuid = generateUUID();
      var message = {
        command: "SetEndEffectorType",
        uuid: uuid,
        endEffectorType: endEffectorType
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "set_end_effector_magnet",
    value: function set_end_effector_magnet(engaged) {
      var uuid = generateUUID();
      var message = {
        command: "SetMagnet",
        uuid: uuid,
        engaged: engaged
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "enable_manual_movement",
    value: function enable_manual_movement() {
      var uuid = generateUUID();
      var message = {
        command: "ManualMovement",
        uuid: uuid
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "set_control_stop",
    value: function set_control_stop(stopped) {
      var uuid = generateUUID();
      var message = {
        command: "SetControlledStop",
        uuid: uuid,
        stopped: stopped
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "set_speed",
    value: function set_speed(speed) {
      var uuid = generateUUID();
      var message = {
        command: "SetSpeed",
        uuid: uuid,
        speed: speed
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "set_pen_offset",
    value: function set_pen_offset(offset) {
      var uuid = generateUUID();
      var message = {
        command: "SetPenOffset",
        uuid: uuid,
        offset: offset
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "set_signal_tower_color",
    value: function set_signal_tower_color(led, state) {
      var uuid = generateUUID();
      var message = {
        command: "SetTowerColor",
        uuid: uuid,
        led: led,
        state: state
      };
      this.sendMessage(message);
    }
  }, {
    key: "set_signal_tower_colors",
    value: function set_signal_tower_colors(red, yellow, green, blue, white) {
      var uuid = generateUUID();
      var message = {
        command: "SetTowerColors",
        uuid: uuid,
        red: red,
        yellow: yellow,
        green: green,
        blue: blue,
        white: white
      };
      this.sendMessage(message);
    }
    //#endregion pyodide interface
  }]);
}();


/***/ }),

/***/ "./src/PyodideVM/PyodideGOInterface.ts":
/*!*********************************************!*\
  !*** ./src/PyodideVM/PyodideGOInterface.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PyodideGOInterface: () => (/* binding */ PyodideGOInterface)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dispatcher */ "./src/dispatcher.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("PyodideGOInterface");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

/**
 * This class is exposed in the Pyodide repository.
 * Commands defined there are processed here and sent to the VEXcode context (PyodideVMController.ts)
 * 
 * Example GO command flow:
 * pyodide repository > PyodideGOInterface.ts > PyodideVMController.ts > VEXGOController.ts
 * 
**/



//#region type definitions

//#endregion type definitions

function generateUUID() {
  var d = new Date().getTime();
  var randDigit = function randDigit(c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : r & 0x3 | 0x8).toString(16);
  };
  return "xxxxxxxx-xxxx-8xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, randDigit);
}

/**
 * A simple interface used by pyodide module to map python GO commands to messages
 * to send to VEXcode. This also processes return messages so that pyodide knows what
 * the GO status is and when events are triggered.
 */
var PyodideGOInterface = /*#__PURE__*/function () {
  /**s
   * A simple interface used by pyodide module to map python GO commands to messages
   * to send to VEXcode. This also processes return messages so that pyodide knows what
   * the GO status is and when events are triggered.
   *
   * @param pyodide the pyodide instance. this is used to send events back to pyodide
   * @param isRunning a function to check to see if the VM is actually running. This
   * is so that we don't send events if the VM is not actually running
   * @param messageSender function for sending messages back to the VEXcode context
   */
  function PyodideGOInterface(pyodide, isRunning, messageSender) {
    _classCallCheck(this, PyodideGOInterface);
    /** stores all the command resolvers */
    _defineProperty(this, "_commandResolvers", {});
    _defineProperty(this, "_commandResolversWithValue", {});
    _defineProperty(this, "isInitializingGO", false);
    _defineProperty(this, "initDoneEvent", new _dispatcher__WEBPACK_IMPORTED_MODULE_1__.DispatcherEvent());
    /**
     * Stores the sensor values of GO. This data is updated by PyodideVMController.ts when it sends a 'StatusUpdate' message.
     *
     * This is then exposed to Python as the `get_status()` method. For example, from python you can access the drivetrain status like this:
     * 
     * ```
     * is_done = vexcode_api.goInterface.get_status().drivetrain.isDone
     * ```
     */
    _defineProperty(this, "_currentStatus", {
      battery: 0,
      gyro: {
        accX: 0,
        accelXG: 0,
        accY: 0,
        accelYG: 0,
        accZ: 0,
        accelZG: 0,
        gyroX: 0,
        gyroY: 0,
        gyroZ: 0,
        pitch: 0,
        roll: 0,
        yaw: 0,
        absHeading: 0,
        crash: false,
        shake: false,
        crashNoReset: false,
        heading: 0,
        rotation: 0
      },
      eye: {
        distance: 0,
        hue: 0,
        floor: 0,
        brightness: 0,
        foundObject: false,
        brightObject: false,
        isNear: false,
        lineDetected: false,
        colorDetected: 0,
        detectsNone: true,
        detectsRed: false,
        detectsGreen: false,
        detectsBlue: false
      },
      drivetrain: {
        absHeading: 0,
        rotation: 0,
        velocity: 0,
        current: 0,
        velocityPercent: 0,
        heading: 0,
        isMoving: false,
        isDone: false
      },
      ports: []
    });
    this.pyodide = pyodide;
    this.isRunning = isRunning;
    this.messageSender = messageSender;
    // make sure that anything that is called from outside this class is bound to this instance...
    this.onMessage = this.onMessage.bind(this);
    this.get_status = this.get_status.bind(this);
    this.handleStatusUpdate = this.handleStatusUpdate.bind(this);
  }

  //#region message handlers
  /**
   * function used to process messages for pyodide
   * @param message the message to process
   * @returns true if the message was handled
   */
  return _createClass(PyodideGOInterface, [{
    key: "onMessage",
    value: function onMessage(message) {
      var data = message.data;
      // log.debug("Python received message:", data);
      var command = data.command;
      if (command) {
        if (command === "CommandResult") {
          log.debug("IPyodideGOMessage");
          this.handleCommandResult(data);
          return true;
        } else if (command === "CommandResultWithValue") {
          log.debug("CommandResultWithValue");
          this.handleCommandResultWithCustomValue(data);
          return true;
        } else if (command === "StatusUpdate") {
          // PyodideVMController.ts sent a sensor update message. Update the _currentStatus to the new values
          log.debug("StatusUpdate");
          this.handleStatusUpdate(data);
          return true;
        } else if (command === "CommandCompleted") {
          log.debug("CommandCompleted");
          this.handleCommandCompleted();
          return true;
        }
      }
      return false;
    }

    /*
    ALL THE PARAMS BELOW IS GETTING USED IN `VEXGOController.ts` (look at the bottom of the file)
    Make sure the passed params match how it is being used in there.
    */

    //#region DRIVETRAIN functions
  }, {
    key: "drivetrainDrive",
    value: function drivetrainDrive(velocity) {
      var uuid = generateUUID();
      var message = {
        command: "GODrivetrain",
        instruction: "drive",
        uuid: uuid,
        param: {
          velocity: velocity
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "drivetrainDriveFor",
    value: function drivetrainDriveFor(distance, velocity, wait) {
      var uuid = generateUUID();
      var message = {
        command: "GODrivetrain",
        instruction: "drive_for",
        uuid: uuid,
        param: {
          distance: distance,
          velocity: velocity,
          wait: wait
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "drivetrainTurn",
    value: function drivetrainTurn(velocity) {
      var uuid = generateUUID();
      var message = {
        command: "GODrivetrain",
        instruction: "turn",
        uuid: uuid,
        param: {
          velocity: velocity
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "drivetrainTurnFor",
    value: function drivetrainTurnFor(amount, velocity, wait) {
      var uuid = generateUUID();
      var message = {
        command: "GODrivetrain",
        instruction: "turn_for",
        uuid: uuid,
        param: {
          amount: amount,
          velocity: velocity,
          wait: wait
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "drivetrainDriveUntil",
    value: function drivetrainDriveUntil(obstacle, velocity, wait) {
      var uuid = generateUUID();
      var message = {
        command: "GODrivetrain",
        instruction: "drive_until",
        uuid: uuid,
        param: {
          obstacle: obstacle,
          velocity: velocity,
          wait: wait
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "drivetrainTurnToHeading",
    value: function drivetrainTurnToHeading(heading, velocity, wait) {
      var uuid = generateUUID();
      var message = {
        command: "GODrivetrain",
        instruction: "turn_to_heading",
        uuid: uuid,
        param: {
          heading: heading,
          velocity: velocity,
          wait: wait
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "drivetrainTurnToRotation",
    value: function drivetrainTurnToRotation(rotation, velocity, wait) {
      var uuid = generateUUID();
      var message = {
        command: "GODrivetrain",
        instruction: "turn_to_rotation",
        uuid: uuid,
        param: {
          rotation: rotation,
          velocity: velocity,
          wait: wait
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "drivetrainStop",
    value: function drivetrainStop(mode) {
      var uuid = generateUUID();
      var message = {
        command: "GODrivetrain",
        instruction: "stop",
        uuid: uuid,
        param: {
          mode: mode
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "drivetrainSetStopMode",
    value: function drivetrainSetStopMode(mode, leftMotorPort, rightMotorPort) {
      var uuid = generateUUID();
      var message = {
        command: "GODrivetrain",
        instruction: "set_stop_mode",
        uuid: uuid,
        param: {
          mode: mode,
          leftMotorPort: leftMotorPort,
          rightMotorPort: rightMotorPort
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "drivetrainSetTimeout",
    value: function drivetrainSetTimeout(timeoutMS) {
      // timeout is in seconds
      var uuid = generateUUID();
      var message = {
        command: "GODrivetrain",
        instruction: "set_time_out",
        uuid: uuid,
        param: {
          timeoutMS: timeoutMS
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "drivetrainSetHeading",
    value: function drivetrainSetHeading(heading) {
      var uuid = generateUUID();
      var message = {
        command: "GODrivetrain",
        instruction: "set_heading",
        uuid: uuid,
        param: {
          heading: heading
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "drivetrainSetRotation",
    value: function drivetrainSetRotation(rotation) {
      var uuid = generateUUID();
      var message = {
        command: "GODrivetrain",
        instruction: "set_rotation",
        uuid: uuid,
        param: {
          rotation: rotation
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "drivetrainSetDriveVelocity",
    value: function drivetrainSetDriveVelocity(velocity) {
      var uuid = generateUUID();
      var message = {
        command: "GODrivetrain",
        instruction: "set_drive_velocity",
        uuid: uuid,
        param: {
          velocity: velocity
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "drivetrainSetTurnVelocity",
    value: function drivetrainSetTurnVelocity(velocity) {
      var uuid = generateUUID();
      var message = {
        command: "GODrivetrain",
        instruction: "set_turn_velocity",
        uuid: uuid,
        param: {
          velocity: velocity
        }
      };
      return this.sendResultMessage(message);
    }
    //#endregion DRIVETRAIN functions

    //#region MOTOR functions
  }, {
    key: "motorSpin",
    value: function motorSpin(port, velocity) {
      var uuid = generateUUID();
      var message = {
        command: "GOMotor",
        instruction: "spin",
        uuid: uuid,
        param: {
          port: port,
          velocity: velocity
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "motorSpinFor",
    value: function motorSpinFor(port, degrees, wait) {
      var uuid = generateUUID();
      var message = {
        command: "GOMotor",
        instruction: "spin_for",
        uuid: uuid,
        param: {
          port: port,
          degrees: degrees,
          wait: wait
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "motorSpinToPosition",
    value: function motorSpinToPosition(port, position, wait) {
      var uuid = generateUUID();
      var message = {
        command: "GOMotor",
        instruction: "spin_to_position",
        uuid: uuid,
        param: {
          port: port,
          position: position,
          wait: wait
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "motorStop",
    value: function motorStop(port, brakeMode) {
      var uuid = generateUUID();
      var message = {
        command: "GOMotor",
        instruction: "stop",
        uuid: uuid,
        param: {
          port: port,
          brakeMode: brakeMode
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "motorSetPosition",
    value: function motorSetPosition(port, position) {
      var uuid = generateUUID();
      var message = {
        command: "GOMotor",
        instruction: "set_position",
        uuid: uuid,
        param: {
          port: port,
          position: position
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "motorSetVelocity",
    value: function motorSetVelocity(port, velocity) {
      var uuid = generateUUID();
      var message = {
        command: "GOMotor",
        instruction: "set_velocity",
        uuid: uuid,
        param: {
          port: port,
          velocity: velocity
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "motorSetStopping",
    value: function motorSetStopping(port, mode) {
      var uuid = generateUUID();
      var message = {
        command: "GOMotor",
        instruction: "set_stopping",
        uuid: uuid,
        param: {
          port: port,
          mode: mode
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "motorSetTimeout",
    value: function motorSetTimeout(port, timeout) {
      var uuid = generateUUID();
      var message = {
        command: "GOMotor",
        instruction: "set_timeout",
        uuid: uuid,
        param: {
          port: port,
          timeout: timeout
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "motorSetMaxTorque",
    value: function motorSetMaxTorque(port, torque) {
      var uuid = generateUUID();
      var message = {
        command: "GOMotor",
        instruction: "set_max_torque",
        uuid: uuid,
        param: {
          port: port,
          torque: torque
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "motorGetSensorFor",
    value: function motorGetSensorFor(port) {
      return this.getPortSensorDataFor(port, 0x20);
    }
    //#endregion MOTOR functions

    //#region BUMPER functions
  }, {
    key: "bumperSetColor",
    value: function bumperSetColor(port, color) {
      var uuid = generateUUID();
      var message = {
        command: "GOBumper",
        instruction: "set_color",
        uuid: uuid,
        param: {
          port: port,
          color: color
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "bumperSetBrightness",
    value: function bumperSetBrightness(port, brightness) {
      var uuid = generateUUID();
      var message = {
        command: "GOBumper",
        instruction: "set_brightness",
        uuid: uuid,
        param: {
          port: port,
          brightness: brightness
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "bumperGetSensorFor",
    value: function bumperGetSensorFor(port) {
      return this.getPortSensorDataFor(port, 0x80);
    }
    //#endregion BUMPER functions

    //#region EYE SENSOR functions
  }, {
    key: "sensingSetEyeLight",
    value: function sensingSetEyeLight(mode) {
      var uuid = generateUUID();
      var message = {
        command: "GOEye",
        instruction: "set_light",
        uuid: uuid,
        param: {
          mode: mode
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "sensingSetEyeRange",
    value: function sensingSetEyeRange(mode) {
      var uuid = generateUUID();
      var message = {
        command: "GOEye",
        instruction: "set_range",
        uuid: uuid,
        param: {
          mode: mode
        }
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "sensingSetEyePower",
    value: function sensingSetEyePower(power) {
      var uuid = generateUUID();
      var message = {
        command: "GOEye",
        instruction: "set_power",
        uuid: uuid,
        param: {
          power: power
        }
      };
      return this.sendResultMessage(message);
    }
    //#endregion EYE SENSOR functions

    //#region Magnet
  }, {
    key: "magnetEnergize",
    value: function magnetEnergize(port, mode) {
      var uuid = generateUUID();
      var message = {
        command: "GOMagnet",
        instruction: "mode",
        uuid: uuid,
        param: {
          port: port,
          mode: mode
        }
      };
      return this.sendResultMessage(message);
    }
    //#endregion Magnet

    //#region Inertial
  }, {
    key: "inertialResetHeading",
    value: function inertialResetHeading() {
      var uuid = generateUUID();
      var message = {
        command: "GOInertial",
        instruction: "reset_heading",
        param: {},
        uuid: uuid
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "inertialSetHeading",
    value: function inertialSetHeading(heading) {
      var uuid = generateUUID();
      var message = {
        command: "GOInertial",
        instruction: "set_heading",
        param: {
          heading: heading
        },
        uuid: uuid
      };
      return this.sendResultMessage(message);
    }
  }, {
    key: "inertialCalibrate",
    value: function inertialCalibrate() {
      var uuid = generateUUID();
      var message = {
        command: "GOInertial",
        instruction: "calibrate",
        param: {},
        uuid: uuid
      };
      return this.sendResultMessage(message);
    }
    //#endregion Magnet

    //#region Helper functions
    /**
     * Get the sensor data for a specific port.
     * @param port The port number to get the sensor data for.
     * @returns The sensor data for the specified port.
     * 
     * Comes from HWEnums.ts. Can't import the enums though it is causing "React is not defined" error
     * 
     * ```
     *  Unknown    = 0x00 -  Decimal: 0    Hex: 0x00
     *  Magnet     = 0x10 -  Decimal: 16   Hex: 0x10
     *  Motor      = 0x20 -  Decimal: 32   Hex: 0x20
     *  Pot        = 0x40 -  Decimal: 64   Hex: 0x40
     *  Bumper     = 0x80 -  Decimal: 128  Hex: 0x80
     *  DriveTrain = 0xA0 -  Decimal: 160  Hex: 0xA0
     *  TouchRGB   = 0xB0 -  Decimal: 176  Hex: 0xB0
     *  Sound      = 0xC0 -  Decimal: 192  Hex: 0xC0
     *  Drive123   = 0xD0 -  Decimal: 208  Hex: 0xD0
     *  Motor123   = 0xE0 -  Decimal: 224  Hex: 0xE0
     * ```
     * 
     * This is how you would use the function:
     * ```
     * getPortSensorDataFor(port, 0x20); // Motor
     * ```
     */
  }, {
    key: "getPortSensorDataFor",
    value: function getPortSensorDataFor(port, deviceType) {
      var desiredDeviceType = deviceType;
      // Default sensor data for a motor port
      var sensorData = {
        port: port,
        deviceType: desiredDeviceType,
        value: 0,
        flags: 1,
        bumperPressed: false,
        bumperCurrentlyPressed: false,
        velocity: 0,
        velocityPercent: 0,
        position: 0,
        positionTurns: 0,
        current: 0,
        isSpinning: false,
        isDone: false,
        buttonState: 0,
        pressedEvent: 0,
        releasedEvent: 0,
        colorIndex: 0
      };
      if (this._currentStatus.ports.length > 0) {
        // Extract the sensor data for the specified port
        var portData = this._currentStatus.ports.find(function (portData) {
          return portData.port === port && portData.deviceType === desiredDeviceType;
        });
        if (portData) {
          sensorData = portData;
        }
      }
      return sensorData;
    }
    //#endregion Helper functions
  }, {
    key: "handleCommandResult",
    value: function handleCommandResult(data) {
      var uuid = data.uuid;
      if (this._commandResolvers[uuid]) {
        // build the result data. make sure that the code defaults to 0
        var _result = {
          completed: data.completed,
          error_name: data.error_name || ""
        };
        // resolve the command with the result data
        this._commandResolvers[uuid](_result);
        // remove the resolver from storage as it is no longer needed
        delete this._commandResolvers[uuid];
      } else {
        log.warn("no resolver found for", uuid);
      }
    }
  }, {
    key: "handleCommandResultWithCustomValue",
    value: function handleCommandResultWithCustomValue(data) {
      var uuid = data.uuid;
      if (this._commandResolversWithValue[uuid]) {
        // build the result data. make sure that the code defaults to 0
        var _result2 = {
          completed: data.completed,
          error_name: data.error_name || "",
          value: data.value
        };
        // resolve the command with the result data
        this._commandResolversWithValue[uuid](_result2);
        // remove the resolver from storage as it is no longer needed
        delete this._commandResolversWithValue[uuid];
      } else {
        log.warn("no resolver found for", uuid);
      }
    }

    /**
     * Handle the status update message from the GO (Sensor Values)
     * @param data the status update message from the GO (Sensor Values)
     */
  }, {
    key: "handleStatusUpdate",
    value: function handleStatusUpdate(data) {
      // Update the current sensor values, which is exposed to Python
      this._currentStatus = data.status;
    }
  }, {
    key: "handleCommandCompleted",
    value: function handleCommandCompleted() {
      if (this.isRunning()) {
        this.pyodide.globals.get("go")._on_command_completed();
      }
    }
    //#endregion message handlers

    //#region message senders
    /**
     * helper to send a message that needs to wait for a result
     * @param message the message to send
     */
  }, {
    key: "sendResultMessage",
    value: function sendResultMessage(message) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        var uuid = message.uuid;
        _this.messageSender(message);
        _this._commandResolvers[uuid] = resolve;
      });
    }

    /**
     * helper to send a message that needs to wait for a result
     * @param message the message to send
     */
  }, {
    key: "sendResultMessageWithValue",
    value: function sendResultMessageWithValue(message) {
      var _this2 = this;
      return new Promise(function (resolve, reject) {
        var uuid = message.uuid;
        _this2.messageSender(message);
        _this2._commandResolversWithValue[uuid] = resolve;
      });
    }

    /**
     * helper to send messages from pyodide
     * @param message the message to send
     */
  }, {
    key: "sendMessage",
    value: function sendMessage(message) {
      this.messageSender(message);
    }
    //#endregion message senders

    //#region pyodide interface
    /**
     * This function is used to get the current GO sensor values from Python (Pyodide).
     * @returns current GO sensor values
     */
  }, {
    key: "get_status",
    value: function get_status() {
      return this._currentStatus;
    }
    //#endregion pyodide interface
  }]);
}();


/***/ }),

/***/ "./src/PyodideVM/PyodideVMMessages.ts":
/*!********************************************!*\
  !*** ./src/PyodideVM/PyodideVMMessages.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PyodideHighlightState: () => (/* binding */ PyodideHighlightState),
/* harmony export */   PyodidePrintColorEnum: () => (/* binding */ PyodidePrintColorEnum),
/* harmony export */   PyodideVMStateEnum: () => (/* binding */ PyodideVMStateEnum)
/* harmony export */ });
//#region Pyodide VM Enums
var PyodideVMStateEnum = /*#__PURE__*/function (PyodideVMStateEnum) {
  /** the interpreter is currently initializing */
  PyodideVMStateEnum[PyodideVMStateEnum["init"] = 0] = "init";
  /** processing code send to the interpreter so that it can be run */
  PyodideVMStateEnum[PyodideVMStateEnum["loading"] = 1] = "loading";
  /** executing code that has already ben sent to the interpreter */
  PyodideVMStateEnum[PyodideVMStateEnum["running"] = 2] = "running";
  /** the interpreter is ready but is currently doing nothing. code may or may not have been loaded. */
  PyodideVMStateEnum[PyodideVMStateEnum["stopped"] = 3] = "stopped";
  /** the interpreter has been initialized, but is still waiting for unity to be ready. code may or may not have been loaded. */
  PyodideVMStateEnum[PyodideVMStateEnum["waiting"] = 4] = "waiting";
  PyodideVMStateEnum[PyodideVMStateEnum["notRunning"] = 5] = "notRunning";
  // Once we have everything working as expected, we will implement stepping.
  // For now we will make it a state and when we add it, the description of
  // the state should be added to the doc spec
  PyodideVMStateEnum[PyodideVMStateEnum["stepping"] = 6] = "stepping";
  PyodideVMStateEnum[PyodideVMStateEnum["paused"] = 7] = "paused";
  return PyodideVMStateEnum;
}(PyodideVMStateEnum || {});
var PyodidePrintColorEnum = /*#__PURE__*/function (PyodidePrintColorEnum) {
  PyodidePrintColorEnum[PyodidePrintColorEnum["black"] = 0] = "black";
  PyodidePrintColorEnum[PyodidePrintColorEnum["red"] = 1] = "red";
  PyodidePrintColorEnum[PyodidePrintColorEnum["green"] = 2] = "green";
  PyodidePrintColorEnum[PyodidePrintColorEnum["blue"] = 3] = "blue"; // TODO: add any extra colors
  return PyodidePrintColorEnum;
}(PyodidePrintColorEnum || {});
var PyodideHighlightState = /*#__PURE__*/function (PyodideHighlightState) {
  PyodideHighlightState[PyodideHighlightState["queued"] = 0] = "queued";
  PyodideHighlightState[PyodideHighlightState["active"] = 1] = "active";
  PyodideHighlightState[PyodideHighlightState["inactive"] = 2] = "inactive";
  return PyodideHighlightState;
}(PyodideHighlightState || {}); //#endregion Pyodide VM Enums
//#region "Worker <-> Interpreter Messages"
// interface PyodideVMMessageFeedback {
//   command: "UnityFeedback";
//   data: UnityFeedbackData;
// }
//#endregion "Worker <-> Interpreter Messages"



/***/ }),

/***/ "./src/PythonPreprocessor.ts":
/*!***********************************!*\
  !*** ./src/PythonPreprocessor.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PythonPreprocessor: () => (/* binding */ PythonPreprocessor)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _targetPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./targetPlatform */ "./src/targetPlatform.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("Python Preprocessor");
log.setLevel(log.levels.WARN);
// dev only
// log.enableAll();

var loopRegex = /for /;
var whiteSpaceRegex = /^\s/;
var assignmentRegex = /=/;
var conditionalRegex = /(if |elif ).*/;
var PythonPreprocessor = /*#__PURE__*/function () {
  function PythonPreprocessor(classNames) {
    _classCallCheck(this, PythonPreprocessor);
    // TODO: make this passed in
    _defineProperty(this, "_deviceClassNames", []);
    _defineProperty(this, "deviceAsyncCalls", []);
    this._deviceClassNames = classNames || [];
    // TODO: as part of the genericizing, I can make another structure
    // like deviceAwaitCalls which is {deviceName: []} where the list is
    // the list of devices that need awaits added to them
  }
  return _createClass(PythonPreprocessor, [{
    key: "preprocess",
    value: function preprocess(code, configuredDevices) {
      var _this = this;
      log.debug("Code to process:\n" + code);

      // Process control wait
      code = code.replace(/(\s)wait(\s*)\(/gm, "$1await wait$2(");
      if (_targetPlatform__WEBPACK_IMPORTED_MODULE_1__.targetIsGO) {
        // For GO we pass down the current robot configuration from the `PyodideVMController.ts` to here. Here is the flow:
        // 1. The `PyodideVMController.ts` retrieves the current robot configuration. Then flattens it so it can be passed to the web worker.
        // 2. The the flattened configuration is passed to the `PyodideVMWebWorker.ts` where it is saved in a variable.
        // 3. When the user hits run on the project the `PyodideVMWebWorker.ts` calls this function and passes the code and the configuration.
        // So, deviceType is defined in Robot Config repo and above is how it makes it's way here
        for (var i = 0; configuredDevices && i < configuredDevices.length; i++) {
          var device = configuredDevices[i];
          if (device.deviceType === "Motor") {
            code = code.replace(new RegExp(device.instanceName + "\\.(?=spin|spin_for|spin_to_position|stop|set_position|set_velocity|set_stopping|set_timeout|set_max_torque)", "gm"), "await " + device.instanceName + ".");
          } else if (device.deviceType === "LEDBumper") {
            code = code.replace(new RegExp(device.instanceName + "\\.(?=set_color|set_brightness)", "gm"), "await " + device.instanceName + ".");
          } else if (device.deviceType === "Magnet") {
            code = code.replace(new RegExp(device.instanceName + "\\.(?=energize)", "gm"), "await " + device.instanceName + ".");
          } else if (device.deviceType === "Eye") {
            code = code.replace(new RegExp(device.instanceName + "\\.(?=set_light|set_range|set_light_power)", "gm"), "await " + device.instanceName + ".");
          } else if (device.deviceType === "Drivetrain") {
            code = code.replace(new RegExp(device.instanceName + "\\.(?=drive_for|drive_until|turn_for|turn_to_heading|turn_to_rotation|stop|set_drive_velocity|set_turn_velocity|set_stopping|set_heading|calibrate|set_rotation|set_timeout)", "gm"), "await " + device.instanceName + ".");
          }
        }
        code = code.replace(/inertial\.(?=calibrate|reset_heading|reset_rotation|set_heading|set_rotation)/gm, "await inertial.");
      } else {
        // TODO: genericize this for drivetrain and motors
        code = code.replace(/drivetrain\.(?=drive_for|drive_to|turn_for|turn_to|set_heading|set_rotation|go_to)/gm, "await drivetrain.");
        code = code.replace(/pen\.(?=move)/gm, "await pen.");
        if (_targetPlatform__WEBPACK_IMPORTED_MODULE_1__.targetIsV5 || _targetPlatform__WEBPACK_IMPORTED_MODULE_1__.targetIsPlaygrounds) {
          code = code.replace(/intake_motor_group\.(?=spin_for|spin_to_position|set_position)/gm, "await intake_motor_group.");
          code = code.replace(/fork_motor_group\.(?=spin_for|spin_to_position|set_position)/gm, "await fork_motor_group.");
          code = code.replace(/arm_motor_group\.(?=spin_for|spin_to_position|set_position)/gm, "await arm_motor_group.");
          code = code.replace(/pusher_motor\.(?=spin_for|spin_to_position|set_position)/gm, "await pusher_motor.");
          code = code.replace(/(rotation|pusher_rotation)\.(?=set_position)/gm, "await $1.");
          code = code.replace(/conveyor_motor\.(?=spin_for|spin_to_position|set_position)/gm, "await conveyor_motor.");
          if (_targetPlatform__WEBPACK_IMPORTED_MODULE_1__.targetIsPlaygrounds) {
            code = code.replace(/ai_vision\.(?=take_snapshot)/gm, "await ai_vision.");
          }
        }
        if (_targetPlatform__WEBPACK_IMPORTED_MODULE_1__.targetIsIQ || _targetPlatform__WEBPACK_IMPORTED_MODULE_1__.targetIsPlaygrounds) {
          code = code.replace(/intake_motor\.(?=spin_for|spin_to_position|set_position)/gm, "await intake_motor.");
          code = code.replace(/catapult_motor\.(?=spin_for|spin_to_position|set_position)/gm, "await catapult_motor.");
          code = code.replace(/catapult_group\.(?=spin_for|spin_to_position|set_position)/gm, "await catapult_group.");
          code = code.replace(/catapult_tension_motor\.(?=spin_for|spin_to_position|set_position)/gm, "await catapult_tension_motor.");
          code = code.replace(/arm_motor\.(?=spin_for|spin_to_position|set_position)/gm, "await arm_motor.");
          code = code.replace(/lift_motor\.(?=spin_for|spin_to_position|set_position)/gm, "await lift_motor.");
          code = code.replace(/claw_motor\.(?=spin_for|spin_to_position|set_position)/gm, "await claw_motor.");
          code = code.replace(/touchled\.(?=set_color)/gm, "await touchled.");
          if (_targetPlatform__WEBPACK_IMPORTED_MODULE_1__.targetIsPlaygrounds) {
            code = code.replace(/ai_vision\.(?=take_snapshot)/gm, "await ai_vision.");
          }
        }
        if (_targetPlatform__WEBPACK_IMPORTED_MODULE_1__.targetIsEXP) {
          // TODO: CTE update whenever more commands get added, and when V5 support is added
          code = code.replace(/arm\.(?=initialize_arm|move_to_safe_position|move_to|move_inc|move_end_effector_to|move_end_effector_inc|set_speed|set_end_effector_type|set_end_effector_magnet|set_pen_offset|control_stop|set_control_stop|enable_manual_movement|can_arm_reach_to|can_arm_reach_inc|can_end_effector_reach_to|can_end_effector_reach_inc)/gm, "await arm.");
        }
      }
      code = code.replace(/rover\.(?=pickup|drop|use|absorb_radiation|detects|sees|angle|get_distance|location|enemy_level|enemy_radiation|standby)/gm, "await rover.");
      code = code.replace(/data_sensor\.(?=collect_station_data)/gm, "await data_sensor.");
      code = code.replace(/(\S*).(?=broadcast_and_wait\(\))/gm, "await $1.");

      // const pyFunctionDefRegex = /def(\s)*[a-zA-Z0-9_]*(\s)*\(/g;
      var pyFunctionDefRegex = /def(\s)*[a-zA-Z0-9_]*(\s)*\([,a-zA-Z0-9_ \*=]*\)(\s)*:/g;
      var initRegex = /def(\s)*(__init__)*(\s)*\([,a-zA-Z0-9_ \*=]*\)(\s)*:/g;
      var functionDefRegex = /(\s*def\s)/;
      var pyFunctionCallRegex = /(?!def.*)([a-zA-Z0-9_]+\()/g;
      var functionDefArr = code.match(pyFunctionDefRegex);
      var userFunctionDefs = new Set();
      log.debug("user functions found: " + functionDefArr);
      if (functionDefArr != null) {
        functionDefArr.forEach(function (functionDef) {
          if (!functionDef.match(initRegex)) {
            code = code.replace(functionDef, "async " + functionDef);
          }
          var functionSig = _this.getFunctionSignature(functionDef);
          log.debug("User function name: " + functionSig);
          if (!functionSig.match(/__init__\(/)) {
            userFunctionDefs.add(functionSig);
          }
        });
      }
      var codeLines = code.split("\n");
      for (var _i = 0; _i < codeLines.length; _i++) {
        var functionCallArr = codeLines[_i].match(pyFunctionCallRegex);
        // log.warn("code line: " + codeLines[i]);
        // If the function matches the regex, and it is not a global function (has whitespace in the beginning)
        if (functionCallArr !== null && !this.isGlobal(codeLines[_i]) && !codeLines[_i].match(functionDefRegex)) {
          if (this.hasLoop(codeLines[_i])) {
            log.debug("Doing functions in loop");
            var _iterator = _createForOfIteratorHelper(userFunctionDefs),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var func = _step.value;
                if (this.isUserFunctionCall(codeLines[_i], func)) {
                  codeLines[_i] = this.addAwaits(codeLines[_i], func);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          } else {
            log.debug("Doing normal function calls");
            var _iterator2 = _createForOfIteratorHelper(userFunctionDefs),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _func = _step2.value;
                log.debug("code line: " + codeLines[_i] + "\nsig: " + _func);
                if (this.isUserFunctionCall(codeLines[_i], _func)) {
                  log.debug("function sig: " + _func);
                  codeLines[_i] = this.addAwaits(codeLines[_i], _func);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }
      }
      code = codeLines.join("\n");
      code = code.replace(/await await/g, "await");
      log.debug("Post processed code: \n" + code);
      return code;
    }
  }, {
    key: "addAsyncDeviceCalls",
    value: function addAsyncDeviceCalls(asyncDeviceCall) {
      this.deviceAsyncCalls.push(asyncDeviceCall);
    }
  }, {
    key: "deviceClassNames",
    get: function get() {
      return this._deviceClassNames;
    },
    set: function set(classNames) {
      this._deviceClassNames = classNames;
    }
  }, {
    key: "getFunctionSignature",
    value: function getFunctionSignature(line) {
      var sig = line.replace("def ", "").split("(", 2)[0] + "(";
      return sig;
    }
  }, {
    key: "isGlobal",
    value: function isGlobal(codeLine) {
      return !whiteSpaceRegex.test(codeLine);
    }
  }, {
    key: "hasLoop",
    value: function hasLoop(codeLine) {
      return loopRegex.test(codeLine);
    }

    /**
     * This function will check if a line has a user function call
     * Cases that aren't a user function call:
     *  1. Comments
     *  2. If the function name is part of another function name
     *  3. If the function call is inside of a string
     */
  }, {
    key: "isUserFunctionCall",
    value: function isUserFunctionCall(codeLine, funcCall) {
      var noWhiteSpace = codeLine.replace(/\s+/g, "");
      var isLineComment = noWhiteSpace.charAt(0) === "#";
      var firstDoubleQuoteIndex = noWhiteSpace.indexOf("\"");
      var lastDoubleQuoteIndex = noWhiteSpace.lastIndexOf("\"");
      var firstSingleQuoteIndex = noWhiteSpace.indexOf("\'");
      var lastSingleQuoteIndex = noWhiteSpace.lastIndexOf("\'");
      var callIndex = noWhiteSpace.lastIndexOf(funcCall);
      var isInString = callIndex > firstDoubleQuoteIndex && callIndex < lastDoubleQuoteIndex || callIndex > firstSingleQuoteIndex && callIndex < lastSingleQuoteIndex;
      var isCorrectCall = !isLineComment && !isInString;
      if (isCorrectCall) {
        if (callIndex === 0) {
          isCorrectCall = true;
        } else if (this.isAnOperator(noWhiteSpace.charAt(callIndex - 1))) {
          isCorrectCall = true;
        } else if (noWhiteSpace.charAt(callIndex - 1) === "(") {
          isCorrectCall = true;
        } else if (noWhiteSpace.charAt(callIndex - 1) === ".") {
          // Need to check if the object calling this function is a configured device, and if it is not just a custom object with a device name on the end
          var _iterator3 = _createForOfIteratorHelper(this.deviceClassNames),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var deviceName = _step3.value;
              if (this.callIsDevice(deviceName, noWhiteSpace, callIndex - 1) && !this.isUserVariableDevice(codeLine, funcCall)) {
                isCorrectCall = false;
                break;
              }
              isCorrectCall = true;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        } else if (codeLine.includes("await") && noWhiteSpace.charAt(callIndex - 1) === "t") {
          isCorrectCall = true;
        } else {
          isCorrectCall = false;
        }
      }
      return codeLine.includes(funcCall) && isCorrectCall;
    }
  }, {
    key: "isAnOperator",
    value: function isAnOperator(character) {
      return character === "=" || character === "+" || character === "*" || character === "-" || character === "/" || character === "%" || character === "*" || character === ">" || character === "<";
    }
  }, {
    key: "callIsDevice",
    value: function callIsDevice(device, codeLine, startIndex) {
      var revIndex = startIndex - device.length;
      if (revIndex < 0) {
        return false;
      }

      // This is getting the object that is being called
      // Even if it's not the whole name, or is including other characters I don't care
      // The check is only cares if it's the same as the device
      var objectName = codeLine.substr(revIndex, device.length);
      log.debug(objectName);
      return device === objectName;
    }
  }, {
    key: "isUserVariableDevice",
    value: function isUserVariableDevice(codeLine, funcCall) {
      // TODO: have a list of operators instead of hard coding?
      codeLine.replace(/\=/g, " ").replace(/\*/g, " ").replace(/\+/g, " ").replace(/\-/g, " ").replace(/\//g, " ").replace(/\%/g, " ").replace(/\>/g, " ").replace(/\</g, " ");
      var lineTokens = codeLine.split(/\s+/g);
      var objFuncCall = lineTokens.find(function (t) {
        return t.includes(funcCall);
      });
      if (objFuncCall) {
        var callingObject = objFuncCall.split(".")[0];
        return !this.deviceClassNames.includes(callingObject);
      }
      return false;
    }
  }, {
    key: "addAwaits",
    value: function addAwaits(line, func) {
      var indexes = this.indexes(line, func);
      var newLine = line;
      var closeParenIndex = -1;
      var offset = 0;
      var regexToCheck = /(\s|=|\()/g;
      var _iterator4 = _createForOfIteratorHelper(indexes),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var index = _step4.value;
          index += offset;
          if (index > 0) {
            var prevChar = newLine.charAt(index - 1);
            if (!prevChar.match(/[a-zA-Z0-9_\.]/)) {
              closeParenIndex = this.matchingParenthesis(newLine, index);
              log.debug("closeParenIndex: " + closeParenIndex);
              if (closeParenIndex > 0) {
                newLine = this.placeAtIndex(newLine, "(await ", index);
                offset += 7;
                newLine = this.placeAtIndex(newLine, ")", closeParenIndex + 7);
              } else {
                newLine = this.placeAtIndex(newLine, "await ", index);
                offset += 6;
              }
            } else {
              // the previous character is a '.' so I need to find the front of the object
              closeParenIndex = this.matchingParenthesis(newLine, index);
              var insertIndex = index;
              // if this is calling what is returned from another function
              while (!prevChar.match(regexToCheck) && !(insertIndex <= 0)) {
                if (prevChar === ")") {
                  regexToCheck = /(\s|=)/g;
                }
                insertIndex--;
                prevChar = newLine.charAt(insertIndex);
                // log.warn("stuck line: ", line, insertIndex);
              }
              if (insertIndex < 0) {
                insertIndex = 0;
              }
              // check not being done here since it will need the 100% fix to work anyways
              if (insertIndex === 0) {
                newLine = this.placeAtIndex(newLine, "(await ", insertIndex);
              } else {
                newLine = this.placeAtIndex(newLine, "(await ", insertIndex + 1);
              }
              offset += 7;
              newLine = this.placeAtIndex(newLine, ")", closeParenIndex + 7);
              regexToCheck = /(\s|=|\()/g;
            }
          } else {
            closeParenIndex = this.matchingParenthesis(newLine, index);
            log.debug("closeParenIndex: " + closeParenIndex);
            if (closeParenIndex > 0) {
              newLine = this.placeAtIndex(newLine, "(await ", index);
              offset += 7;
              newLine = this.placeAtIndex(newLine, ")", closeParenIndex + 7);
            } else {
              newLine = this.placeAtIndex(newLine, "await ", index);
              offset += 6;
            }
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return newLine;
    }
  }, {
    key: "indexes",
    value: function indexes(source, find) {
      var result = [];
      for (var i = 0; i < source.length; ++i) {
        // If you want to search case insensitive use
        // if (source.substring(i, i + find.length).toLowerCase() == find) {
        if (source.substring(i, i + find.length) === find) {
          result.push(i);
        }
      }
      return result;
    }
  }, {
    key: "matchingParenthesis",
    value: function matchingParenthesis(codeLine, startIndex) {
      var count = 0;
      var index = -1;
      var currChar;
      var foundFirstOpen = false;
      for (var i = startIndex; i < codeLine.length; i++) {
        currChar = codeLine.charAt(i);
        if (currChar === "(") {
          foundFirstOpen = true;
          count++;
        } else if (currChar === ")") {
          count--;
        }
        if (foundFirstOpen && count === 0) {
          index = i;
          break;
        }
      }
      return index;
    }
  }, {
    key: "placeAtIndex",
    value: function placeAtIndex(inputStr, str, index) {
      return inputStr.slice(0, index) + str + inputStr.slice(index);
    }
  }]);
}();

/***/ }),

/***/ "./src/SimWindow/SimPythonInterpreter/SimPythonSensorsAPI.ts":
/*!*******************************************************************!*\
  !*** ./src/SimWindow/SimPythonInterpreter/SimPythonSensorsAPI.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSensorAPIForIQVS: () => (/* binding */ addSensorAPIForIQVS),
/* harmony export */   addSensorAPIForVR: () => (/* binding */ addSensorAPIForVR),
/* harmony export */   addSensorAPIForVS: () => (/* binding */ addSensorAPIForVS)
/* harmony export */ });
/* harmony import */ var _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SimUnity/SimSensorValues */ "./src/SimWindow/SimUnity/SimSensorValues.ts");
/* harmony import */ var _SimUnity_SimMessageHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SimUnity/SimMessageHelper */ "./src/SimWindow/SimUnity/SimMessageHelper.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



// extend self type to prevent warnings/errors

function addSensorAPIForVS() {
  //#region "sensing drivetrain"
  function drivetrainGetDriveIsDone() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Drivetrain.isDone();
  }
  function drivetrainGetDriveIsMoving() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Drivetrain.isMoving();
  }
  function drivetrainGetDriveRotation() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Drivetrain.rotation();
  }
  function drivetrainGetDriveHeading() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Drivetrain.heading();
  }
  function drivetrainGetDriveVelocity() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Drivetrain.velocity();
  }
  //#endregion

  //#region "distnce sensing"
  function distanceIsObjectFound(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Distance.isObjectFound(port);
  }
  function distance(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Distance.distance(port);
  }
  //#endregion

  //#region "rotation sensing"
  function rotationAngle(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Rotation.angle(port);
  }
  function rotationPosition(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Rotation.position(port);
  }
  function rotationSetPosition(_x, _x2) {
    return _rotationSetPosition.apply(this, arguments);
  }
  function _rotationSetPosition() {
    _rotationSetPosition = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(port, position) {
      var msg;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            msg = _SimUnity_SimMessageHelper__WEBPACK_IMPORTED_MODULE_1__.Rotation.setPosition(position, port);
            _context.next = 3;
            return self.sendCommandMessage(msg);
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _rotationSetPosition.apply(this, arguments);
  }
  function rotationVelocity(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Rotation.velocity(port);
  }
  //#endregion

  //#region "optical sensor"
  function opticalDetectsObject(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Optical.isObjectFound(port);
  }
  function opticalColor(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Optical.color(port);
  }
  function opticalHue(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Optical.hue(port);
  }
  function opticalBrightness(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Optical.brightness(port);
  }
  //#endregion

  //#region "bumper sensor"
  function bumperPressed(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Bumper.pressed(port);
  }
  //#endregion

  //#region "distance sensor"
  function distanceGetObjectFound(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Distance.isObjectFound(port);
  }
  function distanceGetDistance(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Distance.distance(port);
  }
  //#endregion

  //#region "gps sensor"
  function gpsPositionX(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.GPS.x(port);
  }
  function gpsPositionY(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.GPS.y(port);
  }
  function gpsAngle(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.GPS.angle(port);
  }
  //#endregion

  //#region "linetracker sensor"
  function lineTrackerReflectivity(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.LineTracker.reflectivity(port);
  }
  //#endregion

  //#region "motor sensing commands"
  function motorIsDone(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Motor.isDone(port);
  }
  function motorIsMoving(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Motor.isMoving(port);
  }
  function motorPosition(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Motor.position(port);
  }
  function motorVelocity(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Motor.velocity(port);
  }
  //#endregion

  Object.assign(self.vexcode_api, {
    drivetrainGetDriveIsDone: drivetrainGetDriveIsDone,
    drivetrainGetDriveIsMoving: drivetrainGetDriveIsMoving,
    drivetrainGetDriveRotation: drivetrainGetDriveRotation,
    drivetrainGetDriveHeading: drivetrainGetDriveHeading,
    drivetrainGetDriveVelocity: drivetrainGetDriveVelocity,
    distance: distance,
    distanceIsObjectFound: distanceIsObjectFound,
    opticalDetectsObject: opticalDetectsObject,
    opticalColor: opticalColor,
    opticalHue: opticalHue,
    opticalBrightness: opticalBrightness,
    gpsAngle: gpsAngle,
    gpsPositionX: gpsPositionX,
    gpsPositionY: gpsPositionY,
    lineTrackerReflectivity: lineTrackerReflectivity,
    bumperPressed: bumperPressed,
    distanceGetObjectFound: distanceGetObjectFound,
    distanceGetDistance: distanceGetDistance,
    rotationAngle: rotationAngle,
    rotationPosition: rotationPosition,
    rotationSetPosition: rotationSetPosition,
    rotationVelocity: rotationVelocity,
    motorIsDone: motorIsDone,
    motorIsMoving: motorIsMoving,
    motorPosition: motorPosition,
    motorVelocity: motorVelocity
  });
}
function addSensorAPIForIQVS() {
  //#region "sensing drivetrain"
  function drivetrainGetDriveIsDone() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Drivetrain.isDone();
  }
  function drivetrainGetDriveIsMoving() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Drivetrain.isMoving();
  }
  function drivetrainGetDriveRotation() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Drivetrain.rotation();
  }
  function drivetrainGetDriveHeading() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Drivetrain.heading();
  }
  function drivetrainGetDriveVelocity() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Drivetrain.velocity();
  }
  //#endregion

  //#region "distnce sensing"
  function distanceIsObjectFound(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Distance.isObjectFound(port);
  }
  function distance(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Distance.distance(port);
  }
  //#endregion

  //#region "optical sensor"
  function opticalDetectsObject(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Optical.isObjectFound(port);
  }
  function opticalColor(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Optical.color(port);
  }
  function opticalHue(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Optical.hue(port);
  }
  function opticalBrightness(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Optical.brightness(port);
  }
  //#endregion

  //#region "bumper sensor"
  function bumperPressed(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Bumper.pressed(port);
  }
  //#endregion

  //#region "distance sensor"
  function distanceGetObjectFound(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Distance.isObjectFound(port);
  }
  function distanceGetDistance(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Distance.distance(port);
  }
  //#endregion

  //#region "distance 2nd gen sensor"
  function distance2ndGetObjectFound(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Distance2nd.isObjectFound(port);
  }
  function distance2ndGetDistance(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Distance2nd.distance(port);
  }
  function distance2ndGetVelocity(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Distance2nd.velocity(port);
  }
  function distance2ndGetSize(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Distance2nd.size(port);
  }
  //#endregion

  //#region "gyro"
  function gyroGetHeading(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Gyro.heading(port);
  }
  function gyroGetRotation(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Gyro.rotation(port);
  }
  function gyroGetRate(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Gyro.rate(port);
  }
  //#endregion

  //#region "inertial"
  function inertialGetHeading() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Inertial.heading();
  }
  function inertialGetRotation() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Inertial.rotation();
  }
  function inertialGetGyroRateX() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Inertial.gyroRateX();
  }
  function inertialGetGyroRateY() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Inertial.gyroRateY();
  }
  function inertialGetGyroRateZ() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Inertial.gyroRateZ();
  }
  function inertialGetOrientationPitch() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Inertial.orientationPitch();
  }
  function inertialGetOrientationRoll() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Inertial.orientationRoll();
  }
  function inertialGetOrientationYaw() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Inertial.orientationYaw();
  }
  //#endregion

  //#region "color"

  function colorDetectsObject(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Color.isObjectFound(port);
  }
  function colorGetColor(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Color.color(port);
  }
  function colorGetBrightness(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Color.brightness(port);
  }
  function colorGetHue(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Color.hue(port);
  }

  //#endregion

  //#region "motor sensing commands"
  function motorIsDone(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Motor.isDone(port);
  }
  function motorIsMoving(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Motor.isMoving(port);
  }
  function motorPosition(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Motor.position(port);
  }
  function motorVelocity(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Motor.velocity(port);
  }
  //#endregion

  Object.assign(self.vexcode_api, {
    drivetrainGetDriveIsDone: drivetrainGetDriveIsDone,
    drivetrainGetDriveIsMoving: drivetrainGetDriveIsMoving,
    drivetrainGetDriveRotation: drivetrainGetDriveRotation,
    drivetrainGetDriveHeading: drivetrainGetDriveHeading,
    drivetrainGetDriveVelocity: drivetrainGetDriveVelocity,
    distance: distance,
    distanceIsObjectFound: distanceIsObjectFound,
    opticalDetectsObject: opticalDetectsObject,
    opticalColor: opticalColor,
    opticalHue: opticalHue,
    opticalBrightness: opticalBrightness,
    bumperPressed: bumperPressed,
    distanceGetObjectFound: distanceGetObjectFound,
    distanceGetDistance: distanceGetDistance,
    gyroGetHeading: gyroGetHeading,
    gyroGetRotation: gyroGetRotation,
    distance2ndGetObjectFound: distance2ndGetObjectFound,
    distance2ndGetDistance: distance2ndGetDistance,
    distance2ndGetVelocity: distance2ndGetVelocity,
    distance2ndGetSize: distance2ndGetSize,
    inertialGetHeading: inertialGetHeading,
    inertialGetRotation: inertialGetRotation,
    inertialGetGyroRateX: inertialGetGyroRateX,
    inertialGetGyroRateY: inertialGetGyroRateY,
    inertialGetGyroRateZ: inertialGetGyroRateZ,
    inertialGetOrientationPitch: inertialGetOrientationPitch,
    inertialGetOrientationRoll: inertialGetOrientationRoll,
    inertialGetOrientationYaw: inertialGetOrientationYaw,
    colorDetectsObject: colorDetectsObject,
    colorGetColor: colorGetColor,
    colorGetBrightness: colorGetBrightness,
    colorGetHue: colorGetHue,
    motorIsDone: motorIsDone,
    motorIsMoving: motorIsMoving,
    motorPosition: motorPosition,
    motorVelocity: motorVelocity
  });
}
function addSensorAPIForVR() {
  //#region "sensing drivetrain"
  function drivetrainGetDriveIsDone() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.Drivetrain.isDone();
  }
  function drivetrainGetDriveIsMoving() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.Drivetrain.isMoving();
  }
  function drivetrainGetDriveRotation() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.Drivetrain.rotation();
  }
  function drivetrainGetDriveHeading() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.Drivetrain.heading();
  }
  function drivetrainGetDriveVelocity() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Drivetrain.velocity();
  }
  //#endregion

  //#region "sensing distance"
  function distanceGetDistance(port) {
    var distanceSensor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "distance";
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.Distance.distance(port);
  }
  function distanceGetObjectFound(port) {
    var distanceSensor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "distance";
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.Distance.objectFound(port);
  }
  //#endregion

  //#region "sensing location"
  function locationPosition(port, axis) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.Position.location(port, axis);
  }
  function locationAngle(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.Position.angle(port);
  }
  //#endregion

  function bumperPressed(port, bumper) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.Bumper.pressed(port);
  }

  //#region "sensing eye sensor"
  function eyeSensorNearObject(port, colorSensor) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.ColorSensor.nearObject(port);
  }
  function eyeSensorDetect(port, colorSensor) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.ColorSensor.color(port);
  }
  function eyeSensorBrightness(port, colorSensor) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.ColorSensor.brightness(port);
  }
  //#endregion

  //#region "distnce sensing"
  function distanceIsObjectFound(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Distance.isObjectFound(port);
  }
  function distance(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Distance.distance(port);
  }
  //#endregion

  //#region "rotation sensing"
  function rotationAngle(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Rotation.angle(port);
  }
  function rotationPosition(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Rotation.position(port);
  }
  function rotationSetPosition(_x3, _x4) {
    return _rotationSetPosition2.apply(this, arguments);
  }
  function _rotationSetPosition2() {
    _rotationSetPosition2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(port, position) {
      var msg;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            msg = _SimUnity_SimMessageHelper__WEBPACK_IMPORTED_MODULE_1__.Rotation.setPosition(position, port);
            _context2.next = 3;
            return self.sendCommandMessage(msg);
          case 3:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _rotationSetPosition2.apply(this, arguments);
  }
  function rotationVelocity(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Rotation.velocity(port);
  }
  //#endregion

  //#region "optical sensor"
  function opticalDetectsObject(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Optical.isObjectFound(port);
  }
  function opticalColor(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Optical.color(port);
  }
  function opticalHue(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Optical.hue(port);
  }
  function opticalBrightness(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Optical.brightness(port);
  }
  //#endregion

  //#region "gps sensor"
  function gpsPositionX(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.GPS.x(port);
  }
  function gpsPositionY(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.GPS.y(port);
  }
  function gpsAngle(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.GPS.angle(port);
  }
  //#endregion

  //#region "linetracker sensor"
  function lineTrackerReflectivity(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.LineTracker.reflectivity(port);
  }
  //#endregion

  //#region "motor sensing commands"
  function motorIsDone(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Motor.isDone(port);
  }
  function motorIsMoving(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Motor.isMoving(port);
  }
  function motorPosition(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Motor.position(port);
  }
  function motorVelocity(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Motor.velocity(port);
  }
  //#endregion

  //#region "distance 2nd gen sensor"
  function distance2ndGetObjectFound(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Distance2nd.isObjectFound(port);
  }
  function distance2ndGetDistance(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Distance2nd.distance(port);
  }
  function distance2ndGetVelocity(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Distance2nd.velocity(port);
  }
  function distance2ndGetSize(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Distance2nd.size(port);
  }
  //#endregion

  //#region "gyro"
  function gyroGetHeading(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Gyro.heading(port);
  }
  function gyroGetRotation(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Gyro.rotation(port);
  }
  function gyroGetRate(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Gyro.rate(port);
  }
  //#endregion

  //#region "inertial"
  function inertialGetHeading() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Inertial.heading();
  }
  function inertialGetRotation() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Inertial.rotation();
  }
  function inertialGetGyroRateX() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Inertial.gyroRateX();
  }
  function inertialGetGyroRateY() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Inertial.gyroRateY();
  }
  function inertialGetGyroRateZ() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Inertial.gyroRateZ();
  }
  function inertialGetOrientationPitch() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Inertial.orientationPitch();
  }
  function inertialGetOrientationRoll() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Inertial.orientationRoll();
  }
  function inertialGetOrientationYaw() {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Inertial.orientationYaw();
  }
  //#endregion

  //#region "color"

  function colorDetectsObject(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Color.isObjectFound(port);
  }
  function colorGetColor(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Color.color(port);
  }
  function colorGetBrightness(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Color.brightness(port);
  }
  function colorGetHue(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.Color.hue(port);
  }

  //#endregion

  //#region "sensing rover"
  function battery(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.AI.batteryCapacity(port);
  }
  function mineralsStored(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.AI.batteryStored(port, "back");
  }
  function level(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.AI.playerLevel(port);
  }
  function exp(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.AI.playerExp(port);
  }
  function storageCapacity(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.AI.playerCapacity(port);
  }
  function enemyLevel(_x5) {
    return _enemyLevel.apply(this, arguments);
  }
  function _enemyLevel() {
    _enemyLevel = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(port) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.getCurrentAIValueWithWait("vision", "Level", {
              OBJECT: "enemy"
            });
          case 2:
            return _context3.abrupt("return", _context3.sent);
          case 3:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _enemyLevel.apply(this, arguments);
  }
  function enemyRadiation(_x6) {
    return _enemyRadiation.apply(this, arguments);
  }
  function _enemyRadiation() {
    _enemyRadiation = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(port) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.getCurrentAIValueWithWait("vision", "Health", {
              OBJECT: "enemy"
            });
          case 2:
            return _context4.abrupt("return", _context4.sent);
          case 3:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return _enemyRadiation.apply(this, arguments);
  }
  function underAttack(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.AI.playerUnderAttack(port);
  }
  function detects(_x7, _x8) {
    return _detects.apply(this, arguments);
  }
  function _detects() {
    _detects = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(port, object) {
      var key, value;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            key = object === "minerals" ? "battery" : object;
            _context5.next = 3;
            return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.getCurrentAIObjectPresentWithWait("smell", key);
          case 3:
            value = _context5.sent;
            return _context5.abrupt("return", value);
          case 5:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return _detects.apply(this, arguments);
  }
  function sees(_x9, _x10) {
    return _sees.apply(this, arguments);
  }
  function _sees() {
    _sees = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(port, object) {
      var key, value;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            key = object === "minerals" ? "battery" : object;
            _context6.next = 3;
            return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.getCurrentAIObjectPresentWithWait("vision", key);
          case 3:
            value = _context6.sent;
            return _context6.abrupt("return", value);
          case 5:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return _sees.apply(this, arguments);
  }
  function seesAngle(_x11, _x12) {
    return _seesAngle.apply(this, arguments);
  }
  function _seesAngle() {
    _seesAngle = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(port, object) {
      var key, value;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            key = object === "minerals" ? "battery" : object;
            if (!(key === "base")) {
              _context7.next = 5;
              break;
            }
            _context7.t0 = _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.AI.homeDirection(port);
            _context7.next = 8;
            break;
          case 5:
            _context7.next = 7;
            return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.getCurrentAIValueWithWait("vision", "Angle", {
              OBJECT: key
            });
          case 7:
            _context7.t0 = _context7.sent;
          case 8:
            value = _context7.t0;
            return _context7.abrupt("return", value);
          case 10:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return _seesAngle.apply(this, arguments);
  }
  function seesDistance(_x13, _x14) {
    return _seesDistance.apply(this, arguments);
  }
  function _seesDistance() {
    _seesDistance = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(port, object) {
      var key, value;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            key = object === "minerals" ? "battery" : object;
            if (!(key === "base")) {
              _context8.next = 5;
              break;
            }
            _context8.t0 = _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.AI.homeDistance(port);
            _context8.next = 8;
            break;
          case 5:
            _context8.next = 7;
            return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.getCurrentAIValueWithWait("vision", "Distance", {
              OBJECT: key
            });
          case 7:
            _context8.t0 = _context8.sent;
          case 8:
            value = _context8.t0;
            return _context8.abrupt("return", value);
          case 10:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return _seesDistance.apply(this, arguments);
  }
  function seesLocation(_x15, _x16, _x17) {
    return _seesLocation.apply(this, arguments);
  } //#endregion "sensing rover"
  //#region "AIVision commands"
  function _seesLocation() {
    _seesLocation = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(port, object, axis) {
      var key, value;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            key = object === "minerals" ? "battery" : object;
            if (!(key === "base")) {
              _context9.next = 5;
              break;
            }
            _context9.t0 = _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.AI.homeLocation(port, axis);
            _context9.next = 15;
            break;
          case 5:
            if (!(key === "rover")) {
              _context9.next = 11;
              break;
            }
            _context9.next = 8;
            return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.AI.playerPosition(port, axis);
          case 8:
            _context9.t1 = _context9.sent;
            _context9.next = 14;
            break;
          case 11:
            _context9.next = 13;
            return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.getCurrentAIValueWithWait("vision", "Location", {
              OBJECT: key,
              AXIS: axis
            });
          case 13:
            _context9.t1 = _context9.sent;
          case 14:
            _context9.t0 = _context9.t1;
          case 15:
            value = _context9.t0;
            return _context9.abrupt("return", value);
          case 17:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }));
    return _seesLocation.apply(this, arguments);
  }
  function aiVisionGetSnapshot(port) {
    var _SensorValues$VR$AIVi;
    var sensorData = (_SensorValues$VR$AIVi = _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.AIVision.sensingAIVisionTakeSnapshot(port)) === null || _SensorValues$VR$AIVi === void 0 ? void 0 : _SensorValues$VR$AIVi.objectsDetected;
    return sensorData;
  }
  //#endregion

  //#region "DataSensor commands"
  function dataSensorCollectStationData(_x18) {
    return _dataSensorCollectStationData.apply(this, arguments);
  }
  function _dataSensorCollectStationData() {
    _dataSensorCollectStationData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(port) {
      var msg;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            msg = _SimUnity_SimMessageHelper__WEBPACK_IMPORTED_MODULE_1__.DataSensor.collectStationData(port);
            _context10.next = 3;
            return self.sendCommandMessage(msg);
          case 3:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }));
    return _dataSensorCollectStationData.apply(this, arguments);
  }
  function dataSensorIsStationConnected(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.DataSensor.isStationConnected(port);
  }
  function dataSensorStationType(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.DataSensor.stationType(port);
  }
  function dataSensorDataCount(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.DataSensor.dataCount(port);
  }
  function dataSensorDataPoints(port) {
    return _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR.DataSensor.dataPoints(port);
  }
  //#endregion

  Object.assign(self.vexcode_api, {
    aiVisionGetSnapshot: aiVisionGetSnapshot,
    drivetrainGetDriveIsDone: drivetrainGetDriveIsDone,
    drivetrainGetDriveIsMoving: drivetrainGetDriveIsMoving,
    drivetrainGetDriveRotation: drivetrainGetDriveRotation,
    drivetrainGetDriveHeading: drivetrainGetDriveHeading,
    locationPosition: locationPosition,
    locationAngle: locationAngle,
    bumperPressed: bumperPressed,
    distanceGetObjectFound: distanceGetObjectFound,
    distanceGetDistance: distanceGetDistance,
    eyeSensorNearObject: eyeSensorNearObject,
    eyeSensorDetect: eyeSensorDetect,
    eyeSensorBrightness: eyeSensorBrightness,
    drivetrainGetDriveVelocity: drivetrainGetDriveVelocity,
    distanceIsObjectFound: distanceIsObjectFound,
    distance: distance,
    rotationAngle: rotationAngle,
    rotationPosition: rotationPosition,
    rotationSetPosition: rotationSetPosition,
    rotationVelocity: rotationVelocity,
    opticalDetectsObject: opticalDetectsObject,
    opticalColor: opticalColor,
    opticalHue: opticalHue,
    opticalBrightness: opticalBrightness,
    gpsPositionX: gpsPositionX,
    gpsPositionY: gpsPositionY,
    gpsAngle: gpsAngle,
    lineTrackerReflectivity: lineTrackerReflectivity,
    motorIsDone: motorIsDone,
    motorIsMoving: motorIsMoving,
    motorPosition: motorPosition,
    motorVelocity: motorVelocity,
    battery: battery,
    mineralsStored: mineralsStored,
    level: level,
    exp: exp,
    enemyLevel: enemyLevel,
    enemyRadiation: enemyRadiation,
    storageCapacity: storageCapacity,
    underAttack: underAttack,
    detects: detects,
    sees: sees,
    seesAngle: seesAngle,
    seesDistance: seesDistance,
    seesLocation: seesLocation,
    distance2ndGetObjectFound: distance2ndGetObjectFound,
    distance2ndGetDistance: distance2ndGetDistance,
    distance2ndGetVelocity: distance2ndGetVelocity,
    distance2ndGetSize: distance2ndGetSize,
    gyroGetHeading: gyroGetHeading,
    gyroGetRotation: gyroGetRotation,
    gyroGetRate: gyroGetRate,
    inertialGetHeading: inertialGetHeading,
    inertialGetRotation: inertialGetRotation,
    inertialGetGyroRateX: inertialGetGyroRateX,
    inertialGetGyroRateY: inertialGetGyroRateY,
    inertialGetGyroRateZ: inertialGetGyroRateZ,
    inertialGetOrientationPitch: inertialGetOrientationPitch,
    inertialGetOrientationRoll: inertialGetOrientationRoll,
    inertialGetOrientationYaw: inertialGetOrientationYaw,
    colorDetectsObject: colorDetectsObject,
    colorGetColor: colorGetColor,
    colorGetBrightness: colorGetBrightness,
    colorGetHue: colorGetHue,
    dataSensorCollectStationData: dataSensorCollectStationData,
    dataSensorIsStationConnected: dataSensorIsStationConnected,
    dataSensorStationType: dataSensorStationType,
    dataSensorDataCount: dataSensorDataCount,
    dataSensorDataPoints: dataSensorDataPoints,
    // The VR sensors are a little different and placed here for the existing API code to work with
    SensorValues: _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__.VR,
    SensorValuesRaw: _SimUnity_SimSensorValues__WEBPACK_IMPORTED_MODULE_0__
  });
}


/***/ }),

/***/ "./src/SimWindow/SimUnity/SimMessageHelper.ts":
/*!****************************************************!*\
  !*** ./src/SimWindow/SimUnity/SimMessageHelper.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Actions: () => (/* binding */ Actions),
/* harmony export */   Actions123: () => (/* binding */ Actions123),
/* harmony export */   AiVision: () => (/* binding */ AiVision),
/* harmony export */   DataSensor: () => (/* binding */ DataSensor),
/* harmony export */   Drivetrain: () => (/* binding */ Drivetrain),
/* harmony export */   Electromagnet: () => (/* binding */ Electromagnet),
/* harmony export */   Gyro: () => (/* binding */ Gyro),
/* harmony export */   Inertial: () => (/* binding */ Inertial),
/* harmony export */   LED: () => (/* binding */ LED),
/* harmony export */   LEDColors: () => (/* binding */ LEDColors),
/* harmony export */   Looks: () => (/* binding */ Looks),
/* harmony export */   Motor: () => (/* binding */ Motor),
/* harmony export */   PenColor: () => (/* binding */ PenColor),
/* harmony export */   PenPosition: () => (/* binding */ PenPosition),
/* harmony export */   PenWidth: () => (/* binding */ PenWidth),
/* harmony export */   Program: () => (/* binding */ Program),
/* harmony export */   Rotation: () => (/* binding */ Rotation),
/* harmony export */   Sounds123: () => (/* binding */ Sounds123),
/* harmony export */   Timer: () => (/* binding */ Timer),
/* harmony export */   TouchLED: () => (/* binding */ TouchLED)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _unityMessageEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unityMessageEnums */ "./src/SimWindow/unityMessageEnums.ts");

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("SimMessageHelper");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();



//#region "robot device commands"
// TODO: reconfigure message helper paramaters so that "port" is always first and no longer optional
//#region "drivetrain commands"
var Drivetrain = {
  drive: function drive(direction, port) {
    return {
      command: {
        device: "drivetrain",
        port: port,
        command: _unityMessageEnums__WEBPACK_IMPORTED_MODULE_1__.DrivetrainCommand.drive,
        param: {
          direction: direction
        },
        rejectAllDeviceCommands: true
      },
      wait: false,
      preventDuplicate: true
    };
  },
  driveFor: function driveFor(direction, distance) {
    var wait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var port = arguments.length > 3 ? arguments[3] : undefined;
    return {
      command: {
        device: "drivetrain",
        port: port,
        command: _unityMessageEnums__WEBPACK_IMPORTED_MODULE_1__.DrivetrainCommand.driveFor,
        param: {
          direction: direction,
          distance: distance
        },
        rejectAllDeviceCommands: true
      },
      wait: wait,
      preventDuplicate: false
    };
  },
  driveUntil: function driveUntil(direction, event) {
    var wait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var port = arguments.length > 3 ? arguments[3] : undefined;
    return {
      command: {
        device: "drivetrain",
        port: port,
        command: _unityMessageEnums__WEBPACK_IMPORTED_MODULE_1__.DrivetrainCommand.driveUntil,
        param: {
          direction: direction,
          event: event
        },
        rejectAllDeviceCommands: true
      },
      wait: wait,
      preventDuplicate: false
    };
  },
  turn: function turn(direction, port) {
    return {
      command: {
        device: "drivetrain",
        port: port,
        command: _unityMessageEnums__WEBPACK_IMPORTED_MODULE_1__.DrivetrainCommand.turn,
        param: {
          direction: direction
        },
        rejectAllDeviceCommands: true
      },
      wait: false,
      preventDuplicate: true
    };
  },
  turnFor: function turnFor(direction, degrees) {
    var wait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var port = arguments.length > 3 ? arguments[3] : undefined;
    return {
      command: {
        device: "drivetrain",
        port: port,
        command: _unityMessageEnums__WEBPACK_IMPORTED_MODULE_1__.DrivetrainCommand.turnFor,
        param: {
          direction: direction,
          degrees: degrees
        },
        rejectAllDeviceCommands: true
      },
      wait: wait,
      preventDuplicate: false
    };
  },
  turnToHeading: function turnToHeading(heading) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var port = arguments.length > 2 ? arguments[2] : undefined;
    return {
      command: {
        device: "drivetrain",
        port: port,
        command: _unityMessageEnums__WEBPACK_IMPORTED_MODULE_1__.DrivetrainCommand.turnToHeading,
        param: {
          heading: heading
        },
        rejectAllDeviceCommands: true
      },
      wait: wait,
      preventDuplicate: false
    };
  },
  turnToRotation: function turnToRotation(rotation) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var port = arguments.length > 2 ? arguments[2] : undefined;
    return {
      command: {
        device: "drivetrain",
        port: port,
        command: _unityMessageEnums__WEBPACK_IMPORTED_MODULE_1__.DrivetrainCommand.turnToRotation,
        param: {
          rotation: rotation
        },
        rejectAllDeviceCommands: true
      },
      wait: wait,
      preventDuplicate: false
    };
  },
  setDriveSpeed: function setDriveSpeed(speed, port) {
    return {
      command: {
        device: "drivetrain",
        port: port,
        command: _unityMessageEnums__WEBPACK_IMPORTED_MODULE_1__.DrivetrainCommand.driveSpeed,
        param: {
          speed: speed
        }
      },
      wait: false,
      preventDuplicate: true
    };
  },
  setTurnSpeed: function setTurnSpeed(speed, port) {
    return {
      command: {
        device: "drivetrain",
        port: port,
        command: _unityMessageEnums__WEBPACK_IMPORTED_MODULE_1__.DrivetrainCommand.turnSpeed,
        param: {
          speed: speed
        }
      },
      wait: false,
      preventDuplicate: true
    };
  },
  stop: function stop(port) {
    return {
      command: {
        device: "drivetrain",
        port: port,
        command: _unityMessageEnums__WEBPACK_IMPORTED_MODULE_1__.DrivetrainCommand.stop,
        rejectAllDeviceCommands: true
      },
      wait: false,
      preventDuplicate: true
    };
  },
  setHeading: function setHeading(heading, port) {
    return {
      command: {
        device: "drivetrain",
        port: port,
        command: _unityMessageEnums__WEBPACK_IMPORTED_MODULE_1__.DrivetrainCommand.setHeading,
        param: {
          heading: heading
        }
      },
      wait: false,
      preventDuplicate: false
    };
  },
  setRotation: function setRotation(rotation, port) {
    return {
      command: {
        device: "drivetrain",
        port: port,
        command: _unityMessageEnums__WEBPACK_IMPORTED_MODULE_1__.DrivetrainCommand.setRotation,
        param: {
          rotation: rotation
        }
      },
      wait: false,
      preventDuplicate: false
    };
  }
};
//#endregion

var AiVision = {
  takeSnapshot: function takeSnapshot() {
    var wait = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var port = arguments.length > 1 ? arguments[1] : undefined;
    return {
      command: {
        device: "aiVision",
        name: "aiVision",
        port: port,
        command: _unityMessageEnums__WEBPACK_IMPORTED_MODULE_1__.AiVisionCommand.takeSnapshot,
        param: {
          delay: 20
        },
        rejectAllDeviceCommands: true
      },
      wait: wait,
      preventDuplicate: false
    };
  }
};

//#region program
var Program = {
  start: function start() {
    return {
      device: "program",
      command: "start"
    };
  },
  stop: function stop() {
    return {
      device: "program",
      command: "stop"
    };
  },
  reset: function reset() {
    return {
      device: "program",
      command: "reset"
    };
  }
};
//#endregion

//#region "timer"
var Timer = {
  start: function start() {
    return {
      device: "timer",
      command: "start"
    };
  },
  stop: function stop() {
    return {
      device: "timer",
      command: "stop"
    };
  },
  reset: function reset() {
    return {
      device: "timer",
      command: "reset"
    };
  }
};
//#endregion

//#region "motor commands"
var Motor = {
  spin: function spin(port, direction) {
    return {
      command: {
        device: "motor",
        port: port,
        command: _unityMessageEnums__WEBPACK_IMPORTED_MODULE_1__.MotorCommand.spin,
        param: {
          direction: direction
        },
        rejectAllDeviceCommands: true
      },
      wait: false,
      preventDuplicate: true
    };
  },
  spinFor: function spinFor(port, direction, degrees) {
    var wait = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    return {
      command: {
        device: "motor",
        port: port,
        command: _unityMessageEnums__WEBPACK_IMPORTED_MODULE_1__.MotorCommand.spinFor,
        param: {
          direction: direction,
          degrees: degrees
        },
        rejectAllDeviceCommands: true
      },
      wait: wait,
      preventDuplicate: false
    };
  },
  spinTo: function spinTo(port, degrees) {
    var wait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return {
      command: {
        device: "motor",
        port: port,
        command: _unityMessageEnums__WEBPACK_IMPORTED_MODULE_1__.MotorCommand.spinTo,
        param: {
          degrees: degrees
        },
        rejectAllDeviceCommands: true
      },
      wait: wait,
      preventDuplicate: false
    };
  },
  stop: function stop(port) {
    return {
      command: {
        device: "motor",
        port: port,
        command: _unityMessageEnums__WEBPACK_IMPORTED_MODULE_1__.MotorCommand.stop,
        rejectAllDeviceCommands: true
      },
      wait: false,
      preventDuplicate: true
    };
  },
  setVelocity: function setVelocity(port, velocity) {
    return {
      command: {
        device: "motor",
        port: port,
        command: _unityMessageEnums__WEBPACK_IMPORTED_MODULE_1__.MotorCommand.setVelocity,
        param: {
          velocity: velocity
        }
      },
      wait: false,
      preventDuplicate: true
    };
  },
  setPosition: function setPosition(port, position) {
    return {
      command: {
        device: "motor",
        port: port,
        command: _unityMessageEnums__WEBPACK_IMPORTED_MODULE_1__.MotorCommand.setPosition,
        param: {
          position: position
        }
      },
      wait: false,
      preventDuplicate: false
    };
  }
};
//#endregion

//#region "rotation"
var Rotation = {
  setPosition: function setPosition(position, port) {
    return {
      command: {
        device: "rotation",
        port: port,
        command: _unityMessageEnums__WEBPACK_IMPORTED_MODULE_1__.RotationCommand.setPosition,
        param: {
          position: position
        }
      },
      wait: false,
      preventDuplicate: false
    };
  }
};
//#endregion "rotation"

//#region "electromagnet"

var Electromagnet = {
  setState: function setState(state, port) {
    return {
      command: {
        device: "Magnet",
        port: port,
        command: state
      },
      wait: false,
      preventDuplicate: false
    };
  }
};
//#endregion

//#region "gyro"

var Gyro = {
  setHeading: function setHeading(port, heading, units) {
    return {
      command: {
        device: "Gyro",
        command: "heading",
        port: port,
        param: {
          heading: heading,
          units: units
        }
      },
      wait: false,
      preventDuplicate: false
    };
  },
  setRotation: function setRotation(port, rotation, units) {
    return {
      command: {
        device: "Gyro",
        command: "rotation",
        port: port,
        param: {
          rotation: rotation,
          units: units
        }
      },
      wait: false,
      preventDuplicate: false
    };
  },
  calibrate: function calibrate(port, type) {
    return {
      command: {
        device: "Gyro",
        command: "calibrate",
        port: port,
        param: {
          type: type
        }
      },
      wait: false,
      preventDuplicate: false
    };
  }
};

//#endregion

//#region "inertial"

var Inertial = {
  setHeading: function setHeading(port, heading, units) {
    return {
      command: {
        device: "Inertial",
        command: "heading",
        port: port,
        param: {
          heading: heading,
          units: units
        }
      },
      wait: false,
      preventDuplicate: false
    };
  },
  setRotation: function setRotation(port, rotation, units) {
    return {
      command: {
        device: "Inertial",
        command: "rotation",
        port: port,
        param: {
          rotation: rotation,
          units: units
        }
      },
      wait: false,
      preventDuplicate: false
    };
  },
  calibrate: function calibrate(port) {
    return {
      command: {
        device: "Inertial",
        command: "calibrate",
        port: port
      },
      wait: false,
      preventDuplicate: false
    };
  }
};

//#endregion

//#region "touchLED"

var TouchLED = {
  setLEDColor: function setLEDColor(port, ledColor) {
    return {
      command: {
        device: "touchLED",
        port: port,
        command: "setledcolor",
        param: {
          ledcolor: ledColor
        }
      },
      wait: false,
      preventDuplicate: false
    };
  }
};

//#endregion

//#region "actions"
var Actions123 = /*#__PURE__*/function (Actions123) {
  Actions123[Actions123["Happy"] = 1] = "Happy";
  Actions123[Actions123["Sad"] = 2] = "Sad";
  Actions123[Actions123["Crazy"] = 3] = "Crazy";
  return Actions123;
}(Actions123 || {});
var Sounds123 = /*#__PURE__*/function (Sounds123) {
  Sounds123[Sounds123["Honk"] = 11] = "Honk";
  Sounds123[Sounds123["Doorbell"] = 18] = "Doorbell";
  Sounds123[Sounds123["Crash"] = 19] = "Crash";
  return Sounds123;
}(Sounds123 || {});
var Actions = {
  interact: function interact(action) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return {
      command: {
        device: "Rover",
        command: action
      },
      wait: wait,
      preventDuplicate: false
    };
  },
  standby: function standby(battery) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return {
      command: {
        device: "Rover",
        command: "hibernate",
        param: {
          battery: battery
        },
        skipIfExistingSent: true
      },
      wait: wait,
      preventDuplicate: false
    };
  },
  act: function act(behavior) {
    return {
      command: {
        device: "brain",
        command: "act",
        param: {
          behavior: behavior
        }
      },
      wait: true,
      preventDuplicate: false
    };
  },
  playSound: function playSound(clip) {
    return {
      command: {
        device: "brain",
        command: "play_sound",
        param: {
          clip: clip
        }
      },
      wait: false,
      preventDuplicate: false
    };
  }
};
//#endregion "actions"

//#region "led"
var LEDColors = /*#__PURE__*/function (LEDColors) {
  LEDColors[LEDColors["off"] = 0] = "off";
  LEDColors[LEDColors["green"] = 2] = "green";
  LEDColors[LEDColors["blue"] = 3] = "blue";
  LEDColors[LEDColors["purple"] = 6] = "purple";
  return LEDColors;
}(LEDColors || {});
var LED = {
  glow: function glow(state, port) {
    return {
      command: {
        device: "led",
        command: "glow",
        port: port,
        param: {
          state: state
        }
      },
      wait: false,
      preventDuplicate: false
    };
  }
};

//#endregion

//#region "looks"
var PenPosition = /*#__PURE__*/function (PenPosition) {
  PenPosition[PenPosition["Up"] = 0] = "Up";
  PenPosition[PenPosition["Down"] = 1] = "Down";
  return PenPosition;
}(PenPosition || {});
var PenColor = /*#__PURE__*/function (PenColor) {
  PenColor[PenColor["Black"] = 0] = "Black";
  PenColor[PenColor["Red"] = 1] = "Red";
  PenColor[PenColor["Green"] = 2] = "Green";
  PenColor[PenColor["Blue"] = 3] = "Blue";
  return PenColor;
}(PenColor || {});
var PenWidth = /*#__PURE__*/function (PenWidth) {
  PenWidth[PenWidth["extraSmall"] = 0] = "extraSmall";
  PenWidth[PenWidth["small"] = 1] = "small";
  PenWidth[PenWidth["normal"] = 3] = "normal";
  PenWidth[PenWidth["wide"] = 4] = "wide";
  PenWidth[PenWidth["extraWide"] = 5] = "extraWide";
  return PenWidth;
}(PenWidth || {});
var Looks = {
  movePen: function movePen(state, port) {
    return {
      command: {
        device: "pen",
        port: port,
        command: "state",
        param: {
          state: state
        }
      },
      wait: true,
      preventDuplicate: false
    };
  },
  setPen: function setPen(color, port) {
    return {
      command: {
        device: "pen",
        port: port,
        command: "color",
        param: {
          color: color
        }
      },
      wait: false,
      preventDuplicate: false
    };
  },
  setPenWidth: function setPenWidth(width, port) {
    return {
      command: {
        device: "pen",
        port: port,
        command: "width",
        param: {
          width: width
        }
      },
      wait: false,
      preventDuplicate: false
    };
  },
  setPenColorPlus: function setPenColorPlus(r, g, b, a, port) {
    return {
      command: {
        device: "pen",
        port: port,
        command: "rgb",
        param: {
          r: r,
          g: g,
          b: b,
          a: a
        }
      },
      wait: false,
      preventDuplicate: false
    };
  },
  fillPenColorPlus: function fillPenColorPlus(r, g, b, a, port) {
    return {
      command: {
        device: "pen",
        port: port,
        command: "fill",
        param: {
          r: r,
          g: g,
          b: b,
          a: a
        }
      },
      wait: true,
      preventDuplicate: false
    };
  }
};
//#endregion

//#region "dataSensor"
var DataSensor = {
  collectStationData: function collectStationData(port) {
    return {
      command: {
        device: "dataSensor",
        port: port,
        command: "collectStationData"
      },
      wait: true,
      preventDuplicate: false
    };
  }
};
//#endregion



/***/ }),

/***/ "./src/SimWindow/SimUnity/SimSensorDataHelpers.ts":
/*!********************************************************!*\
  !*** ./src/SimWindow/SimUnity/SimSensorDataHelpers.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deviceDefaults: () => (/* binding */ deviceDefaults)
/* harmony export */ });
// import type { DrivetrainSimSensorData }
var deviceDefaults = {
  "drivetrain": function drivetrain(name) {
    return {
      deviceType: "drivetrain",
      name: name,
      heading: 0,
      rotation: 0,
      velocity: 50,
      isMoving: false,
      isDone: true
    };
  },
  "gyro": function gyro(name) {
    return {
      deviceType: "gyro",
      name: name,
      heading: 0,
      rotation: 0,
      rate: 0
    };
  },
  "inertial": function inertial(name) {
    return {
      deviceType: "inertial",
      name: name,
      heading: 0,
      rotation: 0,
      acceleration: 0,
      gyroRateX: 0,
      gyroRateY: 0,
      gyroRateZ: 0,
      orientationPitch: 0,
      orientationRoll: 0,
      orientationYaw: 0
    };
  },
  "bumper": function bumper(name) {
    return {
      deviceType: "bumper",
      name: name,
      state: 0
    };
  },
  "linetracker": function linetracker(name) {
    return {
      deviceType: "linetracker",
      name: name,
      reflectivity: 0
    };
  },
  "motor": function motor(name) {
    return {
      deviceType: "motor",
      name: name,
      isMoving: false,
      isDone: true,
      position: 0,
      velocity: 50,
      motorMaxRPM: 600,
      motorTimeoutMS: 0
    };
  },
  "distance": function distance(name) {
    return {
      deviceType: "distance",
      name: name,
      distance: 0,
      isObjectFound: 0
    };
  },
  "distance2nd": function distance2nd(name) {
    return {
      deviceType: "distance2nd",
      name: name,
      distance: 0,
      velocity: 0,
      isObjectFound: 0,
      size: ""
    };
  },
  "eye": function eye(name) {
    return {
      deviceType: "color",
      name: name,
      isObjectFound: 0,
      color: 0,
      hue: 0,
      brightness: 100.0
    };
  },
  "color": function color(name) {
    return {
      deviceType: "color",
      name: name,
      isObjectFound: 0,
      color: 0,
      hue: 0,
      brightness: 100.0
    };
  },
  "optical": function optical(name) {
    return {
      deviceType: "optical",
      name: name,
      isObjectFound: 0,
      color: 0,
      hue: 0,
      brightness: 0.0
    };
  },
  "rotation": function rotation(name) {
    return {
      deviceType: "rotation",
      name: name,
      angle: 0,
      position: 0,
      velocity: 0
    };
  },
  "location": function location(name) {
    return {
      deviceType: "gps",
      name: name,
      x: 0,
      y: 0,
      angle: 0
    };
  },
  "ai": function ai(name) {
    return {
      deviceType: "ai",
      name: name,
      vision: {
        objectsDetected: []
      },
      smell: {
        objectsDetected: []
      },
      base: {
        ID: "",
        Name: "Base",
        Distance: 0,
        Angle: 0,
        X: 0,
        Y: 0,
        Storage: 0
      },
      player: {
        X: 0,
        Y: 0,
        Charge: 0,
        Storage: 0,
        XP: 0,
        CurrentXP: 0,
        isUnderAttack: false,
        Level: 0,
        DaysSurvived: 0,
        FoodEaten: 0,
        FoodCollected: 0,
        EnemiesDefeated: 0,
        DistanceTravelled: 0,
        isHibernating: false
      },
      allTrackables: []
    };
  },
  "dataSensor": function dataSensor(name) {
    return {
      deviceType: "dataCollectionSensor",
      name: name,
      is_station_connected: false,
      collect_station_data: false,
      station_type: 0,
      data_count: 0,
      data_point: []
    };
  }
};


/***/ }),

/***/ "./src/SimWindow/SimUnity/SimSensorValues.ts":
/*!***************************************************!*\
  !*** ./src/SimWindow/SimUnity/SimSensorValues.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bumper: () => (/* binding */ Bumper),
/* harmony export */   Color: () => (/* binding */ Color),
/* harmony export */   Distance: () => (/* binding */ Distance),
/* harmony export */   Distance2nd: () => (/* binding */ Distance2nd),
/* harmony export */   Drivetrain: () => (/* binding */ Drivetrain),
/* harmony export */   GPS: () => (/* binding */ GPS),
/* harmony export */   Gyro: () => (/* binding */ Gyro),
/* harmony export */   Inertial: () => (/* binding */ Inertial),
/* harmony export */   LineTracker: () => (/* binding */ LineTracker),
/* harmony export */   Motor: () => (/* binding */ Motor),
/* harmony export */   Optical: () => (/* binding */ Optical),
/* harmony export */   Rotation: () => (/* binding */ Rotation),
/* harmony export */   TouchLED: () => (/* binding */ TouchLED),
/* harmony export */   VR: () => (/* binding */ VR),
/* harmony export */   getCurrentAIObjectPresent: () => (/* binding */ getCurrentAIObjectPresent),
/* harmony export */   getCurrentAIObjectPresentWithWait: () => (/* binding */ getCurrentAIObjectPresentWithWait),
/* harmony export */   getCurrentAIValue: () => (/* binding */ getCurrentAIValue),
/* harmony export */   getCurrentAIValueWithWait: () => (/* binding */ getCurrentAIValueWithWait),
/* harmony export */   lockIsDrivingOn: () => (/* binding */ lockIsDrivingOn),
/* harmony export */   off: () => (/* binding */ off),
/* harmony export */   on: () => (/* binding */ on),
/* harmony export */   resetValues: () => (/* binding */ resetValues),
/* harmony export */   sensorValues: () => (/* binding */ sensorValues),
/* harmony export */   updateValues: () => (/* binding */ updateValues),
/* harmony export */   waitForSensorUpdate: () => (/* binding */ waitForSensorUpdate),
/* harmony export */   waitForSensorUpdateMin: () => (/* binding */ waitForSensorUpdateMin)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Blockly_Extensions_utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Blockly/Extensions/utils/helpers */ "./src/Blockly/Extensions/utils/helpers.ts");
/* harmony import */ var _targetPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../targetPlatform */ "./src/targetPlatform.ts");
/* harmony import */ var _SimSensorDataHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SimSensorDataHelpers */ "./src/SimWindow/SimUnity/SimSensorDataHelpers.ts");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("SimSensorValues");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

var sensorValuesIQ = {
  0: {
    deviceType: "drivetrain",
    name: "",
    heading: 0,
    rotation: 0,
    velocity: 0,
    isMoving: false,
    isDone: true
  },
  1: {
    deviceType: "motor",
    name: "IntakeMotor",
    isDone: true,
    isMoving: false,
    position: 0,
    velocity: 0
  },
  2: {
    deviceType: "bumper",
    name: "IntakeBumper",
    state: 0
  },
  3: {
    deviceType: "distance2nd",
    name: "FrontDistance2nd",
    isObjectFound: 0,
    distance: 0,
    velocity: 0,
    size: ""
  },
  5: {
    deviceType: "optical",
    name: "FrontOptical",
    isObjectFound: 0,
    color: 0,
    // 0-none, 1-red, 2-green, 3-blue, 4-yellow, 5-orange, 6-purple, 7-cyan, 8-white
    hue: 0,
    brightness: 0.0
  },
  7: {
    deviceType: "color",
    name: "Color",
    isObjectFound: 0,
    color: 0,
    hue: 0,
    brightness: 0.0
  },
  9: {
    deviceType: "gyro",
    name: "Gyro",
    heading: 0,
    rotation: 0,
    rate: 0
  },
  10: {
    deviceType: "motor",
    name: "ArmMotor",
    isDone: true,
    isMoving: false,
    position: 0,
    velocity: 0
  },
  11: {
    deviceType: "inertial",
    name: "Inertial",
    heading: 0,
    rotation: 0,
    acceleration: 0,
    gyroRateX: 0,
    gyroRateY: 0,
    gyroRateZ: 0,
    orientationPitch: 0,
    orientationRoll: 0,
    orientationYaw: 0
  }
};
var sensorValuesV5 = {
  0: {
    deviceType: "drivetrain",
    name: "",
    heading: 0,
    rotation: 0,
    velocity: 0,
    isMoving: false,
    isDone: true
  },
  10: {
    deviceType: "motor",
    name: "IntakeMotorGroup",
    isDone: true,
    isMoving: false,
    position: 0,
    velocity: 0
  },
  21: {
    deviceType: "bumper",
    name: "bumper",
    state: 0
  },
  18: {
    deviceType: "distance",
    name: "BottomDistance",
    distance: 0,
    isObjectFound: 0
  },
  2: {
    deviceType: "optical",
    name: "RollerOptical",
    isObjectFound: 0,
    color: 0,
    // 0-none, 1-red, 2-green, 3-blue, 4-yellow, 5-orange, 6-purple, 7-cyan, 8-white
    hue: 0,
    brightness: 0.0
  },
  3: {
    deviceType: "gps",
    name: "gps",
    x: 0,
    y: 0,
    angle: 0
  },
  22: {
    deviceType: "linetracker",
    name: "BottomLineTracker",
    reflectivity: 0
  },
  23: {
    deviceType: "linetracker",
    name: "MiddleLineTracker",
    reflectivity: 0
  },
  24: {
    deviceType: "linetracker",
    name: "TopLineTracker",
    reflectivity: 0
  }
};
var sensorValuesVR = {
  0: {
    deviceType: "drivetrain",
    name: "drivetrain",
    heading: 0,
    rotation: 0,
    velocity: 50,
    isMoving: false,
    isDone: true
  }
};
var sensorValues = _targetPlatform__WEBPACK_IMPORTED_MODULE_2__.targetIsPlaygrounds ? sensorValuesVR : _targetPlatform__WEBPACK_IMPORTED_MODULE_2__.targetIsIQ ? sensorValuesIQ : sensorValuesV5;

//#region event system

var eventCallbacks = {
  "bumperChange": [],
  "opticalChange": [],
  "underAttack": [],
  "levelUp": [],
  "sensorDataUpdated": []
};
function on(eventName, callback) {
  log.debug("on event", eventName, callback.name);
  if (eventCallbacks[eventName].indexOf(callback) >= 0) {
    log.warn("Duplicate callback.", eventName, callback.name);
    return;
  }
  eventCallbacks[eventName].push(callback);
}
function off(eventName, callback) {
  log.debug("off event", eventName, callback.name);
  var i = eventCallbacks[eventName].indexOf(callback);
  if (i < 0) {
    log.warn("Unknown callback.", eventName, callback.name);
    return;
  }
  eventCallbacks[eventName].splice(i, 1);
}
function fireEvent(eventName) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  log.debug.apply(log, ["fireEvent", eventName].concat(args));
  if (eventCallbacks[eventName]) {
    eventCallbacks[eventName].slice(0).forEach(function (callback) {
      callback.apply(void 0, args);
    });
  }
}
//#endregion event system

function updateValuesVS(newData) {
  var sv = sensorValues;
  for (var _port in newData) {
    if (Object.prototype.hasOwnProperty.call(newData, _port)) {
      var portNum = parseInt(_port, 10);
      var newPortInfo = newData[_port];
      var oldPortInfo = sv[_port];
      var deviceType = newPortInfo.deviceType;
      var deviceName = newPortInfo.name.toUpperCase();
      if (deviceType === "bumper" && oldPortInfo) {
        var newBumperInfo = newPortInfo;
        var oldBumperInfo = oldPortInfo;
        if (oldBumperInfo.state !== newBumperInfo.state) {
          fireEvent("bumperChange", portNum, deviceName, newBumperInfo.state !== 0);
        }
      } else if (deviceType === "color" && oldPortInfo) {
        var newOpticalInfo = newPortInfo;
        var oldOpticalInfo = oldPortInfo;
        if (oldOpticalInfo.isObjectFound !== newOpticalInfo.isObjectFound) {
          fireEvent("opticalChange", portNum, deviceName, newOpticalInfo.isObjectFound !== 0);
        }
      }
    }
  }
  Object.assign(sensorValues, newData);
  log.debug("new sensor values:", sensorValues);
}
var isDrivingLockedOn = false;

/**
 * use this to lock the drivetrain.isMoving to true.
 * @param active iindicates if the value should be locked on
 */
function lockIsDrivingOn(active) {
  isDrivingLockedOn = active;
  if (isDrivingLockedOn) {
    var sv = sensorValues;
    sv[0].isMoving = true;
    sv[0].isDone = false;
  }
}

// front_eye = EyeSensor("fronteye", 3)
// down_eye = EyeSensor("downeye", 4)
function updateValuesVR(newData) {
  log.info(newData);
  var sv = sensorValues;
  var firedUnderAttackEvent = false;
  var firedLevelUpEvent = false;
  for (var _port2 in newData) {
    if (Object.prototype.hasOwnProperty.call(newData, _port2)) {
      var portNum = parseInt(_port2, 10);
      if (isNaN(portNum)) {
        // for some reason we are getting random messages that are old rover ai data.
        // we are only expecting the new standard port data stucture, so this unexpected
        // data causes issues with events. as such, we want to ignore any data that is
        // not using the port data structure.
        log.debug("portNum is NaN... skip data", portNum, newData);
        continue;
      }
      var newPortInfo = newData[_port2];
      var oldPortInfo = sv[_port2];
      var deviceType = newPortInfo.deviceType;
      if (deviceType !== "ai") {
        var deviceName = newPortInfo.name.toUpperCase();
        if (deviceType === "bumper" && oldPortInfo) {
          var newBumperInfo = newPortInfo;
          var oldBumperInfo = oldPortInfo;
          if (oldBumperInfo.state !== newBumperInfo.state) {
            fireEvent("bumperChange", portNum, deviceName, newBumperInfo.state !== 0);
          }
        } else if (deviceType === "color" && oldPortInfo) {
          var newOpticalInfo = newPortInfo;
          var oldOpticalInfo = oldPortInfo;
          if (oldOpticalInfo.isObjectFound !== newOpticalInfo.isObjectFound) {
            fireEvent("opticalChange", portNum, deviceName, newOpticalInfo.isObjectFound !== 0);
          }
        }
      } else {
        if (oldPortInfo) {
          var newRoverInfo = newPortInfo.player;
          var oldRoverInfo = oldPortInfo.player;
          if (!oldRoverInfo.isUnderAttack && newRoverInfo.isUnderAttack) {
            if (!firedUnderAttackEvent) {
              fireEvent("underAttack");
              firedUnderAttackEvent = true;
            }
          }
          if (oldRoverInfo.Level !== newRoverInfo.Level) {
            if (!firedLevelUpEvent) {
              fireEvent("levelUp");
              firedLevelUpEvent = true;
            }
          }
        }
      }
    }
  }

  // TODO: we need to handle Rover Rescue sensors

  Object.assign(sensorValues, newData);

  // hack to keep the is moving flag set when using fake commands like rover go to
  // if (isDrivingLockedOn) {
  //   const sv = sensorValues as SimSensorDataVR;
  //   sv.drivetrain.isMoving = true;
  //   sv.drivetrain.isDone = false;
  // }

  log.debug("new sensor values:", sensorValues);
  fireEvent("sensorDataUpdated");
}
function updateValues(newData) {
  if (_targetPlatform__WEBPACK_IMPORTED_MODULE_2__.targetIsPlaygrounds) {
    updateValuesVR(newData);
  } else {
    updateValuesVS(newData);
  }
}
function resetValuesIQ() {
  var defaultValues = {
    0: {
      deviceType: "drivetrain",
      name: "",
      heading: 0,
      rotation: 0,
      velocity: 0,
      isMoving: false,
      isDone: true
    },
    1: {
      deviceType: "motor",
      name: "IntakeMotor",
      isDone: true,
      isMoving: false,
      position: 0,
      velocity: 0
    },
    2: {
      deviceType: "bumper",
      name: "IntakeBumper",
      state: 0
    },
    3: {
      deviceType: "distance2nd",
      name: "FrontDistance2nd",
      isObjectFound: 0,
      distance: 0,
      velocity: 0,
      size: ""
    },
    5: {
      deviceType: "optical",
      name: "FrontOptical",
      isObjectFound: 0,
      color: 0,
      // 0-none, 1-red, 2-green, 3-blue, 4-yellow, 5-orange, 6-purple, 7-cyan, 8-white
      hue: 0,
      brightness: 0.0
    },
    9: {
      deviceType: "gyro",
      name: "Gyro",
      heading: 0,
      rotation: 0,
      rate: 0
    },
    10: {
      deviceType: "motor",
      name: "ArmMotor",
      isDone: true,
      isMoving: false,
      position: 0,
      velocity: 0
    },
    11: {
      deviceType: "inertial",
      name: "Inertial",
      heading: 0,
      rotation: 0,
      acceleration: 0,
      gyroRateX: 0,
      gyroRateY: 0,
      gyroRateZ: 0,
      orientationPitch: 0,
      orientationRoll: 0,
      orientationYaw: 0
    }
  };
  Object.assign(sensorValues, defaultValues);
  log.debug("reset sensor values:", sensorValues);
}
function resetValuesV5() {
  var defaultValues = {
    0: {
      deviceType: "drivetrain",
      name: "",
      heading: 0,
      rotation: 0,
      velocity: 0,
      isMoving: false,
      isDone: true
    },
    10: {
      deviceType: "motor",
      name: "IntakeMotorGroup",
      isDone: true,
      isMoving: false,
      position: 0,
      velocity: 0
    },
    21: {
      deviceType: "bumper",
      name: "bumper",
      state: 0
    },
    18: {
      deviceType: "distance",
      name: "BottomDistance",
      distance: 0,
      isObjectFound: 0
    },
    2: {
      deviceType: "optical",
      name: "RollerOptical",
      isObjectFound: 0,
      color: 0,
      // 0-none, 1-red, 2-green, 3-blue, 4-yellow, 5-orange, 6-purple, 7-cyan, 8-white
      hue: 0,
      brightness: 0.0
    },
    3: {
      deviceType: "gps",
      name: "gps",
      x: 0,
      y: 0,
      angle: 0
    },
    22: {
      deviceType: "linetracker",
      name: "BottomLineTracker",
      reflectivity: 0
    },
    23: {
      deviceType: "linetracker",
      name: "MiddleLineTracker",
      reflectivity: 0
    },
    24: {
      deviceType: "linetracker",
      name: "TopLineTracker",
      reflectivity: 0
    }
  };
  Object.assign(sensorValues, defaultValues);
  log.debug("reset sensor values:", sensorValues);
}
function resetValuesVR(currentConfig) {
  var defaultValues;
  for (var key in currentConfig) {
    if (Object.prototype.hasOwnProperty.call(currentConfig, key)) {
      var device = currentConfig[key];
      if (_SimSensorDataHelpers__WEBPACK_IMPORTED_MODULE_3__.deviceDefaults[device.type]) {
        defaultValues[device.port] = _SimSensorDataHelpers__WEBPACK_IMPORTED_MODULE_3__.deviceDefaults[device.type](device.type);
      }
    }
  }
  Object.assign(sensorValues, defaultValues);
}
function resetValues(currentConfig) {
  if (_targetPlatform__WEBPACK_IMPORTED_MODULE_2__.targetIsIQ) {
    resetValuesIQ();
  } else if (_targetPlatform__WEBPACK_IMPORTED_MODULE_2__.targetIsV5) {
    resetValuesV5();
  } else {
    resetValuesVR(currentConfig);
  }
}

//#region AI sensor data helpers
var VRAIProcessor = /*#__PURE__*/function () {
  function VRAIProcessor() {
    _classCallCheck(this, VRAIProcessor);
    this.port = 1;
  }

  /**
   * sets the port of the AI sensor
   * @param port the port of the AI sensor
   */
  return _createClass(VRAIProcessor, [{
    key: "setPort",
    value: function setPort(port) {
      this.port = port;
    }

    /**
     * returns all objects of a given type for the specified sense
     * @param senseType the sense to check agains
     * @param objectType the type (name) of the objects to return
     * @returns the list of objects matching the filter params
     */
  }, {
    key: "getObjectsFromSense",
    value: function getObjectsFromSense(senseType, objectType) {
      return this.filterObjectsByType(this.getAllObjectsFromSense(senseType), objectType);
    }

    /**
     * check to see if the object type is present for the selected sense
     * @param senseType the sense that should be checked against
     * @param objectType the object type to look for
     * @returns true if there is at least on of the object type found by the sense
     */
  }, {
    key: "isObjectPresent",
    value: function isObjectPresent(senseType, objectType) {
      return this.getObjectsFromSense(senseType, objectType).length > 0;
    }

    /**
     * will find the closet object based on the parameters
     * @param senseType the sense that should be checked against
     * @param objectType the object type to look for
     * @returns 
     */
  }, {
    key: "getClosestObject",
    value: function getClosestObject(senseType, objectType) {
      var relevantObjects = this.sortObjectsByDistance(this.getObjectsFromSense(senseType, objectType));
      if (relevantObjects.length > 0) {
        return relevantObjects[0];
      }
      return null;
    }

    /**
     * get the param value of the AI object if it exists
     * @param senseType the sense that should be checked against
     * @param objectType the object type to look for
     * @param property the property from the object
     * @param axis if location, the axis is which axis of the location. ignored for other properties
     * @returns the value
     */
  }, {
    key: "getObjectValue",
    value: function getObjectValue(senseType, objectType, property, axis) {
      var closestObject = this.getClosestObject(senseType, objectType);
      if (!closestObject) {
        if (property === "Distance" && (objectType === "obstacle" || objectType === "hazard")) {
          return 1000;
        }
        return 0;
      }
      if (property !== "Location") {
        return closestObject[property];
      } else {
        return closestObject[axis];
      }
    }
  }, {
    key: "getObjectById",
    value: function getObjectById(id) {
      var objects = this.getAllObjectsFromSense("all");
      var _iterator = _createForOfIteratorHelper(objects),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var obj = _step.value;
          if (obj.ID === id) {
            return obj;
          }
        }
        // TODO: remove this after Raj fixes the data...
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var objectsVision = this.getAllObjectsFromSense("vision");
      var _iterator2 = _createForOfIteratorHelper(objectsVision),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _obj = _step2.value;
          if (_obj.ID === id) {
            return _obj;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var objectsSmell = this.getAllObjectsFromSense("smell");
      var _iterator3 = _createForOfIteratorHelper(objectsSmell),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _obj2 = _step3.value;
          if (_obj2.ID === id) {
            return _obj2;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return null;
    }

    /**
    * get the param value of the AI object if it exists
    * @param senseType the sense that should be checked against
    * @param objectType the object type to look for
    * @param property the propert from the object
    * @param axis if location, the axis is which axis of the location. ignored for other properties
    * @returns the value
    */
  }, {
    key: "getObjectValueByID",
    value: function getObjectValueByID(id, objectType, property, axis) {
      var obj = this.getObjectById(id);
      if (!obj) {
        if (property === "Distance" && (objectType === "obstacle" || objectType === "hazard")) {
          return 1000;
        }
        return 0;
      }
      if (property !== "Location") {
        return obj[property];
      } else {
        return obj[axis];
      }
    }
    /**
     * will return all of the current objects for a given sense
     * @param senseType the sense to pull the objects for
     * @returns the current objects for the given sense
     */
  }, {
    key: "getAllObjectsFromSense",
    value: function getAllObjectsFromSense(senseType) {
      if (senseType === "all") {
        return sensorValues[this.port].allTrackables;
      } else {
        return sensorValues[this.port][senseType].objectsDetected;
      }
    }

    /**
     * will return only the objects of the given type
     * @param objects the source list of objects
     * @param objectType the type (name) of the objects to return
     * @returns the filter list of objects
     */
  }, {
    key: "filterObjectsByType",
    value: function filterObjectsByType(objects, objectType) {
      return objects.filter(function (currentObject) {
        return currentObject.Name === VRObjectLookup[objectType];
      });
    }
  }, {
    key: "sortObjectsByDistance",
    value: function sortObjectsByDistance(objects) {
      return objects.sort(function (a, b) {
        return a.Distance - b.Distance;
      });
    }
  }]);
}();
;
var AIProcessor = new VRAIProcessor();

// TODO: move to direct instance access
function getCurrentAIObjectPresent(objectType, object) {
  return AIProcessor.isObjectPresent(objectType, object);
}

// TODO: move to direct instance access
function getCurrentAIValue(type, property, params) {
  return AIProcessor.getObjectValue(type, params.OBJECT, property, params.AXIS);
}

// TODO: move to direct instance access
function getCurrentAIObjectPresentWithWait(_x, _x2) {
  return _getCurrentAIObjectPresentWithWait.apply(this, arguments);
}
function _getCurrentAIObjectPresentWithWait() {
  _getCurrentAIObjectPresentWithWait = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(objectType, object) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return waitForSensorUpdate();
        case 2:
          return _context.abrupt("return", getCurrentAIObjectPresent(objectType, object));
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getCurrentAIObjectPresentWithWait.apply(this, arguments);
}
function getCurrentAIValueWithWait(_x3, _x4, _x5) {
  return _getCurrentAIValueWithWait.apply(this, arguments);
} //#endregion AI sensor data helpers
function _getCurrentAIValueWithWait() {
  _getCurrentAIValueWithWait = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(type, property, params) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return waitForSensorUpdate();
        case 2:
          return _context2.abrupt("return", getCurrentAIValue(type, property, params));
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _getCurrentAIValueWithWait.apply(this, arguments);
}
var Drivetrain = {
  isDone: function isDone() {
    return sensorValues["0"].isDone;
  },
  isMoving: function isMoving() {
    return sensorValues["0"].isMoving;
  },
  heading: function heading() {
    return sensorValues["0"].heading;
  },
  rotation: function rotation() {
    return sensorValues["0"].rotation;
  },
  velocity: function velocity() {
    return sensorValues["0"].velocity;
  }
};
var Motor = {
  isDone: function isDone(port) {
    var motorDevice = sensorValues[port];
    if ("isDone" in motorDevice) {
      return motorDevice.isDone;
    }
  },
  isMoving: function isMoving(port) {
    var motorDevice = sensorValues[port];
    if ("isMoving" in motorDevice) {
      return motorDevice.isMoving;
    }
  },
  position: function position(port) {
    var motorDevice = sensorValues[port];
    if ("position" in motorDevice) {
      return motorDevice.position;
    }
  },
  velocity: function velocity(port) {
    var motorDevice = sensorValues[port];
    if ("velocity" in motorDevice) {
      return motorDevice.velocity;
    }
  }
};
var Bumper = {
  pressed: function pressed(port) {
    var bumperDevice = sensorValues[port];
    if ("state" in bumperDevice) {
      return bumperDevice.state;
    }
  }
};
var LineTracker = {
  reflectivity: function reflectivity(port) {
    var lineTrackerDevice = sensorValues[port];
    if ("reflectivity" in lineTrackerDevice) {
      return lineTrackerDevice.reflectivity;
    }
  }
};
var Distance = {
  isObjectFound: function isObjectFound(port) {
    var distanceDevice = sensorValues[port];
    if ("isObjectFound" in distanceDevice) {
      return distanceDevice.isObjectFound;
    }
  },
  distance: function distance(port) {
    var distanceDevice = sensorValues[port];
    if ("distance" in distanceDevice) {
      return distanceDevice.distance;
    }
  }
};
var Distance2nd = {
  isObjectFound: function isObjectFound(port) {
    var distanceDevice = sensorValues[port];
    if ("isObjectFound" in distanceDevice) {
      return distanceDevice.isObjectFound;
    }
  },
  distance: function distance(port) {
    var distanceDevice = sensorValues[port];
    if ("distance" in distanceDevice) {
      return distanceDevice.distance;
    }
  },
  velocity: function velocity(port) {
    var distanceDevice = sensorValues[port];
    if ("velocity" in distanceDevice) {
      return distanceDevice.velocity;
    }
  },
  size: function size(port) {
    var distanceDevice = sensorValues[port];
    if ("size" in distanceDevice) {
      return distanceDevice.size;
    }
  }
};
var Color = {
  isObjectFound: function isObjectFound(port) {
    var colorDevice = sensorValues[port];
    if ("isObjectFound" in colorDevice) {
      return colorDevice.isObjectFound;
    }
  },
  color: function color(port) {
    var colorDevice = sensorValues[port];
    if ("color" in colorDevice) {
      return colorDevice.color;
    }
  },
  hue: function hue(port) {
    var colorDevice = sensorValues[port];
    if ("hue" in colorDevice) {
      return colorDevice.hue;
    }
  },
  brightness: function brightness(port) {
    var colorDevice = sensorValues[port];
    if ("brightness" in colorDevice) {
      return colorDevice.brightness;
    }
  }
};
var Optical = {
  isObjectFound: function isObjectFound(port) {
    var opticalDevice = sensorValues[port];
    if ("isObjectFound" in opticalDevice) {
      return opticalDevice.isObjectFound === 1;
    }
  },
  color: function color(port) {
    var opticalDevice = sensorValues[port];
    if ("color" in opticalDevice) {
      return opticalDevice.color;
    }
  },
  hue: function hue(port) {
    var opticalDevice = sensorValues[port];
    if ("hue" in opticalDevice) {
      return opticalDevice.hue;
    }
  },
  brightness: function brightness(port) {
    var opticalDevice = sensorValues[port];
    if ("brightness" in opticalDevice) {
      return opticalDevice.brightness;
    }
  }
};
var Rotation = {
  angle: function angle(port) {
    var rotationDevice = sensorValues[port];
    if ("angle" in rotationDevice) {
      return rotationDevice.angle;
    }
  },
  position: function position(port) {
    var rotationDevice = sensorValues[port];
    if ("position" in rotationDevice) {
      return rotationDevice.position;
    }
  },
  velocity: function velocity(port) {
    var rotationDevice = sensorValues[port];
    if ("velocity" in rotationDevice) {
      return rotationDevice.velocity;
    }
  }
};
var GPS = {
  x: function x(port) {
    var gpsDevice = sensorValues[port];
    if ("x" in gpsDevice) {
      return gpsDevice.x;
    }
  },
  y: function y(port) {
    var gpsDevice = sensorValues[port];
    if ("y" in gpsDevice) {
      return gpsDevice.y;
    }
  },
  angle: function angle(port) {
    var gpsDevice = sensorValues[port];
    if ("angle" in gpsDevice) {
      return gpsDevice.angle;
    }
  }
};
var Gyro = {
  heading: function heading(port) {
    var gyroDevice = sensorValues[port];
    if ("heading" in gyroDevice) {
      return gyroDevice.heading;
    }
  },
  rotation: function rotation(port) {
    var gyroDevice = sensorValues[port];
    if ("rotation" in gyroDevice) {
      return gyroDevice.rotation;
    }
  },
  rate: function rate(port) {
    var gyroDevice = sensorValues[port];
    if ("rate" in gyroDevice) {
      return gyroDevice.rate;
    }
  }
};
var Inertial = {
  heading: function heading() {
    var gyroDevice = sensorValues[11];
    if ("heading" in gyroDevice) {
      return gyroDevice.heading;
    }
  },
  rotation: function rotation() {
    var gyroDevice = sensorValues[11];
    if ("rotation" in gyroDevice) {
      return gyroDevice.rotation;
    }
  },
  acceleration: function acceleration() {
    var gyroDevice = sensorValues[11];
    if ("acceleration" in gyroDevice) {
      return gyroDevice.acceleration;
    }
  },
  gyroRateX: function gyroRateX() {
    var gyroDevice = sensorValues[11];
    if ("gyroRateX" in gyroDevice) {
      return gyroDevice.gyroRateX;
    }
  },
  gyroRateY: function gyroRateY() {
    var gyroDevice = sensorValues[11];
    if ("gyroRateY" in gyroDevice) {
      return gyroDevice.gyroRateY;
    }
  },
  gyroRateZ: function gyroRateZ() {
    var gyroDevice = sensorValues[11];
    if ("gyroRateZ" in gyroDevice) {
      return gyroDevice.gyroRateZ;
    }
  },
  orientationPitch: function orientationPitch() {
    var gyroDevice = sensorValues[11];
    if ("orientationPitch" in gyroDevice) {
      return gyroDevice.orientationPitch;
    }
  },
  orientationRoll: function orientationRoll() {
    var gyroDevice = sensorValues[11];
    if ("orientationRoll" in gyroDevice) {
      return gyroDevice.orientationRoll;
    }
  },
  orientationYaw: function orientationYaw() {
    var gyroDevice = sensorValues[11];
    if ("orientationYaw" in gyroDevice) {
      return gyroDevice.orientationYaw;
    }
  }
};
var VRObjectLookup = {
  battery: "Minerals",
  enemy: "Hostile",
  home: "Base",
  obstacle: "Obstacle",
  hazard: "Hazard"
};
var VR = {
  Drivetrain: {
    isDone: function isDone() {
      return sensorValues["0"].isDone;
    },
    isMoving: function isMoving() {
      return sensorValues["0"].isMoving;
    },
    heading: function heading() {
      return sensorValues["0"].heading;
    },
    rotation: function rotation() {
      return sensorValues["0"].rotation;
    }
  },
  Distance: {
    distance: function distance(port) {
      return sensorValues[port].distance;
    },
    // objectFound: (distanceSensor: string = "distance"): boolean => {
    //   if (distanceSensor === "distance" || distanceSensor === "frontdistance") {
    //     return (sensorValues as SimSensorDataVR).distance.isObjectFound === 1
    //   } else if (distanceSensor === "reardistance") {
    //     return (sensorValues as SimSensorDataVR).distanceRear.isObjectFound === 1
    //   } else if (distanceSensor === "leftdistance") {
    //     return (sensorValues as SimSensorDataVR).distanceLeft.isObjectFound === 1
    //   } else if (distanceSensor === "rightdistance") {
    //     return (sensorValues as SimSensorDataVR).distanceRight.isObjectFound === 1
    //   }
    // },
    objectFound: function objectFound(port) {
      // const distanceDevice = (sensorValues as SimSensorDataVS)[port];
      var distanceDevice = sensorValues[port];
      return distanceDevice.isObjectFound === 1;
    }
  },
  Gyro: {
    crashDetected: function crashDetected(port) {
      var gyroDevice = sensorValues[port];
      return gyroDevice.isCrashDetected;
    }
  },
  Position: {
    location: function location(port, axis) {
      var device = sensorValues[port];
      if (axis === "X") {
        return device.x;
      } else if (axis === "Y") {
        return device.y;
      }
    },
    angle: function angle(port) {
      var device = sensorValues[port];
      return device.angle;
    }
  },
  GPS: {
    x: function x(port) {
      var gpsDevice = sensorValues[port];
      if ("x" in gpsDevice) {
        return gpsDevice.x;
      }
    },
    y: function y(port) {
      var gpsDevice = sensorValues[port];
      if ("y" in gpsDevice) {
        return gpsDevice.y;
      }
    },
    angle: function angle(port) {
      var gpsDevice = sensorValues[port];
      if ("angle" in gpsDevice) {
        return gpsDevice.angle;
      }
    }
  },
  ColorSensor: {
    nearObject: function nearObject(port) {
      var device = sensorValues[port];
      return device.isObjectFound === 1;
    },
    color: function color(port) {
      var device = sensorValues[port];
      return device.color;
    },
    colorPlus: function colorPlus(port) {
      var device = sensorValues[port];
      return {
        R: 0,
        G: 0,
        B: 0
      };
    },
    brightness: function brightness(port) {
      var device = sensorValues[port];
      return device.brightness;
    }
  },
  Bumper: {
    pressed: function pressed(port) {
      var device = sensorValues[port];
      return device.state === 1;
    }
  },
  AI: {
    batteryCapacity: function batteryCapacity(port) {
      return sensorValues[port].player.Charge;
    },
    batteryStored: function batteryStored(port, location) {
      if (location === "back") {
        return sensorValues[port].player.Storage;
      }
      return sensorValues[port].base.Storage;
    },
    playerPosition: function playerPosition(port, axis) {
      return sensorValues[port].player[axis];
    },
    playerUnderAttack: function playerUnderAttack(port) {
      return sensorValues[port].player.isUnderAttack;
    },
    playerLevel: function playerLevel(port) {
      return sensorValues[port].player.Level;
    },
    playerExp: function playerExp(port) {
      return sensorValues[port].player.CurrentXP;
    },
    playerCapacity: function playerCapacity(port) {
      return sensorValues[port].player.Level + 1;
    },
    homeDirection: function homeDirection(port) {
      return sensorValues[port].base.Angle;
    },
    homeDistance: function homeDistance(port) {
      return sensorValues[port].base.Distance;
    },
    homeLocation: function homeLocation(port, axis) {
      return sensorValues[port].base[axis];
    },
    processor: AIProcessor
  },
  // AI Vision for V5RC25
  AIVision: {
    sensingAIVisionTakeSnapshot: function sensingAIVisionTakeSnapshot(port) {
      return sensorValues[port];
    }
  },
  DataSensor: {
    isStationConnected: function isStationConnected(port) {
      var dataSensorData = sensorValues[port];
      return dataSensorData.is_station_connected;
    },
    stationType: function stationType(port) {
      var dataSensorData = sensorValues[port];
      return dataSensorData.station_type;
    },
    dataCount: function dataCount(port) {
      var dataSensorData = sensorValues[port];
      return dataSensorData.data_count;
    },
    dataPoints: function dataPoints(port) {
      var dataSensorData = sensorValues[port];
      return dataSensorData.data_point;
    },
    dataPoint: function dataPoint(port, index) {
      var dataSensorData = sensorValues[port];
      return dataSensorData.data_point[index];
    }
  }
};

// TODO: Rotation and GPS for V5

// TODO: we will need a helper function that will return the will get the device type for
//       a port given the deviceType dield. We are hard coding drivetrain on 0 so we don't
//       need it for the drivetrain device.

var TouchLED = {
  ledColor: function ledColor(port) {
    var touchLEDData = sensorValues[port];
    if ("ledcolor" in touchLEDData) {
      return touchLEDData.ledcolor;
    }
  },
  state: function state(port) {
    var touchLEDData = sensorValues[port];
    if ("state" in touchLEDData) {
      return touchLEDData.state;
    }
  }
};
function waitForSensorUpdate() {
  return new Promise(function (resolve, reject) {
    var _updateWaiter = function updateWaiter() {
      off("sensorDataUpdated", _updateWaiter);
      resolve();
    };
    on("sensorDataUpdated", _updateWaiter);
  });
}
function waitForSensorUpdateMin(_x6) {
  return _waitForSensorUpdateMin.apply(this, arguments);
}
function _waitForSensorUpdateMin() {
  _waitForSensorUpdateMin = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(min) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", new Promise(function (resolve, reject) {
            var minTimePassed = false;
            waitForSensorUpdate().then(function () {
              if (minTimePassed) {
                resolve();
              } else {
                waitForSensorUpdate().then(resolve);
              }
            });
            // make sure min time passed
            (0,_Blockly_Extensions_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.waitms)(min).then(function () {
              minTimePassed = true;
            });
          }));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _waitForSensorUpdateMin.apply(this, arguments);
}


/***/ }),

/***/ "./src/SimWindow/unityMessageEnums.ts":
/*!********************************************!*\
  !*** ./src/SimWindow/unityMessageEnums.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AiVisionCommand: () => (/* binding */ AiVisionCommand),
/* harmony export */   DrivetrainCommand: () => (/* binding */ DrivetrainCommand),
/* harmony export */   DrivetrainDirection: () => (/* binding */ DrivetrainDirection),
/* harmony export */   MotorCommand: () => (/* binding */ MotorCommand),
/* harmony export */   MotorDirection: () => (/* binding */ MotorDirection),
/* harmony export */   MotorPort: () => (/* binding */ MotorPort),
/* harmony export */   RotationCommand: () => (/* binding */ RotationCommand)
/* harmony export */ });
//#region "message structures"
/**
 * message sent from unity to ask for the skills auth information
 */
/**
 * message sent from VEXcode with the skills auth information
 */
/**
 * message sent from unity to submit virtual skills score
 */
/**
 * message sent to unity with the submit response
 */
//#endregion
//#region "message enums"
var DrivetrainCommand = /*#__PURE__*/function (DrivetrainCommand) {
  DrivetrainCommand["drive"] = "drive";
  DrivetrainCommand["driveFor"] = "driveFor";
  DrivetrainCommand["driveUntil"] = "driveUntil";
  DrivetrainCommand["turn"] = "turn";
  DrivetrainCommand["turnFor"] = "turnFor";
  DrivetrainCommand["turnToHeading"] = "turnToHeading";
  DrivetrainCommand["turnToRotation"] = "turnToRotation";
  DrivetrainCommand["driveSpeed"] = "driveSpeed";
  DrivetrainCommand["turnSpeed"] = "turnSpeed";
  DrivetrainCommand["setHeading"] = "setHeading";
  DrivetrainCommand["setRotation"] = "setRotation";
  DrivetrainCommand["stop"] = "stop";
  return DrivetrainCommand;
}(DrivetrainCommand || {});
var DrivetrainDirection = /*#__PURE__*/function (DrivetrainDirection) {
  DrivetrainDirection[DrivetrainDirection["right"] = 1] = "right";
  DrivetrainDirection[DrivetrainDirection["left"] = -1] = "left";
  DrivetrainDirection[DrivetrainDirection["forward"] = 1] = "forward";
  DrivetrainDirection[DrivetrainDirection["backward"] = -1] = "backward";
  return DrivetrainDirection;
}(DrivetrainDirection || {});
var MotorCommand = /*#__PURE__*/function (MotorCommand) {
  MotorCommand["spin"] = "spin";
  MotorCommand["spinTo"] = "spinTo";
  MotorCommand["spinFor"] = "spinFor";
  MotorCommand["stop"] = "stop";
  MotorCommand["setPosition"] = "setPosition";
  MotorCommand["setVelocity"] = "setVelocity";
  return MotorCommand;
}(MotorCommand || {});
var MotorDirection = /*#__PURE__*/function (MotorDirection) {
  MotorDirection[MotorDirection["forward"] = 1] = "forward";
  MotorDirection[MotorDirection["backward"] = -1] = "backward";
  return MotorDirection;
}(MotorDirection || {});
var MotorPort = /*#__PURE__*/function (MotorPort) {
  MotorPort[MotorPort["intake"] = 2] = "intake";
  MotorPort[MotorPort["catapult"] = 4] = "catapult";
  MotorPort[MotorPort["rubberband"] = 8] = "rubberband";
  return MotorPort;
}(MotorPort || {});
var RotationCommand = /*#__PURE__*/function (RotationCommand) {
  RotationCommand["setPosition"] = "setPosition";
  return RotationCommand;
}(RotationCommand || {});
var AiVisionCommand = /*#__PURE__*/function (AiVisionCommand) {
  AiVisionCommand["takeSnapshot"] = "takeSnapShot";
  return AiVisionCommand;
}(AiVisionCommand || {}); //#endregion


/***/ }),

/***/ "./src/VexcodeTimer.ts":
/*!*****************************!*\
  !*** ./src/VexcodeTimer.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexcodeTimer: () => (/* binding */ VexcodeTimer)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var VexcodeTimer = /*#__PURE__*/function () {
  /**
   * used as a generic timer with pause support
   * @param initialTime initial timer value in ms
   * @param countUp true if the timer should increase over time
   */
  function VexcodeTimer(initialTime, countUp) {
    _classCallCheck(this, VexcodeTimer);
    _defineProperty(this, "finalTimeMS", null);
    this.initialTime = initialTime;
    this.countUp = countUp;
    this.reset();
  }

  /**
   * resets the timer to the iinitial conditions and starts the timer again
   */
  return _createClass(VexcodeTimer, [{
    key: "reset",
    value: function reset() {
      var startTimer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.startTimeMS = new Date().getTime();
      this.pauseStartTimeMS = null;
      this.timerOffsetMS = 0;
      this.finalTimeMS = startTimer ? null : 0;
    }

    /**
     * stops the timer and locks the returned value
     */
  }, {
    key: "stop",
    value: function stop() {
      this.finalTimeMS = this.getTime();
    }

    /**
     * pauses the timer
     */
  }, {
    key: "pause",
    value: function pause() {
      var now = new Date().getTime();
      if (!this.pauseStartTimeMS) {
        this.pauseStartTimeMS = now;
      }
    }

    /**
     * resume the timer counting after a pause
     */
  }, {
    key: "resume",
    value: function resume() {
      var now = new Date().getTime();
      if (this.pauseStartTimeMS) {
        this.timerOffsetMS += now - this.pauseStartTimeMS;
        this.pauseStartTimeMS = null;
      }
    }

    /**
     * returns the current timer value in ms
     */
  }, {
    key: "getTime",
    value: function getTime() {
      var now = new Date().getTime();
      if (this.finalTimeMS != null) {
        return this.finalTimeMS;
      }
      var pauseOffset = 0;
      if (this.pauseStartTimeMS) {
        pauseOffset = now - this.pauseStartTimeMS;
      }
      var time = now - this.startTimeMS - (this.timerOffsetMS + pauseOffset);
      return this.countUp ? this.initialTime + time : this.initialTime - time;
    }
  }]);
}();


/***/ }),

/***/ "./src/appVersionInfo.ts":
/*!*******************************!*\
  !*** ./src/appVersionInfo.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appVersionString: () => (/* binding */ appVersionString),
/* harmony export */   isNewerVersion: () => (/* binding */ isNewerVersion),
/* harmony export */   sdkVersionEXP: () => (/* binding */ sdkVersionEXP),
/* harmony export */   sdkVersionIQ: () => (/* binding */ sdkVersionIQ),
/* harmony export */   sdkVersionIQ2: () => (/* binding */ sdkVersionIQ2),
/* harmony export */   sdkVersionString: () => (/* binding */ sdkVersionString),
/* harmony export */   sdkVersionV5: () => (/* binding */ sdkVersionV5)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _version_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./version.json */ "./src/version.json");

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("appVersionInfo");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();


var appInfo = _version_json__WEBPACK_IMPORTED_MODULE_1__;
var appVersionString = function appVersionString() {
  return appInfo.version;
};
var sdkVersionIQ = function sdkVersionIQ() {
  return appInfo.sdkVersionIQ;
};
var sdkVersionIQ2 = function sdkVersionIQ2() {
  return appInfo.sdkVersionIQ2;
};
var sdkVersionEXP = function sdkVersionEXP() {
  return appInfo.sdkVersionEXP;
};
var sdkVersionV5 = function sdkVersionV5() {
  return appInfo.sdkVersionV5;
};
var sdkVersionAIR = function sdkVersionAIR() {
  return appInfo.sdkVersionAIR;
};
var sdkVersionString = function sdkVersionString() {
  return  false ? 0 :  false ? 0 :  false ? 0 : sdkVersionV5();
};
var isNewerVersion = function isNewerVersion(dataVersion, storedVersion) {
  log.debug("Comparing Versions: ".concat(dataVersion, " and ").concat(storedVersion));
  var s1 = dataVersion.split(/[.-]/gm);
  var s2 = storedVersion.split(/[.-]/gm);
  var maxLength = Math.max(s1.length, s2.length);
  for (var i = 0; i < maxLength; i++) {
    var v1 = i < s1.length ? parseInt(s1[i], 10) : 0;
    var v2 = i < s2.length ? parseInt(s2[i], 10) : 0;
    if (v1 > v2) {
      // Build version is newer
      log.debug("data version is newer");
      return true;
    }
  }
  return false;
};


/***/ }),

/***/ "./src/dispatcher.ts":
/*!***************************!*\
  !*** ./src/dispatcher.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DispatcherEvent: () => (/* binding */ DispatcherEvent)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var DispatcherEvent = /*#__PURE__*/function () {
  function DispatcherEvent() {
    _classCallCheck(this, DispatcherEvent);
    // tslint:disable-next-line:variable-name
    _defineProperty(this, "_enabled", true);
    this._callbacks = [];
  }
  return _createClass(DispatcherEvent, [{
    key: "registerCallback",
    value: function registerCallback(callback) {
      this._callbacks.push(callback);
    }
  }, {
    key: "unregisterCallback",
    value: function unregisterCallback(callback) {
      var index = this._callbacks.indexOf(callback);
      if (index > -1) {
        this._callbacks.splice(index, 1);
      }
    }
  }, {
    key: "fire",
    value: function fire(data) {
      if (!this._enabled) {
        return;
      }
      var callbacks = this._callbacks.slice(0);
      callbacks.forEach(function (callback) {
        callback(data);
      });
    }
  }, {
    key: "setEventsEnabled",
    value: function setEventsEnabled(enabled) {
      this._enabled = enabled;
    }
  }, {
    key: "clearCallbacks",
    value: function clearCallbacks() {
      this._callbacks = [];
    }
  }]);
}();


/***/ }),

/***/ "./src/platformInfo.ts":
/*!*****************************!*\
  !*** ./src/platformInfo.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserIsChrome: () => (/* binding */ BrowserIsChrome),
/* harmony export */   BrowserIsChromeEdge: () => (/* binding */ BrowserIsChromeEdge),
/* harmony export */   BrowserIsSafari: () => (/* binding */ BrowserIsSafari),
/* harmony export */   OSisAndroid: () => (/* binding */ OSisAndroid),
/* harmony export */   OSisChromeOS: () => (/* binding */ OSisChromeOS),
/* harmony export */   OSisMac: () => (/* binding */ OSisMac),
/* harmony export */   OSisWindows: () => (/* binding */ OSisWindows),
/* harmony export */   OSisiOS: () => (/* binding */ OSisiOS),
/* harmony export */   Platform: () => (/* binding */ Platform),
/* harmony export */   PlatformIsAndroid: () => (/* binding */ PlatformIsAndroid),
/* harmony export */   PlatformIsElectron: () => (/* binding */ PlatformIsElectron),
/* harmony export */   PlatformIsIOS: () => (/* binding */ PlatformIsIOS),
/* harmony export */   WEBGL_SUPPORT_OPTIONS: () => (/* binding */ WEBGL_SUPPORT_OPTIONS),
/* harmony export */   WebBrosers: () => (/* binding */ WebBrowsers),
/* harmony export */   browserName: () => (/* binding */ browserName),
/* harmony export */   currentBrowser: () => (/* binding */ currentBrowser),
/* harmony export */   currentPlatform: () => (/* binding */ currentPlatform),
/* harmony export */   getOSString: () => (/* binding */ getOSString),
/* harmony export */   iOSMajorVersion: () => (/* binding */ iOSMajorVersion),
/* harmony export */   isChromeOnAndroid: () => (/* binding */ isChromeOnAndroid),
/* harmony export */   isChromeiOS: () => (/* binding */ isChromeiOS),
/* harmony export */   isFirefox: () => (/* binding */ isFirefox),
/* harmony export */   isMobileBrowser: () => (/* binding */ isMobileBrowser),
/* harmony export */   isSafari: () => (/* binding */ isSafari),
/* harmony export */   isSupportedBrowser: () => (/* binding */ isSupportedBrowser),
/* harmony export */   isSwitchSupportedOnDevice: () => (/* binding */ isSwitchSupportedOnDevice),
/* harmony export */   safariVersion: () => (/* binding */ safariVersion),
/* harmony export */   webglIsSupported: () => (/* binding */ webglIsSupported)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _targetPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./targetPlatform */ "./src/targetPlatform.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("PlatformInfo");
log.setLevel(log.levels.WARN);
// dev only
if (false) {}

// set platform constants
var Platform = /*#__PURE__*/function (Platform) {
  Platform[Platform["Android"] = 0] = "Android";
  Platform[Platform["iOS"] = 1] = "iOS";
  Platform[Platform["ChromeOS"] = 2] = "ChromeOS";
  Platform[Platform["NWJSmacOS"] = 3] = "NWJSmacOS";
  Platform[Platform["NWJSWindows"] = 4] = "NWJSWindows";
  Platform[Platform["NWJSUnknown"] = 5] = "NWJSUnknown";
  Platform[Platform["ElectronMacOS"] = 6] = "ElectronMacOS";
  Platform[Platform["ElectronWindows"] = 7] = "ElectronWindows";
  Platform[Platform["ElectronUnknown"] = 8] = "ElectronUnknown";
  Platform[Platform["Unknown"] = 9] = "Unknown"; // this is a safety option
  return Platform;
}(Platform || {});
var WebBrowsers = /*#__PURE__*/function (WebBrowsers) {
  WebBrowsers[WebBrowsers["Safari"] = 0] = "Safari";
  WebBrowsers[WebBrowsers["Firefox"] = 1] = "Firefox";
  WebBrowsers[WebBrowsers["Chrome"] = 2] = "Chrome";
  WebBrowsers[WebBrowsers["ChromiumEdge"] = 3] = "ChromiumEdge";
  WebBrowsers[WebBrowsers["Edge"] = 4] = "Edge";
  WebBrowsers[WebBrowsers["InternetExplorer"] = 5] = "InternetExplorer";
  WebBrowsers[WebBrowsers["Opera"] = 6] = "Opera";
  WebBrowsers[WebBrowsers["Silk"] = 7] = "Silk";
  WebBrowsers[WebBrowsers["None"] = 8] = "None";
  return WebBrowsers;
}(WebBrowsers || {});
var OS = /*#__PURE__*/function (OS) {
  OS[OS["MacOS"] = 0] = "MacOS";
  OS[OS["Windows"] = 1] = "Windows";
  OS[OS["iOS"] = 2] = "iOS";
  OS[OS["Android"] = 3] = "Android";
  OS[OS["ChromeOS"] = 4] = "ChromeOS";
  OS[OS["Unknow"] = 5] = "Unknow";
  return OS;
}(OS || {});
if (self.goog) {
  // seems that there may be times where this object has not been created
  if (!self.goog.userAgent) {
    self.goog.userAgent = {};
  }
  self.goog.userAgent.IPAD = self.goog.userAgent.IPAD || self.webkit && self.webkit.messageHandlers;
}

//TODO:  Validate this approach is correct. need to test this to make sure it does not return true for NWJS
function isElectron() {
  // Renderer process
  if (typeof window !== 'undefined' && _typeof(window.process) === 'object' && window.process.type === 'renderer') {
    return true;
  }

  // Main process
  if (typeof process !== 'undefined' && _typeof(process.versions) === 'object' && !!process.versions.electron) {
    return true;
  }

  // Detect the user agent when the `nodeIntegration` option is set to false
  if ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
    return true;
  }
  return false;
}
var currentOS = function () {
  var agent = navigator.userAgent.toLowerCase();
  // Check for Windows OS
  if (agent.indexOf("win") !== -1) {
    log.debug("current OS is Widows");
    return OS.Windows;
  }

  // Check for Android OS
  if (agent.indexOf("android") !== -1) {
    log.debug("current OS is Android");
    return OS.Android;
  }

  // Check for ChromeOS
  if (agent.indexOf("cros") !== -1) {
    log.debug("current OS is ChromeOS");
    return OS.ChromeOS;
  }

  // Check for iOS on devices like iPad, iPhone, or iPod
  if (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) {
    log.debug("current OS is iOS < 13 or mobile in iOS/iPadOS >= 13");
    return OS.iOS;
  }

  // Check for macOS or iOS >= 13 in desktop mode
  if (agent.indexOf("mac") !== -1) {
    if (self.navigator.maxTouchPoints && self.navigator.maxTouchPoints > 2) {
      log.debug("current OS is iOS >= 13 with desktop mode set");
      return OS.iOS;
    } else {
      log.debug("current OS is MacOS");
      return OS.MacOS;
    }
  }

  // Additional check for Android in "Desktop Mode"
  if (!agent.includes("android") && agent.includes("linux") && self.navigator.maxTouchPoints && self.navigator.maxTouchPoints > 2) {
    var _Blockly;
    // In "Desktop Mode," the user agent string may not include "android," but "linux" remains.
    // And we can assume a linux that supports multi-touch screen is just an Android.
    if ((_Blockly = Blockly) !== null && _Blockly !== void 0 && (_Blockly = _Blockly.utils) !== null && _Blockly !== void 0 && _Blockly.userAgent) {
      Blockly.utils.userAgent.ANDROID = true;
    }
    return OS.Android;
  }
  return OS.Unknow;
}();
var currentPlatform = function () {
  if (self.navigator.appVersion.includes("Android") && self.AndroidNativeInterface !== undefined) {
    log.debug("current platform is Android");
    return Platform.Android;
  }
  // platform is not always "iPad" after iPadOS 13 , so we cheat and look for the bridge object...
  if (self.webkit && self.webkit.messageHandlers && self.webkit.messageHandlers.selectFileToOpen) {
    log.debug("current platform is iOS");

    // the logic in blockly does not handle newer iPadOS versions which report as mac...
    if (!Blockly.utils.userAgent.IPAD) {
      Blockly.utils.userAgent.IPAD = true;
    }
    return Platform.iOS;
  }
  if (isElectron()) {
    if (currentOS === OS.MacOS) {
      log.debug("current platform is ElectronMacOS");
      return Platform.ElectronMacOS;
    } else if (currentOS === OS.Windows) {
      log.debug("current platform is ElectronWindows");
      return Platform.ElectronWindows;
    }
    log.debug("current platform is ElectronUnknown");
    return Platform.ElectronUnknown;
  }
  if ("nw" in self) {
    if (process.platform === "darwin") {
      log.debug("current platform is NWJSmacOS");
      return Platform.NWJSmacOS;
    } else if (process.platform === "win32") {
      log.debug("current platform is NWJSWindows");
      return Platform.NWJSWindows;
    }
    log.debug("current platform is NWJSUnknown");
    return Platform.NWJSUnknown;
  }
  if (self.chrome && self.chrome.runtime && self.chrome.runtime.id) {
    log.debug("current platform is ChromeOS");
    return Platform.ChromeOS;
  }
  log.debug("current platform is Unknown");
  return Platform.Unknown;
}();
var currentBrowser = function () {
  if (currentPlatform !== Platform.Unknown) {
    return WebBrowsers.None;
  }
  var agent = self.navigator.userAgent.toLowerCase();
  if (agent.indexOf("silk") > -1) {
    return WebBrowsers.Silk;
  } else if (agent.indexOf("edge") > -1) {
    return WebBrowsers.Edge;
  } else if (agent.indexOf("edg") > -1) {
    return WebBrowsers.ChromiumEdge;
  } else if (agent.indexOf("opr") > -1 && !!self.opr) {
    return WebBrowsers.Opera;
  } else if (agent.indexOf("chrome") > -1 && !!self.chrome) {
    return WebBrowsers.Chrome;
  } else if (agent.indexOf("trident") > -1) {
    return WebBrowsers.InternetExplorer;
  } else if (agent.indexOf("firefox") > -1) {
    return WebBrowsers.Firefox;
  } else if (agent.indexOf("safari") > -1) {
    return WebBrowsers.Safari;
  }
  return WebBrowsers.None;
}();
var isSupportedBrowser = currentBrowser === WebBrowsers.Chrome || currentBrowser === WebBrowsers.ChromiumEdge || currentBrowser === WebBrowsers.Firefox || currentBrowser === WebBrowsers.Safari || currentBrowser === WebBrowsers.Silk;
var BrowserIsSafari = currentBrowser === WebBrowsers.Safari;
var BrowserIsChrome = currentBrowser === WebBrowsers.Chrome;
var BrowserIsChromeEdge = currentBrowser === WebBrowsers.ChromiumEdge;
var browserName = currentPlatform !== Platform.Unknown ? "" : function () {
  switch (currentBrowser) {
    case WebBrowsers.Chrome:
      return "Chrome";
    case WebBrowsers.ChromiumEdge:
      return "Edge";
    case WebBrowsers.Edge:
      return "Edge";
    case WebBrowsers.Firefox:
      return "Firefox";
    case WebBrowsers.InternetExplorer:
      return "Internet Explore";
    case WebBrowsers.Opera:
      return "Opera";
    case WebBrowsers.Safari:
      return "Safari";
    default:
      return "Unknown";
  }
}();
var ua = navigator.userAgent.toLowerCase();
var isSafari = currentPlatform === Platform.iOS || ua.indexOf("safari") !== -1 && !(ua.indexOf("chrome") > -1);
var isChromeiOS = /CriOS/i.test(navigator.userAgent);
var isFirefox = ua.indexOf('firefox') > -1;
var safariVersion = findSafariVersion();

// constants to make it easier to use

var PlatformIsElectron = isElectron();
var PlatformIsIOS = currentPlatform === Platform.iOS ? true : false;
var PlatformIsAndroid = currentPlatform === Platform.Android ? true : false;
var OSisAndroid = currentOS === OS.Android ? true : false;
var OSisWindows = currentOS === OS.Windows ? true : false;
var OSisChromeOS = currentOS === OS.ChromeOS ? true : false;
var OSisMac = currentOS === OS.MacOS ? true : false;
var OSisiOS = currentOS === OS.iOS ? true : false;
function getOSString() {
  switch (currentOS) {
    case OS.Android:
      return "Android";
    case OS.iOS:
      return "iOS";
    case OS.ChromeOS:
      return "ChromeOS";
    case OS.MacOS:
      return "macOS";
    case OS.Windows:
      return "Windows";
    default:
      return "Unknown OS";
  }
}
function isMobileBrowser() {
  if (!(OSisAndroid || OSisiOS)) {
    log.info("not android or ios");
    return false;
  }

  // If the platform is unknown, the app is being accessed on the web
  // If the platform is iOS/Android, the app is natively installed
  if (currentPlatform === Platform.Unknown) {
    log.debug("mobile browser detected");
    return true;
  }
  return false;
}
var WEBGL_SUPPORT_OPTIONS = /*#__PURE__*/function (WEBGL_SUPPORT_OPTIONS) {
  WEBGL_SUPPORT_OPTIONS[WEBGL_SUPPORT_OPTIONS["supported"] = 0] = "supported";
  WEBGL_SUPPORT_OPTIONS[WEBGL_SUPPORT_OPTIONS["unsupported"] = 1] = "unsupported";
  WEBGL_SUPPORT_OPTIONS[WEBGL_SUPPORT_OPTIONS["disabled"] = 2] = "disabled";
  WEBGL_SUPPORT_OPTIONS[WEBGL_SUPPORT_OPTIONS["unknown"] = 3] = "unknown";
  return WEBGL_SUPPORT_OPTIONS;
}(WEBGL_SUPPORT_OPTIONS || {});

var webglIsSupported = false;
function checkWebGLSupport() {
  try {
    var canvas = document.createElement("canvas");
    webglIsSupported = !!(window.WebGL2RenderingContext && canvas.getContext("webgl2"));
    log.warn("webglIsSupported:", webglIsSupported);
  } catch (e) {
    webglIsSupported = false;
  }
}
if (_targetPlatform__WEBPACK_IMPORTED_MODULE_1__.targetIsPlaygrounds) {
  self.addEventListener("load", function () {
    checkWebGLSupport();
  });
}
function findSafariVersion() {
  var agent = self.navigator.userAgent.toLowerCase();
  var fullVersion = '' + parseFloat(navigator.appVersion);
  var majorVersion = parseInt(navigator.appVersion, 10);
  var verOffset, ix;
  if (isSafari) {
    verOffset = agent.indexOf("safari");
    fullVersion = agent.substring(verOffset + 7);
    if ((verOffset = agent.indexOf("version")) != -1) {
      fullVersion = agent.substring(verOffset + 8);
    }
  } else {
    return -1;
  }
  // trim the fullVersion string at semicolon/space if present
  if ((ix = fullVersion.indexOf(";")) != -1) {
    fullVersion = fullVersion.substring(0, ix);
  }
  if ((ix = fullVersion.indexOf(" ")) != -1) {
    fullVersion = fullVersion.substring(0, ix);
  }
  majorVersion = parseInt('' + fullVersion, 10);
  if (isNaN(majorVersion)) {
    fullVersion = '' + parseFloat(navigator.appVersion);
    majorVersion = parseInt(navigator.appVersion, 10);
  }
  log.debug("Safari " + fullVersion);
  return fullVersion;
}
var iOSMajorVersion = function () {
  if (!PlatformIsIOS) {
    return 0;
  } else {
    var extract = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
    return parseInt(extract && extract[1] || "0", 10);
  }
}();

/**
 * Helper function detect if the user is on Android on Chrome browser
 * This is used to launch a model to let the user know that Chrome is experincing a bug
 * and that the users cannot load their projects. Thus to use Firefox until the issue is fixed.
 * None of the other functions above help to identify Android + Chrome
 * @returns True / False
 */
function isChromeOnAndroid() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /Chrome/i.test(userAgent) && /Android/i.test(userAgent);
}

/**
 * Is Switch supported on current device?
 * Should not be supported on tablets
 */
var isSwitchSupportedOnDevice = !(PlatformIsAndroid || PlatformIsIOS || OSisAndroid || OSisiOS);


/***/ }),

/***/ "./src/targetPlatform.ts":
/*!*******************************!*\
  !*** ./src/targetPlatform.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentTargetName: () => (/* binding */ currentTargetName),
/* harmony export */   targetIs123: () => (/* binding */ targetIs123),
/* harmony export */   targetIs123OrGO: () => (/* binding */ targetIs123OrGO),
/* harmony export */   targetIsAIM: () => (/* binding */ targetIsAIM),
/* harmony export */   targetIsAIMOrAIR: () => (/* binding */ targetIsAIMOrAIR),
/* harmony export */   targetIsAIR: () => (/* binding */ targetIsAIR),
/* harmony export */   targetIsEXP: () => (/* binding */ targetIsEXP),
/* harmony export */   targetIsGO: () => (/* binding */ targetIsGO),
/* harmony export */   targetIsIQ: () => (/* binding */ targetIsIQ),
/* harmony export */   targetIsIqOrEXP: () => (/* binding */ targetIsIqOrEXP),
/* harmony export */   targetIsIqOrV5: () => (/* binding */ targetIsIqOrV5),
/* harmony export */   targetIsIqOrV5OrEXP: () => (/* binding */ targetIsIqOrV5OrEXP),
/* harmony export */   targetIsNotPlaygrounds: () => (/* binding */ targetIsNotPlaygrounds),
/* harmony export */   targetIsPlaygrounds: () => (/* binding */ targetIsPlaygrounds),
/* harmony export */   targetIsV5: () => (/* binding */ targetIsV5),
/* harmony export */   targetIsV5OrEXP: () => (/* binding */ targetIsV5OrEXP),
/* harmony export */   targetPlatformName: () => (/* binding */ targetPlatformName)
/* harmony export */ });
var targetIsV5 = "GO" === "V5";
var targetIsEXP = "GO" === "EXP";
var targetIsIQ = "GO" === "IQ";
var targetIsAIM = "GO" === "AIM";
var targetIsAIR = "GO" === "AIR";
var targetIsGO = "GO" === "GO";
var targetIs123 = "GO" === "123";
var targetIsV5OrEXP = targetIsV5 || targetIsEXP;
var targetIsIqOrV5 = targetIsIQ || targetIsV5;
var targetIsIqOrEXP = targetIsIQ || targetIsEXP;
var targetIsIqOrV5OrEXP = targetIsIQ || targetIsV5 || targetIsEXP;
var targetIs123OrGO = targetIs123 || targetIsGO;
var targetIsNotPlaygrounds = targetIs123OrGO || targetIsIqOrV5OrEXP || targetIsAIM || targetIsAIR;
var targetIsAIMOrAIR = targetIsAIM || targetIsAIR;
var targetIsPlaygrounds = "GO" === "PG";

// User facing string
var targetPlatformName = {
  IQ: "IQ",
  V5: "V5",
  EXP: "EXP",
  123: "123",
  GO: "GO",
  AIM: "AIM",
  AIR: "AIR",
  PG: "VR" // TODO: should this be i18n?
};
var knownTarget = Object.keys(targetPlatformName).includes("GO");
var currentTargetName = knownTarget ? targetPlatformName["GO"] : "unknown";


/***/ }),

/***/ "./src/version.json":
/*!**************************!*\
  !*** ./src/version.json ***!
  \**************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"version":"4.64.1-0","sdkVersionIQ":"20230818.11.00.00","sdkVersionIQ2":"20250520.15.00.00","sdkVersionEXP":"20240802.15.00.00","sdkVersionV5":"20240802.15.00.00","sdkVersionAIR":"1.0.227","copyright":"Copyright © 2025 VEX Robotics, Inc.","vr_copyright":"Copyright © 2025 VEX Robotics, Inc.","name":"VEXcode"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************************************!*\
  !*** ./src/PyodideVM/PyodideVMWebWorker.ts ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _appVersionInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appVersionInfo */ "./src/appVersionInfo.ts");
/* harmony import */ var _PyodideVM_PyodideVMMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PyodideVM/PyodideVMMessages */ "./src/PyodideVM/PyodideVMMessages.ts");
/* harmony import */ var _VexcodeTimer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VexcodeTimer */ "./src/VexcodeTimer.ts");
/* harmony import */ var _targetPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../targetPlatform */ "./src/targetPlatform.ts");
/* harmony import */ var _PythonPreprocessor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PythonPreprocessor */ "./src/PythonPreprocessor.ts");
/* harmony import */ var _SimWindow_SimPythonInterpreter_SimPythonSensorsAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../SimWindow/SimPythonInterpreter/SimPythonSensorsAPI */ "./src/SimWindow/SimPythonInterpreter/SimPythonSensorsAPI.ts");
/* harmony import */ var _PyodideArmInterface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PyodideArmInterface */ "./src/PyodideVM/PyodideArmInterface.ts");
/* harmony import */ var _platformInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../platformInfo */ "./src/platformInfo.ts");
/* harmony import */ var _PyodideGOInterface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PyodideGOInterface */ "./src/PyodideVM/PyodideGOInterface.ts");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
// tslint:disable: only-arrow-functions


var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("PyodideVMWebWorker");
log.setLevel(log.levels.WARN);
// dev only
// log.enableAll();




// import { SimInterpreterStateEnum, SimPrintColorEnum, SimHighlightState } from "../messageEnums";




// must use direct import to avoid issue with react in NWJS/webworkers




var PromiseTimeoutError = /*#__PURE__*/function (_Error) {
  function PromiseTimeoutError() {
    var _this;
    _classCallCheck(this, PromiseTimeoutError);
    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }
    _this = _callSuper(this, PromiseTimeoutError, [].concat(params)); // (1)
    _this.name = "Promise Timeout Error"; // (2)
    return _this;
  }
  _inherits(PromiseTimeoutError, _Error);
  return _createClass(PromiseTimeoutError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
var vexImportAndTimer = "from js import vexcode_api\n\n";
var brainTimer = new _VexcodeTimer__WEBPACK_IMPORTED_MODULE_3__.VexcodeTimer(0, true);
brainTimer.pause();
var projectRunning = false;
var isUnityReady = false;
var pythonReady = false;

/**
 * helper used to pass the current state back to the arm interface
 * @returns true if the project is actively running
 */
function isRunning() {
  return projectRunning;
}

// extend self type to prevent warnings/errors

/**
 * used to load a script in a webworker
 * @param script the path to the script to load
 */

/**
 * Resolves when Pyodide is fully loaded
 */

var prafCallbacks = [];
setInterval(function () {
  var copy = _toConsumableArray(prafCallbacks);
  prafCallbacks = [];
  var len = copy.length;
  var timestamp = performance.now();
  for (var i = 0; i < len; i++) {
    copy[i](timestamp);
  }
}, 20);
var deviceInstanceNames = [
// "drivetrain",
"cte_arm", "signal_tower"
// "brain",
// "distance",
// "left_distance",
// "center_distance",
// "right_distance",
// "optical",
// "gps",
// "intake_motor_group",
// "bumper",
// "magnet",
// "pen",
];
var preprocessor;
var armInterface = null;
var goInterface = null;
// load pyodide
log.info("init pyodide...");
self.languagePluginUrl = "".concat(_platformInfo__WEBPACK_IMPORTED_MODULE_8__.PlatformIsElectron ? ".." : "", "/lib/pyodide-0.17.0/");
self.pyodideUrlSuffixVersion = "".concat((0,_appVersionInfo__WEBPACK_IMPORTED_MODULE_1__.appVersionString)());
importScripts("".concat(self.languagePluginUrl, "pyodide.js?v=").concat((0,_appVersionInfo__WEBPACK_IMPORTED_MODULE_1__.appVersionString)()));
languagePluginLoader.then(function () {
  // TODO: add back error handling
  log.debug("python ready");
  log.debug("pyodide version:", self.pyodide.version);
  self.pyodide.runPythonAsync(pyHeader, function () {
    log.info("something happens here?");
  }).then(function (results) {
    preprocessor = new _PythonPreprocessor__WEBPACK_IMPORTED_MODULE_5__.PythonPreprocessor(deviceInstanceNames);
    if (_targetPlatform__WEBPACK_IMPORTED_MODULE_4__.targetIsGO) {
      goInterface = new _PyodideGOInterface__WEBPACK_IMPORTED_MODULE_9__.PyodideGOInterface(self.pyodide, isRunning, self.postMessage.bind(self));
      // now we need to update the interface
      self.vexcode_api.goInterface = goInterface;
    } else if (_targetPlatform__WEBPACK_IMPORTED_MODULE_4__.targetIsEXP) {
      armInterface = new _PyodideArmInterface__WEBPACK_IMPORTED_MODULE_7__.PyodideArmInterface(self.pyodide, isRunning, self.postMessage.bind(self));
      // now we need to update the interface
      self.vexcode_api.armInterface = armInterface;
    }
    sendPythonReady();
    log.debug("done loading base headers");
    // setHiwireErrorHandler();
  });
})["catch"](function (e) {
  log.error("error loading Pyodide...");
  log.error(e);
});
function runSyntaxCheck(_x) {
  return _runSyntaxCheck.apply(this, arguments);
}
function _runSyntaxCheck() {
  _runSyntaxCheck = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(code) {
    var escapedCode, pyCode;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          escapedCode = code.replace(/\\/g, "\\\\").replace(/"""/g, '\\"\\"\\"');
          pyCode = "\nimport io\nimport sys\n\nvexcode_syntax_check_output = io.StringIO()\n\ntry:\n    compile(\"\"\"".concat(escapedCode, "\"\"\", \"<exec>\", \"exec\")\nexcept:\n    info = sys.exc_info()\n    import traceback\n    traceback.print_exception(info[0], info[1], info[2], file=vexcode_syntax_check_output)\n");
          log.debug("pyCode:", pyCode);
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            self.pyodide.runPythonAsync(pyCode, function () {
              log.info("something happens here? but not sure what");
            }).then(function (results) {
              log.debug("check results:", results);
              var res = self.pyodide.runPython("vexcode_syntax_check_output.getvalue()");
              log.info("python syntax check result:", res);
              resolve(res);
            })["catch"](function (err) {
              log.warn("python syntax check error:", err);
              resolve(err);
            });
          }));
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _runSyntaxCheck.apply(this, arguments);
}
function sendPythonError(err) {
  log.error(err);
  err = typeof err === "string" ? err : err.toString();
  var msg = {
    command: "PythonError",
    error: err,
    source: "runtime"
  };
  self.postMessage(msg);
}
function sendPythonLinterError(err) {
  log.debug(err);
  err = typeof err === "string" ? err : err.toString();
  var msg = {
    command: "PythonError",
    error: err,
    source: "linter"
  };
  self.postMessage(msg);
}
function sendPythonReady() {
  pythonReady = true;
  log.debug("sending python ready - web worker");
  sendPythonReadyMessage();
  sendInterpreterStatusMessage(_PyodideVM_PyodideVMMessages__WEBPACK_IMPORTED_MODULE_2__.PyodideVMStateEnum.stopped);
}
function sendPythonRunComplete() {
  sendInterpreterStatusMessage(_PyodideVM_PyodideVMMessages__WEBPACK_IMPORTED_MODULE_2__.PyodideVMStateEnum.stopped);
}
function sendPythonRunning() {
  log.debug("pyhon running");
  sendInterpreterStatusMessage(_PyodideVM_PyodideVMMessages__WEBPACK_IMPORTED_MODULE_2__.PyodideVMStateEnum.running);
}
function sendWatchdogReset() {
  // log.debug("sending watchdog reset");
  var msg = {
    command: "InterpreterWatchdogReset"
  };
  self.postMessage(msg);
}
setInterval(sendWatchdogReset, 100);
function executePythonCode(_x2) {
  return _executePythonCode.apply(this, arguments);
} // let robotModel: VirtualRobotModel = "vr";
// let robotConfig: VRConfigInterfaces.VRConfig = null;
function _executePythonCode() {
  _executePythonCode = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(pythonCode) {
    var syntaxCheckRes;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          // TODO: preprocess here
          pythonCode = preprocessor.preprocess(pythonCode, currentConfig);
          log.debug("executePythonCode", pythonCode);
          if (self.pyodide) {
            _context2.next = 4;
            break;
          }
          throw new Error("Pyodide not ready");
        case 4:
          sendPythonRunning();
          _context2.next = 7;
          return runSyntaxCheck(pythonCode);
        case 7:
          syntaxCheckRes = _context2.sent;
          if (!syntaxCheckRes) {
            _context2.next = 12;
            break;
          }
          sendPythonRunComplete();
          sendPythonLinterError(syntaxCheckRes);
          return _context2.abrupt("return");
        case 12:
          sendSetPrintConsoleColor(_PyodideVM_PyodideVMMessages__WEBPACK_IMPORTED_MODULE_2__.PyodidePrintColorEnum.black);
          brainTimer.reset();
          startSendVariables();
          self.pyodide.runPythonAsync(pythonCode, function () {
            log.info("something happens here?");
          }).then(function (results) {
            log.debug("done executing");
          })["catch"](function (err) {
            sendPythonRunComplete();
            sendPythonError(err);
          });
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _executePythonCode.apply(this, arguments);
}
self.onmessage = function messageHanlder(message) {
  var data = message.data;
  var command = data.command;
  if (command) {
    if (command === "SetGeneratedCode") {
      log.debug("SetGeneratedCode");
      handleSetGeneratedCode(data);
    } else if (command === "StartInterpreter") {
      log.debug("StartInterpreter");
      handleStartInterpreter(data);
    } else if (command === "StopInterpreter") {
      log.debug("StopInterpreter");
      handleStopInterpreter(data);
    } else if (goInterface && !goInterface.onMessage(message)) {
      log.warn("unhandled command", command);
    } else if (armInterface && !armInterface.onMessage(message)) {
      log.warn("unhandled command", command);
    }
  } else {
    log.warn("unexpected message", message);
  }
};

//#region "message handlers"
var code;
var currentConfig = [];
function handleStartInterpreter(_x3) {
  return _handleStartInterpreter.apply(this, arguments);
}
function _handleStartInterpreter() {
  _handleStartInterpreter = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(msg) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          log.debug("handleStartInterpreter");
          resetMonitoredVariablesAndSensors();
          _context3.next = 4;
          return executePythonCode(code);
        case 4:
          sendInterpreterStatusMessage(_PyodideVM_PyodideVMMessages__WEBPACK_IMPORTED_MODULE_2__.PyodideVMStateEnum.running);
          projectRunning = true;
          if (brainTimer) {
            brainTimer.resume();
          }
          sendTimer();
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _handleStartInterpreter.apply(this, arguments);
}
var isHibernating = false;
function handleStopInterpreter(_x4) {
  return _handleStopInterpreter.apply(this, arguments);
}
function _handleStopInterpreter() {
  _handleStopInterpreter = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(msg) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          log.debug("SimPythonInterpreterWebWorker - handleStopInterpreter");
          projectRunning = false;
          stopSendVariables();
          sendInterpreterStatusMessage(_PyodideVM_PyodideVMMessages__WEBPACK_IMPORTED_MODULE_2__.PyodideVMStateEnum.stopped);
          stopSendTimer();
          if (_targetPlatform__WEBPACK_IMPORTED_MODULE_4__.targetIsPlaygrounds && commandReturns["Rover"] && commandReturns["Rover"][0]) {
            delete commandReturns["Rover"][0]["hibernate"];
          }
          isHibernating = false;
        case 7:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _handleStopInterpreter.apply(this, arguments);
}
function handleSetGeneratedCode(msg) {
  log.debug("handleSetGeneratedCode, isUnityReady: ", isUnityReady);
  sendInterpreterStatusMessage(_PyodideVM_PyodideVMMessages__WEBPACK_IMPORTED_MODULE_2__.PyodideVMStateEnum.loading);
  code = vexImportAndTimer + msg.code;
  if (msg.currentConfig && msg.currentConfig.length) {
    // Grab the current robot configuration that is passed down from `PyodideVMController.ts`
    // So we can pass it down to preprocessor
    currentConfig = msg.currentConfig;
  }
  log.debug("handleSetGeneratedCode, code: ", code);

  // if (targetIsPlaygrounds) {
  //   const headers = getVRHeader();
  //   log.debug("loading headers");
  //   self.pyodide.runPythonAsync(headers, () => {
  //     log.info("something happens here?");
  //   })
  //   .then((results) => {
  //     log.warn("done with headers");
  //     sendInterpreterStatusMessage(isUnityReady ? SimInterpreterStateEnum.stopped : SimInterpreterStateEnum.waiting);
  //   });
  // } else {
  // sendInterpreterStatusMessage(isUnityReady ? SimInterpreterStateEnum.stopped : SimInterpreterStateEnum.waiting);
  sendInterpreterStatusMessage(_PyodideVM_PyodideVMMessages__WEBPACK_IMPORTED_MODULE_2__.PyodideVMStateEnum.stopped);
  // }
}

//#endregion
function timeoutWrapper(_x5, _x6) {
  return _timeoutWrapper.apply(this, arguments);
} //#region "print commands"
function _timeoutWrapper() {
  _timeoutWrapper = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(prom, timeoutms) {
    var timeoutPromise;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          if (!(!timeoutms || timeoutms <= 0)) {
            _context5.next = 2;
            break;
          }
          return _context5.abrupt("return", prom);
        case 2:
          // create a promise that will throw an error after set timeout
          timeoutPromise = new Promise(function (resolve, reject) {
            setTimeout(function () {
              reject(new PromiseTimeoutError());
            }, timeoutms);
          }); // use a race to return which ever promise completes first.
          return _context5.abrupt("return", Promise.race([prom, timeoutPromise]));
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _timeoutWrapper.apply(this, arguments);
}
function sendPrintText(text) {
  sendPrintToConsole(text);
}
function sendPrintNewLine() {
  sendNewLineToConsole();
}
function sendPrintSetColor(textColor) {
  var textColorEnum = _PyodideVM_PyodideVMMessages__WEBPACK_IMPORTED_MODULE_2__.PyodidePrintColorEnum.black;
  if (textColor === "RED") {
    textColorEnum = _PyodideVM_PyodideVMMessages__WEBPACK_IMPORTED_MODULE_2__.PyodidePrintColorEnum.red;
  } else if (textColor === "GREEN") {
    textColorEnum = _PyodideVM_PyodideVMMessages__WEBPACK_IMPORTED_MODULE_2__.PyodidePrintColorEnum.green;
  } else if (textColor === "BLUE") {
    textColorEnum = _PyodideVM_PyodideVMMessages__WEBPACK_IMPORTED_MODULE_2__.PyodidePrintColorEnum.blue;
  }
  sendSetPrintConsoleColor(textColorEnum);
}
function sendPrintClearLines() {
  sendClearPrintConsole();
}
//#endregion

//#region "mixed-mode block highlighting"
function sendHighlightUpdates(updates) {
  var msg = {
    command: "HighlightUpdate",
    updates: updates
  };
  self.postMessage(msg);
}
var activeBlocks = [];
var changeBlocks = {};
function clearActiveBlockList() {
  activeBlocks = [];
  changeBlocks = {};
}
clearActiveBlockList();
function highlightBlock(blockId) {
  log.debug("highlight", blockId);
  if (activeBlocks.indexOf(blockId) === -1) {
    activeBlocks.push(blockId);
  }
  changeBlocks[blockId] = _PyodideVM_PyodideVMMessages__WEBPACK_IMPORTED_MODULE_2__.PyodideHighlightState.active;
}
function unhighlightBlock(blockId) {
  log.debug("unhighlight", blockId);
  var index = activeBlocks.indexOf(blockId);
  if (index >= 0) {
    activeBlocks.splice(index, 1);
    changeBlocks[blockId] = _PyodideVM_PyodideVMMessages__WEBPACK_IMPORTED_MODULE_2__.PyodideHighlightState.inactive;
  }
}
function sendHighlightUpdate() {
  var changes = Object.assign({}, changeBlocks);
  changeBlocks = {};
  var changeIds = Object.keys(changes);
  var changeLen = changeIds.length;
  if (changeIds.length > 0) {
    var list = [];
    for (var i = 0; i < changeLen; i++) {
      var changeId = changeIds[i];
      list.push({
        id: changeId,
        state: changes[changeId]
      });
    }
    sendHighlightUpdates(list);
  }
}
setInterval(sendHighlightUpdate, 10);
//#endregion "mixed-mode block highlighting"

//#region "monitoring system"
var sendVariablesInterval = null;
function startSendVariables() {
  log.debug("startSendVariables");
  sendVariablesInterval = self.setInterval(sendVariablesToMonitor, 50);
}
function stopSendVariables() {
  if (sendVariablesInterval) {
    log.debug("stopSendVariables");
    clearInterval(sendVariablesInterval);
    sendVariablesInterval = null;
  }
}
var monitoredVariables = [];
var monitoredSensors = [];
function addVariableToMonitor(variableName) {
  if (!monitoredVariables.includes(variableName)) {
    monitoredVariables.push(variableName);
  }
}
function addSensorToMonitor(sensorName) {
  log.debug("addSensorToMonitor:", sensorName);
  var pythonSensorNameLookup = _targetPlatform__WEBPACK_IMPORTED_MODULE_4__.targetIsGO ? pythonGOSensorNameLookup : pythonCTESensorNameLookup;
  var mapped = pythonSensorNameLookup[sensorName];
  if (mapped) {
    if (typeof mapped === "string") {
      mapped = [mapped];
    }
    var updated = false;
    mapped.forEach(function (sensor) {
      if (!monitoredSensors.includes(sensor)) {
        monitoredSensors.push(sensor);
        updated = true;
      }
    });
    if (updated) {
      sendSensorsToMonitor();
    }
  }
}
function resetMonitoredVariablesAndSensors() {
  monitoredVariables = [];
  monitoredSensors = [];
  sendSensorsToMonitor();
}
function getMonitoredVariables() {
  var output = [];
  monitoredVariables.forEach(function (varName) {
    var varValue = self.pyodide.globals[varName];
    var varInfo = {
      name: varName,
      label: varName,
      value: varValue
    };
    if (_typeof(varValue) === "object") {
      varInfo.value = varValue.toJs();
    }
    output.push(varInfo);
  });
  return output;
}
function sendVariablesToMonitor() {
  var msg = {
    command: "VariableUpdates",
    data: getMonitoredVariables()
  };
  self.postMessage(msg);
}
function sendSensorsToMonitor() {
  var msg = {
    command: "SensorsToMonitor",
    data: monitoredSensors
  };
  self.postMessage(msg);
}
//#endregion

//#region "brain timer"
function getTimer() {
  return brainTimer.getTime();
}
function resetTimer() {
  brainTimer.reset();
}
//#endregion

//#region "control"
function stopProject() {
  if (brainTimer) {
    brainTimer.stop();
  }
  sendInterpreterStatusMessage(_PyodideVM_PyodideVMMessages__WEBPACK_IMPORTED_MODULE_2__.PyodideVMStateEnum.stopped);
  // sendCommandMessage(MessageHelpers.Drivetrain.stop(VirtualRCManager.getDevicesOfType("drivetrain")[0].port));
  // if (targetIsIQ) {
  //   const motorPorts = [2, 4, 8];
  //   motorPorts.forEach(async (port) => await sendCommandMessage(MessageHelpers.Motor.stop(port)));
  // } else if (targetIsV5) {
  //   const motorPorts = [9];
  //   motorPorts.forEach(async (port) => await sendCommandMessage(MessageHelpers.Motor.stop(port)));
  // }
}
//#endregion

//#region "brain"
// async function pickup(object: MessageHelpers.PickupObject) {
//   const msg = MessageHelpers.Actions.interact("pickup");
//   await sendCommandMessage(msg);
// }

// async function drop(object: MessageHelpers.PickupObject) {
//   const msg = MessageHelpers.Actions.interact("drop");
//   await sendCommandMessage(msg);
// }

// async function use(object: MessageHelpers.PickupObject) {
//   const msg = MessageHelpers.Actions.interact("recharge");
//   await sendCommandMessage(msg);
// }

// async function absorb_radiation(target: MessageHelpers.AttackObject) {
//   const msg = MessageHelpers.Actions.interact("attack");
//   await sendCommandMessage(msg);
// }

// async function standby(port: number, percent: number) {
//   const threshold = percent < 0 ? 0 : percent;
//   const commandMessage = MessageHelpers.Actions.standby(threshold);
//   await sendCommandMessage(commandMessage);
// }
//#endregion "brain"

//#region "message sending"
// const lastCommands: {
//   [key: string]: {
//     [key: string]: UnityDeviceCommandMessage;
//   },
// } = {};

// function updateLastCommand(cmd: UnityDeviceCommandMessage) {
//   const deviceName = cmd.command.device;
//   const port = cmd.command.port ? cmd.command.port : 0;
//   if (lastCommands[deviceName]) {
//     lastCommands[deviceName][port] = cmd;
//   } else {
//     lastCommands[deviceName] = {port: cmd};
//   }
// }

// function isSameCommand(cmd: UnityDeviceCommandMessage): boolean {
//   const deviceName = cmd.command.device;
//   const port = cmd.command.port ? cmd.command.port : 0;
//   if (!lastCommands[deviceName]) {
//     lastCommands[deviceName] = {};
//   }
//   const lastCommand = lastCommands[deviceName][port];

//   if (!lastCommand ||
//     cmd.wait !== lastCommand.wait ||
//     cmd.command.device !== lastCommand.command.device ||
//     cmd.command.command !== lastCommand.command.command
//   ) {
//     return false;
//   }
//   const res = JSON.stringify(lastCommand.command.param) === JSON.stringify(cmd.command.param);
//   return res;
// }

// async function sendCommandMessage(msg: UnityDeviceCommandMessage, sentCallback?: () => void) {
//   // log.debug("msg:", msg);
//   if (msg.preventDuplicate && isHibernating) {
//     if (sentCallback) {
//       sentCallback();
//     }
//     return;
//   }
//   const isSame = msg.preventDuplicate && isSameCommand(msg);
//   updateLastCommand(msg);
//   if (isSame) {
//     if (sentCallback) {
//       sentCallback();
//     }
//     return;
//   }
//   const cmd = msg.command.command;
//   if (msg.command.device === "drivetrain") {
//     log.debug("sending command:", cmd, msg.command.param, msg.wait);
//   }
//   await sendCommand(msg.command, msg.wait, sentCallback);
//   if (msg.command.device === "drivetrain") {
//     log.debug("sent command:", cmd, msg.command.param, msg.wait);
//   }
// }

var commandReturns = {};

// async function sendCommand(command: UnityDeviceCommand, wait: boolean = true, sentCallback?: () => void) {
//   return new Promise<void>((resolve, reject) => {
//     const deviceName = command.device;
//     const commandName = command.command;
//     const port = command.port ? command.port : 0;
//     // make sure we reject a promise if it has not already been cleared
//     if (!commandReturns[deviceName]) {
//       commandReturns[deviceName] = {};
//     }
//     if (!commandReturns[deviceName][port]) {
//       commandReturns[deviceName][port] = {};
//     } else {
//       // since some commands should reject any existing commands for a device
//       // we have this flag and logic
//       if (!!command.rejectAllDeviceCommands) {
//         const promises = commandReturns[deviceName][port];
//         for (const command in promises) {
//           if (Object.prototype.hasOwnProperty.call(promises, command)) {
//             promises[command].reject();
//             delete promises[command];
//           }
//         }
//       } else {
//         if (commandReturns[deviceName][port][commandName]) {
//           commandReturns[deviceName][port][commandName].reject();
//         }
//       }
//     }
//     const id = generateShortUUID();
//     // store the promise resolve/rejcet functions
//     commandReturns[deviceName][port][commandName] = {resolve, reject, id};
//     if (deviceName === "Rover" && commandName === "hibernate") {
//       isHibernating = true;
//     }
//     setTimeout(() => {
//       sendRobotCommand(command.device, command.command, command.param, command.port, id);
//       log.debug("posted command message", command.device, command.command, id);
//       if (sentCallback) {
//         sentCallback();
//       }
//       if (!wait) {
//         resolve();
//         if (!command.skipIfExistingSent) {
//           delete commandReturns[deviceName][port][commandName];
//         }
//       }
//     }, 0);
//   });
// }

// function sendRobotCommand(device: string, instruction: string, param: Object, port: number, id: string) {
//   const msg: SimInterpreterMessageRobotCommand = {
//     command: "RobotCommand",
//     device,
//     instruction,
//     param,
//     port,
//     id,
//   };
//   log.debug("sendRobotCommand: ", msg);
//   self.postMessage(msg);
// }

// function handleRobotCommandStatus(msg: SimInterpreterMessageRobotCommandStatus) {
//   const deviceName = msg.device;
//   const commandName = msg.instruction;
//   const port = msg.port ? msg.port : 0;

//   if (deviceName === "Rover" && commandName === "hibernate") {
//     log.debug("got hibernate status", msg);
//     isHibernating = false;
//   }

//   if (commandReturns[deviceName] && commandReturns[deviceName][port] && commandReturns[deviceName][port][commandName]) {
//     const id = msg.id
//     const promData = commandReturns[deviceName][port][commandName];
//     if (targetIsPlaygrounds && (id === promData.id || !id)) {
//       promData.resolve();
//       delete commandReturns[deviceName][port][commandName];
//     } else if (targetIsNotPlaygrounds) {
//       promData.resolve();
//       delete commandReturns[deviceName][port][commandName];
//     }
//   }
// }

var printActionQueue = [];
function sendPrintToConsole(text) {
  var last = printActionQueue[printActionQueue.length - 1];
  if (last && last.action === "print") {
    last.text += text;
  } else {
    var msg = {
      action: "print",
      text: text
    };
    printActionQueue.push(msg);
  }
}
function sendNewLineToConsole() {
  var msg = {
    action: "newline"
  };
  printActionQueue.push(msg);
}
function sendClearPrintConsole() {
  var msg = {
    action: "clear"
  };
  printActionQueue = printActionQueue.filter(function (a) {
    return a.action === "color";
  });
  printActionQueue.push(msg);
}
function sendSetPrintConsoleColor(consoleColor) {
  var msg = {
    action: "color",
    color: consoleColor
  };
  printActionQueue.push(msg);
}
setInterval(sentPrintQueue, 30);
function sentPrintQueue() {
  if (printActionQueue.length > 0) {
    var actions = printActionQueue.slice();
    printActionQueue = [];
    var msg = {
      command: "PrintUpdate",
      actions: actions
    };
    self.postMessage(msg);
  }
}
function sendInterpreterStatusMessage(status) {
  var msg = {
    command: "InterpreterStatus",
    status: status
  };
  log.info("sendInterpreterStatusMessage", _PyodideVM_PyodideVMMessages__WEBPACK_IMPORTED_MODULE_2__.PyodideVMStateEnum[status], msg);
  self.postMessage(msg);
}
function sendPythonReadyMessage() {
  var msg = {
    command: "PythonReadyUpdate",
    isReady: pythonReady
  };
  self.postMessage(msg);
}
function sendInterpreterResetMessage() {
  var msg = {
    command: "ResetInterpreter"
  };
  log.info("sendInterpreterResetMessage");
  self.postMessage(msg);
}
var sendTimerInterval = null;
function sendTimerTimeMessage() {
  var msg = {
    command: "TimerUpdate",
    data: getTimer()
  };
  self.postMessage(msg);
}
function sendTimer() {
  if (projectRunning) {
    log.debug("sendTimer");
    sendTimerInterval = self.setInterval(sendTimerTimeMessage, 50);
  }
}
function stopSendTimer() {
  if (sendTimerInterval) {
    log.debug("stopSendTimer");
    clearInterval(sendTimerInterval);
    sendTimerInterval = null;
  }
}

//#endregion

//#region utils
function waitms(_x7) {
  return _waitms.apply(this, arguments);
} //#endregion utils
// self.sendCommandMessage = sendCommandMessage;
function _waitms() {
  _waitms = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(ms) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", new Promise(function (resolve, reject) {
            setTimeout(resolve, ms);
          }));
        case 1:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _waitms.apply(this, arguments);
}
self.vexcode_api = {
  getTimer: getTimer,
  resetTimer: resetTimer,
  sendPrintText: sendPrintText,
  sendPrintNewLine: sendPrintNewLine,
  sendPrintSetColor: sendPrintSetColor,
  sendPrintClearLines: sendPrintClearLines,
  sendPythonError: sendPythonError,
  sendPythonRunComplete: sendPythonRunComplete,
  addVariableToMonitor: addVariableToMonitor,
  addSensorToMonitor: addSensorToMonitor,
  stopProject: stopProject,
  armInterface: null,
  highlightBlock: highlightBlock,
  unhighlightBlock: unhighlightBlock
};
if (_targetPlatform__WEBPACK_IMPORTED_MODULE_4__.targetIsV5) {
  (0,_SimWindow_SimPythonInterpreter_SimPythonSensorsAPI__WEBPACK_IMPORTED_MODULE_6__.addSensorAPIForVS)();
} else if (_targetPlatform__WEBPACK_IMPORTED_MODULE_4__.targetIsIQ) {
  (0,_SimWindow_SimPythonInterpreter_SimPythonSensorsAPI__WEBPACK_IMPORTED_MODULE_6__.addSensorAPIForIQVS)();
} else if (_targetPlatform__WEBPACK_IMPORTED_MODULE_4__.targetIsPlaygrounds) {
  (0,_SimWindow_SimPythonInterpreter_SimPythonSensorsAPI__WEBPACK_IMPORTED_MODULE_6__.addSensorAPIForVR)();
}

//#region "classes"
var pythonCTESensorNameLookup = {
  "arm.is_done": "cteSensingArmIsDone",
  "arm.get_x": ["cteArmPositionSensingInMMX", "cteArmPositionSensingInInchesX"],
  "arm.get_y": ["cteArmPositionSensingInMMY", "cteArmPositionSensingInInchesY"],
  "arm.get_z": ["cteArmPositionSensingInMMZ", "cteArmPositionSensingInInchesZ"],
  "arm.get_pitch": "cteArmOrientationSensingPitch",
  "arm.get_roll": "cteArmOrientationSensingRoll",
  "arm.get_yaw": "cteArmOrientationSensingYaw",
  "arm.get_end_effector_angle": "cteSensingEndEffectorRotation",
  "signal_tower.pressing": "cteSensingSignalTowerBumperPressed",
  "brain.timer_time": "timerValue"
};
var pythonVSSensorNameLookup = {
  "brain.timer.time": "timerValue",
  "drivetrain.is_done": "drivetrainDriveIsDone",
  "drivetrain.is_moving": "drivetrainDriveIsMoving",
  "drivetrain.heading": "drivetrainDriveHeading",
  "drivetrain.rotation": "drivetrainDriveRotation",
  "drivetrain.velocity_rpm": "driveVelocityInrpm",
  "drivetrain.velocity_percent": "driveVelocityInpct",
  "fork_motor_group.is_done": "forkMotorGroupIsDone",
  "fork_motor_group.is_spinning": "forkMotorGroupIsSpinning",
  "fork_motor_group.position_degrees": "forkMotorGroupPositiondeg",
  "fork_motor_group.position_turns": "forkMotorGroupPositionrev",
  "fork_motor_group.velocity_rpm": "forkMotorGroupVelocityrpm",
  "fork_motor_group.velocity_percent": "forkMotorGroupVelocitypct",
  "intake_motor_group.is_done": "intakeMotorGroupIsDone",
  "intake_motor_group.is_spinning": "intakeMotorGroupIsSpinning",
  "intake_motor_group.position_degrees": "intakeMotorGroupPositiondeg",
  "intake_motor_group.position_turns": "intakeMotorGroupPositionrev",
  "intake_motor_group.velocity_rpm": "intakeMotorGroupVelocityrpm",
  "intake_motor_group.velocity_percent": "intakeMotorGroupVelocitypct",
  "bumper.pressing": "bumperPressed",
  "bottom_distance.is_object_detected": "distanceObjectFound",
  "bottom_distance.object_distance_mm": "distanceObjectDistanceInMM",
  "bottom_distance.object_distance_inches": "distanceObjectDistanceInIN",
  "front_distance.found_object": "distanceRightFound",
  "right_distance.found_object": "distanceRightFound",
  "left_distance.found_object": "leftDistanceObjectFound",
  "roller_optical.is_near_object": "opticalFoundObject",
  "roller_optical.color": ["opticalDetectsRed", "opticalDetectsGreen", "opticalDetectsBlue", "ppticalDetectsYellow", "opticalDetectsOrange", "opticalDetectsPurple", "opticalDetectsCyan"],
  "roller_optical.brightness": "opticalBrightness",
  "roller_optical.hue": "opticalHue",
  "gps.position_mm": "gpsPositionInMM",
  "gps.position_inches": "gpsPositionInIN",
  "gps.heading": "gpsHeading",
  "bottom_line_tracker.reflectivity": "bottomLineTrackerReflectivity",
  "middle_line_tracker.reflectivity": "middleLineTrackerReflectivity",
  "top_line_tracker.reflectivity": "topLineTrackerReflectivity"
};
var pythonVSIQSensorNameLookup = {
  "brain.timer.time": "timerValue",
  "drivetrain.is_done": "drivetrainDriveIsDone",
  "drivetrain.is_moving": "drivetrainDriveIsMoving",
  "drivetrain.heading": "drivetrainDriveHeading",
  "drivetrain.rotation": "drivetrainDriveRotation",
  "drivetrain.velocity_rpm": "driveVelocityInrpm",
  "drivetrain.velocity_percent": "driveVelocityInpct",
  "intake_motor.is_done": "intakeMotorIsDone",
  "intake_motor.is_spinning": "intakeMotorIsSpinning",
  "intake_motor.position_degrees": "intakeMotorPositionDeg",
  "intake_motor.position_turns": "intakeMotorPositionRev",
  "intake_motor.velocity_rpm": "intakeMotorVelocityRPM",
  "intake_motor.velocity_percent": "intakeMotorVelocityPCT",
  "arm_motor.is_done": "armMotorIsDone",
  "arm_motor.is_spinning": "armMotorIsSpinning",
  "arm_motor.position_degrees": "armMotorPositionDeg",
  "arm_motor.position_turns": "armMotorPositionRev",
  "arm_motor.velocity_rpm": "armMotorVelocityRPM",
  "arm_motor.velocity_percent": "armMotorVelocityPCT",
  "intake_bumper.pressing": "intakeBumperPressed",
  "front_distance.is_object_detected": "distance2ndObjectFound",
  "front_distance.object_distance_mm": "distance2ndObjectDistanceInMM",
  "front_distance.object_distance_inches": "distance2ndObjectDistanceInin",
  "front_optical.is_near_object": "frontOpticalFoundObject",
  "front_optical.color": ["frontOpticalDetectsRed", "frontOpticalDetectsGreen", "frontOpticalDetectsBlue", "frontOpticalDetectsYellow", "frontOpticalDetectsOrange", "frontOpticalDetectsPurple", "frontOpticalDetectsCyan"],
  "front_optical.brightness": "frontOpticalBrightness",
  "front_optical.hue": "frontOpticalHue"
};
var pythonVRSensorNameLookup = {
  "brain.timer_time": "timerValue",
  "drivetrain.is_done": "drivetrainDriveIsDone",
  "drivetrain.is_moving": "drivetrainDriveIsMoving",
  "drivetrain.heading": "drivetrainDriveHeading",
  "drivetrain.rotation": "drivetrainDriveRotation",
  "left_bumper.pressed": "bumperPressedLeft",
  "right_bumper.pressed": "bumperPressedRight",
  "distance.found_object": "distanceObjectFound",
  "front_distance.found_object": "frontDistanceObjectFound",
  "right_distance.found_object": "rightDistanceObjectFound",
  "left_distance.found_object": "leftDistanceObjectFound",
  "distance.get_distance": ["frontDistanceObjectDistanceInMM", "frontDistanceObjectDistanceInIN"],
  "front_distance.get_distance": ["frontDistanceObjectDistanceInMM", "frontDistanceObjectDistanceInIN"],
  "left_distance.get_distance": ["leftDistanceObjectDistanceInMM", "leftDistanceObjectDistanceInIN"],
  "right_distance.get_distance": ["rightDistanceObjectDistanceInMM", "rightDistanceObjectDistanceInIN"],
  "front_eye.near_object": "frontEyeNear",
  "front_eye.detect": ["frontEyeDetectsNone", "frontEyeDetectsRed", "frontEyeDetectsGreen", "frontEyeDetectsBlue"],
  "front_eye.brightness": "frontEyeBrightness",
  "down_eye.near_object": "downEyeNear",
  "down_eye.detect": ["downEyeDetectsNone", "downEyeDetectsRed", "downEyeDetectsGreen", "downEyeDetectsBlue"],
  "down_eye.brightness": "downEyeBrightness",
  // "left_eye.near_object": "eyeNearObject",
  // "left_eye.detect": [
  //   "eyeDetectsRed",
  //   "eyeDetectsGreen",
  //   "eyeDetectsBlue",
  //   "eyeDetectsNone",
  // ],
  // "left_eye.brightness": "eyeBrightness",
  // "right_eye.near_object": "eyeNearObject",
  // "right_eye.detect": [
  //   "eyeDetectsRed",
  //   "eyeDetectsGreen",
  //   "eyeDetectsBlue",
  //   "eyeDetectsNone",
  // ],
  // "right_eye.brightness": "eyeBrightness",
  // "rear_eye.near_object": "eyeNearObject",
  // "rear_eye.detect": [
  //   "eyeDetectsRed",
  //   "eyeDetectsGreen",
  //   "eyeDetectsBlue",
  //   "eyeDetectsNone",
  // ],
  // "rear_eye.brightness": "eyeBrightness",
  "location.position": ["positionInMMX", "positionInMMY", "positionInInchesX", "positionInInchesY"],
  "location.position_angle": "positionAngle",
  "brain.timer.time": "timerValue",
  "drivetrain.velocity": ["driveVelocityInrpm", "driveVelocityInpct"],
  "drivetrain.velocity_rpm": "driveVelocityInrpm",
  "drivetrain.velocity_percent": "driveVelocityInpct",
  "fork_motor_group.is_done": "forkMotorGroupIsDone",
  "fork_motor_group.is_spinning": "forkMotorGroupIsSpinning",
  "fork_motor_group.position": ["forkMotorGroupPositiondeg", "forkMotorGroupPositionrev"],
  "fork_motor_group.position_degrees": "forkMotorGroupPositiondeg",
  "fork_motor_group.position_turns": "forkMotorGroupPositionrev",
  "fork_motor_group.velocity": ["forkMotorGroupVelocityrpm", "forkMotorGroupVelocitypct"],
  "fork_motor_group.velocity_rpm": "forkMotorGroupVelocityrpm",
  "fork_motor_group.velocity_percent": "forkMotorGroupVelocitypct",
  "intake_motor_group.is_done": "intakeMotorGroupIsDone",
  "intake_motor_group.is_spinning": "intakeMotorGroupIsSpinning",
  "intake_motor_group.position": ["intakeMotorGroupPositiondeg", "intakeMotorGroupPositionrev"],
  "intake_motor_group.position_degrees": "intakeMotorGroupPositiondeg",
  "intake_motor_group.position_turns": "intakeMotorGroupPositionrev",
  "intake_motor_group.velocity": ["intakeMotorGroupVelocityrpm", "intakeMotorGroupVelocitypct"],
  "intake_motor_group.velocity_rpm": "intakeMotorGroupVelocityrpm",
  "intake_motor_group.velocity_percent": "intakeMotorGroupVelocitypct",
  "bumper.pressing": "bumperPressed",
  "bottom_distance.is_object_detected": "bottomDistanceObjectFound",
  "bottom_distance.object_distance": ["bottomDistanceObjectDistanceInMM", "bottomDistanceObjectDistanceInIN"],
  "bottom_distance.object_distance_mm": "bottomDistanceObjectDistanceInMM",
  "bottom_distance.object_distance_inches": "bottomDistanceObjectDistanceInIN",
  "left_distance.is_object_detected": "distanceLeftObjectFound",
  "left_distance.object_distance": ["distanceLeftObjectDistanceInMM", "distanceLeftObjectDistanceInIN"],
  "left_distance.object_distance_mm": "distanceLeftObjectDistanceInIN",
  "left_distance.object_distance_inches": "distanceLeftObjectDistanceInMM",
  "right_distance.is_object_detected": "distanceRightObjectFound",
  "right_distance.object_distance": ["distanceRightObjectDistanceInMM", "distanceRightObjectDistanceInIN"],
  "right_distance.object_distance_mm": "distanceRightObjectDistanceInMM",
  "right_distance.object_distance_inches": "distanceRightObjectDistanceInIN",
  "center_distance.is_object_detected": "distanceCenterObjectFound",
  "center_distance.object_distance": ["distanceCenterObjectDistanceInMM", "distanceCenterObjectDistanceInIN"],
  "center_distance.object_distance_mm": "distanceCenterObjectDistanceInMM",
  "center_distance.object_distance_inches": "distanceCenterObjectDistanceInIN",
  "roller_optical.is_near_object": "rollerOpticalFoundObject",
  "roller_optical.color": ["rollerOpticalDetectsRed", "rollerOpticalDetectsGreen", "rollerOpticalDetectsBlue", "rollerOpticalDetectsYellow", "rollerOpticalDetectsOrange", "rollerOpticalDetectsPurple", "rollerOpticalDetectsCyan"],
  "optical.is_near_object": "opticalFoundObject",
  "optical.color": ["opticalDetectsRed", "opticalDetectsGreen", "opticalDetectsBlue", "opticalDetectsYellow", "opticalDetectsOrange", "opticalDetectsPurple", "opticalDetectsCyan"],
  "roller_optical.brightness": "rollerOpticalBrightness",
  "roller_optical.hue": "rollerOpticalHue",
  "optical.brightness": "opticalBrightness",
  "optical.hue": "opticalHue",
  "gps.x_position": ["gpsPositionInMM", "gpsPositionInIN"],
  "gps.y_position": ["gpsPositionInMM", "gpsPositionInIN"],
  "gps.position": ["gpsPositionInMM", "gpsPositionInIN"],
  "gps.position_mm": ["gpsPositionInMMX", "gpsPositionInMMY"],
  "gps.position_inches": ["gpsPositionInINX", "gpsPositionInINY"],
  "gps.heading": "gpsHeading",
  "bottom_line_tracker.reflectivity": "bottomLineTrackerReflectivity",
  "middle_line_tracker.reflectivity": "middleLineTrackerReflectivity",
  "top_line_tracker.reflectivity": "topLineTrackerReflectivity",
  "rotation.angle": "rotationAngle",
  "rotation.position": ["rotationPositiondeg", "rotationPositionrev"],
  "rotation.position_degrees": "rotationPositiondeg",
  "rotation.position_turns": "rotationPositionrev",
  "rotation.velocity": ["rotationVelocityrpm", "rotationVelocitydps"],
  "rotation.velocity_rpm": "rotationVelocityrpm",
  "rotation.velocity_dps": "rotationVelocitydps",
  //#region IQ Sensors

  "intake_motor.is_done": "intakeMotorIsDone",
  "intake_motor.is_spinning": "intakeMotorIsSpinning",
  "intake_motor.position_degrees": "intakeMotorPositiondeg",
  "intake_motor.position_turns": "intakeMotorPositionrev",
  "intake_motor.velocity_rpm": "intakeMotorVelocityrpm",
  "intake_motor.velocity_percent": "intakeMotorVelocitypct",
  "intake_motor.position": ["intakemotorPositiondeg", "intakemotorPositionrev"],
  "intake_motor.velocity": ["intakemotorVelocityrpm", "intakemotorVelocitypct"],
  "arm_motor.is_done": "armMotorIsDone",
  "arm_motor.is_spinning": "armMotorIsSpinning",
  "arm_motor.position_degrees": "armMotorPositiondeg",
  "arm_motor.position_turns": "armMotorPositionrev",
  "arm_motor.velocity_rpm": "armMotorVelocityrpm",
  "arm_motor.velocity_percent": "armMotorVelocitypct",
  "arm_motor.position": ["armMotorPositiondeg", "armMotorPositionrev"],
  "arm_motor.velocity": ["armMotorVelocityrpm", "armMotorVelocitypct"],
  "intake_bumper.pressing": "intakeBumperPressed",
  //#region viqc2023

  "front_distance.is_object_detected": "frontDistanceObjectFound",
  "front_distance.object_distance": ["frontDistanceObjectDistanceInMM", "frontDistanceObjectDistanceInIN"],
  "front_distance.object_distance_mm": "frontDistanceObjectDistanceInMM",
  "front_distance.object_distance_inches": "frontDistanceObjectDistanceInIN",
  "front_optical.is_near_object": "frontOpticalObjectFound",
  "front_optical.color": ["frontOpticalDetectsColorRed", "frontOpticalDetectsColorGreen", "frontOpticalDetectsColorBlue", "frontOpticalDetectsColorYellow", "frontOpticalDetectsColorOrange", "frontOpticalDetectsColorPurple", "frontOpticalDetectsColorCyan"],
  "front_optical.brightness": "frontOpticalBrightness",
  "front_optical.hue": "frontOpticalHue",
  //#endregion viqc2023

  //#region viqc2022
  "catapult_motor.is_done": "catapultMotorIsDone",
  "catapult_motor.is_spinning": "catapultMotorIsSpinning",
  "catapult_motor.position_degrees": "catapultMotorPositiondeg",
  "catapult_motor.position_turns": "catapultMotorPositionrev",
  //  "catapult_motor.velocity_rpm": "intakemotorVelocityrpm",
  "catapult_motor.velocity_percent": "catapultMotorVelocitypct",
  "catapult_motor.position": ["catapultMotorPositiondeg", "catapultMotorPositionrev"],
  "catapult_motor.velocity": [
  //     "intakemotorVelocityrpm",
  "intakemotorVelocitypct"],
  "catapult_tension_motor.is_done": "catapultTensionMotorIsDone",
  "catapult_tension_motor.is_spinning": "catapultTensionMotorIsSpinning",
  "catapult_tension_motor.position_degrees": "catapultTensionMotorPositiondeg",
  "catapult_tension_motor.position_turns": "catapultTensionMotorPositionrev",
  "catapult_tension_motor.velocity_percent": "catapultTensionMotorVelocitypct",
  "catapult_tension_motor.position": ["catapultTensionMotorPositiondeg", "catapultTensionMotorPositionrev"],
  "catapult_tension_motor.velocity": ["catapultTensionMotorVelocitypct"],
  "distance.is_object_detected": "distanceObjectFound",
  "distance.object_distance": ["distanceObjectDistanceInMM", "distanceObjectDistanceInIN"],
  "distance.object_distance_mm": "distanceObjectDistanceInMM",
  "distance.object_distance_inches": "distanceObjectDistanceInIN",
  "color.is_near_object": "colorIsNear",
  "color.color": "colorOf",
  "color.brightness": "colorBrightness",
  "color.hue": "colorHue",
  //#endregion viqc2022

  //#endregion IQ Sensors

  //#region Rover Rescue Sensors
  "rover.battery": "brainBattery",
  "rover.minerals_stored": "roverMineralsStored",
  // "rover.position": [ 
  //   "roverSeesLocationRoverInMM",
  //   "roverSeesLocationRoverInInches"
  //               ],
  "rover.level": "roverLevel",
  "rover.exp": "roverExp",
  "rover.storage_capacity": "roverStorageCapacity",
  "rover.under_attack": "roverUnderAttack",
  // We need to add the await because the preprocessor adds it, these are the only awaited sensing functions. 
  // If any more sensing functions need to be awaited, use the same method to enable monitoring.
  "await rover.enemy_radiation": "enemyRadiation",
  "await rover.enemy_level": "enemyLevel",
  "await rover.angle": ["roverSeesDirectionMinerals", "roverSeesDirectionEnemy", "roverSeesDirectionBase"],
  "await rover.location": ["roverSeesLocationRoverInMMX", "roverSeesLocationRoverInMMY", "roverPositionInInchesX", "roverPositionInInchesY", "roverSeesLocationMineralsInMMX", "roverSeesLocationMineralsInMMY", "roverSeesLocationMineralsInInchesX", "roverSeesLocationMineralsInInchesY", "roverSeesLocationEnemyInMMX", "roverSeesLocationEnemyInMMY", "roverSeesLocationEnemyInInchesX", "roverSeesLocationEnemyInInchesY", "roverSeesLocationBaseInMMX", "roverSeesLocationBaseInMMY", "roverSeesLocationBaseInInchesX", "roverSeesLocationBaseInInchesY", "roverSeesLocationObstacleInMMX", "roverSeesLocationObstacleInMMY", "roverSeesLocationObstacleInInchesX", "roverSeesLocationObstacleInInchesY", "roverSeesLocationHazardInMMX", "roverSeesLocationHazardInMMY", "roverSeesLocationHazardInInchesX", "roverSeesLocationHazardInInchesY"],
  "await rover.detects": ["roverDetectsMinerals", "roverDetectsEnemy"],
  "await rover.sees": ["roverSeesFood", "roverSeesEnemy", "roverSeesHome", "roverSeesObstacle", "roverSeesHazard", "roverSeesBase"],
  "await rover.get_distance": ["roverSeesDistanceEnemyInMM", "roverSeesDistanceEnemyInInches", "roverSeesDistanceObstacleInMM", "roverSeesDistanceObstacleInInches", "roverSeesDistanceHazardInMM", "roverSeesDistanceHazardInInches", "roverSeesDistanceMineralsInMM", "roverSeesDistanceMineralsInInches", "roverSeesDistanceEnemyInMM", "roverSeesDistanceEnemyInInches", "roverSeesDistanceBaseInMM", "roverSeesDistanceBaseInInches", "roverSeesDistanceObstacleInMM", "roverSeesDistanceObstacleInInches", "roverSeesDistanceHazardInMM", "roverSeesDistanceHazardInInches", "roverSeesDistanceFoodInMM", "roverSeesDistanceFoodInInches", "roverSeesDistanceEnemyInMM", "roverSeesDistanceEnemyInInches", "roverSeesDistanceHomeInMM", "roverSeesDistanceHomeInInches"]
  //#region Rover Rescue Sensors
};
var pythonGOSensorNameLookup = {
  "timer.time": "brainTimer",
  "drivetrain.get_heading": "driveHeading",
  "drivetrain.get_rotation": "driveRotation",
  "drivetrain.get_velocity": "driveVelocityInpct",
  "drivetrain.get_yaw": "driveYaw",
  "drivetrain.get_roll": "driveRoll",
  "drivetrain.get_pitch": "drivePitch",
  "drivetrain.get_crashed": "gyroCrash",
  "drivetrain.is_stopped": "driveDone",
  "motor.get_position": ["armMotorPositiondeg", "armMotorPositionrev", "baseMotorPositiondeg", "baseMotorPositionrev", "motor1Positiondeg", "motor1Positionrev", "motor2Positiondeg", "motor2Positionrev", "motor3Positiondeg", "motor3Positionrev", "motor4Positiondeg", "motor4Positionrev"],
  "motor.get_velocity": ["armMotorVelocitypct", "baseMotorVelocitypct", "motor1Velocitypct", "motor2Velocitypct", "motor3Velocitypct", "motor4Velocitypct"],
  "motor.get_current": ["armMotorCurrentpct", "baseMotorCurrentpct", "motor1Currentpct", "motor2Currentpct", "motor3Currentpct", "motor4Currentpct"],
  "motor.is_stopped": ["armMotorIsDone", "baseMotorIsDone", "motor1IsDone", "motor2IsDone", "motor3IsDone", "motor4IsDone"],
  "motor.is_moving": ["armMotorIsSpinning", "baseMotorIsSpinning", "motor1IsSpinning", "motor2IsSpinning", "motor3IsSpinning", "motor4IsSpinning"],
  "inertial.get_rotation": "gyroRotation",
  "inertial.get_heading": "gyroHeading",
  "inertial.get_yaw": "gyroYaw",
  "inertial.get_roll": "gyroRoll",
  "inertial.get_pitch": "gyroPitch",
  "inertial.get_accelerationX": "gyroAccelX",
  "inertial.get_accelerationY": "gyroAccelY",
  "inertial.get_accelerationZ": "gyroAccelZ",
  "bumper.is_pressed": ["bumperPressed", "bumper1Pressed", "bumper2Pressed", "bumper3Pressed", "bumper4Pressed"],
  "eye.get_color": "eyeColor",
  "eye.get_hue": "eyeHue",
  "eye.get_brightness": "eyeBrightness",
  "eye.is_object_detected": "eyeFoundObject",
  "eye.is_color_detected": ["eyeDetectsRed", "eyeDetectsGreen", "eyeDetectsBlue"]
};
var armThread = "# vr_thread wrapper function\ndef vexcode_handle_task_exception(exc):\n    exc_type = type(exc).__name__\n    exc_tb = exc.__traceback__\n    import io\n    vexcode_syntax_check_output = io.StringIO()\n    import traceback\n    traceback.print_exception(exc_type, exc, exc_tb, file=vexcode_syntax_check_output)\n    vexcode_api.sendPythonError(vexcode_syntax_check_output.getvalue())\n    vexcode_api.sendPythonRunComplete()\n\ndef arm_thread(func):\n    coro = func if asyncio.iscoroutine(func) else func()\n    task = asyncio.create_task(coro)\n    def task_complete(fut):\n        excep = fut.exception()\n        if excep:\n            vexcode_handle_task_exception(excep)\n    task.add_done_callback(task_complete)\n";
var stop_project = "# stop_project wrapper function\ndef stop_project():\n    vexcode_api.stopProject()\n";
var pyImports = "\nimport math\nimport random\n";
var constructors = "# constructors\n\n";
var monitorCode = "\nfrom js import vexcode_api\n\ndef monitor_variable(*var_names):\n    for var_name in var_names:\n        if not isinstance(var_name, str):\n            raise TypeError(\"variable names must be a string\")\n        vexcode_api.addVariableToMonitor(var_name)\n\ndef monitor_sensor(*sensor_names):\n    for sensor_name in sensor_names:\n        if not isinstance(sensor_name, str):\n            raise TypeError(\"sensor names must be a string\")\n        vexcode_api.addSensorToMonitor(sensor_name)\n";
var highlightBlockCode = "\ndef highlight_block(id):\n    vexcode_api.highlightBlock(id)\n\ndef unhighlight_block(id):\n    vexcode_api.unhighlightBlock(id)\n";

//#endregion

// const pyHeader = [pyImports, enums, classes, constructors].join("\n\n");
var pyHeader = [pyImports, _targetPlatform__WEBPACK_IMPORTED_MODULE_4__.targetIsGO ? "" : armThread, constructors, stop_project, monitorCode, highlightBlockCode].join("\n\n").replace(/\r\n/g, "\n");
})();

webapp = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=PyodideVMWebWorker.bundle.js.map