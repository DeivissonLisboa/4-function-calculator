const digitBtns = document.querySelectorAll(".numbers")
const operationBtns = document.querySelectorAll(".operations")
const equalBtn = document.querySelector(".equal")
const clearBtn = document.querySelector(".clr")
const resultText = document.querySelector("#result")

const calculator = new Calculator(resultText)
