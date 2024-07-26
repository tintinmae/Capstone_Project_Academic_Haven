import AdminLayout from "@/components/layout/AdminLayout";
import AdminSidebar from "@/components/sidebar/AdminSidebar";
import React from "react";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div>
        Admin Dashboard
        <div>{/* <AdminSidebar /> */}</div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
