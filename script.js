document.getElementById("search-button").addEventListener("click", function () {
  const searchQuery = document.getElementById("search-input").value;
  fetchMovies(searchQuery);
});

async function fetchMovies(query) {
  const response = await fetch(
    `https://www.omdbapi.com/?s=${query}&apikey=488e427d`
  );
  const data = await response.json();
  displayMovies(data.Search);
}

function displayMovies(movies) {
  const movieContainer = document.getElementById("movie-container");
  movieContainer.innerHTML = "";

  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");

    movieElement.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <div class="movie-details">
                <h2 class="movie-title">${movie.Title}</h2>
                <p class="movie-year">${movie.Year}</p>
            </div>
        `;
    movieContainer.appendChild(movieElement);
  });
}
