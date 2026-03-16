const image = document.querySelector(".newsletter__image");
const card = document.querySelector(".newsletter__card");
const errorMessage = document.getElementById("error-email");
const email = document.getElementById("form-email");
// const success = document.querySelector(".is-hidden");
const success = document.querySelector(".newsletter__success");


function sendButton(event) {
  event.preventDefault()

  let hasError = false;

  const emailValue = email.value.trim();

  const required = 'This field is required';
  const errorEmail = 'Valid email required';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailValue) {
    errorMessage.classList.remove("is-hidden");
    errorMessage.textContent = required;
    errorMessage.classList.add("input-error");
    email.classList.remove("input-error");
    hasError = true;
  } else if (!emailRegex.test(emailValue)) {
    errorMessage.classList.remove("is-hidden");
    errorMessage.textContent = errorEmail;
    errorMessage.classList.add("input-error");
    email.classList.add("input-error");
    hasError = true;
  }

  if (!hasError) {
    // image.style.display = "none";
    image.classList.add("is-hidden");
    // card.style.display = "none";
    card.classList.add("is-hidden");
    // success.style.display = "grid";
    success.classList.remove("is-hidden");

    const addressEmail = document.querySelector(".newsletter__description span");
    addressEmail.textContent = emailValue;
  }
}

function backButton(event) {
  event.preventDefault()

  // image.style.display = "grid";
  image.classList.remove("is-hidden");
  // card.style.display = "grid";
  card.classList.remove("is-hidden");
  // success.style.display = "none";
  success.classList.add("is-hidden");
  // errorMessage.style.display = "none";
  errorMessage.classList.add("is-hidden");
  errorMessage.classList.remove("input-error");
  email.value = "";
  email.classList.remove("input-error");
  email.style.border = "1px solid var(--Grey)";
  // email.style.backgroundColor = "1px solid var(--White)";
  email.style.backgroundColor = "var(--White)";
}