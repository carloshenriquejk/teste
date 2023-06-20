import React from "react";

interface ButtonPrps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  isDisabled: boolean;
  text: string;
}

export const Button = (props: ButtonPrps) => {
  return (
    <button {...props} onClick={props.onClick} disabled={props.isDisabled}>
      {props.text}
    </button>
  );
};
