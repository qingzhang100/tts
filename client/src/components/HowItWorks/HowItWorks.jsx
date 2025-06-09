import { useState } from "react";
import howSettingsImg from "../../assets/illustration/how_settings.png";

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
      content:
        "Adjust the settings to customize your experience. For example, you can change the font size using the A-/A+ controls shown here.",
      imgSrc: howSettingsImg,
    },
    {
      title: "Text Converter",
      key: "textConverter",
      content:
        "Enter your text in the input box and click convert. The app will turn your written text into spoken audio.",
    },
    {
      title: "Audio Playback",
      key: "audioPlayback",
      content:
        "After conversion, listen to the audio directly within the app using the built-in player.",
    },
    {
      title: "Convert History",
      key: "convertHistory",
      content:
        "You can view your previous conversions and download the audio files for offline use.",
    },
  ];

  function expandAll() {
    const newState = {};
    items.forEach((item) => {
      newState[item.key] = true;
    });
    setOpenItems(newState);
  }

  function collapseAll() {
    const newState = {};
    items.forEach((item) => {
      newState[item.key] = false;
    });
    setOpenItems(newState);
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-center text-blue-600">
        How It Works
      </h1>
      {/* <div className="flex justify-center space-x-4 mb-1 text-[0.8rem]">
        <button
          onClick={expandAll}
          className="text-gray-400 hover:underline focus:outline-none"
          type="button"
        >
          Expand All
        </button>
        <button
          onClick={collapseAll}
          className="text-gray-400 hover:underline focus:outline-none"
          type="button"
        >
          Collapse All
        </button>
      </div> */}

      {items.map(({ title, key, content, imgSrc }) => {
        const isOpen = openItems[key];
        return (
          <div
            key={key}
            className="rounded-lg border overflow-hidden shadow-md"
          >
            <div
              onClick={() => handleClick(key)}
              className="cursor-pointer bg-gray-100 px-4 py-3 hover:bg-gray-200 transition flex justify-center items-center"
            >
              <h2 className="font-semibold text-lg text-gray-800 text-center">
                {title}
              </h2>
              <span
                className={`transform transition-transform duration-200 ml-1 text-gray-400 ${
                  isOpen ? "rotate-90" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
            {isOpen && (
              <div className="bg-white px-4 py-4 text-gray-700 text-base leading-relaxed">
                {content}
                {imgSrc && (
                  <div className="mt-2">
                    <img
                      src={imgSrc}
                      alt={title}
                      className="mx-auto max-w-3xl w-full h-auto"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default HowItWorks;
