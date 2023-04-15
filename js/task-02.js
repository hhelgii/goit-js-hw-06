const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const fragment=document.createDocumentFragment();
const listContainer=document.getElementById('ingredients');
ingredients.forEach(ingredient => {
  const element= document.createElement('li');
  element.textContent=ingredient;
  element.classList.add('item');
  fragment.appendChild(element);
  
});
listContainer.appendChild(fragment);