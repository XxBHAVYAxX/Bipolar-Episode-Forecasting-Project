from flask import Flask, request, jsonify
import pickle
import pandas as pd

app = Flask(__name__)

# Load model and encoder
model = pickle.load(open("model.pkl", "rb"))
label_encoder = pickle.load(open("label_encoder.pkl", "rb"))

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    
    # Convert input into DataFrame
    input_df = pd.DataFrame([data])
    
    # Convert categorical to dummy variables
    input_df = pd.get_dummies(input_df)
    
    # IMPORTANT: Align columns with training data
    model_columns = model.feature_names_in_
    input_df = input_df.reindex(columns=model_columns, fill_value=0)

    prediction = model.predict(input_df)
    final_prediction = label_encoder.inverse_transform(prediction)

    return jsonify({
        "prediction": final_prediction[0]
    })

if __name__ == "__main__":
    app.run(debug=True)