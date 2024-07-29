"use client";

import React, { useState } from "react";

import AdminLayout from "@/components/layout/AdminLayout";
import { FaUserAltSlash, FaUserEdit } from "react-icons/fa";
import SearchBar from "@/components/searchbar/SearchBar";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useTeacherContext } from "@/app/contexts/TeacherContext";

const TeachersPage: React.FC = () => {
  const { teachers, deleteTeacher, addTeacher } = useTeacherContext();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [teacherToDelete, setTeacherToDelete] = useState<number | null>(null);
  const [editingTeacher, setEditingTeacher] = useState<any>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newTeacher, setNewTeacher] = useState({
    id: 0,
    name: "",
    email: "",
    password: "",
    grade: "",
    profilePicture: "",
    status: "Active",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 7;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTeachers.length / itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedTeachers = filteredTeachers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleEdit = (teacher: any) => {
    setEditingTeacher(teacher);
    setIsEditing(true);
  };

  const handleOpenDeleteModal = (id: number) => {
    setTeacherToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setTeacherToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const handleDelete = () => {
    if (teacherToDelete !== null) {
      deleteTeacher(teacherToDelete);
      setTeacherToDelete(null);
    }
    setIsDeleteModalOpen(false);
  };

  const handleAdd = () => {
    setIsAdding(true);
  };

  const handleCloseAdd = () => {
    setNewTeacher({
      id: 0,
      name: "",
      email: "",
      password: "",
      grade: "",
      profilePicture: "/images/default-profile.jpg",
      status: "Active",
    });
    setIsAdding(false);
  };

  const handleCloseEdit = () => {
    setEditingTeacher(null);
    setIsEditing(false);
  };

  const handleSubmitEdit = (e: React.FormEvent) => {
    e.preventDefault();

    handleCloseEdit();
  };

  const handleSubmitAdd = (e: React.FormEvent) => {
    e.preventDefault();
    addTeacher(newTeacher);
    handleCloseAdd();
  };

  return (
    <AdminLayout>
      <div className="container p-4">
        <div className="w-full flex flex-col md:flex-row md:gap-4">
          <div>
            <button
              onClick={handleAdd}
              className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded mb-4"
            >
              Add Teacher
            </button>
          </div>
          <div className="">
            <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-b border-gray-200 rounded-lg">
            <thead className="text-left">
              <tr>
                <th className="py-2 px-4 border-b text-xs md:text-base">
                  Name
                </th>
                <th className="py-2 px-4 border-b hidden md:table-cell">
                  Email
                </th>
                <th className="py-2 px-4 border-b hidden md:table-cell">
                  Password
                </th>
                <th className="py-2 px-4 border-b text-xs md:text-base">
                  Status
                </th>
                <th className="py-2 px-4 border-b text-xs md:text-base">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedTeachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td className="py-2 px-4 border-b flex items-center gap-4">
                    <img
                      src={teacher.profilePicture}
                      alt={teacher.name}
                      className="w-[30px] h-[30px] rounded-full"
                    />
                    <span className="text-xs md:text-base">{teacher.name}</span>
                  </td>
                  <td className="py-2 px-4 border-b hidden md:table-cell">
                    {teacher.email}
                  </td>
                  <td className="py-2 px-4 border-b hidden md:table-cell">
                    {teacher.password}
                  </td>
                  <td className="py-2 px-4 border-b text-xs md:text-base">
                    {teacher.status}
                  </td>
                  <td className="py-2 px-4 border-b text-xs md:text-base">
                    <button
                      onClick={() => handleEdit(teacher)}
                      className="text-blue-500 hover:underline"
                    >
                      <FaUserEdit />
                    </button>
                    <button
                      onClick={() => handleOpenDeleteModal(teacher.id)}
                      className="text-red-500 hover:underline ml-4"
                    >
                      <FaUserAltSlash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 md:absolute md:right-[7%]">
          <Pagination className="text-xs">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) handlePageChange(currentPage - 1);
                  }}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    onClick={() => handlePageChange(index + 1)}
                    isActive={index + 1 === currentPage}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages)
                      handlePageChange(currentPage + 1);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        {isEditing && editingTeacher && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-4">
                Edit Teacher <span>{editingTeacher.name}'s</span> Information
              </h2>
              <form onSubmit={handleSubmitEdit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    value={editingTeacher.name}
                    onChange={(e) =>
                      setEditingTeacher({
                        ...editingTeacher,
                        name: e.target.value,
                      })
                    }
                    className="border border-gray-300 p-2 w-full rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    value={editingTeacher.email}
                    onChange={(e) =>
                      setEditingTeacher({
                        ...editingTeacher,
                        email: e.target.value,
                      })
                    }
                    className="border border-gray-300 p-2 w-full rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Status</label>
                  <input
                    type="text"
                    value={editingTeacher.status}
                    onChange={(e) =>
                      setEditingTeacher({
                        ...editingTeacher,
                        status: e.target.value,
                      })
                    }
                    className="border border-gray-300 p-2 w-full rounded"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCloseEdit}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
        {isAdding && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg md:w-[20%]">
              <h2 className="text-xl font-bold mb-4">Add New Teacher</h2>
              <form onSubmit={handleSubmitAdd}>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    value={newTeacher.name}
                    onChange={(e) =>
                      setNewTeacher({
                        ...newTeacher,
                        name: e.target.value,
                      })
                    }
                    className="border border-gray-300 p-2 w-full rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    value={newTeacher.email}
                    onChange={(e) =>
                      setNewTeacher({ ...newTeacher, email: e.target.value })
                    }
                    className="border border-gray-300 p-2 w-full rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Password</label>
                  <input
                    type="text"
                    value={newTeacher.password}
                    onChange={(e) =>
                      setNewTeacher({
                        ...newTeacher,
                        password: e.target.value,
                      })
                    }
                    className="border border-gray-300 p-2 w-full rounded"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={handleCloseAdd}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
        {isDeleteModalOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg">
              <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>
              <p>Are you sure you want to delete this teacher?</p>
              <div className="mt-4 text-center">
                <button
                  onClick={handleDelete}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={handleCloseDeleteModal}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default TeachersPage;
