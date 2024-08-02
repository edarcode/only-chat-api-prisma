import express from "express";
import { handlers } from "./handlers";
import { middlewares } from "./middlewares";
import { routes } from "./routes";

export const server = express();
middlewares(server);
routes(server);
handlers(server);
