import { json, Router } from "express";
import generateResponse from "../controllers/generateResponse.js";

const chatbotRouter = Router();

chatbotRouter.use(json());

chatbotRouter.use("/api/chatbot/message", generateResponse);

export default chatbotRouter;
