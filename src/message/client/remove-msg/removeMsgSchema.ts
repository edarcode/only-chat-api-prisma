import { z } from "zod";

export const removeMsgSchema = z
  .object({
    receptorId: z.coerce.string().uuid(),
    createdAt: z.coerce.date(),
  })
  .strict();
