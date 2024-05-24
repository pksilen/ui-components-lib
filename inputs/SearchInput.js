"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Search_1 = __importDefault(require("@mui/icons-material/Search"));
const material_1 = require("@mui/material");
const SearchInput = ({ className, onChange, placeholder }) => ((0, jsx_runtime_1.jsx)(material_1.TextField, { className: className, InputProps: {
        startAdornment: ((0, jsx_runtime_1.jsx)(material_1.InputAdornment, { position: "start", children: (0, jsx_runtime_1.jsx)(Search_1.default, {}) }))
    }, onChange: onChange, placeholder: placeholder, variant: "standard" }));
exports.SearchInput = SearchInput;
