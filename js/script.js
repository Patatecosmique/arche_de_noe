document.addEventListener("DOMContentLoaded", () => {
  // Récupérer les albums via l'API
  fetch('https://637d41d916c1b892ebca9a5a.mockapi.io/api/discs')
    .then(response => {
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des albums");
      }
      return response.json();
    })
    .then(albums => {
      // Filtrer l'album avec id 7
      const filteredAlbums = albums.filter(album => album.id !== "7");

      // Sélectionner le conteneur pour afficher les albums
      const itemsContainer = document.getElementById("items");
      if (!itemsContainer) {
        console.error("Le conteneur avec l'ID 'items' est introuvable.");
        return;
      }

      // Générer le HTML pour chaque album filtré
      filteredAlbums.forEach(album => {
        const albumElement = document.createElement("a");
        albumElement.href = `./product.html?id=${album.id}`;
        albumElement.innerHTML = `
          <article>
            <img src="${album.cover_url || './images/default-cover.jpg'}" alt="${album.title}">
            <h3 class="productName">${album.title} - ${album.artist}</h3>
            <p class="productDescription">${album.price} €</p>
          </article>
        `;
        itemsContainer.appendChild(albumElement);
      });
    })
    .catch(error => console.error("Erreur :", error.message));
});