// Form Submit Event
document.getElementById("registrationForm").addEventListener("submit", function (event) {

    event.preventDefault();

    let nameValid = validateName();
    let emailValid = validateEmail();
    let phoneValid = validatePhone();
    let passwordValid = validatePassword();
    let confirmPasswordValid = validateConfirmPassword();

    if (
        nameValid &&
        emailValid &&
        phoneValid &&
        passwordValid &&
        confirmPasswordValid
    ) {
        alert("Registration Successful!");
        document.getElementById("registrationForm").reset();
    }
});

// Validate Name
function validateName() {
    let fullName = document.getElementById("fullName").value.trim();
    let error = document.getElementById("nameError");

    if (fullName.length < 5) {
        error.innerText = "Name must be at least 5 characters.";
        return false;
    }

    error.innerText = "";
    return true;
}

// Validate Email
function validateEmail() {
    let email = document.getElementById("email").value.trim();
    let error = document.getElementById("emailError");

    if (!email.includes("@")) {
        error.innerText = "Enter a valid email address.";
        return false;
    }

    error.innerText = "";
    return true;
}

// Validate Phone Number
function validatePhone() {
    let phone = document.getElementById("phone").value.trim();
    let error = document.getElementById("phoneError");

    if (
        phone.length !== 10 ||
        isNaN(phone) ||
        phone === "1234567890"
    ) {
        error.innerText = "Enter a valid 10-digit phone number.";
        return false;
    }

    error.innerText = "";
    return true;
}

// Validate Password
function validatePassword() {
    let password = document.getElementById("password").value.trim();
    let fullName = document.getElementById("fullName").value.trim();
    let error = document.getElementById("passwordError");

    if (
        password.length < 8 ||
        password.toLowerCase() === "password" ||
        password.toLowerCase() === fullName.toLowerCase()
    ) {
        error.innerText =
            "Password must be at least 8 characters and should not be 'password' or your name.";
        return false;
    }

    error.innerText = "";
    return true;
}

// Validate Confirm Password
function validateConfirmPassword() {
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let error = document.getElementById("confirmPasswordError");

    if (password !== confirmPassword) {
        error.innerText = "Passwords do not match.";
        return false;
    }

    error.innerText = "";
    return true;
}