# 🎌 Anime Recommendation System

A full-stack Anime Recommendation System that suggests similar anime using **Machine Learning (TF-IDF + Cosine Similarity)**.

---

## 🚀 Features

- 🔍 Search anime by name
- 🎯 Get similar anime recommendations
- 📊 Content-based filtering
- 🌐 Full-stack web app (React + Node.js)
- ⚡ Fast and responsive UI

---

## 🏗️ Tech Stack

### Frontend
- React.js
- HTML, CSS, JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Machine Learning
- Python
- Scikit-learn (TF-IDF Vectorizer, Cosine Similarity)

---

## 🧠 Recommendation Algorithm

This system uses a **content-based filtering approach**:

1. Anime metadata (genres, description, etc.) is combined.
2. Text is converted into vectors using **TF-IDF Vectorizer**.
3. Similarity between anime is computed using **Cosine Similarity**.
4. The system recommends top similar anime based on input.

---
## Home-Animes
![Home](screenshots/Screenshot%202026-04-28%20021131.png)

## Recommended Animes
![Recommended Animes](screenshots/Screenshot%202026-04-28%20021227.png)

## Move To Next or Previous Page
![Buttons](screenshots/Screenshot%202026-04-28%20021340.png)

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

---
> git clone https://github.com/your-username/anime-recommendation-system.git

## Frontend

> cd anime_recommendation

> npm i

> npm run dev

## Backend

> cd bd_anime_recommendation

> npm i

> node sever.js

## Python
> pip install fastapi uvicorn pandas numpy scikit-learn

> python -m uvicorn ml_api:app --reload


## 🔐 Backend Environment Variables

Create a `.env` file inside the `bd_anime_recommendation/` folder and add the following:

```env
MONGO_URI=mongodb://127.0.0.1:27017/animeDB
PORT=5000
```
