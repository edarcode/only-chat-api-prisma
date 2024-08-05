import { Router } from "express";
import { loginController } from "./loginController";
import { loginSchema } from "./loginSchema";
import { verifyBody } from "../../../middleware/verifyBody";

export const loginRouter = Router();

loginRouter.post("", verifyBody(loginSchema), loginController);
