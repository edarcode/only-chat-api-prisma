import { Router } from "express";
import { sendMsgRouter } from "./send-msg/sendMsgRouter";
import { removeMsgRouter } from "./remove-msg/removeMsgRouter";
import { getChatRouter } from "./get-chat/getChatRouter";

export const clientRouter = Router();

clientRouter.use("/send-msg", sendMsgRouter);
clientRouter.use("/remove-msg", removeMsgRouter);
clientRouter.use("/get-chat", getChatRouter);
