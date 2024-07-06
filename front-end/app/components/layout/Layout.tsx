import React, { ReactNode } from "react";
import Sidebar from "../sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 p-8 md:ml-64">{children}</div>
    </div>
  );
};

export default Layout;
