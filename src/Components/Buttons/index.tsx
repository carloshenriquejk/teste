import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  isDisabled: boolean;
  text: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button {...props} onClick={props.onClick} disabled={props.isDisabled}>
      {props.text}
    </button>
  );
};
