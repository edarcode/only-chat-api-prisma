import jwt from "jsonwebtoken";
import { JWT } from "../../../../constant/jwt";
import { connDb } from "../../../../db/connDb";
import { EdarErr } from "../../../../error/EdarErr";
import { sendMailToVerifySignupService } from "./sendMailToVerifySignupService";

export const signupService = async (params: Params) => {
  const user = await connDb.user.findUnique({ where: { email: params.email } });
  if (user) throw new EdarErr(400, "Email no disponible");

  const token = jwt.sign(params, JWT.secret as string, {
    expiresIn: JWT.expiresIn,
  });

  const link = `${process.env.API_URL}/user/verify-register/${token}`;
  await sendMailToVerifySignupService(params.email, link);
};

type Params = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export type ParamsToRegisterUser = Params;
