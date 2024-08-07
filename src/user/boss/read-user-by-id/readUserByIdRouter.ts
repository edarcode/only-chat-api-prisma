import { Router } from "express";
import { readUserByIdController } from "./readUserByIdController";
import { verifyParams } from "../../../middleware/verifyParams";
import { paramsWithIdSchema } from "../../../zod-schema/paramsWithIdSchema";

export const readUserByIdRouter = Router();

readUserByIdRouter.get(
  "/:id",
  verifyParams(paramsWithIdSchema),
  readUserByIdController
);
