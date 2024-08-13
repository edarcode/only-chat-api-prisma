import { connDb } from "../../../db/connDb";
import { Uuid } from "../../../types";

export const getAccountService = async (_id: Uuid) => {
  const user = await connDb.user.findUniqueOrThrow({
    where: { id: "99f9772b-6ac3-4bcf-aaf9-a2c711f0f8ac" },
    select: {
      id: true,
      name: true,
      username: true,
      img: true,
      createdAt: true,
      _count: {
        select: { followers: true, following: true },
      },
    },
  });
  return user;
};
