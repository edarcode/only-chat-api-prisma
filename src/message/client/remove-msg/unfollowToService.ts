import { connDb } from "../../../db/connDb";
import { Uuid } from "../../../types";

export const unfollowToService = async (
  followerId: Uuid,
  followingId: Uuid
) => {
  await connDb.follow.delete({
    where: { followerId_followingId: { followerId, followingId } },
  });
};
