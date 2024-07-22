import React from "react";

interface Assignment {
  id: number;
  title: string;
  description: string;
  dueDate: string;
}

interface AssignmentsProps {
  assignments: Assignment[];
}

const Assignments: React.FC<AssignmentsProps> = ({ assignments }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md cursor-pointer">
      <h2 className="text-md font-bold mb-4">Assignments</h2>
      <ul>
        {assignments.map((assignment) => (
          <li key={assignment.id} className="mb-4 p-4 border-b border-gray-200">
            <h3 className="text-md font-medium">{assignment.title}</h3>
            <p className="text-gray-600">{assignment.description}</p>
            <p className="text-sm text-gray-500">Due: {assignment.dueDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assignments;
