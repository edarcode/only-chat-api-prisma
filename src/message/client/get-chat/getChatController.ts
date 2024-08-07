import { Controller, Uuid } from "../../../types";
import { TokenInfo } from "../../../user/auth/login/loginService";
import { getChatService } from "./getChatService";

export const getChatController: Controller = async (req, res, next) => {
  try {
    const tokenInfo = res.locals.tokenInfo as TokenInfo;
    const issuerId = tokenInfo.id;
    const receptorId = req.params.id as Uuid;
    const chat = await getChatService(issuerId, receptorId);
    res.json(chat);
  } catch (error) {
    next(error);
  }
};
