let email;

// CHECKING FOR THE VALID EMAIL
function valEmail() {
  let emailRecieved_M = document.querySelector('#email_M').value;
  let emailRecieved_D = document.querySelector('#email_D').value;
  if (emailRecieved_D){
    email = emailRecieved_D;
  } else {
    email = emailRecieved_M;
  }
}

// SBMITTING MAIL TO SERVER
function submitMail (e) {
  e.preventDefault();
  valEmail();
}