import { Router } from "express";
import { authRouter } from "./auth/authRouter";
import { updateUserRouter } from "./update-user/updateUserRouter";
import { readUserRouter } from "./read-user/readUserRouter";
import { deleteAccountRouter } from "./delete-account/deleteAccountRouter";

export const clientRouter = Router();

clientRouter.use("/auth", authRouter);
clientRouter.use("/read", readUserRouter);
clientRouter.use("/update", updateUserRouter);
clientRouter.use("/delete", deleteAccountRouter);
