import { z } from "zod";
import { connDb } from "../../../db/connDb";
import { Uuid } from "../../../types";
import { sendMsgSchema } from "./sendMsgSchema";

export const sendMsgService = async (
  issuerId: Uuid,
  receptorId: Uuid,
  { text }: Params
) => {
  await connDb.message.create({
    data: { issuerId, receptorId, text },
  });
};

type Params = z.infer<typeof sendMsgSchema>;
