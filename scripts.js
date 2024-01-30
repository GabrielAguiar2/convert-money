const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

console.log(convertButton)

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelect.value) 
    
    //Valores do dia 01.30.2024
    const dolarAtual = 4.95
    const euroAtual = 5.37
    const libraAtual = 6.29
    const bitcoinAtual = 215286.49

    const convertedDolar = inputCurrencyValue / dolarAtual
    const convertedEuro = inputCurrencyValue / euroAtual
    const convertedLibra = inputCurrencyValue / libraAtual
    const convertedBitcoin = inputCurrencyValue / bitcoinAtual

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
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
           style: "currency",
           currency: "GBP"
       }).format(convertedLibra)
    }
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
           style: "currency",
           currency: "BTC"
       }).format(convertedBitcoin)
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
    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }
    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    convertValues()
}

currencySelect.addEventListener("change", changeFlag)
convertButton.addEventListener("click", convertValues)




