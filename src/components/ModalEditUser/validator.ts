import { z } from "zod";

export const userEditSchema = z.object({
  name: z.union([z.string().min(3, "O nome precisa ter no mínimo 3 caracteres"), z.literal("")]),
  email: z.union([z.string().email("Email inválido"), z.literal("")]),
  password: z.union([z.string().min(6, "A senha precisa ter ao menos 6 caracteres"), z.literal("")]),
  phone: z.union([z.string().min(8, "O número de telefone deve ter ao menos 8 digitos"), z.literal("")]),
});

export type TUserEditData = z.infer<typeof userEditSchema>;
