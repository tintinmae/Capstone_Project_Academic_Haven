import React from "react";

interface Activity {
  date: Date;
  title: string;
  time: string;
  class: string;
}

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const day = activity.date.getDate();
  const month = activity.date.toLocaleString("default", { month: "short" });

  return (
    <div className="flex flex-row items-center gap-2 justify-around text-xs md:text-sm mb-4">
      <div className="flex flex-col bg-slate-200 rounded">
        <span className="text-xs text-white bg-foreground-700 px-4 py-1 rounded-t">
          {month}
        </span>
        <span className="px-4 py-1">{day}</span>
      </div>
      <div className="flex flex-col">
        <h2 className="text-xs md:text-base font-semibold">{activity.title}</h2>
        <p className="text-gray-500">{activity.class}</p>
      </div>
      <div className="">
        <p className="text-gray-500 text-xs">{activity.time}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
