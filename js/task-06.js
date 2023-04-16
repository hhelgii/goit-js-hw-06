const input= document.getElementById('validation-input');
const length=Number(input.getAttribute('data-length'));
input.addEventListener('blur', validateFunc);
function validateFunc(event) {
    const valueLength = event.target.value.trim().length;
    if(valueLength!==length) {
        input.classList.add('invalid')
        input.classList.remove('valid')
        
    }
    else {
        input.classList.add('valid')
        input.classList.remove('invalid')
        
    }
}
