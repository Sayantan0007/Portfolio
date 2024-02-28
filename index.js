let tablinks = document.querySelectorAll(".tab-links");
let tabcontents = document.querySelectorAll(".tab-contents");
let cross = document.querySelector(".fa-circle-xmark");
let menuBar = document.querySelector(".fa-bars");
let sideMenu = document.querySelector("#sideMenu");
let nameText = document.querySelector("#name-text");
let button = document.querySelector(".btn3");

//Connecting Email JS
button.addEventListener("click", (event) => {
   if (!form.checkValidity()) {
        // If the form is not valid, let the browser handle default validation behavior
        return;
   }
  event.preventDefault();
  button.innerHTML = "sending...";
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_py1kwwc", "template_34hpkrb", params).then((res) => {
    button.innerHTML = "Submit";
    alert("Email sent successfully!" + res.status);
    document.getElementById("form").reset();
  })
  .catch((err) =>{
    button.innerHTML = "Submit";
    alert("Error sending email." + err.status);
  })
});

// on every load it will rotate my name
window.addEventListener("load", () => {
  nameText.classList.add("rotate");
});

//side menu bar when in responsive mode
menuBar.addEventListener("click", (e) => {
  sideMenu.style.right = "0px";
});
cross.addEventListener("click", () => {
  sideMenu.style.right = "-150px";
});

//diif tabs for about me section
tablinks.forEach((tablink) => {
  tablink.addEventListener("click", (e) => {
    for (const tablink of tablinks) {
      tablink.classList.remove("active-links");
    }
    for (let tabcont of tabcontents) {
      tabcont.classList.remove("show-content");
    }
    e.currentTarget.classList.add("active-links"); //to show the active links
    document
      .getElementById(e.currentTarget.getAttribute("data-target"))
      .classList.add("show-content"); //to show individual content;
  });
});
