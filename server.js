const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const VALID_API_KEY = "V81mv3P4XdLeo17iUezz8KT5QFkM7g4Hl4b0eFYmqMca";

app.post("/api/deobfuscate", (req, res) => {
    const { api_key, code } = req.body;

    if (api_key !== VALID_API_KEY) {
        return res.status(401).json({ error: "Invalid API key" });
    }

    if (!code) {
        return res.status(400).json({ error: "No code provided" });
    }

    // Simulate deobfuscation (replace this with real logic)
    const deobfuscated = code.split("").reverse().join(""); // example: just reverses the code

    res.json({ result: deobfuscated });
});

app.listen(PORT, () => {
    console.log(`Deobfuscation server running on http://localhost:${PORT}`);
});
