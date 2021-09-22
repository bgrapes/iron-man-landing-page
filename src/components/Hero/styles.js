import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'

export const Container = styled(Row)`
  display: flex;
  justify-content: center;
`

export const CopyContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  order: 2;

  @media (min-width: 768px) {
    align-items: flex-start;
    order: 1;
  }
`

export const Description = styled.p`
  color: #fff;
  font-size: 16px;
  max-width: 700px;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 20px;
    text-align: left;
  }

  @media (min-width: 992px) {
    font-size: 24px;
    text-align: left;
  }
`

export const ImageContainer = styled(Col)`
  display: flex;
  justify-content: center;
  order: 1;

  @media (min-width: 768px) {
    align-items: flex-start;
    order: 2;
    max-width: 100%;
  }
`

export const Image = styled.img`
  width: 100%;
`
