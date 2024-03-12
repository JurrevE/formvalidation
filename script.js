const submitbutton = document.getElementById("submitbutton");
const email_input = document.getElementById("email");
const country = document.getElementById("country");
const zip_code = document.getElementById("zip-code");
const password = document.getElementById("password");
const password_confirmation = document.getElementById("password-confirmation");
const error = document.getElementById("error1");

function validateForm() {}
function validateEmail() {
  email_input.addEventListener("input", () => {
    if (!email_input.validity.valid) {
      if (email_input.validity.typeMismatch) {
        email_input.classList.add("error");
      }
      email_input.classList.add("error");
    } else {
      errorMessage.textContent = "";
      email_input.classList.remove("error");
    }
  });
}

validateEmail();
