import { Controller } from "../../../types";
import { getUsersService } from "./getUsersService";

export const getUsersController: Controller = async (_req, res, next) => {
  try {
    const users = await getUsersService(res.locals.query);
    res.json(users);
  } catch (error) {
    next(error);
  }
};
