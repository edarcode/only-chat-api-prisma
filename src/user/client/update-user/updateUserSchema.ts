import { z } from "zod";
import { emailSchema } from "../../../zod-schema/emailSchema";
import { imgSchema } from "../../../zod-schema/imgSchema";
import { nameSchema } from "../../../zod-schema/nameSchema";
import { passwordSchema } from "../../../zod-schema/passwordSchema";
import { usernameSchema } from "../../../zod-schema/usernameSchema";

export const updateUserSchema = z
  .object({
    name: nameSchema,
    username: usernameSchema,
    email: emailSchema,
    password: passwordSchema,
    img: imgSchema.optional(),
  })
  .strict()
  .partial();
