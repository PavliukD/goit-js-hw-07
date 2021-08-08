const inputEl = document.querySelector('#validation-input')
const inputElLength = Number(inputEl.dataset.length)



inputEl.addEventListener('blur', validationCheck)

function validationCheck(event) {
    if (inputElLength === event.currentTarget.value.length) {
       return inputEl.classList.add("valid")
    }

    inputEl.classList.add("invalid")
}

