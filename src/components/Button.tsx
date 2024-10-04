// src/components/Button.tsx
import React from "react";

interface ButtonProps {
  onClick?: () => void; // Optional function to call on button click
  href?: string; // Optional link to navigate to
  type?: "button" | "submit" | "reset"; // Type of button
  className?: string; // Additional classes for customization
  children: React.ReactNode; // Content to display inside the button
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  href,
  type = "button",
  className,
  children,
}) => {
  const baseClasses = `bg-white w-full text-black font-bold py-2 px-4 rounded shadow hover:bg-blue-600 transition duration-200 ${className}`;

  // If href is provided, render as an anchor element
  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  // Otherwise, render as a button element
  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
};

export default Button;
