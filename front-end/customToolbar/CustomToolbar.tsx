import React from "react";
import { ToolbarProps } from "react-big-calendar";

interface CustomToolbarProps extends ToolbarProps {
  onNavigate: (navigate: "PREV" | "NEXT" | "TODAY" | "DATE") => void;
}

const CustomToolbar: React.FC<CustomToolbarProps> = ({
  label,
  onNavigate,
  onView,
  views,
  view,
}) => {
  const handleNavigate = (action: "PREV" | "NEXT" | "TODAY" | "DATE") => {
    onNavigate(action);
  };

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group mb-4">
        <button
          type="button"
          onClick={() => handleNavigate("TODAY")}
          className="text-xs"
        >
          Today
        </button>
        <button
          type="button"
          onClick={() => handleNavigate("PREV")}
          className="text-xs"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => handleNavigate("NEXT")}
          className="text-xs"
        >
          Next
        </button>
      </span>
      <span className="rbc-toolbar-label text-sm md:text-xl font-bold">
        {label}
      </span>
    </div>
  );
};

export default CustomToolbar;
