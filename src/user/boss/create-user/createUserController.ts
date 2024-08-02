import { Controller } from "../../../types";
import { createUserService } from "./createUserService";

export const createUserController: Controller = async (req, res, next) => {
  try {
    await createUserService(req.body);
    res.status(201).json({ msg: "Successfully created user" });
  } catch (error) {
    next(error);
  }
};
