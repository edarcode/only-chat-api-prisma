import { Prisma } from "@prisma/client";
import { connDb } from "../../../db/connDb";
import { z } from "zod";
import { readUserSchema } from "./readUserSchema";

export const readUserService = async (params: Params = {}) => {
  const { page = 1, take = 6, name, ...extraParams } = params;

  const where: Where = {
    ...extraParams,
    name: { contains: name, mode: "insensitive" },
  };

  const totalUsers = await connDb.user.count({ where });

  const users = await connDb.user.findMany({
    skip: (page - 1) * take,
    take,
    where,
    select: {
      id: true,
      username: true,
      img: true,
      createdAt: true,
      role: true,
      _count: { select: { followers: true, following: true } },
    },
  });

  const totalPages = Math.ceil(totalUsers / take) || 1;

  return { page, totalPages, users };
};

export type Params = z.infer<typeof readUserSchema>;
type Where = Prisma.UserWhereInput;
