"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  FaBars,
  FaCalendarAlt,
  FaFileAlt,
  FaHome,
  FaTimes,
  FaUserFriends,
} from "react-icons/fa";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Sidebar = () => {
  const router = useRouter();
  const active = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const dashboardClicked = () => {
    router.push("/dashboard");
  };

  const classesClicked = () => {
    router.push("/classes");
  };
  const filesClicked = () => {
    router.push("/files");
  };

  const calendarClicked = () => {
    router.push("/calendar");
  };

  const isActive = (path: string) => {
    return active === path
      ? "bg-blue-950 font-bold md:font-regular text-white md:text-blue-950 rounded-full md:bg-white"
      : "text-white font-regular";
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div
        className={`fixed top-0 left-0 h-full bg-blue-950 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 z-10 hidden md:block`}
      >
        <div className="p-4">
          <div className="flex justify-center">
            <Image src={"/images/logo.png"} alt="logo" width={70} height={70} />
          </div>

          <div className="mt-4 p-10 flex flex-col gap-10">
            <div
              className={`cursor-pointer flex items-center gap-4 py-2 px-4 hover:bg-white hover:text-blue-950 hover:rounded-full ${isActive(
                "/dashboard"
              )}`}
              onClick={dashboardClicked}
            >
              <FaHome /> Dashboard
            </div>
            <div
              className={`cursor-pointer flex items-center gap-4 py-2 px-4 hover:bg-white hover:text-blue-950 hover:rounded-full ${isActive(
                "/files"
              )}`}
              onClick={filesClicked}
            >
              <FaFileAlt /> Files
            </div>
            <div
              className={`cursor-pointer flex items-center gap-4 py-2 px-4 hover:bg-white hover:text-blue-950 hover:rounded-full ${isActive(
                "/classes"
              )}`}
              onClick={classesClicked}
            >
              <FaUserFriends /> Classes
            </div>
            <div
              className={`cursor-pointer flex items-center gap-4 py-2 px-4 hover:bg-white hover:text-blue-950 hover:rounded-full ${isActive(
                "/calendar"
              )}`}
              onClick={calendarClicked}
            >
              <FaCalendarAlt /> Calendar
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-1 ${isOpen ? "ml-64" : "ml-0"} md:ml-0`}>
        <button
          className="p-2 bg-white rounded-full z-20 text-blue-950 md:hidden"
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <IoIosArrowDropleft className="absolute top-2 bg-white" />
          ) : (
            <IoIosArrowDropright className="absolute top-2 left-2" />
          )}
        </button>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-blue-950 flex justify-around p-4 md:hidden">
        <div
          className={`cursor-pointer flex flex-col items-center ${isActive(
            "/dashboard"
          )}`}
          onClick={dashboardClicked}
        >
          <FaHome size={24} />
          <span>Dashboard</span>
        </div>
        <div
          className={`cursor-pointer flex flex-col items-center ${isActive(
            "/files"
          )}`}
          onClick={filesClicked}
        >
          <FaFileAlt size={24} />
          <span>Files</span>
        </div>
        <div
          className={`cursor-pointer flex flex-col items-center ${isActive(
            "/classes"
          )}`}
          onClick={classesClicked}
        >
          <FaUserFriends size={24} />
          <span>Classes</span>
        </div>
        <div
          className={`cursor-pointer flex flex-col items-center ${isActive(
            "/calendar"
          )}`}
          onClick={calendarClicked}
        >
          <FaCalendarAlt size={24} />
          <span>Calendar</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
