import React, { useState } from "react";

interface AddEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (event: {
    title: string;
    description: string;
    dateTime: Date;
  }) => void;
}

const AddEventModal: React.FC<AddEventModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState("");

  const handleSubmit = () => {
    if (title && description && dateTime) {
      onSave({
        title,
        description,
        dateTime: new Date(dateTime),
      });
      onClose();
    } else {
      alert("Please fill out all fields");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg flex flex-col md:w-[20%]">
        <h2 className="text-xl mb-4 text-center">Add Event</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-2 p-4 border text-xs rounded bg-slate-50"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mb-2 p-4 border text-xs rounded bg-slate-50"
        />
        <div className="flex flex-col mt-4">
          <label htmlFor="dateTime">Date and Time</label>
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            className="mb-2 p-4 border text-xs rounded bg-slate-50"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 p-2 border rounded hover:bg-slate-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="p-2 border rounded bg-blue-500 hover:bg-blue-600 text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEventModal;
