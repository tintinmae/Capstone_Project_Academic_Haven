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
      <span className="rbc-btn-group">
        <button type="button" onClick={() => handleNavigate("TODAY")}>
          Today
        </button>
        <button type="button" onClick={() => handleNavigate("PREV")}>
          Prev
        </button>
        <button type="button" onClick={() => handleNavigate("NEXT")}>
          Next
        </button>
      </span>
      <span className="rbc-toolbar-label">{label}</span>
    </div>
  );
};

export default CustomToolbar;
