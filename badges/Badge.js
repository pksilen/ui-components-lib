"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const StyledBadge = (0, material_1.styled)(material_1.Badge)(() => ({
    '& .MuiBadge-badge': {
        fontSize: '16px',
        padding: '2px 4px',
        right: -3,
        top: 15
    }
}));
const Badge = ({ children, color, content }) => ((0, jsx_runtime_1.jsx)(StyledBadge, { badgeContent: (0, jsx_runtime_1.jsx)("span", { title: "Undone todo count", children: content }), color: color, role: "status", children: children }));
exports.Badge = Badge;
