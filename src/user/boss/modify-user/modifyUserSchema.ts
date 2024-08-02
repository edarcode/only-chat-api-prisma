import z from "zod";
import { emailSchema } from "../../../zod-schema/emailSchema";
import { nameSchema } from "../../../zod-schema/nameSchema";
import { passwordSchema } from "../../../zod-schema/passwordSchema";
import { roleSchema } from "../../../zod-schema/roleSchema";

export const modifyUserSchema = z
  .object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    isAuth: z.boolean(),
    role: roleSchema,
  })
  .partial()
  .strict()
  .refine((data) => Object.keys(data).length > 0, {
    message: "Empty DTO",
  });
