import { Router } from "express";
import { bossRouter } from "./boss/bossRouter";
import { clientRouter } from "./client/clientRouter";

export const userRouter = Router();

userRouter.use("/boss", bossRouter);
userRouter.use("/client", clientRouter);
