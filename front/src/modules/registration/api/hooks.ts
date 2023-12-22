import { useMutation } from '@tanstack/react-query'
import { registrationQuery } from './request'

export const useMutationLogin = () => {
  return useMutation({
    mutationFn: registrationQuery,
    onSuccess: () => {},
    onError: (err: unknown) => console.log(err),
  })
}
