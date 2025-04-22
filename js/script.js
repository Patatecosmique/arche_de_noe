// FILE: script.js
document.addEventListener("DOMContentLoaded", () => {
  const albums = [
    {"title":"Nevermind","artist":"Nirvana","year":"1991","cover_url":"https://img.lemde.fr/2021/08/25/0/0/2100/1400/664/0/75/0/6210db2_153692386-nevermindcover.jpg","price":"11.00","id":"0"},
    {"title":"Master of Puppets","artist":"Metallica","year":"1986","cover_url":"https://m.media-amazon.com/images/I/81j7xM-oijL.SL1400.jpg","price":"8.99","id":"1"},
    // ... (autres albums)
    {"title":"Playing the Angel","artist":"Depeche Mode","year":"2005","cover_url":"https://m.media-amazon.com/images/I/81Vbrv+RQUL._SL1412_.jpg","price":"14.50","id":"20"}
  ];

  const itemsContainer = document.getElementById("items");

  // Filtrer l'album avec id=7
  const filteredAlbums = albums.filter(album => album.id !== "7");

  // Générer le HTML pour chaque album
  filteredAlbums.forEach(album => {
    const albumElement = document.createElement("a");
    albumElement.href = `./product.html?id=${album.id}`;
    albumElement.innerHTML = `
      <article>
        <img src="${album.cover_url}" alt="${album.title}">
        <h3>${album.title}</h3>
        <p>${album.artist} (${album.year})</p>
        <p>Prix : ${album.price} €</p>
      </article>
    `;
    itemsContainer.appendChild(albumElement);
  });
});