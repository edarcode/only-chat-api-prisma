import { Router } from "express";
import { followToRouter } from "./follow-to/followToRouter";
import { unfollowToRouter } from "./unfollow-to/unfollowToRouter";

export const clientRouter = Router();

clientRouter.use("/follow-to", followToRouter);
clientRouter.use("/unfollow-to", unfollowToRouter);
