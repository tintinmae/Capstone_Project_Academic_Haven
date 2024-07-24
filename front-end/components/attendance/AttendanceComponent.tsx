"use client";
import { useStudentContext } from "@/app/StudentContext";
import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import SelectSection from "./SelectSection";
import SelectClass from "./SelectClass";
import { format } from "date-fns";

const AttendanceComponent: React.FC = () => {
  const { students } = useStudentContext();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.valueAsDate);
  };
  return (
    <div className="container  p-4">
      <div className="flex items-center md:justify-end gap-4 mb-6">
        <SelectClass />
        <SelectSection />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <label
          htmlFor="attendance-date"
          className="block md:text-sm font-medium text-gray-700 text-xs"
        >
          Attendance Date:
        </label>
        <input
          type="date"
          id="attendance-date"
          className="mt-1 block w-[150px] text-xs py-2 px-2 sm:w-auto border rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={selectedDate ? format(selectedDate, "yyyy-MM-dd") : ""}
          onChange={handleDateChange}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-xs md:text-md">
          <thead>
            <tr className="odd:bg-white even:bg-slate-100">
              <th className="px-4 py-2 border-b border-dashed border-gray-300">
                Student Roll
              </th>
              <th className="px-4 py-2 border-b border-dashed border-gray-300 text-left">
                Name
              </th>
              <th className="px-4 py-2 border-b border-dashed border-gray-300">
                Attendance
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr
                key={student.email}
                className="text-center odd:bg-white even:bg-slate-100"
              >
                <td className="px-4 py-4 border-b border-dashed border-gray-300">
                  {student.id}
                </td>
                <td className="px-4 py-2 border-b border-dashed border-gray-300 text-left">
                  <span className="text-xs md:text-md">
                    <img
                      src={student.profilePicture}
                      alt={student.name}
                      className="hidden md:inline-block w-6 h-6 rounded-full mr-2"
                    />
                    {student.name}
                  </span>
                </td>
                <td className="px-4 py-2 border-b border-dashed border-gray-300">
                  <RadioGroup className="flex flex-row items-center justify-center">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="present"
                        id={`present-${student.email}`}
                      />
                      <Label
                        htmlFor={`present-${student.email}`}
                        className="text-xs md:text-md"
                      >
                        Present
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="absent"
                        id={`absent-${student.email}`}
                      />
                      <Label
                        htmlFor={`absent-${student.email}`}
                        className="text-xs md:text-md"
                      >
                        Absent
                      </Label>
                    </div>
                  </RadioGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceComponent;
