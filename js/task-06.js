const input= document.getElementById('validation-input');
const length=input.getAttribute('data-length')
console.log(length)
input.addEventListener('blur', validateFunc);
function validateFunc(event) {
    if(event.target.value.length<length) {
        input.classList.add('invalid')
    }
    else {
        input.classList.add('valid')
    }
}