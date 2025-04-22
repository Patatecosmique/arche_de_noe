// FILE: contact.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", event => {
    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();
    let isValid = true;

    // Vérification des champs
    if (!name) {
      alert("Le nom est requis.");
      isValid = false;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Veuillez entrer une adresse email valide.");
      isValid = false;
    }

    if (!message) {
      alert("Le message est requis.");
      isValid = false;
    }

    // Empêcher la soumission si invalide
    if (!isValid) {
      event.preventDefault();
    }
  });
});