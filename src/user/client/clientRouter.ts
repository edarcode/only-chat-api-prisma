import { Router } from "express";
import { authRouter } from "./auth/authRouter";

export const clientRouter = Router();

clientRouter.use("/auth", authRouter);
