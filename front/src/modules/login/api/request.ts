import { LoginSchema } from 'shared/zodSchema'

export const LOGIN_URL = '/auth/login'

export const loginQuery = async (data: LoginSchema) => {
  const response = await fetch(`http://localhost:3002${LOGIN_URL}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  return await response.json()
}
