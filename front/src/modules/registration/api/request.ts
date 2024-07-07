import { RegistrationForma } from 'shared/zodSchema'

export const REGISTRATION_URL = '/auth/sigup'

export const registrationQuery = async (data: RegistrationForma) => {
  const response = await fetch(`http://localhost:3003${REGISTRATION_URL}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('ошибка')
  }

  return await response.json()
}
