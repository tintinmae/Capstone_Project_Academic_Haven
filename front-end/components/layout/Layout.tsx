"use client";
import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Widgets from "../widgets/Widgets";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isNotCalendarPage =
    pathname === "/dashboard" ||
    pathname === "/files" ||
    pathname === "/classes";
  return (
    <div className="bg-white flex flex-col h-screen w-full overflow-auto">
      <Header />
      <div className="flex flex-1 mt-16">
        <Sidebar />
        <div className="bg-white flex-1 p-2 mr-3 md:mr-0 md:ml-56 text-sm md:text-md pb-20 md:pb-0 items-center">
          {children}
        </div>
        {isNotCalendarPage && (
          <div className="hidden 2xl:block shadow-lg p-4 w-80">
            <Widgets />
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
