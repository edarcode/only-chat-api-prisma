import { Router } from "express";
import { sendMsgRouter } from "./send-msg/sendMsgRouter";
import { unfollowToRouter } from "./remove-msg/unfollowToRouter";

export const clientRouter = Router();

clientRouter.use("/send-msg", sendMsgRouter);
clientRouter.use("/remove-msg", unfollowToRouter);
