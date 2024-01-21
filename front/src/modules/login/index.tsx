import { useForm } from 'react-hook-form'
import { useMutationLogin } from './api/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import styles from './index.module.less'
import { loginSchema, LoginSchema } from 'shared/zodSchema'
import { REGISTRATION } from 'shared/routers/path'
import { Input } from 'shared/ui/input'
import { Button } from 'shared/ui/button'
import { Header } from 'shared/ui/header'

export const Login = () => {
  const { mutate } = useMutationLogin()
  const {
    register,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
    reset,
  } = useForm<LoginSchema>({
    mode: 'all',
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (dataForm: LoginSchema) => {
    mutate(dataForm)
    reset()
  }

  return (
    <>
      <div className={styles['login']}>
        <form className={styles['login__form']} onSubmit={handleSubmit(onSubmit)}>
          <h3 className={styles['login__form-title']}>Вход</h3>
          <div className={styles['login__form-group']}>
            <Input
              type="email"
              errors={errors}
              placeholder="Введите email"
              name="email"
              size="lg"
              register={register}
            />

            <Input
              name="password"
              type="password"
              placeholder="Введите пароль"
              errors={errors}
              size="lg"
              register={register}
            />
          </div>
          <div className={styles['login__form-checkbox']}>
            <input type="checkbox" name="checkbox" />
            <label htmlFor="checkbox">Запомнить меня</label>
          </div>

          <div className={styles['login__form-recovery']}>
            <div className={styles['login__form-recovery-line']}></div>
            <span>Забыли пароль?</span>
            <div className={styles['login__form-recovery-line']}></div>
          </div>

          <Button isDisable={isSubmitting || !isValid} textContent="Войти" size="lg" />

          <div className={styles['login__form-navigation']}>
            <span>Нет аккаунта?</span>
            <Link to={REGISTRATION}>Зарегистрироваться</Link>
          </div>
        </form>
      </div>
    </>
  )
}
