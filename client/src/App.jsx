import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import MainLayOut from "./layouts/MainLayouts";
import Settings from "./components/Settings/Settings";

function App() {
  const [text, setText] = useState("");
  const [audioSrc, setAudioSrc] = useState(null);
  const [fontSize, setFontSize] = useState(22);
  const [language, setLanguage] = useState("en-US");
  const [voice, setVoice] = useState("en-US-Wavenet-F"); // Default voice is female English

  useEffect(() => {
    console.log("Current language:", language);
    console.log("Current voice code:", voice);
  }, [language, voice]);

  async function handleConvert() {
    const response = await axios.post("http://localhost:8080/convert", {
      text,
      voice,
      language,
    });
    const audioSrc = `data:audio/mp3;base64, ${response.data.audioContent}`;
    setAudioSrc(audioSrc);
  }

  return (
    <MainLayOut fontSize={fontSize}>
      <Settings
        setFontSize={setFontSize}
        language={language}
        setLanguage={setLanguage}
        voice={voice}
        setVoice={setVoice}
      />
      <div className="relative w-full">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
          style={{ fontSize: `${fontSize}px` }}
          className="
    w-full
    p-3
    border
    border-gray-300
    rounded-md
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    resize-y
    text-gray-700
    placeholder-gray-400
  "
          rows={4}
        />
        <p className="absolute bottom-[-0.8rem] right-3 text-[0.7rem] text-gray-500 pointer-events-none">
          drag to adjust the window size
        </p>
      </div>
      <br />

      <button
        onClick={handleConvert}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Convert
      </button>
      <br />
      {audioSrc && <audio controls src={audioSrc} />}
      <p className="mb-4 text-gray-700">
        Our tool is designed to make digital content accessible to everyone,
        with a special focus on supporting users with visual impairments,
        reading difficulties, or anyone who prefers to listen rather than read.
        Whether you are browsing, studying, or multitasking, HearText provides
        clear, natural-sounding speech to help you effortlessly consume
        information. Experience seamless accessibility and convenience—because
        everyone deserves easy access to information.
      </p>
    </MainLayOut>
  );
}

export default App;
