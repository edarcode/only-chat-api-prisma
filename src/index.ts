import "./service/dotenv";
import { PORT, SERVER_ON } from "./server/consts";
import { server } from "./server/server";
import http from "http";
import { Server as SocketServer } from "socket.io";

const httpServer = http.createServer(server);
const io = new SocketServer(httpServer, {
  cors: { origin: "http://localhost:5173" },
});

io.on("connection", () => {
  console.log("Client conected");
});

httpServer.listen(PORT, () => console.log(SERVER_ON));
