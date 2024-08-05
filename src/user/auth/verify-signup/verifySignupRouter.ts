import { Router } from "express";
import { verifyTokenByParams } from "../../../middleware/verifyTokenByParams";
import { verifySignupController } from "./verifySignupController";

export const verifySignupRouter = Router();

verifySignupRouter.get("/:token", verifyTokenByParams, verifySignupController);
