import React from 'react'
export const Button = ({ textContent, isDisable }: { textContent: string; isDisable: boolean }) => {
  return (
    <>
      <button disabled={isDisable}>{textContent}</button>
    </>
  )
}
