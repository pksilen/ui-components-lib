"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const Button = ({ children, className, onClick, variant }) => ((0, jsx_runtime_1.jsx)(material_1.Button, { className: className, color: "primary", onClick: onClick, variant: variant !== null && variant !== void 0 ? variant : 'contained', children: children }));
exports.Button = Button;
