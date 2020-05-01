let currentValue = '';
let inputCalc = document.querySelector('.calc-field');
// console.log('inputCalc:', inputCalc);
let inputBtn = document.querySelector('.calc-buttons');
// console.log('inputBtn:', inputBtn);


function clickHandler(event) {
    if (event.target && event.target.dataset && event.target.dataset.value) {
        
        switch (event.target.dataset.value) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case ',': setInputValue(event.target.dataset.value); break;
            case 'C': clearInputValue(); break;
            case '+': plusValues(event.target.dataset.value); break;
            case '-': minusValues(event.target.dataset.value); break;
            case '*':multiplyValues(event.target.dataset.value); break;
            case '÷':devidedValues(event.target.dataset.value); break;
            case '=':resultValue(event.target.dataset.value); break;
        }
    }
    
}

function setInputValue (value) {
    currentValue += value;
    inputCalc.value = currentValue;
    // console.log('currentValue:', currentValue);
    // console.log('value:', value);
    // console.log(' inputCalc.value:',  inputCalc.value);
}

function clearInputValue() {
    currentValue = '';
    inputCalc.value = currentValue;
}


