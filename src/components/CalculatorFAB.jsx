import React from "react";
import { Calculator } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CalculatorFAB = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/calculator"); // Adjust this path to match your calculator page route
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-50 flex items-center gap-2 group"
      aria-label="Open Calculator"
    >
      <Calculator className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out">
        Calculator
      </span>
    </button>
  );
};

export default CalculatorFAB;
