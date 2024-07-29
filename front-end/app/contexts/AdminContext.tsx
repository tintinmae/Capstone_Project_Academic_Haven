"use client";
import React, { createContext, useContext, useState } from "react";

interface AdminProps {
  id: number;
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  status: string;
}

interface AdminContextProps {
  admins: AdminProps[];
  addAdmin: (admin: AdminProps) => void;

  updateAdmin: (admin: AdminProps) => void;
  deleteAdmin: (id: number) => void;
}
const AdminContext = createContext<AdminContextProps | undefined>(undefined);

interface AdminProviderProps {
  children: React.ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const [admins, setAdmins] = useState<AdminProps[]>([
    {
      id: 1,
      username: "Doe Not",
      email: "john1@example.com",
      password: "password123",
      profilePicture: "/images/student1.jpg",
      status: "Active",
    },
    {
      id: 2,
      username: "Jane Smith",
      email: "jane1@example.com",
      password: "password123",
      profilePicture: "/images/student2.jpg",

      status: "Active",
    },
    {
      id: 3,
      username: "Johnson Baby",
      email: "emily1@example.com",
      password: "password123",
      profilePicture: "/images/student3.jpg",

      status: "Active",
    },
    {
      id: 4,
      username: "Michael Brown",
      email: "michael1@example.com",
      password: "password123",
      profilePicture: "/images/student4.jpg",

      status: "Active",
    },
    {
      id: 5,
      username: "Sarah Davis",
      email: "sarah1@example.com",
      password: "password123",
      profilePicture: "/images/student3.jpg",

      status: "Active",
    },
    {
      id: 6,
      username: "John Doe",
      email: "john2@example.com",
      password: "password123",
      profilePicture: "/images/student1.jpg",

      status: "Active",
    },
  ]);

  const addAdmin = (admin: AdminProps) => {
    setAdmins((prevAdmins) => [...prevAdmins, admin]);
  };
  const updateAdmin = (admin: AdminProps) => {
    setAdmins(admins.map((a) => (a.id === admin.id ? admin : a)));
  };

  const deleteAdmin = (id: number) => {
    setAdmins(admins.filter((s) => s.id !== id));
  };

  return (
    <AdminContext.Provider
      value={{ admins, addAdmin, updateAdmin, deleteAdmin }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = (): AdminContextProps => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdminContext must be used within a AdminProvider");
  }
  return context;
};
