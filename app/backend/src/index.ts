import express from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./db/connection.js";

// Load environmental variables from env file
dotenv.config({path: '../../.env'});
console.log()

const app = express();

connectToDatabase()
    .then(() => {
        app.listen(5000, () => console.log("Server Open and connected to database"));
    })
    .catch((err) => console.log(err));

app.get("/hello", (req, res, next) => {
    return res.send("Hello");
});