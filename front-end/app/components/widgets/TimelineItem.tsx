import React from "react";
import { format } from "date-fns";

export interface TimelineItemProps {
  class: string;
  subject: string;
  groupNumber: string;
  time: Date;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  class: className,
  subject,
  groupNumber,
  time,
}) => {
  return (
    <div className="mb-3 flex justify-center items-center w-full">
      <div className="bg-gray-200 rounded-lg shadow-xl w-80 px-6 py-1">
        <h3 className="mb-1 font-bold text-gray-800 text-xs">{className}</h3>
        <p className="text-xs text-gray-900">
          {subject} - Group {groupNumber}
        </p>
        <span className="text-gray-600 text-xs">{format(time, "PPPpp")}</span>
      </div>
    </div>
  );
};

export default TimelineItem;
