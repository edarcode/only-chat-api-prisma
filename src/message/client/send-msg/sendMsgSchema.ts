import { z } from "zod";

export const sendMsgSchema = z
  .object({
    text: z.string(),
  })
  .strict();
