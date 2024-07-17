import React from "react";
import TimelineItem, { TimelineItemProps } from "./TimelineItem";

interface TimelineProps {
  items: TimelineItemProps[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="container mx-auto p-1 ">
      <div className="bg-white">
        <h2 className="text-sm font-medium py-2">Timeline</h2>
      </div>
      <div className="relative wrap max-h-44 overflow-y-auto lg:max-h-full">
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
