const form = document.querySelector(".newsletter__form");
const emailInput = document.getElementById("form-email");
const errorMessage = document.getElementById("error-email");

const image = document.querySelector(".newsletter__image");
const card = document.querySelector(".newsletter__card");
const success = document.querySelector(".newsletter__success");
const dismissButton = document.getElementById("dismiss-button");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", sendButton);
dismissButton.addEventListener("click", resetForm);

function sendButton(event) {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  let error = "";

  if (!emailValue) {
    error = "This field is required";
  }
  else if (!emailRegex.test(emailValue)) {
    error = "Valid email required";
  }

  if (error) {
    showError(error);
    return;
  }

  showSuccess(emailValue);
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove("is-hidden");
  errorMessage.classList.add("input-error");

  emailInput.classList.add("input-error");
}

function showSuccess(emailValue) {
  image.classList.add("is-hidden");
  card.classList.add("is-hidden");
  success.classList.remove("is-hidden");

  const addressEmail = document.querySelector(".newsletter__description span");
  addressEmail.textContent = emailValue;
}

function resetForm() {
  image.classList.remove("is-hidden");
  card.classList.remove("is-hidden");
  success.classList.add("is-hidden");

  emailInput.value = "";
  emailInput.classList.remove("input-error");

  errorMessage.classList.add("is-hidden");
  errorMessage.classList.remove("input-error");
}