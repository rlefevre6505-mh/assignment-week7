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
