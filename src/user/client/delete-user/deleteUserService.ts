import { Uuid } from "../../../types";
import { deleteUserService as deleteUserServic } from "../../boss/delete-user/deleteUserService";

export const deleteUserService = async (id: Uuid) => {
  await deleteUserServic(id);
};
