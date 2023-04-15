const refs = {
    value: document.getElementById('value'),
    btnDecrease: document.querySelector('[data-action="decrement"]'),
    btnIncrease: document.querySelector('[data-action="increment"]')
}
let counterValue=Number(refs.value.textContent);
refs.btnDecrease.addEventListener("click", decreaseFunc);
refs.btnIncrease.addEventListener("click", increaseFunc);
function decreaseFunc() {
    counterValue-=1;
    refs.value.textContent=counterValue.toString();
}
function increaseFunc() {
    counterValue+=1;
    refs.value.textContent=counterValue.toString();
}