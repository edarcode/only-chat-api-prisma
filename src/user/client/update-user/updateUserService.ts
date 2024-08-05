import { z } from "zod";
import { updateUserSchema } from "./updateUserSchema";
import { connDb } from "../../../db/connDb";
import { Uuid } from "../../../types";

export const updateUserService = async (id: Uuid, params: Params) => {
  await connDb.user.update({
    where: { id },
    data: { ...params },
  });
  return params;
};

type Params = z.infer<typeof updateUserSchema>;
