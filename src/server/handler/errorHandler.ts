import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { ZodError } from "zod";

import { EdarErr } from "../../error/EdarErr";
import { ErrorHandler } from "../../types";

export const errorHandler: ErrorHandler = (error, _req, res, _next) => {
  if (error instanceof PrismaClientKnownRequestError) {
    const { meta, code } = error;
    return res.status(400).json({ code, meta });
  }

  if (error instanceof ZodError) {
    const { issues } = error;
    return res.status(400).json(issues);
  }

  if (error instanceof EdarErr) {
    const { status, msg } = error;
    return res.status(status).json({ msg });
  }

  return res.status(500).json(error);
};
