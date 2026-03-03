from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd

app = Flask(__name__)
CORS(app)


@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    input_df = pd.DataFrame([data])
    input_df = pd.get_dummies(input_df)

    model_columns = model.feature_names_in_
    input_df = input_df.reindex(columns=model_columns, fill_value=0)

    prediction = model.predict(input_df)
    probabilities = model.predict_proba(input_df)

    disorder = label_encoder.inverse_transform(prediction)[0]

    mania_prob = round(max(probabilities[0]) * 100)
    depression_risk = round((1 - max(probabilities[0])) * 100)

    response = {
        "mood_stability": disorder,
        "mania_probability": mania_prob,
        "depression_risk": depression_risk,
        "sleep_quality": data.get("Sleep", 7),
        "next_episode_risk": "Low" if mania_prob < 40 else "High",
        "summary": f"Prediction indicates {disorder} pattern."
    }

    return jsonify(response)