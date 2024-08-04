import { Router } from "express";
import { createUserRouter } from "./create-user/createUserRouter";
import { deleteUserRouter } from "./delete-user/deleteUserRouter";
import { readUsersRouter } from "./read-users/readUsersRouter";
import { updateUserRouter } from "./update-user/updateUserRouter";

export const bossRouter = Router();

bossRouter.use("/create", createUserRouter);
bossRouter.use("/read", readUsersRouter);
bossRouter.use("/update", updateUserRouter);
bossRouter.use("/delete", deleteUserRouter);
