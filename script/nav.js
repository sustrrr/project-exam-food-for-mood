var navbar = document.querySelector(".navbar");
var ham = document.querySelector(".ham");

function toggleHamburger() {
  navbar.classList.toggle("showNav");
  ham.classList.toggle("showClose");
}

ham.addEventListener("click", toggleHamburger);

const forms = document.querySelector("#newsletter--form");
const emails = document.querySelector("#email");
const validate = document.querySelector(".validateemail");

function validateNewsletter(event) {
  event.preventDefault();

  if (validateEmails(emails.value) === true) {
    validate.innerHTML = `<p class="success">You are signed up</p>`;
  } else {
    validate.innerHTML = `<p class="error">Please provide an email</p>`;
  }
}

forms.addEventListener("submit", validateNewsletter);

function validateEmails(emails) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(emails);
  return patternMatches;
}
