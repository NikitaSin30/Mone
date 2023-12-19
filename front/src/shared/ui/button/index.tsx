import React from 'react'

type ButtonType = JSX.IntrinsicElements['button']['type']

export const Button = ({
  textContent,
  isDisable,
  type = 'button',
}: {
  textContent: string
  isDisable: boolean
  type: ButtonType
}) => {
  return (
    <>
      <button disabled={isDisable} type={type}>
        {textContent}
      </button>
    </>
  )
}
