"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const UploadActivities: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<{
    [key: string]: number;
  }>({});
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setSelectedFiles(files);
    setUploadProgress({});
  };

  const handleUpload = () => {
    const uploadSimulation = (file: File) => {
      return new Promise<void>((resolve) => {
        const progressInterval = setInterval(() => {
          setUploadProgress((prevProgress) => {
            const newProgress = { ...prevProgress };
            newProgress[file.name] = (newProgress[file.name] || 0) + 10;

            if (newProgress[file.name] >= 100) {
              clearInterval(progressInterval);
              setUploadedFiles((prevFiles) => [...prevFiles, file]);
              resolve();
            }

            return newProgress;
          });
        }, 200);
      });
    };

    selectedFiles.forEach((file) => {
      uploadSimulation(file);
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="border bg-white shadow-md rounded-lg p-6">
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
          <label htmlFor="file" className="text-md">
            Insert File
          </label>
          <Input id="file" type="file" multiple onChange={handleFileChange} />
        </div>

        {selectedFiles.length > 0 && (
          <div className="mt-4">
            <ul>
              {selectedFiles.map((file) => (
                <li key={file.name} className="my-2">
                  {file.name}
                  <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                    <div
                      className={`bg-blue-600 h-4 rounded-full ${
                        uploadProgress[file.name]
                          ? "w-" + uploadProgress[file.name] + "%"
                          : "w-0"
                      }`}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <Button type="button" onClick={handleUpload} className="mt-4">
          Upload
        </Button>
        {uploadedFiles.length > 0 && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Uploaded Files</h3>
            <ul>
              {uploadedFiles.map((file) => (
                <li key={file.name} className="my-2">
                  <span>{file.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadActivities;
