import z from "zod";
import { emailSchema } from "../../../../zod-schema/emailSchema";
import { nameSchema } from "../../../../zod-schema/nameSchema";
import { passwordSchema } from "../../../../zod-schema/passwordSchema";
import { usernameSchema } from "../../../../zod-schema/usernameSchema";

export const signupSchema = z
  .object({
    name: nameSchema,
    username: usernameSchema,
    email: emailSchema,
    password: passwordSchema,
  })
  .strict();
