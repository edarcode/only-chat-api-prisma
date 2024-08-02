import { Role } from "@prisma/client";
import bcrypt from "bcrypt";
import { BCRYPT } from "../../../constant/bcrypt";
import { connDb } from "../../../db/connDb";
import { Uuid } from "../../../types";

export const modifyUserService = async (id: Uuid, params: Params) => {
  const { name, email, password, isAuth, role } = params;
  const paramsToUpdateUser = { name, email, password, isAuth, role };

  if (password) {
    const passHashed = await bcrypt.hash(password, BCRYPT.salt);
    paramsToUpdateUser.password = passHashed;
  }

  await connDb.user.update({
    where: { id },
    data: paramsToUpdateUser,
  });
};

type Params = {
  name?: string;
  email?: string;
  password?: string;
  isAuth?: boolean;
  role?: Role;
};
