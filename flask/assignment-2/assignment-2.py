import json
import os

from flask import Flask, jsonify

app = Flask(__name__)
app.json.ensure_ascii = False  # show ä and ö as-is instead of \u00e4

# Load the dictionary from the same folder as this file
base_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(base_dir, "dictionary.json"), encoding="utf-8") as file:
    dictionary = json.load(file)


@app.route("/translate/<word>")
def translate(word):
    key = word.lower()
    if key in dictionary:
        return {"English": key, "Finnish": dictionary[key]}
    return {"error": "Word not found"}, 404


@app.route("/words")
def words():
    return jsonify(list(dictionary.keys()))


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000)