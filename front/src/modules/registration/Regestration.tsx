import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useMutationLogin, useMutationSignup } from './api/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from 'shared/ui/input'
import { RegistrationForma, RegistrationFormaSchema } from 'shared/zodSchema'
import { LOGIN } from 'shared/routers/path'
import { Button } from 'shared/ui/button'
import styles from './index.module.less'
import { Header } from 'shared/ui/header'
import { H } from 'shared/ui/h'

export const Registration = () => {
  const { mutateAsync, isSuccess, isError } = useMutationSignup()
  const {
    register,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
    watch,
    setError,
    clearErrors,
    reset,
  } = useForm<RegistrationForma>({
    mode: 'all',
    resolver: zodResolver(RegistrationFormaSchema),
  })

  const password = watch('password')
  const confirmPassword = watch('confirmPassword')

  // const navigate = useNavigate()

  React.useEffect(() => {
    if (confirmPassword !== password) {
      clearErrors('confirmPassword')
      setError('confirmPassword', { type: 'manual', message: 'Пароли не совпадают' })
    } else {
      clearErrors('confirmPassword')
    }
  }, [password, confirmPassword])

  const onSubmit = async (dataForm: RegistrationForma) => {
    // try {
    await mutateAsync(dataForm, {
      onError: (err: unknown) => console.log(err),
    })
    reset()
  }

  return (
    <>
      <div className={styles['registration']}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles['registration__form']}>
          <div className={styles['registration__form-title']}>
            <H HSize="h2" content="Регистрация" fontSize="42" fontWeight="600" color="#222223" />
          </div>
          <div className={styles['registration__form-group']}>
            <Input
              name="email"
              type="email"
              placeholder="Введите email"
              errors={errors}
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
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Подтвердите пароль"
              errors={errors}
              size="lg"
              register={register}
            />
          </div>
          <Button isDisable={isSubmitting || !isValid} textContent="Зарегистрироваться" size="lg" />
          <div className={styles['registration__form-navigation']}>
            <span>Уже есть аккаунт?</span>
            <Link to={LOGIN}>Войти</Link>
          </div>
        </form>
      </div>
    </>
  )
}
