import { Controller, Uuid } from "../../../types";
import { TokenInfo } from "../../../user/auth/login/loginService";
import { sendMsgService } from "./sendMsgService";

export const sendMsgController: Controller = async (req, res, next) => {
  try {
    const tokenInfo = res.locals.tokenInfo as TokenInfo;
    const issuerId = tokenInfo.id;
    const receptorId = req.params.id as Uuid;
    await sendMsgService(issuerId, receptorId, req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};
