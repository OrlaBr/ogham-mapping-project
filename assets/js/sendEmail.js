function sendMail(contactForm) {
  email.js.send("gmail", "ogham-mapping", {
      "from_name": contactForm.name.value,
      "from_email": contactForm.emailaddress.value,
      "contact_message": contactForm.contactsummary.value
  })
    .then(
        function(response) {
          console.log("Success", response);
        },
        function(error) {
          console.log("Failed", error);
        });
}