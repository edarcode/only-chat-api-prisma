import { Router } from "express";
import { createUserRouter } from "./create-user/createUserRouter";
import { deleteUserRouter } from "./delete-user/deleteUserRouter";
import { readUserRouter } from "./read-user/readUserRouter";
import { updateUserRouter } from "./update-user/updateUserRouter";

export const bossRouter = Router();

// bossRouter.use(verifyToken, verifyTokenRole(Role.BOSS)); todo
bossRouter.use("/create", createUserRouter);
bossRouter.use("/read", readUserRouter);
bossRouter.use("/update", updateUserRouter);
bossRouter.use("/delete", deleteUserRouter);
