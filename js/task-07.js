const text=document.getElementById('text');
const input=document.getElementById('font-size-control');
input.addEventListener('input', changeTextSize);
function changeTextSize(event) {
    text.style.fontSize=event.target.value+'px';
}