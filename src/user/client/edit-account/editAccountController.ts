import { Controller } from "../../../types";
import { TokenInfo } from "../../auth/login/loginService";
import { editAccountService } from "./editAccountService";

export const editAccountController: Controller = async (req, res, next) => {
  try {
    const tokenInfo = res.locals.tokenInfo as TokenInfo;
    await editAccountService(tokenInfo.id, req.body);
    res.status(201).json({ msg: "Successfully modified user" });
  } catch (error) {
    next(error);
  }
};
