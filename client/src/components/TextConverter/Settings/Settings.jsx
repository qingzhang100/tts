import FontSizeSwitcher from "./FontSizeSwitcher";
import LanguageSelector from "./LanguageSelector";
import VoiceSelector from "./VoiceSelector";

function Settings({ setFontSize, language, setLanguage, voice, setVoice }) {
  return (
    <div className="mb-4 p-4 flex justify-center gap-6 bg-gray-100 rounded-lg shadow-md">
      <FontSizeSwitcher setFontSize={setFontSize} />
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <VoiceSelector language={language} voice={voice} setVoice={setVoice} />
    </div>
  );
}

export default Settings;
