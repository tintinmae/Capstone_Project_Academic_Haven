import React from "react";
import TimelineItem, { TimelineItemProps } from "./TimelineItem";

interface TimelineProps {
  items: TimelineItemProps[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="container mx-auto p-1 h-full overflow-auto">
      <h2 className="text-sm font-medium mb-4">Timeline</h2>
      <div className="relative wrap overflow-hidden h-full">
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
