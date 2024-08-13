import { Controller } from "../../../types";
import { TokenInfo } from "../../auth/login/loginService";
import { searchUserService } from "./searchUserService";

export const searchUserController: Controller = async (_req, res, next) => {
  try {
    const query = res.locals.query as { username: string };
    const tokenInfo = res.locals.tokenInfo as TokenInfo;
    const users = await searchUserService(tokenInfo.id, query);
    res.json(users);
  } catch (error) {
    next(error);
  }
};
