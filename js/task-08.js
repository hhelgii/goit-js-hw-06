const form= document.querySelector('.login-form');
// const email=document.querySelector('[name="email"]');
// const password=document.querySelector('[name="password"]');
form.addEventListener('submit', formFunction);
function formFunction(event) {
    event.preventDefault();
    const fieldsValues ={
        email:form.elements.email.value, 
        password:form.elements.password.value
    }
    if(form.elements.email.value===''||form.elements.password.value==='') {
        return alert('Fill all fields:)');
    }
    console.log(fieldsValues);
    form.reset();
}

