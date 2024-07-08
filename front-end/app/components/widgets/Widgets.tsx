import React from "react";
import CalendarComponent from "./Calendar";
import Timeline from "./Timeline";

interface TimelineItemProps {
  class: string;
  subject: string;
  groupNumber: string;
  time: Date;
}

const timelineItems: TimelineItemProps[] = [
  {
    class: "Math",
    subject: "Algebra",
    groupNumber: "1A",
    time: new Date(2024, 7, 1, 10, 0),
  },
  {
    class: "Science",
    subject: "Biology",
    groupNumber: "2B",
    time: new Date(2024, 7, 1, 14, 0),
  },
  {
    class: "History",
    subject: "World War II",
    groupNumber: "3C",
    time: new Date(2024, 7, 2, 9, 0),
  },
];

const Widgets = () => {
  return (
    <div className="p-2 h-full">
      <CalendarComponent />
      <div className="h-50 overflow-auto">
        <Timeline items={timelineItems} />
      </div>
    </div>
  );
};

export default Widgets;
