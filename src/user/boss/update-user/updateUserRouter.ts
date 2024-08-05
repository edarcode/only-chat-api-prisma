import { Router } from "express";
import { verifyBody } from "../../../middleware/verifyBody";
import { updateUserController } from "./updateUserController";
import { updateUserSchema } from "./updateUserSchema";

export const updateUserRouter = Router();

updateUserRouter.put(
  "/:id",
  verifyBody(updateUserSchema),
  updateUserController
);
