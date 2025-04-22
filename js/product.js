// FILE: product.js
document.addEventListener("DOMContentLoaded", () => {
  const albums = [
    {"title":"Nevermind","artist":"Nirvana","year":"1991","cover_url":"https://img.lemde.fr/2021/08/25/0/0/2100/1400/664/0/75/0/6210db2_153692386-nevermindcover.jpg","price":"11.00","id":"0"},
    {"title":"Master of Puppets","artist":"Metallica","year":"1986","cover_url":"https://m.media-amazon.com/images/I/81j7xM-oijL.SL1400.jpg","price":"8.99","id":"1"},
    // ... (autres albums)
    {"title":"Playing the Angel","artist":"Depeche Mode","year":"2005","cover_url":"https://m.media-amazon.com/images/I/81Vbrv+RQUL._SL1412_.jpg","price":"14.50","id":"20"}
  ];

  const params = new URLSearchParams(window.location.search);
  const albumId = params.get("id");

  if (albumId) {
    const album = albums.find(album => album.id === albumId);

    if (album) {
      document.querySelector(".album-title").textContent = album.title;
      document.querySelector(".album-artist").textContent = album.artist;
      document.querySelector(".album-year").textContent = album.year;
      document.querySelector(".album-price").textContent = `${album.price} €`;
      document.querySelector(".album-cover").src = album.cover_url;
    } else {
      console.error("Album introuvable.");
    }
  } else {
    console.error("Aucun ID d'album trouvé dans l'URL.");
  }
});