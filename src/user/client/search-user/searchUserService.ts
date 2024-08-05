import { Prisma } from "@prisma/client";
import { connDb } from "../../../db/connDb";
import { z } from "zod";
import { searchUserSchema } from "./searchUserSchema";

export const searchUserService = async (params: Params) => {
  const { page = 1, take = 6, username } = params;

  const where: Where = { username: { contains: username } };

  const totalUsers = await connDb.user.count({ where });

  const users = await connDb.user.findMany({
    skip: (page - 1) * take,
    take,
    where,
    select: {
      id: true,
      username: true,
      img: true,
    },
  });

  const totalPages = Math.ceil(totalUsers / take) || 1;

  return { page, totalPages, users };
};

export type Params = z.infer<typeof searchUserSchema>;
type Where = Prisma.UserWhereInput;
