"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import { FaClipboardList, FaUserFriends } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoCalendarClearOutline, IoPeopleOutline } from "react-icons/io5";
import { PiFolders } from "react-icons/pi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { IconDropdown } from "react-day-picker";

const AdminSidebar = () => {
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
    router.push("/events");
  };
  const filesClicked = () => {
    router.push("/users");
  };

  const calendarClicked = () => {
    router.push("/admin_calendar");
  };

  const handleStudentsRoute = () => {
    router.push("/users/students");
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
                    "/users"
                  )}`}
                  onClick={filesClicked}
                >
                  <FaUserFriends /> Users <IconDropdown />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={handleStudentsRoute}>
                    <span>Students</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Teachers</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Staff</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <div
              className={`cursor-pointer flex items-center gap-4 py-2 px-4 hover:bg-white hover:text-blue-950 hover:rounded-full ${isActive(
                "/events"
              )}`}
              onClick={classesClicked}
            >
              <FaClipboardList /> Events
            </div>
            <div
              className={`cursor-pointer flex items-center gap-4 py-2 px-4 hover:bg-white hover:text-blue-950 hover:rounded-full ${isActive(
                "/admin_calendar"
              )}`}
              onClick={calendarClicked}
            >
              <IoCalendarClearOutline /> Calendar
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
        <div
          className={`cursor-pointer flex flex-col items-center ${isActive(
            "/users"
          )}`}
          onClick={filesClicked}
        >
          <FaUserFriends size={16} />
        </div>
        <div
          className={`cursor-pointer flex flex-col items-center ${isActive(
            "/events"
          )}`}
          onClick={classesClicked}
        >
          <FaClipboardList size={16} />
        </div>
        <div
          className={`cursor-pointer flex flex-col items-center ${isActive(
            "/admin_calendar"
          )}`}
          onClick={calendarClicked}
        >
          <IoCalendarClearOutline size={16} />
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
