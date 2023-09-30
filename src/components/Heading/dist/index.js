"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.HeadingStyles = void 0;
var index_module_scss_1 = require("./index.module.scss");
var react_1 = require("@prismicio/react");
var clsx_1 = require("clsx");
exports.HeadingStyles = index_module_scss_1["default"];
function Heading(_a) {
    var heading = _a.heading, className = _a.className, customTextColor = _a.customTextColor, customFontSize = _a.customFontSize, customBlockClasses = _a.customBlockClasses, elementClasses = _a.elementClasses;
    var isLabelised = function (node) {
        var hasLabel = true;
        if (!node)
            return;
        if (!node.spans)
            return;
        node.spans.forEach(function (k, i) {
            if (!k.data)
                return (hasLabel = false);
            if (!k.data.label)
                return (hasLabel = false);
            if (i > 0)
                return (hasLabel = false);
            if (k.data.label.includes("-break"))
                return (hasLabel = false);
        });
        return hasLabel;
    };
    var elementClass = function (elementType, elementClasses) {
        if (elementClasses)
            return elementClasses[elementType] || null;
    };
    var defaultCustomBlockTextColor = {
        1: "primary-text-color",
        2: "primary-text-color",
        3: "primary-text-color",
        4: "primary-text-color",
        5: "primary-text-color",
        6: "primary-text-color"
    };
    var mergedColours = __assign(__assign({}, defaultCustomBlockTextColor), customTextColor);
    var components = {
        heading2: function (_a) {
            var children = _a.children, node = _a.node;
            return (React.createElement("h2", { className: clsx_1.clsx([
                    isLabelised(node)
                        ? [
                            customTextColor ? customTextColor : "primary-text-color",
                            customFontSize ? "h" + customFontSize : "text-3xl",
                        ]
                        : null,
                    className ? className : null,
                    "tracking-wide",
                ]) }, children));
        },
        heading3: function (_a) {
            var children = _a.children, node = _a.node;
            return (React.createElement("h3", { className: clsx_1.clsx([
                    elementClass("heading", elementClasses),
                    isLabelised(node)
                        ? [
                            customTextColor ? customTextColor : "primary-text-color",
                            customFontSize ? "h" + customFontSize : "text-4xl",
                        ]
                        : null,
                    className ? className : null,
                    "tracking-wide",
                ]) }, children));
        },
        heading4: function (_a) {
            var children = _a.children, node = _a.node;
            return (React.createElement("h4", { className: clsx_1.clsx([
                    isLabelised(node)
                        ? [
                            customTextColor ? customTextColor : "primary-text-color",
                            customFontSize ? "h" + customFontSize : "text-2xl",
                        ]
                        : null,
                    className ? className : null,
                    "tracking-wide",
                ]) }, children));
        },
        paragraph: function (_a) {
            var children = _a.children;
            return (React.createElement("p", { className: elementClass("paragraph", elementClasses) }, children));
        },
        label: function (_a) {
            var node = _a.node, children = _a.children, key = _a.key;
            if (node.data.label === "h1-break") {
                return (React.createElement("span", { key: key, className: node.data.label.replace("-break", "") + " " + mergedColours[parseInt(node.data.label.replace(/\D/g, ""))] + " " + defaultCustomBlockClasses[parseInt(node.data.label.replace(/\D/g, ""))] + " block" }, children));
            }
            return (React.createElement("span", { key: key, className: clsx_1.clsx([
                    node.data.label.replace("-break", "") + " " + mergedColours[parseInt(node.data.label.replace(/\D/g, ""))] + " block",
                ], customBlockClasses
                    ? customBlockClasses[parseInt(node.data.label.replace(/\D/g, ""))]
                    : null) }, children));
        }
    };
    var cssClasses = className ? className + " " + index_module_scss_1["default"].type : index_module_scss_1["default"].type;
    return (React.createElement("div", { className: cssClasses },
        React.createElement(react_1.PrismicRichText, { field: heading, components: components })));
}
exports["default"] = Heading;
