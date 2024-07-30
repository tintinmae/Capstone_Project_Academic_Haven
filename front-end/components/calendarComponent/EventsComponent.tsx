"use client";
import React, { useState } from "react";
import { EventProps, useEventContext } from "@/app/contexts/EventsContext";
import { FaRegClock, FaTrash, FaEdit } from "react-icons/fa";
import { groupAndSortEventsByMonth } from "@/lib/groupEvents";
import EditEventForm from "./EditEventForm";
import SearchBar from "../searchbar/SearchBar";

const EventsComponent: React.FC = () => {
  const { events, deleteEvents, updateEvents } = useEventContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [editingEvent, setEditingEvent] = useState<number | null>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedEvents = groupAndSortEventsByMonth(filteredEvents);

  const handleEdit = (id: number) => {
    setEditingEvent(id);
  };

  const handleSave = (updatedEvent: EventProps) => {
    updateEvents(updatedEvent);
    setEditingEvent(null);
  };

  const handleCancel = () => {
    setEditingEvent(null);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      deleteEvents(id);
    }
  };

  return (
    <div className="container flex flex-col gap-4 text-xs md:text-base">
      <div>
        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      </div>
      {Object.keys(groupedEvents).map((monthYear) => (
        <div key={monthYear} className="bg-slate-50 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">{monthYear}</h2>
          {groupedEvents[monthYear].map((event) => (
            <div
              key={event.id}
              className="flex items-center justify-between border-l-2 border-x-blue-500 px-4 py-2 mb-4"
            >
              {editingEvent === event.id ? (
                <EditEventForm
                  event={event}
                  onSave={handleSave}
                  onCancel={handleCancel}
                />
              ) : (
                <div className="flex w-full justify-between">
                  <div>
                    <h3>{event.title}</h3>
                    <p className="text-gray-500 text-xs">{event.description}</p>
                    <div className="flex items-center text-sm text-gray-600 gap-2 mt-2">
                      <FaRegClock />
                      <span className="text-xs">
                        {event.dateTime.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(event.id)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEdit size={14} />
                    </button>
                    <button
                      onClick={() => handleDelete(event.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash size={14} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default EventsComponent;
