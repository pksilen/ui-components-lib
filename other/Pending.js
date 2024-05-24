"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pending = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Pending = ({ children, className, fallback }) => ((0, jsx_runtime_1.jsx)("section", { className: className, children: fallback || children }));
exports.Pending = Pending;
