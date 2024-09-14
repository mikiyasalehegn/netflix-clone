import React from "react";
import { X } from "lucide-react";

function Popup({ onClose }) {
  return (
    <div className="fixed z-10 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-top ">
      <div className="mt-20 flex flex-col items-top">
        <button onClick={onClose} className="place-self-end">
          <X size={30} />
        </button>
        <div className="bg-violet-600 bg-opacity-90 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
          <h1 className="text-4xl font-extrabold">OOPS!</h1>
          <p className="text-3xl font-bold max-w-md text-center">
            No video found. Please retry again.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Popup;
