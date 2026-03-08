<!-- dashboard.html snippet -->
<textarea id="inputCode" placeholder="Paste code here"></textarea>
<button id="deobfuscateBtn">Deobfuscate</button>
<textarea id="outputCode" placeholder="Result will appear here"></textarea>

<script>
document.getElementById("deobfuscateBtn").addEventListener("click", async () => {
    const code = document.getElementById("inputCode").value;
    const apiKey = "V81mv3P4XdLeo17iUezz8KT5QFkM7g4Hl4b0eFYmqMca"; // your key
    const preset = "DisableAntiTamper"; // or any preset you want

    try {
        const response = await fetch("https://galactic-obfuscator.up.railway.app/api/obfuscate", {
            method: "POST",
            headers: {
                "API-KEY": apiKey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ code: code, preset: preset })
        });

        const data = await response.json();

        if (data.status === "ok") {
            document.getElementById("outputCode").value = data.obfuscated;
        } else {
            alert("Error: " + data.error);
        }
    } catch (err) {
        alert("Request failed: " + err);
    }
});
</script>
