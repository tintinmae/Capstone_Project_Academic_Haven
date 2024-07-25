import React from "react";

import CardComponent from "./CardComponent";

interface Activity {
  id: number;
  title: string;
  class: string;
  status: string;
}

const activitiesToCheck: Activity[] = [
  {
    id: 1,

    title: "Math Homework",

    class: "Math 101",
    status: "Pending",
  },
  {
    id: 2,

    title: "Science Project",

    class: "Science 201",
    status: "In Review",
  },
  {
    id: 3,

    title: "History Essay",

    class: "History 101",
    status: "Ready to Check",
  },
];

const ActivityComponent: React.FC = () => {
  return (
    <div className="bg-slate-50 w-full rounded-lg shadow-xl p-6">
      <h1 className="md:text-lg mb-4">Activities to Check</h1>
      <div>
        {activitiesToCheck.map((activity) => (
          <CardComponent key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default ActivityComponent;
