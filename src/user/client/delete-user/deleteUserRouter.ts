import { Router } from "express";
import { deleteUserController } from "./deleteUserController";
import { verifyToken } from "../../../middleware/verifyToken";

export const deleteUserRouter = Router();

deleteUserRouter.delete("/", verifyToken, deleteUserController);
