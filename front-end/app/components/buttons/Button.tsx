import React from "react";

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-950 text-white hover:bg-blue-900 p-4 text-sm text-center rounded-md"
    >
      {title}
    </button>
  );
};

export default Button;
