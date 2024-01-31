const convertButton = document.querySelector(".convert-button")
const currencySelectConvert = document.querySelector(".currency-select-convert")
const currencySelectConverted = document.querySelector(".currency-select-converted")

console.log(currencySelectConvert)


function convertValuesReal() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    if ((currencySelectConvert.value) == (currencySelectConverted.value)) {
        alert("Selecione moedas diferente!");
    }

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

    if (currencySelectConverted.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedDolar)
    }

    if (currencySelectConverted.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedEuro)
    }
    if (currencySelectConverted.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(convertedLibra)
    }
    if (currencySelectConverted.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(convertedBitcoin)
    }
}
function changeFlagConvert() {
    
    const currencyConvert = document.getElementById("currency-convert")
    const imageConvert = document.getElementById("img-convert")

    if (currencySelectConvert.value == "dolar") {
        currencyConvert.innerHTML = "Dolar"
        imageConvert.src = "./assets/dolar.png"
    }
    if (currencySelectConvert.value == "euro") {
        currencyConvert.innerHTML = "Euro"
        imageConvert.src = "./assets/euro.png"
    }
    if (currencySelectConvert.value == "libra") {
        currencyConvert.innerHTML = "Libra"
        imageConvert.src = "./assets/libra.png"
    }
    if (currencySelectConvert.value == "bitcoin") {
        currencyConvert.innerHTML = "Bitcoin"
        imageConvert.src = "./assets/bitcoin.png"
    }
    if (currencySelectConvert.value == "real") {
        currencyConvert.innerHTML = "Real"
        imageConvert.src = "./assets/real.png"
    }
    if ((currencySelectConvert.value) == (currencySelectConverted.value)) {
        alert("Selecione moedas diferente!");
    }

}

function changeFlagConverted() {
    
    const currencyConverted = document.getElementById("currency-converted")
    const imageConverted = document.getElementById("img-converted")

    if (currencySelectConverted.value == "dolar") {
        currencyConverted.innerHTML = "Dolar"
        imageConverted.src = "./assets/dolar.png"
    }
    if (currencySelectConverted.value == "euro") {
        currencyConverted.innerHTML = "Euro"
        imageConverted.src = "./assets/euro.png"
    }
    if (currencySelectConverted.value == "libra") {
        currencyConverted.innerHTML = "Libra"
        imageConverted.src = "./assets/libra.png"
    }
    if (currencySelectConverted.value == "bitcoin") {
        currencyConverted.innerHTML = "Bitcoin"
        imageConverted.src = "./assets/bitcoin.png"
    }
    if (currencySelectConverted.value == "real") {
        currencyConverted.innerHTML = "Real"
        imageConverted.src = "./assets/real.png"
    }
    if ((currencySelectConvert.value) == (currencySelectConverted.value)) {
        alert("Selecione moedas diferente!");
    }
    convertValuesReal()
}
currencySelectConvert.addEventListener("change", changeFlagConvert)
currencySelectConverted.addEventListener("change", changeFlagConverted)
convertButton.addEventListener("click", convertValuesReal)




