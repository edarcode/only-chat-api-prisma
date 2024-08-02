import { Router } from "express";
import { verifyBody } from "../../../../middleware/verifyBody";
import { signupController } from "./signupController";
import { signupSchema } from "./signupSchema";

export const signupRouter = Router();

signupRouter.post("", verifyBody(signupSchema), signupController);
