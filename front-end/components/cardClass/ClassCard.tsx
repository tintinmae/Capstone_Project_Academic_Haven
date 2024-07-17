import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { ArrowBigRight, ArrowDownRight, ArrowRight } from "lucide-react";
import { GoArrowRight } from "react-icons/go";
import { useRouter } from "next/navigation";

interface StudentProps {
  name: string;
  email: string;
  password: string;
  profilePicture: string;
}

interface ClassCardProps {
  grade: number;
  section: string;
  classPhoto: string;
  students: StudentProps[];
}

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const ClassCard: React.FC<ClassCardProps> = ({
  grade,
  section,
  classPhoto,
  students,
}) => {
  // Get the profile pictures of the first three students
  const firstThreeStudents = students.slice(0, 3);
  // Get the count of the remaining students
  const remainingStudentsCount = students.length > 3 ? students.length - 3 : 0;
  const router = useRouter();

  const handleRoute = () => {
    router.push("/classes/activities");
  };

  return (
    <div
      className="background w-[300px] rounded-xl shadow-lg"
      style={{ backgroundColor: getRandomColor() }}
    >
      <div className="p-4 text-white">
        <h2>
          Grade {grade} {section}
        </h2>
      </div>
      <Image src={classPhoto} alt="class-photo" width={400} height={100} />
      <div className="bg-white rounded-b-xl flex flex-row items-center justify-between p-2 ">
        <div className="flex">
          {firstThreeStudents.map((student, index) => (
            <div key={index} className="p-2 -ml-6 first:ml-0">
              <Image
                src={student.profilePicture}
                alt={student.name}
                width={30}
                height={30}
                className="w-[30px] h-[30px] rounded-full "
                style={{ zIndex: firstThreeStudents.length - index }}
              />
            </div>
          ))}
          {remainingStudentsCount > 0 && (
            <div className="w-[30px] h-[30px] mt-2 -ml-4 flex items-center justify-center bg-gray-300 rounded-full border-2 border-white text-xs text-gray-700">
              +{remainingStudentsCount}
            </div>
          )}
        </div>
        <div className="text-xs text-blue-400 px-2 hover:text-blue-300">
          <a href="#" onClick={handleRoute}>
            View Class{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
