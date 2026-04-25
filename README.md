# 🧠 Bipolar Episode Forecasting System

An AI-powered full-stack web application designed to predict and monitor mental health patterns using behavioral and psychological indicators. This system leverages Machine Learning to provide early detection of mood swings, helping users track their mental well-being through data-driven insights.

> ⚠️ **Disclaimer:** This project is for educational and research purposes only. It is not a medical diagnostic tool or a substitute for professional clinical advice.

---

## 🚀 Project Overview

The Bipolar Episode Forecasting System is a Machine Learning-powered dashboard that:

* **Tracks Mood & Sleep:** Users can log daily mood, energy levels, and sleep duration.
* **Predictive Analytics:** Uses a trained **Random Forest** model to identify patterns such as Mania, Depression, or Stability based on behavioral indicators.
* **Visual Insights:** Generates interactive charts to visualize mood stability and forecasting trends over time.
* **Risk Assessment:** Calculates mania probability and depression risk percentages based on historical log data.
* **Dynamic Forecasting:** Analyzes historical logs (up to 28 days) to generate weekly risk trends and future outlooks.

---

## 🏗️ System Architecture

```
User → React Frontend (Vite) → Flask Backend (REST API) → ML Model → MongoDB Database
```

---

## 🛠️ Tech Stack

### Frontend

* **Framework:** React 19 (Vite)
* **Styling:** Tailwind CSS & Framer Motion
* **Charts:** Recharts
* **Icons:** Lucide-React

### Backend

* **Language:** Python
* **Framework:** Flask with Flask-CORS
* **Database:** MongoDB (via PyMongo)

### Machine Learning

* **Library:** Scikit-learn
* **Algorithm:** Random Forest Classifier
* **Preprocessing:** Label Encoding & One-Hot Encoding

---

## 📁 Project Structure

```
Bipolar-Episode-Forecasting-Project/
├── bipolar-frontend/          
│   ├── src/
│   │   ├── components/        
│   │   ├── App.jsx            
│   │   └── index.css          
│   ├── package.json           
│   └── vite.config.js         
│
├── bipolar-backend/           
│   ├── app.py                 
│   ├── train_model.py         
│   ├── bipolar_dataset.csv    
│   ├── model.pkl              
│   ├── label_encoder.pkl      
│   └── requirements.txt       
│
└── README.md                  
```

---

## 📌 API Endpoints

### 🔐 Authentication

* `POST /api/register` → Create a new user account
* `POST /api/login` → Authenticate users and establish a session

### 📊 Data & Forecasting

* `GET /api/dashboard` → Retrieve latest mood stats, sleep quality, and summary predictions
* `GET /api/forecast` → Analyze historical data to calculate weekly risk trends
* `POST /api/logs` → Submit a new daily entry
* `GET /api/logs` → Fetch user log history

---

## ▶️ Getting Started

### 1️⃣ Backend Setup

```bash
cd bipolar-backend
pip install -r requirements.txt
python train_model.py
python app.py
```

Backend runs on: http://127.0.0.1:5000

---

### 2️⃣ Frontend Setup

```bash
cd bipolar-frontend
npm install
npm run dev
```

Frontend runs on: http://localhost:5173

---

## 🎯 Key Achievements

* **Advanced Analytics:** Forecasting engine analyzing up to 28 days of data
* **Modern UI/UX:** Responsive dashboard with real-time visualizations
* **Full-Stack Integration:** End-to-end pipeline from logging to ML predictions

---

## 👨‍💻 Author

**Bhavya Kanojia**
B.Tech CSE, IILM University
AI & Full Stack Development Enthusiast
