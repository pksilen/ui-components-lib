"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconRadioButtonGroup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = require("react");
const IconRadioButtonGroup = ({ buttons, initialValue, }) => {
    const [selectedValue, setSelectedValue] = (0, react_1.useState)(initialValue);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const changeSelectedValue = (_, value) => {
        setSelectedValue(value);
    };
    const iconRadioButtonElements = buttons.map(({ icon, onClick, value }) => ((0, jsx_runtime_1.jsx)(material_1.ToggleButton, { "aria-label": value, onClick: onClick, value: value, children: icon }, value)));
    return ((0, jsx_runtime_1.jsx)(material_1.ToggleButtonGroup, { exclusive: true, onChange: changeSelectedValue, size: "small", value: selectedValue, children: iconRadioButtonElements }));
};
exports.IconRadioButtonGroup = IconRadioButtonGroup;
