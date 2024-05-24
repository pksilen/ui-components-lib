import './EditTextInput.css';
type Props = Readonly<{
    onEditComplete: (newText: string) => void;
    text: string;
}>;
export declare const EditTextInput: ({ onEditComplete, text, ...restOfProps }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
