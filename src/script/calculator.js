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

  checkLength() {
    if (
      this.currentOperand.toString().includes(".") &&
      this.currentOperand.length > 7
    ) {
      return
    } else if (
      !this.currentOperand.toString().includes(".") &&
      this.currentOperand.length >= 6
    ) {
      return
    }

    return 1
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.toString().includes(".")) return

    if (!this.checkLength() && !this.newOperaton) return

    if (this.newOperaton) {
      this.currentOperand = number.toString()
      this.newOperaton = false
    } else {
      this.currentOperand += number.toString()
    }
  }

  chooseOperation(operation) {
    this.limiter = true

    if (!this.currentOperand) {
      this.currentOperand = 0
    }

    if (this.operation.match(/\w/)) {
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
        this.limiter = false
        this.operation += +this.currentOperand / 100 + "*"
        break
      case "opSQR":
        this.limiter = false
        this.compute(this.currentOperand + "**0.5", false)
        break
      default:
        break
    }

    this.newOperaton = true
  }

  compute(operation, now = true) {
    if (!operation) {
      return
    }

    if (now) operation += this.currentOperand

    try {
      this.currentOperand = eval(operation.replace(/[\W]$/, "")).toString()
    } catch (err) {
      this.currentOperand = "Error"
    }

    this.operation = ""
    this.newOperaton = true

    if (!this.limiter && this.currentOperand.length > 6) {
      this.currentOperand = this.currentOperand.slice(0, 7)
    } else if (this.currentOperand.length > 8) {
      this.currentOperand = "Error"
    }

    this.updateDisplay()
  }

  updateDisplay() {
    if (this.currentOperand === "") {
      this.display.innerText = 0
    } else if (!this.checkLength()) {
      this.display.innerText = this.currentOperand.slice(0, 6)
    } else {
      this.display.innerText = this.currentOperand
    }
  }

  blinkDisplay() {
    this.display.style.visibility = "hidden"
    setTimeout(() => {
      this.display.style.visibility = "visible"
    }, 100)
  }
}
