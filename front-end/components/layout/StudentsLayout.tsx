import React from "react";
import StudentSidebar from "../sidebar/StudentSidebar";
import StudentHeader from "../header/StudentHeader";
interface LayoutProps {
  children: React.ReactNode;
}
const StudentsLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-full">
      <StudentHeader />
      <div className="flex flex-1 mt-16">
        <StudentSidebar />
        <div className="flex-1 p-4 md:ml-56 text-sm md:text-md z-10 pb-20 md:pb-0 items-center">
          {children}
        </div>
        <div className="hidden md:block shadow-lg p-4 w-80 z-30">
          {/* <Widgets /> */}
        </div>
      </div>
    </div>
  );
};

export default StudentsLayout;
