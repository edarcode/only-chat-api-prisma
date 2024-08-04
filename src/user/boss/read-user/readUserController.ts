import { Controller } from "../../../types";
import { readUserService } from "./readUserService";

export const readUserController: Controller = async (_req, res, next) => {
  try {
    const users = await readUserService(res.locals.query);
    res.json(users);
  } catch (error) {
    next(error);
  }
};
