const express = require("express");
const axios = require("axios");
const cors = require("cors");

require("dotenv").config();
const googleApiKey = process.env.GOOGLE_API_KEY;

var HTTP_PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: `http://localhost:5173`,
  })
);

app.get("/", (req, res) => {
  res.send("Test the server is running.");
});

app.post("/convert", async (req, res) => {
  try {
    const { text, voice } = req.body;
    if (!text) {
      return res.status(400).json({ error: "Missing text input" });
    }

    const apiKey = googleApiKey;
    const endpoint = `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${apiKey}`;
    const payload = {
      audioConfig: {
        audioEncoding: "MP3",
        effectsProfileId: ["small-bluetooth-speaker-class-device"],
        pitch: 0,
        speakingRate: 1,
      },
      input: {
        text,
      },
      voice: {
        languageCode: voice.split("-").slice(0, 2).join("-"), // e.g. "en-US"
        name: voice, // full voice name like "en-US-Wavenet-C"
      },
    };

    const response = await axios.post(endpoint, payload);
    res.json(response.data);
  } catch (err) {
    console.error("Google API Error:", err.response?.data || err.message);
    res.status(500).json({ error: "Synthesis failed" });
  }
});

app.listen(HTTP_PORT, () => console.log("server running on", HTTP_PORT));
