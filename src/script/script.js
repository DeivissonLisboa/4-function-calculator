const digitBtns = document.querySelectorAll(".number")
const operationBtns = document.querySelectorAll(".operation")
const equalBtn = document.querySelector(".equal")
const clearBtn = document.querySelector(".clr")
const resultText = document.querySelector("#result")
const allBtns = document.querySelectorAll("button")

const calculator = new Calculator(resultText)

digitBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.appendNumber(btn.innerText)
    calculator.updateDisplay()
  })
})

operationBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.chooseOperation(btn.id)
  })
})

clearBtn.addEventListener("click", () => calculator.clear())
equalBtn.addEventListener("click", () =>
  calculator.compute(calculator.operation)
)

allBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.blinkDisplay()
  })
})
