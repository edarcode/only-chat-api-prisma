import jwt from "jsonwebtoken";
import { JWT } from "../constant/jwt";
import { EdarErr } from "../error/EdarErr";
import { Middleware } from "../types";

export const verifyTokenByParams: Middleware = (req, res, next) => {
  try {
    const token = req.params.token;
    if (!token) throw new EdarErr(401, "Unauthorized");

    jwt.verify(token, JWT.secret as string, (err, tokenInfo) => {
      if (err) throw new EdarErr(403, "Unauthorized token");
      res.locals = { ...res.locals, tokenInfo };
      next();
    });
  } catch (error) {
    next(error);
  }
};
