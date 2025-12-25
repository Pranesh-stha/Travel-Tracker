
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

```text
backend/
  server.js
  .env
frontend/
  src/
  public/
````

---

## 📦 Prerequisites

Make sure you have the following installed:

* **Node.js** (with npm)
* **PostgreSQL** running locally (default port `5432`)

---

## 🗄 1) Database Setup (PostgreSQL)

1. Create a database (example: `traveltracker`)

2. Create the following tables:

   * `users`
   * `countries`
   * `user_visited_countries`

3. The `countries` table must include:

   * `id` (primary key)
   * `name` (e.g. `Nepal`)
   * `code2` (e.g. `NP`)
     
4. The `users` table must include:

    * `id` (primary key)
    * `username`
    * `password`

5. The `user_visited_countries` table must include:
   
  * `user_id` (foreign key referencing `users.id`)
  * `country_id` (foreign key referencing `countries.id`)
  * A **composite primary key** on (`user_id`, `country_id`) so the same user can’t add the same country twice


👉 The backend links users and countries using:

* `users.username`
* `countries.name`

---

## ⚙️ 2) Backend Setup

### Install dependencies

```bash
cd backend
npm install
```

### Create `.env`

Inside the `backend/` folder, create a file named `.env`:

```env
DB_USER=your_postgres_user
DB_HOST=localhost
DB_NAME=your_database_name
DB_PASSWORD=your_postgres_password
DB_PORT=5432
```

### Run the backend

```bash
npm start
```

Backend runs at:

* `http://localhost:5000`

---

## 💻 3) Frontend Setup

### Install dependencies

```bash
cd frontend
npm install
```

### Run the frontend

```bash
npm start
```

Frontend runs at:

* `http://localhost:3000`

---

## 🔌 API Endpoints

Base URL: `http://localhost:5000`

### `POST /pwcheck`

**Body**

```json
{ "username": "...", "password": "..." }
```

**Returns:** `true` or `false`

### `POST /countries/visited`

**Body**

```json
{ "username": "..." }
```

**Returns**

```json
[ { "name": "Nepal", "code2": "NP" } ]
```

### `POST /countries/add`

**Body**

```json
{ "username": "...", "countryName": "Nepal" }
```

Adds a visited country.

### `DELETE /countries/remove`

**Body**

```json
{ "username": "...", "countryName": "Nepal" }
```

Removes that country from the user’s list.

---

## 📝 Notes

* 🚫 Do not commit your `.env` file — use `.env.example` instead


