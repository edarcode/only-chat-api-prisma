import { Controller, Uuid } from "../../../types";
import { modifyUserService } from "./modifyUserService";

export const modifyUserController: Controller = async (req, res, next) => {
  try {
    const id = req.params.id as Uuid;
    await modifyUserService(id, req.body);
    res.status(201).json({ msg: "Successfully modified user" });
  } catch (error) {
    next(error);
  }
};
