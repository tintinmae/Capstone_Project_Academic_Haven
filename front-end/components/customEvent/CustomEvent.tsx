import React, { useState } from "react";
import { EventProps } from "react-big-calendar";

interface CustomEventProps extends EventProps {
  event: any;
  title: string;
}

const CustomEvent: React.FC<CustomEventProps> = ({ event, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="p-1"
    >
      <p>{title}</p>
      {isHovered && (
        <div className="text-black mt-2 p-2 bg-white border shadow-lg z-10 w-full h-full rounded">
          <p>{title}</p>
          <div className="text-xs">{event.desc}</div>
        </div>
      )}
    </div>
  );
};

export default CustomEvent;
