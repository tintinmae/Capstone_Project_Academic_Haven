import CalendarComponent from "@/components/calendarComponent/CalendarComponent";
import EventsComponent from "@/components/calendarComponent/EventsComponent";
import AdminLayout from "@/components/layout/AdminLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import {
  FaCalendar,
  FaCalendarAlt,
  FaList,
  FaListAlt,
  FaRegCalendarAlt,
} from "react-icons/fa";

const AdminCalendarPage = () => {
  return (
    <AdminLayout>
      <Tabs defaultValue="list-view" className="w-full">
        <TabsList>
          <TabsTrigger value="list-view" className="flex gap-2">
            <FaList />
            <span className="hidden md:block">List View</span>
          </TabsTrigger>
          <TabsTrigger value="calendar-view" className="flex gap-2">
            <FaRegCalendarAlt />
            <span className="hidden md:block">Calendar View</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="list-view" className="w-full mt-5">
          <EventsComponent />
        </TabsContent>
        <TabsContent value="calendar-view" className="w-full mt-5">
          <CalendarComponent />
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default AdminCalendarPage;
