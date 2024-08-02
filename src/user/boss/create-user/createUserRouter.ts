import { Router } from "express";
import { verifyBody } from "../../../middleware/verifyBody";
import { createUserController } from "./createUserController";
import { createUserSchema } from "./createUserSchema";

export const createUserRouter = Router();

createUserRouter.post("", verifyBody(createUserSchema), createUserController);
