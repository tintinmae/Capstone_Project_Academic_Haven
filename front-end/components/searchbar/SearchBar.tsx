"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  searchTerm: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearch }) => {
  return (
    <div className="mb-4 w-64">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={onSearch}
        className="p-2 border border-gray-300 rounded w-full text-xs"
      />
    </div>
  );
};

export default SearchBar;
