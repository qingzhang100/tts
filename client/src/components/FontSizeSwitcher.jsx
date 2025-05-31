import { useState } from "react";

export default function FontSizeSwitcher({ setFontSize }) {
  const increaseFont = () => setFontSize((size) => Math.min(size + 2, 30));
  const decreaseFont = () => setFontSize((size) => Math.max(size - 2, 12));

  return (
    <>
      <div className="mb-4">
        <button onClick={decreaseFont} className="mr-2 px-3 py-1 border">
          A-
        </button>
        <button onClick={increaseFont} className="px-3 py-1 border">
          A+
        </button>
      </div>
    </>
  );
}
