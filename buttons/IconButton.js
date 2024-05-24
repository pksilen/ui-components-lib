"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const IconButton = ({ className, icon, onClick }) => ((0, jsx_runtime_1.jsx)(material_1.IconButton, { className: className, onClick: onClick, children: icon }));
exports.IconButton = IconButton;
