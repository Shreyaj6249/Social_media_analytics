// Step 1: get the elements we need from the page
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const messageBox = document.getElementById("messageBox");
const loginBtn = document.getElementById("loginBtn");

// Demo credentials (sample only, NOT real authentication)
const demoEmail = "demo@gmail.com";
const demoPassword = "12345";

// Function to check if an email looks correct
function isValidEmail(email) {
    let atPosition = email.indexOf("@");
    let lastDot = email.lastIndexOf(".");

    if (email.indexOf(" ") !== -1) {
        return false;          // spaces are not allowed
    }
    if (atPosition < 1) {
        return false;          // no @, or @ is the first character
    }
    if (lastDot < atPosition + 2) {
        return false;          // no dot after the @ (like gmail.com)
    }
    if (lastDot === email.length - 1) {
        return false;          // dot is the last character
    }
    return true;
}

// Function to show a message in the message box
function showMessage(text, styleClass) {
    messageBox.innerText = text;
    messageBox.className = "message-box " + styleClass;
    messageBox.style.display = "block";
}

// Step 2: run this code when the Login button is clicked
loginBtn.addEventListener("click", function () {

    // clear old errors first
    emailError.innerText = "";
    passwordError.innerText = "";
    messageBox.style.display = "none";

    // read what the user typed
    let email = emailInput.value.trim();
    let password = passwordInput.value;

    // check the fields one by one
    let allOk = true;

    if (email === "") {
        emailError.innerText = "Please enter your email.";
        allOk = false;
    } else if (isValidEmail(email) === false) {
        emailError.innerText = "Please enter a valid email address.";
        allOk = false;
    }

    if (password === "") {
        passwordError.innerText = "Please enter your password.";
        allOk = false;
    }

    // if the fields are fine, check the demo credentials
    if (allOk === true) {
        if (email === demoEmail && password === demoPassword) {
            window.location.href = "dashboard.html";
        } else {
            showMessage("Wrong email or password. Please try again.", "message-error");
        }
    }
});