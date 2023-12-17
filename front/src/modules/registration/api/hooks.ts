import { useMutation } from '@tanstack/react-query'
import { registrationQuery } from './request'
import { useNavigate } from 'react-router-dom'

export const useMutationLogin = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: registrationQuery,
    onSuccess: () => {
      navigate('/login')
    },
    onError: (err: unknown) => console.log(err),
  })
}
