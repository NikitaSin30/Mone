import style from './index.module.less'

export const Button = ({
  textContent,
  isDisable,
  size,
}: {
  textContent: string
  isDisable: boolean
  size: 'sm' | 'md' | 'lg'
}) => {
  const buttonStateStyle: string = isDisable ? style[`button-disabled`] : style[`button-active`]

  return (
    <>
      <button
        className={`${style.button} ${buttonStateStyle} ${style[`button-${size}`]}`}
        disabled={isDisable}
      >
        {textContent}
      </button>
    </>
  )
}
