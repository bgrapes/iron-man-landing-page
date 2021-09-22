import md5 from 'md5'

const getKey = () => {
  const timestamp = Date.now()
  const privateKey = process.env.GATSBY_MARVEL_PRIVATE_KEY
  const publicKey = process.env.GATSBY_MARVEL_PUBLIC_KEY
  const hash = md5(timestamp + privateKey + publicKey)
  return {
    timestamp,
    publicKey,
    hash,
  }
}

const getMarvelApiData = (
  character,
  setCharacterData,
  setComics,
  setIsLoading
) => {
  const key = getKey()
  const auth = `ts=${key.timestamp}&apikey=${key.publicKey}&hash=${key.hash}`
  fetch(
    `${process.env.GATSBY_MARVEL_ENDPOINT}v1/public/characters?orderBy=name&limit=90&name=${character}&${auth}`
  )
    .then((response) => response.json())
    .then((data) => {
      const characterData = data.data.results[0]
      setCharacterData(characterData)
      const characterId = characterData.id
      return fetch(
        `${process.env.GATSBY_MARVEL_ENDPOINT}v1/public/characters/${characterId}/comics?${auth}`
      )
    })
    .then((response) => response.json())
    .then((resultData) => {
      setComics(resultData.data.results)
      setIsLoading(false)
    })
}

export default getMarvelApiData
