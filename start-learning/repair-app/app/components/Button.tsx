import React from "react";
import clsx from "clsx";

type ButtonProps = {
  label: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "delete";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  label,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  fullWidth = false,
  type,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition focus:outline-none";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
    delete: "border border-red-400 text-red-600 hover:underline",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={clsx(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          widthStyle,
          disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        {label}
      </button>

  );
}
