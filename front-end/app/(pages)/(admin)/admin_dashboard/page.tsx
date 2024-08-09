import DoughnutChartDemo from "@/components/graph/UserPieGraph";
import AdminLayout from "@/components/layout/AdminLayout";
import AdminSidebar from "@/components/sidebar/AdminSidebar";
import React from "react";
import UserGraph from "./users/UserGraph";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div>
        <div className="p-4">
          <UserGraph />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
