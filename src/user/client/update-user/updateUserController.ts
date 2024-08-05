import { Controller } from "../../../types";
import { TokenInfo } from "../auth/login/loginService";
import { updateUserService } from "./updateUserService";

export const updateUserController: Controller = async (req, res, next) => {
  try {
    const tokenInfo = res.locals.tokenInfo as TokenInfo;
    await updateUserService(tokenInfo.id, req.body);
    res.status(201).json({ msg: "Successfully modified user" });
  } catch (error) {
    next(error);
  }
};
