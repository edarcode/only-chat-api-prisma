import { Router } from "express";
import { updateUserController } from "./updateUserController";
import { verifyToken } from "../../../middleware/verifyToken";
import { verifyBody } from "../../../middleware/verifyBody";
import { updateUserSchema } from "./updateUserSchema";

export const updateUserRouter = Router();

updateUserRouter.put(
  "/",
  [verifyToken, verifyBody(updateUserSchema)],
  updateUserController
);
