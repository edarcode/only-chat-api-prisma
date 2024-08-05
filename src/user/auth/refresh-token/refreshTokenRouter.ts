import { Router } from "express";
import { refreshTokenController } from "./refreshTokenController";
import { verifyToken } from "../../../middleware/verifyToken";

export const refreshTokenRouter = Router();

refreshTokenRouter.post("", verifyToken, refreshTokenController);
