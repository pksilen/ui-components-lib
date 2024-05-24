import React from 'react';
type Props = Readonly<{
    autoFocus?: boolean;
    className?: string;
    inputProps?: object;
    label?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}>;
export declare const TextInput: ({ autoFocus, className, inputProps, label, onChange, value }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
