"use client";
import React from "react";

import AdminSidebar from "../sidebar/AdminSidebar";
import AdminHeader from "../header/AdminHeader";

interface LayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-white flex flex-col h-screen w-full overflow-auto">
      <AdminHeader />
      <div className="flex flex-1 mt-16">
        <AdminSidebar />
        <div className="bg-white flex-1 p-2 mr-3 md:mr-0 md:ml-56 text-sm md:text-md pb-20 md:pb-0 items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
