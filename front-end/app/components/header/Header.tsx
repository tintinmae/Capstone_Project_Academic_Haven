"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegBell, FaUser } from "react-icons/fa";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-row justify-between items-center w-full p-4 gap-6 shadow-md">
      <div>
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={30}
          height={30}
          className="md:hidden"
        />
      </div>
      <div className="flex flex-row justify-end items-center gap-4">
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

export default Header;
