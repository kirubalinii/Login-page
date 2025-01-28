// const form=document.getElementById("form")
// const firstname=document.getElementById("firstname")
// const email=document.getElementById("email")
// const password=document.getElementById("password")
// const repassword=document.getElementById("repassword")

// form.addEventListener("submit",(e)=>{
   
//     let error=[]

//     if(firstname){
//         error= signuperror(firstname.value ,email.value, password.value ,repassword.value)
//     }
//     else{
//         error=loginerror(email.value ,password.value)
//     }
//     if(error.length > 0){
//         e.preventDefault()  

//     }
// })
// function signuperror(firstname,email,password,repassword){
//     let error=[]
//     if(firstname===''||firstname==null){
//         error.push('firstname is required')
//         firstname.parentElement.classList.add('incorrect')
//     }

//     if(email===''||email==null){
//         error.push('email is required')
//         email.parentElement.classList.add('incorrect')
//     }

//     if(password===''||password==null){
//         error.push('password is required')
//         password.parentElement.classList.add('incorrect')
//     }

//     if(repassword===''||repassword==null){
//         error.push('password is required')
//         repassword.parentElement.classList.add('incorrect')
//     }
//     return error;
     
// }
const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const errormsg=document.getElementById("errormsg")

form.addEventListener("submit", (event) => {

    let error = [];

    // Check whether it's a signup form or a login form
    if (firstname && firstname.value !== undefined) {
        error = signuperror(firstname.value, email.value, password.value, repassword.value);
    } else {
        error = loginerror(email.value, password.value);
    }

    // Prevent form submission if there are errors
    if (error.length > 0) {
        event.preventDefault();
        errormsg.innerText=error.join("  ")
    }
});

function signuperror(firstnameValue, emailValue, passwordValue, repasswordValue) {
    let error = [];

    // Validate firstname
    if (firstnameValue === '' || firstnameValue == null) {
        error.push('Firstname is required');
        firstname.parentElement.classList.add('incorrect');
    } else {
        firstname.parentElement.classList.remove('incorrect');
    }

    // Validate email
    if (emailValue === '' || emailValue == null) {
        error.push('Email is required');
        email.parentElement.classList.add('incorrect');
    } else {
        email.parentElement.classList.remove('incorrect');
    }

    // Validate password
    if (passwordValue === '' || passwordValue == null) {
        error.push('Password is required');
        password.parentElement.classList.add('incorrect')
    }
     else {
        email.parentElement.classList.remove('incorrect');
    }
    if(passwordValue.length < 8){
        error.push('password must have at least 8 character')
        password.parentElement.classList.add('incorrect')

    }

    if ( passwordValue !== repasswordValue) {
        error.push('password does not match re-password');
        repassword.parentElement.classList.add('incorrect')
    }
     else {
        repassword.parentElement.classList.remove('incorrect');
    }
    return error;
}
