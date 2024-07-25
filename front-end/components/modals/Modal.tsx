import React from "react";
import { FaTimes } from "react-icons/fa";

interface ModalProps {
  onClick?: () => void;
  onClose: () => void;
  show: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClick, onClose, show, children }) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg p-4 w-11/12 md:w-1/2 lg:w-1/3"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close"
        >
          <FaTimes />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
