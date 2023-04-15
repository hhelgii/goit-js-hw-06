const input=document.getElementById('name-input');
const output=document.getElementById('name-output');
input.addEventListener('input', setName);
function setName(event) {
    // const output=document.getElementById('name-output');
    
    const name=event.target.value.trim();
    output.textContent=name?name:'Anonymous';
}