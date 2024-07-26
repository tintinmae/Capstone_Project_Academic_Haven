"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface StudentProps {
  id?: number;
  name: string;
  email?: string;
  password?: string;
  profilePicture: string;
  grade?: number;
  status?: string;
}

interface StudentContextProps {
  students: StudentProps[];
  addStudent: (student: StudentProps) => void;

  updateStudent: (student: StudentProps) => void;
  deleteStudent: (id: number) => void;
}

const StudentContext = createContext<StudentContextProps | undefined>(
  undefined
);

interface StudentProviderProps {
  children: ReactNode;
}

export const StudentProvider: React.FC<StudentProviderProps> = ({
  children,
}) => {
  const [students, setStudents] = useState<StudentProps[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john1@example.com",
      password: "password123",
      profilePicture: "/images/student1.jpg",
      grade: 98.5,
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane1@example.com",
      password: "password123",
      profilePicture: "/images/student2.jpg",
      grade: 97.9,
      status: "Active",
    },
    {
      id: 3,
      name: "Emily Johnson",
      email: "emily1@example.com",
      password: "password123",
      profilePicture: "/images/student3.jpg",
      grade: 96,
      status: "Active",
    },
    {
      id: 4,
      name: "Michael Brown",
      email: "michael1@example.com",
      password: "password123",
      profilePicture: "/images/student4.jpg",
      grade: 98,
      status: "Active",
    },
    {
      id: 5,
      name: "Sarah Davis",
      email: "sarah1@example.com",
      password: "password123",
      profilePicture: "/images/student3.jpg",
      grade: 98,
      status: "Active",
    },
    {
      id: 6,
      name: "John Doe",
      email: "john2@example.com",
      password: "password123",
      profilePicture: "/images/student1.jpg",
      grade: 98,
      status: "Active",
    },
    {
      id: 7,
      name: "Jane Smith",
      email: "jane2@example.com",
      password: "password123",
      profilePicture: "/images/student2.jpg",
      grade: 98,
      status: "Active",
    },
    {
      id: 8,
      name: "Emily Johnson",
      email: "emily2@example.com",
      password: "password123",
      profilePicture: "/images/student3.jpg",
      grade: 98,
      status: "Active",
    },
    {
      id: 9,
      name: "Michael Brown",
      email: "michael2@example.com",
      password: "password123",
      profilePicture: "/images/student4.jpg",
      grade: 98,
      status: "Active",
    },
    {
      id: 10,
      name: "Sarah Davis",
      email: "sarah2@example.com",
      password: "password123",
      profilePicture: "/images/student3.jpg",
      grade: 98,
      status: "Active",
    },
    {
      id: 12,
      name: "John Doe",
      email: "john3@example.com",
      password: "password123",
      profilePicture: "/images/student1.jpg",
      grade: 98,
      status: "Active",
    },
    {
      id: 13,
      name: "Jane Smith",
      email: "jane3@example.com",
      password: "password123",
      profilePicture: "/images/student2.jpg",
      grade: 98,
      status: "Active",
    },
    {
      id: 15,
      name: "Emily Johnson",
      email: "emily3@example.com",
      password: "password123",
      profilePicture: "/images/student3.jpg",
      grade: 98,
      status: "Active",
    },
    {
      id: 16,
      name: "Michael Brown",
      email: "michael3@example.com",
      password: "password123",
      profilePicture: "/images/student4.jpg",
      grade: 98,
      status: "Active",
    },
    {
      id: 17,
      name: "Sarah Davis",
      email: "sarah3@example.com",
      password: "password123",
      profilePicture: "/images/student3.jpg",
      grade: 98,
      status: "Active",
    },
  ]);

  const addStudent = (student: StudentProps) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };
  const updateStudent = (student: StudentProps) => {
    setStudents(students.map((s) => (s.id === student.id ? student : s)));
  };

  const deleteStudent = (id: number) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <StudentContext.Provider
      value={{ students, addStudent, updateStudent, deleteStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentContext = (): StudentContextProps => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("useStudentContext must be used within a StudentProvider");
  }
  return context;
};
