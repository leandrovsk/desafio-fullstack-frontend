import { z } from 'zod'

export const registerSchema = z.object({
    name: z.string().min(3, "O nome deve ter no mínimo 6 caracteres"),
    email: z.string().email("Deve ser um e-mail"),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres").nonempty("Senha é obrigatória"),
    phone: z.string().min(8, "O telefone deve ter no mínimo 8 caracteres")
})

export type TRegisterData = z.infer<typeof registerSchema>