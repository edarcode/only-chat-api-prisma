import { Controller } from "../../../../types";
import { signupService } from "./signupService";

export const signupController: Controller = async (req, res, next) => {
  try {
    await signupService(req.body);
    res
      .status(201)
      .json({ msg: "We have sent an email with a confirmation link" });
  } catch (error) {
    next(error);
  }
};
