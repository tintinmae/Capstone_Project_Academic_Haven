import React from "react";
import ActivityCard from "./ActivityCard";

const activities = [
  {
    id: 1,
    date: new Date(2024, 6, 25),
    title: "Math Exam",
    time: "10:00 AM - 12:00 PM",
    class: "Sampaguita",
  },
  {
    id: 2,
    date: new Date(2024, 6, 26),
    title: "Math Exam",
    time: "10:00 AM - 12:00 PM",
    class: "Rose",
  },
  {
    id: 3,
    date: new Date(2024, 6, 27),
    title: "Math Exam",
    time: "10:00 AM - 12:00 PM",
    class: "Daisy",
  },
];

const UpcomingActivities: React.FC = () => {
  return (
    <div className="bg-slate-50 w-full rounded-lg shadow-xl p-6">
      <h1 className="mb-2 text-xs md:text-lg">Upcoming Activities</h1>
      <div>
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingActivities;
