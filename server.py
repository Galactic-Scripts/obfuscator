from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os


app = Flask(__name__)
CORS(app)

API_KEY = "V81mv3P4XdLeo17iUezz8KT5QFkM7g4Hl4b0eFYmqMca"

@app.route("/obfuscate", methods=["POST"])
def obfuscate():
    data = request.json
    code = data.get("code")

    try:
        response = requests.post(
            "https://galactic-obfuscator.up.railway.app/api/obfuscate",
            headers={
                "API-KEY": API_KEY,
                "Content-Type": "application/json"
            },
            json={
                "preset": "Medium",
                "code": code
            }
        )

        return jsonify(response.json())

    except Exception as e:
        return jsonify({"status": "Fail", "error": str(e)})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
