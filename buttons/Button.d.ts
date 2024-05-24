import React from 'react';
type Props = Readonly<{
    children: React.ReactNode;
    className?: string;
    onClick: () => void;
    variant?: 'text' | 'contained' | 'outlined';
}>;
export declare const Button: ({ children, className, onClick, variant }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
