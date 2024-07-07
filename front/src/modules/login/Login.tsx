import { useForm } from 'react-hook-form'
import { useMutationLogin } from './api/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'
import styles from './index.module.less'
import { LoginFormaSchema, LoginForma } from 'shared/zodSchema'
import { REGISTRATION } from 'shared/routers/path'
import { Input } from 'shared/ui/input'
import { Button } from 'shared/ui/button'
import { H } from 'shared/ui/h'
import { AppContext } from 'shared/context'
import { useContexHandle } from 'shared/hooks/useContexHandle'
import React, { useState } from 'react'

export const Login = () => {
  const { setIsAuth } = useContexHandle(AppContext)
  const navigate = useNavigate()
  const [isError, setIsError] = useState(false)
  const { mutateAsync, error } = useMutationLogin()
  const {
    register,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
    reset,
  } = useForm<LoginForma>({
    mode: 'all',
    resolver: zodResolver(LoginFormaSchema),
  })

  const onSubmit = async (dataForm: LoginForma) => {
    try {
      await mutateAsync(dataForm)

      reset()
      setIsAuth(true)
      navigate('/')
    } catch (error) {
      setIsError(true)
      setTimeout(() => {
        setIsError(false)
      }, 3000)
    }
  }

  return (
    <>
      <div className={styles['login']}>
        {isError && <div>{error.message}</div>}
        <form className={styles['login__form']} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles['login__form-title']}>
            <H HSize="h2" content="Вход" fontSize="42" fontWeight="600" color="#222223" />
          </div>
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
