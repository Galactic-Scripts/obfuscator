// server.js
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors()); // allow frontend

app.post('/api/obfuscate', async (req, res) => {
  const { code, preset } = req.body;
  try {
    const response = await fetch("https://galactic-obfuscator.up.railway.app/api/obfuscate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "API-KEY": "V81mv3P4XdLeo17iUezz8KT5QFkM7g4Hl4b0eFYmqMca"
      },
      body: JSON.stringify({ code, preset })
    });
    const data = await response.json();
    res.json(data);
  } catch(err) {
    res.status(500).json({ status: 'Fail', error: err.toString() });
  }
});

app.listen(3000, () => console.log("Proxy running on port 3000"));
