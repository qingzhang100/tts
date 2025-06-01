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
  const [voice, setVoice] = useState("en-US-Wavenet-F");

  async function handleConvert() {
    const response = await axios.post("http://localhost:8080/convert", {
      text,
    });
    const audioSrc = `data:audio/mp3;base64, ${response.data.audioContent}`;
    setAudioSrc(audioSrc);
  }

  const DEFAULT_VOICES_BY_LANGUAGE = {
    "en-US": "en-US-Wavenet-F",
    "zh-CN": "cmn-CN-Wavenet-B",
  };

  useEffect(() => {
    const selectedVoice = DEFAULT_VOICES_BY_LANGUAGE[language];
    if (selectedVoice) {
      setVoice(selectedVoice);
    }
  }, [language]);

  return (
    <MainLayOut fontSize={fontSize}>
      <FontSizeSwitcher setFontSize={setFontSize} />
      <SpeechSettings language={language} setLanguage={setLanguage} />

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
