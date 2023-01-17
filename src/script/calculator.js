class Calculator {
  constructor(display) {
    this.display = display
    this.clear()
  }

  clear() {
    this.currentOperand = ""
    this.previuosOperand = ""
    this.operation = undefined
    this.updateDisplay()
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return

    if (this.currentOperand.includes(".") && this.currentOperand.length > 6) {
      return
    } else if (
      !this.currentOperand.includes(".") &&
      this.currentOperand.length >= 6
    ) {
      return
    }

    this.currentOperand += number.toString()
  }

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {
    if (this.currentOperand === "") {
      this.display.innerText = 0
    } else {
      this.display.innerText = this.currentOperand
    }
  }
}
