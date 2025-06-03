import { useState } from "react";

export default function FontSizeSwitcher({ setFontSize }) {
  const increaseFont = () => setFontSize((size) => Math.min(size + 2, 30));
  const decreaseFont = () => setFontSize((size) => Math.max(size - 2, 12));

  return (
    <div className="mb-4 flex gap-3">
      <button
        onClick={decreaseFont}
        className="
          px-4 py-2 
          bg-gray-200 
          text-gray-700 
          rounded-md 
          border border-gray-300 
          hover:bg-gray-300 
          active:bg-gray-400 
          transition 
          duration-150 
          ease-in-out
          font-semibold
          select-none
          shadow-sm
        "
        aria-label="Decrease font size"
      >
        A-
      </button>
      <button
        onClick={increaseFont}
        className="
          px-4 py-2 
          bg-blue-600 
          text-white 
          rounded-md 
          border border-blue-700 
          hover:bg-blue-700 
          active:bg-blue-800 
          transition 
          duration-150 
          ease-in-out
          font-semibold
          select-none
          shadow
        "
        aria-label="Increase font size"
      >
        A+
      </button>
    </div>
  );
}
