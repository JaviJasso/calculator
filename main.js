const numbers = document.querySelectorAll(".btn")
const operaciones = document.querySelectorAll(".opt")
const clear = document.querySelectorAll(".clear")
const display = document.querySelector(".displayButton")
const equla = document.querySelectorAll(".equal")

let valor = ""

for (let i = 0; i < numbers.length; i++) {
  let current = numbers[i]
  console.log(current)
  current.addEventListener("click", () => {
    let value = current.innerText
    valor += value
    display.textContent = valor
  })
}
