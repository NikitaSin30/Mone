import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useMutationLogin } from './api/hooks'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '../../shared/ui/input'
import { registrationSchema, RegistrationSchema } from '../../shared/zodSchema'
import { LOGIN } from '../../shared/routers/path'
import { Button } from 'shared/ui/button'

export const Registration = () => {
  const { mutateAsync, isSuccess, isError, isLoading } = useMutationLogin()
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<RegistrationSchema>({
    mode: 'onBlur',
    resolver: zodResolver(registrationSchema),
  })

  const navigate = useNavigate()

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
      <form className="a" onSubmit={handleSubmit(onSubmit)}>
        <Input name="email" type="text" placeholder="Введите email" errors={errors} register={register} />
        <Input name="password" type="text" placeholder="Введите пароль" errors={errors} register={register} />
        <Input
          name="confirmPassword"
          type="text"
          placeholder="Подтвердите пароль"
          errors={errors}
          register={register}
        />
        <Button type="submit" isDisable={isSubmitting} textContent="Зарегистрироваться" />
        <Link to={LOGIN}></Link>
      </form>
    </>
  )
}
