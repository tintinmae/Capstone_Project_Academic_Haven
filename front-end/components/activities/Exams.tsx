import React from "react";
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

interface Exams {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  answered: number;
  notAnswered: number;
}

interface ExamProps {
  exams: Exams[];
}

const Exams: React.FC<ExamProps> = ({ exams }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md cursor-pointer">
      <h2 className="text-md font-bold mb-4">Exams</h2>

      {exams.map((exam) => {
        const totalStudents = exam.answered + exam.notAnswered;
        const answeredPercentage = (exam.answered / totalStudents) * 100;

        return (
          <div
            key={exam.id}
            className="p-4 border-b cursor-pointer flex justify-between items-center"
            // onClick={() => onActivityClick(exam)}
          >
            <div>
              <h3 className="text-lg font-bold">{exam.title}</h3>
              <p>{exam.description}</p>
              <p>Due Date: {exam.dueDate}</p>
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

export default Exams;
