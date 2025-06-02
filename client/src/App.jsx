import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import MainLayOut from "./layouts/MainLayouts";
import FontSizeSwitcher from "./components/FontSizeSwitcher";
import SpeechSettings from "./components/SpeechSettings/SpeechSettings";

function App() {
  const [text, setText] = useState("");
  const [audioSrc, setAudioSrc] = useState(null);
  const [fontSize, setFontSize] = useState(22);
  const [language, setLanguage] = useState("en-US");
  const [voice, setVoice] = useState("en-US-Wavenet-F"); // Default voice is female English

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
      <FontSizeSwitcher setFontSize={setFontSize} />
      <SpeechSettings
        language={language}
        setLanguage={setLanguage}
        voice={voice}
        setVoice={setVoice}
      />

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
    resize-none
    text-gray-700
    placeholder-gray-400
  "
        rows={4}
      />
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
