import { useNavigate } from 'react-router-dom'
import { loginQuery } from './request'
import React from 'react'
import { useContexHandle } from 'shared/hooks/useContexHandle'
import { AppContext } from 'shared/context'
import { useMutation } from '@tanstack/react-query'

export const useMutationLogin = () => {
  return useMutation({
    mutationFn: loginQuery,
    onSuccess(data: { accessToken: string }) {
      console.log(data)

      localStorage.setItem('accessToken', data.accessToken)
    },
  })
}
