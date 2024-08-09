"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import { FaRegClipboard, FaUserFriends } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoCalendarClearOutline, IoChevronUp } from "react-icons/io5";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { IconDropdown } from "react-day-picker";
import { LucideClipboard, LucideUser } from "lucide-react";

const AdminSidebar = () => {
  const router = useRouter();
  const active = usePathname();

  const dashboardClicked = () => {
    router.push("/admin_dashboard");
  };

  const classesClicked = () => {
    router.push("/admin_classes");
  };

  const calendarClicked = () => {
    router.push("/admin_calendar");
  };

  const handleStudentsRoute = () => {
    router.push("/users/students");
  };

  const handleTeachersRoute = () => {
    router.push("/users/teachers");
  };
  const handleAdminsRoute = () => {
    router.push("/users/admins");
  };
  const isActive = (path: string) => {
    return active === path
      ? "bg-blue-950 border-b-2 md:border-none text-white p-1 md:bg-white md:text-blue-950 md:rounded-full md:py-2"
      : "text-white font-regular";
  };

  return (
    <div className="flex flex-col md:flex-row px-2 z-20">
      <div
        className={`fixed top-0 left-0 h-full bg-[#152238] transition-transform transform w-56 z-0 hidden md:block`}
      >
        <div className="p-4">
          <div className="flex justify-center">
            <Image src={"/images/logo.png"} alt="logo" width={70} height={70} />
          </div>

          <div className="mt-4 p-2 flex flex-col gap-10 w-full">
            <div
              className={`cursor-pointer flex items-center gap-4 py-2 px-4 hover:bg-white hover:text-blue-950 hover:rounded-full ${isActive(
                "/admin_dashboard"
              )}`}
              onClick={dashboardClicked}
            >
              <GoHome /> Dashboard
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div
                  className={`cursor-pointer flex items-center gap-4 py-2 px-4 hover:bg-white hover:text-blue-950 hover:rounded-full ${isActive(
                    "/users/students"
                  )} ${isActive("/users/teachers")} ${isActive(
                    "/users/admins"
                  )}`}
                  // onClick={filesClicked}
                >
                  <LucideUser size={16} /> Users <IconDropdown />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={handleStudentsRoute}>
                    <span>Students</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleTeachersRoute}>
                    <span>Teachers</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleAdminsRoute}>
                    <span>Admins</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <div
              className={`cursor-pointer flex items-center gap-4 py-2 px-4 hover:bg-white hover:text-blue-950 hover:rounded-full ${isActive(
                "/admin_classes"
              )} ${isActive("/admin_classes/teachersAndStudents")}`}
              onClick={classesClicked}
            >
              <FaUserFriends /> Classes
            </div>
            <div
              className={`cursor-pointer flex items-center gap-4 py-2 px-4 hover:bg-white hover:text-blue-950 hover:rounded-full ${isActive(
                "/admin_calendar"
              )}`}
              onClick={calendarClicked}
            >
              <IoCalendarClearOutline /> Events
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 rounded-t-xl w-full bg-blue-950 flex justify-around p-4 md:hidden">
        <div
          className={`cursor-pointer flex flex-col items-center ${isActive(
            "/admin_dashboard"
          )}`}
          onClick={dashboardClicked}
        >
          <GoHome size={16} />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              className={`cursor-pointer flex flex-row gap-1 items-center ${isActive(
                "/users/students"
              )} ${isActive("/users/teachers")} ${isActive("/users/admins")}`}
            >
              <LucideUser size={16} /> <IoChevronUp size={10} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 md:hidden">
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={handleStudentsRoute}>
                <span className="text-xs">Students</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleTeachersRoute}>
                <span className="text-xs">Teachers</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="text-xs">Admins</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <div
          className={`cursor-pointer flex flex-col items-center ${isActive(
            "/admin_classes"
          )} ${isActive("/admin_classes/teachersAndStudents")}`}
          onClick={classesClicked}
        >
          <FaUserFriends size={14} />
        </div>
        <div
          className={`cursor-pointer flex flex-col items-center ${isActive(
            "/admin_calendar"
          )}`}
          onClick={calendarClicked}
        >
          <IoCalendarClearOutline size={14} />
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
