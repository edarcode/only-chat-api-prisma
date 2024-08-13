import { Router } from "express";
import { verifyQuery } from "../../../middleware/verifyQuery";
import { searchUserController } from "./searchUserController";
import { searchUserSchema } from "./searchUserSchema";
import { verifyToken } from "../../../middleware/verifyToken";

export const searchUserRouter = Router();

searchUserRouter.get(
  "",
  [verifyToken, verifyQuery(searchUserSchema)],
  searchUserController
);
