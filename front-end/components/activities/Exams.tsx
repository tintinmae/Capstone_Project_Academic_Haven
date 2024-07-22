import React from "react";

interface Exams {
  id: number;
  title: string;
  description: string;
  dueDate: string;
}

interface ExamProps {
  exams: Exams[];
}

const Exams: React.FC<ExamProps> = ({ exams }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md cursor-pointer">
      <h2 className="text-md font-bold mb-4">Exams</h2>
      <ul>
        {exams.map((exams) => (
          <li key={exams.id} className="mb-4 p-4 border-b border-gray-200">
            <h3 className="text-md font-medium">{exams.title}</h3>
            <p className="text-gray-600">{exams.description}</p>
            <p className="text-sm text-gray-500">Due: {exams.dueDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exams;
