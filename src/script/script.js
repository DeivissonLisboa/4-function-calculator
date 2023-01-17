const digitBtns = document.querySelectorAll(".number")
const operationBtns = document.querySelectorAll(".operations")
const equalBtn = document.querySelector(".equal")
const clearBtn = document.querySelector(".clr")
const resultText = document.querySelector("#result")

const calculator = new Calculator(resultText)

digitBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    calculator.appendNumber(btn.innerText)
    calculator.updateDisplay()
  })
})
