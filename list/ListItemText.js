"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItemText = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const ListItemText = ({ className, onDoubleClick, text }) => ((0, jsx_runtime_1.jsx)(material_1.ListItemText, { className: className, onDoubleClick: onDoubleClick, primary: text }));
exports.ListItemText = ListItemText;
