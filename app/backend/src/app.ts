// Creates an router for the overall application
import cors from "cors";
import express, { Request, Response, json } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authenticationRouter from "./routers/authentication.js";
import chatbotRouter from "./routers/chatbot.js";

// Configures environmental file to be used globally
dotenv.config();

const app = express();
app.use(json()); // Converts request bodies to json format.
app.use(cors()); // Allows a program to make requests to different URIs.
app.use(bodyParser.json());

app.use("/", authenticationRouter);
app.use("/", chatbotRouter);


interface ChatLog {
  message: string;
  response: string;
  timestamp?: Date;
}
/* 
app.get("/", (req: Request, res: Response) => {
  res.json("Connected to app!");
});
 */
const chatLogSchema = new mongoose.Schema<ChatLog>({
  message: String,
  response: String,
  timestamp: { type: Date, default: Date.now },
});

const ChatLogModel = mongoose.model<ChatLog>("ChatLog", chatLogSchema);

interface InteractionObject {
  type: string;
  action: string;
  data: string;
}

const interactionObjectSchema = new mongoose.Schema<InteractionObject>({
  type: { type: String, required: true },
  action: { type: String, required: true },
  data: { type: String, required: true },
});

interface PageContext {
  userId: string;
  interactions: InteractionObject[];
  timestamp?: Date;
}

const pageContextSchema = new mongoose.Schema<PageContext>({
  userId: { type: String, required: true },
  interactions: { type: [interactionObjectSchema], required: true },
  timestamp: { type: Date, default: Date.now },
});

const PageContextModel = mongoose.model<PageContext>(
  "PageContext",
  pageContextSchema
);

// Handle chat messages
app.post("/chat", async (req: Request, res: Response) => {
  const { message } = req.body;

  const chatLog = new ChatLogModel({ message, response: "" });
  await chatLog.save();

  const botResponse = `Your message is stored in id: ${chatLog._id}`;

  chatLog.response = botResponse;
  await chatLog.save();

  res.json(botResponse);
});

// Handle page context with user ID
app.post("/api/pageContext", async (req: Request, res: Response) => {
  const { userId, interactions } = req.body;

  if (!userId || !interactions) {
    return res
      .status(400)
      .json({ error: "User ID and interactions are required." });
  }

  try {
    const pageContext = new PageContextModel({ userId, interactions });
    await pageContext.save();

    res.status(201).json({ message: "Page context saved successfully." });
  } catch (error) {
    console.error("Error saving page context:", error);
    res.status(500).json({ error: "Failed to save page context." });
  }
});

// Fetch all chat logs
app.get("/chat/all", async (req: Request, res: Response) => {
  try {
    const chatLogs = await ChatLogModel.find();
    res.json(chatLogs);
  } catch (error) {
    console.error("Error fetching chat logs:", error);
    res.status(500).json({ error: "Failed to fetch chat logs." });
  }
});

// Get request for "Hello"
app.get("/hello", (req, res) => {
  return res.send("Hello");
});


export default app;


