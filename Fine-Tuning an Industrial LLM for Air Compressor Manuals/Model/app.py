from flask import Flask, render_template, request
import requests

app = Flask(__name__)

# Hugging Face Inference API URL
API_URL = "https://api-inference.huggingface.co/models/your-username/fine_tuned_model"

# Function to query the model
def query_model(question):
    headers = {"Authorization": "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"}
    payload = {
        "inputs": question,
    }
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

@app.route("/", methods=["GET", "POST"])
def home():
    answer = ""
    if request.method == "POST":
        question = request.form["question"]
        answer = query_model(question)
    return render_template("Ui.html", answer=answer)

if __name__ == "__main__":
    app.run(debug=True)
