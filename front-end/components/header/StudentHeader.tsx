"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FaRegBell, FaUser } from "react-icons/fa";

const StudentHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname(); // Initialize useRouter
  // Get the current path

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Determine the title based on the current path
  const getTitle = () => {
    if (pathname.includes("/dashboard")) {
      return "Dashboard";
    } else if (pathname.includes("/files")) {
      return "Files";
    } else if (pathname.includes("/classes")) {
      return "Classes";
    }
    return "Calendar";
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white flex justify-between items-center w-full p-4 gap-6 shadow-md z-50">
      <div className="flex items-center gap-4">
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={30}
          height={30}
          className="md:hidden"
        />
        <h1 className="text-sm md:text-xl font-bold md:ml-60">{getTitle()}</h1>{" "}
        {/* Title on the left */}
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-blue-950 text-white p-2 rounded-full">
          <FaRegBell size={14} />
        </div>
        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="cursor-pointer flex items-center"
          >
            <FaUser size={20} />
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentHeader;
