import React from 'react';
import './IconOrButton.css';
type Props = Readonly<{
    icon: React.ReactNode;
    onClick: () => void;
    text: string;
}>;
export declare const IconOrButton: ({ icon, onClick, text }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
