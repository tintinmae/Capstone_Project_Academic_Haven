"use client";
import React, { useState, useEffect } from "react";
import "/styles/login.css";
import "/styles/animation.css";
import Image from "next/image";
import Input from "@/components/Input/Input";
import Button from "@/components/Buttons/Button";
import Modal from "@/components/modals/Modal";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
  const router = useRouter();
  const [password, setPassword] = useState<string>("");
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<{
    password?: string;
    confirmPassword?: string;
  }>({});

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    let validationErrors: { password?: string; confirmPassword?: string } = {};
    if (!password) {
      validationErrors.password = "Password is required";
    } else if (!validatePassword(password)) {
      validationErrors.password = "Password must be at least 8 characters long";
    }

    if (!confirmPassword) {
      validationErrors.confirmPassword = "Confirm Password is required";
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission logic here
      console.log("Password:", password);
    }

    setOpenSuccessModal(true);
  };

  const handleSuccessModal = () => {
    setOpenSuccessModal(!openSuccessModal);
  };

  const closeModal = () => {
    setOpenSuccessModal(false);
    router.push("/login");
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (openSuccessModal) {
      timer = setTimeout(() => {
        closeModal();
      }, 2000); //modal will close after 2 seconds
    }
    return () => clearTimeout(timer);
  }, [openSuccessModal]);
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
          <h1 className="text-md font-bold lg:text-2xl">Reset your password</h1>
          <p className="text-xs">
            Ensure your new password is different from previous one.
          </p>

          <form onSubmit={handleSubmit} className="w-full">
            {/* <div className="p-2">
              <p className="text-xs">Enter your new password</p>
            </div> */}
            <div className="mb-4">
              <label htmlFor="newPassword" className="text-xs">
                Enter your new password
              </label>
              <Input
                type="password"
                name="password"
                value={password}
                placeholder="New Password"
                onChange={handleInputChange}
                error={errors.password}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="newPassword" className="text-xs">
                Confirm your password
              </label>
              <Input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={handleInputChange}
                error={errors.confirmPassword}
              />
            </div>
            <Button title="Submit" />
          </form>
        </div>
      </div>

      <Modal show={openSuccessModal} onClose={closeModal}>
        <div className="flex flex-col items-center justify-center gap-6">
          <img
            src="/images/check.svg"
            alt="check mark"
            className="w-20 h-20 animate-success-check"
          />
          <h1>Password reset successfully!</h1>
        </div>
      </Modal>
    </div>
  );
};

export default ResetPassword;
