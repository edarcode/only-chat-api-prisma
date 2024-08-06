import { z } from "zod";
import { Controller, Uuid } from "../../../types";
import { TokenInfo } from "../../../user/auth/login/loginService";
import { removeMsgService } from "./removeMsgService";
import { removeMsgSchema } from "./removeMsgSchema";

export const removeMsgController: Controller = async (_req, res, next) => {
  try {
    const tokenInfo = res.locals.tokenInfo as TokenInfo;
    const issuerId = tokenInfo.id;
    const { receptorId, createdAt } = res.locals.body as Body;
    await removeMsgService(issuerId, receptorId as Uuid, createdAt);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

type Body = z.infer<typeof removeMsgSchema>;
