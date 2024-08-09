import AdminClassCard from "@/components/cardClass/AdminClassCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { divider } from "@nextui-org/theme";
import React from "react";

const AdminClass = () => {
  const classes = [
    {
      grade: 7,
      section: "Sampaguita",
      classPhoto: "/images/1715585581973 1.png",
    },
    { grade: 8, section: "Narra", classPhoto: "/images/1715585581973 1.png" },
    { grade: 9, section: "Pearl", classPhoto: "/images/1715585581973 1.png" },
    {
      grade: 10,
      section: "Lapu-Lapu",
      classPhoto: "/images/1715585581973 1.png",
    },
    {
      grade: 11,
      section: "STEM - A",
      classPhoto: "/images/1715585581973 1.png",
    },
    {
      grade: 12,
      section: "STEM - A",
      classPhoto: "/images/1715585581973 1.png",
    },
  ];

  // Group classes by grade
  const classesByGrade = classes.reduce((acc, classItem) => {
    if (!acc[classItem.grade]) {
      acc[classItem.grade] = [];
    }
    acc[classItem.grade].push(classItem);
    return acc;
  }, {} as Record<number, typeof classes>);

  // Filter middle school and high school classes
  const middleSchoolClasses = classes.filter(
    (classItem) => classItem.grade >= 7 && classItem.grade <= 10
  );
  const highSchoolClasses = classes.filter(
    (classItem) => classItem.grade >= 11 && classItem.grade <= 12
  );

  return (
    <div className="py-4">
      <div className="self-start mb-4 ml-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin_classes">Classes</BreadcrumbLink>
            </BreadcrumbItem>
            {/* <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/classes/activities">
                Activities
              </BreadcrumbLink>
            </BreadcrumbItem> */}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="ml-2 2xl:ml-12 md:py-4 2xl:px-6 space-y-8">
        {/* Middle School */}
        {middleSchoolClasses.length > 0 && (
          <div>
            <h2 className="text-xs 2xl:text-lg font-bold mb-4">
              Junior High School
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
              {middleSchoolClasses.map((classItem) => (
                <AdminClassCard
                  key={`${classItem.grade}-${classItem.section}`}
                  grade={classItem.grade}
                  section={classItem.section}
                  classPhoto={classItem.classPhoto}
                />
              ))}
            </div>
          </div>
        )}

        {/* High School */}
        {highSchoolClasses.length > 0 && (
          <div>
            <h2 className="text-xs 2xl:text-lg font-bold mb-4">
              Senior High School
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
              {highSchoolClasses.map((classItem) => (
                <AdminClassCard
                  key={`${classItem.grade}-${classItem.section}`}
                  grade={classItem.grade}
                  section={classItem.section}
                  classPhoto={classItem.classPhoto}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminClass;
