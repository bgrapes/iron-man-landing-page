import React from 'react'
import { Animated } from 'react-animated-css'
import Button from '../Button'
import {
  Container,
  CopyContainer,
  ImageContainer,
  Description,
  Image,
} from './styles'

const Hero = ({ description, title }) => {
  return (
    <Container>
      <CopyContainer xs={10} md={8}>
        <Description>{description}</Description>
        <Button large>Get Started</Button>
      </CopyContainer>
      <ImageContainer xs={8} md={4}>
        <Animated animationIn="fadeInUp" animationInDuration={700}>
          <Image src={'./iron-man-cartoon.png'} alt="Logo" />
        </Animated>
      </ImageContainer>
    </Container>
  )
}

export default Hero
