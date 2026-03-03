# 🧠 Bipolar Episode Forecasting System

An AI-powered full-stack web application that predicts mental disorder types based on behavioral and psychological indicators.

> ⚠️ This project is for educational and research purposes only. It is not a medical diagnostic tool.

---

## 🚀 Project Overview

The Bipolar Episode Forecasting System is a Machine Learning-based web application that:

* Collects behavioral and psychological symptom inputs
* Uses a trained Random Forest model to predict disorder type
* Stores predictions in MongoDB
* Displays results through a clean frontend interface

This system demonstrates how AI can assist in early mental health pattern detection.

---

## 🏗️ System Architecture

User → Frontend (HTML/CSS/JS) → Flask Backend → ML Model → MongoDB Database

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Python
* Flask
* REST API

### Machine Learning

* Scikit-learn
* Random Forest Classifier
* Label Encoding
* One-hot Encoding

### Database

* MongoDB (Atlas / Local)
* PyMongo

---

## 📊 Dataset

* Dataset Name: `bipolar_dataset.csv`
* Total Records: 120
* Features: 18 behavioral indicators
* Target Column: `Expert Diagnose`

### Data Preprocessing Steps:

* Removed `Patient Number`
* Converted "Optimisim" column from "4 From 10" → 4
* Applied One-Hot Encoding on categorical features
* Encoded target labels using LabelEncoder

---

## 🤖 Model Training

Algorithm Used:

* Random Forest Classifier

Steps:

1. Train/Test Split (80/20)
2. Model Training
3. Accuracy Evaluation
4. Model Saved as `model.pkl`
5. Label Encoder Saved as `label_encoder.pkl`

---

## 📁 Project Structure

```
Bipolar Episode Forecasting Project
│
├── bipolar-frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
├── bipolar-backend/
│   ├── train_model.py
│   ├── app.py
│   ├── bipolar_dataset.csv
│   ├── model.pkl
│   ├── label_encoder.pkl
│   └── requirements.txt
│
└── README.md
```

---

## ▶️ How To Run The Project

### 1️⃣ Install Dependencies

```
pip install -r requirements.txt
```

### 2️⃣ Train The Model

```
python train_model.py
```

### 3️⃣ Start Flask Server

```
python app.py
```

Backend will run on:

```
http://127.0.0.1:5000
```

---

## 📌 API Endpoints

### POST `/predict`

Takes JSON input of behavioral features and returns predicted disorder.

### GET `/history`

Returns all stored prediction records from MongoDB.

---

## 💾 Database Schema (MongoDB)

Each prediction stores:

* Sleep / Mood / Behavioral inputs
* Predicted Disorder
* Timestamp

---

## 📈 Future Improvements

* Add user authentication (JWT)
* Add probability percentage output
* Add dashboard with charts
* Deploy using Render / Vercel
* Upgrade to LSTM time-series forecasting
* Improve dataset size

---

## 🎯 Resume Description

Built a full-stack AI-based mental health prediction system using Flask, Random Forest, and MongoDB. Implemented data preprocessing, model training, REST API integration, and database storage for prediction history.

---

## 👨‍💻 Author

Bhavya Kanojia
B.Tech CSE
AI & Full Stack Development Enthusiast

---
