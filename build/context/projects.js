"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ProjectsProvider = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useTransformUsfmZip2 = _interopRequireDefault(require("../hooks/useTransformUsfmZip/useTransformUsfmZip"));
var _useLocalForage2 = _interopRequireDefault(require("../hooks/useLocalForage/useLocalForage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProjectsContext = /*#__PURE__*/(0, _react.createContext)();
var ProjectsProvider = function ProjectsProvider(_ref) {
  var children = _ref.children;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    projects = _useState2[0],
    setProjects = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedProject = _useState4[0],
    setSelectedProject = _useState4[1];
  var _useLocalForage = (0, _useLocalForage2["default"])('projects'),
    getAllFromStore = _useLocalForage.getAllFromStore,
    setInStore = _useLocalForage.setInStore,
    deleteFromStore = _useLocalForage.deleteFromStore;
  var _useTransformUsfmZip = (0, _useTransformUsfmZip2["default"])(),
    storeBufferToUsfmData = _useTransformUsfmZip.storeBufferToUsfmData,
    usfmDataToStoreBuffer = _useTransformUsfmZip.usfmDataToStoreBuffer;
  var projectExists = function projectExists(projectName) {
    return projects.some(function (project) {
      return project.name === projectName;
    });
  };
  var fetchProjects = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var storeData, projectPromises, _projects;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return getAllFromStore();
        case 2:
          storeData = _context2.sent;
          projectPromises = storeData.map( /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.t0 = data.id;
                    _context.t1 = data.key;
                    _context.next = 4;
                    return storeBufferToUsfmData(data.value);
                  case 4:
                    _context.t2 = _context.sent;
                    return _context.abrupt("return", {
                      id: _context.t0,
                      name: _context.t1,
                      data: _context.t2
                    });
                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x2) {
              return _ref3.apply(this, arguments);
            };
          }());
          _context2.next = 6;
          return Promise.all(projectPromises);
        case 6:
          _projects = _context2.sent;
          setProjects(_projects);
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })), [getAllFromStore]);
  var getProject = function getProject(projectName) {
    var foundProject = projects.find(function (project) {
      return project.name === projectName;
    });
    return _objectSpread({}, foundProject);
  };
  var addProject = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(projectName, usfmData) {
      var newProject, usfmArrayBuffer;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!projectExists(projectName)) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return", false);
          case 2:
            newProject = {
              id: projects.length,
              name: projectName,
              data: usfmData
            };
            _context3.next = 5;
            return usfmDataToStoreBuffer(usfmData);
          case 5:
            usfmArrayBuffer = _context3.sent;
            _context3.next = 8;
            return setInStore(projectName, usfmArrayBuffer);
          case 8:
            setProjects([].concat(_toConsumableArray(projects), [newProject]));
            return _context3.abrupt("return", true);
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function addProject(_x3, _x4) {
      return _ref4.apply(this, arguments);
    };
  }();
  var updateProject = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(projectName, usfmData) {
      var updatedProjects, usfmArrayBuffer;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (projectExists(projectName)) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return", false);
          case 2:
            updatedProjects = projects.map(function (project) {
              if (project.name === projectName) {
                return _objectSpread(_objectSpread({}, project), {}, {
                  data: usfmData
                });
              }
              return project;
            });
            _context4.next = 5;
            return usfmDataToStoreBuffer(usfmData);
          case 5:
            usfmArrayBuffer = _context4.sent;
            _context4.next = 8;
            return setInStore(projectName, usfmArrayBuffer);
          case 8:
            setProjects(updatedProjects);
            return _context4.abrupt("return", true);
          case 10:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function updateProject(_x5, _x6) {
      return _ref5.apply(this, arguments);
    };
  }();
  var deleteProject = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(projectName) {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (projectExists(projectName)) {
              _context5.next = 2;
              break;
            }
            return _context5.abrupt("return", false);
          case 2:
            _context5.next = 4;
            return deleteFromStore(projectName);
          case 4:
            setProjects(projects.filter(function (project) {
              return project.name !== projectName;
            }));
            return _context5.abrupt("return", true);
          case 6:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function deleteProject(_x7) {
      return _ref6.apply(this, arguments);
    };
  }();
  var selectProject = function selectProject(project) {
    console.log(project);
    setSelectedProject(_objectSpread({}, project));
  };
  var context = {
    projects: projects,
    selectedProject: selectedProject,
    fetchProjects: fetchProjects,
    getProject: getProject,
    addProject: addProject,
    updateProject: updateProject,
    deleteProject: deleteProject,
    selectProject: selectProject
  };
  return /*#__PURE__*/_react["default"].createElement(ProjectsContext.Provider, {
    value: context
  }, children);
};
exports.ProjectsProvider = ProjectsProvider;
var _default = ProjectsContext;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQcm9qZWN0c0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUHJvamVjdHNQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwic2VsZWN0ZWRQcm9qZWN0Iiwic2V0U2VsZWN0ZWRQcm9qZWN0IiwidXNlTG9jYWxGb3JhZ2UiLCJnZXRBbGxGcm9tU3RvcmUiLCJzZXRJblN0b3JlIiwiZGVsZXRlRnJvbVN0b3JlIiwidXNlVHJhbnNmb3JtVXNmbVppcCIsInN0b3JlQnVmZmVyVG9Vc2ZtRGF0YSIsInVzZm1EYXRhVG9TdG9yZUJ1ZmZlciIsInByb2plY3RFeGlzdHMiLCJwcm9qZWN0TmFtZSIsInNvbWUiLCJwcm9qZWN0IiwibmFtZSIsImZldGNoUHJvamVjdHMiLCJ1c2VDYWxsYmFjayIsInN0b3JlRGF0YSIsInByb2plY3RQcm9taXNlcyIsIm1hcCIsImRhdGEiLCJpZCIsImtleSIsInZhbHVlIiwiUHJvbWlzZSIsImFsbCIsIl9wcm9qZWN0cyIsImdldFByb2plY3QiLCJmb3VuZFByb2plY3QiLCJmaW5kIiwiYWRkUHJvamVjdCIsInVzZm1EYXRhIiwibmV3UHJvamVjdCIsImxlbmd0aCIsInVzZm1BcnJheUJ1ZmZlciIsInVwZGF0ZVByb2plY3QiLCJ1cGRhdGVkUHJvamVjdHMiLCJkZWxldGVQcm9qZWN0IiwiZmlsdGVyIiwic2VsZWN0UHJvamVjdCIsImNvbnNvbGUiLCJsb2ciLCJjb250ZXh0Il0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRleHQvcHJvamVjdHMuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHVzZVRyYW5zZm9ybVVzZm1aaXAgZnJvbSAnLi4vaG9va3MvdXNlVHJhbnNmb3JtVXNmbVppcC91c2VUcmFuc2Zvcm1Vc2ZtWmlwJ1xuaW1wb3J0IHVzZUxvY2FsRm9yYWdlIGZyb20gJy4uL2hvb2tzL3VzZUxvY2FsRm9yYWdlL3VzZUxvY2FsRm9yYWdlJ1xuXG5jb25zdCBQcm9qZWN0c0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuY29uc3QgUHJvamVjdHNQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW3NlbGVjdGVkUHJvamVjdCwgc2V0U2VsZWN0ZWRQcm9qZWN0XSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IHsgZ2V0QWxsRnJvbVN0b3JlLCBzZXRJblN0b3JlLCBkZWxldGVGcm9tU3RvcmUgfSA9XG4gICAgdXNlTG9jYWxGb3JhZ2UoJ3Byb2plY3RzJylcblxuICBjb25zdCB7IHN0b3JlQnVmZmVyVG9Vc2ZtRGF0YSwgdXNmbURhdGFUb1N0b3JlQnVmZmVyIH0gPSB1c2VUcmFuc2Zvcm1Vc2ZtWmlwKClcblxuICBjb25zdCBwcm9qZWN0RXhpc3RzID0gcHJvamVjdE5hbWUgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0cy5zb21lKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBwcm9qZWN0TmFtZSlcbiAgfVxuXG4gIGNvbnN0IGZldGNoUHJvamVjdHMgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVEYXRhID0gYXdhaXQgZ2V0QWxsRnJvbVN0b3JlKClcbiAgICBjb25zdCBwcm9qZWN0UHJvbWlzZXMgPSBzdG9yZURhdGEubWFwKGFzeW5jIGRhdGEgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGRhdGEuaWQsXG4gICAgICAgIG5hbWU6IGRhdGEua2V5LFxuICAgICAgICBkYXRhOiBhd2FpdCBzdG9yZUJ1ZmZlclRvVXNmbURhdGEoZGF0YS52YWx1ZSksXG4gICAgICAgIC8vIFRPRE86IChtYXliZSkgZGV0ZWN0IGxhbmd1YWdlIGluIGRhdGEgYW5kIHN0b3JlXG4gICAgICAgIC8vIGxhbmd1YWdlOiBkZXRlY3RMYW5ndWFnZShkYXRhLnZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgX3Byb2plY3RzID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvamVjdFByb21pc2VzKVxuICAgIHNldFByb2plY3RzKF9wcm9qZWN0cylcbiAgfSwgW2dldEFsbEZyb21TdG9yZV0pXG5cbiAgY29uc3QgZ2V0UHJvamVjdCA9IHByb2plY3ROYW1lID0+IHtcbiAgICBjb25zdCBmb3VuZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBwcm9qZWN0TmFtZSlcbiAgICByZXR1cm4geyAuLi5mb3VuZFByb2plY3QgfVxuICB9XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IGFzeW5jIChwcm9qZWN0TmFtZSwgdXNmbURhdGEpID0+IHtcbiAgICBpZiAocHJvamVjdEV4aXN0cyhwcm9qZWN0TmFtZSkpIHtcbiAgICAgIC8vIGNvbXBsYWluIHRvIHRoZSB1c2VyXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0ID0ge1xuICAgICAgaWQ6IHByb2plY3RzLmxlbmd0aCxcbiAgICAgIG5hbWU6IHByb2plY3ROYW1lLFxuICAgICAgZGF0YTogdXNmbURhdGEsXG4gICAgfVxuXG4gICAgY29uc3QgdXNmbUFycmF5QnVmZmVyID0gYXdhaXQgdXNmbURhdGFUb1N0b3JlQnVmZmVyKHVzZm1EYXRhKVxuXG4gICAgYXdhaXQgc2V0SW5TdG9yZShwcm9qZWN0TmFtZSwgdXNmbUFycmF5QnVmZmVyKVxuICAgIHNldFByb2plY3RzKFsuLi5wcm9qZWN0cywgbmV3UHJvamVjdF0pXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVByb2plY3QgPSBhc3luYyAocHJvamVjdE5hbWUsIHVzZm1EYXRhKSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0RXhpc3RzKHByb2plY3ROYW1lKSkge1xuICAgICAgLy8gY29tcGxhaW4gdG8gdGhlIHVzZXJcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZWRQcm9qZWN0cyA9IHByb2plY3RzLm1hcChwcm9qZWN0ID0+IHtcbiAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnByb2plY3QsIGRhdGE6IHVzZm1EYXRhIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9qZWN0XG4gICAgfSlcbiAgICBjb25zdCB1c2ZtQXJyYXlCdWZmZXIgPSBhd2FpdCB1c2ZtRGF0YVRvU3RvcmVCdWZmZXIodXNmbURhdGEpXG5cbiAgICBhd2FpdCBzZXRJblN0b3JlKHByb2plY3ROYW1lLCB1c2ZtQXJyYXlCdWZmZXIpXG4gICAgc2V0UHJvamVjdHModXBkYXRlZFByb2plY3RzKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gYXN5bmMgcHJvamVjdE5hbWUgPT4ge1xuICAgIGlmICghcHJvamVjdEV4aXN0cyhwcm9qZWN0TmFtZSkpIHtcbiAgICAgIC8vIGNvbXBsYWluIHRvIHRoZSB1c2VyXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBhd2FpdCBkZWxldGVGcm9tU3RvcmUocHJvamVjdE5hbWUpXG4gICAgc2V0UHJvamVjdHMocHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5uYW1lICE9PSBwcm9qZWN0TmFtZSkpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNvbnN0IHNlbGVjdFByb2plY3QgPSBwcm9qZWN0ID0+IHtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KVxuICAgIHNldFNlbGVjdGVkUHJvamVjdCh7IC4uLnByb2plY3QgfSlcbiAgfVxuXG4gIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgcHJvamVjdHMsXG4gICAgc2VsZWN0ZWRQcm9qZWN0LFxuICAgIGZldGNoUHJvamVjdHMsXG4gICAgZ2V0UHJvamVjdCxcbiAgICBhZGRQcm9qZWN0LFxuICAgIHVwZGF0ZVByb2plY3QsXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICBzZWxlY3RQcm9qZWN0LFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvamVjdHNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1Byb2plY3RzQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgeyBQcm9qZWN0c1Byb3ZpZGVyIH1cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzQ29udGV4dFxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQW1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQUZuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQSxJQUFNQSxlQUFlLGdCQUFHLElBQUFDLG9CQUFhLEdBQUU7QUFFdkMsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQixPQUFxQjtFQUFBLElBQWZDLFFBQVEsUUFBUkEsUUFBUTtFQUNsQyxnQkFBZ0MsSUFBQUMsZUFBUSxFQUFDLEVBQUUsQ0FBQztJQUFBO0lBQXJDQyxRQUFRO0lBQUVDLFdBQVc7RUFDNUIsaUJBQThDLElBQUFGLGVBQVEsRUFBQyxJQUFJLENBQUM7SUFBQTtJQUFyREcsZUFBZTtJQUFFQyxrQkFBa0I7RUFDMUMsc0JBQ0UsSUFBQUMsMkJBQWMsRUFBQyxVQUFVLENBQUM7SUFEcEJDLGVBQWUsbUJBQWZBLGVBQWU7SUFBRUMsVUFBVSxtQkFBVkEsVUFBVTtJQUFFQyxlQUFlLG1CQUFmQSxlQUFlO0VBR3BELDJCQUF5RCxJQUFBQyxnQ0FBbUIsR0FBRTtJQUF0RUMscUJBQXFCLHdCQUFyQkEscUJBQXFCO0lBQUVDLHFCQUFxQix3QkFBckJBLHFCQUFxQjtFQUVwRCxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWEsQ0FBR0MsV0FBVyxFQUFJO0lBQ25DLE9BQU9aLFFBQVEsQ0FBQ2EsSUFBSSxDQUFDLFVBQUFDLE9BQU87TUFBQSxPQUFJQSxPQUFPLENBQUNDLElBQUksS0FBS0gsV0FBVztJQUFBLEVBQUM7RUFDL0QsQ0FBQztFQUVELElBQU1JLGFBQWEsR0FBRyxJQUFBQyxrQkFBVywyRUFBQztJQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7VUFBQSxPQUNSWixlQUFlLEVBQUU7UUFBQTtVQUFuQ2EsU0FBUztVQUNUQyxlQUFlLEdBQUdELFNBQVMsQ0FBQ0UsR0FBRztZQUFBLHVFQUFDLGlCQUFNQyxJQUFJO2NBQUE7Z0JBQUE7a0JBQUE7b0JBQUEsY0FFeENBLElBQUksQ0FBQ0MsRUFBRTtvQkFBQSxjQUNMRCxJQUFJLENBQUNFLEdBQUc7b0JBQUE7b0JBQUEsT0FDRmQscUJBQXFCLENBQUNZLElBQUksQ0FBQ0csS0FBSyxDQUFDO2tCQUFBO29CQUFBO29CQUFBO3NCQUY3Q0YsRUFBRTtzQkFDRlAsSUFBSTtzQkFDSk0sSUFBSTtvQkFBQTtrQkFBQTtrQkFBQTtvQkFBQTtnQkFBQTtjQUFBO1lBQUEsQ0FJUDtZQUFBO2NBQUE7WUFBQTtVQUFBLElBQUM7VUFBQTtVQUFBLE9BQ3NCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsZUFBZSxDQUFDO1FBQUE7VUFBOUNRLFNBQVM7VUFDZjFCLFdBQVcsQ0FBQzBCLFNBQVMsQ0FBQztRQUFBO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQSxDQUN2QixJQUFFLENBQUN0QixlQUFlLENBQUMsQ0FBQztFQUVyQixJQUFNdUIsVUFBVSxHQUFHLFNBQWJBLFVBQVUsQ0FBR2hCLFdBQVcsRUFBSTtJQUNoQyxJQUFNaUIsWUFBWSxHQUFHN0IsUUFBUSxDQUFDOEIsSUFBSSxDQUFDLFVBQUFoQixPQUFPO01BQUEsT0FBSUEsT0FBTyxDQUFDQyxJQUFJLEtBQUtILFdBQVc7SUFBQSxFQUFDO0lBQzNFLHlCQUFZaUIsWUFBWTtFQUMxQixDQUFDO0VBRUQsSUFBTUUsVUFBVTtJQUFBLHVFQUFHLGtCQUFPbkIsV0FBVyxFQUFFb0IsUUFBUTtNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUEsS0FDekNyQixhQUFhLENBQUNDLFdBQVcsQ0FBQztjQUFBO2NBQUE7WUFBQTtZQUFBLGtDQUVyQixLQUFLO1VBQUE7WUFHUnFCLFVBQVUsR0FBRztjQUNqQlgsRUFBRSxFQUFFdEIsUUFBUSxDQUFDa0MsTUFBTTtjQUNuQm5CLElBQUksRUFBRUgsV0FBVztjQUNqQlMsSUFBSSxFQUFFVztZQUNSLENBQUM7WUFBQTtZQUFBLE9BRTZCdEIscUJBQXFCLENBQUNzQixRQUFRLENBQUM7VUFBQTtZQUF2REcsZUFBZTtZQUFBO1lBQUEsT0FFZjdCLFVBQVUsQ0FBQ00sV0FBVyxFQUFFdUIsZUFBZSxDQUFDO1VBQUE7WUFDOUNsQyxXQUFXLDhCQUFLRCxRQUFRLElBQUVpQyxVQUFVLEdBQUU7WUFBQSxrQ0FDL0IsSUFBSTtVQUFBO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQSxDQUNaO0lBQUEsZ0JBakJLRixVQUFVO01BQUE7SUFBQTtFQUFBLEdBaUJmO0VBRUQsSUFBTUssYUFBYTtJQUFBLHVFQUFHLGtCQUFPeEIsV0FBVyxFQUFFb0IsUUFBUTtNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUEsSUFDM0NyQixhQUFhLENBQUNDLFdBQVcsQ0FBQztjQUFBO2NBQUE7WUFBQTtZQUFBLGtDQUV0QixLQUFLO1VBQUE7WUFHUnlCLGVBQWUsR0FBR3JDLFFBQVEsQ0FBQ29CLEdBQUcsQ0FBQyxVQUFBTixPQUFPLEVBQUk7Y0FDOUMsSUFBSUEsT0FBTyxDQUFDQyxJQUFJLEtBQUtILFdBQVcsRUFBRTtnQkFDaEMsdUNBQVlFLE9BQU87a0JBQUVPLElBQUksRUFBRVc7Z0JBQVE7Y0FDckM7Y0FDQSxPQUFPbEIsT0FBTztZQUNoQixDQUFDLENBQUM7WUFBQTtZQUFBLE9BQzRCSixxQkFBcUIsQ0FBQ3NCLFFBQVEsQ0FBQztVQUFBO1lBQXZERyxlQUFlO1lBQUE7WUFBQSxPQUVmN0IsVUFBVSxDQUFDTSxXQUFXLEVBQUV1QixlQUFlLENBQUM7VUFBQTtZQUM5Q2xDLFdBQVcsQ0FBQ29DLGVBQWUsQ0FBQztZQUFBLGtDQUNyQixJQUFJO1VBQUE7VUFBQTtZQUFBO1FBQUE7TUFBQTtJQUFBLENBQ1o7SUFBQSxnQkFqQktELGFBQWE7TUFBQTtJQUFBO0VBQUEsR0FpQmxCO0VBRUQsSUFBTUUsYUFBYTtJQUFBLHVFQUFHLGtCQUFNMUIsV0FBVztNQUFBO1FBQUE7VUFBQTtZQUFBLElBQ2hDRCxhQUFhLENBQUNDLFdBQVcsQ0FBQztjQUFBO2NBQUE7WUFBQTtZQUFBLGtDQUV0QixLQUFLO1VBQUE7WUFBQTtZQUFBLE9BR1JMLGVBQWUsQ0FBQ0ssV0FBVyxDQUFDO1VBQUE7WUFDbENYLFdBQVcsQ0FBQ0QsUUFBUSxDQUFDdUMsTUFBTSxDQUFDLFVBQUF6QixPQUFPO2NBQUEsT0FBSUEsT0FBTyxDQUFDQyxJQUFJLEtBQUtILFdBQVc7WUFBQSxFQUFDLENBQUM7WUFBQSxrQ0FDOUQsSUFBSTtVQUFBO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQSxDQUNaO0lBQUEsZ0JBVEswQixhQUFhO01BQUE7SUFBQTtFQUFBLEdBU2xCO0VBRUQsSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFhLENBQUcxQixPQUFPLEVBQUk7SUFDL0IyQixPQUFPLENBQUNDLEdBQUcsQ0FBQzVCLE9BQU8sQ0FBQztJQUNwQlgsa0JBQWtCLG1CQUFNVyxPQUFPLEVBQUc7RUFDcEMsQ0FBQztFQUVELElBQU02QixPQUFPLEdBQUc7SUFDZDNDLFFBQVEsRUFBUkEsUUFBUTtJQUNSRSxlQUFlLEVBQWZBLGVBQWU7SUFDZmMsYUFBYSxFQUFiQSxhQUFhO0lBQ2JZLFVBQVUsRUFBVkEsVUFBVTtJQUNWRyxVQUFVLEVBQVZBLFVBQVU7SUFDVkssYUFBYSxFQUFiQSxhQUFhO0lBQ2JFLGFBQWEsRUFBYkEsYUFBYTtJQUNiRSxhQUFhLEVBQWJBO0VBQ0YsQ0FBQztFQUVELG9CQUNFLGdDQUFDLGVBQWUsQ0FBQyxRQUFRO0lBQUMsS0FBSyxFQUFFRztFQUFRLEdBQ3RDN0MsUUFBUSxDQUNnQjtBQUUvQixDQUFDO0FBQUE7QUFBQSxlQUdjSCxlQUFlO0FBQUEifQ==