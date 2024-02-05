const form = document.getElementById("myForm");
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');

//handle form submission
form.addEventListener('submit',handleSubmit);
function handleSubmit(event){
    event.preventDefault();
    // Validate form Input
    const isValid = validateForm();
    if(isValid){
        console.log("Form Submitted successfully");
        form.reset();
        nameError.textContent="";
        emailError.textContent="";
    }
}
// Validate form input
function validateForm(){
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    let isValid = true;
    console.log('nameValue,emailValue :>> ', nameValue,emailValue);
    if(nameValue === "" ){
        nameError.textContent="Name is required !" ;
        isValid = false;
    }else{
        nameError.textContent="";
    }

    if(emailValue === "" ){
        emailError.textContent="Email is required !" ;
        isValid = false;
    }else{
        emailError.textContent="";
    }

    return isValid;
}