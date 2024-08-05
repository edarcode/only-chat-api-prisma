import { z } from "zod";
import { Uuid } from "../../../types";
import { updateUserService as updateUserServic } from "../../boss/update-user/updateUserService";
import { editAccountSchema } from "./editAccountSchema";

export const editAccountService = async (id: Uuid, params: Params) => {
  await updateUserServic(id, params);
};

type Params = z.infer<typeof editAccountSchema>;
