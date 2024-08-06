import { connDb } from "../../../db/connDb";
import { Uuid } from "../../../types";

export const removeMsgService = async (
  issuerId: Uuid,
  receptorId: Uuid,
  createdAt: Date
) => {
  console.log(issuerId, receptorId, createdAt);
  await connDb.message.delete({
    where: {
      issuerId_receptorId_createdAt: {
        issuerId,
        receptorId,
        createdAt,
      },
    },
  });
};
