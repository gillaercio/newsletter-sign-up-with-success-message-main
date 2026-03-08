const image = document.querySelector(".newsletter__image");
const card = document.querySelector(".newsletter__card");
const errorMessage = document.getElementById("error-email");
const email = document.getElementById("form-email");
const success = document.querySelector(".is-hidden");


function sendButton(event) {
  event.preventDefault()

  let hasError = false;

  const required = 'This field is required';
  const errorEmail = 'Valid email required';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    errorMessage.textContent = required;
    errorMessage.classList.add("input-error");
    email.style.border = "1px solid var(--Red)";
    email.style.backgroundColor = "var(--Red-button)";
    hasError = true;
  } else if (!emailRegex.test(email.value.trim())) {
    errorMessage.textContent = errorEmail;
    errorMessage.classList.add("input-error");
    email.classList.add("input-error");
    hasError = true;
  }

  if (!hasError) {
    image.style.display = "none";
    card.style.display = "none";
    success.style.display = "grid";

    const addressEmail = document.querySelector(".newsletter__description span");
    addressEmail.textContent = email.value;
  }
}

function backButton(event) {
  event.preventDefault()

  image.style.display = "grid";
  card.style.display = "grid";
  success.style.display = "none";
  errorMessage.style.display = "none";
  errorMessage.classList.remove("input-error");
  email.value = "";
  email.classList.remove("input-error");
  email.style.border = "1px solid var(--Grey)";
  email.style.backgroundColor = "1px solid var(--White)";

  hasError = false;
}