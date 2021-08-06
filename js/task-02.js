const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



const ingredientsList = ingredients.map(ingredient => {
  const listElement = document.createElement('li');
  listElement.textContent = ingredient;
  return listElement
});


const ingredientsUl = document.querySelector('#ingredients');

ingredientsUl.append(...ingredientsList)