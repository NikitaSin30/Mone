import React from 'react'
import { FieldErrors, UseFormRegister, Path, FieldValues } from 'react-hook-form'

type InputType = JSX.IntrinsicElements['input']['type']

export const Input = <T extends FieldValues>({
  name,
  placeholder,
  errors,
  register,
  type = 'text',
}: {
  name: Path<T>
  placeholder: string
  errors: FieldErrors<T>
  register: UseFormRegister<T>
  type: InputType
}) => {
  return (
    <>
      <input type={type} placeholder={placeholder} {...register(name)} />
      {errors[name] && <span>{`${errors[name]?.message}`}</span>}
    </>
  )
}
