import express from "express";
import { config } from "dotenv";
config();
import { connectToDatabase } from "./db/connection.js";

const app = express();

connectToDatabase()
    .then(() => {
        app.listen(5000, () => console.log("Server Open and connected to database"));
    })
    .catch((err) => console.log(err));

app.get("/hello", (req, res, next) => {
    return res.send("Hello");
});