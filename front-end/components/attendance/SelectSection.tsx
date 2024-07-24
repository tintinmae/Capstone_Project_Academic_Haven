import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const SelectSection = () => {
  return (
    <Select>
      <SelectTrigger className="w-[150px] text-xs md:w-[180px] md:text-sm">
        <SelectValue placeholder="Select section" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sections</SelectLabel>
          <SelectItem value="apple">Sampaguita</SelectItem>
          <SelectItem value="banana">Narra</SelectItem>
          <SelectItem value="blueberry">Pearl</SelectItem>
          <SelectItem value="grapes">Jade</SelectItem>
          <SelectItem value="pineapple">Lapu-Lapu</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectSection;
