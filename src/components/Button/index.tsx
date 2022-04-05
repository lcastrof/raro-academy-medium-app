import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  color?: 'blue' | 'red';
};

type ColorsType = {
  [key: string]: string;
};

export const Button: React.FC<ButtonProps> = ({
  type,
  disabled,
  color = 'blue',
  children,
  onClick,
}) => {
  const colorClasses: ColorsType = {
    blue: 'border-b-blue-600 bg-blue-500 hover:bg-blue-400 active:border-b-blue-400',
    red: 'border-b-red-600 bg-red-500 hover:bg-red-400 active:border-b-red-400',
  }
  return (
    <button
      type={ type }
      disabled={ disabled }
      onClick={ onClick }
      className={`
        w-full mt-6 tracking-widest
        py-3 text-white font-bold
        ${colorClasses[color]}
      `}
    >
      { children }
    </button>
  );
};