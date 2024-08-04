import { Role } from "@prisma/client";
import bcrypt from "bcrypt";
import z from "zod";
import { BCRYPT } from "../constant/bcrypt";
import "../service/dotenv";
import { connDb } from "./connDb";

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
    password: process.env.BOSS_PASSWORD,
    role: Role.BOSS,
  };

  const schemaBoss = z.object({
    name: z.string(),
    username: z.string(),
    email: z.string(),
    password: z.string(),
    role: z.enum([Role.BOSS]),
  });

  const { success, data } = schemaBoss.safeParse(boss);

  if (!success) {
    console.log(
      "\x1b[31m%s\x1b[0m",
      "falta info (.env) para crear usuario BOSS"
    );
    return;
  }

  const passHashed = await bcrypt.hash(data.password, BCRYPT.salt);

  await connDb.user.create({
    data: { ...data, password: passHashed },
  });
}
