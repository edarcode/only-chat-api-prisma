import { connDb } from "../../../db/connDb";
import { Uuid } from "../../../types";

export const deleteUserService = async (id: Uuid) => {
  await connDb.user.delete({ where: { id } });
};
