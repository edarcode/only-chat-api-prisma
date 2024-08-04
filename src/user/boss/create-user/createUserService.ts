import { Role } from "@prisma/client";
import bcrypt from "bcrypt";
import { BCRYPT } from "../../../constant/bcrypt";
import { connDb } from "../../../db/connDb";

export const createUserService = async (params: Params) => {
  const passHashed = await bcrypt.hash(params.password, BCRYPT.salt);
  await connDb.user.create({
    data: { ...params, password: passHashed },
  });
};

type Params = {
  name: string;
  username: string;
  email: string;
  password: string;
  isAuth?: boolean;
  role?: Role;
};
