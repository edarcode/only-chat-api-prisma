import { Router } from "express";
import { deleteAccountController } from "./deleteAccountController";
import { verifyToken } from "../../../middleware/verifyToken";

export const deleteAccountRouter = Router();

deleteAccountRouter.delete("/", verifyToken, deleteAccountController);
