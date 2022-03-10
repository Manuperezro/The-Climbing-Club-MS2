// email.js
function sendMail2(params) { 
    var tempParams ={
        from_name:document.getElementById('name'.value),
        email:document.getElementById('emailAddress'.value),
        message:document.getElementById('text'.value),
        phone_number:document.getElementById('phoneNumber'.value)
    };

    emailjs.send('service_0yg5pn8', 'template_opd47s5', tempParams)
    .then(function(res){
        console.log('success', res.status);
        alert("Email sent successfully!");
    },
    function(error) {
        alert("FAILED!"+error);
     }
   );
   return false;
}