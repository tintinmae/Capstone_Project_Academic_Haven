"use client";
import React, { useState } from "react";
import "/styles/login.css";
import Image from "next/image";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/buttons/Button";
import Modal from "@/app/components/modals/Modal";
import CodeInput from "@/app/components/codeInputs/CodeInput";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [openModal, setOpenModal] = useState(false);

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
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

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission logic here
      console.log("Email:", email);
      setOpenModal(true);
    }
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleCodeSubmit = () => {
    // code validation logic here
    router.push("/resetPassword");
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
          <h1 className="text-md font-bold lg:text-2xl">Forgotten Password</h1>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="p-2">
              <p className="text-xs">
                Please enter your email to reset your password
              </p>
            </div>
            <div>
              <Input
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={handleInputChange}
                error={errors.email}
              />
            </div>
            <Button title="Submit" />
          </form>
        </div>
      </div>

      <Modal onClose={closeModal} show={openModal}>
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs text-center">
            Please enter the 4-digit code sent to{" "}
            <span className="underline">{email}</span>
          </p>
          <div>
            <CodeInput onComplete={handleCodeSubmit} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ForgotPassword;
