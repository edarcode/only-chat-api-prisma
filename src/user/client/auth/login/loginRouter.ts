import { Router } from "express";
import { verifyBody } from "../../../../middleware/verifyBody";
import { loginController } from "./loginController";
import { loginSchema } from "./loginSchema";

export const loginRouter = Router();

loginRouter.post("", verifyBody(loginSchema), loginController);
