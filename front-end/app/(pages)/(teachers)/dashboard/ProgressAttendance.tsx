"use client";
import React from "react";
import { Row, Col, Progress } from "antd";
import { FaFileExport } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const ProgressAttendance: React.FC = () => (
  <div className="bg-slate-50 w-full rounded-lg shadow-xl p-6 flex flex-col justify-between">
    <h1 className="text-md md:text-lg">Students' Average Attendance</h1>
    <div className="flex items-center justify-center gap-10">
      <Row gutter={[16, 16]} wrap>
        <Col>
          <Progress
            type="circle"
            percent={75}
            strokeWidth={16}
            strokeColor="#376E37"
          />
        </Col>
      </Row>
      <div className="flex flex-col">
        <span className="text-md md:text-xl font-bold">
          {" "}
          10 <span className="font-normal text-gray-500">out of</span> 15
        </span>
        <span>Students</span>
      </div>
    </div>
    <div className="self-end">
      <p className="text-blue-600 text-xs underline flex items-center">
        Export CSV{" "}
        <span>
          <GoArrowUpRight size={14} />
        </span>
      </p>
    </div>
  </div>
);

export default ProgressAttendance;
