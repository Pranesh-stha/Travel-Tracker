import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();
const PORT = 5000;
dotenv.config();

app.use(cors());
app.use(express.json());

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect();

let userInfo = [];

app.post("/pwcheck", (req, res) => {
  const { username, password } = req.body;

  db.query(
    "SELECT password FROM users WHERE username = $1",
    [username],
    (err, dbRes) => {
      if (err) {
        console.log("DB error:", err.stack);
        return res.status(500).json(false);
      }

      // If user doesn't exist: create and log in
      if (dbRes.rows.length === 0) {
        return db.query(
          "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id",
          [username, password],
          (err2) => {
            if (err2) {
              console.log("Insert error:", err2.stack);
              return res.status(500).json(false);
            }
            return res.json(true);
          }
        );
      }

      // User exists, check password
      const dbPassword = dbRes.rows[0].password;
      return res.json(dbPassword === password);
    }
  );
});






app.post("/countries/visited", (req, res) => {
  console.log("POST /countries/visited hit");
  console.log("Raw req.body:", req.body);

  const username =req.body.username


  console.log("Resolved username:", username);

  db.query(
    `SELECT c.name, c.code2
     FROM user_visited_countries uvc
     JOIN users u ON u.id = uvc.user_id
     JOIN countries c ON c.id = uvc.country_id
     WHERE u.username = $1;`,
    [username], 
    (err, dbRes) => {
      if (err) {
        console.log("Error Executing Message", err.stack);
        return res.status(500).json({ error: "Database error" });
      }

      const activeCountries = dbRes.rows;

      console.log("Active countries fetched:", activeCountries);

      return res.json(activeCountries);
    }
  );
});



process.on("SIGINT", async () => {
  console.log("Closing DB connection...");
  await db.end();
  process.exit();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
