import { connDb } from "../../../db/connDb";
import { Uuid } from "../../../types";

export const getChatService = async (issuerId: Uuid, receptorId: Uuid) => {
  const msgSent = await connDb.message.findMany({
    where: { issuerId, receptorId }, // msg enviados a
    orderBy: { createdAt: "asc" }, // Ordenar por fecha de creación del más antiguo al mas reciente
    take: 20,
  });

  const msgReceived = await connDb.message.findMany({
    where: { issuerId: receptorId, receptorId: issuerId }, // msg recibidos por
    orderBy: { createdAt: "asc" },
    take: 20,
  });

  const chat = [...msgSent, ...msgReceived].sort(
    (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
  );

  return chat;
};
