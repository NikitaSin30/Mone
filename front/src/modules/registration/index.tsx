import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useMutationLogin } from './api/hooks'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '../../shared/ui/input'
import { registrationSchema, RegistrationSchema } from '../../shared/zodSchema'
import { LOGIN } from '../../shared/routers/path'
import { Button } from '../../shared/ui/button'

import styles from './index.module.less'

export const Registration = () => {
  // @ts-ignore
  const { mutateAsync, isSuccess, isError, isLoading } = useMutationLogin()
  const {
    register,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
    watch,
    setError,
    clearErrors,
    reset,
  } = useForm<RegistrationSchema>({
    mode: 'all',
    resolver: zodResolver(registrationSchema),
  })

  const password = watch('password')
  const confirmPassword = watch('confirmPassword')

  const navigate = useNavigate()

  React.useEffect(() => {
    if (confirmPassword !== password) {
      clearErrors('confirmPassword')
      setError('confirmPassword', { type: 'manual', message: 'Пароли не совпадают' })
    } else {
      clearErrors('confirmPassword')
    }
  }, [password, confirmPassword])

  const onSubmit = async (dataForm: RegistrationSchema) => {
    // try {
    await mutateAsync(dataForm, {
      onError: (err: unknown) => console.log(err),
    })
    reset()
    console.log(isSuccess)

    // } catch (error: unknown) {
    //   console.log(error);

    // }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles['registration-form']}>
        <h3 className={styles['registration-form__title']}>Регистрация</h3>
        <div className={styles['registration-form__group']}>
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
        <div className={styles['registration-form__navigation']}>
          <span>Уже есть аккаунт?</span>
          <Link to={LOGIN}>Войти</Link>
        </div>
      </form>
    </>
  )
}
