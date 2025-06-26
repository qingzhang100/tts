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
    <div className="w-full mb-14 flex flex-col gap-4">
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
          focus:ring-cyan-500
          resize-y
          text-gray-700
          placeholder-gray-400
        "
        rows={4}
      />
      <p className="mt-[-0.8rem] text-[0.6rem] text-gray-500 text-right">
        Drag to adjust the window size
      </p>

      <button
        onClick={handleConvert}
        className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto block bg-cyan-600 text-white text-lg py-1 rounded-xl shadow hover:bg-cyan-500 transition"
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
