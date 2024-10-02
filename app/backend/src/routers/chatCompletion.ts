import { json, Router } from "express";

const chatCompletionRouter = Router();

chatCompletionRouter.use(json());

export default chatCompletionRouter;
