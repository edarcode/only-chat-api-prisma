import { Controller, Uuid } from "../../../types";
import { TokenInfo } from "../../../user/auth/login/loginService";
import { unfollowToService } from "./unfollowToService";

export const unfollowToController: Controller = async (req, res, next) => {
  try {
    const tokenInfo = res.locals.tokenInfo as TokenInfo;
    await unfollowToService(tokenInfo.id, req.params.id as Uuid);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
