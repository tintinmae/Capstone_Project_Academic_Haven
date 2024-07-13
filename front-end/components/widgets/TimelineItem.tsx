import React from "react";
import { format } from "date-fns";

export interface TimelineItemProps {
  grade: string;
  subject: string;
  groupNumber: string;
  time: Date;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  grade: className,
  subject,
  groupNumber,
  time,
}) => {
  return (
    <div className="mb-3 flex justify-center items-center w-full">
      <div className="bg-gray-200 rounded-xl shadow w-80 px-4 py-2">
        <h3 className=" font-bold text-gray-800 text-xs">{className}</h3>
        <p className="text-sm text-gray-900">{subject}</p>
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-400">Section {groupNumber}</p>
          <span className="text-gray-400 text-xs">{format(time, "p")}</span>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
