import { Router } from "express";
import { verifyParams } from "../../../middleware/verifyParams";
import { paramsWithIdSchema } from "../../../zod-schema/paramsWithIdSchema";
import { deleteUserController } from "./deleteUserController";

export const deleteUserRouter = Router();

deleteUserRouter.delete(
  "/:id",
  verifyParams(paramsWithIdSchema),
  deleteUserController
);
