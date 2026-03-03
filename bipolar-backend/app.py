from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import pickle

# -----------------------------
# Initialize Flask App
# -----------------------------
app = Flask(__name__)
CORS(app)   # Enable CORS for React (localhost:5173)

# -----------------------------
# Load Trained Model & Encoder
# -----------------------------
model = pickle.load(open("model.pkl", "rb"))
label_encoder = pickle.load(open("label_encoder.pkl", "rb"))

# -----------------------------
# Predict Route
# -----------------------------
@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json

        # Convert input JSON to DataFrame
        input_df = pd.DataFrame([data])

        # Convert categorical columns to dummy variables
        input_df = pd.get_dummies(input_df)

        # Align input columns with training columns
        model_columns = model.feature_names_in_
        input_df = input_df.reindex(columns=model_columns, fill_value=0)

        # Make prediction
        prediction = model.predict(input_df)
        probabilities = model.predict_proba(input_df)

        # Convert encoded label back to original
        disorder = label_encoder.inverse_transform(prediction)[0]

        # Calculate probabilities
        max_prob = max(probabilities[0])
        mania_prob = round(max_prob * 100)
        depression_risk = round((1 - max_prob) * 100)

        # Create response for dashboard
        response = {
            "mood_stability": disorder,
            "mania_probability": mania_prob,
            "depression_risk": depression_risk,
            "sleep_quality": data.get("Sleep", 7),
            "next_episode_risk": "Low" if mania_prob < 40 else "High",
            "summary": f"Prediction indicates {disorder} pattern."
        }

        return jsonify(response)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# -----------------------------
# Run Server
# -----------------------------
if __name__ == "__main__":
    app.run(debug=True)