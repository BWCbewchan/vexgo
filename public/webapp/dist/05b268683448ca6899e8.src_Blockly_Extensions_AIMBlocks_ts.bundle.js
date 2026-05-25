"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_Blockly_Extensions_AIMBlocks_ts"],{

/***/ "./src/Blockly/Extensions/AIMBlocks.ts":
/*!*********************************************!*\
  !*** ./src/Blockly/Extensions/AIMBlocks.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIMBlocks: () => (/* binding */ AIMBlocks),
/* harmony export */   setVMControls: () => (/* binding */ setVMControls)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Extension */ "./src/Blockly/Extensions/Extension.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/Blockly/Extensions/utils/index.ts");
/* harmony import */ var _VexcodeTimer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../VexcodeTimer */ "./src/VexcodeTimer.ts");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/helpers */ "./src/Blockly/Extensions/utils/helpers.ts");
/* harmony import */ var _BlocklyController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BlocklyController */ "./src/Blockly/BlocklyController.ts");
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dispatcher */ "./src/dispatcher.ts");
/* harmony import */ var _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../HardwareInterface/types/HWEnums */ "./src/HardwareInterface/types/HWEnums.ts");
/* harmony import */ var _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../GlobalEventSystem */ "./src/GlobalEventSystem.ts");
/* harmony import */ var _HardwareInterface_controllers_VEXAIMController__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../HardwareInterface/controllers/VEXAIMController */ "./src/HardwareInterface/controllers/VEXAIMController.ts");
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("AIMBlocksExtension");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

// tslint:disable: member-ordering










var VMControls = null;

/**
 * lets you tell the AIM extension how to control the VM. This is important
 * since we have a block for stopping the project. This should be used before
 * tying to run any projects.
 * 
 * @param newControls the VMControls object from the vm module
 */
function setVMControls(newControls) {
  log.debug("setting VMControls");
  VMControls = newControls;
}
var AIMBlocks = /*#__PURE__*/function (_ExtensionBase) {
  function AIMBlocks(runtime) {
    var _this;
    _classCallCheck(this, AIMBlocks);
    _this = _callSuper(this, AIMBlocks, [runtime]);
    // Looks Variables
    _defineProperty(_this, "primitives", {});
    /** Drivetrain variables */
    _defineProperty(_this, "driveVelocity", 50);
    _defineProperty(_this, "readyEvent", new _dispatcher__WEBPACK_IMPORTED_MODULE_6__.DispatcherEvent());
    _this.setExtensionDefaults();
    _this.buildPrimitives();
    _this.onConnectionStatusChange = _this.onConnectionStatusChange.bind(_this);
    _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_8__.on("HWInterface.ConnectionStateChange", _this.onConnectionStatusChange);
    return _this;
  }
  _inherits(AIMBlocks, _ExtensionBase);
  return _createClass(AIMBlocks, [{
    key: "onConnectionStatusChange",
    value: function onConnectionStatusChange(newState) {
      log.debug("AIM connection status changed");
      if (newState === _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_7__.DeviceConnectionState.Disconnected) {
        VMControls.stopVM();
      }
    }
  }, {
    key: "setExtensionDefaults",
    value: function setExtensionDefaults() {
      // Reset Looks Variables
      this.printPrecision = "0";

      // Reset Timer
      AIMBlocks.timer.reset();
    }
  }, {
    key: "getInfo",
    value: function getInfo() {
      return {
        id: 'aimBlocks',
        blocks: [
        //#region events
        {
          opcode: 'aim_logic_when_started',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.HAT,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'whenstarted',
          arguments: {},
          func: 'whenStarted',
          isEdgeActivated: false,
          shouldRestartExistingThreads: true
        },
        //#endregion events
        //#region Drivetrain
        {
          opcode: 'aim_drivetrain_move_direction',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'drive [DIRECTION]',
          arguments: {
            direction: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'forward',
              menu: 'DIRECTION'
            }
          },
          func: 'moveDirection'
        }, {
          opcode: 'aim_drivetrain_move_direction_for',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'drive [DIRECTION] for [AMOUNT]',
          arguments: {
            DIRECTION: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'fwd',
              menu: 'DIRECTION'
            },
            AMOUNT: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.NUMBER,
              "default": 1
            }
          },
          func: 'moveDirectionFor'
        }
        //#endregion Drivetrain
        ],
        menus: {
          TURNDIRECTION: [{
            value: 'right',
            text: 'right'
          }, {
            value: 'left',
            text: 'left'
          }],
          DIRECTION: [{
            value: 'fwd',
            text: 'forward'
          }, {
            value: 'rev',
            text: 'reverse'
          }, {
            value: 'right',
            text: 'right'
          }, {
            value: 'left',
            text: 'left'
          }],
          OBSTACLES: [{
            value: 'object',
            text: 'object'
          }, {
            value: 'crash',
            text: 'crash'
          }, {
            value: 'line',
            text: 'line'
          }],
          UNITS: [{
            value: 'step',
            text: 'steps'
          }, {
            value: 'mm',
            text: 'millimeters'
          }],
          PRECISIONS: [{
            value: '0',
            text: '1'
          }, {
            value: '1',
            text: '0.1'
          }, {
            value: '2',
            text: '0.01'
          }, {
            value: '3',
            text: '0.001'
          }, {
            value: '-1',
            text: 'All Digits'
          }],
          PENCOLORS: [{
            value: "black",
            text: 'black'
          }, {
            value: "red",
            text: 'red'
          }, {
            value: "green",
            text: 'green'
          }, {
            value: "blue",
            text: 'blue'
          }],
          ORIENTATIONMENU: [{
            value: 'pitch',
            text: 'pitch'
          }, {
            value: 'roll',
            text: 'roll'
          }, {
            value: 'yaw',
            text: 'yaw'
          }]
        }
      };
    }
  }, {
    key: "buildPrimitives",
    value: function buildPrimitives() {
      var _this2 = this;
      var info = this.getInfo();
      var out = {};
      info.blocks.forEach(function (block) {
        var func = block.func;
        if (!func) {
          log.debug("no function for", block.opcode);
          return;
        }
        if (typeof func === "function") {
          out[block.opcode] = _this2[func];
        } else if (typeof func === "string") {
          out[block.opcode] = _this2[block.func];
        } else {
          log.warn("unexpected type for function", block);
        }
      });
      this.primitives = out;
    }

    /**
     * Retrieve the block primitives implemented by this package.
     * @return {object.<string, Function>} Mapping of opcode to Function.
     */
  }, {
    key: "getPrimitives",
    value: function getPrimitives() {
      return this.primitives;
    }

    //#region events
  }, {
    key: "whenStarted",
    value: function whenStarted(args, util) {
      var _this3 = this;
      log.debug("whenStarted");
      // this is a special case. hat blocks need to return a boolean true
      // to make sure the block stack actually runs.
      // see handleReport in vm src/engine/execute.js
      return new Promise(/*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
          var start, delay;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                AIMBlocks.timer.reset();
                if (!util.target.firstRun) {
                  _context.next = 15;
                  break;
                }
                util.target.firstRun = false;
                AIMBlocks.isReady = false;
                log.debug("running init code...");
                // we need to wait 600ms, but we want to make sure that other changes don't cause too much delay
                start = Date.now(); // let any other when started stacks know that they are good to run.
                AIMBlocks.isReady = true;
                _this3.readyEvent.fire();

                // we want to wait at least 600 ms before we actually start the code...
                delay = 600 - (Date.now() - start);
                if (!(delay > 0)) {
                  _context.next = 12;
                  break;
                }
                _context.next = 12;
                return (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.waitms)(delay);
              case 12:
                AIMBlocks.timer.reset();
                _context.next = 25;
                break;
              case 15:
                log.debug("skipping init code...");

                // we want to wait 600 ms before we actually start the code...
                _context.next = 18;
                return (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.waitms)(600);
              case 18:
                if (AIMBlocks.isReady) {
                  _context.next = 25;
                  break;
                }
                log.debug("init has not been completed. waiting for that to finish...");
                // wait for the init to complete
                _context.next = 22;
                return new Promise(function (resolve, reject) {
                  _this3.readyEvent.registerCallback(resolve);
                });
              case 22:
                log.debug("init completed");

                // just to make sure it does not impact the order of stack execution,
                // we are adding a 1ms delay to let the first when started run
                // without waiting for this to complete
                _context.next = 25;
                return (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.waitms)(1);
              case 25:
                resolve(true);
              case 26:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    //#endregion events

    //#region Drivetrain Opcode Executors
  }, {
    key: "moveDirection",
    value: function () {
      var _moveDirection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(args, utils) {
        var blockId, angle;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              blockId = utils.thread.peekStack();
              log.debug("moveDirection: ".concat(JSON.stringify(args), ", blockID: ").concat(blockId));
              angle = this.getAngleFromDirection(args.DIRECTION);
              _context2.prev = 3;
              _context2.next = 6;
              return _HardwareInterface_controllers_VEXAIMController__WEBPACK_IMPORTED_MODULE_9__.aimController.drive(blockId, angle, 50);
            case 6:
              _context2.next = 11;
              break;
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](3);
              log.warn(JSON.parse(_context2.t0));
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[3, 8]]);
      }));
      function moveDirection(_x3, _x4) {
        return _moveDirection.apply(this, arguments);
      }
      return moveDirection;
    }()
  }, {
    key: "moveDirectionFor",
    value: function () {
      var _moveDirectionFor = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(args, utils) {
        var blockId, angle, amount;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              blockId = utils.thread.peekStack();
              log.debug("moveDirectionFor called with direction: ".concat(args.DIRECTION, ", amount: ").concat(args.AMOUNT, ", blockID: ").concat(blockId));
              angle = this.getAngleFromDirection(args.DIRECTION);
              amount = this.intCheck(args.AMOUNT);
              _context3.prev = 4;
              _context3.next = 7;
              return _HardwareInterface_controllers_VEXAIMController__WEBPACK_IMPORTED_MODULE_9__.aimController.driveFor(blockId, amount, angle, 0, 50, 50, true);
            case 7:
              return _context3.abrupt("return");
            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](4);
              log.warn(JSON.parse(_context3.t0));
            case 13:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[4, 10]]);
      }));
      function moveDirectionFor(_x5, _x6) {
        return _moveDirectionFor.apply(this, arguments);
      }
      return moveDirectionFor;
    }() //#endregion Drivetrain Opcode Executors
    //#region Helpers
    /**
     * Gets the angle from a direction dropdown value. 
     * @param direction 
     * @returns angle
     */
  }, {
    key: "getAngleFromDirection",
    value: function getAngleFromDirection(direction) {
      switch (direction) {
        case 'fwd':
          return 0;
        case 'rev':
          return 180;
        case 'right':
          return 90;
        case 'left':
          return 270;
        default:
          log.error("Error trying to get angle from direction for AIM, given direction doesn't match any cases: ".concat(direction));
          return 0;
      }
    }

    /**
     * Clamps the given number to int limits
     * @param amount 
     * @returns max: 32767, min: -32768 otherwise the given number
     */
  }, {
    key: "intCheck",
    value: function intCheck(amount) {
      if (amount > 32767) {
        amount = 32767;
      }
      if (amount < -32768) {
        amount = -32768;
      }
      return amount;
    }

    /**
     * Rounds a given number to given precision. We should probably move this out
     * to a helper file and use it across VEXcode. 
     * 
     * Why do this and not just stick to .toFixed()?
     * 
     * Because of you might occasionally encounter -0 when formatting numbers, which can be a bit confusing. 
     * @param num 
     * @param precision 
     * @returns 
     */
  }, {
    key: "roundNumber",
    value: function roundNumber(num, precision) {
      var factor = Math.pow(10, precision);
      return Math.round(num * factor) / factor;
    }
    //#endregion Helpers
  }]);
}(_Extension__WEBPACK_IMPORTED_MODULE_1__.ExtensionBase);
/**
* This function picks a random integer from a given range of [min,max) where min is 
* greater than or equal to zero
* @param min lowest number that can be returned
* @param max highest number that can be returned
* @return Random integer chosen between a range of two given integers
*/
/** this is the brain timer */
_defineProperty(AIMBlocks, "timer", new _VexcodeTimer__WEBPACK_IMPORTED_MODULE_3__.VexcodeTimer(0, true));
/** 
 * The AIM requires a lot of actions are completed in the when started
 * block before the code can run. however, we only want to run these steps
 * once, so we only call them if the when started block is the first run. All
 * other when started blocks wait for the command to finish. This is used for
 * those other runs to know if the init has been completed. If this is false,
 * the init is still running and we need to wait for it to complete.
 * 
 * * true - the init has been completed
 * * false - the init is still running
 */
_defineProperty(AIMBlocks, "isReady", false);
function randomIntFromInterval(min, max) {
  // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * This function will 
 * @param util BlockUtility to access threads
 * @param stopProject Should the project stop for this error
 * @param message The message that will get displayed on the block
 */
function reportErrorToBlock(util, stopProject, message) {
  var blockID = util.thread.peekStack(); // Get the last highlighted block from the utils
  var currentWorkSpace = (0,_BlocklyController__WEBPACK_IMPORTED_MODULE_5__.getCurrentMainController)().blocklyWorkspace;
  var block = blockID ? currentWorkSpace.getBlockById(blockID) : null;
  var nextBlock = block ? block.getNextBlock() : null;
  if (nextBlock && nextBlock.type === block.type) {
    // Usually the block we get from highlighting is one before the block that caused the error
    // But that is not always true. So we need to find a better way to detect which block caused the issue
    nextBlock.setWarningText(message);
    currentWorkSpace.setScale(currentWorkSpace.scaleStart);
    currentWorkSpace.centerOnBlock(nextBlock.id);
    var blockAnyType = block;
    if (blockAnyType.addErrorHighlight && typeof blockAnyType.addErrorHighlight === "function") {
      blockAnyType.addErrorHighlight();
    }
    // TODO: Update blockly react component and get rid of that any bs
  } else if (block) {
    block.setWarningText(message);
    currentWorkSpace.setScale(currentWorkSpace.scaleStart);
    currentWorkSpace.centerOnBlock(block.id);
    var _blockAnyType = block;
    if (_blockAnyType.addErrorHighlight && typeof _blockAnyType.addErrorHighlight === "function") {
      _blockAnyType.addErrorHighlight();
    }
  } else {
    _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.debug("Trying to report an error for a block, but failed to get the block");
  }
  if (stopProject && VMControls) {
    VMControls.stopVM();
  } else {
    _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.debug("Trying to stop the project but VMControls for AIMBlocks isn't defined");
  }
}


/***/ })

}]);
//# sourceMappingURL=05b268683448ca6899e8.src_Blockly_Extensions_AIMBlocks_ts.bundle.js.map