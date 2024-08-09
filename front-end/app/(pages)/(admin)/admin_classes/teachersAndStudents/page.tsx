"use client";
import React from "react";
import Image from "next/image";
import { useStudentContext } from "@/app/contexts/StudentContext";
import { useTeacherContext } from "@/app/contexts/TeacherContext";
import AdminLayout from "@/components/layout/AdminLayout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const TeachersAndStudentsPage = () => {
  const { students } = useStudentContext();
  const { teachers } = useTeacherContext();

  return (
    <AdminLayout>
      <div className="p-4">
        <div className="self-start mb-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin_classes">Classes</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin_classes/teachersAndStudents">
                  Users
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        {/* Students Section */}
        <div className="mb-8">
          <h2 className="text-xs 2xl:text-lg font-bold mb-4">Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {students.map((student) => (
              <div
                key={student.id}
                className="bg-white rounded-lg shadow-md p-4 flex items-center transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-slate-100"
              >
                <Image
                  src={student.profilePicture}
                  alt={`${student.name}'s photo`}
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px] rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xs 2xl:text-lg font-medium">
                    {student.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teachers Section */}
        <div>
          <h2 className="text-xs 2xl:text-lg font-bold mb-4">Teachers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white rounded-lg shadow-md p-4 flex items-center transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-slate-100"
              >
                <Image
                  src={teacher.profilePicture}
                  alt={`${teacher.name}'s photo`}
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px] rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xs 2xl:text-lg font-medium">
                    {teacher.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default TeachersAndStudentsPage;
