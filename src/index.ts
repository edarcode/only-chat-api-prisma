import "./service/dotenv";
import { PORT, SERVER_ON } from "./server/consts";
import { server } from "./server/server";

server.listen(PORT, () => console.log(SERVER_ON));
