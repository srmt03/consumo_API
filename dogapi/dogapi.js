'use strict'

const searchDog = async (breed) => {
    const url = `https://dog.ceo/api/breed/${breed}/images`
    const response = await fetch(url)
    const listDog = await response.json()
    return listDog.message
}
export {
    searchDog
}