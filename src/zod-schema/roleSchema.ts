import { Role } from "@prisma/client";
import { z } from "zod";

export const roleSchema = z.enum([Role.BOSS, Role.CLIENT]);
