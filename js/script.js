document.addEventListener("DOMContentLoaded", () => {
  fetch('https://637d41d916c1b892ebca9a5a.mockapi.io/api/discs')
    .then(response => {
      if (!response.ok) throw new Error("Erreur API");
      return response.json();
    })
    .then(albums => {
      // Filtrer l'album avec id 7
      const filteredAlbums = albums.filter(album => album.id !== "7");
      
      // Afficher les albums
      const itemsContainer = document.getElementById("items");
      
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
    .catch(error => console.error("Erreur:", error));
});


