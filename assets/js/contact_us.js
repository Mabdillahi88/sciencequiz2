
// all the questions and hints that will be used during this game
// This is not my code but modified it and I have credited it  the readme file

document
    .getElementById("contactFormNew")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // login details for email js
      
      const serviceID = "service_ucprvlr"; 
      const templateID = "template_nm94uz8";

// validation details for email js - undefined
      emailjs.sendForm(serviceID, templateID, this).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("FAILED...", error);
        }
      );
    });

// This is not my code but modified it and I have credited it  the readme file
// to make nav links more responsive
    function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

    