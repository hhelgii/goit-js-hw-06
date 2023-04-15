function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body=document.body;
const btn=document.querySelector('.change-color');
const insertColor=document.querySelector('.color')
btn.addEventListener('click', changeColor);
function changeColor() {
  const color=getRandomHexColor();
  body.style.backgroundColor=color;
  insertColor.textContent=color;
}