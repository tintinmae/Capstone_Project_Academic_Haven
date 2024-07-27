"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface TeacherProps {
  id?: number;
  name: string;
  email?: string;
  password?: string;
  profilePicture: string;
  grade?: string;
  status?: string;
}

interface TeacherContextProps {
  teachers: TeacherProps[];
  addTeacher: (teacher: TeacherProps) => void;

  updateTeacher: (teacher: TeacherProps) => void;
  deleteTeacher: (id: number) => void;
}

const TeacherContext = createContext<TeacherContextProps | undefined>(
  undefined
);

interface TeacherProviderProps {
  children: ReactNode;
}

export const TeacherProvider: React.FC<TeacherProviderProps> = ({
  children,
}) => {
  const [teachers, setTeachers] = useState<TeacherProps[]>([
    {
      id: 1,
      name: "Doe Not",
      email: "john1@example.com",
      password: "password123",
      profilePicture: "/images/student1.jpg",
      grade: "98.5",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane1@example.com",
      password: "password123",
      profilePicture: "/images/student2.jpg",
      grade: "97.9",
      status: "Active",
    },
    {
      id: 3,
      name: "Johnson Baby",
      email: "emily1@example.com",
      password: "password123",
      profilePicture: "/images/student3.jpg",
      grade: "96",
      status: "Active",
    },
    {
      id: 4,
      name: "Michael Brown",
      email: "michael1@example.com",
      password: "password123",
      profilePicture: "/images/student4.jpg",
      grade: "98",
      status: "Active",
    },
    {
      id: 5,
      name: "Sarah Davis",
      email: "sarah1@example.com",
      password: "password123",
      profilePicture: "/images/student3.jpg",
      grade: "98",
      status: "Active",
    },
    {
      id: 6,
      name: "John Doe",
      email: "john2@example.com",
      password: "password123",
      profilePicture: "/images/student1.jpg",
      grade: "98",
      status: "Active",
    },
    {
      id: 7,
      name: "Jane Smith",
      email: "jane2@example.com",
      password: "password123",
      profilePicture: "/images/student2.jpg",
      grade: "98",
      status: "Active",
    },
    {
      id: 8,
      name: "Baby Johnson",
      email: "emily2@example.com",
      password: "password123",
      profilePicture: "/images/student3.jpg",
      grade: "98",
      status: "Active",
    },
    {
      id: 9,
      name: "Michael Brown",
      email: "michael2@example.com",
      password: "password123",
      profilePicture: "/images/student4.jpg",
      grade: "98",
      status: "Active",
    },
    {
      id: 10,
      name: "Sarah Davis",
      email: "sarah2@example.com",
      password: "password123",
      profilePicture: "/images/student3.jpg",
      grade: "98",
      status: "Active",
    },
    {
      id: 12,
      name: "John Doe",
      email: "john3@example.com",
      password: "password123",
      profilePicture: "/images/student1.jpg",
      grade: "98",
      status: "Active",
    },
    {
      id: 13,
      name: "Jane Smith",
      email: "jane3@example.com",
      password: "password123",
      profilePicture: "/images/student2.jpg",
      grade: "98",
      status: "Active",
    },
    {
      id: 15,
      name: "Emily Johnson",
      email: "emily3@example.com",
      password: "password123",
      profilePicture: "/images/student3.jpg",
      grade: "98",
      status: "Active",
    },
    {
      id: 16,
      name: "Michael Black",
      email: "michael3@example.com",
      password: "password123",
      profilePicture: "/images/student4.jpg",
      grade: "98",
      status: "Active",
    },
    {
      id: 17,
      name: "Davis Paint",
      email: "sarah3@example.com",
      password: "password123",
      profilePicture: "/images/student3.jpg",
      grade: "98",
      status: "Active",
    },
  ]);

  const addTeacher = (teacher: TeacherProps) => {
    setTeachers((prevTeachers) => [...prevTeachers, teacher]);
  };
  const updateTeacher = (teacher: TeacherProps) => {
    setTeachers(teachers.map((s) => (s.id === teacher.id ? teacher : s)));
  };

  const deleteTeacher = (id: number) => {
    setTeachers(teachers.filter((s) => s.id !== id));
  };

  return (
    <TeacherContext.Provider
      value={{ teachers, addTeacher, updateTeacher, deleteTeacher }}
    >
      {children}
    </TeacherContext.Provider>
  );
};

export const useTeacherContext = (): TeacherContextProps => {
  const context = useContext(TeacherContext);
  if (!context) {
    throw new Error("useTeacherContext must be used within a TeacherProvider");
  }
  return context;
};
