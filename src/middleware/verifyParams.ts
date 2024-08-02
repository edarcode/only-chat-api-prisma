import { ZodSchema } from "zod";
import { Middleware } from "../types";

export const verifyParams = (schema: ZodSchema): Middleware => {
  return (req, _res, next) => {
    try {
      schema.parse(req.params);
      next();
    } catch (error) {
      next(error);
    }
  };
};
