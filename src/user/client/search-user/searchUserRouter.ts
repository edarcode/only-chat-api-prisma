import { Router } from "express";
import { verifyQuery } from "../../../middleware/verifyQuery";
import { searchUserController } from "./searchUserController";
import { searchUserSchema } from "./searchUserSchema";

export const searchUserRouter = Router();

searchUserRouter.get("", verifyQuery(searchUserSchema), searchUserController);
