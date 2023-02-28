"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _ProjectItem = _interopRequireDefault(require("./ProjectItem"));
var _useProjectsContext2 = _interopRequireDefault(require("../../hooks/useProjectsContext"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ProjectList = function ProjectList() {
  var _useProjectsContext = (0, _useProjectsContext2["default"])(),
    projects = _useProjectsContext.projects;
  var renderedProjectItems = projects.map(function (project) {
    return /*#__PURE__*/_react["default"].createElement(_ProjectItem["default"], {
      key: project.name,
      project: project
    });
  });
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Project List"), /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Project Name"), /*#__PURE__*/_react["default"].createElement("th", null, "Books"))), /*#__PURE__*/_react["default"].createElement("tbody", null, renderedProjectItems)));
};
var _default = ProjectList;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQcm9qZWN0TGlzdCIsInVzZVByb2plY3RzQ29udGV4dCIsInByb2plY3RzIiwicmVuZGVyZWRQcm9qZWN0SXRlbXMiLCJtYXAiLCJwcm9qZWN0IiwibmFtZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2plY3RMaXN0L1Byb2plY3RMaXN0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBQcm9qZWN0SXRlbSBmcm9tICcuL1Byb2plY3RJdGVtJ1xuaW1wb3J0IHVzZVByb2plY3RzQ29udGV4dCBmcm9tICcuLi8uLi9ob29rcy91c2VQcm9qZWN0c0NvbnRleHQnXG5cbmNvbnN0IFByb2plY3RMaXN0ID0gKCkgPT4ge1xuICBjb25zdCB7IHByb2plY3RzIH0gPSB1c2VQcm9qZWN0c0NvbnRleHQoKVxuXG4gIGNvbnN0IHJlbmRlcmVkUHJvamVjdEl0ZW1zID0gcHJvamVjdHMubWFwKHByb2plY3QgPT4gKFxuICAgIDxQcm9qZWN0SXRlbSBrZXk9e3Byb2plY3QubmFtZX0gcHJvamVjdD17cHJvamVjdH0gLz5cbiAgKSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+UHJvamVjdCBMaXN0PC9oMj5cbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Qcm9qZWN0IE5hbWU8L3RoPlxuICAgICAgICAgICAgPHRoPkJvb2tzPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+e3JlbmRlcmVkUHJvamVjdEl0ZW1zfTwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RMaXN0XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUErRDtBQUUvRCxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxHQUFTO0VBQ3hCLDBCQUFxQixJQUFBQywrQkFBa0IsR0FBRTtJQUFqQ0MsUUFBUSx1QkFBUkEsUUFBUTtFQUVoQixJQUFNQyxvQkFBb0IsR0FBR0QsUUFBUSxDQUFDRSxHQUFHLENBQUMsVUFBQUMsT0FBTztJQUFBLG9CQUMvQyxnQ0FBQyx1QkFBVztNQUFDLEdBQUcsRUFBRUEsT0FBTyxDQUFDQyxJQUFLO01BQUMsT0FBTyxFQUFFRDtJQUFRLEVBQUc7RUFBQSxDQUNyRCxDQUFDO0VBRUYsb0JBQ0UsMERBQ0UsNENBQUksY0FBWSxDQUFLLGVBQ3JCLDREQUNFLDREQUNFLHlEQUNFLDRDQUFJLGNBQVksQ0FBSyxlQUNyQiw0Q0FBSSxPQUFLLENBQUssQ0FDWCxDQUNDLGVBQ1IsK0NBQVFGLG9CQUFvQixDQUFTLENBQy9CLENBQ0o7QUFFVixDQUFDO0FBQUEsZUFFY0gsV0FBVztBQUFBIn0=