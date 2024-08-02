import { Role } from "@prisma/client";
import bcrypt from "bcrypt";
import { BCRYPT } from "../../../constant/bcrypt";
import { connDb } from "../../../db/connDb";

export const createUserService = async (params: Params) => {
  const { email, name, password, isAuth, role } = params;
  const passHashed = await bcrypt.hash(password, BCRYPT.salt);
  await connDb.user.create({
    data: { email, name, isAuth, role, password: passHashed },
  });
};

type Params = {
  name: string;
  email: string;
  password: string;
  isAuth?: boolean;
  role?: Role;
};
