"use client";
import React, { useState } from "react";
import Image from "next/image";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/buttons/Button";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    let validationErrors: { email?: string; password?: string } = {};
    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Invalid email address";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    } else if (!validatePassword(password)) {
      validationErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission logic here
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  return (
    <div className="container p-10">
      <div className="flex flex-col justify-center items-center gap-6">
        <div>
          <Image src="/images/logo.png" alt="logo" width={100} height={100} />
        </div>
        <div className="shadow-md rounded-lg border p-6 w-full flex flex-col items-center gap-6">
          <h1 className="text-md font-bold">Login</h1>
          <form onSubmit={handleSubmit} className="w-full">
            <div>
              <Input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleInputChange}
                error={errors.email}
              />
            </div>
            <div>
              <Input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleInputChange}
                error={errors.password}
              />
            </div>
            <Button title="Submit" />
            <a
              href="#"
              className="text-sm text-blue-800 mb-4 hover:text-blue-700"
            >
              Forgotten Password?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
