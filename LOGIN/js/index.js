let btn = document.querySelector(".fa-eye");
btn.addEventListener("click", () => {
  let inputPassword = document.querySelector("#Password");

  if (inputPassword.getAttribute("type") == "password") {
    inputPassword.setAttribute("type", "text");
  } else {
    inputPassword.setAttribute("type", "password");
  }
});

function Enter() {
  let usuario = document.querySelector("#usuario");
  let userLabel = document.querySelector("#userLabel");
  let Password = document.querySelector("#Password");
  let PasswordLabel = document.querySelector("#PasswordLabel");

  let msgError = document.querySelector("#msgError");
  let listaUser = [];

  let userValid = {
    name: "",
    Password: ""
  };

  listaUser = JSON.parse(localStorage.getItem("listaUser"));

  listaUser.forEach((item) => {
    if (usuario.value == item.nameCad && Password.value == item.PasswordCad) {
      userValid = {
        name: item.nameCad,
        Password: item.PasswordCad,
      };
    }
  });

  if (usuario.value === "" && Password.value === "") {
    resetUserField();
    resetPasswordField();
  } else if (usuario.value === "" || Password.value === "") {
    if (usuario.value === "") {
      resetUserField();
    } else {
      resetPasswordField();
    }
  } else if (
    usuario.value == userValid.name &&
    Password.value == userValid.Password
  ) {
    window.location.href = '../../assets/html/signin.html'

    let token =
      Math.random().toString(16).substr(2) +
      Math.random().toString(16).substr(2);

    localStorage.setItem("token", token); /* localStorage só aceita string */
    localStorage.setItem("userLogado", JSON.stringify(userValid));
  } else {
    userLabel.setAttribute("style", "color: #ce0000");
    userLabel.innerHTML =
      '<strong style="font-weight: 480; text-shadow: 0 0 8px rgba(40, 40, 40, 9.0);">User</strong>';
    usuario.setAttribute("style", "border-color: red");

    PasswordLabel.setAttribute("style", "color: #ce0000");
    PasswordLabel.innerHTML =
      '<strong style="font-weight: 480; text-shadow: 0 0 8px rgba(40, 40, 40, 9.0);">Password</strong>';
    Password.setAttribute("style", "border-color: red");
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML =
      "<strong style='font-weight: 570; text-shadow: 0 0 8px rgba(9, 13, 34, 0.2);'>User or Password are incorrect</strong>";
    msgError.classList.add("error-message");
    msgError.style.display = "block";
    usuario.focus();
  }
}

let usuario = document.querySelector("#usuario");
let Password = document.querySelector("#Password");
let userLabel = document.querySelector("#userLabel");
let PasswordLabel = document.querySelector("#PasswordLabel");
let msgError = document.querySelector("#msgError");

// Manipulador de evento para o campo de usuário
usuario.addEventListener("input", () => {
  if (usuario.value === "") {
    resetUserField();
  }
});

// Manipulador de evento para o campo de senha
Password.addEventListener("input", () => {
  if (Password.value === "") {
    resetPasswordField();
  }
});

// Função para redefinir o campo de usuário
function resetUserField() {
  userLabel.removeAttribute("style");
  usuario.removeAttribute("style");
  msgError.removeAttribute("style");
  userLabel.innerHTML = "User";
}

// Função para redefinir o campo de senha
function resetPasswordField() {
  PasswordLabel.removeAttribute("style");
  Password.removeAttribute("style");
  msgError.removeAttribute("style");
  PasswordLabel.innerHTML = "Password";
}
