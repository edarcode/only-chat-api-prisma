import { z } from "zod";
import { updateUserSchema } from "./updateUserSchema";
import { Uuid } from "../../../types";
import { updateUserService as updateUserServic } from "../../boss/update-user/updateUserService";

export const updateUserService = async (id: Uuid, params: Params) => {
  await updateUserServic(id, params);
};

type Params = z.infer<typeof updateUserSchema>;
