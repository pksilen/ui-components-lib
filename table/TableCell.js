"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCell = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const TableCell = ({ children, className, onDoubleClick }) => ((0, jsx_runtime_1.jsx)(material_1.TableCell, { className: className, onDoubleClick: onDoubleClick, children: children }));
exports.TableCell = TableCell;
