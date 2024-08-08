import { Router } from "express";
import { createUserRouter } from "./create-user/createUserRouter";
import { deleteUserRouter } from "./delete-user/deleteUserRouter";
import { readUserRouter } from "./read-user/readUserRouter";
import { updateUserRouter } from "./update-user/updateUserRouter";
import { verifyToken } from "../../middleware/verifyToken";
import { verifyTokenRole } from "../../middleware/verifyTokenRole";
import { readUserByIdRouter } from "./read-user-by-id/readUserByIdRouter";
import { ROLE } from "../../constant/role";

export const bossRouter = Router();

bossRouter.use(verifyToken, verifyTokenRole(ROLE.boss));

bossRouter.use("/create", createUserRouter);
bossRouter.use("/read", readUserRouter);
bossRouter.use("/update", updateUserRouter);
bossRouter.use("/delete", deleteUserRouter);
bossRouter.use("/read", readUserByIdRouter);
