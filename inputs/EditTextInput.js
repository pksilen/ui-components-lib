"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditTextInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./EditTextInput.css");
const TextInput_1 = require("./TextInput");
const EditTextInput = (_a) => {
    var { onEditComplete, text } = _a, restOfProps = __rest(_a, ["onEditComplete", "text"]);
    const [editedText, setEditedText] = (0, react_1.useState)(text);
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            onEditComplete(text);
        }
        else if (event.key === 'Enter') {
            onEditComplete(editedText);
        }
    };
    return ((0, jsx_runtime_1.jsx)(TextInput_1.TextInput, { autoFocus: true, className: "uicl-title-input", inputProps: Object.assign({ onBlur: () => onEditComplete(editedText), onKeyDown: handleKeyDown }, restOfProps), onChange: (event) => setEditedText(event.target.value), value: editedText }));
};
exports.EditTextInput = EditTextInput;
