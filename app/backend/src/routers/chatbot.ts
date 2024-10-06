import { json, Router } from "express";
import fetchMessages from "../controllers/fetchMessages.js";
import generateResponse from "../controllers/generateResponse.js";


const chatbotRouter = Router();

chatbotRouter.use(json());

chatbotRouter.use("/api/chatbot/message", generateResponse);
chatbotRouter.use("/api/chatbot/fetchMessages", fetchMessages);

export default chatbotRouter;
