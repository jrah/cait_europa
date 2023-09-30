"use strict";
exports.__esModule = true;
var React = require("react");
var index_module_scss_1 = require("./index.module.scss");
var clsx_1 = require("clsx");
var react_1 = require("@prismicio/react");
function Footer(_a) {
    var image = _a.image, notice = _a.notice;
    return (React.createElement("div", { className: clsx_1.clsx("container py-12", index_module_scss_1["default"].frame) },
        React.createElement(react_1.PrismicImage, { field: image, width: "150", height: "150" }),
        React.createElement("p", { className: index_module_scss_1["default"].notice }, notice)));
}
exports["default"] = Footer;
