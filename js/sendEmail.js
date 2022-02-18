function sendMail(contactForm) { 
    emailjs.send("The Climbing Club", "template_tti6rf9", { 
        "from-email": contactForm.emailaddress.value,
        "project_request": contactForm.text.value
    })
    .then(
        function(response) { 
            console.log("SUCCESS", response);
        },
        function(error) { 
            console.log("FAILED", error);
        });
}

