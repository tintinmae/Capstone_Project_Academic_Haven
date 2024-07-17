"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { PiFolders } from "react-icons/pi";

const Sidebar = () => {
  const router = useRouter();
  const active = usePathname();
  // const [isOpen, setIsOpen] = useState(true);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

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
      ? "bg-blue-950 border-b-2 md:border-none text-white p-1 md:bg-white md:text-blue-950 md:rounded-full md:py-2"
      : "text-white font-regular";
  };

  return (
    <div className="flex flex-col md:flex-row px-2 z-20">
      <div
        className={`fixed top-0 left-0 h-full bg-blue-950 transition-transform transform w-56 z-0 hidden md:block`}
      >
        <div className="p-4">
          <div className="flex justify-center">
            <Image src={"/images/logo.png"} alt="logo" width={70} height={70} />
          </div>

          <div className="mt-4 p-2 flex flex-col gap-10 w-full">
            <div
              className={`cursor-pointer flex items-center gap-4 py-2 px-4 hover:bg-white hover:text-blue-950 hover:rounded-full ${isActive(
                "/dashboard"
              )}`}
              onClick={dashboardClicked}
            >
              <GoHome /> Dashboard
            </div>
            <div
              className={`cursor-pointer flex items-center gap-4 py-2 px-4 hover:bg-white hover:text-blue-950 hover:rounded-full ${isActive(
                "/files"
              )}`}
              onClick={filesClicked}
            >
              <PiFolders /> Files
            </div>
            <div
              className={`cursor-pointer flex items-center gap-4 py-2 px-4 hover:bg-white hover:text-blue-950 hover:rounded-full ${isActive(
                "/classes"
              )}`}
              onClick={classesClicked}
            >
              <IoPeopleOutline /> Classes
            </div>
            <div
              className={`cursor-pointer flex items-center gap-4 py-2 px-4 hover:bg-white hover:text-blue-950 hover:rounded-full ${isActive(
                "/calendar"
              )}`}
              onClick={calendarClicked}
            >
              <FaRegCalendarAlt /> Calendar
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-blue-950 flex justify-around p-4 md:hidden">
        <div
          className={`cursor-pointer flex flex-col items-center ${isActive(
            "/dashboard"
          )}`}
          onClick={dashboardClicked}
        >
          <GoHome size={16} />
          {/* <span className="text-xs">Dashboard</span> */}
        </div>
        <div
          className={`cursor-pointer flex flex-col items-center ${isActive(
            "/files"
          )}`}
          onClick={filesClicked}
        >
          <PiFolders size={16} />
          {/* <span className="text-xs">Files</span> */}
        </div>
        <div
          className={`cursor-pointer flex flex-col items-center ${isActive(
            "/classes"
          )}`}
          onClick={classesClicked}
        >
          <IoPeopleOutline size={16} />
          {/* <span className="text-xs">Classes</span> */}
        </div>
        <div
          className={`cursor-pointer flex flex-col items-center ${isActive(
            "/calendar"
          )}`}
          onClick={calendarClicked}
        >
          <FaRegCalendarAlt size={16} />
          {/* <span className="text-xs">Calendar</span> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
