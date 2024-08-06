import { Controller } from "../../../types";
import { TokenInfo } from "../../../user/auth/login/loginService";
import { removeMsgService } from "./removeMsgService";

export const removeMsgController: Controller = async (_req, res, next) => {
  try {
    const tokenInfo = res.locals.tokenInfo as TokenInfo;
    const issuerId = tokenInfo.id;
    const { receptorId, createdAt } = res.locals.body;
    await removeMsgService(issuerId, receptorId, createdAt);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
