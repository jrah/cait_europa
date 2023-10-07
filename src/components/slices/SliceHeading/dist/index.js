"use strict";
exports.__esModule = true;
exports.sliceHeadingStyles = void 0;
var index_module_scss_1 = require("./index.module.scss");
var clsx_1 = require("clsx");
exports.sliceHeadingStyles = index_module_scss_1["default"];
function SliceHeading(_a) {
    var children = _a.children, isPageHeadline = _a.isPageHeadline, className = _a.className, cssModuleElement = _a.cssModuleElement;
    var HeadingTag = isPageHeadline ? "h1" : "h2";
    var cssClasses = className ? className + " " + index_module_scss_1["default"].type : index_module_scss_1["default"].type;
    return React.createElement(HeadingTag, { className: clsx_1["default"](cssClasses, cssModuleElement) }, children);
}
exports["default"] = SliceHeading;
