// classe que adiciona uma posição fixa no topo, para a nav, 'fixed-top'

const typing = document.querySelector('[data-js="typing"]')

const messages = ['Front-end','Freelancer','Web']

let messageIndex = 0
let characterIndex = 0
let currentMessage = ''
let currentCharacters = ''

const type = () => {
  const shouldTypeFirstMessage = messageIndex === messages.length

  if(shouldTypeFirstMessage){
    messageIndex = 0
  }

  currentMessage = messages[messageIndex]
  currentCharacters = currentMessage.slice(0, characterIndex++)
  typing.textContent = currentCharacters

  const shouldChangeMessageToBeTyped = 
    currentCharacters.length === currentMessage.length

  if(shouldChangeMessageToBeTyped){
    messageIndex++
    characterIndex = 0
  }
  console.log(currentCharacters)
}

//setInterval(type, 300)
