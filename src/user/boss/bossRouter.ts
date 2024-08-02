import { Role } from "@prisma/client";
import { Router } from "express";
import { verifyToken } from "../../middleware/verifyToken";
import { verifyTokenRole } from "../../middleware/verifyTokenRole";
import { createUserRouter } from "./create-user/createUserRouter";
import { deleteUserRouter } from "./delete-user/deleteUserRouter";
import { getUsersRouter } from "./get-users/getUsersRouter";
import { modifyUserRouter } from "./modify-user/modifyUserRouter";

export const bossRouter = Router();

bossRouter.use(verifyToken, verifyTokenRole(Role.BOSS));

bossRouter.use("/get", getUsersRouter);
bossRouter.use("/create", createUserRouter);
bossRouter.use("/delete", deleteUserRouter);
bossRouter.use("/modify", modifyUserRouter);
