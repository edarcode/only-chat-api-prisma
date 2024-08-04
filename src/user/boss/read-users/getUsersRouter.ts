import { Router } from "express";
import { verifyQuery } from "../../../middleware/verifyQuery";
import { getUsersController } from "./getUsersController";
import { getUsersSchema } from "./getUsersSchema";

export const getUsersRouter = Router();

getUsersRouter.get("", verifyQuery(getUsersSchema), getUsersController);
