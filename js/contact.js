document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const inputs = {
    name: document.querySelector("#name"),
    email: document.querySelector("#email"),
    message: document.querySelector("#message")
  };

  const setError = (input, message) => {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
    errorElement.style.display = message ? "block" : "none";
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Validation en temps réel
  Object.entries(inputs).forEach(([key, input]) => {
    input.addEventListener("input", () => {
      if (!input.value.trim()) {
        setError(input, `Le champ ${key} est requis`);
      } else if (key === "email"document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const inputs = {
    name: document.querySelector("#name"),
    email: document.querySelector("#email"),
    message: document.querySelector("#message")
  };

  const setError = (input, message) => {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
    errorElement.style.display = message ? "block" : "none";
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Validation en temps réel
  Object.entries(inputs).forEach(([key, input]) => {
    input.addEventListener("input", () => {
      if (!input.value.trim()) {
        setError(input, `Le champ ${key} est requis`);
      } else if (key === "email"