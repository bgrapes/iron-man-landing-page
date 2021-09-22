import React from 'react'
import { Col } from 'react-flexbox-grid'
import { StyledSlider, Slide, Image } from './styles'

const settings = {
  arrows: false,
  autoplay: true,
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 8,
  speed: 500,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

const Slider = ({ comics, characterId }) => {
  return (
    <Col xs={12}>
      <StyledSlider {...settings}>
        {comics.length &&
          comics.map((comic) => {
            const path = comic.thumbnail.path
            const extension = comic.thumbnail.extension
            const imgSrc = `${path}.${extension}`

            if (path.includes('image_not_available')) return null
            return (
              <div key={comic.id}>
                <Slide>
                  <Image src={imgSrc} />
                </Slide>
              </div>
            )
          })}
      </StyledSlider>
    </Col>
  )
}

export default Slider
