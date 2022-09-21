'use strict'

import { searchDog } from "./dogapi.js"

const search = async () => {
    const breed = document.getElementById('breed').value
    const imgs = await searchDog(breed)
    const galery = document.getElementById('galery')
    const tagImgs = imgs.map(createImage)
    galery.replaceChildren(...tagImgs)
}
const createImage = (endImg) => {
    const img = document.createElement('img')
    img.src = endImg
    return img
}

const handleKeypress = (event) => {
    if (event.key == "Enter") 
    search()
}
document.getElementById('breed').addEventListener('keypress', handleKeypress)
