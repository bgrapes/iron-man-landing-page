import React from 'react'
import { Helmet } from 'react-helmet'
import { Grid } from 'react-flexbox-grid'
import { Animated } from 'react-animated-css'
import 'typeface-nunito'
import LoadingIndicator from '../../components/LoadingIndicator'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import CopyArea from '../../components/CopyArea'
import Slider from '../../components/Slider'
import { GlobalStyle, GradientSection } from './styles'

const IronManLandingPage = ({ characterData, data, comics, isLoading }) => {
  const { thumbnail, description } = characterData
  const { heading, iconGridItems, seo } = data

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
      </Helmet>
      <GlobalStyle />
      <main>
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <Animated
            animationIn="fadeIn"
            animationInDuration={400}
            isVisible={true}
          >
            <GradientSection>
              <Grid>
                <Header />
                <Hero description={description && description} />
              </Grid>
            </GradientSection>
            <section>
              <Grid>
                <CopyArea
                  heading={heading}
                  thumbnail={thumbnail && thumbnail}
                  items={iconGridItems}
                />
              </Grid>
            </section>
            <section>
              <Slider comics={comics} />
            </section>
          </Animated>
        )}
      </main>
    </>
  )
}
export default IronManLandingPage
