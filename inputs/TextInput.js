"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const TextInput = ({ autoFocus, className, inputProps, label, onChange, value }) => ((0, jsx_runtime_1.jsx)(material_1.TextField, { autoFocus: autoFocus, className: className, InputProps: inputProps, fullWidth: true, label: label, onChange: onChange, value: value, variant: "standard" }));
exports.TextInput = TextInput;
