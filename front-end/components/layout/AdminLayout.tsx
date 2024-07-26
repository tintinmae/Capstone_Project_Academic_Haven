"use client";
import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Widgets from "../widgets/Widgets";
import { usePathname } from "next/navigation";
import AdminSidebar from "../sidebar/AdminSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
  //   const pathname = usePathname();
  //   const isNotCalendarPage =
  //     pathname === "/dashboard" ||
  //     pathname === "/users" ||
  //     pathname === "/events";
  return (
    <div className="bg-white flex flex-col h-screen w-full overflow-auto">
      <Header />
      <div className="flex flex-1 mt-16">
        <AdminSidebar />
        <div className="bg-white flex-1 p-2 mr-3 md:mr-0 md:ml-56 text-sm md:text-md pb-20 md:pb-0 items-center">
          {children}
        </div>
        {/* {isNotCalendarPage && (
          <div className="hidden md:block shadow-lg p-4 w-80">
            <Widgets />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default AdminLayout;
