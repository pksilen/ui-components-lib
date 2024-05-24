import React from "react";
export type IconRadioButtonProps<T extends string> = Readonly<{
    icon: React.ReactNode;
    onClick: () => void;
    value: T;
}>;
export type IconRadioButtonGroupProps<T extends string> = Readonly<{
    buttons: IconRadioButtonProps<T>[];
    initialValue: string;
}>;
export declare const IconRadioButtonGroup: <T extends string>({ buttons, initialValue, }: IconRadioButtonGroupProps<T>) => import("react/jsx-runtime").JSX.Element;
