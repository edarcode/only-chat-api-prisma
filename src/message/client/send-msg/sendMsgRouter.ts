import { Router } from "express";
import { sendMsgController } from "./sendMsgController";
import { verifyToken } from "../../../middleware/verifyToken";
import { verifyBody } from "../../../middleware/verifyBody";
import { sendMsgSchema } from "./sendMsgSchema";
import { verifyParams } from "../../../middleware/verifyParams";
import { paramsWithIdSchema } from "../../../zod-schema/paramsWithIdSchema";

export const sendMsgRouter = Router();

sendMsgRouter.post(
  "/:id",
  [verifyToken, verifyParams(paramsWithIdSchema), verifyBody(sendMsgSchema)],
  sendMsgController
);
