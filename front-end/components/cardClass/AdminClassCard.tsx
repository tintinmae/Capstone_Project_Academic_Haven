"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface AdminClassCardProps {
  grade: number;
  section: string;
  classPhoto: string;
}

const AdminClassCard: React.FC<AdminClassCardProps> = ({
  grade,
  section,
  classPhoto,
}) => {
  const router = useRouter();

  const handleRoute = () => {
    router.push("/admin_classes/teachersAndStudents");
  };

  return (
    <div
      className={`${
        grade === 7
          ? "bg-green-800"
          : grade === 8
          ? "bg-yellow-600"
          : grade === 9
          ? "bg-red-700"
          : grade === 10
          ? "bg-blue-950"
          : "bg-muted-foreground"
      } w-[300px] rounded-xl shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl`}
      onClick={handleRoute}
    >
      <div className="p-4 text-white">
        <h2>
          Grade {grade} {section}
        </h2>
      </div>
      <Image src={classPhoto} alt="class-photo" width={400} height={100} />
      <div className="bg-white rounded-b-xl flex flex-row items-center justify-between p-2 "></div>
    </div>
  );
};

export default AdminClassCard;
