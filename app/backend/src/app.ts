// Creates an router for the overall application
import cors from "cors";
import express, { json } from "express";
import authenticationRouter from "./routers/authentication.js";
import chatbotRouter from "./routers/chatbot.js";

const app = express();
app.use(json()); // Converts request bodies to json format.
app.use(cors());
app.use("/", authenticationRouter);
app.use("/", chatbotRouter);

export default app;


