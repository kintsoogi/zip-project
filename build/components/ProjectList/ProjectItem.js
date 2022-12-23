"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _useProjectsContext2 = _interopRequireDefault(require("../../hooks/use-projects-context"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ProjectItem = function ProjectItem(_ref) {
  var project = _ref.project;
  var _useProjectsContext = (0, _useProjectsContext2["default"])(),
    selectProject = _useProjectsContext.selectProject;
  return /*#__PURE__*/_react["default"].createElement("tr", {
    "data-cy": "project-item",
    onClick: function onClick() {
      return selectProject(project);
    },
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/_react["default"].createElement("td", null, project.name), /*#__PURE__*/_react["default"].createElement("td", null, project.data.length));
};
var _default = ProjectItem;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQcm9qZWN0SXRlbSIsInByb2plY3QiLCJ1c2VQcm9qZWN0c0NvbnRleHQiLCJzZWxlY3RQcm9qZWN0IiwiY3Vyc29yIiwibmFtZSIsImRhdGEiLCJsZW5ndGgiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0TGlzdC9Qcm9qZWN0SXRlbS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgdXNlUHJvamVjdHNDb250ZXh0IGZyb20gXCIuLi8uLi9ob29rcy91c2UtcHJvamVjdHMtY29udGV4dFwiO1xuXG5jb25zdCBQcm9qZWN0SXRlbSA9ICh7IHByb2plY3QgfSkgPT4ge1xuICBjb25zdCB7IHNlbGVjdFByb2plY3QgfSA9IHVzZVByb2plY3RzQ29udGV4dCgpO1xuXG4gIHJldHVybiAoXG4gICAgPHRyXG4gICAgICBkYXRhLWN5PVwicHJvamVjdC1pdGVtXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdFByb2plY3QocHJvamVjdCl9XG4gICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgPlxuICAgICAgPHRkPntwcm9qZWN0Lm5hbWV9PC90ZD5cbiAgICAgIDx0ZD57cHJvamVjdC5kYXRhLmxlbmd0aH08L3RkPlxuICAgIDwvdHI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0SXRlbTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUFrRTtBQUVsRSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxPQUFvQjtFQUFBLElBQWRDLE9BQU8sUUFBUEEsT0FBTztFQUM1QiwwQkFBMEIsSUFBQUMsK0JBQWtCLEdBQUU7SUFBdENDLGFBQWEsdUJBQWJBLGFBQWE7RUFFckIsb0JBQ0U7SUFDRSxXQUFRLGNBQWM7SUFDdEIsT0FBTyxFQUFFO01BQUEsT0FBTUEsYUFBYSxDQUFDRixPQUFPLENBQUM7SUFBQSxDQUFDO0lBQ3RDLEtBQUssRUFBRTtNQUFFRyxNQUFNLEVBQUU7SUFBVTtFQUFFLGdCQUU3Qiw0Q0FBS0gsT0FBTyxDQUFDSSxJQUFJLENBQU0sZUFDdkIsNENBQUtKLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDQyxNQUFNLENBQU0sQ0FDM0I7QUFFVCxDQUFDO0FBQUMsZUFFYVAsV0FBVztBQUFBIn0=