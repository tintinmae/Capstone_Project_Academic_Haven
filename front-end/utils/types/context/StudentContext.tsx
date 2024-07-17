"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface StudentProps {
  name: string;
  email: string;
  password: string;
  profilePicture: string;
}

interface StudentContextProps {
  students: StudentProps[];
  addStudent: (student: StudentProps) => void;
}

const StudentContext = createContext<StudentContextProps | undefined>(
  undefined
);

export const useStudentContext = (): StudentContextProps => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("useStudentContext must be used within a StudentProvider");
  }
  return context;
};

interface StudentProviderProps {
  children: ReactNode;
}

export const StudentProvider: React.FC<StudentProviderProps> = ({
  children,
}) => {
  const [students, setStudents] = useState<StudentProps[]>([
    {
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      profilePicture: "/images/student1.jpg",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      password: "password123",
      profilePicture: "/images/student2.jpg",
    },
    {
      name: "Emily Johnson",
      email: "emily@example.com",
      password: "password123",
      profilePicture: "/images/student3.jpg",
    },
    {
      name: "Michael Brown",
      email: "michael@example.com",
      password: "password123",
      profilePicture: "/images/student4.jpg",
    },
    {
      name: "Sarah Davis",
      email: "sarah@example.com",
      password: "password123",
      profilePicture: "/sarah-davis.jpg",
    },
  ]);

  const addStudent = (student: StudentProps) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
};
