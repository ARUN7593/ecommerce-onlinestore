import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { connectDb } from "./config/Db.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect db
connectDb();

//main route
app.get("/", (req, res) => {
  res.send("Hello world from nodemon!");
});

//port
const port = process.env.PORT || 5000;

//listen
app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});
