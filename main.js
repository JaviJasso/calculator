let numbers = document.querySelectorAll(".btn")
let operators = document.querySelectorAll(".opt")
let clear = document.querySelector(".clearing")
let display = document.querySelector(".displayButton")
let equal = document.querySelector(".equal")

let valor = ""
let operator = ""
let x = ""
let y = ""

for (let i = 0; i < numbers.length; i++) {
  let current = numbers[i]
  console.log(current)
  current.addEventListener("click", () => {
    let value = current.innerText
    valor += value // <====Cambia elvalor y pon como haras el X y Y para todas las opreaciones
    display.textContent = valor
  })
}

for (let i = 0; i < operators.length; i++) {
  let current = operators[i]
  console.log(current)
  current.addEventListener("click", () => {
    operator = current.textContent
    console.log(operator)
  })
}

equal.addEventListener("click", () => {
  if (operator === "+") {
    result = parseInt(x) + parseInt(y)
  } else if (operator === "-") {
    result = parseInt(x) - parseInt(y)
  } else if (operator === "*") {
    result = parseInt(x) * parseInt(y)
  } else if (operator === "/") {
    result = parseInt(x) / parseInt(y)
  }
  display.textContent = result
})

clear.addEventListener("click", () => {
  valor = ""
  display.textContent = valor
})
