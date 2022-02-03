function submitMail (e) {
  e.preventDefault();
  let emailRecieved = document.querySelector('#email').value;
  
  let maildata = { email: emailRecieved };
  
  console.log(emailRecieved)
//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   var raw = JSON.stringify( maildata );

//   var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
//   };

//  fetch("http://localhost:4400/add", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
}