import { useState } from "react";

function LanguageSelector({ setLanguage }) {
  const [selected, setSelected] = useState("en-US");

  const handleChange = (e) => {
    setSelected(e.target.value);
    setLanguage(e.target.value);
  };

  return (
    <div className="mb-4 flex items-center">
      <label className="mb-1 text-sm font-medium text-gray-700 mr-2 whitespace-nowrap">
        Select Language:
      </label>
      <select
        value={selected}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="en-US">English (US) - English</option>
        {/* <option value="en-GB">English (UK) - English</option> */}
        {/* <option value="ja-JP">Japanese - 日本語</option> */}
        <option value="cmn-CN">Chinese (Mainland) - 中文</option>
        {/* <option value="zh-TW">Chinese (Taiwan) - 中文</option>
        <option value="fr-FR">French - Français</option>
        <option value="es-ES">Spanish - Español</option>
        <option value="ko-KR">Korean - 한국어</option> */}
      </select>
    </div>
  );
}

export default LanguageSelector;
