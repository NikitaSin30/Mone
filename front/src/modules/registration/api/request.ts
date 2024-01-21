import { RegistrationSchema } from 'shared/zodSchema'

export const REGISTRATION_URL = '/auth/registratio'

export const registrationQuery = async (data: RegistrationSchema) => {
  const response = await fetch(`http://localhost:3002${REGISTRATION_URL}`, {
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
