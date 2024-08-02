import { ZodSchema } from "zod";
import { Middleware } from "../types";

export const verifyBody = (schema: ZodSchema): Middleware => {
  return (req, _res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      next(error);
    }
  };
};
