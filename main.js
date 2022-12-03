const currentNumber = document.querySelector('.currentNumber');

const mathSign = document.querySelector('.mathSign');

const numbersButtons = document.querySelectorAll('.number,.last');

const operatorsButtons = document.querySelectorAll('.operator');

const equalesButton = document.querySelector('.equales');

const clearButton =  document.querySelector('.clear');



let result = "";

function displayNumbers(params) {
    currentNumber.innerHTML += this.textContent ;
    
}


function showResult(params) {
    let a = Number(currentNumber.innerHTML)
    if (a>0) {
        let result = a * 0.08 + '$';
    currentNumber.innerHTML = result
    }else{
        console.log("Podano za małą wartosc");
    }
    
}


function clearScreen(params) {
    result = '';
    currentNumber.innerHTML = '';
    previouseNumber.innerHTML = '';
    mathSign.innerHTML = ''
}






















//Nasluchiwanie przyciskow
operatorsButtons.forEach((button) => button.addEventListener('click', operate))


equalesButton.addEventListener('click', showResult);


clearButton.addEventListener('click', clearScreen);

numbersButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
})

