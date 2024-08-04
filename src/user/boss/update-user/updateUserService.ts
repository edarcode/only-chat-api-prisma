import bcrypt from "bcrypt";
import { BCRYPT } from "../../../constant/bcrypt";
import { connDb } from "../../../db/connDb";
import { Uuid } from "../../../types";
import { z } from "zod";
import { updateUserSchema } from "./updateUserSchema";

export const updateUserService = async (id: Uuid, params: Params) => {
  const paramsToUpdateUser = { ...params };

  if (params.password) {
    const passHashed = await bcrypt.hash(params.password, BCRYPT.salt);
    paramsToUpdateUser.password = passHashed;
  }

  await connDb.user.update({
    where: { id },
    data: paramsToUpdateUser,
  });
};

type Params = z.infer<typeof updateUserSchema>;
