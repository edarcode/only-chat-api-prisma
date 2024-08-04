import { createUserSchema } from "../create-user/createUserSchema";

export const updateUserSchema = createUserSchema
  .partial()
  .strict()
  .refine((data) => Object.keys(data).length > 0, {
    message: "No empty DTO",
  });
