// email.js
function sendMail2(params) { 
    var tempParams ={
        from_name:document.getElementById('name'.value),
        to_name:document.getElementById('emailAddress'.value),
        message:document.getElementById('text'.value),
    };

    emailjs.send('service_0yg5pn8', 'template_opd47s5', tempParams)
    .then(function(res){
        console.log('success', res.status);
        alert("Email sent successfully!");
    },
    function(error) {
        //console.log("FAILED", error);
        alert("FAILED!"+error);
     }
   );
}