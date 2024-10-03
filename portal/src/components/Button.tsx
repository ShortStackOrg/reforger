"use client";  // This makes the component a client component
//Button goes here
import Button from '@mui/material/Button';
import React from 'react';

type ButtonProps = {
    text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({ text, onClick }: ButtonProps) => {
  return (
    <Button
      variant="contained"
      color="primary"  
      size="large"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CustomButton;