// SpeechSettings.js
import LanguageSelector from "./LanguageSelector";
import VoicePicker from "./VoicePicker";

function SpeechSettings({ language, setLanguage, voice, setVoice, allVoices }) {
  return (
    <div>
      <LanguageSelector setLanguage={setLanguage} selected={language} />
      <VoicePicker allVoices={allVoices} voice={voice} setVoice={setVoice} />
    </div>
  );
}

export default SpeechSettings;
