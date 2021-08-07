const visitorName = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')

visitorName.addEventListener('input', changeName)
console.log(visitorName)



function changeName(event) {
 
    if (event.currentTarget.value === '') {
       return nameOutput.textContent = "незнакомец"
    }

    nameOutput.textContent = event.currentTarget.value

}