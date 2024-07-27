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
  const itemsPerPage = 5;

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

  const handleDelete = (id: number | undefined) => {
    if (id !== undefined) {
      deleteTeacher(id);
    }
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
      profilePicture: "",
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
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Teachers</h1>

        <div className="w-full h-20">
          <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
        </div>
        <div>
          <button
            onClick={handleAdd}
            className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded mb-4"
          >
            Add Teacher
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-b border-gray-200 rounded-lg">
            <thead className="text-left">
              <tr>
                <th className="py-2 px-4 border-b text-xs md:text-base">ID</th>
                <th className="py-2 px-4 border-b text-xs md:text-base">
                  Name
                </th>
                <th className="py-2 px-4 border-b hidden md:table-cell">
                  Email
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
                  <td className="py-2 px-4 border-b hidden md:table-cell">
                    {teacher.id}
                  </td>
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
                      onClick={() => handleDelete(teacher.id)}
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
        {isEditing && editingTeacher && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
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
                    className="border border-gray-300 p-2 w-full"
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
                    className="border border-gray-300 p-2 w-full"
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
                    className="border border-gray-300 p-2 w-full"
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
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg">
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
                    className="border border-gray-300 p-2 w-full"
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
                    className="border border-gray-300 p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Profile Picture URL
                  </label>
                  <input
                    type="text"
                    value={newTeacher.profilePicture}
                    onChange={(e) =>
                      setNewTeacher({
                        ...newTeacher,
                        profilePicture: e.target.value,
                      })
                    }
                    className="border border-gray-300 p-2 w-full"
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
        <div className="fixed bottom-14 md:bottom-10">
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
      </div>
    </AdminLayout>
  );
};

export default TeachersPage;
