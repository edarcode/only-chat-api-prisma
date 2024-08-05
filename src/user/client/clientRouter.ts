import { Router } from "express";
import { authRouter } from "./auth/authRouter";
import { updateUserRouter } from "./update-user/updateUserRouter";
import { readUserRouter } from "./read-user/readUserRouter";
import { deleteUserRouter } from "./delete-user/deleteUserRouter";

export const clientRouter = Router();

clientRouter.use("/auth", authRouter);
clientRouter.use("/read", readUserRouter);
clientRouter.use("/update", updateUserRouter);
clientRouter.use("/delete", deleteUserRouter);
