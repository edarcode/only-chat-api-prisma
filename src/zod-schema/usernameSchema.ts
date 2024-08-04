import { z } from "zod";
import { REGEX } from "../regex/regex";

export const usernameSchema = z
  .string()
  .min(6)
  .max(15)
  .refine((name) => !REGEX.specialCharacters.test(name), {
    message: "No special characters",
  });
