const input = document.querySelector('input');
const result = document.querySelector('.result');
let resultStringEqual = " ";
let numbers = [ ];

function addNumber() {
    const { value } = input;

    numbers.push(Number(value));
    console.log(numbers);

    showNumbersOnScreen();
}
function showNumbersOnScreen() {
    let numbersString = " ";
    numbers.forEach((number, index) => {
        if (!index) {
            numbersString += `${number}`;
         } else {
            numbersString += ` + ${number}`;
        }
    })
    result.innerHTML = numbersString;
    resultStringEqual = result.innerHTML
    input.value = "";
}
function sum () {
    let count = 0;

    for (let index = 0; index < numbers.length; index++) {
        count += numbers[index];
    }
    result.innerHTML = resultStringEqual + " = " + count;
}
function reset() {
    numbers = [ ];
    let reset = 0
    result.innerHTML = reset
}