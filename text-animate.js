const typedText = document.querySelector('[data-js="typing"]')

const positions = ["Freelancer","Web","Front-end"]
const typingDelay = 100
const erasingDelay = 150
const newTextDelay = 1000 

let position = 0
let index = 0


window.document.addEventListener('DOMContentLoaded', () => {
  const toTypePosition = () =>  {
    const verifyIndex = index < positions[position].length
    const typingLetter = typedText.textContent += positions[position].charAt(index)

    if (verifyIndex) {
        typingLetter
        index++
        setTimeout(toTypePosition, typingDelay)
        return
    } 
    
    if (!verifyIndex) {
        setTimeout(erasingLetter, newTextDelay)
    }
  }

  const erasingLetter = () => {
    const erase = typedText.textContent = positions[position].substring(0, index - 1)

      if (index > 0) {
          erase
          index--
          setTimeout(erasingLetter, erasingDelay)
          return
      } 
      
      if (index === 0) {
          position++

          if (position >= positions.length) {
            position = 0
          }
          setTimeout(toTypePosition, typingDelay + 500)
      }
  }

  const init = () => {
      typedText.textContent = positions[position]
      index = positions[position].length
      setTimeout(erasingLetter, newTextDelay)
  }

  init()
})




