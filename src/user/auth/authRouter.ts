import { Router } from "express";
import { loginRouter } from "./login/loginRouter";
import { signupRouter } from "./signup/signupRouter";
import { verifySignupRouter } from "./verify-signup/verifySignupRouter";
import { refreshTokenRouter } from "./refresh-token/refreshTokenRouter";

export const authRouter = Router();

authRouter.use("/signup", signupRouter);
authRouter.use("/verify-signup", verifySignupRouter);
authRouter.use("/login", loginRouter);
authRouter.use("/refresh-token", refreshTokenRouter);
