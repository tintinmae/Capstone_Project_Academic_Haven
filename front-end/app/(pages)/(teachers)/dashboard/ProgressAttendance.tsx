"use client";
import React from "react";
import { Row, Col, Progress } from "antd";

const App: React.FC = () => (
  <div className="bg-slate-50 w-[53vh] rounded-lg shadow-xl p-6">
    <h1 className="text-lg mb-6">Average Attendance</h1>
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
        <span className="text-xl font-bold">
          {" "}
          10 <span className="font-normal text-gray-500">out of</span> 15
        </span>
        <span>Students</span>
      </div>
    </div>
  </div>
);

export default App;
