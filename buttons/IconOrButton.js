"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconOrButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const Button_1 = require("./Button");
const IconButton_1 = require("./IconButton");
require("./IconOrButton.css");
const IconOrButton = ({ icon, onClick, text }) => {
    const isPortraitPhone = (0, material_1.useMediaQuery)('(max-width:480px)');
    return isPortraitPhone ? ((0, jsx_runtime_1.jsx)(IconButton_1.IconButton, { icon: icon, onClick: onClick })) : ((0, jsx_runtime_1.jsx)(Button_1.Button, { className: "uicl-button", onClick: onClick, variant: "text", children: text }));
};
exports.IconOrButton = IconOrButton;
