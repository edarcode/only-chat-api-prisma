import { z } from "zod";
import { idSchema } from "../../../zod-schema/idSchema";

export const removeMsgSchema = z
  .object({
    receptorId: idSchema,
    createdAt: z.coerce.date(),
  })
  .strict();
