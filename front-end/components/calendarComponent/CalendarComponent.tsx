"use client";

import React, { useEffect, useState } from "react";
import { EventProps, useEventContext } from "@/app/contexts/EventsContext";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import CustomToolbar from "@/customToolbar/CustomToolbar";
import AddEventModal from "../modals/AddEventModal";

const localizer = momentLocalizer(moment);

const CustomEvent: React.FC<{
  event: { title: string; description: string };
}> = ({ event }) => (
  <span>
    <strong>{event.title}</strong>
    <p>{event.description}</p>
  </span>
);

const CalendarComponent: React.FC = () => {
  const { events, addEvents } = useEventContext();
  const [isOpen, setIsOpen] = useState(false);
  const [calendarHeight, setCalendarHeight] = useState<number>(700);

  useEffect(() => {
    const updateCalendarHeight = () => {
      const windowHeight = window.innerHeight;
      const calendarHeight = Math.max(windowHeight - 300, 600);
      setCalendarHeight(calendarHeight);
    };

    updateCalendarHeight();
    window.addEventListener("resize", updateCalendarHeight);

    return () => window.removeEventListener("resize", updateCalendarHeight);
  }, []);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSaveEvent = (newEvent: {
    title: string;
    description: string;
    dateTime: Date;
  }) => {
    const eventWithId = {
      ...newEvent,
      id: events.length ? events[events.length - 1].id + 1 : 1,
    };
    addEvents(eventWithId);
  };

  return (
    <div className="md:container">
      <div className="md:fixed md:right-[8%] mb-6">
        <button
          className="bg-blue-950 text-white text-xs p-2 w-32 rounded-md hover:bg-blue-950/50"
          onClick={handleOpenModal}
        >
          Add Event
        </button>
      </div>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor={(event: EventProps) => new Date(event.dateTime)}
        endAccessor={(event: EventProps) => new Date(event.dateTime)}
        className="custom-calendar"
        components={{
          toolbar: (props) => (
            <CustomToolbar
              {...props}
              label={props.label}
              onView={props.onView}
              views={props.views}
              view={props.view}
            />
          ),
          event: CustomEvent,
        }}
        style={{ height: calendarHeight }}
      />
      <AddEventModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSave={handleSaveEvent}
      />
    </div>
  );
};

export default CalendarComponent;
