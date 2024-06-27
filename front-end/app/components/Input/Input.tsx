import React from "react";

interface InputProps {
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="p-4 text-sm border border-gray-200 rounded-md bg-gray-100 w-full mb-4"
    />
  );
};

export default Input;
