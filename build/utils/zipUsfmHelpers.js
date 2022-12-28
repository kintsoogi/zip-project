"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUsfmData = exports.usfmDataToFileData = exports.arrayBufferToUsfmData = void 0;
var _usfmGrammar = _interopRequireDefault(require("usfm-grammar"));
var _jszip = _interopRequireDefault(require("jszip"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var USFM_REGEX = /([a-zA-Z0-9\s_\\.\-():])+(.usfm)$/i;
var BOOK_ID_REGEX = /^\\id ([A-Z0-9]{3})/;
var isValidUsfmFile = function isValidUsfmFile(usfmText) {
  var usfmParser = new _usfmGrammar["default"].USFMParser(usfmText, _usfmGrammar["default"].LEVEL.RELAXED);
  return usfmParser.validate();
};
var validateUsfmData = function validateUsfmData(usfmData) {
  var usfmValidatedData = usfmData.filter(function (usfmObj) {
    return isValidUsfmFile(usfmObj.usfmText);
  });
  return usfmValidatedData;
};
exports.validateUsfmData = validateUsfmData;
var getUsfmTexts = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(zip) {
    var usfmPromises;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          usfmPromises = zip.file(USFM_REGEX)
          // Transforms zip file objects to promises to get file data
          .map(function (zipObj) {
            return zipObj.async('string');
          });
          _context.next = 3;
          return Promise.all(usfmPromises);
        case 3:
          return _context.abrupt("return", _context.sent);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getUsfmTexts(_x) {
    return _ref.apply(this, arguments);
  };
}();
var extractBookIdFromText = function extractBookIdFromText(usfmText) {
  try {
    var found = usfmText.match(BOOK_ID_REGEX);
    var textBookId = found[1];
    return textBookId;
  } catch (error) {
    throw new Error('USFM Text Invalid! ~ Did not contain Book ID');
  }
};
var arrayBufferToUsfmData = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(zipArrayBuffer) {
    var zip, usfmTexts, usfmDataArray;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _jszip["default"].loadAsync(zipArrayBuffer);
        case 2:
          zip = _context2.sent;
          _context2.next = 5;
          return getUsfmTexts(zip);
        case 5:
          usfmTexts = _context2.sent;
          usfmDataArray = zip.file(USFM_REGEX).map(function (zipObj, fileIndex) {
            return {
              filename: zipObj.name,
              usfmText: usfmTexts[fileIndex],
              bookId: extractBookIdFromText(usfmTexts[fileIndex])
            };
          });
          return _context2.abrupt("return", usfmDataArray);
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function arrayBufferToUsfmData(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
exports.arrayBufferToUsfmData = arrayBufferToUsfmData;
var usfmDataToFileData = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(usfmData) {
    var zip, blob, arrayBuffer;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          zip = new _jszip["default"]();
          usfmData.forEach(function (_ref4) {
            var filename = _ref4.filename,
              usfmText = _ref4.usfmText;
            zip.file(filename, usfmText);
          });
          _context3.next = 4;
          return zip.generateAsync({
            type: 'blob'
          });
        case 4:
          blob = _context3.sent;
          _context3.next = 7;
          return blob.arrayBuffer();
        case 7:
          arrayBuffer = _context3.sent;
          return _context3.abrupt("return", {
            blob: blob,
            arrayBuffer: arrayBuffer
          });
        case 9:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function usfmDataToFileData(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
exports.usfmDataToFileData = usfmDataToFileData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJVU0ZNX1JFR0VYIiwiQk9PS19JRF9SRUdFWCIsImlzVmFsaWRVc2ZtRmlsZSIsInVzZm1UZXh0IiwidXNmbVBhcnNlciIsImdyYW1tYXIiLCJVU0ZNUGFyc2VyIiwiTEVWRUwiLCJSRUxBWEVEIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZVVzZm1EYXRhIiwidXNmbURhdGEiLCJ1c2ZtVmFsaWRhdGVkRGF0YSIsImZpbHRlciIsInVzZm1PYmoiLCJnZXRVc2ZtVGV4dHMiLCJ6aXAiLCJ1c2ZtUHJvbWlzZXMiLCJmaWxlIiwibWFwIiwiemlwT2JqIiwiYXN5bmMiLCJQcm9taXNlIiwiYWxsIiwiZXh0cmFjdEJvb2tJZEZyb21UZXh0IiwiZm91bmQiLCJtYXRjaCIsInRleHRCb29rSWQiLCJlcnJvciIsIkVycm9yIiwiYXJyYXlCdWZmZXJUb1VzZm1EYXRhIiwiemlwQXJyYXlCdWZmZXIiLCJKU1ppcCIsImxvYWRBc3luYyIsInVzZm1UZXh0cyIsInVzZm1EYXRhQXJyYXkiLCJmaWxlSW5kZXgiLCJmaWxlbmFtZSIsIm5hbWUiLCJib29rSWQiLCJ1c2ZtRGF0YVRvRmlsZURhdGEiLCJmb3JFYWNoIiwiZ2VuZXJhdGVBc3luYyIsInR5cGUiLCJibG9iIiwiYXJyYXlCdWZmZXIiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvemlwVXNmbUhlbHBlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyYW1tYXIgZnJvbSAndXNmbS1ncmFtbWFyJ1xuaW1wb3J0IEpTWmlwIGZyb20gJ2pzemlwJ1xuXG5jb25zdCBVU0ZNX1JFR0VYID0gLyhbYS16QS1aMC05XFxzX1xcXFwuXFwtKCk6XSkrKC51c2ZtKSQvaVxuY29uc3QgQk9PS19JRF9SRUdFWCA9IC9eXFxcXGlkIChbQS1aMC05XXszfSkvXG5cbmNvbnN0IGlzVmFsaWRVc2ZtRmlsZSA9IHVzZm1UZXh0ID0+IHtcbiAgY29uc3QgdXNmbVBhcnNlciA9IG5ldyBncmFtbWFyLlVTRk1QYXJzZXIodXNmbVRleHQsIGdyYW1tYXIuTEVWRUwuUkVMQVhFRClcbiAgcmV0dXJuIHVzZm1QYXJzZXIudmFsaWRhdGUoKVxufVxuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVVc2ZtRGF0YSA9IHVzZm1EYXRhID0+IHtcbiAgY29uc3QgdXNmbVZhbGlkYXRlZERhdGEgPSB1c2ZtRGF0YS5maWx0ZXIodXNmbU9iaiA9PlxuICAgIGlzVmFsaWRVc2ZtRmlsZSh1c2ZtT2JqLnVzZm1UZXh0KVxuICApXG4gIHJldHVybiB1c2ZtVmFsaWRhdGVkRGF0YVxufVxuXG5jb25zdCBnZXRVc2ZtVGV4dHMgPSBhc3luYyB6aXAgPT4ge1xuICBjb25zdCB1c2ZtUHJvbWlzZXMgPSB6aXBcbiAgICAuZmlsZShVU0ZNX1JFR0VYKVxuICAgIC8vIFRyYW5zZm9ybXMgemlwIGZpbGUgb2JqZWN0cyB0byBwcm9taXNlcyB0byBnZXQgZmlsZSBkYXRhXG4gICAgLm1hcCh6aXBPYmogPT4gemlwT2JqLmFzeW5jKCdzdHJpbmcnKSlcblxuICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwodXNmbVByb21pc2VzKVxufVxuXG5jb25zdCBleHRyYWN0Qm9va0lkRnJvbVRleHQgPSB1c2ZtVGV4dCA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZm91bmQgPSB1c2ZtVGV4dC5tYXRjaChCT09LX0lEX1JFR0VYKVxuICAgIGNvbnN0IHRleHRCb29rSWQgPSBmb3VuZFsxXVxuICAgIHJldHVybiB0ZXh0Qm9va0lkXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVU0ZNIFRleHQgSW52YWxpZCEgfiBEaWQgbm90IGNvbnRhaW4gQm9vayBJRCcpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFycmF5QnVmZmVyVG9Vc2ZtRGF0YSA9IGFzeW5jIHppcEFycmF5QnVmZmVyID0+IHtcbiAgLy8gQ3JlYXRlIGpzemlwIGFuZCBsb2FkIGRhdGEgZnJvbSBhcnJheSBidWZmZXJcbiAgY29uc3QgemlwID0gYXdhaXQgSlNaaXAubG9hZEFzeW5jKHppcEFycmF5QnVmZmVyKVxuXG4gIGNvbnN0IHVzZm1UZXh0cyA9IGF3YWl0IGdldFVzZm1UZXh0cyh6aXApXG5cbiAgY29uc3QgdXNmbURhdGFBcnJheSA9IHppcC5maWxlKFVTRk1fUkVHRVgpLm1hcCgoemlwT2JqLCBmaWxlSW5kZXgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZmlsZW5hbWU6IHppcE9iai5uYW1lLFxuICAgICAgdXNmbVRleHQ6IHVzZm1UZXh0c1tmaWxlSW5kZXhdLFxuICAgICAgYm9va0lkOiBleHRyYWN0Qm9va0lkRnJvbVRleHQodXNmbVRleHRzW2ZpbGVJbmRleF0pLFxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gdXNmbURhdGFBcnJheVxufVxuXG5leHBvcnQgY29uc3QgdXNmbURhdGFUb0ZpbGVEYXRhID0gYXN5bmMgdXNmbURhdGEgPT4ge1xuICBjb25zdCB6aXAgPSBuZXcgSlNaaXAoKVxuXG4gIHVzZm1EYXRhLmZvckVhY2goKHsgZmlsZW5hbWUsIHVzZm1UZXh0IH0pID0+IHtcbiAgICB6aXAuZmlsZShmaWxlbmFtZSwgdXNmbVRleHQpXG4gIH0pXG5cbiAgY29uc3QgYmxvYiA9IGF3YWl0IHppcC5nZW5lcmF0ZUFzeW5jKHsgdHlwZTogJ2Jsb2InIH0pXG4gIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgYmxvYi5hcnJheUJ1ZmZlcigpXG4gIHJldHVybiB7IGJsb2IsIGFycmF5QnVmZmVyIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFBeUI7QUFBQSwrQ0FBekI7QUFBQTtBQUFBO0FBRUEsSUFBTUEsVUFBVSxHQUFHLG9DQUFvQztBQUN2RCxJQUFNQyxhQUFhLEdBQUcscUJBQXFCO0FBRTNDLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBZSxDQUFHQyxRQUFRLEVBQUk7RUFDbEMsSUFBTUMsVUFBVSxHQUFHLElBQUlDLHVCQUFPLENBQUNDLFVBQVUsQ0FBQ0gsUUFBUSxFQUFFRSx1QkFBTyxDQUFDRSxLQUFLLENBQUNDLE9B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