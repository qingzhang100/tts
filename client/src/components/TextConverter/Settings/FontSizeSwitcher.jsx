import { useState } from "react";

export default function FontSizeSwitcher({ setFontSize }) {
  const increaseFont = () => setFontSize((size) => Math.min(size + 2, 30));
  const decreaseFont = () => setFontSize((size) => Math.max(size - 2, 12));

  return (
    <div className="flex gap-3">
      <button
        onClick={decreaseFont}
        className="w-10
        p-2
          bg-white 
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
        className="w-10
        p-2
          bg-white 
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
        aria-label="Increase font size"
      >
        A+
      </button>
    </div>
  );
}
