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
      // Sélectionner les éléments HTML pour afficher les informations
      const albumTitle = document.querySelector(".album-title");
      const albumImage = document.querySelector(".album-image");
      const albumArtist = document.querySelector(".album-artist");
      const albumYear = document.querySelector(".album-year");
      const albumPrice = document.querySelector(".album-price");
      const albumDescription = document.querySelector(".album-description");

      // Mettre à jour les informations de l'album dans la page
      if (albumTitle) albumTitle.textContent = album.title;
      if (albumImage) albumImage.src = album.cover_url;
      if (albumImage) albumImage.alt = album.title;
      if (albumArtist) albumArtist.textContent = `Artiste : ${album.artist}`;
      if (albumYear) albumYear.textContent = `Année : ${album.year}`;
      if (albumPrice) albumPrice.textContent = `Prix : ${album.price} €`;
      if (albumDescription) albumDescription.textContent = album.description;
    })
    .catch(error => console.error("Erreur :", error.message));
});