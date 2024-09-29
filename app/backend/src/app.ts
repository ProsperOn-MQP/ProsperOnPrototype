import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

interface ChatLog {
  message: string;
  response: string;
  timestamp?: Date;
}

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
app.post("/api/chat", async (req: Request, res: Response) => {
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

// Handle Python chat interaction
app.post("/api/pychat", async (req: Request, res: Response) => {
  const { message } = req.body;

  try {
    const pythonResponse = await fetch("http://localhost:5001/api/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const responseData = await pythonResponse.json();

    const chatLog = new ChatLogModel({
      message,
      response: responseData.response,
    });
    await chatLog.save();

    res.json({ response: responseData.response });
  } catch (error) {
    console.error("Error while calling Python backend:", error);
    res
      .status(500)
      .json({ error: "Failed to communicate with Python backend." });
  }
});

export default app;
