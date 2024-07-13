"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Buttons from "../Buttons/Button";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SearchBar from "../searchbar/SearchBar";

const TasksComponent = () => {
  const [date, setDate] = useState<Date>();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row justify-evenly">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />

        <button className="bg-green-700 text-white text-xs px-4 w-56 rounded-xl">
          Add Task
        </button>
      </div>
      <div className="flex w-full flex-col">
        <Tabs defaultValue="tasks" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="list-view">List View</TabsTrigger>
            <TabsTrigger value="calendar-view">Calendar View</TabsTrigger>
          </TabsList>
          <TabsContent value="list-view">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="calendar-view">
            Change your password here.
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TasksComponent;
