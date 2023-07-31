import { z } from 'zod'

export const loginSchema = z.object({
    email: z.string().email("Deve ser um e-mail"),
    password: z.string().nonempty("Senha é obrigatória")
})

export type TLoginData = z.infer<typeof loginSchema>