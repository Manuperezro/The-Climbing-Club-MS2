// email.js
function sendMail(params) { 
    var tempParams ={
        from_name:document.getElementById('name'.value),
        email:document.getElementById('emailAddress'.value),
        message:document.getElementById('text'.value)
    };

    emailjs.send('service_0yg5pn8', 'template_tti6rf9', tempParams)
    .then(function(res){
        alert("Email sent successfully!");
    },
    function(error) {
        alert("Ops something went wrong"+error);
     }
   );
   return false;
}
