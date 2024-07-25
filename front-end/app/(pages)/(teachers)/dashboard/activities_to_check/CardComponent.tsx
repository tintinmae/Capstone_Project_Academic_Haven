import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Activities {
  title: string;
  class: string;
  status: string;
}

interface CardProps {
  activity: Activities;
}

const CardComponent: React.FC<CardProps> = ({ activity }) => {
  let progress = 0;
  if (activity.status === "In Review") progress = 50;
  else if (activity.status === "Ready to Check") progress = 100;

  return (
    <div className="flex items-center justify-between px-6 py-2 mb-4 bg-white shadow-md rounded-lg">
      <div className="w-12 h-12">
        <CircularProgressbar
          value={progress}
          styles={buildStyles({
            textSize: "24px",
            pathColor:
              progress === 100 ? "green" : progress === 50 ? "#e6b400" : "red",
            textColor: "black",
            trailColor: "#d6d6d6",
            backgroundColor: "#f8f8f8",
            pathTransitionDuration: 0.5,
          })}
        />
      </div>
      <div className="ml-4 flex-grow flex flex-col">
        <p className="font-semibold text-xs md:text-sm">{activity.title}</p>
        <span className="text-xs md:text-sm text-gray-500">
          {activity.class}
        </span>
      </div>
      <p
        className={`text-xs md:text-sm  ${
          activity.status === "Ready to Check"
            ? "text-green-600"
            : activity.status === "In Review"
            ? "text-yellow-500"
            : "text-red-500"
        }`}
      >
        {activity.status}
      </p>
    </div>
  );
};

export default CardComponent;
