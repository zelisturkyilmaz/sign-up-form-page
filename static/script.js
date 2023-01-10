const password = document.getElementById("userPassword");
const passwordConfirm = document.getElementById("userPasswordConfirm");
const passwordError = document.querySelector(".error");
const passwordConfirmError = document.querySelector(".errorConfirm");


password.addEventListener("input", () => {
    if (password.validity.tooShort) {
        passwordError.textContent = "*Password should be min 8 characters.";
    } else {
        passwordError.textContent = "";
    }
    
})

passwordConfirm.addEventListener("input", () => {
    if (password.value !== passwordConfirm.value) {
        passwordConfirmError.textContent = "*Passwords do not match";
    } else {
        passwordConfirmError.textContent = "";
    }
})
