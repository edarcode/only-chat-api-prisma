import { Controller, Uuid } from "../../../types";
import { TokenInfo } from "../../../user/auth/login/loginService";
import { followToService } from "./followToService";

export const followToController: Controller = async (req, res, next) => {
  try {
    const tokenInfo = res.locals.tokenInfo as TokenInfo;
    await followToService(tokenInfo.id, req.params.id as Uuid);
    res.status(201).json({ msg: "Follow successfully" });
  } catch (error) {
    next(error);
  }
};
