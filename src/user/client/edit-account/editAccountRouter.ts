import { Router } from "express";
import { editAccountController } from "./editAccountController";
import { verifyToken } from "../../../middleware/verifyToken";
import { verifyBody } from "../../../middleware/verifyBody";
import { editAccountSchema } from "./editAccountSchema";

export const editAccountRouter = Router();

editAccountRouter.put(
  "/",
  [verifyToken, verifyBody(editAccountSchema)],
  editAccountController
);
