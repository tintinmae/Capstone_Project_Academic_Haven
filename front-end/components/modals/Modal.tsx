import React from "react";

interface ModalProps {
  onClick?: () => void;
  onClose: () => void;
  show: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClick, onClose, show, children }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col mb-4">
          {/* <button
            className="text-gray-600 hover:text-gray-900 self-end"
            onClick={onClose}
          >
            &times;
          </button> */}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
