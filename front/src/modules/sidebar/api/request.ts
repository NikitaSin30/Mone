export const logoutQuery = async () => {
  const response = await fetch(`http://localhost:5432/auth/logout}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
  })

  return await response.json()
}
