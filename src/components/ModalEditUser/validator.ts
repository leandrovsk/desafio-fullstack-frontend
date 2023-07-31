import { z } from 'zod'

export const userEditSchema = z.object({
    name: z.nullable(z.string().min(3, "O nome precisa ter no mínimo 3 caracteres")),
    email: z.nullable(z.string().email("Email inválido")),
    password: z.nullable(z.string().min(6, "A senha precisa ter ao menos 6 caracteres")),
    phone: z.nullable(z.string().min(8, "O número de telefone deve ter ao menos 8 digitos"))
})


export type TUserEditData = z.infer<typeof userEditSchema>