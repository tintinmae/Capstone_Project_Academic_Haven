import React, { useState, useEffect } from "react";
import { EventProps } from "@/app/contexts/EventsContext";

interface EditEventFormProps {
  event: EventProps;
  onSave: (updatedEvent: EventProps) => void;
  onCancel: () => void;
}

const EditEventForm: React.FC<EditEventFormProps> = ({
  event,
  onSave,
  onCancel,
}) => {
  const [title, setTitle] = useState(event.title);
  const [description, setDescription] = useState(event.description);
  const [dateTime, setDateTime] = useState(
    event.dateTime.toISOString().slice(0, 16)
  );

  const handleSave = () => {
    onSave({
      ...event,
      title,
      description,
      dateTime: new Date(dateTime),
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <h2>Edit Event</h2>
      <label>
        Title:{" "}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border text-xs p-2 rounded"
        />
      </label>
      <label>
        Description:{" "}
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border text-xs p-2 rounded"
        />
      </label>
      <label>
        Date & Time:{" "}
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          className="border text-xs p-2 rounded"
        />
      </label>
      <div className="flex gap-4 mt-4">
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-600 text-white text-xs p-2 rounded"
        >
          Save
        </button>
        <button
          onClick={onCancel}
          className="border border-gray-500 hover:bg-slate-200 text-black text-xs p-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditEventForm;
