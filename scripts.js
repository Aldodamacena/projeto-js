const button = document.getElementById('convert-button')
 
const dolar = 5.2

const convertValues = () => {
      const inputReais = document.getElementById('input-real').value
      const realValueText = document.getElementById('real-value-text')
      const currencyValueText = document.getElementById('currency-value-text')

      realValueText.innerHTML = inputReais
      currencyValueText.innerHTML = inputReais / dolar
      

      
    }

button.addEventListener('click', convertValues)