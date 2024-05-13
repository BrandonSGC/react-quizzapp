import { useEffect } from "react";
import { CloseIcon } from "../assets";

export const Modal = ({ isOpen, toggleModal, children }) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div className="fixed w-[90%] mx-auto inset-0 z-50 flex items-center justify-center overflow-hidden">
      <div className="fixed inset-0 bg-black opacity-50"></div>

      <div className="z-50 bg-white rounded-lg">
        <div className="flex justify-end">
          <button
            className="pt-2 pr-2 text-gray-500 hover:text-gray-700"
            onClick={toggleModal}
          >
            <CloseIcon />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
