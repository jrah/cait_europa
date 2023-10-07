"use strict";
exports.__esModule = true;
exports.sliceSectionStyles = void 0;
var clsx_1 = require("clsx");
var index_module_scss_1 = require("./index.module.scss");
exports.sliceSectionStyles = index_module_scss_1["default"];
function SliceSection(_a) {
    var children = _a.children, contextArray = _a.contextArray, sliceId = _a.sliceId, sliceVariation = _a.sliceVariation, sliceType = _a.sliceType, spacingDefault = _a.spacingDefault, spacingTop = _a.spacingTop, noContainer = _a.noContainer, backgroundColor = _a.backgroundColor, classes = _a.classes;
    var firstSlice = contextArray[0];
    var lastSlice = contextArray[contextArray.length - 1];
    var sliceClass = function () {
        if (sliceId === firstSlice.id && sliceId != lastSlice.id)
            return false;
        return spacingDefault
            ? index_module_scss_1["default"]["vertical-spacing-" + spacingDefault]
            : index_module_scss_1["default"]["vertical-spacing-standard"];
    };
    var CSSVariableReferenceValue = backgroundColor ? {
        "--slice-background-color": backgroundColor
    } : {};
    return (React.createElement("section", { style: CSSVariableReferenceValue, className: clsx_1["default"](sliceClass(), { container: noContainer ? false : true }, classes), "data-slice-id": sliceId, "data-slice-type": sliceType, "data-slice-variation": sliceVariation }, children));
}
exports["default"] = SliceSection;
