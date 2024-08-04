import z from "zod";
import { emailSchema } from "../../../zod-schema/emailSchema";
import { nameSchema } from "../../../zod-schema/nameSchema";
import { passwordSchema } from "../../../zod-schema/passwordSchema";
import { roleSchema } from "../../../zod-schema/roleSchema";
import { usernameSchema } from "../../../zod-schema/usernameSchema";
import { imgSchema } from "../../../zod-schema/imgSchema";

export const createUserSchema = z
  .object({
    name: nameSchema,
    username: usernameSchema,
    email: emailSchema,
    password: passwordSchema,
    isAuth: z.boolean(),
    role: roleSchema,
    img: imgSchema,
  })
  .strict();
