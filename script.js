document.addEventListener("DOMContentLoaded", function () {
  const myForm = document.querySelector("#myForm");
  const password = myForm.querySelector("#password");
  const confirmPass = myForm.querySelector("#confirm-password");
  const submitButton = myForm.querySelector("#submitButton");
  const firstName = myForm.querySelector("#first-name");
  const emailField = myForm.querySelector(".email-field");
  const lastName = myForm.querySelector("#last-name");
  const phone = myForm.querySelector("#phone");
  const error = document.querySelector("#error");
  const errorElements = {
    firstName: document.querySelector(".firstNameError .error-text"),
    lastName: document.querySelector(".lastNameError .error-text"),
    email: document.querySelector(".emailError .error-text"),
    phone: document.querySelector(".phoneError .error-text"),
    password: document.querySelector(".passwordError .error-text"),
    confirmPassword: document.querySelector(
      ".confirmPasswordError .error-text"
    ),
  };

  // Check password using pattern on focus lost
  password.addEventListener("blur", function () {
    if (!CheckPassword(password.value)) {
      setError(errorElements.password, "Password pattern is incorrect");
    } else {
      setError(errorElements.password, "");
    }
  });

  // Set error messages
  function setError(element, message) {
    element.innerText = message;
  }

  // Clear error messages
  function clearErrors() {
    for (const key in errorElements) {
      setError(errorElements[key], "");
    }
  }

  // Check if the password fulfills the pattern
  function CheckPassword(password) {
    let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return pattern.test(password);
  }

  function validation() {
    clearErrors();

    if (firstName.value === "") {
      setError(
        errorElements.firstName,
        "** Please write your name in the Box**"
      );
    }

    if (lastName.value === "") {
      setError(
        errorElements.lastName,
        "** Please write your last name in the Box**"
      );
    }

    if (emailField.value === "") {
      setError(errorElements.email, "** Please write your email in the Box**");
    }

    if (phone.value === "") {
      setError(
        errorElements.phone,
        "** Please write your phone number in the Box**"
      );
    }

    if (!CheckPassword(password.value)) {
      setError(errorElements.password, "** Password format is incorrect**");
    }

    if (password.value !== confirmPass.value) {
      setError(errorElements.confirmPassword, "** Passwords don't match**");
    }
  }

  // Calling a function on Form Submit
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validation();
  });
});
