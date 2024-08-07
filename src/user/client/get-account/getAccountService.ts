import { connDb } from "../../../db/connDb";
import { Uuid } from "../../../types";

export const getAccountService = async (id: Uuid) => {
  const user = await connDb.user.findUniqueOrThrow({
    where: { id },
    select: {
      id: true,
      name: true,
      username: true,
      email: true,
      img: true,
      createdAt: true,
      following: { select: { followingId: true } },
    },
  });
  return user;
};
