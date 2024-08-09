import DoughnutChartDemo from "@/components/graph/UserPieGraph";
import React from "react";

const UserGraph = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
      <div className="px-6  py-4 flex flex-col border rounded-lg bg-slate-50 shadow transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
        <h1>Total Number of Users</h1>
        <div className="w-[400px]">
          <DoughnutChartDemo />
        </div>
      </div>
    </div>
  );
};

export default UserGraph;
