import { Router } from "express";
import { followToController } from "./followToController";
import { verifyParams } from "../../../middleware/verifyParams";
import { paramsWithIdSchema } from "../../../zod-schema/paramsWithIdSchema";
import { verifyToken } from "../../../middleware/verifyToken";

export const followToRouter = Router();

followToRouter.post(
  "/:id",
  [verifyToken, verifyParams(paramsWithIdSchema)],
  followToController
);
