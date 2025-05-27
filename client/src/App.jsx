import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [audioSrc, setAudioSrc] = useState(null);

  async function handleSynthesize() {
    const response = await axios.post("http://localhost:8080/synthesize", {
      text,
    });
    const audioSrc = `data:audio/mp3;base64, ${response.data.audioContent}`;
    setAudioSrc(audioSrc);
  }

  return (
    <>
      <h1>Text to Speech</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <br />
      <button onClick={handleSynthesize}>Synthesize</button>
      <br />
      {audioSrc && <audio controls src={audioSrc} />}
    </>
  );
}

export default App;
