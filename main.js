let numbers = document.querySelectorAll(".btn")
let operators = document.querySelectorAll(".opt")
let clear = document.querySelector(".clearing")
let display = document.querySelector(".displayButton")
let equal = document.querySelector(".equal")

let valor = ""
let operator = ""
let x = 0
let y = 0

for (let i = 0; i < numbers.length; i++) {
  let current = numbers[i]
  current.addEventListener("click", () => {
    // let value = current.innerText
    // valor += value // <====Cambia elvalor y pon como haras el X y Y para todas las opreaciones
    display.textContent += current.innerText
  })
}

for (let i = 0; i < operators.length; i++) {
  let current = operators[i]
  current.addEventListener("click", () => {
    operator = current.textContent
    x = parseInt(display.textContent) // display.textContent is a string but we need x to be a number - parseInt converts the text to a number
    display.textContent = ""
  })
}

equal.addEventListener("click", () => {
  y = parseInt(display.textContent)
  if (operator === "+") {
    result = x + y
  } else if (operator === "-") {
    result = x - y
  } else if (operator === "*") {
    result = x * y
  } else if (operator === "/") {
    result = x / y
  } else {
    display.textContent = "Err"
  }
  display.textContent = ""
  display.textContent = result
})

clear.addEventListener("click", () => {
  display.textContent = ""
})
