"use client";
import { useStudentContext } from "@/app/contexts/StudentContext";
import React, { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { FaBars } from "react-icons/fa";
import Modal from "../modals/Modal";
import Buttons from "../Buttons/Button";
import { useRouter } from "next/navigation";

const Students: React.FC = () => {
  const { students } = useStudentContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [emails, setEmails] = useState<string[]>([""]);
  const router = useRouter();

  const handleRoute = () => {
    router.push("/classes/attendance");
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
    setIsDrawerOpen(false); // Close the drawer when opening the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEmails([""]); // Reset emails input fields when closing the modal
  };

  const handleSubmit = () => {
    // Process emails here
    console.log(emails);
    setIsModalOpen(false);
  };

  const handleDrawerOpen = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleEmailChange = (index: number, value: string) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const handleAddEmailField = () => {
    setEmails([...emails, ""]);
  };

  const handleRemoveEmailField = (index: number) => {
    const newEmails = emails.filter((_, i) => i !== index);
    setEmails(newEmails);
  };

  return (
    <>
      <div className="hidden md:block cursor-default">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-xl font-bold mt-4">Students</h3>
          <p
            className="text-blue-600 underline cursor-pointer hover:text-gray-300"
            onClick={handleModalOpen}
          >
            Invite Student
          </p>
        </div>

        <ScrollArea className="h-[150px] md:h-[82vh] w-[350px] rounded-md border p-4 mt-2">
          <p
            className="text-end text-xs underline text-blue-600 hover:text-gray-300"
            onClick={handleRoute}
          >
            View Attendance
          </p>
          <ul>
            {students.map((student) => (
              <li key={student.email} className="flex items-center mb-4">
                <Image
                  src={student.profilePicture}
                  alt={`${student.name}'s profile`}
                  width={40}
                  height={40}
                  className="rounded-full mr-4 w-[40px] h-[40px]"
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
      <div className="md:hidden">
        <Drawer open={isDrawerOpen} onClose={handleDrawerOpen}>
          <DrawerTrigger onClick={handleDrawerOpen}>
            <FaBars />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Students</DrawerTitle>
              <DrawerDescription>
                <ScrollArea className="h-[150px] md:h-[82vh] w-[350px] rounded-md border p-4 mt-2">
                  <p
                    className="text-end text-xs underline text-blue-600 hover:text-gray-300"
                    onClick={handleRoute}
                  >
                    View Attendance
                  </p>
                  <ul>
                    {students.map((student) => (
                      <li
                        key={student.email}
                        className="flex items-center mb-4"
                      >
                        <Image
                          src={student.profilePicture}
                          alt={`${student.name}'s profile`}
                          width={40}
                          height={40}
                          className="rounded-full mr-4 w-[40px] h-[40px]"
                        />
                        <div>
                          <p className="text-xs font-medium ">{student.name}</p>
                          <p className="text-xs text-gray-500">
                            {student.email}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <p
                className="text-blue-600 underline cursor-pointer"
                onClick={handleModalOpen}
              >
                Invite Student
              </p>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      <Modal show={isModalOpen} onClose={handleCloseModal}>
        <div>
          <h1 className="text-center text-xl mb-4">Add Students</h1>
          <div className="flex flex-col gap-6 z-50 ">
            <div className="max-h-52 overflow-y-auto flex flex-col gap-6 z-50 ">
              {emails.map((email, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => handleEmailChange(index, e.target.value)}
                    placeholder="Enter email"
                    className="border p-4 text-xs rounded bg-gray-50 w-full"
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveEmailField(index)}
                      className="text-red-600"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={handleAddEmailField}
              className="text-blue-600"
            >
              Add Another Email
            </button>
            <Buttons title="Invite" onClick={handleSubmit} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Students;
