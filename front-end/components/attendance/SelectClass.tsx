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

const SelectClass = () => {
  return (
    <Select>
      <SelectTrigger className="w-[150px] text-xs md:w-[180px] md:text-sm">
        <SelectValue placeholder="Select class" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Classes</SelectLabel>
          <SelectItem value="apple">Grade 7</SelectItem>
          <SelectItem value="banana">Grade 8</SelectItem>
          <SelectItem value="blueberry">Grade 9</SelectItem>
          <SelectItem value="grapes">Grade 10</SelectItem>
          <SelectItem value="pineapple">Grade 11</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectClass;
