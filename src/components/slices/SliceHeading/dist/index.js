"use strict";
exports.__esModule = true;
exports.sliceHeadingStyles = void 0;
var index_module_scss_1 = require("./index.module.scss");
exports.sliceHeadingStyles = index_module_scss_1["default"];
function SliceHeading(_a) {
    var children = _a.children, isPageHeadline = _a.isPageHeadline, className = _a.className;
    var HeadingTag = isPageHeadline ? "h1" : "h2";
    var cssClasses = className ? className + " " + index_module_scss_1["default"].type : index_module_scss_1["default"].type;
    return React.createElement(HeadingTag, { className: cssClasses }, children);
}
exports["default"] = SliceHeading;
