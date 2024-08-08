import bcrypt from "bcrypt";
import { BCRYPT } from "../constant/bcrypt";
import "../service/dotenv";
import { connDb } from "./connDb";
import { Role, ROLE } from "../constant/role";

seedDb()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    connDb.$disconnect();
  });

async function seedDb() {
  const boss = {
    name: process.env.BOSS_NAME,
    username: process.env.BOSS_USERNAME,
    email: process.env.BOSS_EMAIL,
    password: await bcrypt.hash(
      process.env.BOSS_PASSWORD as string,
      BCRYPT.salt
    ),
    role: ROLE.boss,
  } as Boss;

  const firstClient = {
    name: "loraine",
    username: "lora",
    email: "lora@gmail.com",
    password: await bcrypt.hash("123456", BCRYPT.salt),
    role: ROLE.client,
  };

  await connDb.user.createMany({
    data: [boss, firstClient],
  });
}

type Boss = {
  name: string;
  username: string;
  email: string;
  password: string;
  role: Role;
};
