// Creates a router for the authentication purposes
import { json, Router } from "express";
import validateLogin from "../controllers/validateLogin.js";

const authenticationRouter = Router();

authenticationRouter.use(json());

authenticationRouter.post("/login", validateLogin);

export default authenticationRouter;