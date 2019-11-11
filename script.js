// import { parse } from "path";

let memory = 0, buffer = '', operation
const screen = document.querySelector(".screen")

function clearBuffer() {
    buffer = ''
}
function calcMath() {

    switch (operation) {
        case '+':
            memory += parseInt(buffer)
            break;

        case "-":
            memory -= parseInt(buffer)
            break;
        case "×":
            memory *= parseInt(buffer)
            break;
        case "÷":
            memory /= parseInt(buffer)
            break;
    }

    buffer = memory
    onScreen(memory)
}

function calcOperator(value) {
    switch (value) {
        case 'C':
            buffer = '0'
            memory = 0
            screen.setAttribute('data-value', 0)
            onScreen(0)
            break;

        case '=':
            calcMath()
            break;

        case "+":
        case "-":
        case "×":
        case "÷":
            operation = value
            onScreen(0);
            memory = parseInt(buffer)
            clearBuffer()
        default:
            break;
    }
}

function displayNumber(number) {
    if (buffer == '0') clearBuffer()
    buffer += number
    screen.setAttribute('data-value', buffer)
    onScreen(buffer)
}

function buttonClick(value) {
    if (isNaN(value) || value == '%') calcOperator(value)
    else displayNumber(value)
}

function onScreen(number) {
    screen.innerText = number
}

function init() {
    document.querySelector('.calculator').addEventListener('click', event => {
        const target = event.target.closest('button')
        if (!target) return
        buttonClick(target.value);
    })
}

init();
