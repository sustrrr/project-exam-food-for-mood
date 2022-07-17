var navbar = document.querySelector(".navbar");
var ham = document.querySelector(".ham");

function toggleHamburger() {
  navbar.classList.toggle("showNav");
  ham.classList.toggle("showClose");
}

ham.addEventListener("click", toggleHamburger);

const forms = document.querySelector("#newsletter--form");
const emails = document.querySelector("#email");
const errors = document.querySelector("#emailNewsletterError");
const successMessages = document.querySelector(".success_text_newsletter");

function validateNewsletter(event) {
  event.preventDefault();

  if (validateEmails(emails.value) === true) {
    errors.style.display = "none";
    successMessages.style.display = "block";
    emails.value = "";
  } else {
    errors.style.display = "block";
  }
}

forms.addEventListener("submit", validateNewsletter);

function validateEmails(emails) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(emails);
  return patternMatches;
}
