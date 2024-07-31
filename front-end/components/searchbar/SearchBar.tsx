"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import "/styles/searchBar.css";

interface SearchBarProps {
  searchTerm: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearch }) => {
  return (
    <div className="relative mb-4 w-64">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaSearch size={12} className="text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={onSearch}
        className="input pl-8 p-2 text-xs"
      />
    </div>
  );
};

export default SearchBar;
