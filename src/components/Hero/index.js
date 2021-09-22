import React from 'react'
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
        <Image src={'./iron-man-cartoon.png'} alt="Logo" />
      </ImageContainer>
    </Container>
  )
}

export default Hero
