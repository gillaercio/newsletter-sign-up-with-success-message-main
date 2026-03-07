const image = document.querySelector(".newsletter__image");
const card = document.querySelector(".newsletter__card");
const errorMessage = document.getElementById("error-email");
const email = document.getElementById("form-email");
const success = document.querySelector("newsletter__success");


function sendButton(event) {
  event.preventDefault()

  let hasError = false;

  const required = 'This field is required';
  const errorEmail = 'Valid email required';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    errorMessage.textContent = required;
    errorMessage.classList.add("input-error");
    email.style.border = "2px solid var(--Red)";
    hasError = true;
  } else if (!emailRegex.test(email.value.trim())) {
    errorMessage.textContent = errorEmail;
    errorMessage.classList.add("input-error");
    email.classList.add("input-error");
    hasError = true;
  }

}