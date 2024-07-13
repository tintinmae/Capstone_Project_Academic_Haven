import React from "react";

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

const Buttons: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-950 text-white hover:bg-blue-900 p-4 text-xs text-center rounded-md w-full mb-4"
    >
      {title}
    </button>
  );
};

export default Buttons;
