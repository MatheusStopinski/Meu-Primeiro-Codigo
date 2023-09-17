
let name = document.querySelector("#name");
let Labelname = document.querySelector("#Labelname");
let validname = false;

let Email = document.querySelector("#Email");
let LabelEmail = document.querySelector("#LabelEmail");
let validEmail = false;

let Password = document.querySelector("#Password");
let LabelPassword = document.querySelector("#LabelPassword");
let validPassword = false;

let ConfirmPassword = document.querySelector("#ConfirmPassword");
let LabelConfirmPassword = document.querySelector("#LabelConfirmPassword");
let validConfirmPassword = false;

let msgSuccess = document.querySelector('#msgSuccess')
let msgError = document.querySelector('#msgError')

let btn = document.querySelector("#SeePassword");
let btnConfirm = document.querySelector("#SeeConfirmPassword");

/* --------------------------------------- CAMPO DE FORMULÁRIO ------------------------------------- */

name.addEventListener("keyup", () => {
  if (name.value.length >= 1 && name.value.length <= 2) {
    Labelname.setAttribute('style', 'color: red');
    name.setAttribute('style', 'border-color: red');
    Labelname.innerHTML = '<strong style="font-weight: 480; text-shadow: 0 0 8px rgba(40, 40, 40, 9.0);">Name</strong>';
    validname = false;
  } else if (name.value.length >= 3) {
    Labelname.setAttribute('style', 'color: #1bd61b');
    name.setAttribute('style', 'border-color: #1bd61b');
    Labelname.innerHTML = '<strong style="font-weight: 480; text-shadow: 0 0 8px rgba(40, 40, 40, 9.0);">Name</strong>';
    validname = true;
    
  } else {
    Labelname.removeAttribute('style');
    name.removeAttribute('style');
    Labelname.innerHTML = 'Name';
    validname = true;
  }
});

Email.addEventListener('keyup', () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar o formato do e-mail

  if (Email.value === '') {
    LabelEmail.removeAttribute('style');
    Email.removeAttribute('style');
    LabelEmail.innerHTML = 'E-mail';
    validEmail = true;
  } else if (Email.value !== '' && emailRegex.test(Email.value)) {
    LabelEmail.setAttribute('style', 'color: #1bd61b');
    LabelEmail.innerHTML = '<strong style="font-weight: 480; text-shadow: 0 0 8px rgba(40, 40, 40, 9.0);">E-mail</strong>';
    Email.setAttribute('style', 'border-color: #1bd61b');
    validEmail = true;
  } else {
    LabelEmail.setAttribute('style', 'color: red');
    LabelEmail.innerHTML = '<strong style="font-weight: 480; text-shadow: 0 0 8px rgba(40, 40, 40, 9.0);">E-mail</strong>';
    Email.setAttribute('style', 'border-color: red');
    validEmail = false;
  }
});

Password.addEventListener('keyup', () => {
  if (Password.value.length >= 1 && Password.value.length <= 6) {
    LabelPassword.setAttribute('style', 'color: red');
    LabelPassword.innerHTML = '<strong style="font-weight: 480; text-shadow: 0 0 8px rgba(40, 40, 40, 9.0);">Password *More than 7 characters</strong>';
    Password.setAttribute('style', 'border-color: red');
    validPassword = false;
  } else if (Password.value.length > 6) {
    LabelPassword.setAttribute('style', 'color: #1bd61b');
    LabelPassword.innerHTML = '<strong style="font-weight: 480; text-shadow: 0 0 8px rgba(40, 40, 40, 9.0);">Password</strong>';
    Password.setAttribute('style', 'border-color: #1bd61b');
    validPassword = true;
  } else {
    LabelPassword.removeAttribute('style');
    Password.removeAttribute('style');
    LabelPassword.innerHTML = 'Password';
    validPassword = true;
  }
});

ConfirmPassword.addEventListener('keyup', () => {
  if (ConfirmPassword.value.length >= 1 && ConfirmPassword.value !== '') {
    if (ConfirmPassword.value !== Password.value) {
      LabelConfirmPassword.setAttribute('style', 'color: red');
      LabelConfirmPassword.innerHTML = '<strong style="font-weight: 480; text-shadow: 0 0 8px rgb(40, 40, 40,  9.0);">Confirm Password</strong>';
      ConfirmPassword.setAttribute('style', 'border-color: red');
      validConfirmPassword = false;
    } else {
      LabelConfirmPassword.setAttribute('style', 'color: #1bd61b');
      LabelConfirmPassword.innerHTML = '<strong style="font-weight: 480; text-shadow: 0 0 8px rgb(40, 40, 40,  9.0);">Confirm Password</strong>';
      ConfirmPassword.setAttribute('style', 'border-color: #1bd61b');
      validConfirmPassword = true;
    }
  } else {
    LabelConfirmPassword.removeAttribute('style');
    ConfirmPassword.removeAttribute('style');
    LabelConfirmPassword.innerHTML = 'Confirm Password';
    validConfirmPassword = true;
  }
});

/* -------------------------------------- FROM HTML TO JAVASCRIPT ---------------------------------------- */

function Register() {
  if (validname && validEmail && validPassword && validConfirmPassword) {
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
    
    listaUser.push({
      nameCad: name.value,
      emailCad: Email.value,
      passwordCad: Password.value,
    });
    
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser));
    
       
    
    msgSuccess.setAttribute('style', 'display: block');
    msgSuccess.innerHTML = '<strong> Sucesso! Redirecioando para o login....</strong>';
    msgError.setAttribute('style', 'display: none');
    msgError.innerHTML = '';
    

    
    setTimeout(() => {
    /* troca a localização da minha pagina */
    window.location.href = 'https://cdpn.io/pen/debug/xxQEYEB?authentication_hash=PNrvYgNEGPYM'
    },2803) /* delay de quase 3 segundos */
    
     
  
  } else {
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = '<strong>Complete all the fields correctly</strong>';
    msgSuccess.innerHTML = '';
    msgSuccess.setAttribute('style', 'display: none');
        
  }
}
    

/* ----------------------------- BTN'S = Botão do olho ------------------------------------- */

btn.addEventListener("click", () => {
 let inputPassword = document.querySelector("#Password");
 if (inputPassword.getAttribute("type") == "password") {
    inputPassword.setAttribute("type", "text");
} else {
    inputPassword.setAttribute("type", "password");
  }
 });
  
btnConfirm.addEventListener("click", () => {
  let inputConfirmPassword = document.querySelector("#ConfirmPassword")
  if (inputConfirmPassword.getAttribute("type") == "password") {
    inputConfirmPassword.setAttribute("type", "text")
  } else {
    inputConfirmPassword.setAttribute("type", "password")
  }
});
  