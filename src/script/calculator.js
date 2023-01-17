class Calculator {
  constructor(display) {
    this.display = display
    this.previuos = ""
    this.clear()
  }

  clear() {
    this.display = ""
    this.previuos = ""
    this.operation = undefined
  }

  appendNumber(number) {}

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {}
}
