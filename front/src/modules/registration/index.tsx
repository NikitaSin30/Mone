import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useMutationLogin } from './api/hooks'
import { zodResolver } from '@hookform/resolvers/zod'

import { authSchema, TAuthSchema } from '../../shared/zodSchema'
import { LOGIN } from '../../shared/routers/path'

export const Registration = () => {
  const { mutateAsync, isSuccess, isError, isLoading } = useMutationLogin()
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset
  } = useForm<TAuthSchema>({
    mode: 'onBlur',
    resolver: zodResolver(authSchema)
  })

  const navigate = useNavigate()

  const onSubmit = async (dataForm: TAuthSchema) => {
    // try {
    await mutateAsync(dataForm, {
      onError: (err: unknown) => console.log(err)
    })
    reset()
    console.log(isSuccess)

    // } catch (error: unknown) {
    //   console.log(error);

    // }
  }

  return (
    <>
      {isError && <div>Pidaras</div>}
      {isSuccess && <div>Zaebesya</div>}
      {isLoading && <div>Gryzim</div>}

      <div></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} type="text" />
        {errors.email && <span>{`${errors.email.message}`}</span>}
        <input type="text" {...register('password')} />
        {errors.password && <span>{`${errors.password.message}`}</span>}
        <button disabled={isSubmitting}>Логин</button>
        <Link to={LOGIN}></Link>
      </form>
    </>
  )
}
