import React from "react";

interface InputProps {
  type: string;
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = ({
  type,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="p-4 text-sm border border-gray-200 rounded-md bg-gray-100"
    />
  );
};

export default Input;
