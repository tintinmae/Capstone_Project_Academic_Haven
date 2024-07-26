import React from "react";
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

interface Quizzes {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  answered: number;
  notAnswered: number;
}

interface QuizProps {
  quizzes: Quizzes[];
}

const Quizzes: React.FC<QuizProps> = ({ quizzes }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md cursor-pointer">
      <h2 className="text-md font-bold mb-4">Quizzes</h2>

      {quizzes.map((quiz) => {
        const totalStudents = quiz.answered + quiz.notAnswered;
        const answeredPercentage = (quiz.answered / totalStudents) * 100;

        return (
          <div
            key={quiz.id}
            className="p-4 border-b cursor-pointer flex justify-between items-center"
            // onClick={() => onActivityClick(quiz)}
          >
            <div>
              <h3 className="text-lg font-bold">{quiz.title}</h3>
              <p>{quiz.description}</p>
              <p>Due Date: {quiz.dueDate}</p>
            </div>
            <div className="w-[50px] h-[50px] relative">
              <CircularProgressbarWithChildren
                value={answeredPercentage}
                styles={buildStyles({
                  textSize: "24px",
                  pathColor: `rgba(62, 152, 199, ${answeredPercentage / 100})`,
                  textColor: "#3e98c7",
                  trailColor: "#d6d6d6",
                })}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold">{`${Math.round(
                    answeredPercentage
                  )}%`}</span>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Quizzes;
