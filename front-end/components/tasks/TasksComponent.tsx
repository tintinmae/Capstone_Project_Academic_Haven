"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { format } from "date-fns";
import { CalendarDays, Calendar as CalendarIcon, List } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Modal from "../modals/Modal";
import { FaTimes } from "react-icons/fa";

interface TaskProps {
  title: string;
  description: string;
  isDone: boolean;
  date: Date;
}

const TasksComponent = () => {
  const [date, setDate] = useState<Date>();
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState<string>("");

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAddTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end items-center gap-4">
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
        <div>
          <button
            className="bg-green-700 text-white text-xs p-2 w-32 rounded-md hover:bg-green-900"
            onClick={handleOpenModal}
          >
            Add Task
          </button>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <Tabs defaultValue="tasks" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="list-view" className="flex gap-2">
              <List size={14} /> List View
            </TabsTrigger>
            <TabsTrigger value="calendar-view" className="flex gap-2">
              <CalendarDays size={14} /> Calendar View
            </TabsTrigger>
          </TabsList>
          <TabsContent value="list-view">
            {tasks.map((task, index) => (
              <input key={index} type="checkbox">
                {task}
              </input>
            ))}
          </TabsContent>
          <TabsContent value="calendar-view">
            Change your password here.
          </TabsContent>
        </Tabs>
      </div>

      <Modal show={isOpen} onClose={handleClose}>
        <div className="flex flex-col gap-6 ">
          <div onClick={handleClose} className="self-end">
            <FaTimes />
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Task Title"
              className="border p-2 text-xs w-full bg-gray-50 rounded-lg"
            />
            <input
              type="text"
              placeholder="Description"
              className="border p-2 text-xs w-full bg-gray-50 rounded-lg"
            />
          </div>
          <div>
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
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TasksComponent;
