"use client";
import { useStudentContext } from "@/app/StudentContext";
import React from "react";
import { FaMedal } from "react-icons/fa";

const TopStudents = () => {
  const { students } = useStudentContext();

  const firstThreeStudents = students.slice(0, 3);
  const rankingLabels = ["1st", "2nd", "3rd"];

  return (
    <div className="bg-slate-50 p-6 shadow-lg w-[80vh] rounded-xl">
      <h1 className="mb-4 text-lg flex items-center gap-2">
        Top Three Students{" "}
        <span className="text-[#BBA53D]">
          <FaMedal />
        </span>
      </h1>
      <div className="flex flex-row items-center justify-center gap-6">
        {firstThreeStudents.map((student, index) => (
          <div
            key={student.email}
            className="odd:bg-[#76BF46] even:bg-yellow-500 w-[200px] h-[240px] p-2 flex flex-col items-center px-4 py-6 rounded-lg"
          >
            <div className="mb-4 bg-white/40 w-full text-center py-1 rounded-lg">
              <p className="text-2xl font-bold">{rankingLabels[index]}</p>
            </div>
            <img
              src={student.profilePicture}
              alt={student.name}
              className="w-12 h-12 rounded-full"
            />
            <p className="mt-2">{student.name}</p>
            <div className="mt-2">
              <p className="text-xl font-bold">{student.grade}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStudents;
