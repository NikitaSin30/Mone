import { LoginForma } from 'shared/zodSchema'

export const LOGIN_URL = 'auth/signin'

export const loginQuery = async (data: LoginForma) => {
  const response = await fetch(`http://localhost:5432/${LOGIN_URL}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  console.log(response.ok)

  const res = await response.json()

  if (res.statusCode !== 201) {
    throw new Error('Ошибка')
  }

  return await response.json()
}
