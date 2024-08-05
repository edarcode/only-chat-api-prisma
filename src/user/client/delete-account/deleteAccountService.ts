import { Uuid } from "../../../types";
import { deleteUserService } from "../../boss/delete-user/deleteUserService";

export const deleteAccountService = async (id: Uuid) => {
  await deleteUserService(id);
};
