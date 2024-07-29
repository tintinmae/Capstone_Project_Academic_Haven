"use client";
import { useAdminContext } from "@/app/contexts/AdminContext";
import AdminLayout from "@/components/layout/AdminLayout";
import SearchBar from "@/components/searchbar/SearchBar";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React, { useState } from "react";
import { FaUserAltSlash, FaUserEdit } from "react-icons/fa";

const AdminPage: React.FC = () => {
  const { admins, addAdmin, updateAdmin, deleteAdmin } = useAdminContext();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [adminToDelete, setAdminToDelete] = useState<number | null>(null);
  const [editingAdmin, setEditingAdmin] = useState<any>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [newAdmin, setNewAdmin] = useState({
    id: 0,
    username: "",
    email: "",
    password: "",
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

  const filteredAdmin = admins.filter((admin) =>
    admin.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredAdmin.length / itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedAdmins = filteredAdmin.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleEdit = (admin: any) => {
    setEditingAdmin(admin);
    setIsEditing(true);
  };

  const handleOpenDeleteModal = (id: number) => {
    setAdminToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setAdminToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const handleDelete = () => {
    if (adminToDelete !== null) {
      deleteAdmin(adminToDelete);
      setAdminToDelete(null);
    }
    setIsDeleteModalOpen(false);
  };

  const handleAdd = () => {
    setIsAdding(true);
  };

  const handleCloseAdd = () => {
    setNewAdmin({
      id: 0,
      username: "",
      email: "",
      password: "",
      profilePicture: "/images/default-profile.jpg",
      status: "Active",
    });
    setIsAdding(false);
  };

  const handleCloseEdit = () => {
    setEditingAdmin(null);
    setIsEditing(false);
  };

  const handleSubmitEdit = (e: React.FormEvent) => {
    e.preventDefault();

    handleCloseEdit();
  };

  const handleSubmitAdd = (e: React.FormEvent) => {
    e.preventDefault();
    addAdmin(newAdmin);
    handleCloseAdd();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);

    // Display the selected file's preview
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewAdmin({ ...newAdmin, profilePicture: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
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
              Add Admin
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
                  Username
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
              {paginatedAdmins.map((admin) => (
                <tr key={admin.id}>
                  <td className="py-2 px-4 border-b flex items-center gap-4">
                    <img
                      src={admin.profilePicture}
                      alt={admin.username}
                      className="w-[30px] h-[30px] rounded-full"
                    />
                    <span className="text-xs md:text-base">
                      {admin.username}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b hidden md:table-cell">
                    {admin.email}
                  </td>
                  <td className="py-2 px-4 border-b hidden md:table-cell">
                    {admin.password}
                  </td>
                  <td className="py-2 px-4 border-b text-xs md:text-base">
                    {admin.status}
                  </td>
                  <td className="py-2 px-4 border-b text-xs md:text-base">
                    <button
                      onClick={() => handleEdit(admin)}
                      className="text-blue-500 hover:underline"
                    >
                      <FaUserEdit />
                    </button>
                    <button
                      onClick={() => handleOpenDeleteModal(admin.id)}
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

        {isEditing && editingAdmin && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg md:w-[20%]">
              <h2 className="text-xl font-bold mb-4">
                Edit Admin <span>{editingAdmin.name}'s</span> Information
              </h2>
              <form onSubmit={handleSubmitEdit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Username</label>
                  <input
                    type="text"
                    value={editingAdmin.username}
                    onChange={(e) =>
                      setEditingAdmin({
                        ...editingAdmin,
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
                    value={editingAdmin.email}
                    onChange={(e) =>
                      setEditingAdmin({
                        ...editingAdmin,
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
                    value={editingAdmin.status}
                    onChange={(e) =>
                      setEditingAdmin({
                        ...editingAdmin,
                        status: e.target.value,
                      })
                    }
                    className="border border-gray-300 p-2 w-full rounded"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCloseEdit}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
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
              <h2 className="text-xl font-bold mb-4">Add New Admin</h2>
              <form onSubmit={handleSubmitAdd}>
                <div className="mb-4">
                  <label className="block text-gray-700">Username</label>
                  <input
                    type="text"
                    value={newAdmin.username}
                    onChange={(e) =>
                      setNewAdmin({
                        ...newAdmin,
                        username: e.target.value,
                      })
                    }
                    className="border border-gray-300 p-2 w-full rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    value={newAdmin.email}
                    onChange={(e) =>
                      setNewAdmin({ ...newAdmin, email: e.target.value })
                    }
                    className="border border-gray-300 p-2 w-full rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Password</label>
                  <input
                    type="text"
                    value={newAdmin.password}
                    onChange={(e) =>
                      setNewAdmin({
                        ...newAdmin,
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
              <p>Are you sure you want to delete this admin?</p>
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

export default AdminPage;
