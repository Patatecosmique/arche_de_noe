document.addEventListener("DOMContentLoaded", () => {
  // Récupérer l'ID de l'album depuis l'URL
  const params = new URLSearchParams(window.location.search);
  const albumId = params.get("id");

  if (!albumId) {
    console.error("Aucun ID d'album trouvé dans l'URL.");
    return;
  }

  // Récupérer les informations de l'album via l'API
  fetch(`https://637d41d916c1b892ebca9a5a.mockapi.io/api/discs/${albumId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des informations de l'album.");
      }
      return response.json();
    })
    .then(album => {
      // Mettre à jour les informations de l'album dans la page
      const titleElement = document.getElementById("title");
      const coverElement = document.getElementById("cover").querySelector("img");
      const artistElement = document.getElementById("artist");
      const yearElement = document.getElementById("year");
      const priceElement = document.getElementById("price");

      if (titleElement) titleElement.textContent = album.title;
      if (coverElement) {
        coverElement.src = album.cover_url;
        coverElement.alt = album.title;
      }
      if (artistElement) artistElement.textContent = album.artist;
      if (yearElement) yearElement.textContent = album.year;
      if (priceElement) priceElement.textContent = `${album.price} €`;
    })
    .catch(error => console.error("Erreur :", error.message));
});