// Header.tsx
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaRegBell, FaUser } from "react-icons/fa";
import { useUserContext } from "@/app/contexts/UserContext";
import Modal from "../modals/Modal";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUserContext();

  const handleRoute = () => {
    router.push("/login");
  };

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
    <div className="fixed top-0 left-0 right-0 bg-white flex justify-between items-center w-full p-4 gap-6 shadow-md z-10">
      <div className="flex items-center gap-4">
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={30}
          height={30}
          className="md:hidden"
        />
        <h1 className="text-sm md:text-xl font-bold md:ml-60">{getTitle()}</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-blue-950 text-white p-2 rounded-full">
          <FaRegBell size={14} />
        </div>
        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="cursor-pointer flex items-center gap-2"
          >
            {user ? (
              <>
                <Image
                  src={user.profilePicture}
                  alt={user.firstName}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <span className="text-sm font-medium hidden md:block">
                  {user.firstName} {user.lastName}
                </span>
              </>
            ) : (
              <FaUser size={20} />
            )}
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs ">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs ">
                  Settings
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs "
                  onClick={handleIsOpen}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <Modal show={isOpen} onClose={handleClose}>
        <div className="flex flex-col items-center gap-6 p-10">
          <p className="text-lg">Are you sure you want to logout?</p>
          <div className="flex gap-4">
            <button
              className="text-gray-700 bg-gray-200 hover:bg-gray-300 py-2 px-6 rounded-lg"
              onClick={handleClose}
            >
              No
            </button>
            <button
              className="text-white bg-red-600 hover:bg-red-700 py-2 px-6 rounded-lg"
              onClick={handleRoute}
            >
              Yes
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
