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
  return (
    <button
      type={ type }
      disabled={ disabled }
      onClick={ onClick }
      className={isDelete ? `
        w-full mt-6 tracking-widest
        border-b-red-600 bg-red-500 py-3 text-white font-bold
        hover:bg-red-400 active:translate-y-[0.125rem] active:border-b-red-400
      ` : `
        w-full mt-6 tracking-widest
        border-b-blue-600 bg-blue-500 py-3 text-white font-bold
        hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400
      `}
    >
      { children }
    </button>
  );
};