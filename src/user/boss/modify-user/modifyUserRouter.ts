import { Router } from "express";
import { verifyBody } from "../../../middleware/verifyBody";
import { verifyParams } from "../../../middleware/verifyParams";
import { paramsWithIdSchema } from "../../../zod-schema/paramsWithIdSchema";
import { modifyUserController } from "./modifyUserController";
import { modifyUserSchema } from "./modifyUserSchema";

export const modifyUserRouter = Router();

modifyUserRouter.put(
  "/:id",
  [verifyParams(paramsWithIdSchema), verifyBody(modifyUserSchema)],
  modifyUserController
);
