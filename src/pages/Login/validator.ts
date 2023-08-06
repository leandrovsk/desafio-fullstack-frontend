import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Digite um endereço de e-mail válido"),
  password: z.string().nonempty("Senha é obrigatória").min(6, "A senha deve ter ao menos 6 caracteres"),
});

export type TLoginData = z.infer<typeof loginSchema>;
