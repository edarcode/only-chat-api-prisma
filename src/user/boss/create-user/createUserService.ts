import bcrypt from "bcrypt";
import { BCRYPT } from "../../../constant/bcrypt";
import { connDb } from "../../../db/connDb";
import { z } from "zod";
import { createUserSchema } from "./createUserSchema";

export const createUserService = async (params: Params) => {
  const passHashed = await bcrypt.hash(params.password, BCRYPT.salt);
  await connDb.user.create({
    data: { ...params, password: passHashed },
  });
};

type Params = z.infer<typeof createUserSchema>;
