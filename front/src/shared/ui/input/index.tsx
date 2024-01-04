import React from 'react'
import { FieldErrors, UseFormRegister, Path, FieldValues } from 'react-hook-form'
import styles from './index.module.less'
import Eye from './assets/Eye.svg'
import EyeSlash from './assets/EyeSlash.svg'

export const Input = <T extends FieldValues>({
  type,
  name,
  placeholder,
  errors,
  size,
  register,
}: {
  type: string
  name: Path<T>
  placeholder: string
  errors: FieldErrors<T>
  size: 'sm' | 'lg'
  register: UseFormRegister<T>
}) => {
  const [typeInput, setTypeInput] = React.useState(type)
  const errorSpanStyle: string = errors[name] ? '' : styles.hidden
  const errorInputStyle: string = errors[name] ? styles['input-warning'] : ''

  function togleTypeInput(): void {
    if (typeInput === 'password') {
      setTypeInput('text')
    } else {
      setTypeInput('password')
    }
  }
  return (
    <div className={styles['input-wrapper']}>
      <div className={styles['input-container']}>
        <input
          className={`${styles.input} ${styles[`input-${size}`]} ${errorInputStyle}`}
          type={typeInput}
          placeholder={placeholder}
          {...register(name)}
        />
        {type === 'password' && (
          <img
            onClick={togleTypeInput}
            src={`${typeInput === 'password' ? EyeSlash : Eye}`}
            alt="Eye"
            className={styles['eye-icon']}
          />
        )}
      </div>
      <span className={`${styles['span-warning']} ${errorSpanStyle}`}>
        {`${errors[name]?.message}` || ''}
      </span>
    </div>
  )
}
