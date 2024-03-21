const email_input = document.getElementById("email");
const country_input = document.getElementById("country");
const zip_code_input = document.getElementById("zip-code");
const password_input = document.getElementById("password");
const password_confirmation_input = document.getElementById(
	"password-confirmation"
);

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

function validateZipCode() {
	if (!zip_code_input.validity.valid) {
		if (zip_code_input.validity.valueMissing) {
			zip_error.textContent = "Please enter a zip code.";
		} else {
			zip_error.textContent = "Please enter a correct zip code.";
		}
		zip_code_input.classList.add("error");
		zip_error.classList.add("show");
	} else {
		zip_code_input.classList.remove("error");
		zip_error.textContent = "";
		zip_error.classList.remove("show");
		zip_code_input.classList.add("good");
	}
}

function validateForm() {
	email_input.addEventListener("input", validateEmail);
	country_input.addEventListener("input", validateCountry);
	zip_code_input.addEventListener("input", validateZipCode);
}

validateForm();
