import { Router } from "express";
import { followToRouter } from "./follow-to/followToRouter";

export const clientRouter = Router();

clientRouter.use("/follow-to", followToRouter);
