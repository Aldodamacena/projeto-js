const button = document.getElementById('convert-button')
 
const dolar = 5.2

const convertValues = () => {
      const inputReais = document.getElementById('input-real').valeu
      const realValueText = document.getElementById("Real-value-text")
      const currencyValueText = document.getElementById("currency-value-text")

      realValueText.innerHTML = inputReais
      realValueText.innerHTML = inputReais / dolar
      

      console.log(inputReais / dolar) 
    }

button.addEventListener('click', convertValues )