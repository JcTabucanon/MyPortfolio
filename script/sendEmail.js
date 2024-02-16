const form = document.querySelector('form');
const fname = document.getElementById('name');
const number = document.getElementById('number');
const email = document.getElementById('email');
const msg = document.getElementById('msg');

function sendEmail(){
   const bodyMsg = `<br>Fullname : ${fname.value}
                    <br>Phone    : ${number.value}
                    <br>Email    : ${email.value}
                    <br>Message  : ${msg.value}`;
   Email.send({
      Host : "smtp.elasticemail.com",
      Username : "jc.cuna1@gmail.com",
      Password : "2CEB59FB1F14C8EF2CAB08166BD8E9DAB462",
      To : 'jc.cuna1@gmail.com',
      From : 'jc.cuna1@gmail.com',
      Subject : "From Portfolio",
      Body : bodyMsg
  }).then(
    message => {
      if (message === "OK"){
         Swal.fire({
            title: "Successfull 👍",
            text: "Your message has been sent",
            icon: "success"
          });
      }
    }
  );
}

form.addEventListener('submit', (e) => {
   e.preventDefault();
   sendEmail();
});