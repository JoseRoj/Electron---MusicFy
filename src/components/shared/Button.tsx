import React, { type ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  onClick: () => void;
  text: ReactNode;
  variant?: "primary" | "danger";
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  variant = "primary",
  className,
  disabled,
}) => {
  const variantClasses = {
    primary:
      "bg-primary text-white hover:bg-primary-hover focus:ring-2 focus:ring-green-300 shadow-xs",
    danger:
      "bg-red-600 text-white hover:bg-red-700 4 focus:outline-none focus:ring-none shadow-xs",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "box-border border border-transparent font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none rounded-4xl cursor-pointer ",
        variantClasses[variant],
        {
          "opacity-50 cursor-not-allowed": disabled,
        },
        className, // <- al final, sobrescribe text-white de variantes
      )}
    >
      {text}
    </button>
  );
};
