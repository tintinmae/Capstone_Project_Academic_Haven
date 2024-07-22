"use client";
import React, { useState } from "react";

import Layout from "@/components/layout/Layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { StudentProps } from "@/utils/types/type";
import { useStudentContext } from "@/app/StudentContext";
import Students from "@/components/studentsList/Students";
import ActivitiesComponent from "@/components/activities/ActivitiesComponent";

const Activities: React.FC = () => {
  const { students } = useStudentContext();
  return (
    <Layout>
      <div>
        <div className="self-start mb-4 mt-6 md:mt-0">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/classes">Classes</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/classes/activities">
                  Activities
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex flex-row justify-between">
          <ActivitiesComponent />
          <div className="absolute top-16 right-4 mt-2">
            <Students />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Activities;
