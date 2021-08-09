const controlsEl = document.querySelector('#controls')
const boxesEl = document.querySelector('#boxes')
const renderBtnEl = document.querySelector('[data-action="render"]')
const destroyBtnEl = document.querySelector('[data-action="destroy"]')
const inputEl = controlsEl.querySelector("input")
const createdElements = []



renderBtnEl.addEventListener('click', onCreateElements)
destroyBtnEl.addEventListener('click', onDestroyElements)

function onCreateElements(event) {
    for (let i = 0; i < inputEl.value; i += 1){
        const widthAndHeigth = 30 + 10 * i
        const red = Math.round(Math.random() * (256 - 0) + 0)
        const green = Math.round(Math.random() * (256 - 0) + 0)
        const blue = Math.round(Math.random() * (256 - 0) + 0)
        const newElement = document.createElement('div')
        newElement.style.display = "block"
        newElement.style.width = `${widthAndHeigth}px`
        newElement.style.heigth = `${widthAndHeigth}px`
        newElement.style.backgroundColor = `rgb(${red},${green},${blue})`
        createdElements.push(newElement)
        console.dir(newElement)
    }


    boxesEl.append(...createdElements)

}

function onDestroyElements(event){
    const elForDestroy = boxesEl.querySelectorAll("div")
    elForDestroy.forEach(element => boxesEl.removeChild(boxesEl.firstChild))
}


