import { Controller, Uuid } from "../../../types";
import { readUserByIdService } from "./readUserByIdService";

export const readUserByIdController: Controller = async (req, res, next) => {
  try {
    const id = req.params.id as Uuid;
    const user = await readUserByIdService(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};
