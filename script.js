document.addEventListener("DOMContentLoaded", function () {
  const myForm = document.querySelector("#myForm");
  const password = myForm.querySelector("#password");
  const confirmPass = myForm.querySelector("#confirm-password");
  const submitButton = myForm.querySelector("#submitButton");
  const firstName = myForm.querySelector("#first-name");
  const emailField = myForm.querySelector(".email-field");
  const last_name = myForm.querySelector("#last-name");
  const phone = myForm.querySelector("#phone");
  const error = document.querySelector("#error");
  const firstNameError = document.querySelector(".firstNameError .error-text");
  const lastNameError = document.querySelector(".lastNameError .error-text");
  const phoneError = document.querySelector(".phoneError .error-text");
  const emailError = document.querySelector(".emailError .error-text");
  const passError = document.querySelector(".passwordError .error-text");
  const confirmpassError = document.querySelector(
    ".confirmPasswordError .error-text"
  );

  // Email Validation
  function CheckPassword(password) {
    let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return pattern.test(password);
  }

  function validation() {
    if (firstName.value === "") {
      firstNameError.innerText = "** Please write your name in the Box**";
    } else {
      firstNameError.innerText = "";
    }

    if (last_name.value === "") {
      lastNameError.innerText = "** Please write your last name in the Box**";
    } else {
      lastNameError.innerText = "";
    }

    if (emailField.value === "") {
      emailError.innerText = "** Please write your email in the Box**";
    } else {
      emailError.innerText = "";
    }

    if (phone.value === "") {
      phoneError.innerText = "** Please write your phone number in the Box**";
    } else {
      phoneError.innerText = "";
    }

    if (!CheckPassword(password.value)) {
      passError.innerText = "** Password format is incorrect**";
    } else {
      passError.innerText = "";
      errorIcon.style.display = "none";
      //    TODO:
      // Dodać errorIcon uzywajac DOM'a
      // Implementacja automatycznego wyboru ikony zależnie od miejsca w którym wystepuje błąd
    }
  }

  // Calling a function on Form Submit
  myForm.addEventListener("submit", (e) => {
    let messages = [];
    if (firstName.value === "" || firstName.value === null) {
      messages.push("Name is required");
    }
    if (messages.length > 0) {
      e.preventDefault();
      error.innerText = messages.join(", ");
    }
  });

  myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (CheckPassword(password.value) && password.value === confirmPass.value) {
      confirmpassError.innerText = "** Passwords match**";
    } else {
      confirmpassError.innerText = "** Passwords don't match**";
    }
  });
});
