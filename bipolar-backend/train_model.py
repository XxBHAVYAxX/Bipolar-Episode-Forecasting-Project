import pandas as pd
import pickle
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score, classification_report

# 🔹 Load dataset
df = pd.read_csv("bipoler_dataset.csv")

print("Dataset Loaded Successfully")
print("Shape:", df.shape)

# 🔹 Drop Patient Number (not useful)
df = df.drop("Patient Number", axis=1)

# 🔹 Clean Optimisim column (convert "4 From 10" → 4)
df["Optimisim"] = df["Optimisim"].str.extract('(\d+)').astype(int)

# 🔹 Separate features and target
X = df.drop("Expert Diagnose", axis=1)
y = df["Expert Diagnose"]

# 🔹 Encode all categorical features
X = pd.get_dummies(X)

# 🔹 Encode target labels
label_encoder = LabelEncoder()
y_encoded = label_encoder.fit_transform(y)

# 🔹 Train/Test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y_encoded, test_size=0.2, random_state=42
)

# 🔹 Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# 🔹 Evaluate
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)

print("\nModel Accuracy:", accuracy)
print("\nClassification Report:\n")
print(classification_report(y_test, y_pred))

# 🔹 Save model and encoder
pickle.dump(model, open("model.pkl", "wb"))
pickle.dump(label_encoder, open("label_encoder.pkl", "wb"))

print("\nModel and Label Encoder Saved Successfully!")