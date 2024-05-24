import { useMediaQuery } from '@mui/material';
import React from 'react';
import { Button } from './Button';
import { IconButton } from './IconButton';
import './IconOrButton.css';

type Props = Readonly<{
  icon: React.ReactNode;
  onClick: () => void;
  text: string;
}>;

export const IconOrButton = ({ icon, onClick, text }: Props) => {
  const isPortraitPhone = useMediaQuery('(max-width:480px)');

  return isPortraitPhone ? (
    <IconButton icon={icon} onClick={onClick} />
  ) : (
    <Button className="uicl-button" onClick={onClick} variant="text">
      {text}
    </Button>
  );
};
