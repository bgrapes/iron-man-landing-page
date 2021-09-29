const fetch = require('node-fetch')
const md5 = require('md5')

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

exports.sourceNodes = async () => {
  const key = getKey()
  const auth = `ts=${key.timestamp}&apikey=${key.publicKey}&hash=${key.hash}`
  const character = 'Iron Man'
  const response = await fetch(
    `${process.env.GATSBY_MARVEL_ENDPOINT}v1/public/characters?orderBy=name&limit=90&name=${character}&${auth}`
  )
  const json = await response.json()
  const { data = {} } = json

  console.log('description', data.results[0].description)

  const comics = await Promise.all(
    data.results[0].comics.items.map(async (result) => {
      const { resourceURI } = result
      const comicResponse = await fetch(`${resourceURI}?${auth}`)
      return await comicResponse.json()
    })
  )

  console.log('comics', comics)
}
