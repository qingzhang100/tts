import { useState } from "react";
import "./App.css";
import axios from "axios";
import MainLayOut from "./layouts/MainLayouts";
import FontSizeSwitcher from "./components/FontSizeSwitcher";

function App() {
  const [text, setText] = useState("");
  const [audioSrc, setAudioSrc] = useState(null);
  const [fontSize, setFontSize] = useState(18);

  async function handleConvert() {
    const response = await axios.post("http://localhost:8080/convert", {
      text,
    });
    const audioSrc = `data:audio/mp3;base64, ${response.data.audioContent}`;
    setAudioSrc(audioSrc);
  }

  return (
    <MainLayOut fontSize={fontSize}>
      <FontSizeSwitcher setFontSize={setFontSize} />
      <p className="mb-4 text-gray-700">
        This tool is designed primarily to assist visually impaired users by
        providing clear and accessible text-to-speech functionality.
      </p>
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
    </MainLayOut>
  );
}

export default App;
