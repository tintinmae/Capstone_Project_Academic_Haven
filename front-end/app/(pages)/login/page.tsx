import React from "react";
import Image from "next/image";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/buttons/Button";

const Login = () => {
  return (
    <div className="container flex flex-col justify-center items-center p-10 gap-6">
      <div>
        <Image src="/images/logo.png" alt="logo" width={100} height={100} />
      </div>
      <div className="shadow-md rounded-lg border p-6 w-full flex flex-col items-center gap-6">
        <h1 className="text-md font-bold">Login</h1>
        <form action="" className="w-full">
          <Input placeholder="Enter your email" name="email" />
          <Input placeholder="Enter your password" name="password" />

          <Button title="Submit" />

          <a href="" className="text-sm text-blue-800 mb-4 hover:text-blue-700">
            Forgotten Password?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
