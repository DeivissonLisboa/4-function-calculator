const displayResult = document.getElementById("result")
const digits = document.querySelectorAll(".digit")

let cache = ""

digits.forEach((digit) => {
  digit.addEventListener("click", (e) => {
    digitClick(e.target.id)
  })
})

function digitClick(key) {
  switch (key) {
    case "digitCLR":
      clearDisplay()
      return
    case "digitONE":
      cache += 1
      break
    case "digitTWO":
      cache += 2
      break
    case "digitTHREE":
      cache += 3
      break
    case "digitFOUR":
      cache += 4
      break
    case "digitFIVE":
      cache += 5
      break
    case "digitSIX":
      cache += 6
      break
    case "digitSEVEN":
      cache += 7
      break
    case "digitEIGHT":
      cache += 8
      break
    case "digitNINE":
      cache += 9
      break
    case "digitZERO":
      if (!cache || cache === "0") {
        return
      }
      cache += 0
      break
    case "digitDOT":
      cache += "."
      break
    default:
      return
  }

  updateDisplay(cache)
}

function checkInput(input) {
  input = input.toString()

  if (
    input < 0 &&
    input.includes(".") &&
    input.replace("-", "").replaceAll(".", "").length > 7
  ) {
    input = input.slice(1, 6)
  } else if (input < 0) {
    input = input.slice(0, 7)
  } else if (input.length > 6) {
    input = input.slice(0, 6)
  }

  return input
}

function clearDisplay() {
  cache = ""
  updateDisplay(0)
}

function updateDisplay(input) {
  const result = checkInput(input)
  displayResult.innerHTML = result
}

updateDisplay(0)
