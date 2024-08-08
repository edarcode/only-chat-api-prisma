import { z } from "zod";
import { ROLE } from "../constant/role";

export const roleSchema = z.enum([ROLE.boss, ROLE.client]);
