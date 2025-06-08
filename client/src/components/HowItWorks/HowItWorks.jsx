import { useState } from "react";

function HowItWorks() {
  const [openItems, setOpenItems] = useState({
    settings: true,
    textConverter: true,
    audioPlayback: true,
    convertHistory: true,
  });

  function handleClick(title) {
    setOpenItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  }

  const items = [
    {
      title: "Settings",
      key: "settings",
      content: "Adjust the settings to customize your experience.",
    },
    {
      title: "Text Converter",
      key: "textConverter",
      content: "Enter your text and convert it to audio.",
    },
    {
      title: "Audio Playback",
      key: "audioPlayback",
      content: "Listen to the converted audio directly in the app.",
    },
    {
      title: "Convert History",
      key: "convertHistory",
      content: "Download the audio file for offline use.",
    },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
        How It Works
      </h1>
      {items.map(({ title, key, content }) => {
        const isOpen = openItems[key];
        return (
          <div
            key={key}
            className="rounded-lg border overflow-hidden shadow-md"
          >
            <div
              onClick={() => handleClick(key)}
              className="cursor-pointer bg-gray-100 px-4 py-3 hover:bg-gray-200 transition flex justify-between items-center"
            >
              <h2 className="font-semibold text-lg text-gray-800">{title}</h2>
              <span
                className={`transform transition-transform duration-200 ${
                  isOpen ? "rotate-90" : ""
                }`}
              >
                ▶
              </span>
            </div>
            {isOpen && (
              <div className="bg-white px-4 py-4 text-center text-gray-700 text-base leading-relaxed">
                {content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default HowItWorks;
