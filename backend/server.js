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

  db.end();
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

process.on("SIGINT", async () => {
  console.log("Closing DB connection...");
  await db.end();
  process.exit();
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
