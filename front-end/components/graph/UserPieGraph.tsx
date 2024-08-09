"use client";
import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { useStudentContext } from "@/app/contexts/StudentContext";
import { useTeacherContext } from "@/app/contexts/TeacherContext";

export default function DoughnutChartDemo() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  const { students } = useStudentContext();
  const { teachers } = useTeacherContext();

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["Teachers", "Students", "Staffs"],
      datasets: [
        {
          data: [teachers.length, students.length, 10],
          backgroundColor: [
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--yellow-500"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--blue-400"),
            documentStyle.getPropertyValue("--yellow-400"),
            documentStyle.getPropertyValue("--green-400"),
          ],
        },
      ],
    };
    const options = {
      cutout: "70%",
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
      responsive: true,
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card flex justify-content-center w-full gap-4">
      <div className="w-1/2 md:w-2/3 lg:w-full ml-4 2xl:ml-10 mt-4">
        <Chart
          type="doughnut"
          data={chartData}
          options={chartOptions}
          className="w-full"
          style={{ minHeight: "300px", height: "100%" }}
        />
      </div>
    </div>
  );
}
