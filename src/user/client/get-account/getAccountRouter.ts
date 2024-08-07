import { Router } from "express";
import { getAccountController } from "./getAccountController";
import { verifyToken } from "../../../middleware/verifyToken";

export const getAccountRouter = Router();

getAccountRouter.get("/", verifyToken, getAccountController);
