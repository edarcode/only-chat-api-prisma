import { connDb } from "../../../db/connDb";
import { Uuid } from "../../../types";

export const readUserByIdService = async (id: Uuid) => {
  const user = await connDb.user.findUnique({
    where: { id },
    include: { _count: { select: { followers: true, following: true } } },
  });
  return user;
};
