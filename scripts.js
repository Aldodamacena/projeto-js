const button = document.getElementById('convert-button')
 
const dolar = 5.2

const convertValues = () => {
      const inputReais = document.getElementById('input-real').value
      const realValueText = document.getElementById('real-value-text')
      const currencyValueText = document.getElementById('currency-value-text')

      
      
realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency:"BRL",
}).format(inputReais);

currencyValueText.innerHTML = new Intl.NumberFormat("en-US",{
  style: "currency",
  currency: "USD",
}).format(inputReais / dolar)
      
};

button.addEventListener('click', convertValues)