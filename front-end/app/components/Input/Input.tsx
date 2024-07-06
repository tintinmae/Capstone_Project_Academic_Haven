"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface InputProps {
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  error,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="relative w-full mb-4">
      <input
        type={isPasswordVisible && type === "password" ? "text" : type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`p-4 text-xs border ${
          error ? "border-red-600" : "border-gray-200"
        } rounded-md bg-gray-100 w-full`}
      />
      <div>
        {type === "password" && (
          <span
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
          >
            <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
          </span>
        )}
      </div>
      <div>{error && <p className="text-red-600 text-xs mt-1">{error}</p>}</div>
    </div>
  );
};

export default Input;
