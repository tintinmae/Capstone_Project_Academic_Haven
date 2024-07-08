"use client";
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const CalendarComponent = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="border text-xs"
    />
  );
};

export default CalendarComponent;
