import { useState } from "react";

function LanguageSelector({ language, setLanguage }) {
  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="flex items-center">
      <label className="text-sm font-medium text-gray-700 mr-2 whitespace-nowrap">
        Language:
      </label>
      <select
        value={language}
        onChange={handleChange}
        className="w-full border rounded p-2"
      >
        <option value="en-US">English (US) - English</option>
        <option value="ja-JP">Japanese - 日本語</option>
        <option value="cmn-CN">Chinese (Mainland) - 中文</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
