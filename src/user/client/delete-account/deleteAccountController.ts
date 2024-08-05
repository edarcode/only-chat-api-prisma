import { Controller } from "../../../types";
import { TokenInfo } from "../../auth/login/loginService";
import { deleteAccountService } from "./deleteAccountService";

export const deleteAccountController: Controller = async (_req, res, next) => {
  try {
    const tokenInfo = res.locals.tokenInfo as TokenInfo;
    await deleteAccountService(tokenInfo.id);
    res.status(204).json({ msg: "Successfully deleted user" });
  } catch (error) {
    next(error);
  }
};
