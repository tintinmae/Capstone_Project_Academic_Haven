"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserProps {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string;
}

interface UserContextProps {
  user: UserProps | null;
  setUser: (user: UserProps) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  // Initialize with static user data
  const [user, setUser] = useState<UserProps | null>({
    id: 1,
    firstName: "Christine",
    lastName: "Ocaña",
    email: "ocanachristine43@gmail.com",
    profilePicture: "/images/default-profile.jpg",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
