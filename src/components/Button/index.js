import React from 'react'
import {
  ButtonStyled
} from './styles'

const Button = ({
  children,
  large
}) => {
  return (
  	<ButtonStyled large={large}>{children}</ButtonStyled>
  )
}

export default Button