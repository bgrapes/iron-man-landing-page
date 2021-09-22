import React, { useState, useEffect } from 'react'
import getMarvelApiData from '../services/getMarvelApiData'
import IronManLandingPage from '../layouts/IronManLandingPage'
import { data } from '../data'

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [comics, setComics] = useState({})
  const [characterData, setCharacterData] = useState({})

  useEffect(() => {
    const { character } = data
    getMarvelApiData(character, setCharacterData, setComics, setIsLoading)
  }, [])

  return (
    <IronManLandingPage
      characterData={characterData}
      comics={comics}
      data={data}
      isLoading={isLoading}
    />
  )
}
export default IndexPage
