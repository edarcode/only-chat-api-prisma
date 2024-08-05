import { Router } from "express";
import { bossRouter } from "./boss/bossRouter";
import { clientRouter } from "./client/clientRouter";
import { authRouter } from "./auth/authRouter";

export const userRouter = Router();

userRouter.use("/boss", bossRouter);
userRouter.use("/client", clientRouter);
userRouter.use("/auth", authRouter);
