import React from 'react'
import { ButtonProps } from '../../types'

const ButtonWhite = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`bg-white border-primary border rounded-full px-5 py-1 text-primary w-full ${className}`}
    >
      {children}
    </button>
  )
}

export default ButtonWhite
