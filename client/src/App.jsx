import { useState, useEffect } from "react";
import "./App.css";

import MainLayOut from "./layouts/MainLayouts";
import Settings from "./components/TextConverter/Settings/Settings";
import Carousel from "./components/Carousel/Carousel";
import AppDescription from "./components/AppDescription/AppDescription";
import TextConverter from "./components/TextConverter/TextConverter";
import HowItWorks from "./components/HowItWorks/HowItWorks";

function App() {
  const [text, setText] = useState("");
  const [audioSrc, setAudioSrc] = useState("");
  const [fontSize, setFontSize] = useState(22);
  const [language, setLanguage] = useState("en-US");
  const [voice, setVoice] = useState("en-US-Wavenet-F"); // Default voice is female English

  useEffect(() => {
    console.log("Current language:", language);
    console.log("Current voice code:", voice);
  }, [language, voice]);

  return (
    <MainLayOut fontSize={fontSize}>
      <Settings
        setFontSize={setFontSize}
        language={language}
        setLanguage={setLanguage}
        voice={voice}
        setVoice={setVoice}
      />
      <TextConverter
        fontSize={fontSize}
        text={text}
        setText={setText}
        voice={voice}
        language={language}
        audioSrc={audioSrc}
        setAudioSrc={setAudioSrc}
      />
      <AppDescription />
      <HowItWorks />
      <Carousel />
    </MainLayOut>
  );
}

export default App;
