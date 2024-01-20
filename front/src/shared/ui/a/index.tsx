import React from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.less'

export const A = ({
  to,
  title,
  color = 'white',
  size = 'md',
}: {
  to: string
  title: string
  color?: 'white' | 'dark'
  size?: 'sm' | 'md' | 'lg'
}) => {
  const stylyLink = `${style[`link-${size}`]} ${style[`link-${color}`]}`

  return (
    <>
      <Link className={stylyLink} to={to}>
        {title}
      </Link>
    </>
  )
}
