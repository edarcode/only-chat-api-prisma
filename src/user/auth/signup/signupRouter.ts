import { Router } from "express";
import { signupController } from "./signupController";
import { signupSchema } from "./signupSchema";
import { verifyBody } from "../../../middleware/verifyBody";

export const signupRouter = Router();

signupRouter.post("", verifyBody(signupSchema), signupController);
