"use client";
import FilesComponent from "@/components/filesComponent/FilesComponent";
import Layout from "@/components/layout/Layout";
import React from "react";

const Files: React.FC = () => {
  return (
    <Layout>
      <div>
        <FilesComponent />
      </div>
    </Layout>
  );
};

export default Files;
