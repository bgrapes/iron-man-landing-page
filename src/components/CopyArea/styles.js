import styled from 'styled-components'
import 'typeface-ropa-sans'

export const Heading = styled.h1`
  font-family: 'Ropa Sans', Arial, sans-serif;
  font-size: 32px;
  text-align: center;
  padding-bottom: 30px;
`

export const Item = styled.div`
  margin-bottom: 30px;
  max-width: 320px;

  img {
    max-height: 50px;
  }
`

export const Thumbnail = styled.img`
  margin-bottom: 30px;
  width: 100%;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
`

export const SubHeading = styled.h2`
  font-family: 'Ropa Sans', Arial, sans-serif;
  font-size: 20px;
`

export const Description = styled.p`
  color: #808080;
  font-size: 16px;
`
