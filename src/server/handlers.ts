import { App } from "../types";
import { errorHandler } from "./handler/errorHandler";
import { notFoundHandler } from "./handler/notFoundHandler";

export const handlers = (server: App) => {
  server.use(notFoundHandler);
  server.use(errorHandler);
};
