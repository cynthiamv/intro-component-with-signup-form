const form = document.querySelector('#myForm')
const userName = form.elements[0]
const userLastName = form.elements[1]
const userEmail = form.elements[2]
const userPassword = form.elements[3]

const firstNameError = document.querySelector("#first-name-error")
const lastNameError = document.querySelector("#last-name-error")
const emailError = document.querySelector("#email-error")
const passwordError = document.querySelector("#password-error")

const errorMessage = (input, message) => {
	message.classList.remove('hidden');
	input.placeholder = '';
	input.classList.add('error');
}

const successMessage = (input, message) => {
	input.placeholder = '';
	message.classList.add('hidden');
	input.classList.add('successMessage');
}

form.onsubmit = e => {
	e.preventDefault()
	console.log(userLastName)
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
	} else {
		successMessage(userEmail, emailError);
	}
	if (!userPassword.value) {
		errorMessage(userPassword, passwordError);
	} else {
		successMessage(userPassword, passwordError);
	}
}
