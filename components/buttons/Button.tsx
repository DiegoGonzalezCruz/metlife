import React from 'react'
import { ButtonProps } from '../../types'

const Button = ({ onClick, className, children }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={
        className +
        ' ' +
        'bg-secondary rounded-full py-1 px-4 w-full text-center text-white font-Fira cursor-pointer'
      }
    >
      {children}
    </div>
  )
}

export default Button
