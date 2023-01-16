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
      cache += 0
      break
  }

  updateDisplay(cache)
}

function clearDisplay() {
  cache = ""
  updateDisplay(0)
}

function updateDisplay(str) {
  if (str.length > 6) {
    str = str.slice(0, 6)
  }
  displayResult.innerHTML = str
}
