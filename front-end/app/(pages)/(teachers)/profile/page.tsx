"use client";
import { useUserContext } from "@/app/contexts/UserContext";
import Layout from "@/components/layout/Layout";
import React from "react";
import { FaBirthdayCake, FaCamera } from "react-icons/fa";
import { format } from "date-fns";

const ProfilePage: React.FC = () => {
  const { user } = useUserContext();

  if (!user) return <div>Please login to view your profile.</div>;

  // Format the birth date
  const formattedBirthDate = format(new Date(user.b_date), "PP");

  return (
    <Layout>
      <div className="container border-b-2 flex flex-col items-center py-6">
        <div className="flex flex-col items-center gap-6 ">
          <div className="relative">
            <img
              src={user.profilePicture}
              alt={user.firstName}
              className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:h-[200px] lg:w-[200px] rounded-full"
            />
            {/* <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-blue-600/50 p-2 rounded-full">
              <FaCamera className="text-white" />
            </div> */}
          </div>
          <div className="mt-4">
            <p className="md:text-sm lg:text-xl font-medium flex flex-col items-center">
              <span>
                {user.firstName} {user.lastName}
              </span>{" "}
              <span className="text-xs text-slate-400 italic">
                {user.email}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="container p-4">
        <h2 className="mb-4">Personal Details</h2>
        <div>
          <p className="text-slate-500 flex items-center gap-2">
            <FaBirthdayCake /> {formattedBirthDate}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
