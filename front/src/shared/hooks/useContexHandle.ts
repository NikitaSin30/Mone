import React from 'react'

export const useContexHandle = <T>(context: React.Context<T>) => {
  const data = React.useContext(context)

  if (!data) {
    throw new Error('Context is empty')
  }

  return data
}
