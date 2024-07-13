import React from "react";
import CalendarComponent from "./Calendar";
import Timeline from "./Timeline";

interface TimelineItemProps {
  grade: string;
  subject: string;
  groupNumber: string;
  time: Date;
}

const timelineItems: TimelineItemProps[] = [
  {
    grade: "Grade - 7",
    subject: "Algebra",
    groupNumber: "Sampaguita",
    time: new Date(2024, 7, 1, 10, 0),
  },
  {
    grade: "Grade - 7",
    subject: "Biology",
    groupNumber: "Rose",
    time: new Date(2024, 7, 1, 14, 0),
  },
  {
    grade: "Grade - 7",
    subject: "History II",
    groupNumber: "Daisy",
    time: new Date(2024, 7, 2, 15, 0),
  },
];

const Widgets = () => {
  return (
    <div className="p-1 h-full">
      <CalendarComponent />
      <div className="h-50 overflow-auto mt-4">
        <Timeline items={timelineItems} />
      </div>
    </div>
  );
};

export default Widgets;
