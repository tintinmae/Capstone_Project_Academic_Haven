"use client";

import React, { useState } from "react";
import { useStudentContext } from "@/app/contexts/StudentContext";
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
import Buttons from "@/components/Buttons/Button";
import { useToast } from "@/components/ui/use-toast";

const StudentsPage: React.FC = () => {
  const { students, deleteStudent, addStudent, updateStudent } =
    useStudentContext();
  const { toast } = useToast();
  const [editingStudent, setEditingStudent] = useState<any>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newStudent, setNewStudent] = useState({
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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState<number | null>(null);
  const itemsPerPage = 7;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedStudents = filteredStudents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleEdit = (student: any) => {
    setEditingStudent(student);
    setIsEditing(true);
  };

  const handleOpenDeleteModal = (id: number) => {
    setStudentToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setStudentToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const handleDelete = () => {
    if (studentToDelete !== null) {
      deleteStudent(studentToDelete);
      toast({
        title: "Deleted",
        description: "User deleted successfully!",
        variant: "delete",
      });
      setStudentToDelete(null);
    } else {
      toast({
        title: "Error",
        description: "Failed to delete student",
        variant: "destructive",
      });
    }
    setIsDeleteModalOpen(false);
  };

  const handleAdd = () => {
    setIsAdding(true);
  };

  const handleCloseAdd = () => {
    setNewStudent({
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
    setEditingStudent(null);
    setIsEditing(false);
  };

  const handleSubmitEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingStudent) {
      updateStudent(editingStudent);
      toast({
        title: "Update",
        description: `${editingStudent.name}'s data updated successfully.`,
        variant: "update",
      });
    }
    handleCloseEdit();
  };

  const handleSubmitAdd = (e: React.FormEvent) => {
    e.preventDefault();
    addStudent(newStudent);
    toast({
      title: "Added",
      description: "New student added successfully.",
      variant: "success",
    });
    handleCloseAdd();
  };

  return (
    <AdminLayout>
      <div className="container p-4">
        <div className="flex flex-col md:flex-row w-full md:gap-4">
          <div>
            <Buttons title="Add Student" onClick={handleAdd} />
          </div>
          <div className="md:mt-1">
            <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-b border-dashed border-gray-200 rounded-lg">
            <thead className="text-left">
              <tr>
                <th className="py-2 px-4 border-b border-dashed text-xs md:text-sm">
                  Name
                </th>
                <th className="py-2 px-4 border-b border-dashed hidden md:table-cell">
                  Email
                </th>
                <th className="py-2 px-4 border-b border-dashed hidden md:table-cell">
                  Password
                </th>
                <th className="py-2 px-4 border-b border-dashed text-xs md:text-base">
                  Status
                </th>
                <th className="py-2 px-4 border-b border-dashed text-xs md:text-base">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedStudents.map((student) => (
                <tr key={student.id} className="even:bg-white odd:bg-slate-100">
                  <td className="py-2 px-4 border-b border-dashed flex items-center gap-4">
                    <img
                      src={student.profilePicture}
                      alt={student.name}
                      className="w-[30px] h-[30px] rounded-full"
                    />
                    <span className="text-xs md:text-sm">{student.name}</span>
                  </td>
                  <td className="py-2 px-4 border-b border-dashed hidden md:table-cell">
                    {student.email}
                  </td>
                  <td className="py-2 px-4 border-b border-dashed hidden md:table-cell">
                    {student.password}
                  </td>
                  <td className="py-2 px-4 border-b border-dashed text-xs md:text-base">
                    {student.status}
                  </td>
                  <td className="py-2 px-4 border-b border-dashed text-xs md:text-base">
                    <button
                      onClick={() => handleEdit(student)}
                      className="text-blue-500 hover:underline"
                    >
                      <FaUserEdit />
                    </button>
                    <button
                      onClick={() => handleOpenDeleteModal(student.id)}
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
        <div className="mt-4 md:absolute md:right-2 md:mr-[7%]">
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

        {isEditing && editingStudent && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg md:w-[20%]">
              <h2 className="text-xl font-bold mb-4">Edit Student</h2>
              <form onSubmit={handleSubmitEdit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    value={editingStudent.name}
                    onChange={(e) =>
                      setEditingStudent({
                        ...editingStudent,
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
                    value={editingStudent.email}
                    onChange={(e) =>
                      setEditingStudent({
                        ...editingStudent,
                        email: e.target.value,
                      })
                    }
                    className="border border-gray-300 p-2 w-full rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Status</label>
                  <select
                    value={editingStudent.status}
                    onChange={(e) =>
                      setEditingStudent({
                        ...editingStudent,
                        status: e.target.value,
                      })
                    }
                    className="border border-gray-300 p-2 w-full rounded"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="flex items-center mt-4">
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
                </div>
              </form>
            </div>
          </div>
        )}

        {isAdding && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg md:w-[20%]">
              <h2 className="text-xl font-bold mb-4">Add New Student</h2>
              <form onSubmit={handleSubmitAdd}>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    value={newStudent.name}
                    onChange={(e) =>
                      setNewStudent({
                        ...newStudent,
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
                    value={newStudent.email}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, email: e.target.value })
                    }
                    className="border border-gray-300 p-2 w-full rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Password</label>
                  <input
                    type="text"
                    value={newStudent.password}
                    onChange={(e) =>
                      setNewStudent({
                        ...newStudent,
                        password: e.target.value,
                      })
                    }
                    className="border border-gray-300 p-2 w-full rounded"
                  />
                </div>
                <div className="flex items-center mt-4">
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
                </div>
              </form>
            </div>
          </div>
        )}

        {isDeleteModalOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg">
              <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>
              <p>Are you sure you want to delete this student?</p>
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

export default StudentsPage;
