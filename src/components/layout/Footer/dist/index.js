"use strict";
exports.__esModule = true;
var React = require("react");
var index_module_scss_1 = require("./index.module.scss");
var clsx_1 = require("clsx");
function Footer(_a) {
    var image = _a.image, notice = _a.notice;
    return (React.createElement("div", { className: clsx_1.clsx("container py-12", index_module_scss_1["default"].frame) },
        React.createElement("span", { className: index_module_scss_1["default"].notice }, '&copy; 2020 Your Company, Inc. All rights reserved.')));
}
exports["default"] = Footer;
