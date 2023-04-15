function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  fragment: document.createDocumentFragment(),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  input: document.querySelector('[type="number"]'),
  boxes: document.getElementById("boxes"),
};

refs.input.addEventListener("input", create);

refs.destroyBtn.addEventListener("click", destroy);

function create(event) {
  refs.createBtn.addEventListener("click", createBoxes(event.target.value));
}
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const size = 30 + 10 * i + "px";
    const element = document.createElement("div");
    element.style.width = size;
    element.style.height = size;
    element.style.backgroundColor = getRandomHexColor();
    refs.fragment.appendChild(element);
  }
  refs.boxes.appendChild(refs.fragment);
}
function destroy() {
  refs.boxes.innerHTML = "";
}
refs.boxes.style.display="flex";
refs.boxes.style.flexWrap="wrap";