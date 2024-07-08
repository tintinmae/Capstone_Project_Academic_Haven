import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4 md:p-8 md:ml-64 text-sm md:text-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
