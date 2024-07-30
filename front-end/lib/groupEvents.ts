import { EventProps } from "@/app/contexts/EventsContext";
export const groupAndSortEventsByMonth = (events: EventProps[]) => {
  const groupedEvents = events.reduce((acc, event) => {
    const monthYear = event.dateTime.toLocaleString("default", {
      year: "numeric",
      month: "long",
    }); // Format: "Month Year"
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(event);
    return acc;
  }, {} as Record<string, EventProps[]>);

  // Sort months
  const sortedMonths = Object.keys(groupedEvents).sort((a, b) => {
    const [aMonth, aYear] = a.split(" ");
    const [bMonth, bYear] = b.split(" ");
    const monthOrder =
      new Date(Date.parse(aMonth + " 1, 2020")).getMonth() -
      new Date(Date.parse(bMonth + " 1, 2020")).getMonth();
    const yearOrder = parseInt(aYear) - parseInt(bYear);
    return yearOrder || monthOrder;
  });

  return sortedMonths.reduce((acc, monthYear) => {
    acc[monthYear] = groupedEvents[monthYear];
    return acc;
  }, {} as Record<string, EventProps[]>);
};
