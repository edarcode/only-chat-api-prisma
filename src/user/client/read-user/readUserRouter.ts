import { Router } from "express";
import { verifyQuery } from "../../../middleware/verifyQuery";
import { readUserController } from "./readUserController";
import { readUserSchema } from "./readUserSchema";

export const readUserRouter = Router();

readUserRouter.get("", verifyQuery(readUserSchema), readUserController);
