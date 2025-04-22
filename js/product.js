document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const albumId = params.get("id");

  if (!albumId) {
    console.error("ID album manquant");
    return;
  }

  fetch(`https://637d41d916c1b892ebca9a5a.mockapi.io/api/discs/${albumId}`)
    .then(response => {
      if (!response.ok) throw new Error("Erreur API");
      return response.json();
    })
    .then(album => {
      document.getElementById("title").textContent = album.title;
      document.getElementById("cover").innerHTML = 
        `<img src="${album.cover_url || './images/default-cover.jpg'}" alt="${album.title}">`;
      document.getElementById("artist").textContent = album.artist;
      document.getElementById("year").textContent = album.year;
      document.getElementById("price").textContent = album.price;
    })
    .catch(error => console.error("Erreur:", error));
});