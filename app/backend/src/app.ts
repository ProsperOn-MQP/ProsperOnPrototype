// Creates an express application that can handle client requests
import express from "express";

const app = express();

// Get request for "Hello"
app.get("/hello", (req, res, next) => {
    return res.send("Hello");
});

export default app;

