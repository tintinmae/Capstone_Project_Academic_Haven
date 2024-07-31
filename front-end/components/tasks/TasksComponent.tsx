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
import { FaEdit, FaTimes, FaTrash } from "react-icons/fa";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import CustomToolbar from "@/customToolbar/CustomToolbar";
import CustomEvent from "../customEvent/CustomEvent";
import Buttons from "../Buttons/Button";

const localizer = momentLocalizer(moment);

interface TaskProps {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
  dueDate: Date;
}

const TasksComponent: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [editMode, setEditMode] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

  const [calendarHeight, setCalendarHeight] = useState<number>(500);

  useEffect(() => {
    const updateCalendarHeight = () => {
      const windowHeight = window.innerHeight;
      const calendarHeight = Math.max(windowHeight - 300, 500);
      setCalendarHeight(calendarHeight);
    };

    updateCalendarHeight();
    window.addEventListener("resize", updateCalendarHeight);

    return () => window.removeEventListener("resize", updateCalendarHeight);
  }, []);

  const handleOpenModal = () => {
    setIsOpen(true);
    setEditMode(false);
    setTaskTitle("");
    setTaskDescription("");
    setDate(undefined);
  };

  const handleClose = () => {
    setIsOpen(false);
    setEditMode(false);
    setTaskTitle("");
    setTaskDescription("");
    setDate(undefined);
  };

  const handleAddTask = () => {
    if (taskTitle.trim() && taskDescription.trim() && date) {
      const newTask: TaskProps = {
        id: tasks.length + 1,
        title: taskTitle,
        description: taskDescription,
        isDone: false,
        dueDate: date,
      };
      setTasks([...tasks, newTask]);
      setTaskTitle("");
      setTaskDescription("");
      setDate(undefined);
      setIsOpen(false);
    }
  };

  const handleEditTask = (taskId: number) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setTaskTitle(taskToEdit.title);
      setTaskDescription(taskToEdit.description);
      setDate(taskToEdit.dueDate);
      setSelectedTaskId(taskId);
      setIsOpen(true);
      setEditMode(true);
    }
  };

  const handleUpdateTask = () => {
    if (
      selectedTaskId !== null &&
      taskTitle.trim() &&
      taskDescription.trim() &&
      date
    ) {
      const updatedTasks = tasks.map((task) =>
        task.id === selectedTaskId
          ? {
              ...task,
              title: taskTitle,
              description: taskDescription,
              dueDate: date,
            }
          : task
      );
      setTasks(updatedTasks);
      setTaskTitle("");
      setTaskDescription("");
      setDate(undefined);
      setIsOpen(false);
      setSelectedTaskId(null);
      setEditMode(false);
    }
  };

  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setDeleteModal(false);
  };

  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModal(false);
  };

  const events = tasks.map((task) => ({
    title: task.title,
    start: task.dueDate,
    end: task.dueDate,
    allDay: true,
    desc: task.description,
  }));

  return (
    <div className="flex flex-col gap-6">
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
          <Buttons title="Add Event" onClick={handleOpenModal} />
        </div>
      </div>

      <div className="flex flex-col">
        <Tabs defaultValue="list-view" className="w-full h-full">
          <TabsList>
            <TabsTrigger
              value="list-view"
              className="flex gap-2 hover:bg-gray-300"
            >
              <List size={14} />
              <span className="hidden md:block ">List View</span>
            </TabsTrigger>
            <TabsTrigger
              value="calendar-view"
              className="flex hover:bg-gray-300 gap-2"
            >
              <CalendarDays size={14} />
              <span className="hidden md:block">Calendar View</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="list-view" className="w-full">
            <ul className="list-disc pl-5 bg-gray-50 p-4 w-full">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between gap-2 bg-gray-200 p-6 rounded-lg mb-4 w-full"
                >
                  <div className="flex items-center gap-2 w-4/5">
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
                      } flex flex-col gap-2 w-full`}
                    >
                      <strong>{task.title.toUpperCase()}</strong>
                      {task.description}{" "}
                      <span className="text-xs text-gray-400">
                        Due: {format(task.dueDate, "PPP")}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaEdit
                      onClick={() => handleEditTask(task.id)}
                      className="cursor-pointer hover:text-yellow-600"
                    />
                    <FaTrash
                      onClick={() => {
                        setSelectedTaskId(task.id);
                        handleDeleteModal();
                      }}
                      className="cursor-pointer hover:text-red-800"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="calendar-view" className="w-full">
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
                ),
                event: CustomEvent,
              }}
              style={{ height: calendarHeight }}
            />
          </TabsContent>
        </Tabs>
      </div>

      <Modal show={isOpen} onClose={handleClose}>
        <div className="flex flex-col gap-6 ">
          {/* <div onClick={handleClose} className="self-end hover:text-gray-300">
            <FaTimes />
          </div> */}
          <h1 className="self-center text-xl">
            {editMode ? "Edit Task" : "Add Task"}
          </h1>
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

          <Buttons
            title={editMode ? "Update" : "Add"}
            onClick={editMode ? handleUpdateTask : handleAddTask}
          />
        </div>
      </Modal>

      <Modal show={deleteModal} onClose={handleCloseDeleteModal}>
        <div className="text-center flex flex-col gap-6">
          <p>{`Are you sure you want to delete this task?`}</p>
          <div className="self-center">
            <p className="flex items-center gap-10 cursor-pointer">
              <span
                onClick={handleCloseDeleteModal}
                className="hover:text-gray-400"
              >
                {" "}
                No{" "}
              </span>
              <span
                className="bg-red-600 text-white py-2 px-3 rounded-xl hover:bg-red-700"
                onClick={() => {
                  handleDeleteTask(selectedTaskId || 0); // Ensure a default value in case of null
                }}
              >
                Yes
              </span>
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TasksComponent;
