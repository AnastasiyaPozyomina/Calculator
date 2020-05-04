'use strict';

const currentValue = 0;
const inputCalc = document.querySelector('.calc-field');
const inputBtn = document.querySelector('.calc-buttons');

inputBtn.addEventListener('click', clickHandler);




function clickHandler(event) {

    if (event.target && event.target.value)
        inputCalc.value += event.target.value;


    // console.log('inputCalc.value: ', inputCalc.value);

    {
        switch (event.target.value) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                console.log('event.target.value: ', event.target.value);
            case ",":
                break;
            case "C":
                clearInputValue();
                break;
            case "←":
                backspaceInputValue();
                break;
            case "+":
                plusInputValue(event.target.value);
                break;
            case "-":
                minusValues(event.target.value);
                break;
            case '*':
                multiplyValues(event.target.value);
                break;
            case '/':
                devidedValues(event.target.value);
                break;
            case '=':
                resultValue(event.target.value);
                break;

        }
    }


}


// function setInputValue(value) {


// }

function clearInputValue() {
inputCalc.value = currentValue;
currentValue = '';

}


function backspaceInputValue() {
inputCalc.value = inputCalc.value.substring(0,inputCalc.value.length - 2);

}

// function plusInputValue(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i;
//     }
//     return sum;
// }







// function minusValues(value) {
//     currentValue -= value;
//     inputCalc.value = currentValue;
// }

// function multiplyValues(value) {
//     currentValue *= value;
//     inputCalc.value = currentValue;
// }

// function devidedValues(value) {
//     currentValue /= value;
//     inputCalc.value = currentValue;
// }