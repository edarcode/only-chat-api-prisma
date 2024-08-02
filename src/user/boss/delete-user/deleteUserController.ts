import { Controller, Uuid } from "../../../types";
import { deleteUserService } from "./deleteUserService";

export const deleteUserController: Controller = async (req, res, next) => {
  try {
    await deleteUserService(req.params.id as Uuid);
    res.status(204).json({ msg: "Successfully deleted user" });
  } catch (error) {
    next(error);
  }
};
