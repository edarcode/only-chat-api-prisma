import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connDb } from "../../../../db/connDb";
import { JWT } from "../../../../constant/jwt";
import { EdarErr } from "../../../../error/EdarErr";
import { z } from "zod";
import { loginSchema } from "./loginSchema";
import { Uuid } from "../../../../types";
import { Role } from "@prisma/client";

export const loginService = async (params: Params) => {
  const { email, password } = params;

  const user = await connDb.user.findUnique({ where: { email } });
  if (!user) throw new EdarErr(401, "Invalid login");

  const isLogged = await bcrypt.compare(password, user.password);
  if (!isLogged) throw new EdarErr(401, "Invalid login");

  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
      username: user.username,
      img: user.img,
    },
    JWT.secret as string,
    {
      expiresIn: JWT.expiresIn,
    }
  );

  return token;
};

type Params = z.infer<typeof loginSchema>;
export type TokenInfo = { id: Uuid; role: Role; username: string; img: string };
