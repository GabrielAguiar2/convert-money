const convertButton = document.querySelector(".convert-button")

const currencySelectConvert = document.querySelector(".currency-select-convert")
const currencySelectConverted = document.querySelector(".currency-select-converted")

const currencyValueConvert = document.querySelector(".currency-value-to-convert")
const currencyValueConverted = document.querySelector(".currency-value")

const inputCurrencyValue = document.querySelector(".input-currency")

const switchCurrency = document.querySelector('.change')


async function convertValues(){
    if ((currencySelectConvert.value) == (currencySelectConverted.value)) {
        alert("Selecione moedas diferente! \n\nA página irá recarregar!");
        window.location.reload(true);
    }
    const convertBRL = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(res => res.json())
   
    const dolarAtual = convertBRL.USDBRL.high
    const euroAtual = convertBRL.EURBRL.high
    const libraAtual = convertBRL.GBPBRL.high
    const bitcoinAtual = convertBRL.BTCBRL.high

    if(currencySelectConvert.value == "real"){
        console.log(currencySelectConvert.value)
        console.log(inputCurrencyValue.value)
           
              
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
      
            const convertUSD = await fetch("https://economia.awesomeapi.com.br/json/last/BRL-USD,EUR-USD,BTC-USD,GBP-USD").then(res => res.json())

            const realAtual = convertUSD.BRLUSD.high
            const euroAtual = convertUSD.EURUSD.high
            const libraAtual = convertUSD.GBPUSD.high
            const bitcoinAtual = convertUSD.BTCUSD.high

       
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
      
            
            const convertEUR = await fetch("https://economia.awesomeapi.com.br/json/last/BRL-EUR,USD-EUR,BTC-EUR,GBP-EUR").then(res => res.json())
            
            const realAtual = convertEUR.BRLEUR.high
            const dolarAtual = convertEUR.USDEUR.high
            const libraAtual = convertEUR.GBPEUR.high
            const bitcoinAtual = convertEUR.BTCEUR.high

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
      
            const convertGBP = await fetch("https://economia.awesomeapi.com.br/json/last/BRL-GBP,USD-GBP,EUR-GBP").then(res => res.json())
            
            const realAtual = convertGBP.BRLGBP.high
            const dolarAtual = convertGBP.USDGBP.high
            const euroAtual = convertGBP.EURGBP.high
            const bitcoinAtual = 51083.02 // Valor dia 04.18.2024 --> Ainda fazendo ajustes na API
        
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
            
            alert("Bitcoin ainda não está consumindo API em tempo real \n\n A página irá recarregar!")
            window.location.reload(true);
            // const convertBTC = await fetch("https://economia.awesomeapi.com.br/json/last/BRL-GBP,USD-GBP,EUR-GBP").then(res => res.json())
            
            // const realAtual = convertGBP.BRLGBP.high
            // const dolarAtual = convertGBP.USDGBP.high
            // const euroAtual = convertGBP.EURGBP.high
            // const libraAtual = 0.000020
        
            // const convertedReal = inputCurrencyValue.value / realAtual
            // const convertedDolar = inputCurrencyValue.value / dolarAtual
            // const convertedEuro = inputCurrencyValue.value / euroAtual
            // const convertedLibra = inputCurrencyValue.value / libraAtual
        
            // currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            //     style: "currency",
            //     currency: "BTC"
            // }).format(inputCurrencyValue.value)                 
        
            // if (currencySelectConverted.value == "real") {
            //     currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            //         style: "currency",
            //         currency: "BRL"
            //     }).format(convertedReal)
            // }
        
            // if (currencySelectConverted.value == "dolar") {
            //     currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            //         style: "currency",
            //         currency: "USD"
            //     }).format(convertedDolar)
            // }
            // if (currencySelectConverted.value == "euro") {
            //     currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            //         style: "currency",
            //         currency: "EUR"
            //     }).format(convertedEuro)
            // }
            // if (currencySelectConverted.value == "libra") {
            //     currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            //         style: "currency",
            //         currency: "GBP"
            //     }).format(convertedLibra)
            // }
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
    return changeFlagConvert
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






