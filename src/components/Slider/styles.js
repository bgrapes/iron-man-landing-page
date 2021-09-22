import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const StyledSlider = styled(Slider)`
  padding: 40px 0px;
`

export const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
`

export const Image = styled.img`
  width: 100%;
`