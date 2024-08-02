import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connDb } from "../../../../db/connDb";
import { JWT } from "../../../../constant/jwt";
import { EdarErr } from "../../../../error/EdarErr";

export const loginService = async (params: Params) => {
  const { email } = params;

  const user = await connDb.user.findUnique({ where: { email } });
  if (!user) throw new EdarErr(401, "Invalid login");

  const isLogged = await bcrypt.compare(params.password, user.password);
  if (!isLogged) throw new EdarErr(401, "Invalid login");

  const token = jwt.sign(
    { id: user.id, role: user.role, name: user.name, email: user.email },
    JWT.secret as string,
    {
      expiresIn: JWT.expiresIn,
    }
  );

  return token;
};

type Params = {
  email: string;
  password: string;
};
