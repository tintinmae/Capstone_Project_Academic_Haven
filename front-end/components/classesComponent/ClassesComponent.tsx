"use client";
import React from "react";
import { FaCalendar, FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";
import CardClass from "../cardClass/CardClass";

const ClassesComponent = () => {
  return (
    <div>
      <div className="flex flex-row">
        <h1 className="font-semibold text-xl">Attendance</h1>
        <div className="ml-auto flex flex-row text-gray-600 text-sm">
          <FaLessThan />
          <FaCalendar />
          <h1>July 19,2024</h1>
          <FaGreaterThan />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="relative w-60 h-12 shadow-lg mt-12 ml-10 flex items-center px-4 rounded">
          <h1 className="text-base font-normal">Select Class</h1>
          <MdArrowDropDown className="ml-auto text-gray-500 hover:text-black cursor-pointer" />
        </div>
        <div className="relative w-60 h-12 shadow-lg mt-12 ml-10 flex items-center px-4 rounded">
          <h1 className="text-base font-normal">Select Subject</h1>
          <MdArrowDropDown className="ml-auto text-gray-500 hover:text-black cursor-pointer" />
        </div>
        <div className="relative w-60 h-12 shadow-lg mt-12 ml-10 flex items-center px-4 rounded">
          <h1 className="text-base font-normal">Select Section</h1>
          <MdArrowDropDown className="ml-auto text-gray-500 hover:text-black cursor-pointer" />
        </div>
        <div className="relative w-60 h-12 shadow-lg mt-12 ml-10 flex items-center px-4 bg-blue-900 rounded">
          <h1 className="text-base font-normal text-white">Take Attendace</h1>
          <MdArrowDropDown className="ml-auto text-white hover:text-black cursor-pointer " />
        </div>
      </div>
      <div className="flex items-center mt-10">
        <span className="text-xl">A</span>
        <hr className="flex-grow ml-2 border-t-2 border-gray-300" />
      </div>
      <div className="mt-6 flex flex-col">
        <div>
          <CardClass />
        </div>
        <div className="mt-60">
          <CardClass />
        </div>
      </div>
      <div className="flex items-center mt-64">
        <span className="text-xl">B</span>
        <hr className="flex-grow ml-2 border-t-2 border-gray-300" />
      </div>
      <div className="mt-6 flex flex-col">
        <div>
          <CardClass />
        </div>
        <div className="mt-60">
          <CardClass />
        </div>
      </div>
    </div>
  );
};

export default ClassesComponent;
