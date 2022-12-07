function sendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email.id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_ucprvlr", "template_nm94uz8", params).then(function (res) {
        alert("success!" + res.status);
    })
}