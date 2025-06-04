import { useState, useEffect } from "react";

function VoiceSelector({ language, setVoice }) {
  const [selected, setSelected] = useState("Female");

  // Initialize with the default voice based on the language
  // useEffect(() => {
  //   setSelected("Female");
  //   const newVoice = getVoiceCode(language, "Female");
  //   setVoice(newVoice);
  // }, [language, setVoice]);

  function handleSelectVoice(e) {
    setSelected(e.target.value);
    const newVoiceCode = getVoiceCode(language, e.target.value);
    setVoice(newVoiceCode);
  }

  function getVoiceCode(language, gender) {
    if (language === "en-US") {
      return gender === "Male" ? "en-US-Wavenet-D" : "en-US-Wavenet-F";
    } else if (language === "zh-CN" || language === "cmn-CN") {
      return gender === "Male" ? "cmn-CN-Standard-C" : "cmn-CN-Wavenet-A";
    } else if (language === "ja-JP") {
      return gender === "Male" ? "ja-JP-Standard-D" : "ja-JP-Wavenet-A";
    }
    return `${language}-Wavenet-A`;
  }

  useEffect(() => {
    setVoice(getVoiceCode(language, selected));
  }, [language, selected, setVoice]);

  return (
    <div className="flex items-center">
      <label className="text-sm font-medium text-gray-700 mr-2 whitespace-nowrap">
        Voice:
      </label>
      <select
        value={selected}
        onChange={handleSelectVoice}
        className="border rounded w-full p-2 text-gray-700 p-2"
      >
        <option value="Female">Female</option>
        <option value="Male">Male</option>
      </select>
    </div>
  );
}

export default VoiceSelector;
