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

const SelectComponent = () => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a type of activity" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select a type of activity</SelectLabel>
          <SelectItem value="apple">Assignment</SelectItem>
          <SelectItem value="banana">Quiz</SelectItem>
          <SelectItem value="blueberry">Exam</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
