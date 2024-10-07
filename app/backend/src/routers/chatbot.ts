import { json, Router } from "express";
import fetchMessages from "../controllers/fetchMessages.js";
import generateResponse from "../controllers/generateResponse.js";
import searchMessages from "../controllers/searchMessages.js";

const chatbotRouter = Router();

chatbotRouter.use(json());

chatbotRouter.use("/api/chatbot/message", generateResponse);
chatbotRouter.use("/api/chatbot/fetchMessages", fetchMessages);
chatbotRouter.use("/api/chatbot/searchMessages", searchMessages);

export default chatbotRouter;
