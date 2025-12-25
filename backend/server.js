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

db.query("SELECT * FROM users", (err, res) => {
  if (err) {
    console.log("Error Executing Message", err.stack);
  } else {
    userInfo = res.rows;
  }
});

app.get("/users", async (req, res) => {
  try {
    res.json(userInfo);
  } catch (err) {
    console.error("Error fetching users", err);
    res.status(500).json([]);
  }
});

app.post("/pwcheck", (req, res) => {
  const response = req.body;
  const user = userInfo.find((u) => u.username === response.username);

  if (!user) {
    return res.json(false);
  }

  if (user.password === response.password) {
    return res.json(true);
  }

  return res.json(false);
});

let currentUser = "";

app.post("/test", (req, res) => {
  console.log("🔥 TEST ROUTE HIT");
  console.log("Body:", req.body);
  res.json({ ok: true });
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
