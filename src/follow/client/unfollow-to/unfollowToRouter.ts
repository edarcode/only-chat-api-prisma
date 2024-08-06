import { Router } from "express";
import { unfollowToController } from "./unfollowToController";
import { verifyToken } from "../../../middleware/verifyToken";
import { paramsWithIdSchema } from "../../../zod-schema/paramsWithIdSchema";
import { verifyParams } from "../../../middleware/verifyParams";

export const unfollowToRouter = Router();

unfollowToRouter.delete(
  "/:id",
  [verifyToken, verifyParams(paramsWithIdSchema)],
  unfollowToController
);
