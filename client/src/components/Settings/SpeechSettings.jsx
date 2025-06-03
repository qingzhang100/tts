import LanguageSelector from "./LanguageSelector";
import VoiceSelector from "./VoiceSelector";

function SpeechSettings({ language, setLanguage, voice, setVoice }) {
  return (
    <div className="flex gap-4 items-center">
      <LanguageSelector setLanguage={setLanguage} />
      <VoiceSelector
        language={language}
        voice={voice}
        setVoice={setVoice}
      />{" "}
    </div>
  );
}

export default SpeechSettings;
