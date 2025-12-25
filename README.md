# 🌍 Travel Tracker

A beginner-friendly full-stack **Travel Tracker** app where users can **sign up / log in** and **track visited countries**. Each user has their **own travel history**, stored securely in a **PostgreSQL** database, with visited countries highlighted on an interactive map ✨

---

## 🛠 Tech Stack
- **Frontend:** React ⚛️
- **Backend:** Node.js + Express 🚀
- **Database:** PostgreSQL 🐘

---

## ✨ Features
- 🔐 Auto account creation on first login (username + password)
- ✅ Login validation via backend
- ➕ Add visited countries
- ❌ Remove visited countries
- 🗺 Visited countries highlighted on the map
- 👤 Each user has a separate visited list

---

## 📁 Project Structure (typical)
backend/
server.js
.env
frontend/
src/
public/

yaml
Copy code

---

## 📦 Prerequisites
Make sure you have the following installed:
- **Node.js** (with npm)
- **PostgreSQL** running locally (default port `5432`)

---

## 🗄 1) Database Setup (PostgreSQL)

1. Create a database (example: `traveltracker`)
2. Create the following tables:
   - `users`
   - `countries`
   - `user_visited_countries`

3. The `countries` table must include:
   - `id` (primary key)
   - `name` (e.g. `Nepal`)
   - `code2` (e.g. `NP`)

👉 The backend links users and countries using:
- `users.username`
- `countries.name`

---

## ⚙️ 2) Backend Setup

### Install dependencies
```bash
cd backend
npm install
Create .env
Inside the backend/ folder, create a .env file:

env
Copy code
DB_USER=your_postgres_user
DB_HOST=localhost
DB_NAME=your_database_name
DB_PASSWORD=your_postgres_password
DB_PORT=5432
Run the backend
bash
Copy code
npm start
Backend runs at:

arduino
Copy code
http://localhost:5000
💻 3) Frontend Setup
Install dependencies
bash
Copy code
cd frontend
npm install
Run the frontend
bash
Copy code
npm start
Frontend runs at:

arduino
Copy code
http://localhost:3000
🔌 API Endpoints
Base URL: http://localhost:5000

POST /pwcheck

Body: { "username": "...", "password": "..." }

Returns: true or false

POST /countries/visited

Body: { "username": "..." }

Returns: [ { name, code2 } ]

POST /countries/add

Body: { "username": "...", "countryName": "Nepal" }

Adds a visited country

DELETE /countries/remove

Body: { "username": "...", "countryName": "Nepal" }

Removes that country from the user’s list

📝 Notes
🚫 Do not commit your .env file — use .env.example instead

🔄 After adding/removing countries, re-fetch visited countries to update the map and list