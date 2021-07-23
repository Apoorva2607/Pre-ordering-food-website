const loginBtn = document.querySelectorAll(".login-btn"),
      registerBtn = document.querySelectorAll(".register-btn"),
      lostPassBtn = document.querySelectorAll(".lost-pass-btn"),
      box = document.querySelector(".box"),
      loginForm= document.querySelector(".login-form"),
      registerForm= document.querySelector(".register-form"),
      lostPasswordForm = document.querySelector(".lost-password-form");


registerBtn.forEach((btn) =>{
    btn.addEventListener("click",() =>{
    box.classList.add("slide-active");
    registerForm.classList.remove("form-hidden");
    loginForm.classList.add("form-hidden");
    lostPasswordForm.classList.add("form-hidden");

    });
}); 

loginBtn.forEach((btn) =>{
    btn.addEventListener("click",() =>{
    box.classList.remove("slide-active");
    registerForm.classList.add("form-hidden");
    loginForm.classList.remove("form-hidden");
    lostPasswordForm.classList.add("form-hidden");
    });
}); 

lostPassBtn.forEach((btn) =>{
    btn.addEventListener("click",() =>{
    registerForm.classList.add("form-hidden");
    loginForm.classList.add("form-hidden");
    lostPasswordForm.classList.remove("form-hidden");
    });
}); 

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

function validated()
{
    if (email.value.length < 9){
        email.style.border ="1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (password.value.length < 9){
        password.style.border ="1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
}