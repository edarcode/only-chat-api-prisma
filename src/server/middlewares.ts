import cors from "cors";
import express from "express";
import { App } from "../types";

export const middlewares = (server: App) => {
  server.use(cors());
  server.use(express.json());
};
