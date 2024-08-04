import z from "zod";
import { nameSchema } from "../../../zod-schema/nameSchema";
import { pageSchema } from "../../../zod-schema/pageSchema";
import { takeSchema } from "../../../zod-schema/takeSchema";
import { emailSchema } from "../../../zod-schema/emailSchema";
import { usernameSchema } from "../../../zod-schema/usernameSchema";
import { roleSchema } from "../../../zod-schema/roleSchema";

export const readUserSchema = z
  .object({
    page: pageSchema,
    take: takeSchema,
    name: nameSchema,
    email: emailSchema,
    username: usernameSchema,
    role: roleSchema,
  })
  .partial()
  .strict();
