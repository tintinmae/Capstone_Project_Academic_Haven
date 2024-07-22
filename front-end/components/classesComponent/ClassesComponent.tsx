"use client";
import React, { useState } from "react";
import ClassCard from "../cardClass/ClassCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import Buttons from "../Buttons/Button";
import Modal from "../modals/Modal";
import { useStudentContext } from "@/app/StudentContext";

const ClassesComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [grade, setGrade] = useState<number | undefined>();
  const [section, setSection] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const { students } = useStudentContext();
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="self-start">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/classes">Classes</BreadcrumbLink>
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
      <div className="self-end mr-4 md:mr-24">
        <Buttons title="Create Class" onClick={handleOpenModal} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:gap-24 md:grid-cols-3">
        <div>
          <ClassCard
            grade={7}
            section="Sampaguita"
            classPhoto="/images/1715585581973 1.png"
            students={students}
          />
        </div>
        <div>
          <ClassCard
            grade={8}
            section="Narra"
            classPhoto="/images/1715585581973 1.png"
            students={students}
          />
        </div>
        <div>
          <ClassCard
            grade={9}
            section="Pearl"
            classPhoto="/images/1715585581973 1.png"
            students={students}
          />
        </div>
        <div>
          <ClassCard
            grade={10}
            section="Lapu-Lapu"
            classPhoto="/images/1715585581973 1.png"
            students={students}
          />
        </div>
        <div>
          <ClassCard
            grade={11}
            section="ABM - A"
            classPhoto="/images/1715585581973 1.png"
            students={students}
          />
        </div>
        <div>
          <ClassCard
            grade={12}
            section="ABM - A"
            classPhoto="/images/1715585581973 1.png"
            students={students}
          />
        </div>
      </div>
      <Modal show={isOpen} onClose={closeModal}>
        <div className="flex flex-col">
          <h1 className="text-center mb-6 text-xl">Add Class</h1>
          <form action="#" className="flex flex-col gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="grade" className="text-gray-400">
                Grade
              </label>
              <input
                type="number"
                name="grade"
                id="grade"
                value={grade}
                onChange={(e) => setGrade(parseInt(e.target.value))}
                className="border p-4 text-xs rounded-lg bg-gray-50"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="section" className="text-gray-400">
                Section
              </label>
              <input
                type="text"
                name="section"
                id="section"
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className="border p-4 text-xs rounded-lg bg-gray-50"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="classPhoto" className="text-gray-400">
                Class Photo
              </label>
              <input
                type="file"
                name="classPhoto"
                id="classPhoto"
                accept="image/*"
                onChange={handleImageChange}
                className="border p-4 text-xs rounded-lg bg-gray-50"
              />
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="mt-4 w-32 h-32 object-cover rounded-lg"
                />
              )}
            </div>
          </form>
          <Buttons title="Submit" onClick={closeModal} />
        </div>
      </Modal>
    </div>
  );
};

export default ClassesComponent;
