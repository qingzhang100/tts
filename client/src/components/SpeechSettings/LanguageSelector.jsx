import { useState } from "react";

function LanguageSelector({ language, setLanguage }) {
  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="mb-4 flex items-center">
      <label className="mb-1 text-sm font-medium text-gray-700 mr-2 whitespace-nowrap">
        Select Language:
      </label>
      <select
        value={language}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="en-US">English (US) - English</option>
        <option value="ja-JP">Japanese - 日本語</option>
        <option value="cmn-CN">Chinese (Mainland) - 中文</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
