import z from "zod";
import { pageSchema } from "../../../zod-schema/pageSchema";
import { takeSchema } from "../../../zod-schema/takeSchema";
import { usernameSchema } from "../../../zod-schema/usernameSchema";

export const searchUserSchema = z
  .object({
    page: pageSchema.optional(),
    take: takeSchema.optional(),
    username: usernameSchema,
  })
  .strict();
