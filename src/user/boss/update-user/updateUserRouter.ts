import { Router } from "express";
import { verifyBody } from "../../../middleware/verifyBody";
import { verifyParams } from "../../../middleware/verifyParams";
import { paramsWithIdSchema } from "../../../zod-schema/paramsWithIdSchema";
import { updateUserController } from "./updateUserController";
import { updateUserSchema } from "./updateUserSchema";

export const updateUserRouter = Router();

updateUserRouter.put(
  "/:id",
  [verifyParams(paramsWithIdSchema), verifyBody(updateUserSchema)],
  updateUserController
);
