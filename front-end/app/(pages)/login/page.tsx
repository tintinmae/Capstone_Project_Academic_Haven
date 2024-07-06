"use client";
import React, { useState } from "react";
import Image from "next/image";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/buttons/Button";
import "/styles/login.css";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const router = useRouter();
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
    return password.length >= 8;
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

    router.push("/dashboard");
  };

  const handleForgotPassword = () => {
    router.push("/forgotPassword");
  };

  return (
    <div className="container p-10">
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="mb-12">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="w-14 lg:w-24"
          />
        </div>
        <div className="form-container p-6 w-screen rounded-t-xl h-full flex flex-col items-center gap-6 lg:rounded-lg lg:shadow-4xl">
          <h1 className="text-md font-bold lg:text-2xl">Login</h1>
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
              className="text-xs text-blue-800 mb-4 hover:text-blue-700"
              onClick={handleForgotPassword}
            >
              Forgotten Password?
            </a>
          </form>

          <div className="mb-8 lg:w-full">
            <hr className="mb-2" />
            <p className="text-xs text-center">
              If you don`t have an account yet, please{" "}
              <a href="#" id="#" className="text-blue-400 hover:opacity-50">
                request one
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
