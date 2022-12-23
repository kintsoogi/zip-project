"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _zipUsfmHelpers = require("../utils/zipUsfmHelpers");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Constants
var CANCEL_FILE_OPEN_ERROR = "Cannot read properties of undefined (reading 'type')";
var FILE_LOADED = "FILE_LOADED";
var INIT = "INIT";
var INVALID_FILE = "INVALID_FILE";
var UPLOAD_ERROR = "UPLOAD_ERROR";
var UPLOAD_SUCCESS = "UPLOAD_SUCCESS";
var initialState = {
  status: "idle",
  file: null,
  isLoading: false,
  usfmData: null,
  invalidFileType: "",
  uploadError: null
};
var reducer = function reducer(state, action) {
  switch (action.type) {
    case "upload":
      return _objectSpread(_objectSpread({}, state), {}, {
        file: action.file,
        status: FILE_LOADED
      });
    case "submit":
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true,
        status: INIT
      });
    case "file-uploaded":
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        usfmData: action.usfmData,
        status: UPLOAD_SUCCESS
      });
    case "invalid-file":
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        invalidFileType: action.fileType,
        status: INVALID_FILE
      });
    case "upload-error":
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        uploadError: action.error,
        status: UPLOAD_ERROR
      });
    default:
      return state;
  }
};
var useZipUsfmFileInput = function useZipUsfmFileInput() {
  var handleZipLoad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (usfmData, file) {
    console.log(file);
    console.log(usfmData);
  };
  var shouldValidate = arguments.length > 1 ? arguments[1] : undefined;
  var _useReducer = (0, _react.useReducer)(reducer, initialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var onSubmit = function onSubmit() {
    if (state.file) {
      dispatch({
        type: "submit"
      });
    } else {
      window.alert("No zip file has been input!");
    }
  };
  var onChange = function onChange(e) {
    if (e.target.files[0]) {
      dispatch({
        type: "upload",
        file: e.target.files[0]
      });
    }
  };

  // When user has submitted the file, proccess it, validate it, and call parameter function
  // to store it.
  (0, _react.useEffect)(function () {
    var processFile = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var arrayBuffer, usfmData, usfmValidatedData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(state.file && state.isLoading)) {
                _context.next = 29;
                break;
              }
              _context.prev = 1;
              if (!state.file.type.includes("zip")) {
                _context.next = 23;
                break;
              }
              _context.next = 5;
              return state.file.arrayBuffer();
            case 5:
              arrayBuffer = _context.sent;
              _context.next = 8;
              return (0, _zipUsfmHelpers.arrayBufferToUsfmData)(arrayBuffer);
            case 8:
              usfmData = _context.sent;
              if (usfmData.length) {
                _context.next = 12;
                break;
              }
              dispatch({
                type: "invalid-file",
                fileType: "Zip file with no usfm files was uploaded!"
              });
              return _context.abrupt("return");
            case 12:
              if (!shouldValidate) {
                _context.next = 20;
                break;
              }
              usfmValidatedData = (0, _zipUsfmHelpers.validateUsfmData)(usfmData);
              if (usfmValidatedData.length) {
                _context.next = 17;
                break;
              }
              dispatch({
                type: "invalid-file",
                fileType: "All USFM files within the zip were invalid!"
              });
              return _context.abrupt("return");
            case 17:
              dispatch({
                type: "file-uploaded",
                usfmData: usfmValidatedData
              });
              _context.next = 21;
              break;
            case 20:
              dispatch({
                type: "file-uploaded",
                usfmData: usfmData
              });
            case 21:
              _context.next = 24;
              break;
            case 23:
              dispatch({
                type: "invalid-file",
                fileType: "Non-zip file was uploaded!"
              });
            case 24:
              _context.next = 29;
              break;
            case 26:
              _context.prev = 26;
              _context.t0 = _context["catch"](1);
              if (_context.t0.message !== CANCEL_FILE_OPEN_ERROR) {
                console.error(_context.t0);
                dispatch({
                  type: "upload-error",
                  error: _context.t0
                });
              }
            case 29:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 26]]);
      }));
      return function processFile() {
        return _ref.apply(this, arguments);
      };
    }();
    processFile();
  }, [state.file, state.isLoading, shouldValidate]);

  // Run callback function when usfm data is successfully uploaded
  (0, _react.useEffect)(function () {
    if (state.usfmData) handleZipLoad(state.usfmData, state.file);
  }, [state.usfmData, state.file, handleZipLoad]);
  return _objectSpread(_objectSpread({}, state), {}, {
    onChange: onChange,
    onSubmit: onSubmit
  });
};
var _default = useZipUsfmFileInput;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDQU5DRUxfRklMRV9PUEVOX0VSUk9SIiwiRklMRV9MT0FERUQiLCJJTklUIiwiSU5WQUxJRF9GSUxFIiwiVVBMT0FEX0VSUk9SIiwiVVBMT0FEX1NVQ0NFU1MiLCJpbml0aWFsU3RhdGUiLCJzdGF0dXMiLCJmaWxlIiwiaXNMb2FkaW5nIiwidXNmbURhdGEiLCJpbnZhbGlkRmlsZVR5cGUiLCJ1cGxvYWRFcnJvciIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJmaWxlVHlwZSIsImVycm9yIiwidXNlWmlwVXNmbUZpbGVJbnB1dCIsImhhbmRsZVppcExvYWQiLCJjb25zb2xlIiwibG9nIiwic2hvdWxkVmFsaWRhdGUiLCJ1c2VSZWR1Y2VyIiwiZGlzcGF0Y2giLCJvblN1Ym1pdCIsIndpbmRvdyIsImFsZXJ0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJ1c2VFZmZlY3QiLCJwcm9jZXNzRmlsZSIsImluY2x1ZGVzIiwiYXJyYXlCdWZmZXIiLCJhcnJheUJ1ZmZlclRvVXNmbURhdGEiLCJsZW5ndGgiLCJ1c2ZtVmFsaWRhdGVkRGF0YSIsInZhbGlkYXRlVXNmbURhdGEiLCJtZXNzYWdlIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hvb2tzL3VzZS16aXAtdXNmbS1maWxlLWlucHV0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcbiAgYXJyYXlCdWZmZXJUb1VzZm1EYXRhLFxuICB2YWxpZGF0ZVVzZm1EYXRhLFxufSBmcm9tIFwiLi4vdXRpbHMvemlwVXNmbUhlbHBlcnNcIjtcblxuLy8gQ29uc3RhbnRzXG5jb25zdCBDQU5DRUxfRklMRV9PUEVOX0VSUk9SID1cbiAgXCJDYW5ub3QgcmVhZCBwcm9wZXJ0aWVzIG9mIHVuZGVmaW5lZCAocmVhZGluZyAndHlwZScpXCI7XG5jb25zdCBGSUxFX0xPQURFRCA9IFwiRklMRV9MT0FERURcIjtcbmNvbnN0IElOSVQgPSBcIklOSVRcIjtcbmNvbnN0IElOVkFMSURfRklMRSA9IFwiSU5WQUxJRF9GSUxFXCI7XG5jb25zdCBVUExPQURfRVJST1IgPSBcIlVQTE9BRF9FUlJPUlwiO1xuY29uc3QgVVBMT0FEX1NVQ0NFU1MgPSBcIlVQTE9BRF9TVUNDRVNTXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc3RhdHVzOiBcImlkbGVcIixcbiAgZmlsZTogbnVsbCxcbiAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgdXNmbURhdGE6IG51bGwsXG4gIGludmFsaWRGaWxlVHlwZTogXCJcIixcbiAgdXBsb2FkRXJyb3I6IG51bGwsXG59O1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJ1cGxvYWRcIjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmaWxlOiBhY3Rpb24uZmlsZSwgc3RhdHVzOiBGSUxFX0xPQURFRCB9O1xuICAgIGNhc2UgXCJzdWJtaXRcIjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0xvYWRpbmc6IHRydWUsIHN0YXR1czogSU5JVCB9O1xuICAgIGNhc2UgXCJmaWxlLXVwbG9hZGVkXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgdXNmbURhdGE6IGFjdGlvbi51c2ZtRGF0YSxcbiAgICAgICAgc3RhdHVzOiBVUExPQURfU1VDQ0VTUyxcbiAgICAgIH07XG4gICAgY2FzZSBcImludmFsaWQtZmlsZVwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgIGludmFsaWRGaWxlVHlwZTogYWN0aW9uLmZpbGVUeXBlLFxuICAgICAgICBzdGF0dXM6IElOVkFMSURfRklMRSxcbiAgICAgIH07XG4gICAgY2FzZSBcInVwbG9hZC1lcnJvclwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgIHVwbG9hZEVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgIHN0YXR1czogVVBMT0FEX0VSUk9SLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCB1c2VaaXBVc2ZtRmlsZUlucHV0ID0gKFxuICBoYW5kbGVaaXBMb2FkID0gKHVzZm1EYXRhLCBmaWxlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZmlsZSk7XG4gICAgY29uc29sZS5sb2codXNmbURhdGEpO1xuICB9LFxuICBzaG91bGRWYWxpZGF0ZVxuKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKCkgPT4ge1xuICAgIGlmIChzdGF0ZS5maWxlKSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwic3VibWl0XCIgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5hbGVydChcIk5vIHppcCBmaWxlIGhhcyBiZWVuIGlucHV0IVwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5maWxlc1swXSkge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcInVwbG9hZFwiLCBmaWxlOiBlLnRhcmdldC5maWxlc1swXSB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gV2hlbiB1c2VyIGhhcyBzdWJtaXR0ZWQgdGhlIGZpbGUsIHByb2NjZXNzIGl0LCB2YWxpZGF0ZSBpdCwgYW5kIGNhbGwgcGFyYW1ldGVyIGZ1bmN0aW9uXG4gIC8vIHRvIHN0b3JlIGl0LlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHByb2Nlc3NGaWxlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKHN0YXRlLmZpbGUgJiYgc3RhdGUuaXNMb2FkaW5nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHN0YXRlLmZpbGUudHlwZS5pbmNsdWRlcyhcInppcFwiKSkge1xuICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBzdGF0ZS5maWxlLmFycmF5QnVmZmVyKCk7XG4gICAgICAgICAgICBjb25zdCB1c2ZtRGF0YSA9IGF3YWl0IGFycmF5QnVmZmVyVG9Vc2ZtRGF0YShhcnJheUJ1ZmZlcik7XG5cbiAgICAgICAgICAgIGlmICghdXNmbURhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImludmFsaWQtZmlsZVwiLFxuICAgICAgICAgICAgICAgIGZpbGVUeXBlOiBcIlppcCBmaWxlIHdpdGggbm8gdXNmbSBmaWxlcyB3YXMgdXBsb2FkZWQhXCIsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRWYWxpZGF0ZSkge1xuICAgICAgICAgICAgICBjb25zdCB1c2ZtVmFsaWRhdGVkRGF0YSA9IHZhbGlkYXRlVXNmbURhdGEodXNmbURhdGEpO1xuICAgICAgICAgICAgICBpZiAoIXVzZm1WYWxpZGF0ZWREYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaW52YWxpZC1maWxlXCIsXG4gICAgICAgICAgICAgICAgICBmaWxlVHlwZTogXCJBbGwgVVNGTSBmaWxlcyB3aXRoaW4gdGhlIHppcCB3ZXJlIGludmFsaWQhXCIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZpbGUtdXBsb2FkZWRcIixcbiAgICAgICAgICAgICAgICB1c2ZtRGF0YTogdXNmbVZhbGlkYXRlZERhdGEsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZmlsZS11cGxvYWRlZFwiLFxuICAgICAgICAgICAgICAgIHVzZm1EYXRhOiB1c2ZtRGF0YSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgdHlwZTogXCJpbnZhbGlkLWZpbGVcIixcbiAgICAgICAgICAgICAgZmlsZVR5cGU6IFwiTm9uLXppcCBmaWxlIHdhcyB1cGxvYWRlZCFcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBpZiAoZXJyb3IubWVzc2FnZSAhPT0gQ0FOQ0VMX0ZJTEVfT1BFTl9FUlJPUikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwidXBsb2FkLWVycm9yXCIsIGVycm9yIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgcHJvY2Vzc0ZpbGUoKTtcbiAgfSwgW3N0YXRlLmZpbGUsIHN0YXRlLmlzTG9hZGluZywgc2hvdWxkVmFsaWRhdGVdKTtcblxuICAvLyBSdW4gY2FsbGJhY2sgZnVuY3Rpb24gd2hlbiB1c2ZtIGRhdGEgaXMgc3VjY2Vzc2Z1bGx5IHVwbG9hZGVkXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0YXRlLnVzZm1EYXRhKSBoYW5kbGVaaXBMb2FkKHN0YXRlLnVzZm1EYXRhLCBzdGF0ZS5maWxlKTtcbiAgfSwgW3N0YXRlLnVzZm1EYXRhLCBzdGF0ZS5maWxlLCBoYW5kbGVaaXBMb2FkXSk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBvbkNoYW5nZSxcbiAgICBvblN1Ym1pdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVppcFVzZm1GaWxlSW5wdXQ7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7QUFHaUM7QUFBQSwrQ0FKakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0EsSUFBTUEsc0JBQXNCLEdBQzFCLHNEQUFzRDtBQUN4RCxJQUFNQyxXQUFXLEdBQUcsYUFBYTtBQUNqQyxJQUFNQyxJQUFJLEdBQUcsTUFBTTtBQUNuQixJQUFNQyxZQUFZLEdBQUcsY0FBYztBQUNuQyxJQUFNQyxZQUFZLEdBQUcsY0FBYztBQUNuQyxJQUFNQyxjQUFjLEdBQUcsZ0JBQWdCO0FBRXZDLElBQU1DLFlBQVksR0FBRztFQUNuQkMsTUFBTSxFQUFFLE1BQU07RUFDZEMsSUFBSSxFQUFFLElBQUk7RUFDVkMsU0FBUyxFQUFFLEtBQUs7RUFDaEJDLFFBQVEsRUFBRSxJQUFJO0VBQ2RDLGVBQWUsRUFBRSxFQUFFO0VBQ25CQyxXQUFXLEVBQUU7QUFDZixDQUFDO0FBRUQsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQU8sQ0FBSUMsS0FBSyxFQUFFQyxNQUFNLEVBQUs7RUFDakMsUUFBUUEsTUFBTSxDQUFDQyxJQUFJO0lBQ2pCLEtBQUssUUFBUTtNQUNYLHVDQUFZRixLQUFLO1FBQUVOLElBQUksRUFBRU8sTUFBTSxDQUFDUCxJQUFJO1FBQUVELE1BQU0sRUFBRU47TUFBVztJQUMzRCxLQUFLLFFBQVE7TUFDWCx1Q0FBWWEsS0FBSztRQUFFTCxTQUFTLEVBQUUsSUFBSTtRQUFFRixNQUFNLEVBQUVMO01BQUk7SUFDbEQsS0FBSyxlQUFlO01BQ2xCLHVDQUNLWSxLQUFLO1FBQ1JMLFNBQVMsRUFBRSxLQUFLO1FBQ2hCQyxR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