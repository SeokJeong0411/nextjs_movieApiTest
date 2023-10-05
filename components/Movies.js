import Link from "next/link";
import styles from "./Movies.module.css";

async function getMovies() {
  const res = await fetch(`http://localhost:3000/api/movies`, { cache: "no-store" });
  const { results } = await res.json();

  return results;
}

export default async function Movies() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {!movies.length && <h4>Loading...</h4>}
      {movies.map((movie) => (
        <Link key={movie.id} href={`/movie/${movie.id}`}>
          <div className={styles.movie}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
}
