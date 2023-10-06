async function getMovies(id) {
  const res = await fetch(`http://localhost:3000/api/movie/${id}`, { cache: "no-store" });
  const results = await res.json();

  return results;
}

export default async function Page({ params }) {
  const movie = await getMovies(params.id);

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
      <div>
        <b>homepage</b> : <a href={movie.homepage}>{movie.homepage}</a>
      </div>
      <div>
        <b>genres</b> : {movie.genres.map((genre) => `${genre.name}`).join(", ")}
      </div>
      <div>
        <b>My Post</b> : {movie.original_title}
      </div>
      <div>
        <b>overview</b> : {movie.overview}
      </div>
    </div>
  );
}
