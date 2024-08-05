import { Controller } from "../../../types";
import { TokenInfo } from "../auth/login/loginService";
import { deleteUserService } from "./deleteUserService";

export const deleteUserController: Controller = async (_req, res, next) => {
  try {
    const tokenInfo = res.locals.tokenInfo as TokenInfo;
    await deleteUserService(tokenInfo.id);
    res.status(204).json({ msg: "Successfully deleted user" });
  } catch (error) {
    next(error);
  }
};
