import { Controller } from "../../../types";
import { searchUserService } from "./searchUserService";

export const searchUserController: Controller = async (_req, res, next) => {
  try {
    const users = await searchUserService(res.locals.query);
    res.json(users);
  } catch (error) {
    next(error);
  }
};
