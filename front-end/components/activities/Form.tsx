"use client";
import React, { useState } from "react";
import SelectComponent from "./Select";
import UploadActivities from "./UploadActivities";
import Buttons from "../Buttons/Button";
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
import { useRouter } from "next/navigation";

const Form = () => {
  const [date, setDate] = useState<Date | undefined>();
  const router = useRouter();

  const handlePost = (event: React.FormEvent) => {
    event.preventDefault();
    router.push("/classes/activities");
  };
  return (
    <div className="flex flex-col items-center">
      <form
        action=""
        className="border p-4 rounded-lg w-full md:w-[60%] flex flex-col gap-6"
        onSubmit={handlePost}
      >
        <SelectComponent />
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Activity Number</label>
          <input
            type="number"
            name=""
            id=""
            className="border p-3 text-xs rounded-md bg-gray-50"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Activity Title</label>
          <input
            type="text"
            name=""
            id=""
            className="border p-3 text-xs rounded-md bg-gray-50"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Instructions</label>
          <input
            type="text"
            name=""
            id=""
            className="border p-3 text-xs rounded-md bg-gray-50"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Total Points</label>
            <input
              type="number"
              name=""
              id=""
              className="border p-3 text-xs rounded-md bg-gray-50"
            />
          </div>
          <div className="">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full md:w-[100%] justify-start text-left font-normal mt-7 bg-gray-50",
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
        </div>

        <UploadActivities />

        <Buttons title="Post" onClick={() => handlePost} />
      </form>
    </div>
  );
};

export default Form;
