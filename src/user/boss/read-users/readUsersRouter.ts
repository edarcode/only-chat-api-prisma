import { Router } from "express";
import { verifyQuery } from "../../../middleware/verifyQuery";
import { readUsersController } from "./readUsersController";
import { readUsersSchema } from "./readUsersSchema";

export const readUsersRouter = Router();

readUsersRouter.get("", verifyQuery(readUsersSchema), readUsersController);
