import { Router } from "express";
import { createUserRouter } from "./create-user/createUserRouter";
import { deleteUserRouter } from "./delete-user/deleteUserRouter";
import { getUsersRouter } from "./read-users/getUsersRouter";
import { modifyUserRouter } from "./update-user/modifyUserRouter";

export const bossRouter = Router();

bossRouter.use("/create", createUserRouter);
bossRouter.use("/read", getUsersRouter);
bossRouter.use("/update", modifyUserRouter);
bossRouter.use("/delete", deleteUserRouter);
