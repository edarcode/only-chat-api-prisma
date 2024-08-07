import { Router } from "express";
import { getChatController } from "./getChatController";
import { verifyToken } from "../../../middleware/verifyToken";
import { verifyParams } from "../../../middleware/verifyParams";
import { paramsWithIdSchema } from "../../../zod-schema/paramsWithIdSchema";

export const getChatRouter = Router();

getChatRouter.get(
  "/:id",
  [verifyToken, verifyParams(paramsWithIdSchema)],
  getChatController
);
