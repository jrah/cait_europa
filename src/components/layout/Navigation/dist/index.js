"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@prismicio/react");
var clsx_1 = require("clsx");
var index_module_scss_1 = require("./index.module.scss");
var react_3 = require("@prismicio/react");
function Navigation(props) {
    var listItems = props.buttons.map(function (button, index) {
        var button_text = button.button_text, button_link = button.button_link;
        return (react_1["default"].createElement(react_3.PrismicLink, { field: button_link, className: clsx_1["default"]("button-primary", index_module_scss_1["default"].button), key: index }, button_text));
    });
    return (react_1["default"].createElement("div", { className: clsx_1["default"]("container", index_module_scss_1["default"].container) },
        react_1["default"].createElement(react_2.PrismicImage, { field: props, width: "150", height: "150" }),
        react_1["default"].createElement("div", null, listItems)));
}
exports["default"] = Navigation;
