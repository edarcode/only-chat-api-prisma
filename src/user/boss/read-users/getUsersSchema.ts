import z from "zod";
import { nameSchema } from "../../../zod-schema/nameSchema";
import { pageSchema } from "../../../zod-schema/pageSchema";
import { takeSchema } from "../../../zod-schema/takeSchema";

export const getUsersSchema = z
  .object({
    page: pageSchema,
    take: takeSchema,
    name: nameSchema,
  })
  .partial()
  .strict();
