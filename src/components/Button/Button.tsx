import React from 'react';
import { Button as MUIButton, ButtonProps } from '@mui/material';

interface IButtonProps extends ButtonProps {
  text?: string;
}
const Button = ({ text, ...props }: IButtonProps) => {
  return (
    <MUIButton {...props} className={`button-${text}`}>
      {text}
    </MUIButton>
  );
};

export default Button;
