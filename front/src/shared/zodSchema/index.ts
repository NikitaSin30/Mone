import { z } from "zod"

export const authSchema = z.object({
    email   : z.string()
               .nonempty('Поле не должно быть пустым')
               .email('Некорректны email'),
    password: z.string()
               .nonempty('Поле не должно быть пустым')
               .regex(/^[0-9a-zA-Z]+$/,'Недопустимые символы')
               .min(6,'Минимум 6 символов')
               .max(20,'Максимум 20 символов'),
})

export type TAuthSchema = z.infer<typeof authSchema>
