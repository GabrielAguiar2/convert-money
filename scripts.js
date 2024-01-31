const convertButton = document.querySelector(".convert-button")

const currencySelectConvert = document.querySelector(".currency-select-convert")
const currencySelectConverted = document.querySelector(".currency-select-converted")

const currencyValueConvert = document.querySelector(".currency-value-to-convert")
const currencyValueConverted = document.querySelector(".currency-value")
const inputCurrencyValue = document.querySelector(".input-currency")



function convertValues(){
    if ((currencySelectConvert.value) == (currencySelectConverted.value)) {
        alert("Selecione moedas diferente! \n\nA página irá recarregar!");
        window.location.reload(true);
    }

    if(currencySelectConvert.value == "real"){
        console.log(currencySelectConvert.value)
        console.log(inputCurrencyValue.value)
           
            //Valores do dia 01.30.2024
            const dolarAtual = 4.95
            const euroAtual = 5.37
            const libraAtual = 6.29
            const bitcoinAtual = 215286.49
        
            const convertedDolar = inputCurrencyValue.value / dolarAtual
            const convertedEuro = inputCurrencyValue.value / euroAtual
            const convertedLibra = inputCurrencyValue.value / libraAtual
            const convertedBitcoin = inputCurrencyValue.value / bitcoinAtual
        
            currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue.value)
        
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

    if(currencySelectConvert.value == "dolar"){
      
            console.log(currencySelectConvert.value)
            console.log(inputCurrencyValue.value)
            
            //Valores do dia 01.30.2024
            const realAtual = 0.20
            const euroAtual = 1.09
            const libraAtual = 1.27
            const bitcoinAtual = 43441.60
        
            const convertedReal = inputCurrencyValue.value / realAtual
            const convertedEuro = inputCurrencyValue.value / euroAtual
            const convertedLibra = inputCurrencyValue.value / libraAtual
            const convertedBitcoin = inputCurrencyValue.value / bitcoinAtual
        
            currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue.value)
            
        
            if (currencySelectConverted.value == "real") {
                currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format(convertedReal)
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

        if(currencySelectConvert.value == "euro"){
      
            console.log(currencySelectConvert.value)
            console.log(inputCurrencyValue.value)
            
            //Valores do dia 01.30.2024
            const realAtual = 0.19
            const dolarAtual = 0.92
            const libraAtual = 1.17
            const bitcoinAtual = 40017.70
        
            const convertedReal = inputCurrencyValue.value / realAtual
            const convertedDolar = inputCurrencyValue.value / dolarAtual
            const convertedLibra = inputCurrencyValue.value / libraAtual
            const convertedBitcoin = inputCurrencyValue.value / bitcoinAtual
        
            currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue.value)
                      
        
            if (currencySelectConverted.value == "real") {
                currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format(convertedReal)
            }
        
            if (currencySelectConverted.value == "dolar") {
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(convertedDolar)
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


        if(currencySelectConvert.value == "libra"){
      
            console.log(currencySelectConvert.value)
            console.log(inputCurrencyValue.value)
            
            //Valores do dia 01.30.2024
            const realAtual = 0.16
            const dolarAtual = 0.79
            const euroAtual = 0.85
            const bitcoinAtual = 34182.81
        
            const convertedReal = inputCurrencyValue.value / realAtual
            const convertedDolar = inputCurrencyValue.value / dolarAtual
            const convertedEuro = inputCurrencyValue.value / euroAtual
            const convertedBitcoin = inputCurrencyValue.value / bitcoinAtual
        
            currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue.value)
                      
        
            if (currencySelectConverted.value == "real") {
                currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format(convertedReal)
            }
        
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
            if (currencySelectConverted.value == "bitcoin") {
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "BTC"
                }).format(convertedBitcoin)
            }
        }

        if(currencySelectConvert.value == "bitcoin"){
      
            console.log(currencySelectConvert.value)
            console.log(inputCurrencyValue.value)
            
            //Valores do dia 01.30.2024
            const realAtual = 0.0000047
            const dolarAtual = 0.000023
            const euroAtual = 0.000025
            const libraAtual = 0.000029
        
            const convertedReal = inputCurrencyValue.value / realAtual
            const convertedDolar = inputCurrencyValue.value / dolarAtual
            const convertedEuro = inputCurrencyValue.value / euroAtual
            const convertedLibra = inputCurrencyValue.value / libraAtual
        
            currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue.value)
                      
        
            if (currencySelectConverted.value == "real") {
                currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format(convertedReal)
            }
        
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
    convertValues()
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
    convertValues()
    
}

convertButton.addEventListener("click", convertValues)
currencySelectConvert.addEventListener("change", changeFlagConvert)
currencySelectConverted.addEventListener("change", changeFlagConverted)





