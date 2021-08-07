const value = document.querySelector('#value')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')

let counterValue = Number(value.textContent)


decrementBtn.addEventListener('click', decrementValue)

incrementBtn.addEventListener('click', incrementValue)

function decrementValue() {
    counterValue = counterValue - 1;
    value.textContent = counterValue
}

function incrementValue() {
    counterValue = counterValue + 1
    value.textContent = counterValue
}