import { Router } from "express";
import { authRouter } from "./auth/authRouter";
import { updateUserRouter } from "./update-user/updateUserRouter";

export const clientRouter = Router();

clientRouter.use("/auth", authRouter);
clientRouter.use("/update", updateUserRouter);
