import { useState } from "react";

function VoiceSelector({ language, voice, setVoice }) {
  const [selectedVoiceName, setSelectedVoiceName] = useState("Female"); // Default voice name displayed

  function handleSelectVoice(e) {
    setSelectedVoiceName(e.target.value);
    const gender = e.target.value;
    const newVoiceCode = getVoiceCode(language, gender);
    setVoice(newVoiceCode);
  }

  function getVoiceCode(language, gender) {
    if (language === "en-US") {
      return gender === "Male" ? "en-US-Wavenet-D" : "en-US-Wavenet-F";
    } else if (language === "zh-CN") {
      return gender === "Male" ? "zh-CN-Wavenet-B" : "zh-CN-Wavenet-A";
    } else if (language === "ja-JP") {
      return gender === "Male" ? "ja-JP-Wavenet-B" : "ja-JP-Wavenet-A";
    }
    return `${language}-Wavenet-A`;
  }

  function getVoiceNameFromVoice(voice) {
    if (!voice) return "Female";
    return voice.includes("-B") || voice.includes("-D") ? "Male" : "Female";
  }

  return (
    <div className="mb-4 flex items-center">
      <label className="mb-1 text-sm font-medium text-gray-700 mr-2 whitespace-nowrap">
        Choose voice:
      </label>
      <select
        value={selectedVoiceName}
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
