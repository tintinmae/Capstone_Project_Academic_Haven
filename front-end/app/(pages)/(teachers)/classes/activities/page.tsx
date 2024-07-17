import React, { useContext } from "react";
import { useStudentContext } from "@/utils/types/context/StudentContext"; // Adjust the import path as needed
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

// Define the Activities component
const Activities: React.FC = () => {
  const { students } = useStudentContext();

  return (
    <Layout>
      <div>
        <div className="self-start">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/classes">Classes</BreadcrumbLink>
                <BreadcrumbSeparator />
                <BreadcrumbLink href="/classes/activities">
                  Activities
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div>
          <h3 className="text-xl font-bold mt-4">Students</h3>
          <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4 mt-2">
            <ul>
              {students.map((student) => (
                <li key={student.email} className="flex items-center mb-4">
                  <Image
                    src={student.profilePicture}
                    alt={`${student.name}'s profile`}
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="text-sm font-medium">{student.name}</p>
                    <p className="text-xs text-gray-500">{student.email}</p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
      </div>
    </Layout>
  );
};

export default Activities;
