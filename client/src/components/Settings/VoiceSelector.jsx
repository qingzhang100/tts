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
    const gender = e.target.value;
    setSelected(gender);
    const newVoiceCode = getVoiceCode(language, gender);
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
    <div className="mb-4 flex items-center">
      <label className="mb-1 text-sm font-medium text-gray-700 mr-2 whitespace-nowrap">
        Choose voice:
      </label>
      <select
        value={selected}
        onChange={handleSelectVoice}
        className="border rounded px-3 py-2 w-full text-gray-700"
      >
        <option value="Female">Female</option>
        <option value="Male">Male</option>
      </select>
    </div>
  );
}

export default VoiceSelector;
