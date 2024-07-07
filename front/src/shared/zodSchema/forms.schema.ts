import { z } from 'zod'

export const LoginFormaSchema = z.object({
  email: z.string().min(1, 'Поле не должно быть пустым').email('Некорректны email'),
  password: z
    .string()
    .min(1, 'Поле не должно быть пустым')
    .regex(/^[0-9a-zA-Z]+$/, 'Недопустимые символы')
    .min(6, 'Минимум 6 символов')
    .max(20, 'Максимум 20 символов'),
})

export const RegistrationFormaSchema = z
  .object({
    email: z.string().min(1, 'Заполните пустое поле').email('Некорректный email'),
    password: z
      .string()
      .min(1, 'Заполните пустое поле')
      .regex(/^[0-9a-zA-Z]+$/, 'Недопустимые символы')
      .min(6, 'Длина пароля должна быть не менее 6 символов')
      .max(20, 'Длина пароля должна быть более 20 символов'),
    confirmPassword: z
      .string()
      .min(1, 'Заполните пустое поле')
      .regex(/^[0-9a-zA-Z]+$/, 'Недопустимые символы')
      .min(6, 'Длина пароля должна быть не менее 6 символов')
      .max(20, 'Длина пароля должна быть более 20 символов'),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Пароль не совпадает',
        path: ['confirmPassword'],
      })
    }
  })

export type LoginForma = z.infer<typeof LoginFormaSchema>
export type RegistrationForma = z.infer<typeof RegistrationFormaSchema>
