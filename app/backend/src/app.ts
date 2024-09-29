// Creates an router for the overall application
import express, { json } from "express";
import authenticationRouter from "./routers/authentication.js";
// import express, { Request, Response } from "express";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";

const app = express();
app.use(json()); // Converts request bodies to json format.
app.use("/", authenticationRouter);

export default app;


// app.use(cors());
// app.use(bodyParser.json());

// interface ChatLog {
//   message: string;
//   response: string;
//   timestamp?: Date;
// }

// const chatLogSchema = new mongoose.Schema<ChatLog>({
//   message: String,
//   response: String,
//   timestamp: { type: Date, default: Date.now },
// });

// const ChatLogModel = mongoose.model<ChatLog>("ChatLog", chatLogSchema);

// // handle chat messages
// app.post("/api/chat", async (req: Request, res: Response) => {
//   const { message } = req.body;

//   const chatLog = new ChatLogModel({ message, response: "" });
//   await chatLog.save();

//   const botResponse = `Your message is stored in id: ${chatLog._id}`;

//   chatLog.response = botResponse;
//   await chatLog.save();

//   res.json(botResponse);
// });

// // fetch all chat logs
// app.get("/chat/all", async (req: Request, res: Response) => {
//   try {
//     const chatLogs = await ChatLogModel.find();
//     res.json(chatLogs);
//   } catch (error) {
//     console.error("UHHH PROBLEM:", error);
//     res.status(500).json({ error: "FAILED UHH" });
//   }
// });

