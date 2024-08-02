import { Role } from "@prisma/client";
import { z } from "zod";

export const roleSchema = z.enum([Role.ADMIN, Role.CLIENT]);
