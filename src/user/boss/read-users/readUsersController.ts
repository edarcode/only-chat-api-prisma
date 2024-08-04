import { Controller } from "../../../types";
import { readUsersService } from "./readUsersService";

export const readUsersController: Controller = async (_req, res, next) => {
  try {
    const users = await readUsersService(res.locals.query);
    res.json(users);
  } catch (error) {
    next(error);
  }
};
