import React from 'react'
import { Animated } from 'react-animated-css'
import { Background, Image, LoadingIcon } from './styles'

const LoadingIndicator = () => {
  return (
    <>
      <Background>
        <Animated
          animationIn="fadeIn"
          animationInDuration={1000}
          isVisible={true}
        >
          <Image src={'/iron-man-cartoon.png'} alt="Logo" />
          <LoadingIcon src={'./loading-icon.svg'} alt="Loading..." />
        </Animated>
      </Background>
    </>
  )
}

export default LoadingIndicator
