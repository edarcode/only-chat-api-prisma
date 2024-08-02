import z from "zod";
import { emailSchema } from "../../../../zod-schema/emailSchema";
import { nameSchema } from "../../../../zod-schema/nameSchema";
import { passwordSchema } from "../../../../zod-schema/passwordSchema";

export const signupSchema = z
  .object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
  })
  .strict();
