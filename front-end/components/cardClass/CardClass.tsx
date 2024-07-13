import React from "react";
import Image from "next/image";

interface CircleProps {
  letter: string;
  bgColor: string;
  textColor?: string;
}

const Circle: React.FC<CircleProps> = ({
  letter,
  bgColor,
  textColor = "text-white",
}) => {
  return (
    <div
      className={`flex items-center justify-center w-10 h-10 rounded-full ${bgColor} ${textColor}`}
    >
      {letter}
    </div>
  );
};

const CardClass: React.FC = () => {
  return (
    <div className="fixed w-60 h-52 shadow-lg bg-gray-300 rounded">
      <div className="flex justify-center mt-7">
        <Image src="/images/logo.png" alt="logo" width={70} height={70} />
      </div>
      <h1 className="mt-5 text-center">Christine Mae Ocana</h1>
      <div className="flex justify-center space-x-2 mt-3 cursor-pointer">
        <Circle letter="P" bgColor="bg-blue-900" />
        <Circle letter="A" bgColor="bg-white border" textColor="text-black" />
        <Circle letter="L" bgColor="bg-white border" textColor="text-black" />
      </div>
    </div>
  );
};

export default CardClass;
