import React from "react";
import { ToolbarProps } from "react-big-calendar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface CustomToolbarProps extends ToolbarProps {
  onNavigate: (navigate: "PREV" | "NEXT" | "TODAY" | "DATE") => void;
}

const CustomToolbar: React.FC<CustomToolbarProps> = ({ label, onNavigate }) => {
  const handleNavigate = (action: "PREV" | "NEXT" | "TODAY" | "DATE") => {
    onNavigate(action);
  };

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group mb-4">
        <button
          type="button"
          onClick={() => handleNavigate("PREV")}
          className="text-xs"
        >
          <FaChevronLeft size={16} />
        </button>
        <button
          type="button"
          onClick={() => handleNavigate("TODAY")}
          className="text-xs"
        >
          Today
        </button>
        <button
          type="button"
          onClick={() => handleNavigate("NEXT")}
          className="text-xs"
        >
          <FaChevronRight size={16} />
        </button>
      </span>
      <span className="rbc-toolbar-label text-sm md:text-xl font-bold">
        {label}
      </span>
    </div>
  );
};

export default CustomToolbar;
