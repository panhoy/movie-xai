document.addEventListener("DOMContentLoaded", () => {
  // Array of movie data
  const movies = [
    { title: "Movie 1", img: "photo/m3.joeg", link: "#" },
    { title: "Movie 2", img: "photo/m2.jpeg", link: "#" },
    { title: "Movie 3", img: "photo/m2.jpeg", link: "#" },
    { title: "Movie 4", img: "photo/m2.jpeg", link: "#" },
    { title: "Movie 5", img: "photo/m2.jpeg", link: "#" },
    { title: "Movie 6", img: "photo/m2.jpeg", link: "#" },
    { title: "Movie 7", img: "photo/m2.jpeg", link: "#" },
    { title: "Movie 8", img: "photo/m2.jpeg", link: "#" },
  ];

  // Select the movie grid
  const movieGrid = document.getElementById("movieGrid");

  // Populate the movie grid
  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    movieCard.innerHTML = `
      <a href="${movie.link}">
        <img src="${movie.img}" alt="${movie.title}">
      </a>
    `;
    movieGrid.appendChild(movieCard);
  });
});