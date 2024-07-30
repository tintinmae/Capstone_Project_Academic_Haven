"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaRegBell, FaUser } from "react-icons/fa";
import { useUserContext } from "@/app/contexts/UserContext";
import Modal from "../modals/Modal";
import { Sidebar } from "primereact/sidebar";
import { GoGear } from "react-icons/go";

const AdminHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUserContext();

  const handleRoute = () => {
    router.push("/login");
  };

  const handleProfile = () => {
    router.push("/profile");
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
    if (pathname.includes("/admin_dashboard")) {
      return "Dashboard";
    } else if (pathname.includes("/users/students")) {
      return "Students";
    } else if (pathname.includes("/users/teachers")) {
      return "Teachers";
    } else if (pathname.includes("/users/admins")) {
      return "Admins";
    } else if (pathname.includes("/admin_classes")) {
      return "Classes";
    } else if (pathname.includes("/admin_calendar")) {
      return "Events";
    }
    return pathname;
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
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs"
                  onClick={handleProfile}
                >
                  Profile
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs"
                  onClick={() => setVisible(true)}
                >
                  Settings
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs"
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

      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        className="bg-slate-50 w-full md:w-[20%] md:w-20rem lg:w-30rem shadow-lg p-4"
      >
        <h2 className="flex items-center gap-4 p-4">
          <GoGear />
          Settings
        </h2>
        <hr className="mb-4" />
        <ul>
          <li>Change Password</li>
          <li>Change Password</li>
          <li>Change Password</li>
        </ul>
      </Sidebar>
    </div>
  );
};

export default AdminHeader;
