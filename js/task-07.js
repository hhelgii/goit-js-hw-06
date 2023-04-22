const text = document.getElementById("text");
const input = document.getElementById("font-size-control");
text.style.fontSize = input.value + "px";
input.addEventListener("input", changeTextSize);
function changeTextSize(event) {
  text.style.fontSize = event.target.value + "px";
}
