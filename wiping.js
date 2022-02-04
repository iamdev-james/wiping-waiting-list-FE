window.scrollX = 0;
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

// RESPONSE VISUALIZATION
function resVil(responseRecieved) {
  if (responseRecieved == 'Email added') {
    Swal.fire({
      icon: 'success',
      title: 'Email Recieved Successfully',
      text: 'You will recieved a mail from us soon'
    })
    email ='';
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: responseRecieved + '!'
    })    
  }
}

// SBMITTING MAIL TO SERVER
function submitMail (e) {
  e.preventDefault();
  valEmail();
  let maildata = { email: email };
  
  Swal.fire({
    icon: 'info',
    title: 'Please wait while we save your Address',
    showConfirmButton: false
  })
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify( maildata );

  var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
  };

 fetch("https://wiping-waiting-list.herokuapp.com/add", requestOptions)
  .then(response => response.text())
  .then(result => resVil(JSON.parse(result).message))
  .catch(error => 
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Try to fill in your details again'
    }));
}