"use client";
import { useStudentContext } from "@/app/contexts/StudentContext";
import React, { useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import TopStudents from "./TopStudents";
import ProgressAttendance from "./ProgressAttendance";
import UpcomingActivities from "./upcoming_activities/UpcomingActivities";
import ActivityComponent from "./activities_to_check/ToCheckComponent";
import { useUserContext } from "@/app/contexts/UserContext";

const DashboardComponent = () => {
  const { students } = useStudentContext();
  const { user, setUser } = useUserContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       // Simulate an API call
  //       const response = await fetch("/api/user");
  //       const data = await response.json();
  //       setUser(data);
  //       setLoading(false);
  //     } catch (err) {
  //       setError("Failed to load user data");
  //       setLoading(false);
  //     }
  //   };

  //   fetchUserData();
  // }, [setUser]);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;
  // if (!user) return <div>Please log in</div>;
  return (
    <div className="">
      <h1 className="text-xl md:text-2xl text-slate-500 mb-6">
        Welcome, Teacher {user?.firstName}!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 md:ml-10">
        <div className="flex p-2 2xl:p-4 gap-8 items-center shadow-xl rounded-lg justify-left border-l-4 border-slate-500 bg-slate-50 2xl:w-[90%]">
          <div className="px-2 py-1 border-r">
            <FaUserFriends size={20} />
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
            <FaUserFriends size={20} />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm lg:text-lg">Total Classes</p>
            <h1 className="font-bold text-green-900 text-md lg:text-xl">10</h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProgressAttendance />
        <TopStudents />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <UpcomingActivities />
        <ActivityComponent />
      </div>
    </div>
  );
};

export default DashboardComponent;
