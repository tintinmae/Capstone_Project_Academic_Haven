"use client";

import React, { useState } from "react";
import { useStudentContext } from "@/app/contexts/StudentContext";
import AdminLayout from "@/components/layout/AdminLayout";
import { useRouter } from "next/navigation";

const StudentsPage: React.FC = () => {
  const { students, deleteStudent, addStudent } = useStudentContext();
  const [editingStudent, setEditingStudent] = useState<any>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    grade: "",
    profilePicture: "",
    status: "Active",
  });
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const handleEdit = (student: any) => {
    setEditingStudent(student);
    setIsEditing(true);
  };

  const handleDelete = (id: number | undefined) => {
    if (id !== undefined) {
      deleteStudent(id);
    }
  };

  const handleAdd = () => {
    setIsAdding(true);
  };

  const handleCloseAdd = () => {
    setNewStudent({
      name: "",
      email: "",
      grade: "",
      profilePicture: "",
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
    // Implement the function to update the student information
    // e.g., updateStudent(editingStudent.id, editingStudent);
    handleCloseEdit();
  };

  const handleSubmitAdd = (e: React.FormEvent) => {
    e.preventDefault();
    addStudent(newStudent);
    handleCloseAdd();
  };

  return (
    <AdminLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Students</h1>
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        >
          Add Student
        </button>
        <table className="min-w-full bg-white border-b border-gray-200 rounded-lg">
          <thead className="text-left">
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="py-2 px-4 border-b">{student.name}</td>
                <td className="py-2 px-4 border-b">{student.email}</td>
                <td className="py-2 px-4 border-b">{student.status}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleEdit(student)}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="text-red-500 hover:underline ml-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isEditing && editingStudent && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg">
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
                    className="border border-gray-300 p-2 w-full"
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
                    className="border border-gray-300 p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Status</label>
                  <input
                    type="text"
                    value={editingStudent.status}
                    onChange={(e) =>
                      setEditingStudent({
                        ...editingStudent,
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
              <h2 className="text-xl font-bold mb-4">Add New Student</h2>
              <form onSubmit={handleSubmitAdd}>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    value={newStudent.name}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, name: e.target.value })
                    }
                    className="border border-gray-300 p-2 w-full"
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
                    className="border border-gray-300 p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Grade</label>
                  <input
                    type="text"
                    value={newStudent.grade}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, grade: e.target.value })
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
                    value={newStudent.profilePicture}
                    onChange={(e) =>
                      setNewStudent({
                        ...newStudent,
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
      </div>
    </AdminLayout>
  );
};

export default StudentsPage;
