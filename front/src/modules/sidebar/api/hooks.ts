import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { AppContext } from 'shared/context'
import { useContexHandle } from 'shared/hooks/useContexHandle'
import { logoutQuery } from './request'

export const useMutationLogout = () => {
  const { setIsAuth } = useContexHandle(AppContext)
  const navigate = useNavigate()

  return useMutation({
    mutationFn: logoutQuery,
    onSuccess() {
      window.localStorage.removeItem('accessToken')
      setIsAuth(false)
      navigate('/login')
      console.log(localStorage.getItem('accessToken'))
    },
  })
}
