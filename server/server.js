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
// // GET route for events
// app.get("/posts", async (req, res) => {
//   try {
//     const query = await db.query(
//       `SELECT event_name, event_date, event_location FROM posts`
//     );
//     res.json(query.rows);
//     res.status(200).json({ request: "success" });
//   } catch {
//     console.error(`response failed - ${error}`);
//   }
// });

// // GET route for users going to event
// app.get("/going", async (req, res) => {
//   try {
//     const query = await db.query(`SELECT going.*, events.*
//       FROM going JOIN events
//       ON events.id = going.event_id
//       `); // is this right???????????? how will i pull data form all 3 tabes here?????????????????
//     res.json(query.rows);
//     res.status(200).json({ request: "success" });
//   } catch {
//     console.error(`response failed - ${error}`);
//   }
// });

// POST route for new events
app.post("/new-post", (req, res) => {
  try {
    const data = req.body;
    const query = db.query(
      `INSERT INTO events (event_name, event_date, event_location) VALUES ($1, $2, $3) RETURNING *`,
      [data.event_name, data.event_date, data.event_location]
    );
    res.status(200).json({ request: "success!" });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});
