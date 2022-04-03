import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  isDelete?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  type,
  disabled,
  isDelete = false,
  children,
  onClick,
}) => {
  const buttonColor = isDelete ? "red" : "blue"; 
  return (
    <button
      type={ type }
      disabled={ disabled }
      onClick={ onClick }
      className={`
        w-full mt-6 tracking-widest
        border-b-${buttonColor}-600 bg-${buttonColor}-500 py-3 text-white font-bold
        hover:bg-${buttonColor}-400 active:translate-y-[0.125rem] active:border-b-${buttonColor}-400
      `}
    >
      { children }
    </button>
  );
};