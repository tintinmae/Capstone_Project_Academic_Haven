"use client";
import { useStudentContext } from "@/app/StudentContext";
import React from "react";
import { FaUserFriends } from "react-icons/fa";
import TopStudents from "./TopStudents";
import ProgressAttendance from "./ProgressAttendance";

const DashboardComponent = () => {
  const { students } = useStudentContext();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl md:text-2xl text-slate-500 mb-6">
        Welcome, Teacher!
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="flex p-2 2xl:p-4 gap-8 items-center shadow-xl rounded-lg justify-left border-l-4 border-slate-500 bg-slate-50 2xl:w-[90%]">
          <div className="px-2 py-1 border-r">
            <FaUserFriends size={24} />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm lg:text-lg">Total Students</p>
            <h1 className="font-bold text-green-900 text-md lg:text-xl">
              {students.length}
            </h1>
          </div>
        </div>
        <div className="flex p-2 2xl:p-4 gap-8 items-center shadow-xl rounded-lg justify-left border-l-4 border-slate-500 bg-slate-50 2xl:w-[90%]">
          <div className="px-2 py-1 border-r">
            <FaUserFriends size={24} />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm lg:text-lg">Total Classes</p>
            <h1 className="font-bold text-green-900 text-md lg:text-xl">10</h1>
          </div>
        </div>
        <div className="flex p-2 2xl:p-4 gap-8 items-center shadow-xl rounded-lg justify-left border-l-4 border-slate-500 bg-slate-50 2xl:w-[90%]">
          <div className="px-2 py-1 border-r">
            <FaUserFriends size={24} />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm lg:text-lg">Total Students</p>
            <h1 className="font-bold text-green-900 text-md lg:text-xl">
              {students.length}
            </h1>
          </div>
        </div>
        {/* <div className="flex gap-8 items-center shadow-xl rounded-lg justify-left border-l-4 border-slate-500 bg-slate-50">
          <div className="p-6 border-r">
            <FaUserFriends size={28} />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <p className="text-sm lg:text-lg">Total Students</p>
            <h1 className="font-bold text-green-900 text-md lg:text-2xl">
              {students.length}
            </h1>
          </div>
        </div> */}
      </div>

      <div className="grid grid-cols-2 gap-[245px]">
        <TopStudents />
        <ProgressAttendance />
      </div>
    </div>
  );
};

export default DashboardComponent;
