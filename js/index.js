const inputColor = document.getElementById('inputColor')
const button = document.getElementById('button')
const textHexa = document.getElementById('textoHexa')
const cardColor = document.getElementById('cardColor')

button.addEventListener('click', () => {
    textHexa.textContent = inputColor.value 
    cardColor.style.backgroundColor = inputColor.value
})