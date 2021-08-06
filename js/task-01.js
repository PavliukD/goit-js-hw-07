const categories = document.querySelectorAll('.item');

console.log(`В списке ${categories.length} категории`);



categories.forEach(category =>{
    const categoryName = category.querySelector("h2");
    console.log(`Категория: ${categoryName.textContent}`);
    
    const numberOfElements = category.querySelectorAll("li");
    console.log(`Количество элементов: ${numberOfElements.length}`);
})