"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_texteditor_blocklyTextEditor_tsx"],{

/***/ "./src/texteditor/blocklyTextEditor.tsx":
/*!**********************************************!*\
  !*** ./src/texteditor/blocklyTextEditor.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlocklyTextEditor: () => (/* binding */ BlocklyTextEditor)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor */ "./src/texteditor/editor.tsx");
/* harmony import */ var _utils_registerLanguages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/registerLanguages */ "./src/texteditor/utils/registerLanguages.ts");
/* harmony import */ var _utils_registerTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/registerTheme */ "./src/texteditor/utils/registerTheme.ts");
/* harmony import */ var _autocomplete_VEXContextBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./autocomplete/VEXContextBuilder */ "./src/texteditor/autocomplete/VEXContextBuilder.ts");
/* harmony import */ var _vexLanguageClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vexLanguageClient */ "./src/texteditor/vexLanguageClient.ts");
/* harmony import */ var _AppInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../AppInfo */ "./src/AppInfo.ts");
/* harmony import */ var _utils_monaco_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/monaco-utils */ "./src/texteditor/utils/monaco-utils.ts");
/* harmony import */ var _codeGen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../codeGen */ "./src/codeGen.ts");
/* harmony import */ var _TextEditorFiles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TextEditorFiles */ "./src/texteditor/TextEditorFiles.ts");
/* harmony import */ var _targetPlatform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../targetPlatform */ "./src/targetPlatform.ts");
/* provided dependency */ var monaco = __webpack_require__(/*! monaco-editor */ "include-loader!./node_modules/monaco-editor/esm/vs/editor/editor.main.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("blocklyTextEditor");
log.setLevel(log.levels.WARN);
// dev only
// log.enableAll();

// add history logger
var historyLogger = log.setHistoryLogger("blocklyTextEditor");
historyLogger.setLevel(log.levels.DEBUG);




//import(/* webpackChunkName: "monaco-editor" */ "monaco-editor");







var BlocklyEditorDummyElement = /*#__PURE__*/function () {
  function BlocklyEditorDummyElement(editor) {
    _classCallCheck(this, BlocklyEditorDummyElement);
    _defineProperty(this, "afterLoadQueue", []);
    //#region dummy element methods/properties
    _defineProperty(this, "defaultValue", null);
    this.editor = editor;
    this.focusMonaco = this.focusMonaco.bind(this);
    this.selectMonaco = this.selectMonaco.bind(this);
    this.onMonacoEditorLoaded = this.onMonacoEditorLoaded.bind(this);
  }
  return _createClass(BlocklyEditorDummyElement, [{
    key: "value",
    get: function get() {
      return this.editor.getValue();
    },
    set: function set(newValue) {
      if (this.value === newValue) {
        return;
      }
      this.editor.setValue(newValue);
    }

    /** function to make this a dummy HTMLInputElement */
  }, {
    key: "focus",
    value: function focus() {
      log.debug("editor focus called");
      this.runAfterLoad(this.focusMonaco);
    }

    /** function to make this a dummy HTMLInputElement */
  }, {
    key: "select",
    value: function select() {
      log.debug("editor select called");
      this.runAfterLoad(this.selectMonaco);
    }

    /** function to make this a dummy HTMLInputElement */
  }, {
    key: "setAttribute",
    value: function setAttribute() {}

    /** function to make this a dummy HTMLInputElement */
  }, {
    key: "getAttribute",
    value: function getAttribute() {}

    /** function to make this a dummy HTMLInputElement */
  }, {
    key: "removeAttribute",
    value: function removeAttribute() {}
    //#endregion dummy element methods/properties

    /**
     * Tells the browser to focus on monaco. This should be called thru `runAfterLoad`.
     */
  }, {
    key: "focusMonaco",
    value: function focusMonaco() {
      log.debug("focusMonaco");
      this.editor.getMonacoInstance().editor.focus();
    }

    /**
     * Tells the monaco to select all. This should be called thru `runAfterLoad`.
     */
  }, {
    key: "selectMonaco",
    value: function selectMonaco() {
      log.debug("selectMonaco");
      var lines = this.value.split("\n");
      var lineCount = lines.length;
      var lastLineLength = lines[lineCount - 1].length;
      var selection = new BlocklyTextEditor.monacoObject.Selection(0, 0, lineCount, lastLineLength + 1);
      this.editor.getMonacoInstance().editor.setSelection(selection);
    }

    /**
     * will try to run the provided function. if the editor is loaded, it will
     * run immediately, otherwise it will be queued for after the editor loads.
     * @param func the function to run
     */
  }, {
    key: "runAfterLoad",
    value: function runAfterLoad(func) {
      if (this.editor.isLoaded) {
        func();
      } else {
        this.afterLoadQueue.push(func);
        this.editor.onEditorLoad = this.onMonacoEditorLoaded;
      }
    }

    /** will run queued functions after monaco is loaded */
  }, {
    key: "onMonacoEditorLoaded",
    value: function onMonacoEditorLoaded() {
      var tmp = this.afterLoadQueue.slice();
      this.afterLoadQueue = [];
      tmp.forEach(function (func) {
        func();
      });
      this.editor.onEditorLoad = null;
    }
  }]);
}();
var BlocklyTextEditor = /*#__PURE__*/function (_React$Component) {
  function BlocklyTextEditor(props) {
    var _this;
    _classCallCheck(this, BlocklyTextEditor);
    _this = _callSuper(this, BlocklyTextEditor, [props]);
    /**
     * Stores the reference to the interval used to check for the suggestion
     * widget in the monaco editor instance.
     */
    _defineProperty(_this, "suggestionCheckInterval", null);
    /**
     * Stores the reference to the suggestion widget in the monaco editor
     * instance as it is not ready as soon as the instance is created.
     */
    _defineProperty(_this, "suggestWidget", null);
    _defineProperty(_this, "onEditorLoad", null);
    _defineProperty(_this, "onGoToPosition", function (position) {
      if (_this.currentEditorView) {
        var monacoPosition = {
          "lineNumber": position.lineNumber,
          "column": position.column
        };
        _this.currentEditorView.goToPosition(monacoPosition);
      }
    });
    _defineProperty(_this, "onEditCommand", function (cmd) {
      if (cmd && _this.currentEditorView) {
        _this.currentEditorView.runEditCommand(cmd);
      }
    });
    _defineProperty(_this, "getMonacoInstance", function () {
      return _this.currentEditorView.monaco;
    });
    _this.state = {};

    // part of the hack for the monaco instance
    if (!BlocklyTextEditor.monacoObject) {
      if (monaco) {
        BlocklyTextEditor.monacoObject = monaco;
      } else {
        log.error("unable to set local monaco");
      }
    }
    _this.textEditorInit = _this.textEditorInit.bind(_this);
    _this.generateConstructors = _this.generateConstructors.bind(_this);
    if (props.onCreateDummy) {
      var dummy = new BlocklyEditorDummyElement(_this);
      dummy.defaultValue = props.startingText;
      props.onCreateDummy(dummy);
    }
    _this.onCheckForSuggestionsWidget = _this.onCheckForSuggestionsWidget.bind(_this);
    return _this;
  }
  _inherits(BlocklyTextEditor, _React$Component);
  return _createClass(BlocklyTextEditor, [{
    key: "isLoaded",
    get: function get() {
      return !!this.currentEditorView;
    }
  }, {
    key: "textEditorInit",
    value: function () {
      var _textEditorInit = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this2 = this;
        var currentState;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              log.debug("Initializing monaco text editor..");
              _context.next = 3;
              return _utils_monaco_utils__WEBPACK_IMPORTED_MODULE_8__.MonacoUtils.initialize();
            case 3:
              _context.next = 5;
              return (0,_utils_registerTheme__WEBPACK_IMPORTED_MODULE_4__["default"])();
            case 5:
              _context.next = 7;
              return (0,_utils_registerLanguages__WEBPACK_IMPORTED_MODULE_3__["default"])();
            case 7:
              log.debug("setting text editor theme to LIGHT");
              (0,_utils_registerTheme__WEBPACK_IMPORTED_MODULE_4__.setTheme)("Li");

              // clean existing model, so when switching from blocks to text will not cause duplicate model issue.
              cleanMonaco();
              // create main.cpp models in global scope only if they are not available
              // This must happen as part of the react life event.otherwise monaco will not be available and will throw exception.
              log.debug("current app lang:", _AppInfo__WEBPACK_IMPORTED_MODULE_7__.appState.getAppState().lang);
              if (!_TextEditorFiles__WEBPACK_IMPORTED_MODULE_10__.textEditorFiles) {
                // textEditorFiles = new textFiles();
                _TextEditorFiles__WEBPACK_IMPORTED_MODULE_10__.textEditorFiles.initialize();
              } else {
                log.debug("current monaco lang:", _TextEditorFiles__WEBPACK_IMPORTED_MODULE_10__.textEditorFiles.currentLanguage);
                _TextEditorFiles__WEBPACK_IMPORTED_MODULE_10__.textEditorFiles.initialize();
              }

              // create the monaco viewer instance
              this._view = new _editor__WEBPACK_IMPORTED_MODULE_2__.View(_TextEditorFiles__WEBPACK_IMPORTED_MODULE_10__.textEditorFiles.blocklyFile);

              // set the text of the blockly editor instance
              this.updateText();
              this.forceUpdate(function () {
                log.debug("Force updated editor.");
              });

              // listen for changes so that we can pass them back to Blockly
              _TextEditorFiles__WEBPACK_IMPORTED_MODULE_10__.textEditorFiles.onBlocklyChange = function () {
                // TODO: seems like this actually gets triggered 2 times
                log.debug("Blockly editor content changed...");
                _this2.props.onContentChange(_this2.getValue());
              };

              // make sure that the language system it set for the current config
              currentState = _AppInfo__WEBPACK_IMPORTED_MODULE_7__.appState.getAppState();
              _vexLanguageClient__WEBPACK_IMPORTED_MODULE_6__.Init(currentState.lang, "GO", currentState.targetMode, currentState.robotModel, currentState.hardwareTarget);

              // we seem to need this after the language client init so that it has the correct language for building the auto complete DB.
              this.updateText();
            case 19:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function textEditorInit() {
        return _textEditorInit.apply(this, arguments);
      }
      return textEditorInit;
    }()
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.textEditorInit();
            case 2:
              window.addEventListener("resize", refreshEditor, false);

              // we know that the widget is not ready on load, so start monitoring for it
              // we want to use the widget instead of the controller as the controller does
              // not seem to report the state correctly in the command listener.
              this.suggestionCheckInterval = setInterval(this.onCheckForSuggestionsWidget, 100);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }
      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // make sure we don't keep the interval running after the unmount
      if (this.suggestionCheckInterval) {
        clearInterval(this.suggestionCheckInterval);
        this.suggestionCheckInterval = null;
      }
      _TextEditorFiles__WEBPACK_IMPORTED_MODULE_10__.textEditorFiles.onBlocklyChange = null;
      window.removeEventListener("resize", refreshEditor, false);
      //clean existing model, so when switching from blocks to text will not cause duplicate model issue.
      //vexLanguageClient.deInit(); // disabled auto-complete for Feb 2020 Beta 
      cleanMonaco();
    }
  }, {
    key: "onCheckForSuggestionsWidget",
    value: function onCheckForSuggestionsWidget() {
      var _editor;
      this.suggestWidget = (_editor = this.getMonacoInstance().editor.editor) === null || _editor === void 0 || (_editor = _editor._contentWidgets["editor.widget.suggestWidget"]) === null || _editor === void 0 ? void 0 : _editor.widget;
      if (this.suggestWidget) {
        log.debug("found suggestWidget:", this.suggestWidget);
        clearInterval(this.suggestionCheckInterval);
        this.suggestionCheckInterval = null;
      }
    }
  }, {
    key: "generateConstructors",
    value: function generateConstructors() {
      var lang = _AppInfo__WEBPACK_IMPORTED_MODULE_7__.appState.getAppState().lang;
      if (_targetPlatform__WEBPACK_IMPORTED_MODULE_11__.targetIsPlaygrounds) {
        return "brain = Brain()" + "\n" + _codeGen__WEBPACK_IMPORTED_MODULE_9__.genPGConstructors();
      } else if (_targetPlatform__WEBPACK_IMPORTED_MODULE_11__.targetIsIQ) {
        return "brain = Brain()" + "\n" + _codeGen__WEBPACK_IMPORTED_MODULE_9__.genIQConstructors(lang);
      } else if (_targetPlatform__WEBPACK_IMPORTED_MODULE_11__.targetIsEXP) {
        return "brain = Brain()" + "\n" + _codeGen__WEBPACK_IMPORTED_MODULE_9__.genEXPConstructors(lang);
      } else if (_targetPlatform__WEBPACK_IMPORTED_MODULE_11__.targetIsV5) {
        return "brain = Brain()" + "\n" + _codeGen__WEBPACK_IMPORTED_MODULE_9__.genV5Constructors(lang);
      } else if (_targetPlatform__WEBPACK_IMPORTED_MODULE_11__.targetIsAIM) {
        return "robot = Robot()" + "\n" + _codeGen__WEBPACK_IMPORTED_MODULE_9__.genAIMHeaders(lang);
      } else if (_targetPlatform__WEBPACK_IMPORTED_MODULE_11__.targetIsAIR) {
        return "drone = Drone()" + "\n" + _codeGen__WEBPACK_IMPORTED_MODULE_9__.genAIRHeaders(lang);
      } else if (_targetPlatform__WEBPACK_IMPORTED_MODULE_11__.targetIsGO) {
        return _codeGen__WEBPACK_IMPORTED_MODULE_9__.genGOHeaders(lang);
      } else {
        log.error("Failed to generate a constructor / header for switch block.");
        return "";
      }
    }
  }, {
    key: "updateText",
    value: function updateText() {
      try {
        this.setValue(this.props.startingText);
        BlocklyTextEditor.monacoObject.editor.setModelMarkers(_TextEditorFiles__WEBPACK_IMPORTED_MODULE_10__.textEditorFiles.blocklyFile.buffer, "compiler", []);
        var header = this.generateConstructors();
        log.debug("header:", header);
        _TextEditorFiles__WEBPACK_IMPORTED_MODULE_10__.textEditorFiles.updateHeader(header);
        (0,_autocomplete_VEXContextBuilder__WEBPACK_IMPORTED_MODULE_5__.BuildContext)(_AppInfo__WEBPACK_IMPORTED_MODULE_7__.appState.getAppState().lang, "GO");
      } catch (ex) {
        //TODO show message in the text editor.
        if (ex.message !== "Your program is empty.") {
          log.error("error when generating code", ex);
        }
      }
    }
  }, {
    key: "wipeOutUndoRedoStack",
    value: function wipeOutUndoRedoStack() {
      // cruel & unofficial way to wipe out the stack, as there is no working official api for this at the time of implementation
      if (_TextEditorFiles__WEBPACK_IMPORTED_MODULE_10__.textEditorFiles.blocklyFile.buffer && _TextEditorFiles__WEBPACK_IMPORTED_MODULE_10__.textEditorFiles.blocklyFile.buffer._commandManager.past) {
        log.debug("clearing undo history..");
        _TextEditorFiles__WEBPACK_IMPORTED_MODULE_10__.textEditorFiles.blocklyFile.buffer._commandManager.past = [];
      }
      if (_TextEditorFiles__WEBPACK_IMPORTED_MODULE_10__.textEditorFiles.blocklyFile.buffer && _TextEditorFiles__WEBPACK_IMPORTED_MODULE_10__.textEditorFiles.blocklyFile.buffer._commandManager.future) {
        log.debug("clearing redo history..");
        _TextEditorFiles__WEBPACK_IMPORTED_MODULE_10__.textEditorFiles.blocklyFile.buffer._commandManager.future = [];
      }
    }
  }, {
    key: "getFile",
    value: function getFile() {
      return this._view.file;
    }
  }, {
    key: "isDirty",
    value: function isDirty() {
      return this._view.file.isDirty;
    }
  }, {
    key: "save",
    value: function save() {
      this._view.file.save();
    }
  }, {
    key: "getValue",
    value: function getValue() {
      this.save();
      return this._view.file.getData();
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      BlocklyTextEditor.monacoObject.editor.setModelMarkers(_TextEditorFiles__WEBPACK_IMPORTED_MODULE_10__.textEditorFiles.blocklyFile.buffer, "compiler", []);
      this._view.file.setData(value);
      this._view.file.save();
    }
  }, {
    key: "setEditorView",
    value: function setEditorView(editorView) {
      var _this3 = this;
      log.debug("setEditorView", editorView, this);
      if (this.currentEditorView && editorView) {
        return;
      }
      var wasSet = !!this.currentEditorView;
      this.currentEditorView = editorView;
      if (!editorView) {
        return;
      }
      if (!wasSet && this.onEditorLoad) {
        this.onEditorLoad();
      }

      // listen for escape key
      this.getMonacoInstance().editor.addCommand(BlocklyTextEditor.monacoObject.KeyCode.Escape, function () {
        var _this3$suggestWidget, _this3$suggestWidget2;
        // We need to see if the suggestions widget is open. if it is, then we
        // close it instead as this "command" overwrites the escape listener
        // for the suggestions widget.
        var isSuggestionsShown = ((_this3$suggestWidget = _this3.suggestWidget) === null || _this3$suggestWidget === void 0 ? void 0 : _this3$suggestWidget.state) !== 0;
        log.debug("monaco escape button detected - suggestion state:", (_this3$suggestWidget2 = _this3.suggestWidget) === null || _this3$suggestWidget2 === void 0 ? void 0 : _this3$suggestWidget2.state, isSuggestionsShown);
        if (isSuggestionsShown) {
          var suggestController = _this3.getMonacoInstance().editor.getContribution('editor.contrib.suggestController');
          // This is not documented or seen when you log the instance, but it
          // does exist in the code and does actually close the suggestion.
          suggestController.cancelSuggestWidget();
        } else {
          // we don't have the suggestions open, so cancel the edit if possible.
          if (_this3.props.onCancel) {
            _this3.props.onCancel();
          }
        }
      }, null);
      // hide cursor gutter
      // TODO - remove this when updating Monaco to the latest. 
      // when updating Monaco :
      // gutter hiding would automatically work since editor options already has the correct settings for that "overviewRulerLanes : 0"
      this.currentEditorView.hideCursorOverviewRulerLane();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var fontSize = 16 * this.props.scale + "px";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        style: {
          position: "absolute",
          "height": "100%",
          width: "100%",
          direction: "ltr"
        }
      }, this._view && this._view.file && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_editor__WEBPACK_IMPORTED_MODULE_2__.EditorView, {
        ref: function ref(_ref) {
          return _this4.setEditorView(_ref);
        },
        view: this._view,
        primary: true,
        options: {
          // disable the line numbers ant the left gutter area
          lineNumbers: "off",
          glyphMargin: false,
          folding: false,
          lineDecorationsWidth: 5,
          lineNumbersMinChars: 0,
          // set the font size to match blockly
          fontSize: fontSize,
          // hide the scrollbars
          scrollbar: {
            vertical: "hidden",
            horizontal: "hidden"
          },
          // disable the minimap
          minimap: {
            enabled: false
          },
          // prevent scrolling such that some text is hidden
          scrollBeyondLastLine: false,
          scrollBeyondLastColumn: 0,
          // disable the overview that is on the right side
          overviewRulerLanes: 0,
          overviewRulerBorder: false
          // hideCursorInOverviewRuler: true
        }
      }));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_1__.Component); // TODO: move these functions to a helper file as they are used in 2 places
// this is a hack
// in NWJS, this file seems to be unable to get the global monaco object.
// but the blocklyFile.tsx file has it, so before we create an instance there,
// we are able to set this static value so that we know that we have the actual
// object. this is far from ideal, but it works until we switch away from NWJS.
_defineProperty(BlocklyTextEditor, "monacoObject", null);
var layoutThrottleDuration = 10;
var layoutTimeout = undefined;
function refreshEditor() {
  log.debug("editor refresh called!");
  if (layoutTimeout) {
    window.clearTimeout(layoutTimeout);
  }
  layoutTimeout = window.setTimeout(function () {
    layoutTimeout = undefined;
    log.debug("dispatching layout event..");
    document.dispatchEvent(new Event("layout"));
  }, layoutThrottleDuration);
}
// do the model cleanup only when all the editor's content are saved.
function cleanMonaco() {
  try {
    log.debug("cleaning Monaco..");
    var monacoModels = BlocklyTextEditor.monacoObject.editor.getModels();
    for (var i = 0; i < monacoModels.length; i++) {
      log.debug(monacoModels[i]);
      // vexpro authority files are not disposed
      // used for things like output ansd terminal
      // TODO: make sure to set the authority for out put and terminal as vexpro.
      // TODO: External models ( for GoToDef ,peek etc ) needs to disposed when those features added in future
      if (monacoModels[i].uri.authority != "vexcode") {
        monacoModels[i].dispose(); // in theory this is supposed to release the model for GC cleanup, so that new project
      }
    }
  } catch (e) {
    log.error("Error during monaco model disposal : ", e);
  }
}


/***/ })

}]);
//# sourceMappingURL=08c9d421231eb5b0c848.src_texteditor_blocklyTextEditor_tsx.bundle.js.map