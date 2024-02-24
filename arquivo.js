const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")



function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value 
    
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueToConverted = document.querySelector(".currency-value")

    
   
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.29
    const bitcoinToday = 253294.78

    if(currencySelect.value == 'dolar'){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }
    if (currencySelect.value == 'euro'){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }
    if (currencySelect.value == 'libra'){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style:"currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);
    }
    if (currencySelect.value == 'bitcoin'){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat ("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday);
    }

 
    

    

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue) 
    
}

function changeCurrency(){
    
    const currencyname = document.getElementById("currencyname")
    const currencyimg = document.querySelector('.currency-img-')


    if(currencySelect.value = 'dolar'){
        currencyname.innerHTML = 'Dólar Americano'
        currencyimg.src = "./assets/dolar.png"     
    }
    if(currencySelect.value = 'euro'){
        currencyname.innerHTML = 'Euro'
        currencyimg.src = './assets/euro.png'
    }
    if  (currencySelect.value = 'libra'){
        currencyname.innerHTML = 'Libra'
        currencyimg.src = './assets/libra 1.png'
    }
    if (currencySelect.value = 'bitcoin'){
        currencyname.innerHTML = 'Bitcoin'
        currencyimg.src = './assets/bitcoin 1.png'
    }

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency )



convertButton.addEventListener("click", convertValues)


