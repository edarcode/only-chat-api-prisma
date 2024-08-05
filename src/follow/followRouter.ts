import { Router } from "express";
import { bossRouter } from "./boss/bossRouter";
import { clientRouter } from "./client/clientRouter";

export const followRouter = Router();

followRouter.use("/boss", bossRouter);
followRouter.use("/client", clientRouter);
