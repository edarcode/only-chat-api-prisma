import z from "zod";
import { emailSchema } from "../../../zod-schema/emailSchema";
import { nameSchema } from "../../../zod-schema/nameSchema";
import { passwordSchema } from "../../../zod-schema/passwordSchema";
import { roleSchema } from "../../../zod-schema/roleSchema";

export const createUserSchema = z
  .object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    isAuth: z.boolean(),
    role: roleSchema,
  })
  .strict();
