import { Router } from "express";
import { clientRouter } from "./client/clientRouter";

export const messageRouter = Router();

messageRouter.use("/client", clientRouter);
