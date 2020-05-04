const currentValue = '0';
const inputCalc = document.querySelector('.calc-field');
const inputBtn = document.querySelector('.calc-buttons');

inputBtn.addEventListener('click', clickHandler);
// console.log('inputCalc:', inputCalc);
// console.log('inputBtn:', inputBtn);

// console.log('clickHandler():', clickHandler());


function clickHandler(event) {

    if (event.target && event.target.value)
        inputCalc.value += event.target.value;

    console.log('event: ', event);

    {
        switch (event.target.value) {
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
            case ',':
                setInputValue();
                break;
            case 'C':
                clearInputValue();
                break;
            case '+':
                plusInputValue();
                break;
            case '-':
                minusValues();
                break;
            case '*':
                multiplyValues();
                break;
            case '/':
                devidedValues();
                break;
            case '=':
                resultValue();
                break;
        }
    }


}



// function clickHandler(event) {
//     currentValue +- event.target.dataset.value;
//     inputCalc.value - currentValue;
//     console.log('event.target.dataset.value: ', event.target.dataset.value);
//     // console.log('inputCalc.value: ', inputCalc.value);
// }


// function clickHandler(event) {

//     if (event.target && event.target.dataset && event.target.dataset.value) {

//         switch (event.target.dataset.value) {
//             case '0':
//             case '1':
//             case '2':
//             case '3':
//             case '4':
//             case '5':
//             case '6':
//             case '7':
//             case '8':
//             case '9':
//             case ',':
//                 setInputValue(event.target.dataset.value);
//                 break;
//             case 'C':
//                 clearInputValue();
//                 break;
//             case '+':
//                 plusInputValue();
//                 break;

//             case '-':
//                 minusValues();
//                 break;
//             case '*':
//                 multiplyValues();
//                 break;
//             case '/':
//                 devidedValues();
//                 break;
//             case '=':
//                 resultValue();
//                 break;
//         }
//     }

// }

// function setInputValue(value) {
//     currentValue += value;
//     inputCalc.value = currentValue;
// }

// function clearInputValue() {
//     currentValue = '';
//     inputCalc.value = currentValue;
// }


// function plusInputValue(value) {
//     currentValue += value;
//     inputCalc.value = currentValue;

// }



// function minusValues(value) {
//     currentValue += value;
//     inputCalc.value = currentValue;
// }

// function multiplyValues(value) {
//     currentValue += value;
//     inputCalc.value = currentValue;
// }

// function devidedValues(value) {
//     currentValue += value;
//     inputCalc.value = currentValue;
// }


// function resultValue(value) {
//     currentValue += value;
//     inputCalc.value = currentValue;

// }