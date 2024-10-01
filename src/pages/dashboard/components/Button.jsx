import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Button = ({ onPrev, onNext }) => {
  return (
    <div className="flex justify-between my-4">
      <button onClick={onPrev} className="bg-gray-200 p-2 rounded">
        <FaArrowLeft />
      </button>
      <button onClick={onNext} className="bg-gray-200 p-2 rounded">
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Button;

