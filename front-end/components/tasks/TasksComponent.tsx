"use client";
import React, { useState, useEffect } from "react";
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
import Buttons from "../Buttons/Button";
import {
  Calendar as BigCalendar,
  momentLocalizer,
  ToolbarProps,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import CustomToolbar from "@/customToolbar/CustomToolbar";

const localizer = momentLocalizer(moment);

interface TaskProps {
  title: string;
  description: string;
  isDone: boolean;
  date: Date;
}

const TasksComponent: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");

  const [calendarHeight, setCalendarHeight] = useState<number>(500); // Initial height

  useEffect(() => {
    // Update calendar height based on window size
    const updateCalendarHeight = () => {
      const windowHeight = window.innerHeight;
      const calendarHeight = Math.max(windowHeight - 300, 500); // Adjust as needed
      setCalendarHeight(calendarHeight);
    };

    updateCalendarHeight(); // Initial call
    window.addEventListener("resize", updateCalendarHeight);

    return () => window.removeEventListener("resize", updateCalendarHeight);
  }, []);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAddTask = () => {
    if (taskTitle.trim() && taskDescription.trim() && date) {
      setTasks([
        ...tasks,
        {
          title: taskTitle,
          description: taskDescription,
          isDone: false,
          date,
        },
      ]);
      setTaskTitle("");
      setTaskDescription("");
      setDate(undefined);
      setIsOpen(false);
    }
  };

  // Convert tasks to events for the calendar

  const events = tasks.map((task) => ({
    title: task.title,
    start: task.date,
    end: task.date,
    allDay: true,
    desc: task.description,
  }));

  return (
    <div className="flex flex-col gap-6">
      {/* Calendar toolbar and Add Task button */}

      <div className="flex md:justify-end items-center gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full md:w-[280px] justify-start text-left font-normal",
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

      {/* Tabs for List View and Calendar View */}

      <div className="flex flex-col">
        <Tabs defaultValue="list-view" className="w-full h-full">
          <TabsList>
            <TabsTrigger value="list-view" className="flex gap-2">
              <List size={14} /> List View
            </TabsTrigger>
            <TabsTrigger value="calendar-view" className="flex gap-2">
              <CalendarDays size={14} /> Calendar View
            </TabsTrigger>
          </TabsList>
          <TabsContent value="list-view" className="w-full">
            <ul className="list-disc pl-5 bg-gray-50 p-4 w-full">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 bg-gray-200 p-6 rounded-lg mb-4 w-full"
                >
                  <input
                    type="checkbox"
                    checked={task.isDone}
                    disabled={task.isDone}
                    onChange={() => {
                      const newTasks = [...tasks];
                      newTasks[index].isDone = !newTasks[index].isDone;
                      setTasks(newTasks);
                    }}
                    className="mr-2"
                  />
                  <span
                    className={`${
                      task.isDone ? "line-through" : ""
                    } flex flex-col gap-2`}
                  >
                    <strong>{task.title.toUpperCase()}</strong>
                    {task.description}{" "}
                    <span className="text-xs text-gray-400">
                      Due: {format(task.date, "PPP")}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="calendar-view" className="w-full">
            {/* BigCalendar with custom toolbar */}
            <BigCalendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              className="custom-calendar"
              components={{
                toolbar: (props) => (
                  <CustomToolbar
                    {...props}
                    label={props.label}
                    onView={props.onView}
                    views={props.views}
                    view={props.view}
                  />
                ), // Use the custom toolbar
              }}
              style={{ height: calendarHeight }} // Dynamically set height
            />
          </TabsContent>
        </Tabs>
      </div>

      {/* Modal for adding tasks */}

      <Modal show={isOpen} onClose={handleClose}>
        <div className="flex flex-col gap-6 ">
          <div onClick={handleClose} className="self-end hover:text-gray-300">
            <FaTimes />
          </div>
          <h1 className="self-center text-xl">Add Tasks</h1>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Task Title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="border p-3 text-xs w-full bg-gray-50 rounded-md"
            />
            <input
              type="text"
              placeholder="Description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="border p-3 text-xs w-full bg-gray-50 rounded-md"
            />
          </div>
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "bg-gray-50 w-full justify-start text-xs text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Due Date</span>}
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

          {/* Button to add task */}

          <Buttons title="Add" onClick={handleAddTask} />
        </div>
      </Modal>
    </div>
  );
};

export default TasksComponent;
