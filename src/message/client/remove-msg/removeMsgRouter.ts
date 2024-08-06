import { Router } from "express";
import { removeMsgController } from "./removeMsgController";
import { verifyToken } from "../../../middleware/verifyToken";
import { verifyBody } from "../../../middleware/verifyBody";
import { removeMsgSchema } from "./removeMsgSchema";

export const removeMsgRouter = Router();

removeMsgRouter.delete(
  "/",
  verifyToken,
  verifyBody(removeMsgSchema),
  removeMsgController
);
