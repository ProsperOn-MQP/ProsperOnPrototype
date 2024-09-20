import express, { Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/chatbot")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

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

app.post("/api/chat", async (req: Request, res: Response) => {
  const { message } = req.body;

  const chatLog = new ChatLogModel({ message, response: "" });
  await chatLog.save();

  const botResponse = `Your message is stored in id: ${chatLog._id}`;

  chatLog.response = botResponse;
  await chatLog.save();

  res.json(botResponse);
});

app.get("/chat/all", async (req: Request, res: Response) => {
  try {
    const chatLogs = await ChatLogModel.find();
    res.json(chatLogs);
  } catch (error) {
    console.error("UHHH PROBLEM:", error);
    res.status(500).json({ error: "FAILED UHH" });
  }
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
