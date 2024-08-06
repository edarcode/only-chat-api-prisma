import { z } from "zod";

export const removeMsgSchema = z
  .object({
    receptorId: z.string().uuid(),
    createdAt: z.coerce.date(),
  })
  .strict();
