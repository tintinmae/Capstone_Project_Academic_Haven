import React from "react";
import "/styles/button.css";

interface ButtonProps {
  title: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Buttons: React.FC<ButtonProps> = ({ title, icon, onClick }) => {
  return (
    <button onClick={onClick} className="custom-btn btn-2 mb-6">
      <div className="flex text-xs">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </div>
    </button>
  );
};

export default Buttons;
