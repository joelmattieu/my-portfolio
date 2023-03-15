const $name = document.getElementById("name");
const $email = document.getElementById("email");
const $subject = document.getElementById("subject");
const $message = document.getElementById("message");
const $form = document.getElementById("contact-form");

/* SHOW MESSAGE */

function showMessage(input, message) {
  let $span = input.parentElement.querySelector("span");
  let inputName = input.name[0].toUpperCase() + input.name.substring(1);
  $span.textContent = message;
}

function hideMessage(input) {
  let $span = input.parentElement.querySelector("span");
  $span.textContent = "";
}

//Check email is valid
function checkMail(input, e) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    hideMessage(input);
  } else {
    e.preventDefault();
    showMessage(input, "Email is not valid");
  }
}

//Check required fields
function checkRequired(inputArr, e) {
  let isValid = false;
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      e.preventDefault();
      showMessage(input, `${getFieldName(input)} is required`);
    } else {
      hideMessage(input);
      isValid = true;
    }
  });
  return isValid;
}

//Check input length
function checkLenght(input, min, max, e) {
  if (input.value.length < min) {
    e.preventDefault();
    showMessage(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    e.preventDefault();
    showMessage(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    hideMessage(input);
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

export default function validationForm() {
  document.addEventListener("submit", (e) => {
    if (e.target === $form) {
      if (checkRequired([$name, $email, $subject, $message], e)) {
        checkLenght($name, 3, 25, e);
        checkLenght($subject, 4, 15, e);
        checkLenght($message, 10, 255, e);
        checkMail($email, e);
      }
    }
  });
}
