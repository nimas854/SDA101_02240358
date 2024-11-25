const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submitBtn = document.getElementById("submitBtn");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

function validateUsername() {
    if (username.value.length >= 3) {
        usernameError.textContent = "";
        return true;
    } else {
        usernameError.textContent = "Username must be at least 3 characters long.";
        return false;
    }
}

function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email.value)) {
        emailError.textContent = "";
        return true;
    } else {
        emailError.textContent = "Please enter a valid email address.";
        return false;
    }
}

function validatePassword() {
    const passwordPattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[\W_]).{8,}$/;
    if (passwordPattern.test(password.value)) {
        passwordError.textContent = "";
        return true;
    } else {
        passwordError.textContent = "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character.";
        return false;
    }
}

function validateConfirmPassword() {
    if (password.value === confirmPassword.value) {
        confirmPasswordError.textContent = "";
        return true;
    } else {
        confirmPasswordError.textContent = "Passwords do not match.";
        return false;
    }
}

function validateForm() {
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    submitBtn.disabled = !(isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid);
}


username.addEventListener("input", validateForm);
email.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);
confirmPassword.addEventListener("input", validateForm);


document.getElementById("registrationForm").addEventListener("submit", function (event) {
    if (submitBtn.disabled) {
        event.preventDefault();
    }
});