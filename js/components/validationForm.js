const $name = document.getElementById("name");
const $email = document.getElementById("email");
const $subject = document.getElementById("subject");
const $message = document.getElementById("message");
const $form = document.getElementById("contact-form");

/* SHOW MESSAGE */

function showMessage(input, message) {
  let $span = input.parentElement.querySelector("span");
  let inputName = input.name[0].toUpperCase() + input.name.substring(1);
  $span.textContent = `${inputName} ${message}`;
}

function checkAll(input, min, max, e, regex) {
  if (!input.value.match(regex)) {
    showMessage(input, "is not valid");
    e.preventDefault();
  }

  if (input.value === "") {
    showMessage(input, "is required");
    e.preventDefault();
  }

  if (input.value.length < min && input.value.length !== 0) {
    showMessage(input, `must contain more than ${min} characters`);
    e.preventDefault();
  }

  if (input.value.length > max) {
    showMessage(input, `must contain less than ${max} characters`);
    e.preventDefault();
  }
}

/* START VALIDATIONS */

function validateName(input, e) {
  let regexName =
    /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;

  checkAll(input, 5, 15, e, regexName);
}

function validateEmail(input, e) {
  let regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  checkAll(input, 5, 50, e, regexEmail);
}

function validateSubject(input, e) {
  let regexSubject =
    /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;

  checkAll(input, 5, 15, e, regexSubject);
}

function validateMessage(input, e) {
  checkAll(input, 15, 255, e);
}

export default function validationForm() {
  document.addEventListener("submit", (e) => {
    if (e.target === $form) {
      validateName($name, e);
      validateEmail($email, e);
      validateSubject($subject, e);
      validateMessage($message, e);
    }
  });
}
