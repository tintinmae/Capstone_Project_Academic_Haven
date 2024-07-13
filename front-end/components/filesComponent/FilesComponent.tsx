"use client";
import React, { useState } from "react";
import { FaFileAlt, FaFilePdf, FaFileWord, FaFileExcel } from "react-icons/fa";
import SearchBar from "../searchbar/SearchBar";
import { format } from "date-fns";

interface FileComponentProps {
  name: string;
  type: string;
  size: string;
  date: Date;
  uploadedBy: string;
}

const FilesComponent: React.FC = () => {
  const files: FileComponentProps[] = [
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
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
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
    <div className="p-4">
      <div className="px-4">
        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      </div>
      <hr className="mb-4 opacity-70" />
      <div className="bg-white shadow rounded-lg p-4 w-full border">
        <ul>
          {filteredFiles.map((file, index) => (
            <li
              key={index}
              className="flex items-center gap-4 p-2 border-b border-dashed"
            >
              {getFileIcon(file.type)}
              <div className="flex flex-row items-center justify-between w-full py-4">
                <div className="flex flex-col">
                  <span className="font-medium">{file.name}</span>
                  <span className="text-xs text-gray-600">{file.size}</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs text-gray-500">
                    Uploaded by: {file.uploadedBy}
                  </span>
                  <span className="text-xs text-gray-500">
                    Date: {format(file.date, "PP")}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilesComponent;
