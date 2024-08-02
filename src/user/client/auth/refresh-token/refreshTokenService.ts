import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT } from "../../../../constant/jwt";

export const refreshTokenService = (token: string) => {
  const infoToken = jwt.decode(token) as JwtPayload;

  const newInfoToken = { ...infoToken };
  if (newInfoToken.iat) delete newInfoToken.iat;
  if (newInfoToken.exp) delete newInfoToken.exp;

  const newToken = jwt.sign(newInfoToken, JWT.secret as string, {
    expiresIn: JWT.expiresIn,
  });

  return newToken;
};
