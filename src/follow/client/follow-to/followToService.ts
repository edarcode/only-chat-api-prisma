import { connDb } from "../../../db/connDb";
import { Uuid } from "../../../types";

export const followToService = async (followerId: Uuid, followingId: Uuid) => {
  await connDb.follow.create({
    data: { followerId, followingId },
  });
};
