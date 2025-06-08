import axios from "axios";

export default function TextConverter({
  text,
  setText,
  voice,
  language,
  audioSrc,
  setAudioSrc,
  fontSize,
}) {
  async function handleConvert() {
    const response = await axios.post("http://localhost:8080/convert", {
      text,
      voice,
      language,
    });
    const audioSrc = `data:audio/mp3;base64, ${response.data.audioContent}`;
    setAudioSrc(audioSrc);
  }

  return (
    <div className="w-full mb-14">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
        style={{ fontSize: `${fontSize}px` }}
        className="
          w-full
          p-3
          border
          border-gray-300
          rounded-md
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          resize-y
          text-gray-700
          placeholder-gray-400
        "
        rows={4}
      />
      <p className="mt-[-0.2rem] text-[0.6rem] text-gray-500 text-right">
        Drag to adjust the window size
      </p>

      <button
        onClick={handleConvert}
        className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Convert
      </button>

      {audioSrc && (
        <div className="mt-4">
          <audio controls src={audioSrc} />
        </div>
      )}
    </div>
  );
}
