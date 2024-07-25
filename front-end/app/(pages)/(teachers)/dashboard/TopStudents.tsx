"use client";
import { useStudentContext } from "@/app/contexts/StudentContext";
import React from "react";
import { FaMedal } from "react-icons/fa";

const TopStudents = () => {
  const { students } = useStudentContext();

  const firstThreeStudents = students.slice(0, 3);
  const rankingLabels = ["1st", "2nd", "3rd"];

  return (
    <div className="bg-slate-50 p-4 md:p-6 shadow-lg w-full rounded-xl">
      <h1 className="mb-4 text-lg flex items-center gap-2">
        Top Three Students{" "}
        <span className="text-[#BBA53D]">
          <FaMedal />
        </span>
      </h1>
      <div className="flex flex-col overflow-y-auto items-center justify-center gap-6">
        {firstThreeStudents.map((student, index) => (
          <div
            key={student.email}
            className="odd:bg-[#76BF46] even:bg-yellow-500 w-full items-center py-2 rounded-lg"
          >
            <div className="flex flex-row justify-around items-center">
              <div className="flex bg-white/50 w-[30px] h-[30px] rounded-full p-6 self-start text-center items-center justify-center">
                <span>{rankingLabels[index]}</span>
              </div>
              <div className="flex items-center gap-2 md:gap-4">
                <img
                  src={student.profilePicture}
                  alt={student.name}
                  className="w-6 h-6 md:w-12 md:h-12 rounded-full"
                />
                <p className="mt-2">{student.name}</p>
              </div>
              <div className="mt-2">
                <p className="text-xl font-bold">{student.grade}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStudents;
