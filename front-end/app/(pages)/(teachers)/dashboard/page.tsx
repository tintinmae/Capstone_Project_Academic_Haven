import Layout from "@/components/layout/Layout";
import React from "react";
import DashboardComponent from "./DashboardComponent";

const Dashboard = () => {
  return (
    <Layout>
      <div className="container">
        <DashboardComponent />
      </div>
    </Layout>
  );
};

export default Dashboard;
