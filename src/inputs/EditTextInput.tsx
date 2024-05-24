import { KeyboardEvent, useState } from 'react';
import './EditTextInput.css';
import { TextInput } from './TextInput';

type Props = Readonly<{
  onEditComplete: (newText: string) => void;
  text: string;
}>;

export const EditTextInput = ({ onEditComplete, text, ...restOfProps }: Props) => {
  const [editedText, setEditedText] = useState(text);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onEditComplete(text);
    } else if (event.key === 'Enter') {
      onEditComplete(editedText);
    }
  };

  return (
    <TextInput
      autoFocus
      className="uicl-title-input"
      inputProps={{
        onBlur: () => onEditComplete(editedText),
        onKeyDown: handleKeyDown,
        ...restOfProps
      }}
      onChange={(event) => setEditedText(event.target.value)}
      value={editedText}
    />
  );
};
