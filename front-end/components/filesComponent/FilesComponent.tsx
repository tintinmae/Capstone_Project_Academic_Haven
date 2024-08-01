"use client";
import React, { useState } from "react";
import {
  FaFileAlt,
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaTrash,
} from "react-icons/fa";
import SearchBar from "../searchbar/SearchBar";
import { format } from "date-fns";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import Modal from "../modals/Modal";

interface FileComponentProps {
  name: string;
  type: string;
  size: string;
  date: Date;
  uploadedBy: string;
}

const FilesComponent: React.FC = () => {
  const [files, setFiles] = useState<FileComponentProps[]>([
    {
      name: "Document1.pdf",
      type: "pdf",
      size: "1.2MB",
      date: new Date(2024, 7, 2, 15, 0),
      uploadedBy: "John Doe",
    },
    {
      name: "Report.docx",
      type: "word",
      size: "600KB",
      date: new Date(2024, 7, 2, 15, 0),
      uploadedBy: "Jane Smith",
    },
    {
      name: "Spreadsheet.xlsx",
      type: "excel",
      size: "2.5MB",
      date: new Date(2024, 7, 2, 15, 0),
      uploadedBy: "Alice Johnson",
    },
    {
      name: "Notes.txt",
      type: "text",
      size: "300KB",
      date: new Date(2024, 7, 2, 15, 0),
      uploadedBy: "Bob Brown",
    },
    {
      name: "Document1.pdf",
      type: "pdf",
      size: "1.2MB",
      date: new Date(2024, 7, 2, 15, 0),
      uploadedBy: "John Doe",
    },
    {
      name: "Report.docx",
      type: "word",
      size: "600KB",
      date: new Date(2024, 7, 2, 15, 0),
      uploadedBy: "Jane Smith",
    },
    {
      name: "Spreadsheet.xlsx",
      type: "excel",
      size: "2.5MB",
      date: new Date(2024, 7, 2, 15, 0),
      uploadedBy: "Alice Johnson",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedFileIndex, setSelectedFileIndex] = useState<number | null>(
    null
  );

  const handleOpenModal = (index: number) => {
    setSelectedFileIndex(index);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedFileIndex(null);
  };

  const handleDelete = () => {
    if (selectedFileIndex !== null) {
      setFiles(files.filter((_, i) => i !== selectedFileIndex));
      handleCloseModal();
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredFiles.length / itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedFiles = filteredFiles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FaFilePdf className="text-red-500" />;
      case "word":
        return <FaFileWord className="text-blue-500" />;
      case "excel":
        return <FaFileExcel className="text-green-500" />;
      default:
        return <FaFileAlt className="text-gray-500" />;
    }
  };

  return (
    <div className="md:ml-10 grid grid-rows-2">
      <div className="fixed top-14 w-full px-4 py-6 z-10">
        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      </div>
      <div className="bg-white text-xs rounded-lg w-[86%] mt-20 2xl:ml-14">
        <ul>
          {paginatedFiles.map((file, index) => (
            <li
              key={index}
              className="relative flex items-center gap-4 border-b border-dashed group hover:bg-gray-100"
            >
              <button
                onClick={() => handleOpenModal(index)}
                className="text-red-500 hover:text-red-700 border-r p-4"
              >
                <FaTrash />
              </button>
              {getFileIcon(file.type)}
              <div className="flex flex-row items-center justify-between w-full py-4">
                <div className="flex flex-col">
                  <span className="font-medium text-xs 2xl:text-base">
                    {file.name}
                  </span>
                  <span className="text-xs text-gray-600">{file.size}</span>
                </div>
                {/* <div className="flex flex-col text-right">
                  <span className="text-xs text-gray-500">
                    Uploaded by: {file.uploadedBy}
                  </span>
                  <span className="text-xs text-gray-500">
                    Date: {format(file.date, "PP")}
                  </span>
                </div> */}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className=" mt-4 fixed bottom-16">
        <Pagination>
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

            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  isActive={index + 1 === currentPage}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(index + 1);
                  }}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            {totalPages > 3 && <PaginationEllipsis />}
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

      <Modal show={isOpen} onClose={handleCloseModal}>
        <div className="flex flex-col items-center gap-6 p-10">
          <p className="text-lg">Are you sure you want to delete this file?</p>
          <div className="flex gap-4">
            <button
              className="text-gray-700 bg-gray-200 hover:bg-gray-300 py-2 px-6 rounded-lg"
              onClick={handleCloseModal}
            >
              No
            </button>
            <button
              className="text-white bg-red-600 hover:bg-red-700 py-2 px-6 rounded-lg"
              onClick={handleDelete}
            >
              Yes
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FilesComponent;
