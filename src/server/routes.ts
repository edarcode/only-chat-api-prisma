import { followRouter } from "../follow/followRouter";
import { messageRouter } from "../message/messageRouter";
import { App } from "../types";
import { userRouter } from "../user/userRouter";
import { welcomeRouter } from "../welcome/welcomeRouter";

export const routes = (server: App) => {
  server.use("/", welcomeRouter);
  server.use("/user", userRouter);
  server.use("/follow", followRouter);
  server.use("/msg", messageRouter);
};
