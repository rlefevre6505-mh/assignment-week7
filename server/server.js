//TODO: set up server API
//remember to store DATABASE_URL in .env!

import express from "express";
import cors from "cors";
import { db } from "./dbconnections.js";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome ot the root route!" });
});

//TODO: set up routing system with at least 1 GET route and 1 POST route

app.get("/posts", async (req, res) => {
  try {
    const query = await db.query(
      `SELECT event_name, event_date, event_location FROM posts`
    );
    res.json(query.rows);
    res.status(200).json({ request: "success" });
  } catch {
    console.error(`response failed - ${error}`);
  }
});

app.get("/going", async (req, res) => {
  try {
    const query = await db.query(`SELECT going.*, events.* 
      FROM going JOIN events 
      ON events.id = going.event_id
      `); // is this right? how will i pull data form all 3 tabes here?
    res.json(query.rows);
    res.status(200).json({ request: "success" });
  } catch {
    console.error(`response failed - ${error}`);
  }
});

app.post("/new-post", (req, res) => {
  try {
    const data = req.body;
    const query = db.query(
      `INSERT INTO events (event_name, event_date, event_location) VALUES ($1, $2, $3) RETURNING *`,
      [data.eventName, data.eventDate, data.eventLocation]
    );
    res.status(200).json({ request: "success!" });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});
