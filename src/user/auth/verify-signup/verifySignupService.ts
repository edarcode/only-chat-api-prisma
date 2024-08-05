import { z } from "zod";
import { createUserService } from "../../boss/create-user/createUserService";
import { signupSchema } from "../signup/signupSchema";

export const verifySignupService = async (params: Param) => {
  const { name, username, email, password } = params;
  return await createUserService({ name, username, email, password });
};

type Param = z.infer<typeof signupSchema>;
