import { Router } from "express";
import { updateUserRouter } from "./update-user/updateUserRouter";
import { readUserRouter } from "./read-user/readUserRouter";
import { deleteAccountRouter } from "./delete-account/deleteAccountRouter";

export const clientRouter = Router();

clientRouter.use("/read", readUserRouter);
clientRouter.use("/update", updateUserRouter);
clientRouter.use("/delete", deleteAccountRouter);
