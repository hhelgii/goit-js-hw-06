const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// const fragment=document.createDocumentFragment();
const listContainer = document.getElementById("ingredients");
const markup = ingredients.map(ingredient => {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");
  return element;
});
listContainer.append(...markup);