const inputEl = document.querySelector('#validation-input')
const inputElLength = Number(inputEl.dataset.length)



inputEl.addEventListener('blur', validationCheck)

function validationCheck(event) {
    console.log('blur')
    if (inputElLength === event.currentTarget.value.length) {
        inputEl.classList.remove("invalid")
        return inputEl.classList.add("valid")
    }
    
    inputEl.classList.remove("valid")
    inputEl.classList.add("invalid")
}

