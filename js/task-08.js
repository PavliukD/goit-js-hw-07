const controlsEl = document.querySelector('#controls')
const boxesEl = document.querySelector('#boxes')
const renderBtnEl = document.querySelector('[data-action="render"]')
const destroyBtnEl = document.querySelector('[data-action="destroy"]')
const inputEl = controlsEl.querySelector("input")
const createdElements = []
function random() {
    return Math.round(Math.random() * (256 - 0) + 0)
} 



renderBtnEl.addEventListener('click', onCreateElements)
destroyBtnEl.addEventListener('click', onDestroyElements)

function onCreateElements(event) {
onDestroyElements()
    for (let i = 0; i < inputEl.value; i += 1){
        const widthAndHeigth = 30 + 10 * i
        const newElement = document.createElement('div')
        newElement.style.display = "block"
        newElement.style.width = `${widthAndHeigth}px`
        newElement.style.height = `${widthAndHeigth}px`
        newElement.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`
        createdElements.push(newElement)
    }


    boxesEl.append(...createdElements)

}

function onDestroyElements(){
    const elForDestroy = boxesEl.querySelectorAll("div")
    elForDestroy.forEach(element => boxesEl.removeChild(boxesEl.firstChild))
    createdElements.splice(0, createdElements.length)
}




