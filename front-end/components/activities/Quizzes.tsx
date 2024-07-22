import React from "react";

interface Quizzes {
  id: number;
  title: string;
  description: string;
  dueDate: string;
}

interface QuizProps {
  quizzes: Quizzes[];
}

const Quizzes: React.FC<QuizProps> = ({ quizzes }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md cursor-pointer">
      <h2 className="text-md font-bold mb-4">Quizzes</h2>
      <ul>
        {quizzes.map((quizzes) => (
          <li key={quizzes.id} className="mb-4 p-4 border-b border-gray-200">
            <h3 className="text-md font-medium">{quizzes.title}</h3>
            <p className="text-gray-600">{quizzes.description}</p>
            <p className="text-sm text-gray-500">Due: {quizzes.dueDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quizzes;
