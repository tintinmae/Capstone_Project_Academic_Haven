import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Widgets from "../widgets/Widgets";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <div className="flex flex-1 mt-16">
        <Sidebar />
        <div className="flex-1 p-4 md:ml-56 text-sm md:text-md z-10">
          {children}
        </div>
        <div className="hidden md:block shadow-lg p-4 w-80 z-30">
          <Widgets />
        </div>
      </div>
    </div>
  );
};

export default Layout;
