document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const serviceID = "service_ucprvlr";
      const templateID = "template_nm94uz8";

      // send the email here
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