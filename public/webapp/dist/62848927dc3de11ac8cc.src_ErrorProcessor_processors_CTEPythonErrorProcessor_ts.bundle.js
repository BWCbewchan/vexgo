"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_ErrorProcessor_processors_CTEPythonErrorProcessor_ts"],{

/***/ "./src/ErrorProcessor/processors/CTEPythonErrorProcessor.ts":
/*!******************************************************************!*\
  !*** ./src/ErrorProcessor/processors/CTEPythonErrorProcessor.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CTEPythonErrorProcessor: () => (/* binding */ CTEPythonErrorProcessor)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ErrorProcessor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorProcessor */ "./src/ErrorProcessor/ErrorProcessor.ts");
/* harmony import */ var _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommonPythonErrorFunctions */ "./src/ErrorProcessor/processors/CommonPythonErrorFunctions.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("CTEPythonErrorProcessor");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();



var CTEPythonErrorProcessor = /*#__PURE__*/function (_ErrorProcessor) {
  function CTEPythonErrorProcessor() {
    var _this;
    _classCallCheck(this, CTEPythonErrorProcessor);
    _this = _callSuper(this, CTEPythonErrorProcessor);
    _defineProperty(_this, "checkFunctions", []);
    log.debug("Linter Using: CTEPythonErrorProcessor");

    // add more error check functions here
    _this.checkFunctions = [_CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkIndentationError, _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkSyntaxError, _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkTypeError, _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkValueError, _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkNameError, _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkAttributeError, _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkZeroDivisionError, CTEFunctions.checkInvalidPositionError, CTEFunctions.checkInvalidPathException, CTEFunctions.checkControlStopException, CTEFunctions.checkZeroNeededException, CTEFunctions.checkInvalidPoseTransition, CTEFunctions.checkInvalidParameterException, CTEFunctions.checkCommandFailedException,
    // this is a catch all. actual error parsing should be before this
    _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkGenericError];
    return _this;
  }
  _inherits(CTEPythonErrorProcessor, _ErrorProcessor);
  return _createClass(CTEPythonErrorProcessor, [{
    key: "preprocessData",
    value: function preprocessData(errorData) {
      // TODO: extend this if needed
      return errorData;
    }
  }, {
    key: "processData",
    value: function processData(errorData) {
      var output = [];
      log.debug(errorData); //log the full error data.

      for (var lineNumber = 0; lineNumber < errorData.length; lineNumber++) {
        var currentLine = errorData[lineNumber];
        var _iterator = _createForOfIteratorHelper(this.checkFunctions),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var checkFunction = _step.value;
            var result = checkFunction(errorData, currentLine, lineNumber);
            if (result) {
              output.push(result);
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return output;
    }
  }]);
}(_ErrorProcessor__WEBPACK_IMPORTED_MODULE_1__.ErrorProcessor);


//#region - CTE functions

/**
 * will check to see if the line indicates that there is a syntax error
 * @param allData all the lines to check
 * @param currentLine the string of the current line
 * @param currentLineNumber the line number that should be checked right now
 * @returns null if does not match error or the data if a syntax error is found
 */
function checkInvalidPositionError(allData, currentLine, lineNumber) {
  if (!currentLine.startsWith("cte.InvalidPositionException: ")) {
    // not a syntax error
    return null;
  }
  var column = 0;
  var line = -1;
  var startLine = -1;
  var checkLineNumber = lineNumber;

  // search for the line number, column number and start of the error
  while (startLine === -1) {
    checkLineNumber--;
    if (checkLineNumber < 0) {
      log.warn("unable to fine a line number????");
      break;
    }
    var checkLine = allData[checkLineNumber];
    if (line === -1 && checkLine.startsWith("  line ")) {
      line = parseInt(checkLine.split("line ")[1], 10);
      var arrowLine = allData[checkLineNumber + 2];
      var columnTmp = arrowLine.indexOf("^");
      if (columnTmp >= 0) {
        column = columnTmp;
      }
    } else if (checkLine === "Traceback (most recent call last):") {
      startLine = checkLineNumber;
    }
  }
  var blockId = _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkErrorBlockID(allData);
  return {
    column: column,
    line: line,
    blockId: blockId,
    message: "Invalid Position: Cannot reach the requested destination.",
    blockMessage: "Syntax Error: \n Check for missing or incorrect syntax, \n such as missing parentheses, brackets, or quotation marks.",
    type: "error",
    startLine: startLine,
    endLine: lineNumber
  };
}

/**
 * will check to see if the line indicates that there is a syntax error
 * @param allData all the lines to check
 * @param currentLine the string of the current line
 * @param currentLineNumber the line number that should be checked right now
 * @returns null if does not match error or the data if a syntax error is found
 */
function checkInvalidPathException(allData, currentLine, lineNumber) {
  if (!currentLine.startsWith("cte.InvalidPathException: ")) {
    // not a syntax error
    return null;
  }
  var column = 0;
  var line = -1;
  var startLine = -1;
  var checkLineNumber = lineNumber;

  // search for the line number, column number and start of the error
  while (startLine === -1) {
    checkLineNumber--;
    if (checkLineNumber < 0) {
      log.warn("unable to fine a line number????");
      break;
    }
    var checkLine = allData[checkLineNumber];
    if (line === -1 && checkLine.startsWith("  line ")) {
      line = parseInt(checkLine.split("line ")[1], 10);
      var arrowLine = allData[checkLineNumber + 2];
      var columnTmp = arrowLine.indexOf("^");
      if (columnTmp >= 0) {
        column = columnTmp;
      }
    } else if (checkLine === "Traceback (most recent call last):") {
      startLine = checkLineNumber;
    }
  }
  var blockId = _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkErrorBlockID(allData);
  return {
    column: column,
    line: line,
    blockId: blockId,
    message: "Invalid Path: Cannot reach the requested path.",
    blockMessage: "Syntax Error: \n Check for missing or incorrect syntax, \n such as missing parentheses, brackets, or quotation marks.",
    type: "error",
    startLine: startLine,
    endLine: lineNumber
  };
}

/**
 * will check to see if the line indicates that there is a syntax error
 * @param allData all the lines to check
 * @param currentLine the string of the current line
 * @param currentLineNumber the line number that should be checked right now
 * @returns null if does not match error or the data if a syntax error is found
 */
function checkControlStopException(allData, currentLine, lineNumber) {
  if (!currentLine.startsWith("cte.ControlStopException: ")) {
    // not a syntax error
    return null;
  }
  var column = 0;
  var line = -1;
  var startLine = -1;
  var checkLineNumber = lineNumber;

  // search for the line number, column number and start of the error
  while (startLine === -1) {
    checkLineNumber--;
    if (checkLineNumber < 0) {
      log.warn("unable to fine a line number????");
      break;
    }
    var checkLine = allData[checkLineNumber];
    if (line === -1 && checkLine.startsWith("  line ")) {
      line = parseInt(checkLine.split("line ")[1], 10);
      var arrowLine = allData[checkLineNumber + 2];
      var columnTmp = arrowLine.indexOf("^");
      if (columnTmp >= 0) {
        column = columnTmp;
      }
    } else if (checkLine === "Traceback (most recent call last):") {
      startLine = checkLineNumber;
    }
  }
  var blockId = _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkErrorBlockID(allData);
  return {
    column: column,
    line: line,
    blockId: blockId,
    message: "Invalid Position Requested: 6-Axis Arm cannot reach the requested destination.",
    blockMessage: "Syntax Error: \n Check for missing or incorrect syntax, \n such as missing parentheses, brackets, or quotation marks.",
    type: "error",
    startLine: startLine,
    endLine: lineNumber
  };
}

/**
 * will check to see if the line indicates that there is a syntax error
 * @param allData all the lines to check
 * @param currentLine the string of the current line
 * @param currentLineNumber the line number that should be checked right now
 * @returns null if does not match error or the data if a syntax error is found
 */
function checkZeroNeededException(allData, currentLine, lineNumber) {
  if (!currentLine.startsWith("cte.ZeroNeededException: ")) {
    // not a syntax error
    return null;
  }
  var column = 0;
  var line = -1;
  var startLine = -1;
  var checkLineNumber = lineNumber;

  // search for the line number, column number and start of the error
  while (startLine === -1) {
    checkLineNumber--;
    if (checkLineNumber < 0) {
      log.warn("unable to fine a line number????");
      break;
    }
    var checkLine = allData[checkLineNumber];
    if (line === -1 && checkLine.startsWith("  line ")) {
      line = parseInt(checkLine.split("line ")[1], 10);
      var arrowLine = allData[checkLineNumber + 2];
      var columnTmp = arrowLine.indexOf("^");
      if (columnTmp >= 0) {
        column = columnTmp;
      }
    } else if (checkLine === "Traceback (most recent call last):") {
      startLine = checkLineNumber;
    }
  }
  var blockId = _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkErrorBlockID(allData);
  return {
    column: column,
    line: line,
    blockId: blockId,
    message: "Arm Not Zeroed: Zero the arm before executing commands.",
    blockMessage: "Syntax Error: \n Check for missing or incorrect syntax, \n such as missing parentheses, brackets, or quotation marks.",
    type: "error",
    startLine: startLine,
    endLine: lineNumber
  };
}

/**
 * will check to see if the line indicates that there is a syntax error
 * @param allData all the lines to check
 * @param currentLine the string of the current line
 * @param currentLineNumber the line number that should be checked right now
 * @returns null if does not match error or the data if a syntax error is found
 */
function checkCommandFailedException(allData, currentLine, lineNumber) {
  if (!currentLine.startsWith("cte.CommandFailedException: ")) {
    // not a syntax error
    return null;
  }
  var column = 0;
  var line = -1;
  var startLine = -1;
  var checkLineNumber = lineNumber;

  // search for the line number, column number and start of the error
  while (startLine === -1) {
    checkLineNumber--;
    if (checkLineNumber < 0) {
      log.warn("unable to fine a line number????");
      break;
    }
    var checkLine = allData[checkLineNumber];
    if (line === -1 && checkLine.startsWith("  line ")) {
      line = parseInt(checkLine.split("line ")[1], 10);
      var arrowLine = allData[checkLineNumber + 2];
      var columnTmp = arrowLine.indexOf("^");
      if (columnTmp >= 0) {
        column = columnTmp;
      }
    } else if (checkLine === "Traceback (most recent call last):") {
      startLine = checkLineNumber;
    }
  }
  var blockId = _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkErrorBlockID(allData);
  return {
    column: column,
    line: line,
    blockId: blockId,
    message: "Command Failed: Cannot complete due to an unknown error.",
    blockMessage: "Syntax Error: \n Check for missing or incorrect syntax, \n such as missing parentheses, brackets, or quotation marks.",
    type: "error",
    startLine: startLine,
    endLine: lineNumber
  };
}

/**
 * will check to see if the line indicates that there is a syntax error
 * @param allData all the lines to check
 * @param currentLine the string of the current line
 * @param currentLineNumber the line number that should be checked right now
 * @returns null if does not match error or the data if a syntax error is found
 */
function checkCommandFailedToStartError(allData, currentLine, lineNumber) {
  if (!currentLine.startsWith("cte.CommandFailedException: ") && !currentLine.includes("CommandFailedToStartError")) {
    // not a syntax error
    return null;
  }
  var column = 0;
  var line = -1;
  var startLine = -1;
  var checkLineNumber = lineNumber;

  // search for the line number, column number and start of the error
  while (startLine === -1) {
    checkLineNumber--;
    if (checkLineNumber < 0) {
      log.warn("unable to fine a line number????");
      break;
    }
    var checkLine = allData[checkLineNumber];
    if (line === -1 && checkLine.startsWith("  line ")) {
      line = parseInt(checkLine.split("line ")[1], 10);
      var arrowLine = allData[checkLineNumber + 2];
      var columnTmp = arrowLine.indexOf("^");
      if (columnTmp >= 0) {
        column = columnTmp;
      }
    } else if (checkLine === "Traceback (most recent call last):") {
      startLine = checkLineNumber;
    }
  }
  var blockId = _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkErrorBlockID(allData);
  return {
    column: column,
    line: line,
    blockId: blockId,
    message: "Command Failed to Start: 6-Axis Arm command cannot complete due to command failing to start.",
    blockMessage: "Syntax Error: \n Check for missing or incorrect syntax, \n such as missing parentheses, brackets, or quotation marks.",
    type: "error",
    startLine: startLine,
    endLine: lineNumber
  };
}

/**
 * will check to see if the line indicates that there is a syntax error
 * @param allData all the lines to check
 * @param currentLine the string of the current line
 * @param currentLineNumber the line number that should be checked right now
 * @returns null if does not match error or the data if a syntax error is found
 */
function checkInvalidParameterException(allData, currentLine, lineNumber) {
  if (!currentLine.startsWith("cte.InvalidParameterException: ")) {
    // not a syntax error
    return null;
  }
  var column = 0;
  var line = -1;
  var startLine = -1;
  var checkLineNumber = lineNumber;
  var newMessage = currentLine.replace("cte.InvalidParameterException: ", "");

  // search for the line number, column number and start of the error
  while (startLine === -1) {
    checkLineNumber--;
    if (checkLineNumber < 0) {
      log.warn("unable to fine a line number????");
      break;
    }
    var checkLine = allData[checkLineNumber];
    if (line === -1 && checkLine.startsWith('File "<exec>", ')) {
      line = parseInt(checkLine.split("line ")[1], 10);
      var arrowLine = allData[checkLineNumber + 2];
      var columnTmp = arrowLine.indexOf("^");
      if (columnTmp >= 0) {
        column = columnTmp;
      }
    } else if (checkLine === "Traceback (most recent call last):") {
      startLine = checkLineNumber;
    }
  }
  var blockId = _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkErrorBlockID(allData);
  return {
    column: column,
    line: line,
    blockId: blockId,
    message: newMessage,
    blockMessage: "Syntax Error: \n Check for missing or incorrect syntax, \n such as missing parentheses, brackets, or quotation marks.",
    type: "error",
    startLine: startLine,
    endLine: lineNumber
  };
}

/**
 * will check to see if the line indicates that there is a invalid pose transition error
 * @param allData all the lines to check
 * @param currentLine the string of the current line
 * @param currentLineNumber the line number that should be checked right now
 * @returns null if does not match error or the data if a syntax error is found
 */
function checkInvalidPoseTransition(allData, currentLine, lineNumber) {
  if (!currentLine.startsWith("cte.InvalidPoseTransition: ")) {
    // not a syntax error
    return null;
  }
  var column = 0;
  var line = -1;
  var startLine = -1;
  var checkLineNumber = lineNumber;

  // search for the line number, column number and start of the error
  while (startLine === -1) {
    checkLineNumber--;
    if (checkLineNumber < 0) {
      log.warn("unable to fine a line number????");
      break;
    }
    var checkLine = allData[checkLineNumber];
    if (line === -1 && checkLine.startsWith("  line ")) {
      line = parseInt(checkLine.split("line ")[1], 10);
      var arrowLine = allData[checkLineNumber + 2];
      var columnTmp = arrowLine.indexOf("^");
      if (columnTmp >= 0) {
        column = columnTmp;
      }
    } else if (checkLine === "Traceback (most recent call last):") {
      startLine = checkLineNumber;
    }
  }
  var blockId = _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkErrorBlockID(allData);
  return {
    column: column,
    line: line,
    blockId: blockId,
    message: "Invalid Pose: Cannot reach the requested pose position.",
    blockMessage: "Syntax Error: \n Check for missing or incorrect syntax, \n such as missing parentheses, brackets, or quotation marks.",
    type: "error",
    startLine: startLine,
    endLine: lineNumber
  };
}
//#endregion - CTE functions

var CTEFunctions = {
  checkInvalidPositionError: checkInvalidPositionError,
  checkInvalidPathException: checkInvalidPathException,
  checkControlStopException: checkControlStopException,
  checkZeroNeededException: checkZeroNeededException,
  checkCommandFailedException: checkCommandFailedException,
  checkInvalidParameterException: checkInvalidParameterException,
  checkInvalidPoseTransition: checkInvalidPoseTransition
};

/***/ })

}]);
//# sourceMappingURL=62848927dc3de11ac8cc.src_ErrorProcessor_processors_CTEPythonErrorProcessor_ts.bundle.js.map