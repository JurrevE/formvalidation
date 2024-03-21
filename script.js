document.addEventListener(
  "invalid",
  function () {
    event.preventDefault();
  },
  true
);

const email_input = document.getElementById("email");
const country_input = document.getElementById("country");
const zip_code_input = document.getElementById("zip-code");
const password_input = document.getElementById("password");
const password_confirmation_input = document.getElementById(
  "password-confirmation"
);
const submitbutton = document.getElementById("submitbutton");

const email_error = document.querySelector(".email-error");
const country_error = document.querySelector(".country-error");
const zip_error = document.querySelector(".zip-error");
const password_error = document.querySelector(".password-error");
const pwc_error = document.querySelector(".pwc-error");

function validateEmail() {
  if (!email_input.validity.valid) {
    email_input.classList.add("error");
    email_error.classList.add("show");
    email_error.textContent = "Please enter a valid email address.";
  } else {
    email_input.classList.remove("error");
    email_error.textContent = "";
    email_error.classList.remove("show");
    email_input.classList.add("good");
  }
}

function validateCountry() {
  if (!country_input.validity.valid) {
    if (country_input.validity.valueMissing) {
      country_error.textContent = "Please enter a country.";
    } else if (country_input.value.match(/\d/)) {
      country_error.textContent = "Country name should not contain numbers.";
    } else if (country_input.validity.tooShort) {
      country_error.textContent = "No countries with less than 4 characters.";
    } else if (country_input.validity.tooLong) {
      country_error.textContent = "No countries with more than 56 characters.";
    }
    country_input.classList.add("error");
    country_error.classList.add("show");
  } else {
    country_input.classList.remove("error");
    country_error.textContent = "";
    country_error.classList.remove("show");
    country_input.classList.add("good");
  }
}

function validateZip() {
  const zipRegex = /^[1-9]\d{3}\s?[a-zA-Z]{2}$/;
  const zipCode = zip_code_input.value.trim();

  if (!zipRegex.test(zipCode)) {
    zip_error.textContent = "Please enter a valid zip code.";
    zip_code_input.classList.add("error");
    zip_error.classList.add("show");
    zip_code_input.classList.remove("good");
  } else {
    zip_error.textContent = "";
    zip_code_input.classList.remove("error");
    zip_error.classList.remove("show");
    zip_code_input.classList.add("good");
  }
}

function validatePasswords() {
  let password = password_input.value;
  let confirmedpassword = password_confirmation_input.value;
  if (password !== confirmedpassword) {
    password_input.classList.remove("good");
    password_confirmation_input.classList.remove("good");
    password_error.textContent = "Passwords do not match!";
    pwc_error.textContent = "Passwords do not match!";
    password_error.classList.add("error", "show");
    pwc_error.classList.add("error", "show");
    password_input.classList.add("error");
    password_confirmation_input.classList.add("error");
  } else {
    password_error.textContent = "";
    pwc_error.textContent = "";
    password_input.classList.remove("error");
    password_confirmation_input.classList.remove("error");
    password_input.classList.add("good");
    password_confirmation_input.classList.add("good");
  }
}

function validateForm() {
  email_input.addEventListener("input", validateEmail);
  country_input.addEventListener("input", validateCountry);
  zip_code_input.addEventListener("input", validateZip);
  password_confirmation_input.addEventListener("input", validatePasswords);

  submitbutton.addEventListener("click", function (event) {
    event.preventDefault();
    if (
      email_input.classList.contains("good") &&
      country_input.classList.contains("good") &&
      zip_code_input.classList.contains("good") &&
      password_input.classList.contains("good") &&
      password_confirmation_input.classList.contains("good")
    ) {
      alert("High five! Form submitted successfully.");
    } else {
      alert("Please fill in all fields correctly.");
    }
  });
}

validateForm();
