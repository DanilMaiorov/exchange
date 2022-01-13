//let usd = document.querySelector('#usd')

const currency = document.querySelector('.currency')
const radio = document.querySelectorAll('input[type=radio]')

const amountInput = document.querySelector('#amount')
const amountTotalInput = document.querySelector('#total-amount')
//const btn = document.querySelector('#btn')

const getData = () => {
    return fetch ('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(res => {
        res.json().then(data => {
            calculate(data)
        })
    })
}


const calculate = (money) => {
    //console.log(Object.entries(money.Valute))
    Object.entries(money.Valute).forEach(moneyItem => {
        moneyItem.forEach(valueItem => {
            console.log(valueItem)
            radio.forEach(radioItem => { 
            //console.log(item.parentNode.innerText.includes(value.CharCode))
                if(radioItem.parentNode.innerText.includes(valueItem.CharCode)) {
                    radioItem.value = valueItem.Value 
                    //console.log(item.value)
                    currency.addEventListener('click', () => {
                        //console.log(valueItem.Name)
                        if(radioItem.checked === true) {
                            amountTotalInput.value = (amountInput.value * radioItem.value).toFixed(2)
/*                             btn.addEventListener('click', () => {
                                amountTotalInput.value = (amountInput.value * radioItem.value).toFixed(2)
                                console.log(amountTotalInput.value);
                            })  */
                            amountInput.addEventListener('input', () => {
                                amountTotalInput.value = (amountInput.value * radioItem.value).toFixed(2)
                            }) 
                        } 
                    })
                }
            })  
        })
    }) 
}

const validation = () => {
    amountInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.match(/^[0-9\.]+/g); 
    })
}

getData()
validation()

//https://www.cbr-xml-daily.ru/daily_json.js

/* const selector = document.querySelector('#selector')
const optionUsd = document.querySelector('#usd')
const optionEur = document.querySelector('#eur') */

/* const calculate = (money) => {

     selector.addEventListener('change', () => {
        optionUsd.value = money.Valute.USD.Value
        console.log(typeof optionUsd.value)
        optionEur.value = money.Valute.EUR.Value
        console.log(typeof optionEur.value)
        console.log(selector.options[selector.selectedIndex].value)
        amountTotalInput.value = (amountInput.value * selector.value).toFixed(2)
    }) 
        btn.addEventListener('click', () => {
            amountTotalInput.value = (amountInput.value * selector.value).toFixed(2)
            console.log(amountTotalInput.value);
        }) 
        amountInput.addEventListener('input', () => {
            amountTotalInput.value = (amountInput.value * selector.value).toFixed(2)
        })
} */