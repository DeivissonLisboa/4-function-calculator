class Calculator {
  constructor(display) {
    this.display = display
    this.clear()
  }

  clear() {
    this.currentOperand = ""
    this.operation = ""
    this.hasOperaton = false
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

    if (this.hasOperaton) {
      this.currentOperand = number.toString()
      this.hasOperaton = false
    } else {
      this.currentOperand += number.toString()
    }
  }

  chooseOperation(operation) {
    if (!this.currentOperand) {
      this.currentOperand = 0
    }

    if (this.operation) {
      this.compute(this.operation)
    }

    switch (operation) {
      case "opSUM":
        this.operation += this.currentOperand + "+"
        break
      case "opSUB":
        this.operation += this.currentOperand + "-"
        break
      case "opTIMES":
        this.operation += this.currentOperand + "*"
        break
      case "opDIV":
        this.operation += this.currentOperand + "/"
        break
      case "opPCT":
        break
      case "opSQR":
        break
      default:
        break
    }

    console.log(this.operation)

    this.hasOperaton = true
  }

  compute(operation) {}

  updateDisplay() {
    if (this.currentOperand === "") {
      this.display.innerText = 0
    } else {
      this.display.innerText = this.currentOperand
    }
  }
}
