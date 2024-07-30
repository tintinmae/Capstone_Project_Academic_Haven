"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

export interface EventProps {
  id: number;
  title: string;
  description: string;
  dateTime: Date;
}

interface EventContextProps {
  events: EventProps[];
  addEvents: (event: EventProps) => void;
  updateEvents: (event: EventProps) => void;
  deleteEvents: (id: number) => void;
}
const EventContext = createContext<EventContextProps | undefined>(undefined);

interface EventProviderProps {
  children: ReactNode;
}

export const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
  const [events, setEvents] = useState<EventProps[]>([
    {
      id: 1,
      title: "Teachers' Meeting",
      description: "All teachers of junior high school.",
      dateTime: new Date(2024, 7, 20),
    },
  ]);

  const addEvents = (event: EventProps) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };
  const updateEvents = (event: EventProps) => {
    setEvents(events.map((e) => (e.id === event.id ? event : e)));
  };

  const deleteEvents = (id: number) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  return (
    <EventContext.Provider
      value={{ events, addEvents, updateEvents, deleteEvents }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = (): EventContextProps => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEventContext must be used within a EventProvider");
  }
  return context;
};
