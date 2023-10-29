import { useForm } from 'react-hook-form'
import { useMutationLogin } from './api/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'

import { authSchema, TAuthSchema } from '../../shared/zodSchema'
import { REGISTRATION } from '../../shared/routers/path'

export const Authorization = () => {
  const { mutate } = useMutationLogin()
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset
  } = useForm<TAuthSchema>({
    mode: 'onBlur',
    resolver: zodResolver(authSchema)
  })

  const onSubmit = (dataForm: TAuthSchema) => {
    mutate(dataForm)
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} type="text" />
        {errors.email && <span>{`${errors.email.message}`}</span>}
        <input type="text" {...register('password')} />
        {errors.password && <span>{`${errors.password.message}`}</span>}
        <button disabled={isSubmitting}>Логин</button>
        <Link to={REGISTRATION}></Link>
      </form>
    </>
  )
}
