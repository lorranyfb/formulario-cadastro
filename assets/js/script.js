const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirm");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})

function checkUsername(){
  const usernameValue = username.value;

  if (usernameValue === ""){
    errorInput(username, "Insira seu nome")
  } else {
    const formItem = username.parentElement;
    formItem.className = "form-content"
  }
}

function checkEmail(){
  const emailValue = email.value;

  if (emailValue === ""){
    errorInput(email, "Insira um email")
  } else {
    const formItem = email.parentElement;
    formItem.className = "form-content"
  }
}

function checkPassword(){
  const passwordValue = password.value;

  if (passwordValue === ""){
    errorInput(password, "Insira uma senha")
  } else if (passwordValue.length < 6){
    errorInput(password, "A senha precisa ter no mínimo 6 caracteres.")
  } else {
    const formItem = password.parentElement;
    formItem.className = "form-content"
  }
}

function checkPasswordConfirmation(){
  const passwordValue = password.value;
  const confirmationPasswordValue = passwordConfirmation.value;

  if (confirmationPasswordValue === ""){
    errorInput(passwordConfirmation, "Confirme a sua senha")
  } else if (confirmationPasswordValue !== passwordValue){
    errorInput(passwordConfirmation, "As senhas não são iguais.")
  } else {
    const formItem = passwordConfirmation.parentElement;
    formItem.className = "form-content"
  }
}

function checkForm(){
  checkUsername();
  checkEmail();
  checkPassword();
  checkPasswordConfirmation();

  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  });

  if (isValid){
    alert("Cadastro realizado!")
  } 
}

function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"
}