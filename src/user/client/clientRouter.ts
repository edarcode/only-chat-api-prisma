import { Router } from "express";
import { editAccountRouter } from "./edit-account/editAccountRouter";
import { searchUserRouter } from "./search-user/searchUserRouter";
import { deleteAccountRouter } from "./delete-account/deleteAccountRouter";

export const clientRouter = Router();

clientRouter.use("/search", searchUserRouter);
clientRouter.use("/edit", editAccountRouter);
clientRouter.use("/delete", deleteAccountRouter);
