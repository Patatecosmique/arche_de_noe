document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");

  // Fonction pour afficher ou masquer un message d'erreur
  const setError = (input, message) => {
    const errorElement = input.nextElementSibling;
    if (message) {
      errorElement.textContent = message;
      errorElement.style.display = "block";
    } else {
      errorElement.textContent = "";
      errorElement.style.display = "none";
    }
  };

  // Vérification du champ "Nom"
  nameInput.addEventListener("input", () => {
    if (nameInput.value.trim() === "") {
      setError(nameInput, "Le champ Nom est requis.");
    } else {
      setError(nameInput, "");
    }
  });

  // Vérification du champ "Email"
  emailInput.addEventListener("input", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      setError(emailInput, "Le champ Email est requis.");
    } else if (!emailRegex.test(emailInput.value.trim())) {
      setError(emailInput, "Veuillez entrer une adresse email valide.");
    } else {
      setError(emailInput, "");
    }
  });

  // Vérification du champ "Message"
  messageInput.addEventListener("input", () => {
    if (messageInput.value.trim() === "") {
      setError(messageInput, "Le champ Message est requis.");
    } else {
      setError(messageInput, "");
    }
  });

  // Vérification globale lors de la soumission
  form.addEventListener("submit", (event) => {
    let isValid = true;

    if (nameInput.value.trim() === "") {
      setError(nameInput, "Le champ Nom est requis.");
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      setError(emailInput, "Le champ Email est requis.");
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      setError(emailInput, "Veuillez entrer une adresse email valide.");
      isValid = false;
    }

    if (messageInput.value.trim() === "") {
      setError(messageInput, "Le champ Message est requis.");
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault(); // Empêcher l'envoi du formulaire si des erreurs existent
    }
  });
});