import React from "react";

interface ButtonProps {
  title: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Buttons: React.FC<ButtonProps> = ({ title, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#152238] text-white hover:bg-[#152238]/50 p-4 text-xs text-center rounded-md w-full mb-4 flex items-center justify-center"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {title}
    </button>
  );
};

export default Buttons;
