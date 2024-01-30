const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

console.log(convertButton)

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelect.value)
    const dolarAtual = 4.96
    const euroAtual = 6.2

    const convertedDolar = inputCurrencyValue / dolarAtual
    const convertedEuro = inputCurrencyValue / euroAtual

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    
    if (currencySelect.value == "dolar") {
              

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedDolar)
    }

    if (currencySelect.value == "euro") {
         currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedEuro)
    }
}

function changeFlag(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("img-converted")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dolar"
        currencyImage.src = "./assets/dolar.png"
    }
    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    convertValues()
}

currencySelect.addEventListener("change", changeFlag)
convertButton.addEventListener("click", convertValues)



