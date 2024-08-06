import { Router } from "express";
import { clientRouter } from "./client/clientRouter";
import { bossRouter } from "./boss/bossRouter";

export const messageRouter = Router();

messageRouter.use("/boss", bossRouter);
messageRouter.use("/client", clientRouter);
