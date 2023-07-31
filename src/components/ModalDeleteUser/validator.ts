import { z } from 'zod'

export const contactRegisterSchema = z.object({
    name: z.string().min(3, "O nome precisa ter no mínimo 3 caracteres"),
    email: z.string().email("Email inválido"),
    phone: z.string().min(8, "O número de telefone deve ter ao menos 8 digitos")
})

export type TContactRegisterData = z.infer<typeof contactRegisterSchema>