const form = document.querySelector('#myForm')
const userName = form.elements[0]
const userLastName = form.elements[1]
const userEmail = form.elements[2]
const userPassword = form.elements[3]

const firstNameError = document.querySelector("#first-name-error")
const lastNameError = document.querySelector("#last-name-error")
const emailError = document.querySelector("#email-error")
const passwordError = document.querySelector("#password-error")
const emailMessage = document.querySelector("#email-message-error")

const errorMessage = (input, message) => {
	message.classList.remove('hidden');
	input.value = '';
	input.placeholder = '';
	input.classList.add('error');
}

const successMessage = (input, message) => {
	input.value = '';
	input.placeholder = '';
	message.classList.add('hidden');
	input.classList.add('successMessage');
}

const emailValidation = (input, message) => {
	message.classList.remove('hidden');
	input.value = '';
	input.placeholder = "email@example.com"
	input.classList.add('error');
}

form.onsubmit = e => {
	e.preventDefault();

	const re = /^([a-z\d\._-]+)@([a-z\d-_]+)\.([a-z]{2,8})([a-z]{2,8})?$/;

	if (!userName.value) {
		errorMessage(userName, firstNameError);
	} else {
		successMessage(userName, firstNameError);
	}
	if (!userLastName.value) {
		errorMessage(userLastName, lastNameError);
	} else {
		successMessage(userLastName, lastNameError);
	}
	if (!userEmail.value) {
		errorMessage(userEmail, emailError);
	} else if (!re.test(userEmail.value)) {
		emailValidation(userEmail, emailMessage);
	} else {
		successMessage(userEmail, emailError);
	}
	if (!userPassword.value) {
		errorMessage(userPassword, passwordError);
	} else {
		successMessage(userPassword, passwordError);
	}
}